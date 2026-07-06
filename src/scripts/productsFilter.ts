// src/scripts/productsFilter.ts
// Módulo para gestionar el filtrado de productos por marca

// Variable global para almacenar cleanup functions
let cleanupFunctions: (() => void)[] = [];

export function initProductsFilter() {
  console.log('[PRODUCTS] 🚀 Inicializando filtro de productos');
  
  // Limpiar listeners anteriores si existen
  cleanupFunctions.forEach(cleanup => cleanup());
  cleanupFunctions = [];

  const productItems = document.querySelectorAll('.product-item');
  console.log('[PRODUCTS] 📦 Items encontrados:', productItems.length);

  if (!productItems || productItems.length === 0) {
    console.warn('[PRODUCTS] ⚠️ No se encontraron items para filtrar');
    return;
  }

  // Aplicar filtro de marca
  function applyBrandFilter(brand: string) {
    console.log('[PRODUCTS] 🔍 Aplicando filtro de marca:', brand);

    if (brand === 'all') {
      console.log('[PRODUCTS] ✅ Mostrando todos los productos');
      productItems.forEach((item) => {
        (item as HTMLElement).removeAttribute('data-brand-filtered');
        (item as HTMLElement).style.display = '';
      });
    } else {
      // Normalizar a minúsculas para comparación case-insensitive
      const normalizedBrand = brand.toLowerCase();
      let visibleCount = 0;
      
      productItems.forEach((item) => {
        const itemBrand = item.getAttribute('data-brand') || '';
        const itemBrandName = item.getAttribute('data-brand-name') || '';
        const normalizedItemBrand = itemBrand ? itemBrand.toLowerCase().trim() : '';
        const normalizedItemBrandName = itemBrandName ? itemBrandName.toLowerCase().trim() : '';
        const match = (
          normalizedItemBrand === normalizedBrand ||
          normalizedItemBrandName === normalizedBrand ||
          normalizedItemBrand.indexOf(normalizedBrand) !== -1 ||
          normalizedItemBrandName.indexOf(normalizedBrand) !== -1
        );

        if (match) {
          visibleCount++;
          (item as HTMLElement).removeAttribute('data-brand-filtered');
          (item as HTMLElement).style.display = '';
        } else {
          (item as HTMLElement).setAttribute('data-brand-filtered', 'true');
          (item as HTMLElement).style.display = 'none';
        }
      });
      
      console.log(`[PRODUCTS] ✅ Filtrado por "${brand}": ${visibleCount} productos visibles de ${productItems.length}`);
      if (visibleCount === 0) {
        console.warn(`[PRODUCTS] ⚠️ No se encontraron productos con data-brand="${brand}"`);
        console.log('[PRODUCTS] 📋 Primeros 5 data-brand:', 
          Array.from(productItems).slice(0, 5).map(p => p.getAttribute('data-brand'))
        );
      }
    }
  }

  // Listener para cambios de filtro desde Categories
  const handleBrandFilterChange = (event: Event) => {
    console.log('[PRODUCTS] 📡 Evento brandFilterChange recibido:', (event as CustomEvent).detail);
    const brand = (event as CustomEvent).detail && (event as CustomEvent).detail.brand ? (event as CustomEvent).detail.brand : 'all';
    try { sessionStorage.setItem('selectedBrand', brand); } catch {}
    applyBrandFilter(brand);
  };

  // Fallback: clicks directos en botones de categoría
  const handleCategoryClick = (e: Event) => {
    const target = e.target as HTMLElement;
    const btn = target && target.closest ? target.closest('.brand-filter-btn') as HTMLElement : null;
    if (!btn) return;
    const slug = btn.getAttribute('data-slug') || 'all';
    console.log('[PRODUCTS] 🖱️ Click fallback en botón de marca:', slug);
    e.preventDefault();
    const u = new URL(window.location.href);
    u.searchParams.set('brand', slug);
    history.pushState({}, '', u.toString());
    try { sessionStorage.setItem('selectedBrand', slug); } catch {}
    applyBrandFilter(slug);
    const event = new CustomEvent('brandFilterChange', { detail: { brand: slug } });
    document.dispatchEvent(event);
  };

  // Navegación del navegador
  const handlePopState = () => {
    const b = new URL(window.location.href).searchParams.get('brand') || 'all';
    applyBrandFilter(b);
  };

  // Registrar listeners
  document.addEventListener('brandFilterChange', handleBrandFilterChange);
  document.addEventListener('click', handleCategoryClick);
  window.addEventListener('popstate', handlePopState);

  // Aplicar filtro inicial desde URL o sessionStorage
  const urlBrand = new URL(window.location.href).searchParams.get('brand');
  let sessionBrand: string | null = null;
  try { sessionBrand = sessionStorage.getItem('selectedBrand'); } catch {}
  const initialBrand = urlBrand || sessionBrand || 'all';
  console.log('[PRODUCTS] 📍 Marca inicial:', { urlBrand, sessionBrand, initialBrand });
  applyBrandFilter(initialBrand);

  // Registrar cleanup functions
  cleanupFunctions.push(() => {
    document.removeEventListener('brandFilterChange', handleBrandFilterChange);
    document.removeEventListener('click', handleCategoryClick);
    window.removeEventListener('popstate', handlePopState);
    console.log('[PRODUCTS] 🧹 Cleanup ejecutado');
  });

  // Manejo de errores de imágenes
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    const handleError = function(this: HTMLImageElement) {
      this.src = 'https://snack.yummiespromociones.com/SnacksyummiesAssets/placeholder.webp';
    };
    img.addEventListener('error', handleError);
  });
}
