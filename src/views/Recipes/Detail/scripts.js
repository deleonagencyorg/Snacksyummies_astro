// src/views/Recipes/Detail/scripts.js
// Este código se ejecutará solo en el cliente
export function initRecipeDetailScripts() {
  // Manejo de imágenes que fallan al cargar
  document.querySelectorAll('.recipe-detail img').forEach(img => {
    if (!img.hasAttribute('onerror')) {
      img.addEventListener('error', function() {
        this.onerror = null;
        this.src = 'https://snack.yummiespromociones.com/SnacksyummiesAssets/placeholder.webp';
      });
    }
  });

  // Puedes agregar más lógica específica para recetas aquí
  // Ej: manejo de porciones, conversión de unidades, etc.
}
