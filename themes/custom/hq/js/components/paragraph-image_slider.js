(function ($, _, Drupal) {
  Drupal.behaviors.imageCarousel = {
    attach: _.once(function (context) {
      $(".image-carousel__wrapper", context).each(function (index) {
        const $wrapper = $(this);
        const $carouselContainer = $wrapper.find(".image-carousel-container.swiper-container");
        const $carouselCount = parseInt($wrapper.find(".carousel-count").text(), 10);
        const sliderLoop = $carouselCount > 1;

        if ($carouselContainer.length === 0) return;

        // Add unique navigation classes per wrapper to avoid conflicts
        const prevClass = `image-carousel-button-prevCard-${index}`;
        const nextClass = `image-carousel-button-nextCard-${index}`;
        $wrapper.find(".swiper-button-prev").addClass(prevClass);
        $wrapper.find(".swiper-button-next").addClass(nextClass);

        const paragraphImageCarousel = new Swiper($carouselContainer[0], {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
          freeMode: true,
          simulateTouch: true,
          speed: 500,
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
          breakpoints: {
            1180: {
              loop: sliderLoop,
              freeMode: false,
              simulateTouch: false,
            }
          },
          navigation: {
            nextEl: `.${nextClass}`,
            prevEl: `.${prevClass}`
          },
        });

        if (window.innerWidth >= 1180 && sliderLoop) {
          window.Drupal.commonSlider($wrapper, paragraphImageCarousel, null);
        }

        $wrapper.keyup(function (event) {
          if (event.keyCode === 13 && window.innerWidth >= 1180 && sliderLoop) {
            paragraphImageCarousel.slideNext();
          }
        });

        let resizeId;
        $(window).on("resize.imageCarousel-" + index, function () {
          clearTimeout(resizeId);
          resizeId = setTimeout(() => {
            paragraphImageCarousel.update();
          }, 100);
        });
      });
    })
  };
})(jQuery, _, Drupal);

//# sourceMappingURL=../map/components/paragraph-image_slider.js.map
