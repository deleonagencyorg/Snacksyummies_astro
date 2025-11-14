// Script para manejar el menú móvil de la navegación de Productos con Causa

document.addEventListener('astro:page-load', () => {
  const mobileMenuBtn = document.querySelector('.pcc-mobile-menu-btn');
  const mobileMenu = document.querySelector('.pcc-mobile-menu');
  
  if (!mobileMenuBtn || !mobileMenu) return;

  // Toggle del menú móvil
  mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('active');
    mobileMenu.classList.toggle('hidden');
    
    // Prevenir scroll cuando el menú está abierto
    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Cerrar menú al hacer clic en un enlace
  const mobileLinks = mobileMenu.querySelectorAll('.pcc-nav-link-mobile');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('active');
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    });
  });

  // Cerrar menú al cambiar el tamaño de la ventana a desktop
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth >= 1024) {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('active');
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }, 250);
  });
});
