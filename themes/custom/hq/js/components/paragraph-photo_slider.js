(function ($, _, Drupal) {
  Drupal.behaviors.photoSlider = {
    attach: _.once(function (context) {
      $(".photo-slider__wrapper", context).each(function () {
        const $wrapper = $(this);
        const $content = $wrapper.find('.photo-slider__content');
        const $imageContainer = $wrapper.find('.photo-slider__images .swiper-container');
        const carouselCount = parseInt($content.find('.carousel-count').text(), 10);
        const sliderLoop = carouselCount > 1;

        if ($imageContainer.length === 0) return; // Skip if no swiper container found

        // Main horizontal image slider
        const paragraphPhotoSlide = new Swiper($imageContainer[0], {
          slidesPerView: 1.10,
          slidesPerGroup: 1,
          spaceBetween: 0,
          freeMode: false,
          simulateTouch: false,
          speed: 500,
          loop: sliderLoop,
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
        });

        // Vertical slider (desktop)
        const verticalContainer = $content.find('.photo-slider-vertical');
        const paragraphVerticalSwiper = new Swiper(verticalContainer[0], {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
          freeMode: false,
          simulateTouch: false,
          speed: 500,
          loop: sliderLoop,
          direction: 'vertical',
        });

        // Vertical slider (mobile)
        const $mobileSwiper = $content.find('.photo-slider-mobile');
        const $prevBtn = $content.find('.swiper-button-prev').addClass('photo-slider-button-prevCard');
        const $nextBtn = $content.find('.swiper-button-next').addClass('photo-slider-button-nextCard');
        const paragraphVerticalSwiperMobile = new Swiper($mobileSwiper[0], {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
          freeMode: true,
          simulateTouch: true,
          speed: 300,
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
          navigation: {
            nextEl: $nextBtn[0],
            prevEl: $prevBtn[0],
          },
        });

        // Apply commonSlider if on desktop
        if (window.innerWidth >= 1180 && sliderLoop) {
          window.Drupal.commonSlider($wrapper, paragraphVerticalSwiper, paragraphPhotoSlide);
        }

        // Keyboard accessibility
        $wrapper.keyup(function (event) {
          if (event.keyCode === 13 && window.innerWidth >= 1180 && sliderLoop) {
            paragraphPhotoSlide.slideNext();
            paragraphVerticalSwiper.slideNext();
          }
        });

        // Handle resizing
        let resizeId;
        $(window).on('resize.photoSlider-' + $wrapper.index(), function () {
          clearTimeout(resizeId);
          resizeId = setTimeout(() => {
            paragraphPhotoSlide.update();
            paragraphVerticalSwiper.update();
            paragraphVerticalSwiperMobile.update();
          }, 100);
        });
      });
    })
  };
})(jQuery, _, Drupal);

//# sourceMappingURL=../map/components/paragraph-photo_slider.js.map
