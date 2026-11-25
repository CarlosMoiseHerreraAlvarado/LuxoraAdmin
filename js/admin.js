(() => {
  "use strict";

  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));

  const SESSION_AUTH_KEY = "luxora_admin_unlocked_v1";

  const CAT_LABELS = {
    gourmand: "Dulces y Vainilla",
    fresh: "Frescos y Cítricos",
    woody: "Maderas y Cuero",
    floral: "Florales y Frutales",
    amber: "Ámbar e Intensos"
  };

  const SUBCAT_LABELS = {
    camisas: "Camisas y Lino",
    sacos: "Sacos y Blazers",
    playeras: "Playeras",
    hoodies: "Hoodies y Sudaderas",
    pantalones: "Pantalones",
    vestidos: "Vestidos",
    sneakers: "Tenis / Calzado",
    gorras: "Gorras y Accesorios"
  };

  const COLOR_HEX_GUESS = {
    negro: "#1a1a1a",
    blanco: "#f7f6f2",
    arena: "#d2c5b0",
    marfil: "#f3efe6",
    crema: "#ebe5d9",
    gris: "#808080",
    azul: "#1e2c42",
    marino: "#182232",
    verde: "#4e5b47",
    olivo: "#556046",
    rojo: "#8c1d24",
    borgona: "#541e24",
    vino: "#541e24",
    cafe: "#4a382e",
    beige: "#d8ccb8",
    celeste: "#cfdbe6"
  };

  function guessHex(colorName = "") {
    const clean = colorName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    for (const [k, hex] of Object.entries(COLOR_HEX_GUESS)) {
      if (clean.includes(k)) return hex;
    }
    return "#cfc7ba";
  }

  function resolvePreviewImgPath(img = "") {
    if (!img) return "";
    if (img.startsWith("data:") || img.startsWith("http://") || img.startsWith("https://")) {
      return img;
    }
    return img.replace(/^(\.\.\/|\.\/)/, "");
  }

  let toastTimer;
  function showToast(msg) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.hidden = true;
    }, 2800);
  }

  const norm = (s = "") =>
    String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  let allProducts = [];
  let currentFilteredIds = [];
  const selectedIds = new Set();
  let pendingDeleteIds = [];

  // ---------- Bloqueo de Seguridad por PIN ----------
  const lockOverlay = $("#adminLockOverlay");
  const lockForm = $("#adminLockForm");
  const lockPinInput = $("#adminPinInput");
  const lockError = $("#adminLockError");

  function checkPinLock() {
    if (sessionStorage.getItem(SESSION_AUTH_KEY) === "1") {
      lockOverlay.hidden = true;
    } else {
      lockOverlay.hidden = false;
      setTimeout(() => lockPinInput && lockPinInput.focus(), 100);
    }
  }

  lockForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const entered = lockPinInput.value.trim();
    const expected = (LuxoraAdminDB.getStoreSettings().adminPin || "1234").trim();
    if (entered === expected) {
      sessionStorage.setItem(SESSION_AUTH_KEY, "1");
      lockOverlay.hidden = true;
      lockError.hidden = true;
      lockPinInput.value = "";
      showToast("✓ Acceso Administrador concedido");
    } else {
      lockError.hidden = false;
      lockPinInput.select();
    }
  });

  $("#lockSessionBtn").addEventListener("click", () => {
    sessionStorage.removeItem(SESSION_AUTH_KEY);
    checkPinLock();
  });

  function updateConnectionBadge() {
    const pill = $("#dbStatusPill");
    const txt = $("#dbStatusText");
    if (LuxoraAdminDB.isFirebaseConnected()) {
      const cfg = LuxoraAdminDB.getActiveFirebaseConfig();
      pill.classList.add("is-cloud");
      txt.textContent = `Firebase Cloud (${cfg.projectId} · Plan Gratuito)`;
    } else {
      pill.classList.remove("is-cloud");
      txt.textContent = "Conectando a Firebase Firestore…";
    }
  }

  function updateStats() {
    allProducts = LuxoraAdminDB.getAllProducts();
    const validIdSet = new Set(allProducts.map((x) => x.id || x.uid));
    Array.from(selectedIds).forEach((id) => {
      if (!validIdSet.has(id)) selectedIds.delete(id);
    });

    const perfs = allProducts.filter((x) => x.dept === "perfumes");
    const apps = allProducts.filter((x) => x.dept === "apparel");
    const priced = allProducts.filter((x) => x.price && x.price > 0);
    const out = allProducts.filter((x) => x.status === "out_of_stock");

    $("#statTotal").textContent = allProducts.length;
    $("#statPerfumes").textContent = perfs.length;
    $("#statApparel").textContent = apps.length;
    $("#statPriced").textContent = priced.length;
    $("#statOut").textContent = out.length;

    const brands = [...new Set(allProducts.map((x) => x.brand).filter(Boolean))].sort();
    $("#brandSuggestions").innerHTML = brands
      .map((b) => `<option value="${b}"></option>`)
      .join("");
  }

  function updateBulkDeleteUI() {
    const btn = $("#deleteSelectedBtn");
    const txt = $("#deleteSelectedText");
    const selectAllCb = $("#selectAllCheckbox");
    const count = selectedIds.size;

    if (count > 0) {
      btn.hidden = false;
      txt.textContent =
        count === 1
          ? "Eliminar seleccionado (1)"
          : `Eliminar seleccionados (${count})`;
    } else {
      btn.hidden = true;
    }

    if (selectAllCb) {
      if (currentFilteredIds.length === 0) {
        selectAllCb.checked = false;
        selectAllCb.indeterminate = false;
      } else {
        const selectedVisible = currentFilteredIds.filter((id) =>
          selectedIds.has(id)
        ).length;
        selectAllCb.checked = selectedVisible === currentFilteredIds.length;
        selectAllCb.indeterminate =
          selectedVisible > 0 && selectedVisible < currentFilteredIds.length;
      }
    }
  }

  function renderTable() {
    updateStats();
    const q = norm($("#adminSearch").value.trim());
    const deptFilter = $("#adminDeptFilter").value;
    const statusFilter = $("#adminStatusFilter").value;

    const filtered = allProducts.filter((item) => {
      if (deptFilter !== "all" && item.dept !== deptFilter) return false;
      if (statusFilter === "available" && item.status !== "available") return false;
      if (statusFilter === "out_of_stock" && item.status !== "out_of_stock") return false;
      if (statusFilter === "priced" && (!item.price || item.price <= 0)) return false;
      if (statusFilter === "unpriced" && item.price && item.price > 0) return false;

      if (q) {
        const hay = norm(
          `${item.name} ${item.brand} ${item.notes || ""} ${item.description || ""} ${item.family || ""}`
        );
        if (!q.split(/\s+/).every((t) => hay.includes(t))) return false;
      }
      return true;
    });

    currentFilteredIds = filtered.map((item) => item.id || item.uid);

    const tbody = $("#adminTableBody");
    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align:center;padding:3rem 1.5rem;color:var(--muted)">
            ${
              allProducts.length === 0
                ? `<strong style="display:block;color:var(--ink);font-size:1rem;margin-bottom:0.35rem">Tu base de datos en Firebase está limpia (0 productos)</strong>
                   Haz clic en <strong>"+ Añadir Producto"</strong> arriba para subir tus propios perfumes o prendas uno por uno.`
                : "No se encontraron productos con ese filtro o búsqueda."
            }
          </td>
        </tr>`;
      updateBulkDeleteUI();
      return;
    }

    tbody.innerHTML = filtered
      .map((item) => {
        const id = item.id || item.uid;
        const isChecked = selectedIds.has(id);
        const isAvailable = item.status !== "out_of_stock" && item.status !== "hidden";
        const catText =
          item.dept === "perfumes"
            ? `Perfume · ${CAT_LABELS[item.cat] || item.family || "EDP"}`
            : `Ropa · ${SUBCAT_LABELS[item.subcat] || item.family || "Prenda"}`;

        const previewSrc = resolvePreviewImgPath(item.img);
        const thumbHtml = previewSrc
          ? `<img class="prod-cell__thumb" src="${previewSrc}" alt="${item.name}" loading="lazy" />`
          : `<div class="prod-cell__thumb" style="display:grid;place-items:center;font-size:0.65rem;color:var(--muted)">${
              item.dept === "apparel" ? "ROPA" : "FOTO"
            }</div>`;

        const badgeLabels = {
          bestseller: "★ Más Vendido",
          new: "Nuevo",
          promo: "En Oferta"
        };

        return `
          <tr data-row-id="${id}" class="${isChecked ? "is-selected" : ""}">
            <td style="text-align:center">
              <input
                type="checkbox"
                class="row-checkbox"
                data-select-id="${id}"
                ${isChecked ? "checked" : ""}
                aria-label="Seleccionar ${item.name}"
              />
            </td>
            <td>
              <div class="prod-cell">
                ${thumbHtml}
                <div>
                  <div class="prod-cell__brand">${item.brand}</div>
                  <div class="prod-cell__name">${item.name}</div>
                  <div class="prod-cell__desc" title="${item.description || ""}">${
          item.description || item.notes || ""
        }</div>
                </div>
              </div>
            </td>
            <td>
              <span style="font-size:0.78rem;font-weight:600">${catText}</span>
              <div style="font-size:0.7rem;color:var(--muted)">${
                item.dept === "perfumes"
                  ? `${item.conc || "EDP"} · ${item.sizeMl || "100 ml"}`
                  : `Tallas: ${(item.sizes || []).join(", ")}`
              }</div>
            </td>
            <td>
              <input
                type="number"
                class="quick-price-input"
                data-quick-price="${id}"
                value="${item.price && item.price > 0 ? item.price : ""}"
                placeholder="Cotizar"
                min="0"
                title="Escribe un precio y presiona Enter o sal del campo para guardar en Firebase"
              />
            </td>
            <td>
              <button
                type="button"
                class="status-toggle-btn ${isAvailable ? "is-available" : "is-out"}"
                data-toggle-status="${id}"
                title="Clic para cambiar entre Disponible y Agotado en Firebase"
              >
                ${
                  item.status === "hidden"
                    ? "Oculto"
                    : isAvailable
                    ? "✓ Disponible"
                    : "✕ Agotado"
                }
              </button>
            </td>
            <td>
              <span style="font-size:0.75rem;font-weight:700;color:var(--accent-dark)">
                ${badgeLabels[item.badge] || "—"}
              </span>
            </td>
            <td>
              <div class="row-actions">
                <button type="button" class="action-btn" data-edit-id="${id}">Editar</button>
                <button type="button" class="action-btn action-btn--danger" data-delete-id="${id}">Eliminar</button>
              </div>
            </td>
          </tr>`;
      })
      .join("");

    updateBulkDeleteUI();
  }

  // ---------- Modal de Confirmación "¿Estás seguro?" ----------
  const confirmModal = $("#confirmDeleteModal");

  function openConfirmDeleteModal(idsToDelete = []) {
    const validItems = idsToDelete
      .map((id) => allProducts.find((x) => (x.id || x.uid) === id))
      .filter(Boolean);

    if (!validItems.length) return;
    pendingDeleteIds = validItems.map((x) => x.id || x.uid);

    $("#confirmDeleteTitle").textContent =
      validItems.length === 1
        ? "¿Estás seguro de eliminar este producto?"
        : `¿Estás seguro de eliminar ${validItems.length} productos?`;

    $("#confirmDeleteMessage").textContent =
      validItems.length === 1
        ? "Vas a eliminar el siguiente producto del catálogo en tiempo real:"
        : `Has seleccionado ${validItems.length} productos para eliminarlos en lote:`;

    $("#confirmDeleteList").innerHTML = validItems
      .map((item) => `<li><strong>${item.name}</strong> — ${item.brand}</li>`)
      .join("");

    confirmModal.hidden = false;
  }

  function closeConfirmDeleteModal() {
    confirmModal.hidden = true;
    pendingDeleteIds = [];
  }

  $("#confirmDeleteYesBtn").addEventListener("click", async () => {
    if (!pendingDeleteIds.length) return;
    const ids = [...pendingDeleteIds];
    closeConfirmDeleteModal();

    try {
      showToast(
        ids.length === 1
          ? "Eliminando producto de Firebase…"
          : `Eliminando ${ids.length} productos de Firebase…`
      );
      await LuxoraAdminDB.deleteProductsBatch(ids);
      ids.forEach((id) => selectedIds.delete(id));
      renderTable();
      showToast(
        ids.length === 1
          ? "✓ Producto eliminado de Firebase"
          : `✓ ${ids.length} productos eliminados de Firebase`
      );
    } catch (err) {
      showToast("Error al eliminar: " + err.message);
    }
  });

  // Eventos de selección múltiple (Checkboxes)
  $("#selectAllCheckbox").addEventListener("change", (e) => {
    const checked = e.target.checked;
    currentFilteredIds.forEach((id) => {
      if (checked) selectedIds.add(id);
      else selectedIds.delete(id);
    });
    renderTable();
  });

  $("#deleteSelectedBtn").addEventListener("click", () => {
    openConfirmDeleteModal(Array.from(selectedIds));
  });

  // ---------- Formulario de Crear / Editar Producto ----------
  const productModal = $("#productModal");
  let currentUploadedDataUrl = "";

  function toggleDeptFields(dept) {
    const isPerf = dept === "perfumes";
    $("#perfumeFieldsGroup").hidden = !isPerf;
    $("#apparelFieldsGroup").hidden = isPerf;
    $("#fNotesLabel").textContent = isPerf
      ? "Notas Principales del Perfume (separadas por coma) *"
      : "Materiales / Tela de la Prenda (separados por coma) *";
    $("#fNotes").placeholder = isPerf
      ? "Ej. Vainilla, Lavanda, Madera de Cedro, Bergamota"
      : "Ej. Algodón Peinado 100%, Lino Italiano, Piel Vacuna";
  }

  $("#fDept").addEventListener("change", (e) => {
    toggleDeptFields(e.target.value);
  });

  function updateImgPreview(src) {
    const box = $("#fImgPreview");
    if (src) {
      box.innerHTML = `<img src="${resolvePreviewImgPath(src)}" alt="Vista previa" />`;
    } else {
      box.innerHTML = `<span style="font-size:0.7rem;color:var(--muted)">Sin foto</span>`;
    }
  }

  $("#fImgFile").addEventListener("change", async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      showToast("Optimizando imagen para Firebase gratuito...");
      const dataUrl = await LuxoraAdminDB.compressImageFile(file, 600, 0.82);
      currentUploadedDataUrl = dataUrl;
      $("#fImgUrl").value = "";
      updateImgPreview(dataUrl);
      showToast("✓ Imagen optimizada lista para subir");
    } catch (err) {
      showToast("Error al procesar la imagen");
    }
  });

  $("#fImgUrl").addEventListener("input", (e) => {
    currentUploadedDataUrl = "";
    updateImgPreview(e.target.value.trim());
  });

  $("#genAutoDescBtn").addEventListener("click", () => {
    const dept = $("#fDept").value;
    const dummy = {
      dept,
      name: $("#fName").value.trim() || "este producto",
      brand: $("#fBrand").value.trim() || "Luxora",
      g: $("#fGender").value,
      cat: $("#fCat").value,
      conc: $("#fConc").value.trim() || "Eau de Parfum",
      line: $("#fLine").value,
      notes: $("#fNotes").value.trim() || "ingredientes selectos"
    };
    $("#fDescription").value = LuxoraAdminDB.buildCommercialDescription(dummy);
    showToast("✓ Descripción comercial redactada");
  });

  function openProductModal(item = null) {
    $("#productForm").reset();
    currentUploadedDataUrl = "";

    if (item) {
      $("#prodModalTitle").textContent = `Editar: ${item.name}`;
      $("#fId").value = item.id || item.uid;
      $("#fDept").value = item.dept || "perfumes";
      $("#fStatus").value = item.status || "available";
      $("#fBadge").value = item.badge || "";
      $("#fName").value = item.name || "";
      $("#fBrand").value = item.brand || "";
      $("#fPrice").value = item.price && item.price > 0 ? item.price : "";
      $("#fOldPrice").value = item.oldPrice && item.oldPrice > 0 ? item.oldPrice : "";
      $("#fGender").value = item.g || "u";
      $("#fNotes").value = item.notes || "";
      $("#fDescription").value = item.description || "";

      if (item.dept === "apparel") {
        $("#fLine").value = item.line || "formal";
        $("#fSubcat").value = item.subcat || "camisas";
        $("#fFit").value = item.fit || "Regular Fit";
        $("#fSizes").value = (item.sizes || ["S", "M", "L", "XL"]).join(", ");
        $("#fColors").value = (item.colors || []).map((c) => c.name).join(", ");
      } else {
        $("#fCat").value = item.cat || "amber";
        $("#fTier").value = item.tier || "designer";
        $("#fConc").value = item.conc || "Eau de Parfum";
        $("#fSizeMl").value = item.sizeMl || "100 ml";
      }

      if (item.img && item.img.startsWith("data:")) {
        currentUploadedDataUrl = item.img;
        $("#fImgUrl").value = "";
      } else {
        $("#fImgUrl").value = item.img || "";
      }
      updateImgPreview(item.img || "");
      toggleDeptFields(item.dept || "perfumes");
    } else {
      $("#prodModalTitle").textContent = "Subir Nuevo Producto a Firebase";
      $("#fId").value = "";
      $("#fDept").value = "perfumes";
      $("#fConc").value = "Eau de Parfum";
      $("#fSizeMl").value = "100 ml";
      $("#fFit").value = "Regular Fit";
      $("#fSizes").value = "S, M, L, XL";
      $("#fColors").value = "Negro, Blanco, Arena";
      updateImgPreview("");
      toggleDeptFields("perfumes");
    }

    productModal.hidden = false;
  }

  function closeProductModal() {
    productModal.hidden = true;
  }

  $("#productForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const dept = $("#fDept").value;
    const isPerf = dept === "perfumes";
    const imgVal = currentUploadedDataUrl || $("#fImgUrl").value.trim();

    const payload = {
      id: $("#fId").value || undefined,
      dept,
      status: $("#fStatus").value,
      badge: $("#fBadge").value,
      name: $("#fName").value.trim(),
      brand: $("#fBrand").value.trim(),
      price: $("#fPrice").value,
      oldPrice: $("#fOldPrice").value,
      g: $("#fGender").value,
      notes: $("#fNotes").value.trim(),
      description: $("#fDescription").value.trim(),
      img: imgVal
    };

    if (isPerf) {
      payload.cat = $("#fCat").value;
      payload.tier = $("#fTier").value;
      payload.conc = $("#fConc").value.trim() || "Eau de Parfum";
      payload.sizeMl = $("#fSizeMl").value.trim() || "100 ml";
      payload.family = CAT_LABELS[payload.cat] || "Aroma Exclusivo";
    } else {
      payload.line = $("#fLine").value;
      payload.subcat = $("#fSubcat").value;
      payload.fit = $("#fFit").value.trim() || "Regular Fit";
      payload.family = SUBCAT_LABELS[payload.subcat] || "Ropa & Moda";
      payload.sizes = $("#fSizes")
        .value.split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      const colorNames = $("#fColors")
        .value.split(",")
        .map((c) => c.trim())
        .filter(Boolean);
      payload.colors = colorNames.length
        ? colorNames.map((name) => ({ name, hex: guessHex(name) }))
        : [{ name: "Negro", hex: "#1a1a1a" }];
    }

    try {
      showToast("Subiendo producto a Firebase Firestore…");
      await LuxoraAdminDB.saveProduct(payload);
      closeProductModal();
      renderTable();
      showToast(`✓ "${payload.name}" publicado en Firebase`);
    } catch (err) {
      showToast("Error al guardar en Firebase: " + err.message);
    }
  });

  // ---------- Eventos en la Tabla ----------
  $("#adminTableBody").addEventListener("change", async (e) => {
    const selectCb = e.target.closest("[data-select-id]");
    if (selectCb) {
      const id = selectCb.dataset.selectId;
      if (selectCb.checked) selectedIds.add(id);
      else selectedIds.delete(id);
      const row = selectCb.closest("tr");
      if (row) row.classList.toggle("is-selected", selectCb.checked);
      updateBulkDeleteUI();
      return;
    }

    const priceInput = e.target.closest("[data-quick-price]");
    if (priceInput) {
      const id = priceInput.dataset.quickPrice;
      const item = allProducts.find((x) => (x.id || x.uid) === id);
      if (!item) return;
      try {
        await LuxoraAdminDB.saveProduct({
          ...item,
          price: priceInput.value
        });
        showToast(`✓ Precio actualizado en Firebase para "${item.name}"`);
      } catch (err) {
        showToast("Error actualizando precio: " + err.message);
      }
    }
  });

  $("#adminTableBody").addEventListener("click", async (e) => {
    const toggleBtn = e.target.closest("[data-toggle-status]");
    if (toggleBtn) {
      const id = toggleBtn.dataset.toggleStatus;
      const item = allProducts.find((x) => (x.id || x.uid) === id);
      if (!item) return;
      const nextStatus = item.status === "available" ? "out_of_stock" : "available";
      try {
        await LuxoraAdminDB.saveProduct({ ...item, status: nextStatus });
        showToast(
          `✓ "${item.name}" marcado como ${
            nextStatus === "available" ? "Disponible" : "Agotado"
          }`
        );
      } catch (err) {
        showToast("Error al cambiar estado: " + err.message);
      }
      return;
    }

    const editBtn = e.target.closest("[data-edit-id]");
    if (editBtn) {
      const id = editBtn.dataset.editId;
      const item = allProducts.find((x) => (x.id || x.uid) === id);
      if (item) openProductModal(item);
      return;
    }

    const delBtn = e.target.closest("[data-delete-id]");
    if (delBtn) {
      const id = delBtn.dataset.deleteId;
      openConfirmDeleteModal([id]);
    }
  });

  // ---------- Modal de Configuración de la Tienda ----------
  const settingsModal = $("#settingsModal");
  $("#openSettingsModalBtn").addEventListener("click", () => {
    const s = LuxoraAdminDB.getStoreSettings();
    $("#sWhatsapp").value = s.whatsapp || "";
    $("#sStoreName").value = s.storeName || "LUXORA";
    $("#sTagline").value = s.storeTagline || "";
    $("#sAnnouncement").value = s.announcement || "";
    $("#sAdminPin").value = s.adminPin || "1234";
    settingsModal.hidden = false;
  });

  $("#settingsForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      await LuxoraAdminDB.saveStoreSettings({
        whatsapp: $("#sWhatsapp").value.trim(),
        storeName: $("#sStoreName").value.trim(),
        storeTagline: $("#sTagline").value.trim(),
        announcement: $("#sAnnouncement").value.trim(),
        adminPin: $("#sAdminPin").value.trim() || "1234"
      });
      settingsModal.hidden = true;
      showToast("✓ Configuración sincronizada en Firebase");
    } catch (err) {
      showToast("Error guardando configuración: " + err.message);
    }
  });

  $("#clearAllCloudBtn").addEventListener("click", () => {
    settingsModal.hidden = true;
    const allIds = allProducts.map((x) => x.id || x.uid);
    if (!allIds.length) {
      showToast("La base de datos ya está vacía (0 productos).");
      return;
    }
    openConfirmDeleteModal(allIds);
  });

  $("#adminSearch").addEventListener("input", renderTable);
  $("#adminDeptFilter").addEventListener("change", renderTable);
  $("#adminStatusFilter").addEventListener("change", renderTable);
  $("#newProductBtn").addEventListener("click", () => openProductModal(null));
  $("#newProductBtn2").addEventListener("click", () => openProductModal(null));

  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-close-prod-modal]")) closeProductModal();
    if (e.target.closest("[data-close-settings-modal]")) settingsModal.hidden = true;
    if (e.target.closest("[data-close-confirm-modal]")) closeConfirmDeleteModal();
  });

  // Suscripción a cambios en tiempo real de Firestore
  LuxoraAdminDB.onChange(() => {
    updateConnectionBadge();
    renderTable();
  });

  checkPinLock();
  renderTable();
  LuxoraAdminDB.init().then(() => {
    updateConnectionBadge();
    renderTable();
  });
})();
