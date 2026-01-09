// src/scripts/brandsInteraction.ts
// Módulo para gestionar la interacción de marcas en la página de Brands

interface BrandData {
  title: string;
  image: string;
  imageMobile: string;
  imageChip1: string;
  imageChip2?: string;
  imageChip3?: string;
  imageChip4?: string;
}

declare global {
  interface Window {
    brandsData?: BrandData[];
    updateBrandPreview?: (imageUrl: string, mobileImageUrl: string, title: string) => void;
    highlightSelectedBrand?: (element: HTMLElement, bgColor: string) => void;
  }
}

export function initBrandsInteraction(brandsData: BrandData[]) {
  console.log('[BRANDS] 🚀 Inicializando interacción de marcas');

  // Exponer datos de marcas globalmente
  window.brandsData = brandsData.map(brand => ({
    title: brand.title,
    image: brand.image,
    imageMobile: brand.imageMobile,
    imageChip1: brand.imageChip1,
    imageChip2: brand.imageChip2,
    imageChip3: brand.imageChip3,
    imageChip4: brand.imageChip4
  }));

  // Función para actualizar la imagen de preview y los chips
  window.updateBrandPreview = function(imageUrl: string, mobileImageUrl: string, title: string) {
    const previewImg = document.getElementById('brand-preview-img') as HTMLImageElement;
    const previewImgMobile = document.getElementById('brand-preview-img-mobile') as HTMLImageElement;
    
    // Obtener la marca seleccionada por su imagen
    const selectedBrand = Array.from(document.querySelectorAll('.logo-brand')).find(logo => {
      return logo.getAttribute('data-image') === imageUrl;
    });
    
    if (previewImg) {
      previewImg.src = imageUrl;
      previewImg.alt = title || '';
    }
    
    if (previewImgMobile) {
      previewImgMobile.src = mobileImageUrl;
      previewImgMobile.alt = title || '';
    }
    
    // Actualizar la imagen de los chips
    if (selectedBrand && window.brandsData) {
      const brandIndex = Array.from(document.querySelectorAll('.logo-brand')).indexOf(selectedBrand);
      
      const chipsContainer = document.getElementById('floating-images-container');
      if (chipsContainer && brandIndex !== -1 && window.brandsData[brandIndex]) {
        const brandData = window.brandsData[brandIndex];
        if (brandData && brandData.imageChip1) {
          const chipImages = chipsContainer.querySelectorAll('.chip img');
          chipImages.forEach(img => {
            (img as HTMLImageElement).src = brandData.imageChip1;
            (img as HTMLImageElement).alt = brandData.title || 'Chip flotante';
          });
        }
      }
    }
  };
  
  // Función para resaltar la marca seleccionada
  window.highlightSelectedBrand = function(element: HTMLElement, bgColor: string) {
    const allLogos = document.querySelectorAll('.logo-brand');
    allLogos.forEach(logo => {
      (logo as HTMLElement).style.borderColor = 'transparent';
      (logo as HTMLElement).style.transform = 'scale(1)';
      logo.classList.remove('active-brand');
    });
    
    element.style.borderColor = bgColor;
    element.style.opacity = '0.3';
    element.style.transform = 'scale(1.1)';
    element.classList.add('active-brand');
  };
  
  // Inicializar la primera marca como seleccionada
  const firstBrand = document.querySelector('.logo-brand') as HTMLElement;
  if (firstBrand && window.highlightSelectedBrand) {
    const bgColor = firstBrand.style.backgroundColor;
    window.highlightSelectedBrand(firstBrand, bgColor);
  }

  console.log('[BRANDS] ✅ Interacción de marcas inicializada');
}
