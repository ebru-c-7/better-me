import React from "react";
import * as Localization from "expo-localization";
import i18n from "i18n-js";

i18n.translations = {
  en: {
    Home: "Home",
    Overview: "Overview",
    "New Goal": "New Goal",
    Detail: "Detail",
    Search: "Search",
  },
  tr: {
    Home: "Ana Sayfa",
    Overview: "Genel Bakış",
    "New Goal": "Yeni Hedef",
    Detail: "Detay",
    Search: "Ara",
  },
};

i18n.locale = Localization.locale;
i18n.locale = "tr";
i18n.fallbacks = true;

export default i18n;
