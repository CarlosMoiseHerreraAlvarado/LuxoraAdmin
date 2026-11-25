/* ============================================================
   MOTOR DE BASE DE DATOS — LUXORA ADMIN APP (LECTURA Y ESCRITURA)
   ------------------------------------------------------------
   - Conectado directamente a Firebase Firestore (`luxora-perfumes-store`)
   - Plan Spark 100% Gratuito ($0 costo, sin Firebase Storage de pago)
   - Las imágenes subidas se comprimen en el navegador (~40 KB) y se
     almacenan directo en el documento de Firestore.
   - Cero datos quemados por defecto: muestra únicamente lo que existe
     en Firebase Firestore en tiempo real.
   ============================================================ */

(function (global) {
  "use strict";

  const DEFAULT_FIREBASE_CONFIG = {
    apiKey: "AIzaSyBoCYCajWDkTT2xbE7RkbsJTV4YzsKqrtA",
    authDomain: "luxora-perfumes-store.firebaseapp.com",
    projectId: "luxora-perfumes-store",
    storageBucket: "luxora-perfumes-store.firebasestorage.app",
    messagingSenderId: "112729514188",
    appId: "1:112729514188:web:ca6ded7db92cc48c112269"
  };

  let firestoreDb = null;
  let firebaseConnected = false;
  let cloudProducts = [];
  let storeSettings = {
    whatsapp: "15715809800",
    storeName: "LUXORA",
    storeTagline: "Perfumería Original & Moda Exclusiva",
    announcement:
      "Perfumes 100% Originales · Ropa Formal & Streetwear · Pide directo por WhatsApp",
    city: "Envíos seguros · Atención personalizada",
    adminPin: "1234"
  };
  let changeListeners = [];
  let unsubProducts = null;
  let unsubSettings = null;

  function notifyListeners(reason) {
    changeListeners.forEach((cb) => {
      try {
        cb(reason);
      } catch (_) {}
    });
  }

  function buildCommercialDescription(p) {
    if (p.description && p.description.trim()) return p.description.trim();

    if (p.dept === "apparel" || p.line) {
      const styleTxt =
        p.line === "formal"
          ? "Prenda de corte elegante e impecable caída, ideal para eventos, oficina o un look casual elevado."
          : "Prenda urbana de alto gramaje con corte cómodo y moderno, pensada para uso diario con estilo.";
      const notesTxt = p.notes ? ` Confeccionada con ${p.notes.toLowerCase()}.` : "";
      return `${styleTxt}${notesTxt} Disponible en varias tallas y tonos.`;
    }

    const genderTxt =
      p.g === "h"
        ? "para hombre"
        : p.g === "m"
        ? "para mujer"
        : "unisex (para hombre y mujer)";

    const catDesc = {
      amber: "Un aroma cálido, elegante y seductor con excelente fijación y presencia. Ideal para salidas nocturnas, citas o climas templados a fríos.",
      woody: "Fragancia con carácter, sofisticada y elegante donde destacan las maderas finas. Perfecta para dejar huella en reuniones, eventos o uso diario.",
      floral: "Aroma luminoso y envolvente con flores frescas y un fondo suave que dura horas en la piel. Ideal para el día a día, oficina o eventos especiales.",
      fresh: "Perfume limpio, fresco y revitalizante que proyecta pulcritud y energía desde el primer spray. Excelente para uso diario, calor, oficina o gimnasio.",
      gourmand: "Aroma dulce, adictivo y sumamente halagado con notas cálidas que llaman la atención al instante. Ideal para fiestas, citas o noches especiales."
    };

    const base = catDesc[p.cat] || catDesc.amber;
    const notesPart = p.notes ? ` Sus notas principales combinan ${p.notes}.` : "";
    return `Perfume ${genderTxt} de la casa ${p.brand || "Luxora"} (${p.conc || "Eau de Parfum"}). ${base}${notesPart}`;
  }

  function getActiveFirebaseConfig() {
    return DEFAULT_FIREBASE_CONFIG;
  }

  async function init() {
    const fbConfig = getActiveFirebaseConfig();
    try {
      const { initializeApp, getApps, getApp } = await import(
        "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"
      );
      const { getFirestore, collection, doc, onSnapshot } = await import(
        "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
      );

      const app = getApps().length ? getApp() : initializeApp(fbConfig);
      firestoreDb = getFirestore(app);

      if (unsubProducts) unsubProducts();
      if (unsubSettings) unsubSettings();

      unsubSettings = onSnapshot(
        doc(firestoreDb, "settings", "store"),
        (snap) => {
          if (snap.exists()) {
            storeSettings = { ...storeSettings, ...snap.data() };
            notifyListeners("settings");
          }
        },
        (err) => console.warn("Aviso settings Firestore:", err)
      );

      await new Promise((resolve) => {
        let first = true;
        unsubProducts = onSnapshot(
          collection(firestoreDb, "products"),
          (snapshot) => {
            const items = [];
            snapshot.forEach((d) => {
              const data = d.data();
              items.push({ ...data, id: d.id, uid: d.id });
            });
            items.sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));
            cloudProducts = items;
            firebaseConnected = true;
            notifyListeners("firebase_realtime");
            if (first) {
              first = false;
              resolve();
            }
          },
          (err) => {
            console.error("Error listener Firestore:", err);
            firebaseConnected = false;
            if (first) {
              first = false;
              resolve();
            }
          }
        );
      });

      return {
        mode: "firebase",
        projectId: fbConfig.projectId,
        count: cloudProducts.length
      };
    } catch (err) {
      console.error("Error conectando con Firebase:", err);
      firebaseConnected = false;
      return { mode: "error", error: err.message, count: 0 };
    }
  }

  function getAllProducts() {
    return cloudProducts;
  }

  function getStoreSettings() {
    return storeSettings;
  }

  async function saveStoreSettings(newSettings) {
    if (!firebaseConnected || !firestoreDb) {
      throw new Error("No hay conexión activa con Firebase Firestore.");
    }
    const merged = {
      ...storeSettings,
      ...newSettings,
      storeName: (newSettings.storeName || storeSettings.storeName || "LUXORA").trim()
    };
    const { doc, setDoc } = await import(
      "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
    );
    await setDoc(doc(firestoreDb, "settings", "store"), merged, { merge: true });
    storeSettings = merged;
    notifyListeners("settings");
    return merged;
  }

  async function saveProduct(productData) {
    if (!firebaseConnected || !firestoreDb) {
      throw new Error("No hay conexión activa con Firebase Firestore.");
    }
    const id =
      productData.id ||
      productData.uid ||
      `${productData.dept === "apparel" ? "app" : "perf"}-${Date.now()}`;

    const existing = cloudProducts.find((x) => (x.id || x.uid) === id) || {};

    const cleanPrice =
      productData.price !== "" &&
      productData.price !== null &&
      productData.price !== undefined &&
      !isNaN(Number(productData.price)) &&
      Number(productData.price) > 0
        ? Number(productData.price)
        : null;

    const cleanOldPrice =
      productData.oldPrice !== "" &&
      productData.oldPrice !== null &&
      productData.oldPrice !== undefined &&
      !isNaN(Number(productData.oldPrice)) &&
      Number(productData.oldPrice) > 0
        ? Number(productData.oldPrice)
        : null;

    const record = {
      ...existing,
      ...productData,
      id,
      uid: id,
      dept: productData.dept === "apparel" ? "apparel" : "perfumes",
      name: String(productData.name || "").trim(),
      brand: String(productData.brand || "").trim(),
      price: cleanPrice,
      oldPrice: cleanOldPrice,
      order: existing.order ?? cloudProducts.length,
      updatedAt: Date.now()
    };

    if (!record.description || !record.description.trim()) {
      record.description = buildCommercialDescription(record);
    }

    const { doc, setDoc } = await import(
      "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
    );
    await setDoc(doc(firestoreDb, "products", id), record);
    return record;
  }

  async function deleteProduct(id) {
    if (!firebaseConnected || !firestoreDb) {
      throw new Error("No hay conexión activa con Firebase Firestore.");
    }
    const { doc, deleteDoc } = await import(
      "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
    );
    await deleteDoc(doc(firestoreDb, "products", id));
    return true;
  }

  async function clearAllProductsInFirebase() {
    if (!firebaseConnected || !firestoreDb) {
      throw new Error("No hay conexión activa con Firebase Firestore.");
    }
    const { doc, writeBatch } = await import(
      "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
    );
    const items = [...cloudProducts];
    const chunkSize = 400;
    for (let i = 0; i < items.length; i += chunkSize) {
      const batch = writeBatch(firestoreDb);
      items.slice(i, i + chunkSize).forEach((item) => {
        batch.delete(doc(firestoreDb, "products", item.id || item.uid));
      });
      await batch.commit();
    }
    return items.length;
  }

  async function importSeedCatalogToFirebase() {
    if (!firebaseConnected || !firestoreDb) {
      throw new Error("No hay conexión activa con Firebase Firestore.");
    }
    if (typeof PRODUCTS === "undefined" && typeof APPAREL_PRODUCTS === "undefined") {
      throw new Error("El archivo de catálogo semilla no está disponible.");
    }

    const perfSeed = (typeof PRODUCTS !== "undefined" ? PRODUCTS : []).map((p, idx) => {
      const id = `perf-${idx}`;
      return {
        id,
        uid: id,
        dept: "perfumes",
        brand: p.brand || "Marca",
        name: p.name || "Perfume",
        notes: p.notes || "",
        g: p.g || "u",
        tier: p.tier || "designer",
        cat: p.cat || "amber",
        family: p.family || "Aroma Exclusivo",
        conc: p.conc || "Eau de Parfum",
        sizeMl: p.sizeMl || "100 ml",
        img: p.img || "",
        price: typeof p.price === "number" ? p.price : null,
        oldPrice: typeof p.oldPrice === "number" ? p.oldPrice : null,
        status: "available",
        badge: p.badge || "",
        description: buildCommercialDescription({ ...p, dept: "perfumes" }),
        order: idx,
        updatedAt: Date.now()
      };
    });

    const appSeed = (typeof APPAREL_PRODUCTS !== "undefined" ? APPAREL_PRODUCTS : []).map(
      (p, idx) => {
        const id = `app-${idx}`;
        return {
          id,
          uid: id,
          dept: "apparel",
          brand: p.brand || "Luxora Studio",
          name: p.name || "Prenda",
          notes: p.notes || "",
          g: p.g || "u",
          line: p.line || "streetwear",
          subcat: p.subcat || "playeras",
          family: p.family || "Ropa & Moda",
          fit: p.fit || "Regular Fit",
          sizes: Array.isArray(p.sizes) && p.sizes.length ? p.sizes : ["S", "M", "L", "XL"],
          colors:
            Array.isArray(p.colors) && p.colors.length
              ? p.colors
              : [{ name: "Negro", hex: "#1b1b1b" }],
          silhouette: p.silhouette || "tee",
          img: p.img || "",
          price: typeof p.price === "number" ? p.price : null,
          oldPrice: typeof p.oldPrice === "number" ? p.oldPrice : null,
          status: "available",
          badge: "",
          description: buildCommercialDescription({ ...p, dept: "apparel" }),
          order: 1000 + idx,
          updatedAt: Date.now()
        };
      }
    );

    const allSeed = [...perfSeed, ...appSeed];
    const { doc, writeBatch } = await import(
      "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
    );
    const chunkSize = 400;
    for (let i = 0; i < allSeed.length; i += chunkSize) {
      const batch = writeBatch(firestoreDb);
      allSeed.slice(i, i + chunkSize).forEach((item) => {
        batch.set(doc(firestoreDb, "products", item.id), item);
      });
      await batch.commit();
    }
    return allSeed.length;
  }

  // Comprime cualquier foto subida desde el celular o PC (~35-55 KB) para guardarla gratis en Firestore
  function compressImageFile(file, maxDim = 600, quality = 0.82) {
    return new Promise((resolve, reject) => {
      if (!file) return reject(new Error("No se seleccionó archivo"));
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = maxDim;
          canvas.height = maxDim;
          const ctx = canvas.getContext("2d");
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, maxDim, maxDim);

          const pad = Math.round(maxDim * 0.06);
          const avail = maxDim - pad * 2;
          const scale = Math.min(avail / img.width, avail / img.height);
          const nw = Math.round(img.width * scale);
          const nh = Math.round(img.height * scale);
          const x = Math.round((maxDim - nw) / 2);
          const y = Math.round((maxDim - nh) / 2);

          ctx.drawImage(img, x, y, nw, nh);
          resolve(canvas.toDataURL("image/jpeg", quality));
        };
        img.onerror = () => reject(new Error("Imagen inválida"));
        img.src = ev.target.result;
      };
      reader.onerror = () => reject(new Error("No se pudo leer la imagen"));
      reader.readAsDataURL(file);
    });
  }

  function onChange(cb) {
    if (typeof cb === "function") changeListeners.push(cb);
  }

  function isFirebaseConnected() {
    return firebaseConnected;
  }

  global.LuxoraAdminDB = {
    init,
    getAllProducts,
    saveProduct,
    deleteProduct,
    clearAllProductsInFirebase,
    importSeedCatalogToFirebase,
    getStoreSettings,
    saveStoreSettings,
    getActiveFirebaseConfig,
    compressImageFile,
    onChange,
    isFirebaseConnected,
    buildCommercialDescription
  };
})(window);
