window.addEventListener('DOMContentLoaded', () => {
    // Fade-in & background swap
    const sections = document.querySelectorAll('.project-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Fade in
          entry.target.querySelector('div').classList.add('opacity-100','translate-y-0');
          // Swap background
          document.body.style.backgroundImage = entry.target.dataset.bg;
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(s => observer.observe(s));
  
    // Lightbox
    document.querySelectorAll('.screenshot').forEach(el => {
      el.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        document.getElementById('modal-img').src = el.dataset.img;
        document.getElementById('modal-desc').textContent = el.dataset.desc;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      });
    });
    document.getElementById('modal-close').addEventListener('click', () => {
      const modal = document.getElementById('modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  });
  
  // Smooth Next → navigation
  function goTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }  