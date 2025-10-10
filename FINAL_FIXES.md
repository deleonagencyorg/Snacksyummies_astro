# Correcciones Finales - Filtros y Transparencias

## 🎯 Cambios Aplicados

### 1. **Eliminadas Transparencias - Solo Escala Visual**

**Archivo:** `/src/components/recipes/Categories.astro`

**Comportamiento NUEVO:**
- ✅ **Marca activa:** Se hace más grande (`scale(1.15)`) con borde y sombra
- ✅ **Marcas inactivas:** Se ven normales, SIN transparencia
- ✅ **Sin opacidad:** Todas las marcas mantienen `opacity: 1` (100% opacas)

**CSS Simplificado:**
```css
/* SOLO el activo se hace más grande - SIN transparencias */
.brand-card.active {
  border: 4px solid var(--brand-color);
  box-shadow: 0 8px 25px -5px color-mix(in srgb, var(--brand-color) 50%, transparent);
  transform: scale(1.15);
}

/* Los demás sin cambios - mantienen su apariencia normal */
.brand-card:not(.active) {
  /* Sin cambios de opacidad - se ven normales */
}
```

**Resultado Visual:**
- Cuando seleccionas "TODAS" → Solo el botón "TODAS" se agranda
- Cuando seleccionas "Taqueritos" → Solo "Taqueritos" se agranda
- El resto de botones mantienen su tamaño y opacidad normal

---

### 2. **Logs Detallados para Debugging de Filtros**

**Archivo:** `/src/scripts/recipesFilter.ts`

**Logs Agregados:**
```typescript
// Al filtrar
console.log('[RECIPES] 🔍 getFilteredRecipes llamado con brand:', brand);

// Por cada receta
console.log(`[RECIPES] 🔍 Receta data-brand="${recipeBrandAttr}" → brandList=[${brandList.join(',')}] → matches ${brand}? ${matches}`);

// Resultado final
console.log(`[RECIPES] ✅ Recetas filtradas para "${brand}": ${filtered.length} de ${allRecipeItems.length}`);
```

**Beneficio:**
- Puedes ver en Console exactamente qué recetas tienen qué `data-brand`
- Puedes ver si coinciden con el slug de la marca seleccionada
- Facilita identificar problemas de mapeo entre recetas y marcas

---

### 3. **Fix de Variable `currentLang`**

**Archivo:** `/src/scripts/recipesFilter.ts`

**Problema:** El módulo usaba `currentLang` pero no estaba definido.

**Solución:**
```typescript
// Detectar idioma desde la URL
const currentLang = window.location.pathname.includes('/es/') ? 'es' : 'en';
```

---

## 🧪 Cómo Validar

### Test 1: Transparencias Eliminadas
1. Ir a `/es/recetas` o `/es/productos`
2. **Verificar:** Todas las marcas se ven opacas (sin transparencia)
3. Clicar en "Taqueritos"
4. **Verificar:** Solo "Taqueritos" se agranda (scale 1.15)
5. **Verificar:** Las demás marcas mantienen su tamaño normal y SIN transparencia

### Test 2: Filtrado de Recetas con Logs
1. Ir a `/es/recetas`
2. Abrir DevTools Console
3. Clicar en una marca (ej: "Cappy")
4. **Verificar logs:**
   ```
   [RECIPES] 🔍 getFilteredRecipes llamado con brand: cappy
   [RECIPES] 🔍 Receta data-brand="cappy" → brandList=[cappy] → matches cappy? true
   [RECIPES] 🔍 Receta data-brand="taqueritos" → brandList=[taqueritos] → matches cappy? false
   [RECIPES] ✅ Recetas filtradas para "cappy": 5 de 36
   ```
5. **Verificar:** Solo se muestran recetas de Cappy

### Test 3: Posible Problema de Mapeo
Si el filtro NO funciona para una marca específica:

1. Abrir Console
2. Buscar los logs de esa marca
3. **Ejemplo de problema:**
   ```
   [RECIPES] 🔍 Receta data-brand="Taqueritos" → brandList=[Taqueritos] → matches taqueritos? false
   ```
   ☝️ Problema: La receta tiene "Taqueritos" (mayúscula) pero el slug es "taqueritos" (minúscula)

4. **Solución:** Normalizar los valores en el JSON de recetas para que coincidan con los slugs de brands.json

---

## 📊 Mapeo de Marcas (Referencia)

Para que el filtro funcione, el valor en `recipe.brand` debe coincidir EXACTAMENTE con el `slug` en `brands.json`:

| Marca | Slug en brands.json | Valor esperado en recipe.brand |
|-------|---------------------|--------------------------------|
| Taqueritos | `"taqueritos"` | `["taqueritos"]` |
| Zambos | `"zambos"` | `["zambos"]` |
| Cappy | `"cappy"` | `["cappy"]` |
| Ranchitas | `"ranchitas"` | `["ranchitas"]` |
| Yummi Pops | `"yummi-pops"` | `["yummi-pops"]` |
| Yummi Nuts | `"yummi-nuts"` | `["yummi-nuts"]` |
| Xixi | `"xixi"` | `["xixi"]` |
| Zibas | `"zibas"` | `["zibas"]` |

**Importante:** Los valores son case-sensitive y deben estar en minúsculas.

---

## 🔍 Debugging Rápido

Si una marca específica no filtra:

```javascript
// En DevTools Console:
// 1. Ver todas las recetas y sus brands
document.querySelectorAll('.recipe-item').forEach((item, i) => {
  console.log(`Receta ${i}: data-brand="${item.getAttribute('data-brand')}"`);
});

// 2. Ver qué marcas están disponibles en el filtro
document.querySelectorAll('.brand-filter-btn').forEach(btn => {
  console.log(`Marca: slug="${btn.getAttribute('data-slug')}"`);
});

// 3. Comparar si coinciden
```

---

## ✅ Checklist de Validación

- [ ] Las marcas NO tienen transparencia (todas opacas)
- [ ] Solo la marca activa se agranda
- [ ] El filtro funciona en Productos
- [ ] El filtro funciona en Marcas
- [ ] El filtro funciona en Recetas
- [ ] Los logs muestran información útil en Console
- [ ] Al recargar con `?brand=X` mantiene el filtro
- [ ] Al navegar con botones back/forward mantiene el filtro

---

## 📝 Archivos Modificados

1. `/src/components/recipes/Categories.astro`
   - Eliminadas todas las reglas de `opacity`
   - Solo el activo se escala a 1.15

2. `/src/scripts/recipesFilter.ts`
   - Agregados logs detallados de filtrado
   - Fix de variable `currentLang`

---

## 🚀 Próximos Pasos (Si el filtro aún no funciona)

Si después de estos cambios el filtro de recetas sigue sin funcionar:

1. **Revisar Console logs** para ver qué `data-brand` tienen las recetas
2. **Comparar** con los slugs de `brands.json`
3. **Normalizar** los valores en los JSON de recetas si no coinciden
4. **Reportar** qué marca específica no funciona con los logs de Console

---

**Fecha:** 2025-10-10  
**Versión:** 1.2.0  
**Estado:** ✅ Listo para probar
