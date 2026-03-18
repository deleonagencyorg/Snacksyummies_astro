import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

/**
 * A simple 3D-like carousel for products with enhanced mobile touch support
 */
export default function SimpleProductCarousel({ products = [], locale = 'es' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  
  // Auto-rotate the carousel, but pause on touch
  useEffect(() => {
    const interval = setInterval(() => {
      if (!touchStart) { // Solo avanza automáticamente si no hay un toque activo
        nextSlide();
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [activeIndex, touchStart]);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);
  
  // Funciones para manejar eventos táctiles
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null); // Reiniciar touchEnd
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isSignificantSwipe = Math.abs(distance) > 30; // Umbral mínimo para considerar un swipe
    
    if (isSignificantSwipe) {
      if (distance > 0) {
        // Swipe hacia la izquierda - siguiente slide
        nextSlide();
      } else {
        // Swipe hacia la derecha - slide anterior
        prevSlide();
      }
    }
    
    // Reiniciar valores
    setTouchStart(null);
    setTouchEnd(null);
  };
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  if (!products || products.length === 0) {
    return <div className="no-products">No products available</div>;
  }
  
  return (
    <div 
      className="simple-carousel-container"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel-viewport">
        {products.map((product, index) => {
          // Calculate position: -1 = left, 0 = center, 1 = right
          let position = index - activeIndex;
          
          // Handle wrapping for continuous carousel effect
          // Normalizar la posición para que esté siempre en el rango correcto
          const halfLength = Math.floor(products.length / 2);
          if (position > halfLength) {
            position -= products.length;
          } else if (position < -halfLength) {
            position += products.length;
          }
          
          // En mobile solo mostrar el activo; en desktop mantener vecinos visibles
          const isVisible = isMobile ? position === 0 : Math.abs(position) <= 1;
          
          return (
            <div 
              key={product.id || index}
              className={`carousel-slide ${position === 0 ? 'active' : ''}`}
              style={{
                transform: isMobile
                  ? `translateX(0) scale(${position === 0 ? 1 : 0.8})`
                  : `translateX(${position * 100}%) scale(${position === 0 ? 1 : 0.8})`,
                zIndex: position === 0 ? 2 : 1,
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? 'visible' : 'hidden',
                pointerEvents: isVisible ? 'auto' : 'none'
              }}
            >
              <div 
                className="product-card"
                style={{ cursor: (product.pagina && product.pagina !== '#') || (product.link && product.link !== '#') ? 'pointer' : 'default' }}
                onClick={() => {
                  const url = product.pagina || product.link;
                  if (url && url !== '#') {
                    window.open(url, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.title || product.alt || 'Product'} 
                    className="product-image"
                  />
                  {product.isNew === true && (
                    <img 
                      src={locale === 'es' ? 'https://snack.yummiespromociones.com/SnacksyummiesAssets/NUEVO.webp' : 'https://snack.yummiespromociones.com/SnacksyummiesAssets/NEW.webp'}
                      alt={locale === 'es' ? 'Nuevo' : 'New'}
                      className="product-new-badge"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <img
          src="https://snack.yummiespromociones.com/snacksyummies/basenewproducts.webp"
          alt="Productos nuevos"
          style={{
            position: 'absolute',
            bottom: '-0.5rem',
            left: 0,
            width: '100%',
            pointerEvents: 'none',
            zIndex: 0,
         
          }}
        />
      </div>
      
      <div className="carousel-controls">
        <button 
          className="carousel-arrow carousel-arrow-left" 
          onClick={prevSlide}
          aria-label="Previous product"
        >
          <i className="fa fa-chevron-left"></i>
        </button>
        
        <button 
          className="carousel-arrow carousel-arrow-right" 
          onClick={nextSlide}
          aria-label="Next product"
        >
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
