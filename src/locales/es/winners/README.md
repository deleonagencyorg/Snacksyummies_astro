# Sistema de Ganadores - Estructura Escalable

## 📁 Estructura de Archivos

```
src/locales/es/winners/
├── index.ts                    # Archivo de índice que importa todos los JSON
├── temaghios-summer-2024.json  # Ganadores de la promoción Temaghios
├── superman-six-flags-2024.json # Ganadores de la promoción Superman
└── README.md                   # Esta documentación
```

## 🚀 Cómo Agregar una Nueva Promoción

### 1. Crear el archivo JSON
Crea un nuevo archivo con el nombre de la promoción:
```bash
src/locales/es/winners/mi-nueva-promocion-2024.json
```

### 2. Estructura del JSON
```json
{
  "Honduras": [
    {
      "image": "https://ejemplo.com/imagen-ganador.webp",
      "description": "Ganador de PlayStation 5"
    }
  ],
  "Guatemala": [
    {
      "image": "https://ejemplo.com/imagen-ganador-2.webp",
      "description": "Ganador de Tablet"
    }
  ],
  "El Salvador": [],
  "Nicaragua": [],
  "Costa Rica": [],
  "República Dominicana": []
}
```

### 3. Importar en el índice
Agrega la importación en `src/locales/es/winners/index.ts`:

```typescript
import miNuevaPromocion2024 from './mi-nueva-promocion-2024.json';

export const winners_promotions = {
  'temaghios-summer-2024': temaghiosSummer2024,
  'superman-six-flags-2024': supermanSixFlags2024,
  'mi-nueva-promocion-2024': miNuevaPromocion2024  // ← Nueva promoción
};
```

## 🎯 Uso en el Código

### Acceso Directo
```javascript
// Obtener ganadores de una promoción específica
const ganadores = t('winners_promotions.temaghios-summer-2024', { namespace: 'winners' });

// Obtener ganadores de un país específico
const ganadoresHonduras = t('winners_promotions.temaghios-summer-2024.Honduras', { namespace: 'winners' });
```

### Usando las Funciones Helper
```javascript
import { 
  getWinnersByPromotion, 
  getWinnersByCountry, 
  getAvailablePromotions 
} from '../locales/es/winners/index';

// Obtener todas las promociones disponibles
const promociones = getAvailablePromotions(); // ['temaghios-summer-2024', 'superman-six-flags-2024']

// Obtener ganadores de una promoción
const ganadores = getWinnersByPromotion('temaghios-summer-2024');

// Obtener ganadores de un país específico
const ganadoresHonduras = getWinnersByCountry('temaghios-summer-2024', 'Honduras');
```

## 🌍 Países Soportados

- **Honduras**
- **Guatemala**
- **El Salvador**
- **Nicaragua**
- **Costa Rica**
- **República Dominicana**

## 📝 Convenciones de Nomenclatura

### Archivos JSON
- Usar kebab-case: `mi-promocion-2024.json`
- Incluir el año: `superman-six-flags-2024.json`
- Ser descriptivo: `temaghios-summer-2024.json`

### Slugs de Promoción
- Usar kebab-case: `mi-promocion-2024`
- Mantener consistencia entre archivos y slugs
- Usar el mismo nombre que el archivo JSON

## 🔧 Funciones Helper Disponibles

### `getWinnersByPromotion(promotionSlug)`
Obtiene todos los ganadores de una promoción específica.

### `getWinnersByCountry(promotionSlug, country)`
Obtiene los ganadores de un país específico en una promoción.

### `getAvailablePromotions()`
Obtiene la lista de todas las promociones disponibles.

### `getCountriesWithWinners(promotionSlug)`
Obtiene la lista de países que tienen ganadores en una promoción.

## 🎨 Estructura de Datos

### Ganador Individual
```typescript
interface Winner {
  image: string;      // URL de la imagen del ganador
  description: string; // Descripción del premio ganado
}
```

### Ganadores por País
```typescript
interface WinnersByCountry {
  [country: string]: Winner[];
}
```

### Todas las Promociones
```typescript
interface WinnersPromotions {
  [promotionSlug: string]: WinnersByCountry;
}
```

## ✅ Ventajas de esta Estructura

1. **Escalable**: Fácil agregar nuevas promociones
2. **Organizada**: Cada promoción en su propio archivo
3. **Mantenible**: Cambios aislados por promoción
4. **TypeScript**: Tipado completo para mejor desarrollo
5. **Funciones Helper**: APIs útiles para acceder a los datos
6. **Consistente**: Misma estructura para todos los idiomas
