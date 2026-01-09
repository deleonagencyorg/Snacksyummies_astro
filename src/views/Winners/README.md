# Sistema de Ganadores - Documentación

## 📁 Estructura de Archivos

```
src/views/Winners/
├── index.astro              # Vista principal de ganadores
├── styles.css               # Estilos de la vista
└── README.md                # Esta documentación
```

## 🚀 Rutas Disponibles

### Español
- **Ganadores de promoción**: `/es/ganadores/[slug]`

### Inglés
- **Ganadores de promoción**: `/en/winners/[slug]`

## 🎯 Funcionalidades

### Vista de Ganadores (`index.astro`)
- **Hero Section**: Título, subtítulo y nombre de la promoción
- **Ganadores por País**: Organización de ganadores por país
- **Tarjetas de Ganador**: Imagen, descripción y etiqueta de ganador
- **Estado Vacío**: Mensaje cuando no hay ganadores
- **Navegación**: Botón para regresar a la promoción
- **Responsive**: Adaptable a móvil, tablet y desktop
- **Animaciones**: Efectos de hover y transiciones suaves

## 🔧 Componentes Utilizados

### Componentes Principales
- `LazyImage`: Para carga optimizada de imágenes
- `Breadcrumb`: Navegación con migajas de pan
- `MainLayout`: Layout principal del proyecto

### Estructura de Datos
```typescript
interface Winner {
  image: string;
  description: string;
}

interface WinnersByCountry {
  [country: string]: Winner[];
}

interface WinnersPromotions {
  [promotionSlug: string]: WinnersByCountry;
}
```

## 🎨 Características de Diseño

### Colores
- **Primary**: `#0A3D7E` (Azul oscuro)
- **Secondary**: `#008DDD` (Azul medio)
- **Gray**: `#f3f4f6` (Fondo gris claro)

### Tipografías
- **Títulos**: `font-title` (TroisMille Bold)
- **Texto**: `font-sans` (TroisMille)

### Animaciones
- **Fade In Up**: Para secciones por país
- **Slide In Up**: Para tarjetas de ganadores
- **Hover Effects**: Transformaciones y sombras
- **Pulse**: Para estado vacío

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (1 columna)
- **Tablet**: 768px - 1024px (2 columnas)
- **Desktop**: > 1024px (3 columnas)

### Adaptaciones
- **Grid**: 1 columna en móvil, 2-3 en desktop
- **Títulos**: Tamaño reducido en móvil
- **Espaciado**: Ajustado para cada dispositivo

## 🌍 Internacionalización

### Soporte de Idiomas
- **Español**: Rutas `/es/ganadores/[slug]`
- **Inglés**: Rutas `/en/winners/[slug]`

### Cambio de Idioma
- **Navegación automática**: Mantiene la promoción actual
- **URLs dinámicas**: Se actualizan según el idioma
- **Contenido traducido**: Títulos, descripciones y UI

## 🔗 Integración con el Sistema

### Archivos de Configuración
- `src/locales/es/winners/index.ts`: Datos de ganadores en español
- `src/locales/en/winners/index.ts`: Datos de ganadores en inglés
- `src/locales/es/winners.json`: Textos UI en español
- `src/locales/en/winners.json`: Textos UI en inglés

### Metadatos
- **SEO**: Títulos y descripciones dinámicos
- **Open Graph**: Para compartir en redes sociales
- **Structured Data**: Para motores de búsqueda

## 🚀 Uso en el Código

### Acceso a Datos
```javascript
// Obtener ganadores de una promoción
const winnersData = t('winners_promotions', { namespace: 'winners', locale: currentLang });
const promotionWinners = winnersData[promotionSlug] || {};

// Obtener países con ganadores
const countries = Object.keys(promotionWinners).filter(country => 
  promotionWinners[country] && promotionWinners[country].length > 0
);

// Obtener textos de UI
const uiTexts = t('ui', { namespace: 'winners', locale: currentLang });
```

### Navegación
```javascript
// Rutas de ganadores
const winnersRoute = currentLang === 'es' ? `/es/ganadores/${promotionSlug}` : `/en/winners/${promotionSlug}`;
```

## 📊 Estructura de Datos de Ganadores

### Archivo de Ganadores por Promoción
```json
{
  "Honduras": [
    {
      "image": "https://example.com/winner1.jpg",
      "description": "Ganador de PlayStation 5"
    }
  ],
  "Guatemala": [
    {
      "image": "https://example.com/winner2.jpg",
      "description": "Ganador de viaje"
    }
  ]
}
```

### Países Soportados
- Honduras
- Guatemala
- El Salvador
- Nicaragua
- Costa Rica
- República Dominicana

## ✅ Características Implementadas

1. **✅ Arquitectura Atómica**: Siguiendo el patrón del proyecto
2. **✅ Responsive Design**: Adaptable a todos los dispositivos
3. **✅ Internacionalización**: Soporte completo ES/EN
4. **✅ SEO Optimizado**: Metadatos dinámicos
5. **✅ Navegación Intuitiva**: Breadcrumbs y botones de regreso
6. **✅ Animaciones Suaves**: Efectos de hover y transiciones
7. **✅ Carga Optimizada**: Lazy loading de imágenes
8. **✅ Organización por País**: Ganadores agrupados por país
9. **✅ Estado Vacío**: Mensaje cuando no hay ganadores
10. **✅ Integración con Promociones**: Enlace desde promociones

## 🔗 Integración con Promociones

### Botón en Promociones
- Sección "Ver Ganadores" en cada promoción
- Enlace directo a la página de ganadores
- Navegación bidireccional

### Breadcrumb
- Inicio → Promociones → [Promoción] → Ganadores
- Navegación completa y consistente

## 🔮 Próximas Mejoras

- [ ] Filtros por país
- [ ] Búsqueda de ganadores
- [ ] Galería de fotos expandible
- [ ] Compartir ganadores en redes sociales
- [ ] Notificaciones de nuevos ganadores
- [ ] Modo oscuro
- [ ] PWA features
- [ ] Analytics de visualización
