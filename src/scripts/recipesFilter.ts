// src/scripts/recipesFilter.ts
// Módulo para gestionar el filtrado de recetas por marca

export function initRecipesFilter() {
  console.log('[RECIPES] 🚀 Inicializando filtro de recetas');

  // Esperar a que el DOM esté listo
  const waitForElements = (): Promise<{
    grid: HTMLElement;
    loadMoreBtn: HTMLElement;
    loadMoreText: HTMLElement;
    loadingText: HTMLElement;
    noMoreRecipes: HTMLElement;
  }> => {
    return new Promise((resolve) => {
      let attempts = 0;
      const maxAttempts = 100; // 100 frames = ~1.6 segundos
      
      const check = () => {
        attempts++;
        const grid = document.getElementById('recipes-grid');
        const loadMoreBtn = document.getElementById('load-more-btn');
        const loadMoreText = document.getElementById('load-more-text');
        const loadingText = document.getElementById('loading-text');
        const noMoreRecipes = document.getElementById('no-more-recipes');

        console.log(`[RECIPES] 🔍 Intento ${attempts}: grid=${!!grid}, loadMoreBtn=${!!loadMoreBtn}`);

        if (grid && loadMoreBtn && loadMoreText && loadingText && noMoreRecipes) {
          console.log('[RECIPES] ✅ Todos los elementos encontrados');
          resolve({ grid, loadMoreBtn, loadMoreText, loadingText, noMoreRecipes });
        } else if (attempts < maxAttempts) {
          requestAnimationFrame(check);
        } else {
          console.error('[RECIPES] ❌ Timeout esperando elementos del DOM');
        }
      };
      check();
    });
  };

  waitForElements().then(({ grid, loadMoreBtn, loadMoreText, loadingText, noMoreRecipes }) => {
    console.log('[RECIPES] ✅ Elementos encontrados, configurando filtros');

    const itemsPerPage = parseInt(grid.dataset.itemsPerPage || '6');
    const totalRecipes = parseInt(grid.dataset.totalRecipes || '0');
    let loadedCount = parseInt(grid.dataset.loadedCount || itemsPerPage.toString());
    let currentBrandFilter = 'all';

    const currentLang = window.location.pathname.includes('/es/') ? 'es' : 'en';
    const allRecipeItems = Array.from(grid.querySelectorAll('.recipe-item'));
    console.log('[RECIPES] 📦 Items de recetas encontrados:', allRecipeItems.length);

    // Filtrar recetas por marca
    function getFilteredRecipes(brand: string) {
      if (brand === 'all') {
        return allRecipeItems;
      }
      return allRecipeItems.filter((item) => {
        const recipeBrandAttr = item.getAttribute('data-brand') || '';
        const brandList = recipeBrandAttr.split(',').map((s) => s.trim()).filter(Boolean);
        return brandList.includes(brand);
      });
    }

    // Aplicar filtro de marca
    function applyBrandFilter(brand: string) {
      console.log('[RECIPES] 🔍 Aplicando filtro de marca:', brand);
      currentBrandFilter = brand;
      const filteredRecipes = getFilteredRecipes(brand);
      console.log(`[RECIPES] 📦 Recetas filtradas: ${filteredRecipes.length} de ${allRecipeItems.length}`);

      // Ocultar todas las recetas
      allRecipeItems.forEach((item) => {
        const el = item as HTMLElement;
        el.classList.remove('hidden', 'block');
        el.style.display = 'none';
      });

      // Mostrar recetas filtradas (hasta itemsPerPage)
      const recipesToShow = filteredRecipes.slice(0, itemsPerPage);
      recipesToShow.forEach((item) => {
        const el = item as HTMLElement;
        el.classList.remove('hidden');
        el.classList.add('block');
        el.style.display = 'block';
      });
      console.log(`[RECIPES] ✅ Mostrando ${recipesToShow.length} recetas inicialmente`);

      // Actualizar contadores
      loadedCount = recipesToShow.length;
      grid.dataset.loadedCount = loadedCount.toString();

      // Actualizar visibilidad del botón "Cargar más"
      if (filteredRecipes.length <= itemsPerPage) {
        loadMoreBtn.style.display = 'none';
        if (filteredRecipes.length === 0) {
          noMoreRecipes.classList.remove('hidden');
          noMoreRecipes.textContent = currentLang === 'es'
            ? 'No hay recetas para esta marca'
            : 'No recipes for this brand';
        } else {
          noMoreRecipes.classList.add('hidden');
        }
      } else {
        loadMoreBtn.style.display = 'block';
        noMoreRecipes.classList.add('hidden');
      }
    }

    // Listener para cambios de filtro desde Categories
    const handleBrandFilterChange = (event: Event) => {
      console.log('[RECIPES] 📡 Evento brandFilterChange recibido:', (event as CustomEvent).detail);
      const detail = (event as CustomEvent)?.detail || {};
      const selectedBrand = typeof detail.brand === 'string' && detail.brand.length ? detail.brand : 'all';
      try { sessionStorage.setItem('selectedBrand', selectedBrand); } catch {}
      applyBrandFilter(selectedBrand);
    };

    // Fallback: clicks directos en botones de categoría
    const handleCategoryClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const btn = target?.closest?.('.brand-filter-btn') as HTMLElement;
      if (!btn) return;
      const slug = btn.getAttribute('data-slug') || 'all';
      console.log('[RECIPES] 🖱️ Click fallback en botón de marca:', slug);
      e.preventDefault();
      const u = new URL(window.location.href);
      u.searchParams.set('brand', slug);
      history.pushState({}, '', u.toString());
      try { sessionStorage.setItem('selectedBrand', slug); } catch {}
      applyBrandFilter(slug);
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Botón "Cargar más"
    const handleLoadMore = () => {
      loadMoreText.classList.add('hidden');
      loadingText.classList.remove('hidden');
      loadMoreBtn.setAttribute('disabled', 'true');
      loadMoreBtn.classList.add('opacity-75', 'cursor-not-allowed');

      setTimeout(() => {
        const filteredRecipes = getFilteredRecipes(currentBrandFilter);
        const nextBatch = Math.min(itemsPerPage, filteredRecipes.length - loadedCount);

        const recipesToShow = filteredRecipes.slice(loadedCount, loadedCount + nextBatch);
        recipesToShow.forEach((recipeItem, index) => {
          const htmlElement = recipeItem as HTMLElement;
          htmlElement.style.display = 'block';
          htmlElement.style.opacity = '0';
          htmlElement.style.transform = 'translateY(20px)';
          htmlElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

          setTimeout(() => {
            htmlElement.style.opacity = '1';
            htmlElement.style.transform = 'translateY(0)';
          }, index * 100);
        });

        loadedCount += nextBatch;
        grid.dataset.loadedCount = loadedCount.toString();

        loadMoreText.classList.remove('hidden');
        loadingText.classList.add('hidden');
        loadMoreBtn.removeAttribute('disabled');
        loadMoreBtn.classList.remove('opacity-75', 'cursor-not-allowed');

        if (loadedCount >= filteredRecipes.length) {
          loadMoreBtn.style.display = 'none';
          noMoreRecipes.classList.remove('hidden');
          noMoreRecipes.textContent = currentLang === 'es'
            ? 'No hay más recetas para mostrar'
            : 'No more recipes to show';
        }
      }, 800);
    };

    // Registrar listeners
    document.addEventListener('brandFilterChange', handleBrandFilterChange);
    document.addEventListener('click', handleCategoryClick);
    loadMoreBtn.addEventListener('click', handleLoadMore);

    // Navegación del navegador
    const handlePopState = () => {
      const b = new URL(window.location.href).searchParams.get('brand') || 'all';
      applyBrandFilter(b);
    };
    window.addEventListener('popstate', handlePopState);

    // Aplicar filtro inicial desde URL o sessionStorage
    const urlBrand = new URL(window.location.href).searchParams.get('brand');
    let sessionBrand: string | null = null;
    try { sessionBrand = sessionStorage.getItem('selectedBrand'); } catch {}
    const initialBrand = urlBrand || sessionBrand || 'all';
    console.log('[RECIPES] 📍 Marca inicial:', { urlBrand, sessionBrand, initialBrand });
    applyBrandFilter(initialBrand);

    // Cleanup al salir de la página
    return () => {
      document.removeEventListener('brandFilterChange', handleBrandFilterChange);
      document.removeEventListener('click', handleCategoryClick);
      loadMoreBtn.removeEventListener('click', handleLoadMore);
      window.removeEventListener('popstate', handlePopState);
    };
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
