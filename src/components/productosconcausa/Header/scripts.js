// Simple mobile menu toggle scoped to the PCC header
(function () {
  if (typeof window === 'undefined') return;
  const header = document.querySelector('.pcc-header');
  if (!header) return;
  const btn = header.querySelector('.pcc-menu-btn');
  const menu = header.querySelector('.pcc-mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const isHidden = menu.hasAttribute('hidden');
    if (isHidden) menu.removeAttribute('hidden'); else menu.setAttribute('hidden', '');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', (!expanded).toString());
    document.documentElement.classList.toggle('overflow-hidden', !expanded);
  });
})();
