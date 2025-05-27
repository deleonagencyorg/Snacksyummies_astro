// Sistema de internacionalización simple
import esCommon from '../../public/locales/es/common.json';
import enCommon from '../../public/locales/en/common.json';
import esRecipes from '../../public/locales/es/recipes.json';
import esNews from '../../public/locales/es/news.json';
import esProducts from '../../public/locales/es/products.json';
import enRecipes from '../../public/locales/en/recipes.json';
import enNews from '../../public/locales/en/news.json';
import enProducts from '../../public/locales/en/products.json';

// Tipos para las traducciones
export type Locale = 'es' | 'en';
export type TranslationKey = string;

// Estructura de traducciones
const translations = {
  es: {
    common: esCommon,
    recipes: esRecipes,
    news: esNews,
    products: esProducts
  },
  en: {
    common: enCommon,
    recipes: enRecipes,
    news: enNews,
    products: enProducts
  }
};

// Almacena el idioma actual (por defecto español)
let currentLocale: Locale = 'es';

// Inicializa el idioma desde localStorage, navegador o por defecto 'es'
function detectInitialLocale(): Locale {
  if (typeof window !== 'undefined') {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && savedLocale in translations) {
      return savedLocale;
    }
    const browserLang = navigator.language.split('-')[0] as Locale;
    if (browserLang in translations) {
      return browserLang;
    }
  }
  // SSR: aquí se podría leer de cookie/URL en el futuro
  return 'es';
}
currentLocale = detectInitialLocale();

/**
 * Obtiene una traducción
 * @param key Clave de traducción (puede incluir puntos para acceder a objetos anidados)
 * @param options Opciones adicionales
 * @returns Texto traducido
 */
export function t(key: TranslationKey, options?: { locale?: Locale, namespace?: string }): any {
  const locale = options?.locale || currentLocale;
  const namespace = options?.namespace || 'common';
  
  // Dividir la clave por puntos para acceder a objetos anidados
  const keys = key.split('.');
  
  try {
    // @ts-ignore - Accedemos dinámicamente a las traducciones
    let result = translations[locale][namespace];
    
    // Navegar por el objeto de traducciones siguiendo las claves
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // Si no se encuentra la clave, devolver la clave original
        return key;
      }
    }
    
    // Si el resultado es un string, número o booleano, devolverlo como string.
    // Si es un objeto o array, devolverlo tal cual.
    if (typeof result === 'string' || typeof result === 'number' || typeof result === 'boolean') {
      return String(result);
    } else if (result !== undefined && result !== null) {
      return result; // Devuelve el objeto/array directamente
    }
    
    // Fallback si no se encuentra la clave o el resultado es inesperado
    return key;
  } catch (error) {
    console.error(`Translation error for key: '${key}' in namespace '${namespace}' for locale '${locale}'`, error);
    return key;
  }
}

/**
 * Cambia el idioma actual
 * @param locale Nuevo idioma
 */
export function setLocale(locale: Locale): void {
  if (locale in translations) {
    if (locale !== currentLocale) {
      currentLocale = locale;
      if (typeof window !== 'undefined') {
        localStorage.setItem('locale', locale);
        window.dispatchEvent(new CustomEvent('localeChanged', { detail: { locale } }));
      }
    }
  }

    currentLocale = locale;
    // Guardar preferencia en localStorage si estamos en el navegador
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale);
      // Disparar un evento personalizado para notificar el cambio de idioma
      window.dispatchEvent(new CustomEvent('localeChanged', { detail: { locale } }));
    }
  }


/**
 * Obtiene el idioma actual
 * @returns Código de idioma actual
 */
export function getLocale(): Locale {
  return currentLocale;
}

// Sincronizar entre pestañas
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key === 'locale') {
      const newLocale = event.newValue as Locale;
      if (newLocale && newLocale in translations && newLocale !== currentLocale) {
        currentLocale = newLocale;
        window.location.reload();
      }
    }
  });
}

export default {
  t,
  setLocale,
  getLocale
};
