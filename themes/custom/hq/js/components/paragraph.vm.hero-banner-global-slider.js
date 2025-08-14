(function ($, _, Drupal) {
  Drupal.behaviors.heroSliderZoom = {
    attach: _.once(function (context) {
      if ($(".hero-banner-global__wrapper.slider").length > 0) {
        let resizeId;
        let swiperSlide = new Swiper('.hero-banner-global__wrapper.slider .swiper-container', {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
          freeMode: true,
          simulateTouch: true,
          speed: 1100,
          loop: true,
          effect: "creative",
          creativeEffect: {
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          },
          pagination: {
            el: ".swiper-pagination",
          },
          breakpoints: {
            1080: {
              freeMode: false,
              simulateTouch: false,
            }
          },
        });

        $('.hero-banner-global__wrapper').find('.swiper-slide').on('click', function (e) {
          if(!$(e.target).hasClass('btn-share') && !$(e.target).closest('.field').hasClass('field--name-field-link-limited') ) {
            swiperSlide.slideNext();
          }
        });

        $(window).resize(() => {
          clearTimeout(resizeId);
          resizeId = setTimeout(() => {
            swiperSlide.update();
          }, 100);
        });
          
      } // end if
    }) // end attach
  }
})(jQuery, _, Drupal);

//# sourceMappingURL=../map/components/paragraph.vm.hero-banner-global-slider.js.map
