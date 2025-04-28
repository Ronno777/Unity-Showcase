document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);
  
    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
      lightbox.innerHTML = '';
    });
  
    document.querySelectorAll('.screenshots img').forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        const clone = img.cloneNode();
        lightbox.innerHTML = '';
        lightbox.appendChild(clone);
        lightbox.style.display = 'flex';
      });
    });
  });  