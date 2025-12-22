// IIFE for immediate execution and scope isolation
(function() {
  // Flag to track initialization status
  let initialized = false;

  // Storage for product carousels autoplay controls
  let productCarouselsConfig = [];
  let productsIntersectionObserver = null;

  // Function to initialize all functionality
  function initializeFunctionality() {
    // Prevent multiple initializations
    if (initialized) return;
    initialized = true;
    
    // Fix para las imágenes que no cargan
    const images = document.querySelectorAll('img');
    const placeholderUrl = 'https://snack.yummiespromociones.com/snacksyummies/placeholder.webp';
    
    images.forEach(img => {
      // Evitar bucle infinito: solo aplicar el manejador de error si la imagen no es ya el placeholder
      img.addEventListener('error', function() {
        if (!this.src.includes('placeholder')) {
          this.src = placeholderUrl;
          this.classList.add('placeholder-image');
        }
      });
    });
    
    // Animación para las tarjetas de marcas
    const brandCards = document.querySelectorAll('.brand-card');
    
    if (brandCards.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });
      
      brandCards.forEach(card => {
        observer.observe(card);
      });
    }
    
    // Funcionalidad del carrusel de marcas
    const carousel = document.querySelector('.brands-icons-carousel');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const brandIcons = document.querySelectorAll('.brand-icon-circle');
    
    if (carousel && prevBtn && nextBtn && brandIcons.length > 0) {
      // Calcular el ancho de desplazamiento (aproximadamente 2-3 íconos)
      const scrollAmount = brandIcons[0].offsetWidth * 2 + 16; // Ancho de 2 íconos + gap
      
      // Timer para autoplay del carrusel de marcas
      const autoplayInterval = 3000; // 3 segundos
      let autoplayTimer = null;
      
      // Función para desplazar a la izquierda
      const scrollLeft = () => {
        carousel.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      };
      
      // Función para desplazar a la derecha
      const scrollRight = () => {
        carousel.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      };

      // Autoplay del carrusel de marcas (scroll automático hacia la derecha)
      function startBrandsAutoplay() {
        // Respetar preferencia de reducción de movimiento
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          return;
        }
        stopBrandsAutoplay();
        autoplayTimer = setInterval(() => {
          // Si estamos muy cerca del final, volver al inicio para efecto de loop
          const isAtEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10;
          if (isAtEnd) {
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollRight();
          }
        }, autoplayInterval);
      }

      function stopBrandsAutoplay() {
        if (autoplayTimer !== null) {
          clearInterval(autoplayTimer);
          autoplayTimer = null;
        }
      }
      
      // Añadir eventos de click y touch para el botón previo
      prevBtn.addEventListener('click', (e) => {
        stopBrandsAutoplay();
        scrollLeft();
      });
      prevBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevenir comportamiento por defecto
        stopBrandsAutoplay();
        scrollLeft();
      }, { passive: false });
      
      // Añadir eventos de click y touch para el botón siguiente
      nextBtn.addEventListener('click', (e) => {
        stopBrandsAutoplay();
        scrollRight();
      });
      nextBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevenir comportamiento por defecto
        stopBrandsAutoplay();
        scrollRight();
      }, { passive: false });
      
      // Función para manejar la visibilidad de los botones de navegación
      function updateNavButtonsVisibility() {
        // Mostrar/ocultar botón previo según la posición de scroll
        prevBtn.style.opacity = carousel.scrollLeft <= 10 ? '0.5' : '1';
        
        // Mostrar/ocultar botón siguiente según si hemos llegado al final
        const isAtEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10;
        nextBtn.style.opacity = isAtEnd ? '0.5' : '1';
      }
      
      // Actualizar visibilidad de botones al cargar y al hacer scroll
      updateNavButtonsVisibility();
      carousel.addEventListener('scroll', updateNavButtonsVisibility);
      window.addEventListener('resize', updateNavButtonsVisibility);

      // Pausar autoplay cuando el usuario interactúa con el carrusel
      carousel.addEventListener('mouseenter', stopBrandsAutoplay);
      carousel.addEventListener('mouseleave', startBrandsAutoplay);
      carousel.addEventListener('touchstart', stopBrandsAutoplay, { passive: true });
      carousel.addEventListener('focusin', stopBrandsAutoplay);
      carousel.addEventListener('focusout', startBrandsAutoplay);
      
      // Asegurar que los íconos de marca sean accesibles con teclado
      brandIcons.forEach(icon => {
        icon.setAttribute('tabindex', '0');
        icon.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            icon.click();
          }
        });
      });
      
      // Asegurar que los botones de navegación tengan suficiente z-index y pointer-events
      prevBtn.style.zIndex = '20';
      nextBtn.style.zIndex = '20';
      prevBtn.style.pointerEvents = 'auto';
      nextBtn.style.pointerEvents = 'auto';

      // Iniciar autoplay del carrusel de marcas al cargar
      startBrandsAutoplay();
    }
    
    // Funcionalidad para los carruseles de productos
    initProductsCarousels();
  }

  // Función para inicializar todos los carruseles de productos
  function initProductsCarousels() {
    if (typeof window === 'undefined') return; // Skip during SSR
    
    // Reset previous observer and config on re-init
    if (productsIntersectionObserver) {
      productsIntersectionObserver.disconnect();
      productsIntersectionObserver = null;
    }
    productCarouselsConfig = [];

    const productCarousels = document.querySelectorAll('.products-carousel');
    if (!productCarousels || productCarousels.length === 0) return;
    
    productCarousels.forEach(carousel => {
      const slidesContainer = carousel.querySelector('.products-carousel-inner');
      const slides = carousel.querySelectorAll('.product-slide');
      const prevButton = carousel.querySelector('.prev-product');
      const nextButton = carousel.querySelector('.next-product');
      
      // Filtrar slides válidos (con imágenes que se cargan correctamente)
      const validSlides = Array.from(slides).filter(slide => slide.dataset.valid !== 'false');
      
      if (!slidesContainer || validSlides.length <= 1) {
        // Si no hay slides válidos o solo hay uno, ocultar los botones de navegación
        if (prevButton) prevButton.style.display = 'none';
        if (nextButton) nextButton.style.display = 'none';
        if (validSlides.length === 0) {
          // Si no hay slides válidos, ocultar todo el carousel
          carousel.style.display = 'none';
        }
        return;
      }
      
      let currentIndex = 0;
      const totalSlides = validSlides.length;
      
      // Variables para el control de swipe
      let touchStartX = 0;
      let touchEndX = 0;
      const minSwipeDistance = 50; // Distancia mínima para considerar un swipe
      
      // Función para actualizar la posición del carrusel
      function updateCarouselPosition() {
        if (slidesContainer) {
          slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
      }
      
      // Función para ir a la siguiente diapositiva
      function goToNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarouselPosition();
      }
      
      // Función para ir a la diapositiva anterior
      function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarouselPosition();
      }
      
      // Añadir event listeners a los botones con soporte para touch
      if (prevButton) {
        const handlePrevClick = (e) => {
          if (e) e.preventDefault();
          stopAutoplay(); // Detener autoplay al usar navegación manual
          goToPrevSlide();
        };
        
        prevButton.addEventListener('click', handlePrevClick);
        prevButton.addEventListener('touchstart', handlePrevClick, { passive: false });
        
        // Mejorar accesibilidad y visibilidad en mobile
        prevButton.style.zIndex = '20';
        prevButton.style.pointerEvents = 'auto';
      }
      
      if (nextButton) {
        const handleNextClick = (e) => {
          if (e) e.preventDefault();
          stopAutoplay(); // Detener autoplay al usar navegación manual
          goToNextSlide();
        };
        
        nextButton.addEventListener('click', handleNextClick);
        nextButton.addEventListener('touchstart', handleNextClick, { passive: false });
        
        // Mejorar accesibilidad y visibilidad en mobile
        nextButton.style.zIndex = '20';
        nextButton.style.pointerEvents = 'auto';
      }
      
      // Implementar funcionalidad de swipe para mobile
      if (slidesContainer) {
        slidesContainer.addEventListener('touchstart', (e) => {
          touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        slidesContainer.addEventListener('touchend', (e) => {
          touchEndX = e.changedTouches[0].screenX;
          handleSwipe();
        }, { passive: true });
      }
      
      // Función para manejar el swipe
      function handleSwipe() {
        // Calcular la distancia del swipe
        const swipeDistance = touchEndX - touchStartX;
        
        // Si el swipe es suficientemente largo, cambiar slide
        if (Math.abs(swipeDistance) > minSwipeDistance) {
          stopAutoplay();
          if (swipeDistance > 0) {
            // Swipe a la derecha (previo)
            goToPrevSlide();
          } else {
            // Swipe a la izquierda (siguiente)
            goToNextSlide();
          }
        }
      }
      
      // Hacer que las diapositivas sean accesibles con teclado
      slides.forEach((slide, index) => {
        slide.setAttribute('tabindex', '0');
        slide.setAttribute('aria-label', `Producto ${index + 1} de ${totalSlides}`);
        slide.setAttribute('role', 'group');
        
        // Permitir navegación con teclado
        slide.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowRight') {
            e.preventDefault();
            goToNextSlide();
          } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goToPrevSlide();
          }
        });
      });
      
      // Configuración para cambiar automáticamente las diapositivas
      const autoplayInterval = 3000; // 3 segundos
      let autoplayTimer = null;
      
      function startAutoplay() {
        stopAutoplay();
        // Only start autoplay if not in reduced motion preference
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          autoplayTimer = setInterval(goToNextSlide, autoplayInterval);
        }
      }
      
      function stopAutoplay() {
        // Verificar si el timer existe antes de limpiarlo
        if (autoplayTimer !== null) {
          clearInterval(autoplayTimer);
          autoplayTimer = null;
        }
      }
      
      // Desktop: autoplay por hover/focus como antes
      carousel.addEventListener('mouseenter', startAutoplay);
      carousel.addEventListener('mouseleave', stopAutoplay);
      
      // Para dispositivos táctiles, iniciar autoplay al tocar y detener al soltar
      carousel.addEventListener('touchstart', startAutoplay, { passive: true });
      carousel.addEventListener('touchend', stopAutoplay);
      
      // Iniciar autoplay cuando se hace focus en algún elemento del carrusel
      carousel.addEventListener('focusin', startAutoplay);
      carousel.addEventListener('focusout', stopAutoplay);
      
      // Inicializar la posición del carrusel
      updateCarouselPosition();

      // Iniciar autoplay automáticamente en desktop
      if (typeof window !== 'undefined' && window.innerWidth >= 768) {
        startAutoplay();
      }

      // Registrar controles de autoplay para uso global (mobile)
      productCarouselsConfig.push({
        carousel,
        startAutoplay,
        stopAutoplay
      });
    });

    // Mobile: solo el carrusel visible debe tener autoplay activo
    if (!productsIntersectionObserver && productCarouselsConfig.length > 0) {
      productsIntersectionObserver = new IntersectionObserver((entries) => {
        // Solo aplicar esta lógica en mobile
        if (window.innerWidth >= 768) {
          return;
        }

        entries.forEach(entry => {
          const config = productCarouselsConfig.find(c => c.carousel === entry.target);
          if (!config) return;

          if (entry.isIntersecting) {
            // Activar autoplay solo en el carrusel visible y detener los demás
            productCarouselsConfig.forEach(c => {
              if (c === config) {
                c.startAutoplay();
              } else {
                c.stopAutoplay();
              }
            });
          } else {
            // Si deja de ser visible, detener su autoplay
            config.stopAutoplay();
          }
        });
      }, {
        threshold: 0.4
      });

      // Observar todos los carruseles de productos
      productCarouselsConfig.forEach(cfg => {
        productsIntersectionObserver.observe(cfg.carousel);
      });
    }
  }

  // Optimized initialization for all scenarios
  function initializeOnLoad() {
    // Reset initialization flag on new page loads
    initialized = false;
    // Run initialization
    initializeFunctionality();
  }
  
  // Execute initialization based on document readiness
  if (document.readyState === 'loading') {
    // Document still loading, wait for DOMContentLoaded
    document.addEventListener('DOMContentLoaded', initializeOnLoad);
  } else {
    // DOM already loaded, run immediately
    initializeOnLoad();
  }
  
  // Support for Astro page transitions
  document.addEventListener('astro:page-load', initializeOnLoad);
  document.addEventListener('astro:after-swap', initializeOnLoad);
  
  // Expose initialization functions to global scope for potential external use
  window.initBrandsCarousel = initializeOnLoad;
  window.initProductsCarousels = initProductsCarousels;
})();
