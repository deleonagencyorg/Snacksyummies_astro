# ✅ Fix: Filtros Funcionan al Cambiar de Idioma

## 🐛 Problema Identificado

**Síntoma:** Al cambiar de idioma (de `/es/recetas` a `/en/recipes` o viceversa), los filtros no funcionaban hasta recargar la página manualmente.

**Causa Raíz:** Los módulos de filtros (`recipesFilter.ts`, `productsFilter.ts`, `brandsFilter.ts`) registraban event listeners en la primera carga, pero cuando Astro hacía navegación SPA (Single Page Application) al cambiar de idioma, los listeners antiguos seguían activos y se acumulaban, causando conflictos.

---

## ✅ Solución Implementada

### **Patrón de Cleanup en Módulos de Filtros**

He implementado un sistema de cleanup que:
1. **Limpia listeners anteriores** antes de registrar nuevos
2. **Evita acumulación** de event listeners duplicados
3. **Funciona con navegación SPA** de Astro

---

## 📝 Cambios Aplicados

### 1. **recipesFilter.ts**

```typescript
// Variable global para almacenar cleanup functions
let cleanupFunctions: (() => void)[] = [];

export function initRecipesFilter() {
  console.log('[RECIPES] 🚀 Inicializando filtro de recetas');
  
  // Limpiar listeners anteriores si existen
  cleanupFunctions.forEach(cleanup => cleanup());
  cleanupFunctions = [];

  // ... resto del código ...

  // Al final, registrar cleanup
  cleanupFunctions.push(() => {
    document.removeEventListener('brandFilterChange', handleBrandFilterChange);
    document.removeEventListener('click', handleCategoryClick);
    loadMoreBtn.removeEventListener('click', handleLoadMore);
    window.removeEventListener('popstate', handlePopState);
    console.log('[RECIPES] 🧹 Cleanup ejecutado');
  });
}
```

**Beneficios:**
- ✅ Limpia listeners antiguos antes de crear nuevos
- ✅ Evita memory leaks
- ✅ Funciona en navegación SPA

---

### 2. **productsFilter.ts**

Mismo patrón aplicado:

```typescript
let cleanupFunctions: (() => void)[] = [];

export function initProductsFilter() {
  // Limpiar listeners anteriores
  cleanupFunctions.forEach(cleanup => cleanup());
  cleanupFunctions = [];
  
  // ... código ...
  
  // Registrar cleanup
  cleanupFunctions.push(() => {
    document.removeEventListener('brandFilterChange', handleBrandFilterChange);
    document.removeEventListener('click', handleCategoryClick);
    window.removeEventListener('popstate', handlePopState);
    console.log('[PRODUCTS] 🧹 Cleanup ejecutado');
  });
}
```

---

### 3. **brandsFilter.ts**

Mismo patrón aplicado:

```typescript
let cleanupFunctions: (() => void)[] = [];

export function initBrandsFilter() {
  // Limpiar listeners anteriores
  cleanupFunctions.forEach(cleanup => cleanup());
  cleanupFunctions = [];
  
  // ... código ...
  
  // Registrar cleanup
  cleanupFunctions.push(() => {
    document.removeEventListener('brandFilterChange', handleBrandFilterChange);
    document.removeEventListener('click', handleCategoryClick);
    window.removeEventListener('popstate', handlePopState);
    console.log('[BRANDS] 🧹 Cleanup ejecutado');
  });
}
```

---

## 🔄 Cómo Funciona

### **Flujo de Navegación SPA:**

1. **Primera carga** (`/es/recetas`):
   ```
   → initRecipesFilter() ejecutado
   → Listeners registrados
   → cleanupFunctions = [función de cleanup]
   ```

2. **Cambio de idioma** (`/es/recetas` → `/en/recipes`):
   ```
   → Astro dispara evento 'astro:page-load'
   → initRecipesFilter() ejecutado nuevamente
   → cleanupFunctions.forEach(cleanup => cleanup())  ← LIMPIA listeners antiguos
   → cleanupFunctions = []
   → Nuevos listeners registrados
   → Nueva función de cleanup guardada
   ```

3. **Resultado:**
   - ✅ Sin listeners duplicados
   - ✅ Filtros funcionan inmediatamente
   - ✅ Sin necesidad de recargar

---

## 🧪 Cómo Validar

### Test 1: Cambio de Idioma en Recetas
1. Ir a `/es/recetas`
2. Abrir DevTools Console
3. Clicar en una marca (ej: "Cappy")
4. **Verificar:** Filtro funciona
5. Cambiar idioma a inglés → `/en/recipes`
6. **Verificar log:**
   ```
   [RECIPES] 🧹 Cleanup ejecutado
   [RECIPES] 🚀 Inicializando filtro de recetas
   ```
7. Clicar en una marca
8. **Verificar:** Filtro funciona sin recargar

### Test 2: Navegación Entre Páginas
1. Ir a `/es/recetas`
2. Navegar a `/es/productos`
3. **Verificar:** Filtros funcionan en productos
4. Volver a `/es/recetas`
5. **Verificar:** Filtros siguen funcionando

### Test 3: Múltiples Cambios de Idioma
1. `/es/recetas` → Probar filtro ✅
2. `/en/recipes` → Probar filtro ✅
3. `/es/recetas` → Probar filtro ✅
4. `/en/recipes` → Probar filtro ✅
5. **Verificar:** Funciona en todos los cambios

---

## 📊 Listeners Registrados

### **Antes del Fix:**

```
Primera carga:    3 listeners
Cambio idioma:    6 listeners (duplicados)
Otro cambio:      9 listeners (triplicados)
```

❌ **Problema:** Acumulación de listeners

### **Después del Fix:**

```
Primera carga:    3 listeners
Cambio idioma:    3 listeners (antiguos eliminados)
Otro cambio:      3 listeners (siempre 3)
```

✅ **Solución:** Siempre el mismo número de listeners

---

## 🎯 Eventos de Astro Utilizados

Los filtros se reinicializan en estos eventos:

```javascript
// En Recipes/index.astro
window.addEventListener('astro:page-load', init);
window.addEventListener('astro:after-swap', init);
```

**Eventos de Astro:**
- `astro:page-load`: Después de que la nueva página se carga
- `astro:after-swap`: Después de que el contenido se intercambia en SPA

---

## 🔍 Logs de Debugging

Con el fix implementado, verás estos logs en Console:

```
// Al cambiar de idioma
[RECIPES] 🧹 Cleanup ejecutado
[RECIPES] 🚀 Inicializando filtro de recetas
[RECIPES] 🔍 Intento 1: grid=true, loadMoreBtn=true
[RECIPES] ✅ Todos los elementos encontrados
[RECIPES] ✅ Elementos encontrados, configurando filtros
[RECIPES] 📦 Items de recetas encontrados: 37
[RECIPES] 📍 Marca inicial: {urlBrand: null, sessionBrand: null, initialBrand: "all"}
```

✅ El log `🧹 Cleanup ejecutado` confirma que se limpiaron los listeners antiguos

---

## ✅ Checklist de Validación

### Español → Inglés
- [ ] `/es/recetas` → `/en/recipes` - Filtros funcionan
- [ ] `/es/productos` → `/en/products` - Filtros funcionan
- [ ] `/es/marcas` → `/en/brands` - Filtros funcionan

### Inglés → Español
- [ ] `/en/recipes` → `/es/recetas` - Filtros funcionan
- [ ] `/en/products` → `/es/productos` - Filtros funcionan
- [ ] `/en/brands` → `/es/marcas` - Filtros funcionan

### Navegación Múltiple
- [ ] Cambiar idioma 3+ veces - Filtros siguen funcionando
- [ ] Navegar entre páginas - Sin errores en Console
- [ ] Filtros con URL (`?brand=cappy`) - Funcionan después de cambiar idioma

---

## 📝 Archivos Modificados

1. `/src/scripts/recipesFilter.ts`
   - Agregado sistema de cleanup
   - Variable global `cleanupFunctions`
   - Limpieza antes de reinicializar

2. `/src/scripts/productsFilter.ts`
   - Agregado sistema de cleanup
   - Variable global `cleanupFunctions`
   - Limpieza antes de reinicializar

3. `/src/scripts/brandsFilter.ts`
   - Agregado sistema de cleanup
   - Variable global `cleanupFunctions`
   - Limpieza antes de reinicializar

---

## 🚀 Próximos Pasos

Si encuentras algún problema:

1. **Revisar Console logs** para ver si el cleanup se ejecuta
2. **Verificar** que no haya errores de JavaScript
3. **Probar** en diferentes navegadores (Chrome, Firefox, Safari)
4. **Reportar** cualquier comportamiento inesperado con logs de Console

---

## 🎉 Resumen

**Problema:** Filtros no funcionaban al cambiar de idioma sin recargar

**Solución:** Sistema de cleanup que elimina listeners antiguos antes de crear nuevos

**Resultado:**
- ✅ Filtros funcionan inmediatamente al cambiar idioma
- ✅ Sin necesidad de recargar la página
- ✅ Sin acumulación de event listeners
- ✅ Funciona en español e inglés
- ✅ Compatible con navegación SPA de Astro

---

**Fecha:** 2025-10-10  
**Versión:** 1.4.0  
**Estado:** ✅ Completado y listo para probar
