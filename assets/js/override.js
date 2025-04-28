window.addEventListener('DOMContentLoaded', () => {
    // Fade-in & background swap
    const sections = document.querySelectorAll('.project-section');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          document.body.style.backgroundImage = e.target.dataset.bg;
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(s => obs.observe(s));
  
    // Lightbox modal
    document.querySelectorAll('.screenshot').forEach(el => {
      el.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        modal.querySelector('img').src = el.dataset.img;
        modal.querySelector('p').textContent = el.dataset.desc;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      });
    });
    document.getElementById('modal-close').onclick = () => {
      const m = document.getElementById('modal');
      m.classList.add('hidden');
      m.classList.remove('flex');
    };
  });
  
  // Smooth “Next →” button scroll
  function goTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }  