// src/scripts/winners-animations.js

document.addEventListener('DOMContentLoaded', function() {
  // Initialize confetti animation triggers
  initConfettiAnimations();
  
  // Initialize intersection observer for scroll animations
  initScrollAnimations();
  
  // Initialize title text animation
  initTitleAnimations();
});

function initConfettiAnimations() {
  const confettiContainers = document.querySelectorAll('.confetti-container');
  
  confettiContainers.forEach(container => {
    // Add random delay to confetti pieces
    const pieces = container.querySelectorAll('.confetti-piece');
    pieces.forEach((piece, index) => {
      const randomDelay = Math.random() * 2;
      piece.style.setProperty('--delay', `${randomDelay}s`);
      
      // Random vertical position for better distribution (since we're moving horizontally)
      const randomPosition = Math.random() * 80 + 10; // 10% to 90%
      piece.style.top = `${randomPosition}%`;
      
      // Random animation duration
      const randomDuration = 3 + Math.random() * 2; // 3-5 seconds
      piece.style.animationDuration = `${randomDuration}s`;
    });
  });
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
      }
    });
  }, observerOptions);

  // Observe winner cards
  const winnerCards = document.querySelectorAll('.winner-card');
  winnerCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
  });
}

function initTitleAnimations() {
  const title = document.querySelector('[data-name="Title"] h1');
  if (title) {
    // Add staggered animation to title words
    const words = title.innerHTML.split(' ');
    title.innerHTML = words.map((word, index) => 
      `<span class="title-word" style="animation-delay: ${index * 0.1}s">${word}</span>`
    ).join(' ');
    
    // Add word animation class
    const titleWords = title.querySelectorAll('.title-word');
    titleWords.forEach(word => {
      word.style.opacity = '0';
      word.style.transform = 'translateY(30px)';
      word.style.display = 'inline-block';
      word.style.animation = 'fadeInUp 0.8s ease-out forwards';
    });
  }
}

// CSS-in-JS for animations that need to be dynamic
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards !important;
  }
  
  .title-word {
    transition: all 0.3s ease;
  }
  
  .title-word:hover {
    transform: translateY(-5px) scale(1.05);
    text-shadow: 0 8px 30px rgba(0,0,0,0.4);
  }
`;
document.head.appendChild(style);
