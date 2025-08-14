Drupal.behaviors.topicCardsBackdrop = {
  attach: function (context, settings) {
    if (window.innerWidth <= 768) {
      const containers = once('topicCardsBackdrop', document.querySelectorAll('.topic-cards-backdrop .swiper-container', context));

      containers.forEach((container, index) => {
        const swiperWrapper = container.querySelector('.swiper-wrapper');
        if (!swiperWrapper) return;

        const slides = swiperWrapper.querySelectorAll('.swiper-slide');

        const uniqueClass = 'topic-cards-instance-' + index;
        container.classList.add(uniqueClass);

        new Swiper('.' + uniqueClass, {
          slidesPerView: 1.15,
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
