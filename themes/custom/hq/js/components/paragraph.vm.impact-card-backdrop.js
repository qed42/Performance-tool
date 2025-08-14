Drupal.behaviors.impactCardsBackdrop = {
  attach: function (context, settings) {
    if (window.innerWidth <= 768) {
      const containers = once('impactCardsBackdrop', document.querySelectorAll('.impact-cards-backdrop .swiper-container', context));

      containers.forEach((container, index) => {
        const swiperWrapper = container.querySelector('.swiper-wrapper');
        if (!swiperWrapper) return;

        const slides = swiperWrapper.querySelectorAll('.swiper-slide');
        slides.forEach(slide => {
          slide.style.width = '303px';
        });

        const uniqueClass = 'impact-instance-' + index;
        container.classList.add(uniqueClass);

        new Swiper('.' + uniqueClass, {
          slidesPerView: 'auto',
          spaceBetween: 32,
          speed: 600,
          grabCursor: true,
          loop: false,
          freeMode: false,
        });
      });
    }
  }
};

//# sourceMappingURL=../map/components/paragraph.vm.impact-card-backdrop.js.map
