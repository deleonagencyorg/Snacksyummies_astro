# Componente Navigation - Productos con Causa

Componente de navegación principal para la sección de Productos con Causa, diseñado según la imagen de referencia proporcionada.

## Características

### Diseño
- **Logo YummiPops**: Logo principal en la izquierda
- **Logo Operación Sonrisa Honduras**: Logo secundario junto al texto "Operación"
- **Navegación horizontal**: Enlaces de navegación en el centro/derecha
- **Sticky header**: Se mantiene fijo en la parte superior al hacer scroll
- **Responsive**: Menú hamburguesa en móviles

### Enlaces de Navegación
1. Inicio
2. Sobre la causa
3. Historia
4. Impacto
5. Productos participantes
6. Testimonios

### Funcionalidades
- **Indicador de página activa**: El enlace de la página actual se resalta en color primary
- **Animación hover**: Línea inferior que aparece al pasar el mouse
- **Menú móvil**: Overlay completo con animación slide-down
- **Cierre automático**: El menú móvil se cierra al hacer clic en un enlace o al redimensionar a desktop

## Estructura de Archivos

```
Navigation/
├── index.astro       # Componente principal
├── styles.css        # Estilos CSS
├── scripts.js        # Funcionalidad JavaScript
└── README.md         # Documentación
```

## Uso

El componente se importa automáticamente en el `ProductosConCausaLayout.astro`:

```astro
---
import PCCNavigation from '../components/productosconcausa/Navigation/index.astro';
---

<PCCNavigation />
```

## Logos

Los logos se gestionan desde la configuración centralizada en `/src/config/assets.ts`:

```typescript
export const logos = {
  yummiPops: {
    url: 'https://snack.yummiespromociones.com/SnacksyummiesAssets/Yummi-pops-3.webp',
    alt: 'YummiPops'
  },
  operacionSonrisa: {
    url: `${S3_BASE_URL}/operacion-sonrisa-logo.svg`,
    alt: 'Operación Sonrisa Honduras'
  }
};
```

**Nota:** El logo de YummiPops se encuentra en el archivo `/src/locales/es/brands.json` y ya está disponible en el S3.

## Estilos

### Desktop
- Navegación horizontal con enlaces espaciados
- Logos visibles en todo momento
- Efecto hover con línea inferior animada

### Mobile (< 1024px)
- Botón hamburguesa en la esquina derecha
- Menú overlay completo
- Logo de Operación Sonrisa visible en el menú móvil
- Enlaces en formato vertical

## Accesibilidad

- Atributos `aria-label` en botones y enlaces
- Atributo `aria-expanded` en el botón del menú móvil
- Navegación por teclado soportada
- Textos alternativos en todas las imágenes

## Personalización

Para agregar o modificar enlaces de navegación, edita el array `navLinks` en `index.astro`:

```typescript
const navLinks = [
  { href: '/productosconcausa', label: 'Inicio', key: 'inicio' },
  { href: '/productosconcausa/nueva-pagina', label: 'Nueva Página', key: 'nueva-pagina' },
  // ... más enlaces
];
```

## Notas Técnicas

- Utiliza `astro:page-load` para compatibilidad con View Transitions
- Previene scroll del body cuando el menú móvil está abierto
- Cierre automático del menú en cambio de tamaño de ventana
- Z-index de 1000 para asegurar que esté sobre otros elementos
