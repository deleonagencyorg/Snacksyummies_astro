// Fix para las imágenes que no cargan
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      this.src = 'https://snack.yummiespromociones.com/SnacksyummiesAssets/placeholder.webp';
    });
  });
});
