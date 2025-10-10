// src/scripts/brandsFilter.ts
// Módulo para gestionar el filtrado de marcas en la página de Brands

// Variable global para almacenar cleanup functions
let cleanupFunctions: (() => void)[] = [];

export function initBrandsFilter() {
  console.log('[BRANDS] 🚀 Inicializando filtro de marcas');
  
  // Limpiar listeners anteriores si existen
  cleanupFunctions.forEach(cleanup => cleanup());
  cleanupFunctions = [];
  
  const list = document.querySelector('.brands-list');
  if (!list) {
    console.warn('[BRANDS] ⚠️ No se encontró .brands-list');
    return;
  }

  const cards = Array.from(list.querySelectorAll('[data-brand]')) as HTMLElement[];
  console.log('[BRANDS] 📦 Tarjetas encontradas:', cards.length);
  
  // Debug: mostrar los primeros 3 data-brand para verificar valores
  if (cards.length > 0) {
    console.log('[BRANDS] 🔍 Primeros data-brand:', 
      cards.slice(0, 3).map(c => c.getAttribute('data-brand'))
    );
  }
  
  // Aplicar filtro
  function apply(slug: string) {
    console.log('[BRANDS] 🔍 Aplicando filtro:', slug);
    let visibleCount = 0;
    const matches: (string | null)[] = [];
    
    // Normalizar a minúsculas para comparación case-insensitive
    const normalizedSlug = slug.toLowerCase();
    
    cards.forEach((el) => {
      const b = el.getAttribute('data-brand');
      const normalizedB = b ? b.toLowerCase() : '';
      const match = !slug || slug === 'all' || normalizedB === normalizedSlug;
      
      if (match) {
        visibleCount++;
        matches.push(b);
        el.style.display = 'flex'; // Restaurar display flex original
      } else {
        el.style.display = 'none'; // Ocultar con display none
      }
    });
    
    console.log(`[BRANDS] ✅ Filtrado: ${visibleCount} marcas visibles de ${cards.length}`);
    if (slug !== 'all' && visibleCount === 0) {
      console.warn(`[BRANDS] ⚠️ No se encontraron marcas con data-brand="${slug}"`);
      console.log('[BRANDS] 📋 Todas las marcas disponibles:', 
        cards.map(c => c.getAttribute('data-brand'))
      );
    } else if (slug !== 'all') {
      console.log('[BRANDS] ✅ Marcas que coinciden:', matches);
    }
  }

  // Listener para cambios de filtro desde Categories
  const handleBrandFilterChange = (ev: Event) => {
    console.log('[BRANDS] 📡 Evento brandFilterChange recibido:', (ev as CustomEvent)?.detail);
    const slug = (ev as CustomEvent)?.detail?.brand || 'all';
    try { sessionStorage.setItem('selectedBrand', slug); } catch {}
    apply(slug);
  };

  // Fallback: clicks directos en botones de categoría
  const handleCategoryClick = (e: Event) => {
    const target = e.target as HTMLElement;
    const btn = target?.closest?.('.brand-filter-btn') as HTMLElement;
    if (!btn) return;
    const slug = btn.getAttribute('data-slug') || 'all';
    console.log('[BRANDS] 🖱️ Click fallback en botón de marca:', slug);
    e.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.set('brand', slug);
    history.pushState({}, '', url.toString());
    try { sessionStorage.setItem('selectedBrand', slug); } catch {}
    apply(slug);
    const evt = new CustomEvent('brandFilterChange', { detail: { brand: slug }, bubbles: true });
    document.dispatchEvent(evt);
  };

  // Navegación del navegador
  const handlePopState = () => {
    const b = new URL(window.location.href).searchParams.get('brand') || 'all';
    apply(b);
  };

  // Registrar listeners
  document.addEventListener('brandFilterChange', handleBrandFilterChange);
  document.addEventListener('click', handleCategoryClick);
  window.addEventListener('popstate', handlePopState);

  // Aplicar filtro inicial desde URL o sessionStorage
  const u = new URL(window.location.href);
  const urlBrand = u.searchParams.get('brand');
  let sessionBrand: string | null = null;
  try { sessionBrand = sessionStorage.getItem('selectedBrand'); } catch {}
  const initial = urlBrand || sessionBrand || 'all';
  console.log('[BRANDS] 📍 Marca inicial:', { urlBrand, sessionBrand, initial });
  apply(initial);

  // Registrar cleanup functions
  cleanupFunctions.push(() => {
    document.removeEventListener('brandFilterChange', handleBrandFilterChange);
    document.removeEventListener('click', handleCategoryClick);
    window.removeEventListener('popstate', handlePopState);
    console.log('[BRANDS] 🧹 Cleanup ejecutado');
  });
}
