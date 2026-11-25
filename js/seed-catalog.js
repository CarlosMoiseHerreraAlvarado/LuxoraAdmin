/* ============================================================
   CATÁLOGO OFICIAL LUXORA PERFUMES (95 FRAGANCIAS CURADAS)
   g: "h" = Pour Homme (Hombre)
      "m" = Pour Femme (Mujer)
      "u" = Unisex / Niche
   tier: "niche" = Alta Perfumería Nicho
         "designer" = Firma de Diseñador
   cat: "woody" | "amber" | "floral" | "fresh" | "gourmand"
   ============================================================ */
const PRODUCTS = [
  // ---------- Maison Francis Kurkdjian ----------
  {
    brand: "Maison Francis Kurkdjian",
    name: "Baccarat Rouge 540",
    notes: "Azafrán, Jazmín, Ámbar Gris",
    g: "u",
    tier: "niche",
    cat: "amber",
    family: "Ámbar Floral Luminoso",
    conc: "Eau de Parfum",
    img: "img/products/mfk_baccarat_rouge_540.jpg"
  },
  {
    brand: "Maison Francis Kurkdjian",
    name: "Baccarat Rouge 540 Extrait de Parfum",
    notes: "Almizcle, Azafrán, Ámbar",
    g: "u",
    tier: "niche",
    cat: "amber",
    family: "Ámbar Especiado Intenso",
    conc: "Extrait de Parfum",
    img: "img/products/mfk_baccarat_extrait.jpg"
  },
  {
    brand: "Maison Francis Kurkdjian",
    name: "Oud Silk Mood",
    notes: "Agarwood (Oud), Rosa, Benjuí",
    g: "u",
    tier: "niche",
    cat: "woody",
    family: "Oud Floral Oriental",
    conc: "Eau de Parfum",
    img: "img/products/mfk_oud_silk_mood.jpg"
  },
  {
    brand: "Maison Francis Kurkdjian",
    name: "Grand Soir",
    notes: "Ámbar, Vainilla, Benjuí",
    g: "u",
    tier: "niche",
    cat: "amber",
    family: "Ámbar Vainilla Resinoso",
    conc: "Eau de Parfum",
    img: "img/products/mfk_grand_soir.jpg"
  },

  // ---------- Xerjoff / Hugo Boss ----------
  {
    brand: "Xerjoff",
    name: "Erba Pura",
    notes: "Frutas Mediterráneas, Cítricos, Vainilla, Almizcle Blanco",
    g: "u",
    tier: "niche",
    cat: "fresh",
    family: "Cítrico Frutal Almizclado",
    conc: "Eau de Parfum",
    img: "img/products/xerjoff_erba_pura.jpg"
  },
  {
    brand: "Hugo Boss",
    name: "Boss Bottled",
    notes: "Manzana, Canela, Geranio, Sándalo, Vetiver",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Amaderado Especiado",
    conc: "Eau de Toilette",
    img: "img/products/boss_bottled.jpg"
  },

  // ---------- YSL ----------
  {
    brand: "YSL",
    name: "Libre",
    notes: "Lavanda, Azahar, Vainilla, Almizcle",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Lavanda Ámbar",
    conc: "Eau de Parfum",
    img: "img/products/ysl_libre.jpg"
  },
  {
    brand: "YSL",
    name: "Y Men",
    notes: "Manzana, Jengibre, Salvia, Madera de Cedro",
    g: "h",
    tier: "designer",
    cat: "fresh",
    family: "Aromático Fougère Fresco",
    conc: "Eau de Parfum",
    img: "img/products/ysl_y_men.jpg"
  },
  {
    brand: "YSL",
    name: "MYSLF",
    notes: "Bergamota, Azahar, Madera de Cedro, Almizcle",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Amaderado Floral Cítrico",
    conc: "Eau de Parfum",
    img: "img/products/ysl_myslf.jpg"
  },
  {
    brand: "YSL",
    name: "Mon Paris",
    notes: "Fresa, Datura, Peonía, Pachulí, Almizcle Blanco",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Chipre Frutal Floral",
    conc: "Eau de Parfum",
    img: "img/products/ysl_mon_paris.jpg"
  },
  {
    brand: "YSL",
    name: "Y Men Le Elixir",
    notes: "Manzana, Geranio, Incienso, Madera Oscura",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Amaderado Incienso Aromático",
    conc: "Elixir",
    img: "img/products/ysl_y_men_elixir.jpg"
  },
  {
    brand: "YSL",
    name: "MYSLF Le Parfum",
    notes: "Bergamota, Flor de Azahar, Madera de Cedro, Almizcle",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Amaderado Floral Intenso",
    conc: "Le Parfum",
    img: "img/products/ysl_myslf_le_parfum.jpg"
  },

  // ---------- Carolina Herrera ----------
  {
    brand: "Carolina Herrera",
    name: "Good Girl Fearless Queen",
    notes: "Frutos Rojos, Ylang-Ylang, Vainilla, Pachulí",
    g: "m",
    tier: "designer",
    cat: "gourmand",
    family: "Floral Frutal Gourmand",
    conc: "Eau de Parfum",
    img: "img/products/ch_good_girl_fearless.jpg"
  },
  {
    brand: "Carolina Herrera",
    name: "Good Girl Untamed Queen",
    notes: "Bergamota, Jazmín, Cuero, Ámbar",
    g: "m",
    tier: "designer",
    cat: "amber",
    family: "Ámbar Cuero Floral",
    conc: "Eau de Parfum",
    img: "img/products/ch_good_girl_untamed.jpg"
  },
  {
    brand: "Carolina Herrera",
    name: "Good Girl Blush",
    notes: "Bergamota, Peonía, Vainilla, Almizcle",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Empolvado Vainilla",
    conc: "Eau de Parfum",
    img: "img/products/ch_good_girl_blush.jpg"
  },
  {
    brand: "Carolina Herrera",
    name: "Bad Boy Cobalt",
    notes: "Pimienta Rosa, Lavanda, Trufa, Madera de Roble",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Amaderado Aromático Especiado",
    conc: "Eau de Parfum",
    img: "img/products/ch_bad_boy_cobalt.jpg"
  },
  {
    brand: "Carolina Herrera",
    name: "Bad Boy",
    notes: "Pimienta Negra, Bergamota, Cacao, Madera de Cedro",
    g: "h",
    tier: "designer",
    cat: "amber",
    family: "Oriental Especiado Cacao",
    conc: "Eau de Toilette",
    img: "img/products/ch_bad_boy.jpg"
  },
  {
    brand: "Carolina Herrera",
    name: "La Bomba",
    notes: "Frutas Exóticas, Flor de Naranjo, Vainilla, Ámbar",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Exótico Ámbar",
    conc: "Eau de Parfum",
    img: "img/products/ch_la_bomba.jpg"
  },
  {
    brand: "Carolina Herrera",
    name: "212 Men",
    notes: "Lavanda, Jengibre, Salvia, Ámbar",
    g: "h",
    tier: "designer",
    cat: "fresh",
    family: "Aromático Verde Almizclado",
    conc: "Eau de Toilette",
    img: "img/products/ch_212_men.jpg"
  },

  // ---------- Dior ----------
  {
    brand: "Dior",
    name: "Sauvage",
    notes: "Bergamota, Pimienta, Ámbar, Pachulí",
    g: "h",
    tier: "designer",
    cat: "fresh",
    family: "Cítrico Especiado Ambroxan",
    conc: "Eau de Parfum",
    img: "img/products/dior_sauvage.jpg"
  },
  {
    brand: "Dior",
    name: "Sauvage Elixir",
    notes: "Canela, Lavanda, Madera, Regaliz",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Aromático Especiado Intenso",
    conc: "Elixir",
    img: "img/products/dior_sauvage_elixir.jpg"
  },
  {
    brand: "Dior",
    name: "Miss Dior Eau de Parfum",
    notes: "Rosa, Peonía, Lirio de los Valles",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Bouquet Aterciopelado",
    conc: "Eau de Parfum",
    img: "img/products/dior_miss_dior_edp.jpg"
  },
  {
    brand: "Dior",
    name: "Miss Dior Blooming Bouquet",
    notes: "Rosa, Peonía, Lirio de los Valles",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Fresco Delicado",
    conc: "Eau de Toilette",
    img: "img/products/dior_miss_dior.jpg"
  },
  {
    brand: "Dior",
    name: "J'adore",
    notes: "Jazmín, Ylang-Ylang, Rosa, Durazno",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Solar Frutal",
    conc: "Eau de Parfum",
    img: "img/products/dior_jadore.jpg"
  },
  {
    brand: "Dior",
    name: "Fahrenheit",
    notes: "Mandarina, Violeta, Cuero, Vetiver",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Cuero Amaderado Violeta",
    conc: "Eau de Toilette",
    img: "img/products/dior_fahrenheit.jpg"
  },
  {
    brand: "Dior",
    name: "Hypnotic Poison",
    notes: "Almendra, Jazmín, Vainilla, Haba Tonka",
    g: "m",
    tier: "designer",
    cat: "gourmand",
    family: "Oriental Vainilla Almendra",
    conc: "Eau de Toilette",
    img: "img/products/dior_hypnotic_poison.jpg"
  },

  // ---------- Chanel ----------
  {
    brand: "Chanel",
    name: "Bleu de Chanel Parfum",
    notes: "Limón, Menta, Madera de Cedro, Sándalo",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Amaderado Aromático Noble",
    conc: "Parfum",
    img: "img/products/chanel_bleu.jpg"
  },
  {
    brand: "Chanel",
    name: "Coco Mademoiselle",
    notes: "Naranja, Rosa, Pachulí, Vetiver",
    g: "m",
    tier: "designer",
    cat: "amber",
    family: "Ámbar Floral Fresco",
    conc: "Eau de Parfum",
    img: "img/products/chanel_coco_mademoiselle.jpg"
  },
  {
    brand: "Chanel",
    name: "N°5 Chanel Paris Red Edition",
    notes: "Aldehídos, Rosa, Ylang-Ylang, Vainilla",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Aldehídico Icónico",
    conc: "Eau de Parfum",
    img: "img/products/chanel_n5_paris.jpg"
  },
  {
    brand: "Chanel",
    name: "Coco Noir",
    notes: "Pomelo, Rosa, Pachulí, Incienso",
    g: "m",
    tier: "designer",
    cat: "amber",
    family: "Ámbar Amaderado Nocturno",
    conc: "Eau de Parfum",
    img: "img/products/chanel_coco_noir.jpg"
  },
  {
    brand: "Chanel",
    name: "Chance Eau Vive",
    notes: "Cítricos, Jazmín, Cedro, Almizcle",
    g: "m",
    tier: "designer",
    cat: "fresh",
    family: "Cítrico Floral Vibrante",
    conc: "Eau de Toilette",
    img: "img/products/chanel_chance_eau_vive.jpg"
  },
  {
    brand: "Chanel",
    name: "Chance Eau Fraîche",
    notes: "Cidra, Jazmín, Madera de Teca",
    g: "m",
    tier: "designer",
    cat: "fresh",
    family: "Chipre Cítrico Luminoso",
    conc: "Eau de Toilette",
    img: "img/products/chanel_chance_eau_fraiche.jpg"
  },
  {
    brand: "Chanel",
    name: "Chance Eau Tendre",
    notes: "Frambuesa, Rosa, Violeta, Almizcle Blanco",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Frutal Suave",
    conc: "Eau de Parfum",
    img: "img/products/chanel_chance_eau_tendre.jpg"
  },
  {
    brand: "Chanel",
    name: "N°5 L'Eau",
    notes: "Cítricos, Aldehídos, Madera de Cedro",
    g: "m",
    tier: "designer",
    cat: "fresh",
    family: "Floral Aldehídico Cristalino",
    conc: "Eau de Toilette",
    img: "img/products/chanel_n5_leau.jpg"
  },
  {
    brand: "Chanel",
    name: "N°5 Eau de Parfum",
    notes: "Rosa, Ylang-Ylang, Vainilla, Sándalo",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Aldehídico Clásico",
    conc: "Eau de Parfum",
    img: "img/products/chanel_n5_edp.jpg"
  },

  // ---------- Armani ----------
  {
    brand: "Armani",
    name: "Stronger With You Absolutely",
    notes: "Ron, Vainilla, Cedro, Pachulí",
    g: "h",
    tier: "designer",
    cat: "gourmand",
    family: "Ámbar Licoroso Vainilla",
    conc: "Parfum",
    img: "img/products/armani_swy_absolutely.jpg"
  },
  {
    brand: "Armani",
    name: "Stronger With You Intensely",
    notes: "Vainilla, Ámbar, Pimienta, Madera",
    g: "h",
    tier: "designer",
    cat: "gourmand",
    family: "Oriental Especiado Toffee",
    conc: "Eau de Parfum",
    img: "img/products/armani_swy_intensely.jpg"
  },
  {
    brand: "Armani",
    name: "Acqua di Giò",
    notes: "Bergamota, Neroli, Pachulí, Cedro",
    g: "h",
    tier: "designer",
    cat: "fresh",
    family: "Acuático Cítrico Mediterráneo",
    conc: "Eau de Toilette",
    img: "img/products/armani_acqua_di_gio.jpg"
  },
  {
    brand: "Armani",
    name: "Armani Code Parfum",
    notes: "Bergamota, Iris, Haba Tonka, Cuero",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Amaderado Iris Aromático",
    conc: "Parfum",
    img: "img/products/armani_code_parfum.jpg"
  },
  {
    brand: "Armani",
    name: "My Way",
    notes: "Bergamota, Flor de Azahar, Tuberosa, Vainilla",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Blanco Nardo",
    conc: "Eau de Parfum",
    img: "img/products/armani_my_way.jpg"
  },
  {
    brand: "Armani",
    name: "Sì Passione",
    notes: "Grosellas Negras, Rosa, Pachulí, Vainilla",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Frutal Apasionado",
    conc: "Eau de Parfum",
    img: "img/products/armani_si_passione.jpg"
  },
  {
    brand: "Armani",
    name: "Acqua di Giò Profondo",
    notes: "Mandarina, Romero, Pachulí, Incienso",
    g: "h",
    tier: "designer",
    cat: "fresh",
    family: "Aromático Marino Mineral",
    conc: "Eau de Parfum",
    img: "img/products/armani_adg_profondo.jpg"
  },

  // ---------- Le Labo / Louis Vuitton ----------
  {
    brand: "Le Labo",
    name: "Santal 33",
    notes: "Sándalo, Cuero, Cardamomo",
    g: "u",
    tier: "niche",
    cat: "woody",
    family: "Amaderado Sándalo Cuero",
    conc: "Eau de Parfum",
    img: "img/products/lelabo_santal_33.jpg"
  },
  {
    brand: "Louis Vuitton",
    name: "Imagination",
    notes: "Cítricos, Jengibre, Madera de Oud, Benzoín",
    g: "h",
    tier: "niche",
    cat: "fresh",
    family: "Cítrico Ámbar Té Negro",
    conc: "Eau de Parfum",
    img: "img/products/lv_imagination.jpg"
  },
  {
    brand: "Louis Vuitton",
    name: "L'Ombre Nomade",
    notes: "Oud, Incienso, Madera de Oud, Benzoín",
    g: "u",
    tier: "niche",
    cat: "woody",
    family: "Oud Ahumado Incienso",
    conc: "Eau de Parfum",
    img: "img/products/lv_lombre_nomade.jpg"
  },
  {
    brand: "Louis Vuitton",
    name: "Météore",
    notes: "Mandarina, Pimienta, Vetiver, Ambroxan",
    g: "h",
    tier: "niche",
    cat: "fresh",
    family: "Cítrico Especiado Fresco",
    conc: "Eau de Parfum",
    img: "img/products/lv_meteore.jpg"
  },

  // ---------- Valentino Mujer ----------
  {
    brand: "Valentino",
    name: "Donna Born in Roma Coral Fantasy",
    notes: "Manzana Roja, Tabaco, Jazmín",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Frutal Luminoso",
    conc: "Eau de Parfum",
    img: "img/products/val_donna_coral_fantasy.jpg"
  },
  {
    brand: "Valentino",
    name: "Donna Born in Roma Intense",
    notes: "Vainilla, Jazmín, Benzoín",
    g: "m",
    tier: "designer",
    cat: "amber",
    family: "Ámbar Vainilla Floral",
    conc: "Eau de Parfum Intense",
    img: "img/products/val_donna_born_in_roma_intense.jpg"
  },
  {
    brand: "Valentino",
    name: "Donna Pink PP",
    notes: "Neroli, Vainilla, Almizcle Blanco",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Azahar Vainilla",
    conc: "Eau de Parfum",
    img: "img/products/val_donna_pink_pp.jpg"
  },
  {
    brand: "Valentino",
    name: "Donna Born in Roma Eau de Parfum",
    notes: "Bergamota, Iris, Pachulí, Vainilla Bourbon",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Amaderado Couture",
    conc: "Eau de Parfum",
    img: "img/products/val_donna_edp.jpg"
  },
  {
    brand: "Valentino",
    name: "Donna Born in Roma The Gold",
    notes: "Canela, Vainilla, Tabaco, Mandarina",
    g: "m",
    tier: "designer",
    cat: "amber",
    family: "Ámbar Solar Especiado",
    conc: "Eau de Parfum",
    img: "img/products/val_donna_the_gold.jpg"
  },
  {
    brand: "Valentino",
    name: "Donna",
    notes: "Iris, Rosa, Pachulí",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Chipre Floral Clásico",
    conc: "Eau de Parfum",
    img: "img/products/val_donna_classic.jpg"
  },
  {
    brand: "Valentino",
    name: "Donna Born in Roma Purple Melancholia",
    notes: "Violeta, Jazmín, Vainilla",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Violeta Aterciopelado",
    conc: "Eau de Parfum",
    img: "img/products/val_donna_purple_melancholia.jpg"
  },

  // ---------- Valentino Hombre ----------
  {
    brand: "Valentino",
    name: "Uomo Born in Roma Intense",
    notes: "Vainilla, Salvia, Lavandín, Vetiver",
    g: "h",
    tier: "designer",
    cat: "amber",
    family: "Ámbar Fougère Vainilla",
    conc: "Eau de Parfum Intense",
    img: "img/products/val_uomo_born_in_roma_intense.jpg"
  },
  {
    brand: "Valentino",
    name: "Uomo Born in Roma",
    notes: "Cuero, Salvia, Pimienta Negra, Vetiver",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Amaderado Vetiver Mineral",
    conc: "Eau de Toilette",
    img: "img/products/val_uomo_born_in_roma.jpg"
  },
  {
    brand: "Valentino",
    name: "Uomo Born in Roma The Gold",
    notes: "Canela, Vainilla, Tabaco, Ámbar",
    g: "h",
    tier: "designer",
    cat: "amber",
    family: "Oriental Especiado Cálido",
    conc: "Eau de Toilette",
    img: "img/products/val_uomo_the_gold.jpg"
  },
  {
    brand: "Valentino",
    name: "Uomo Born in Roma Coral Fantasy",
    notes: "Manzana Roja, Tabaco, Salvia",
    g: "h",
    tier: "designer",
    cat: "amber",
    family: "Aromático Frutal Tabaco",
    conc: "Eau de Toilette",
    img: "img/products/val_uomo_coral_fantasy.jpg"
  },
  {
    brand: "Valentino",
    name: "Uomo Rockstud Noir",
    notes: "Cuero, Vainilla, Pachulí",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Cuero Oriental Intenso",
    conc: "Eau de Parfum",
    img: "img/products/val_uomo_rockstud_noir.jpg"
  },
  {
    brand: "Valentino",
    name: "Uomo Born in Roma Green Stravaganza",
    notes: "Té Verde, Limoncello, Petitgrain, Café",
    g: "h",
    tier: "designer",
    cat: "fresh",
    family: "Fougère Cítrico Aromático",
    conc: "Eau de Toilette",
    img: "img/products/val_uomo_green_stravaganza.jpg"
  },
  {
    brand: "Valentino",
    name: "Uomo Born in Roma Purple Melancholia",
    notes: "Violeta, Salvia, Iris",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Aromático Iris Amaderado",
    conc: "Eau de Toilette",
    img: "img/products/val_uomo_purple_melancholia.jpg"
  },

  // ---------- Creed ----------
  {
    brand: "Creed",
    name: "Absolu Aventus",
    notes: "Piña, Bergamota, Pachulí, Especias",
    g: "h",
    tier: "niche",
    cat: "woody",
    family: "Chipre Frutal Amaderado",
    conc: "Eau de Parfum",
    img: "img/products/creed_absolu_aventus.jpg"
  },
  {
    brand: "Creed",
    name: "Silver Mountain Water",
    notes: "Bergamota, Té Verde, Almizcle, Grosella Negra",
    g: "u",
    tier: "niche",
    cat: "fresh",
    family: "Aromático Cítrico Alpino",
    conc: "Eau de Parfum",
    img: "img/products/creed_silver_mountain.jpg"
  },
  {
    brand: "Creed",
    name: "Millésime Impérial",
    notes: "Bergamota, Iris, Notas Marinas, Almizcle",
    g: "u",
    tier: "niche",
    cat: "fresh",
    family: "Cítrico Marino Dorado",
    conc: "Eau de Parfum",
    img: "img/products/creed_millesime_imperial.jpg"
  },
  {
    brand: "Creed",
    name: "Aventus",
    notes: "Piña, Bergamota, Pachulí, Abedul",
    g: "h",
    tier: "niche",
    cat: "woody",
    family: "Chipre Frutal Ahumado",
    conc: "Eau de Parfum",
    img: "img/products/creed_aventus.jpg"
  },
  {
    brand: "Creed",
    name: "Himalaya",
    notes: "Pomelo, Sándalo, Almizcle, Cedro",
    g: "h",
    tier: "niche",
    cat: "woody",
    family: "Amaderado Fresco Mineral",
    conc: "Eau de Parfum",
    img: "img/products/creed_himalaya.jpg"
  },

  // ---------- Parfums de Marly ----------
  {
    brand: "Parfums de Marly",
    name: "Layton",
    notes: "Manzana, Lavanda, Vainilla, Cardamomo",
    g: "h",
    tier: "niche",
    cat: "amber",
    family: "Ámbar Especiado Aromático",
    conc: "Eau de Parfum",
    img: "img/products/pdm_layton.jpg"
  },
  {
    brand: "Parfums de Marly",
    name: "Althaïr",
    notes: "Canela, Vainilla Bourbon, Almizcle, Flor de Azahar",
    g: "h",
    tier: "niche",
    cat: "gourmand",
    family: "Vainilla Amaderado Especiado",
    conc: "Eau de Parfum",
    img: "img/products/pdm_althair.jpg"
  },
  {
    brand: "Parfums de Marly",
    name: "Delina Exclusif",
    notes: "Rosa Turca, Lichi, Pachulí, Vainilla",
    g: "m",
    tier: "niche",
    cat: "floral",
    family: "Floral Rosa Oriental",
    conc: "Parfum",
    img: "img/products/pdm_delina.jpg"
  },
  {
    brand: "Parfums de Marly",
    name: "Pegasus",
    notes: "Almendra Amarga, Vainilla, Ámbar, Sándalo",
    g: "h",
    tier: "niche",
    cat: "amber",
    family: "Fougère Oriental Almendrado",
    conc: "Eau de Parfum",
    img: "img/products/pdm_pegasus.jpg"
  },

  // ---------- Burberry ----------
  {
    brand: "Burberry",
    name: "Her Elixir de Parfum",
    notes: "Fresa, Flor de Azahar, Ámbar, Vainilla",
    g: "m",
    tier: "designer",
    cat: "gourmand",
    family: "Frutal Gourmand Cremoso",
    conc: "Elixir de Parfum",
    img: "img/products/burberry_her_elixir.jpg"
  },
  {
    brand: "Burberry",
    name: "Her Eau de Parfum",
    notes: "Frutos Rojos, Violeta, Ámbar, Almizcle",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Frutal Británico",
    conc: "Eau de Parfum",
    img: "img/products/burberry_her_edp.jpg"
  },
  {
    brand: "Burberry",
    name: "Her Eau de Toilette",
    notes: "Pera, Lichi, Almizcle, Peonía",
    g: "m",
    tier: "designer",
    cat: "fresh",
    family: "Floral Frutal Fresco",
    conc: "Eau de Toilette",
    img: "img/products/burberry_her_edt.jpg"
  },
  {
    brand: "Burberry",
    name: "Goddess",
    notes: "Trío de Vainillas, Lavanda, Cacao",
    g: "m",
    tier: "designer",
    cat: "gourmand",
    family: "Gourmand Aromático Vainilla",
    conc: "Eau de Parfum",
    img: "img/products/burberry_goddess.jpg"
  },

  // ---------- Jean Paul Gaultier ----------
  {
    brand: "Jean Paul Gaultier",
    name: "Le Male Elixir",
    notes: "Lavanda, Miel, Tabaco, Vainilla, Haba Tonka",
    g: "h",
    tier: "designer",
    cat: "gourmand",
    family: "Ámbar Aromático Miel Tabaco",
    conc: "Parfum Elixir",
    img: "img/products/jpg_le_male_elixir.jpg"
  },
  {
    brand: "Jean Paul Gaultier",
    name: "Scandal Pour Homme",
    notes: "Caramelo, Salvia, Haba Tonka, Vetiver",
    g: "h",
    tier: "designer",
    cat: "gourmand",
    family: "Ámbar Amaderado Caramelo",
    conc: "Eau de Toilette",
    img: "img/products/jpg_scandal.jpg"
  },
  {
    brand: "Jean Paul Gaultier",
    name: "Le Beau Le Parfum",
    notes: "Cardamomo, Iris, Vainilla, Lavanda, Madera de Coco",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Amaderado Ámbar Tropical",
    conc: "Eau de Parfum Intense",
    img: "img/products/jpg_le_parfum.jpg"
  },
  {
    brand: "Jean Paul Gaultier",
    name: "Gaultier Divine",
    notes: "Lirio, Merengue, Bergamota, Sal Marina",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Gourmand Marino",
    conc: "Eau de Parfum",
    img: "img/products/jpg_gaultier_divine.jpg"
  },
  {
    brand: "Jean Paul Gaultier",
    name: "Le Beau Paradise Garden",
    notes: "Bergamota, Coco, Haba Tonka, Madera de Sándalo",
    g: "h",
    tier: "designer",
    cat: "fresh",
    family: "Verde Acuático Amaderado",
    conc: "Eau de Parfum",
    img: "img/products/jpg_le_beau.jpg"
  },
  {
    brand: "Jean Paul Gaultier",
    name: "Ultra Male",
    notes: "Pera, Lavanda, Vainilla Negra, Canela",
    g: "h",
    tier: "designer",
    cat: "gourmand",
    family: "Fougère Oriental Intenso",
    conc: "Eau de Toilette Intense",
    img: "img/products/jpg_ultra_male.jpg"
  },
  {
    brand: "Jean Paul Gaultier",
    name: "Le Male Le Parfum",
    notes: "Cardamomo, Lavanda, Vainilla, Iris, Madera",
    g: "h",
    tier: "designer",
    cat: "amber",
    family: "Oriental Especiado Elegante",
    conc: "Eau de Parfum Intense",
    img: "img/products/jpg_le_male_le_parfum.jpg"
  },

  // ---------- Gucci ----------
  {
    brand: "Gucci",
    name: "Flora Gorgeous Jasmine",
    notes: "Jazmín Grandiflorum, Mandarina, Sándalo, Benzoín",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Blanco Radiante",
    conc: "Eau de Parfum",
    img: "img/products/gucci_gorgeous_jasmine.jpg"
  },
  {
    brand: "Gucci",
    name: "Flora Gorgeous Orchid",
    notes: "Orquídea de Vainilla, Notas Ozónicas, Sándalo",
    g: "m",
    tier: "designer",
    cat: "gourmand",
    family: "Floral Gourmand Ozónico",
    conc: "Eau de Parfum",
    img: "img/products/gucci_gorgeous_orchid.jpg"
  },
  {
    brand: "Gucci",
    name: "Bloom",
    notes: "Jazmín, Tuberosa, Rangún Creeper, Madreselva",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Blanco Jardín",
    conc: "Eau de Parfum",
    img: "img/products/gucci_bloom.jpg"
  },
  {
    brand: "Gucci",
    name: "Flora Gorgeous Gardenia",
    notes: "Gardenia Blanca, Flor de Pera, Azúcar Moreno, Pachulí",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Frutal Delicado",
    conc: "Eau de Parfum",
    img: "img/products/gucci_gorgeous_gardenia.jpg"
  },

  // ---------- Kilian / Azzaro ----------
  {
    brand: "Kilian",
    name: "Angels' Share",
    notes: "Coñac, Canela, Haba Tonka, Roble, Sándalo, Praliné",
    g: "u",
    tier: "niche",
    cat: "gourmand",
    family: "Ámbar Vainilla Licoroso",
    conc: "Eau de Parfum",
    img: "img/products/kilian_angels_share.jpg"
  },
  {
    brand: "Azzaro",
    name: "The Most Wanted Intense",
    notes: "Cardamomo, Caramelo Toffee, Madera de Ámbar, Vetiver",
    g: "h",
    tier: "designer",
    cat: "gourmand",
    family: "Oriental Especiado Gourmand",
    conc: "Eau de Parfum Intense",
    img: "img/products/azzaro_the_most_wanted.jpg"
  },
  {
    brand: "Azzaro",
    name: "Wanted by Night",
    notes: "Canela, Madera de Ámbar, Tabaco, Mandarina, Incienso",
    g: "h",
    tier: "designer",
    cat: "amber",
    family: "Amaderado Especiado Nocturno",
    conc: "Eau de Parfum",
    img: "img/products/azzaro_wanted_by_night.jpg"
  },
  {
    brand: "Azzaro",
    name: "The Most Wanted Parfum",
    notes: "Jengibre Rojo, Vainilla Bourbon, Maderas Incandescentes",
    g: "h",
    tier: "designer",
    cat: "amber",
    family: "Fougère Ámbar Especiado",
    conc: "Parfum",
    img: "img/products/azzaro_wanted_parfum.jpg"
  },

  // ---------- Prada ----------
  {
    brand: "Prada",
    name: "Luna Rossa Ocean EDT",
    notes: "Bergamota, Iris, Salvia, Vetiver",
    g: "h",
    tier: "designer",
    cat: "fresh",
    family: "Aromático Fougère Marino",
    conc: "Eau de Toilette",
    img: "img/products/prada_ocean_edt.jpg"
  },
  {
    brand: "Prada",
    name: "Luna Rossa Ocean Eau de Parfum",
    notes: "Pomelo, Incienso, Vainilla, AmberXtreme",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Amaderado Ámbar Fougère",
    conc: "Eau de Parfum",
    img: "img/products/prada_ocean_le_parfum.jpg"
  },
  {
    brand: "Prada",
    name: "Paradigme",
    notes: "Bergamota, Geranio, Ámbar, Haba Tonka",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Aromático Amaderado Verde",
    conc: "Eau de Parfum",
    img: "img/products/prada_paradigme.jpg"
  },
  {
    brand: "Prada",
    name: "Paradoxe",
    notes: "Pera, Flor de Azahar, Ámbar, Almizcle Blanco",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Ámbar Luminoso",
    conc: "Eau de Parfum",
    img: "img/products/prada_paradoxe.jpg"
  },
  {
    brand: "Prada",
    name: "Paradoxe Intense",
    notes: "Jazmín, Musgo, Ámbar, Vainilla Bourbon",
    g: "m",
    tier: "designer",
    cat: "amber",
    family: "Floral Ámbar Musgoso",
    conc: "Eau de Parfum Intense",
    img: "img/products/prada_paradoxe_intense.jpg"
  },
  {
    brand: "Prada",
    name: "Luna Rossa Ocean Le Parfum",
    notes: "Azafrán, Pimienta Rosa, Ámbar, Incienso, Roble",
    g: "h",
    tier: "designer",
    cat: "amber",
    family: "Ámbar Fougère Especiado",
    conc: "Le Parfum",
    img: "img/products/prada_ocean_red.jpg"
  },

  // ---------- Dolce & Gabbana ----------
  {
    brand: "Dolce & Gabbana",
    name: "Devotion",
    notes: "Cítricos Confitados, Flor de Azahar, Vainilla de Madagascar",
    g: "m",
    tier: "designer",
    cat: "gourmand",
    family: "Gourmand Cítrico Vainilla",
    conc: "Eau de Parfum",
    img: "img/products/dg_devotion.jpg"
  },
  {
    brand: "Dolce & Gabbana",
    name: "Light Blue Pour Homme",
    notes: "Limón Siciliano, Romero, Madera de Pimienta, Pachulí",
    g: "h",
    tier: "designer",
    cat: "fresh",
    family: "Cítrico Aromático Mediterráneo",
    conc: "Eau de Toilette",
    img: "img/products/dg_light_blue_pour_homme.jpg"
  },
  {
    brand: "Dolce & Gabbana",
    name: "Light Blue Summer Vibes Pour Homme",
    notes: "Limón de Sicilia, Ciprés, Madera de Ámbar",
    g: "h",
    tier: "designer",
    cat: "fresh",
    family: "Cítrico Amaderado Edición Especial",
    conc: "Eau de Toilette",
    img: "img/products/dg_light_blue_edicion_especial.jpg"
  },
  {
    brand: "Dolce & Gabbana",
    name: "Light Blue Pour Femme",
    notes: "Manzana Granny Smith, Bambú, Cedro Siciliano",
    g: "m",
    tier: "designer",
    cat: "fresh",
    family: "Floral Frutal Fresco",
    conc: "Eau de Toilette",
    img: "img/products/dg_light_blue_pour_femme.jpg"
  },

  // ---------- Lancôme ----------
  {
    brand: "Lancôme",
    name: "La Vie Est Belle",
    notes: "Iris Pallida, Jazmín, Pachulí, Vainilla, Praliné",
    g: "m",
    tier: "designer",
    cat: "gourmand",
    family: "Floral Frutal Gourmand",
    conc: "Eau de Parfum",
    img: "img/products/lancome_la_vie_est_belle.jpg"
  },
  {
    brand: "Lancôme",
    name: "La Nuit Trésor Intense",
    notes: "Rosa Damascena, Cereza Negra, Leche de Almendras, Ámbar",
    g: "m",
    tier: "designer",
    cat: "gourmand",
    family: "Floral Frutal Ambarado",
    conc: "Eau de Parfum Intense",
    img: "img/products/lancome_tresor_intense.jpg"
  },

  // ---------- Tom Ford ----------
  {
    brand: "Tom Ford",
    name: "Tobacco Vanille",
    notes: "Hoja de Tabaco, Vainilla, Cacao, Especias Dulces",
    g: "u",
    tier: "niche",
    cat: "amber",
    family: "Oriental Especiado Tabaco",
    conc: "Eau de Parfum",
    img: "img/products/tf_tobacco_vanille.jpg"
  },
  {
    brand: "Tom Ford",
    name: "Cherry Smoke",
    notes: "Cereza Oscura, Azafrán, Humo, Cuero, Maderas",
    g: "u",
    tier: "niche",
    cat: "woody",
    family: "Cuero Frutal Ahumado",
    conc: "Eau de Parfum",
    img: "img/products/tf_cherry_smoke.jpg"
  },
  {
    brand: "Tom Ford",
    name: "Fucking Fabulous",
    notes: "Cuero, Almendra Amarga, Haba Tonka, Salvia, Vainilla",
    g: "u",
    tier: "niche",
    cat: "woody",
    family: "Cuero Aromático Almendrado",
    conc: "Eau de Parfum",
    img: "img/products/tf_fucking_fabulous.jpg"
  },
  {
    brand: "Tom Ford",
    name: "Eau d'Ombré Leather",
    notes: "Cuero, Cardamomo, Ámbar, Vainilla, Azafrán",
    g: "u",
    tier: "niche",
    cat: "woody",
    family: "Cuero Especiado Cálido",
    conc: "Eau de Toilette",
    img: "img/products/tf_ombre_leather.jpg"
  },
  {
    brand: "Tom Ford",
    name: "Oud Wood",
    notes: "Madera de Oud, Sándalo, Cardamomo, Pimienta, Vetiver",
    g: "u",
    tier: "niche",
    cat: "woody",
    family: "Amaderado Oud Exótico",
    conc: "Eau de Parfum",
    img: "img/products/tf_oud_wood.jpg"
  },
  {
    brand: "Tom Ford",
    name: "Rose Prick",
    notes: "Rosa de Mayo, Rosa Turca, Pimienta Sichuan, Pachulí",
    g: "u",
    tier: "niche",
    cat: "floral",
    family: "Chipre Floral Especiado",
    conc: "Eau de Parfum",
    img: "img/products/tf_rose_prick.jpg"
  },

  // ---------- Versace ----------
  {
    brand: "Versace",
    name: "Eros",
    notes: "Menta, Manzana Verde, Limón, Vainilla de Madagascar, Cedro",
    g: "h",
    tier: "designer",
    cat: "fresh",
    family: "Aromático Fougère Vibrante",
    conc: "Eau de Toilette",
    img: "img/products/versace_eros.jpg"
  },
  {
    brand: "Versace",
    name: "Bright Crystal",
    notes: "Granada, Yuzu, Peonía, Flor de Loto, Magnolia",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Frutal Cristalino",
    conc: "Eau de Toilette",
    img: "img/products/versace_bright_crystal.jpg"
  },
  {
    brand: "Versace",
    name: "Eros Flame",
    notes: "Mandarina, Pimienta Negra, Romero, Rosa, Vainilla",
    g: "h",
    tier: "designer",
    cat: "amber",
    family: "Amaderado Especiado Cítrico",
    conc: "Eau de Parfum",
    img: "img/products/versace_eros_flame.jpg"
  },
  {
    brand: "Versace",
    name: "Eros Energy",
    notes: "Limón Italiano, Mandarina Roja, Pimienta Rosa, Ámbar Blanco",
    g: "h",
    tier: "designer",
    cat: "fresh",
    family: "Cítrico Aromático Energizante",
    conc: "Eau de Parfum",
    img: "img/products/versace_eros_energy.jpg"
  },
  {
    brand: "Versace",
    name: "Crystal Noir",
    notes: "Gardenia, Peonía, Coco, Ámbar, Sándalo, Cardamomo",
    g: "m",
    tier: "designer",
    cat: "amber",
    family: "Oriental Floral Sensual",
    conc: "Eau de Toilette",
    img: "img/products/versace_crystal_noir.jpg"
  },

  // ---------- Paco Rabanne ----------
  {
    brand: "Paco Rabanne",
    name: "1 Million",
    notes: "Mandarina Roja, Canela, Rosa, Cuero, Ámbar",
    g: "h",
    tier: "designer",
    cat: "amber",
    family: "Amaderado Especiado Cuero",
    conc: "Eau de Toilette",
    img: "img/products/rabanne_1_million.jpg"
  },
  {
    brand: "Paco Rabanne",
    name: "1 Million Royal",
    notes: "Mandarina, Cardamomo, Lavanda, Salvia, Benzoín, Cedro",
    g: "h",
    tier: "designer",
    cat: "amber",
    family: "Ámbar Amaderado Aromático",
    conc: "Parfum",
    img: "img/products/rabanne_1_million_royal.jpg"
  },
  {
    brand: "Paco Rabanne",
    name: "Phantom",
    notes: "Lavanda Cremosa, Limón de Amalfi, Vainilla, Vetiver",
    g: "h",
    tier: "designer",
    cat: "fresh",
    family: "Aromático Cítrico Vainilla",
    conc: "Eau de Toilette",
    img: "img/products/rabanne_phantom.jpg"
  },
  {
    brand: "Paco Rabanne",
    name: "Invictus",
    notes: "Pomelo, Notas Marinas, Laurel, Madera de Guayaco",
    g: "h",
    tier: "designer",
    cat: "fresh",
    family: "Amaderado Acuático Fresco",
    conc: "Eau de Toilette",
    img: "img/products/rabanne_invictus.jpg"
  },
  {
    brand: "Paco Rabanne",
    name: "Invictus Parfum",
    notes: "Notas Marinas, Lavanda, Jabón Negro, Madera de Sándalo",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Acuático Amaderado Aromático",
    conc: "Parfum",
    img: "img/products/rabanne_invictus_parfum.jpg"
  },
  {
    brand: "Paco Rabanne",
    name: "Invictus Victory Elixir",
    notes: "Pimienta Negra, Lavanda, Incienso, Vainilla, Haba Tonka",
    g: "h",
    tier: "designer",
    cat: "amber",
    family: "Oriental Ámbar Especiado",
    conc: "Parfum Intense",
    img: "img/products/rabanne_invictus_victory_absolu.jpg"
  },
  {
    brand: "Paco Rabanne",
    name: "Million Gold",
    notes: "Mandarina, Sándalo Dorado, Madera de Cedro, Especias",
    g: "h",
    tier: "designer",
    cat: "woody",
    family: "Amaderado Especiado Adictivo",
    conc: "Eau de Parfum Intense",
    img: "img/products/rabanne_million_gold.jpg"
  },
  {
    brand: "Paco Rabanne",
    name: "Million Gold For Her",
    notes: "Rosa, Jazmín, Ylang-Ylang, Almizcle Mineral",
    g: "m",
    tier: "designer",
    cat: "floral",
    family: "Floral Blanco Almizclado",
    conc: "Eau de Parfum",
    img: "img/products/rabanne_million_gold_for_her.jpg"
  },
  {
    brand: "Paco Rabanne",
    name: "1 Million Elixir",
    notes: "Manzana, Davana, Rosa Damascena, Vainilla, Haba Tonka",
    g: "h",
    tier: "designer",
    cat: "gourmand",
    family: "Oriental Frutal Vainilla",
    conc: "Parfum Intense",
    img: "img/products/rabanne_1_million_elixir.jpg"
  }
];

/* ============================================================
   CATÁLOGO DE ROPA & MODA (APPAREL · SMART CASUAL & STREETWEAR)
   Para agregar tus propias fotos después, solo añade la propiedad:
   img: "img/products/mi_prenda.jpg"
   line: "formal" (Smart Casual & Sartorial) | "streetwear" (Urbano & Casual)
   subcat: "camisas" | "sacos" | "pantalones" | "vestidos" | "playeras" | "hoodies" | "sneakers" | "gorras"
   ============================================================ */
const APPAREL_PRODUCTS = [
  // ---------- LÍNEA FORMAL / SMART CASUAL ----------
  {
    brand: "Luxora Sartorial",
    name: "Blazer Estructurado Lino & Lana",
    notes: "Lino Italiano, Lana Fría, Solapa de Muesca, Forro Respirable",
    g: "h",
    line: "formal",
    subcat: "sacos",
    family: "Sacos & Blazers",
    fit: "Tailored Slim Fit",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Arena Marfil", hex: "#d8cfc2" },
      { name: "Obsidiana", hex: "#1c1b1a" },
      { name: "Azul Medianoche", hex: "#1e2836" }
    ],
    silhouette: "blazer"
  },
  {
    brand: "Luxora Sartorial",
    name: "Camisa Oxford Algodón Egipcio",
    notes: "Algodón Peinado 100%, Cuello Italiano, Botones de Nácar",
    g: "h",
    line: "formal",
    subcat: "camisas",
    family: "Camisas Smart Casual",
    fit: "Regular Tailored Fit",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Blanco Óptico", hex: "#f7f6f2" },
      { name: "Celeste Hielo", hex: "#cfdbe6" },
      { name: "Negro Carbón", hex: "#212121" }
    ],
    silhouette: "shirt"
  },
  {
    brand: "Luxora Sartorial",
    name: "Pantalón Sastre Pinzas Minimal",
    notes: "Gabardina Stretch Premium, Pinza Frontal, Caída Recta",
    g: "h",
    line: "formal",
    subcat: "pantalones",
    family: "Pantalones & Chinos",
    fit: "Relaxed Tapered Fit",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Taupe Piedra", hex: "#b7ab9a" },
      { name: "Negro Carbón", hex: "#1b1b1b" },
      { name: "Gris Marengo", hex: "#4a4b4d" }
    ],
    silhouette: "trousers"
  },
  {
    brand: "Luxora Atelier",
    name: "Vestido Midi Satinado Drapeado",
    notes: "Seda Sintética de Alto Gramaje, Escote Asimétrico, Caída Fluida",
    g: "m",
    line: "formal",
    subcat: "vestidos",
    family: "Vestidos & Conjuntos",
    fit: "Silueta Fluida Editorial",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Champagne Dorado", hex: "#dfd1bc" },
      { name: "Negro Noche", hex: "#171615" },
      { name: "Borgoña Profundo", hex: "#541e24" }
    ],
    silhouette: "dress"
  },
  {
    brand: "Luxora Atelier",
    name: "Blazer Oversize Cruzado Couture",
    notes: "Sarga Estructurada, Doble Botonadura, Hombro Definido",
    g: "m",
    line: "formal",
    subcat: "sacos",
    family: "Sacos & Blazers",
    fit: "Relaxed Couture Fit",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Marfil Alabastro", hex: "#EFECE6" },
      { name: "Espresso Oscuro", hex: "#2c221e" }
    ],
    silhouette: "blazer"
  },
  {
    brand: "Luxora Sartorial",
    name: "Guayabera / Camisa Lino Texturizado",
    notes: "Lino Puro Transpirable, Cuello Mao / Resort, Manga Larga",
    g: "h",
    line: "formal",
    subcat: "camisas",
    family: "Camisas Smart Casual",
    fit: "Resort Relaxed Fit",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Blanco Hueso", hex: "#f3efe6" },
      { name: "Verde Olivo", hex: "#545b47" },
      { name: "Arena", hex: "#cbbba4" }
    ],
    silhouette: "shirt"
  },

  // ---------- LÍNEA STREETWEAR / CASUAL URBANO ----------
  {
    brand: "Luxora Studio",
    name: "Heavyweight Boxy Tee 300 GSM",
    notes: "Algodón Orgánico 300g, Cuello Rib Alto, Hombro Caído",
    g: "u",
    line: "streetwear",
    subcat: "playeras",
    family: "Playeras Boxy & Oversize",
    fit: "Boxy Oversize Fit",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Washed Black", hex: "#262524" },
      { name: "Crema Crudo", hex: "#ebe5d9" },
      { name: "Gris Cemento", hex: "#8c8b88" }
    ],
    silhouette: "tee"
  },
  {
    brand: "Luxora Studio",
    name: "Hoodie Essential French Terry 480 GSM",
    notes: "French Terry Pesado Sin Felpa, Capucha Doble Capa, Bolsillo Canguro",
    g: "u",
    line: "streetwear",
    subcat: "hoodies",
    family: "Hoodies & Crewnecks",
    fit: "Drop-Shoulder Boxy Fit",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Obsidiana Lavado", hex: "#1f1e1d" },
      { name: "Arena Desierto", hex: "#cfc3b0" },
      { name: " Café Mocha", hex: "#4a3b32" }
    ],
    silhouette: "hoodie"
  },
  {
    brand: "Luxora Studio",
    name: "Sneaker Low-Top Cuero Grano Completo",
    notes: "Piel Vacuna Napolitana, Suela Margom Cosida, Plantilla Anatómica",
    g: "u",
    line: "streetwear",
    subcat: "sneakers",
    family: "Sneakers & Calzado",
    fit: "Horma Estándar (True to Size)",
    sizes: ["25 MX", "26 MX", "27 MX", "28 MX", "29 MX"],
    colors: [
      { name: "Blanco / Crema", hex: "#f4f1ea" },
      { name: "Monocromo Negro", hex: "#191919" },
      { name: "Blanco / Gamuza Taupe", hex: "#b8ae9e" }
    ],
    silhouette: "sneaker"
  },
  {
    brand: "Luxora Studio",
    name: "Pantalón Cargo Carpenter Urbano",
    notes: "Sarga de Algodón Resistente, Bolsillos Laterales Ocultos, Ajuste en Tobillo",
    g: "u",
    line: "streetwear",
    subcat: "pantalones",
    family: "Pantalones & Denim",
    fit: "Wide Straight Fit",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Negro Táctico", hex: "#1d1d1c" },
      { name: "Verde Salvia", hex: "#6a7062" },
      { name: "Caqui Arena", hex: "#b5a48b" }
    ],
    silhouette: "trousers"
  },
  {
    brand: "Luxora Studio",
    name: "Gorra Estructurada 6-Panel Gabardina",
    notes: "Algodón Cepillado, Bordado Tonal Minimalista, Hebilla Metálica",
    g: "u",
    line: "streetwear",
    subcat: "gorras",
    family: "Gorras & Accesorios",
    fit: "Unitalla Ajustable",
    sizes: ["Unitalla"],
    colors: [
      { name: "Negro Mate", hex: "#1b1a19" },
      { name: "Hueso / Crudo", hex: "#e8e2d5" },
      { name: "Azul Marino", hex: "#1b2638" }
    ],
    silhouette: "cap"
  },
  {
    brand: "Luxora Studio",
    name: "Graphic Minimal Tee Edición Atelier",
    notes: "Algodón Pima 260 GSM, Estampado Serigráfico de Alta Densidad",
    g: "u",
    line: "streetwear",
    subcat: "playeras",
    family: "Playeras Boxy & Oversize",
    fit: "Relaxed Fit",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Blanco Marfil", hex: "#f3f0e8" },
      { name: "Negro Carbón", hex: "#1e1d1c" }
    ],
    silhouette: "tee"
  }
];

