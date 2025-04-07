// Создайте веб-страницу с несколькими большими изображениями и примените ленивую загрузку для этих изображений, чтобы они загружались только при прокрутке к ним.

document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img.lazy-load");

  // Проверяем поддержку Intersection Observer
  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
        console.log(1);
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                // img.style.minHeight = 'auto';
                img.classList.remove("lazy-load");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
      lazyImageObserver.observe(img);
    });
  } else {
    // Для старых браузеров без поддержки Intersection Observer
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.classList.remove("lazy-load");
    });
  }
});