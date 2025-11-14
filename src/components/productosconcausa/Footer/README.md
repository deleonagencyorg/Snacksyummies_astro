# Componente Footer - Productos con Causa

Footer personalizado para la sección de Productos con Causa, diseñado según la imagen de referencia proporcionada.

## Características

### Diseño
- **Fondo primary**: Color verde (#00601b) como fondo principal
- **Texto blanco**: Todo el texto en color blanco para contraste
- **Layout de 3 columnas**: Información de contacto, logo central y redes sociales
- **Responsive**: Se adapta a móviles con layout vertical

### Contenido

#### Columna 1: Información de Contacto
- **Dirección**: Barrio Morazán, Frente a Plantas Tropicales, Bulevar Suyapa, Tegucigalpa, Honduras
- **Teléfono**: (504) 2275-3370
- **Horario**: 8:00 a.m. - 5:00 p.m.
- Iconos SVG inline para ubicación, teléfono y reloj

#### Columna 2: Logo y Copyright
- **Logo Yummies**: Logo principal centrado
- **Política de Privacidad**: Enlace a la política
- **Copyright**: "Yummies {año}. Todos los Derechos Reservados"

#### Columna 3: Redes Sociales
- Componente `SocialMediaIcons` reutilizable
- Iconos en color blanco
- Enlaces a Facebook, Instagram, TikTok, etc.

## Estructura de Archivos

```
Footer/
├── index.astro       # Componente principal
├── styles.css        # Estilos CSS
└── README.md         # Documentación
```

## Uso

El componente se importa automáticamente en el `ProductosConCausaLayout.astro`:

```astro
---
import PCCFooter from '../components/productosconcausa/Footer/index.astro';
---

<PCCFooter />
```

## Componentes Reutilizados

### SocialMediaIcons
Componente común que muestra los iconos de redes sociales:

```astro
<SocialMediaIcons 
  currentLang={currentLang}
  iconColor="white"
  centered={false}
/>
```

### Logos
Los logos se obtienen desde la configuración centralizada en `/src/config/assets.ts`:

```typescript
import { logos } from '../../../config/assets';
```

## Estilos

### Colores
- **Fondo**: `bg-primary` (var(--color-primary, #00601b))
- **Texto**: `text-white`
- **Hover**: Opacidad 0.8 en enlaces

### Responsive
- **Desktop**: Grid de 3 columnas
- **Mobile**: Layout vertical apilado
- **Alineación**: Centrado en móvil, alineado en desktop

## Características Técnicas

- ✅ Fondo primary con texto blanco
- ✅ Logo de Yummies centrado
- ✅ Redes sociales integradas
- ✅ Información de contacto completa
- ✅ Responsive design
- ✅ Iconos SVG inline para mejor rendimiento
- ✅ Componentes reutilizables
- ✅ Transiciones suaves en hover

## Accesibilidad

- Iconos con `aria-label` descriptivos
- Enlaces con `title` para tooltips
- Contraste adecuado (blanco sobre verde)
- Estructura semántica con `<footer>`

## Personalización

Para modificar la información de contacto, edita directamente el componente `index.astro`:

```astro
<span>Tu dirección aquí</span>
<span>Tu teléfono aquí</span>
<span>Tu horario aquí</span>
```

Para cambiar las redes sociales, modifica los archivos de traducción en `/src/locales/es/common.json` en la sección `social_media`.
