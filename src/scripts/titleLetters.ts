// Títulos que aparecen letra por letra.
// Uso: agregar la clase "title-letters" al título y llamar initTitleLetters() en 'astro:page-load'.
// Estilos en src/styles/title-letters.css
export function initTitleLetters() {
  const letterTitles = document.querySelectorAll<HTMLElement>('.title-letters');

  // Guarda el HTML original para restaurarlo al terminar y conservar el texto intacto (kerning, grosor)
  const originalTitles = new Map<HTMLElement, string>();

  const restoreTitle = (title: HTMLElement) => {
    const original = originalTitles.get(title);
    if (original === undefined) return;
    title.innerHTML = original;
    title.removeAttribute('aria-label');
    originalTitles.delete(title);
  };

  const splitIntoLetters = (title: HTMLElement) => {
    if (title.dataset.split === 'true') return;
    title.dataset.split = 'true';
    originalTitles.set(title, title.innerHTML);
    title.setAttribute('aria-label', (title.textContent || '').replace(/\s+/g, ' ').trim());

    let charIndex = 0;
    Array.from(title.childNodes).forEach(node => {
      if (node.nodeType !== Node.TEXT_NODE) return; // conserva <br/> y otros elementos

      const fragment = document.createDocumentFragment();
      (node.textContent || '').split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          fragment.appendChild(document.createTextNode(' '));
          return;
        }

        const word = document.createElement('span');
        word.className = 'title-word';
        word.setAttribute('aria-hidden', 'true');
        Array.from(part).forEach(letter => {
          const char = document.createElement('span');
          char.className = 'title-char';
          char.textContent = letter;
          char.style.setProperty('--char-index', String(charIndex++));
          word.appendChild(char);
        });
        fragment.appendChild(word);
      });

      node.replaceWith(fragment);
    });
  };

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const title = entry.target as HTMLElement;
          const chars = title.querySelectorAll<HTMLElement>('.title-char');
          const lastChar = chars[chars.length - 1];

          if (lastChar) {
            const onEnd = (event: TransitionEvent) => {
              if (event.propertyName !== 'transform') return;
              lastChar.removeEventListener('transitionend', onEnd);
              restoreTitle(title);
            };
            lastChar.addEventListener('transitionend', onEnd);
          }

          title.classList.add('visible');
          titleObserver.unobserve(title);
        }
      });
    }, { threshold: 0.4 });

    letterTitles.forEach(title => {
      splitIntoLetters(title);
      titleObserver.observe(title);
    });
  }
}
