# Sistema de Promociones - Documentación

## 📁 Estructura de Archivos

```
src/views/Promotions/
├── index.astro              # Vista principal de promociones
├── styles.css               # Estilos de la vista principal
├── Detail/
│   ├── index.astro          # Vista de detalle de promoción
│   └── styles.css           # Estilos del detalle
└── README.md                # Esta documentación
```

## 🚀 Rutas Disponibles

### Español
- **Lista de promociones**: `/es/promociones`
- **Detalle de promoción**: `/es/promociones/[slug]`

### Inglés
- **Lista de promociones**: `/en/promotions`
- **Detalle de promoción**: `/en/promotions/[slug]`

## 🎯 Funcionalidades

### Vista Principal (`index.astro`)
- **Hero Section**: Título, subtítulo y botón de registro
- **Promociones Activas**: Grid de promociones con estado "active"
- **Promociones Finalizadas**: Grid de promociones con estado "finished"
- **Responsive**: Adaptable a móvil, tablet y desktop
- **Animaciones**: Efectos de hover y transiciones suaves

### Vista de Detalle (`Detail/index.astro`)
- **Hero Section**: Título y descripción de la promoción
- **Pasos de Participación**: 3 pasos con imágenes y descripciones
- **Secciones Informativas**: Vigencia, términos, premios, privacidad, FAQ
- **Compartir**: Botones para redes sociales
- **Navegación**: Botón de regreso y selector de idioma

## 🔧 Componentes Utilizados

### Componentes Principales
- `LazyImage`: Para carga optimizada de imágenes
- `PromotionNavigation`: Navegación con cambio de idioma
- `LanguageSwitcher`: Selector de idioma

### Estructura de Datos
```typescript
interface Promotion {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'finished';
  winners: boolean; // Indica si la promoción tiene ganadores disponibles
  image: {
    desktop: string;
    mobile: string;
    alt: string;
  };
  buttonText: string;
  buttonUrl: string;
  detail: {
    title: string;
    steps: Step[];
    registerButton: string;
    sections: {
      validity: Section;
      terms: Section;
      prizes: Section;
      privacy: Section;
      faq: Section;
    };
  };
}
```

## 🎨 Características de Diseño

### Colores
- **Primary**: `#0A3D7E` (Azul oscuro)
- **Secondary**: `#008DDD` (Azul medio)
- **Red**: `#D23627` (Rojo para etiquetas)

### Tipografías
- **Títulos**: `font-title` (TroisMille Bold)
- **Texto**: `font-sans` (TroisMille)

### Animaciones
- **Fade In Up**: Para tarjetas de promociones
- **Slide In Up**: Para pasos de participación
- **Fade In Left**: Para secciones informativas
- **Hover Effects**: Transformaciones y sombras

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Adaptaciones
- **Grid**: 1 columna en móvil, 2-3 en desktop
- **Navegación**: Sticky en desktop, normal en móvil
- **Botones**: Stack vertical en móvil, horizontal en desktop

## 🌍 Internacionalización

### Soporte de Idiomas
- **Español**: Rutas `/es/promociones`
- **Inglés**: Rutas `/en/promotions`

### Cambio de Idioma
- **Navegación automática**: Mantiene la promoción actual
- **URLs dinámicas**: Se actualizan según el idioma
- **Contenido traducido**: Títulos, descripciones y UI

## 🔗 Integración con el Sistema

### Archivos de Configuración
- `src/config/routes.ts`: Rutas de promociones
- `src/locales/es/promotions.json`: Datos en español
- `src/locales/en/promotions.json`: Datos en inglés

### Metadatos
- **SEO**: Títulos y descripciones dinámicos
- **Open Graph**: Para compartir en redes sociales
- **Structured Data**: Para motores de búsqueda

## 🚀 Uso en el Código

### Acceso a Datos
```javascript
// Obtener promociones
const promotions = t('promotions', { namespace: 'promotions', locale: currentLang });

// Obtener promoción específica
const promotion = promotions.find(p => p.slug === promotionSlug);

// Obtener datos del hero
const heroData = t('hero', { namespace: 'promotions', locale: currentLang });
```

### Navegación
```javascript
// Rutas de promociones
const promotionsRoute = currentLang === 'es' ? '/es/promociones' : '/en/promotions';
const detailRoute = `${promotionsRoute}/${promotionSlug}`;
```

## ✅ Características Implementadas

1. **✅ Arquitectura Atómica**: Siguiendo el patrón del proyecto
2. **✅ Responsive Design**: Adaptable a todos los dispositivos
3. **✅ Internacionalización**: Soporte completo ES/EN
4. **✅ SEO Optimizado**: Metadatos dinámicos
5. **✅ Navegación Intuitiva**: Breadcrumbs y botones de regreso
6. **✅ Animaciones Suaves**: Efectos de hover y transiciones
7. **✅ Carga Optimizada**: Lazy loading de imágenes
8. **✅ Compartir Social**: Botones para redes sociales
9. **✅ Estados de Promoción**: Activa/Finalizada
10. **✅ Botón de Ganadores**: Se muestra solo cuando winners: true
11. **✅ Filtrado Automático**: Por estado de promoción

## 🔮 Próximas Mejoras

- [ ] Filtros por categoría de premio
- [ ] Búsqueda de promociones
- [ ] Notificaciones de nuevas promociones
- [ ] Integración con sistema de usuarios
- [ ] Analytics de participación
- [ ] Modo oscuro
- [ ] PWA features
