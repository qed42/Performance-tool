(function ($, _, Drupal) {
  Drupal.behaviors.verticalImageSlider = {
    attach: _.once(function (context) {
      $('.vertical-image-slider__wrapper', context).each(function (index) {
        const $wrapper = $(this);
        const $slider = $wrapper.find('.vertical-image-slider');
        const $carouselCount = parseInt($wrapper.find('.carousel-count').text(), 10);
        const sliderLoop = $carouselCount > 1;

        if ($slider.length === 0) return;

        // Unique navigation classes per instance
        const prevClass = `vertical-image-slider-button-prevCard-${index}`;
        const nextClass = `vertical-image-slider-button-nextCard-${index}`;
        $wrapper.find('.swiper-button-prev').addClass(prevClass);
        $wrapper.find('.swiper-button-next').addClass(nextClass);

        const verticalImageSwiper = new Swiper($slider[0], {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
          freeMode: true,
          simulateTouch: true,
          speed: 1250,
          direction: 'vertical',
          effect: 'creative',
          creativeEffect: {
            prev: {
              shadow: true,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          },
          navigation: {
            nextEl: `.${nextClass}`,
            prevEl: `.${prevClass}`
          },
          breakpoints: {
            1180: {
              freeMode: false,
              simulateTouch: false,
              loop: sliderLoop,
            }
          },
        });

        if (window.innerWidth >= 1180 && sliderLoop) {
          window.Drupal.commonSlider($wrapper, verticalImageSwiper, null);
        }

        $wrapper.keyup(function (event) {
          if (event.keyCode === 13 && window.innerWidth >= 1180 && sliderLoop) {
            verticalImageSwiper.slideNext();
          }
        });

        let resizeId;
        $(window).on('resize.verticalSlider-' + index, function () {
          clearTimeout(resizeId);
          resizeId = setTimeout(() => {
            verticalImageSwiper.update();
          }, 100);
        });
      });
    })
  };
})(jQuery, _, Drupal);
