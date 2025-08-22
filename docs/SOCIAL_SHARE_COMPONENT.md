# Componente de Compartir en Redes Sociales

Este documento explica cómo utilizar el componente `SocialShare` para agregar funcionalidad de compartir en redes sociales a cualquier página o componente de la aplicación.

## Características

- Soporte para múltiples plataformas (Facebook, Twitter, WhatsApp, Telegram)
- Personalizable (tamaño de iconos, colores, etiquetas)
- Compatible con internacionalización (i18n)
- Fácil integración en páginas Astro y componentes React

## Uso en páginas Astro

```astro
---
import SocialShare from '../components/common/SocialShare.astro';
---

<SocialShare 
  url="https://yummies.com/es/producto/doritos"
  title="¡Mira este producto increíble!"
  description="Los mejores Taqueritos para tus fiestas"
  hashtags={["Yummies", "Taqueritos", "Snacks"]}
  iconSize={32}
  round={true}
  className="my-4"
  buttonClassName="mx-2"
  showLabels={true}
/>
```

## Parámetros

| Parámetro | Tipo | Descripción | Valor por defecto |
|-----------|------|-------------|-------------------|
| `url` | `string` | URL a compartir. Si no se proporciona, se usa la URL actual | `window.location.href` |
| `title` | `string` | Título del contenido a compartir | (requerido) |
| `description` | `string` | Descripción del contenido | `''` |
| `hashtags` | `string[]` | Hashtags para incluir en la publicación | `[]` |
| `iconSize` | `number` | Tamaño de los iconos en píxeles | `32` |
| `round` | `boolean` | Si los iconos deben ser redondos | `true` |
| `className` | `string` | Clases CSS para el contenedor principal | `''` |
| `buttonClassName` | `string` | Clases CSS para cada botón | `''` |
| `platforms` | `string[]` | Plataformas a mostrar | `['facebook', 'twitter', 'whatsapp', 'telegram']` |
| `showLabels` | `boolean` | Mostrar etiquetas debajo de los iconos | `false` |

## Uso en componentes React

Si necesitas usar el componente directamente en un componente React, puedes importar `SocialShare.jsx`:

```jsx
import SocialShare from '../components/common/SocialShare.jsx';

function MyComponent() {
  return (
    <SocialShare 
      url="https://yummies.com/es/producto/doritos"
      title="¡Mira este producto increíble!"
      description="Los mejores Taqueritos para tus fiestas"
      hashtags={["Yummies", "Taqueritos", "Snacks"]}
      iconSize={32}
      round={true}
      className="my-4"
      buttonClassName="mx-2"
      showLabels={true}
      platforms={['facebook', 'twitter', 'whatsapp']} // Personalizar plataformas
      labels={{
        facebook: 'Compartir',
        twitter: 'Tuitear',
        whatsapp: 'Enviar'
      }}
    />
  );
}
```

## Ejemplos de uso

### Compartir un producto

```astro
---
import SocialShare from '../components/common/SocialShare.astro';

const { product } = Astro.props;
---

<div class="product-card">
  <h2>{product.name}</h2>
  <p>{product.description}</p>
  <img src={product.image} alt={product.name} />
  
  <SocialShare 
    title={`Descubre ${product.name} de Yummies`}
    description={product.description}
    hashtags={["Yummies", product.category]}
    iconSize={24}
    className="mt-4"
  />
</div>
```

### Compartir una noticia o blog post

```astro
---
import SocialShare from '../components/common/SocialShare.astro';

const { post } = Astro.props;
---

<article>
  <h1>{post.title}</h1>
  <div class="post-meta">
    <span>{post.date}</span>
    <SocialShare 
      title={post.title}
      description={post.excerpt}
      hashtags={post.tags}
      iconSize={20}
      className="inline-flex ml-4"
    />
  </div>
  <div class="post-content">
    {post.content}
  </div>
</article>
```

## Personalización avanzada

Para personalizar aún más el componente, puedes modificar:

1. `SocialShare.jsx` para cambiar la lógica de renderizado o añadir nuevas plataformas
2. Aplicar estilos personalizados mediante las props `className` y `buttonClassName`
3. Modificar los tamaños y colores de los iconos mediante las props correspondientes

## Consideraciones de rendimiento

El componente utiliza `react-share`, que carga iconos SVG en línea, lo que es eficiente para el rendimiento. No se realizan solicitudes HTTP adicionales para cargar los iconos.
