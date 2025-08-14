(function($, _, Drupal) {
  Drupal.behaviors.getInTouchCarousel = {
    attach: function(context) {
      if ($(".hq-carousel-get-in-touch-card").length > 0) {
        $('.hq-carousel-get-in-touch-card').each(function(index, element) {
          if ($(this).hasClass('get-in-touch-card-carousel-init')) {
            return;
          } else {
            $(this).addClass('get-in-touch-card-carousel-init');
            let itemsPerView = $(this).find('.card-carousel-items').text().trim();
            let swiperCards = [];
            const $this = $(this).find('.swiper-container');
            $this.addClass('get-in-touch-cards-' + index);
            $this.closest('.get-in-touch-cards_container').find('.swiper-button-prev').addClass('info-button-prevCard-' + index);
            $this.closest('.get-in-touch-cards_container').find('.swiper-button-next').addClass('info-button-nextCard-' + index);
            $this.closest('.get-in-touch-cards_container').find('.swiper-scrollbar').addClass('info-swiper-scrollbar');

            swiperCards[index] = new Swiper('.get-in-touch-cards-' + index, {
              slidesPerView: 4,
              spaceBetween: 32,
              slidesPerGroup: 1,
              freeMode: true,
              simulateTouch: true,
              grabCursor: true,
              breakpoints: {
                10: {
                  slidesPerView: (itemsPerView < 2) ? 1 : 1.33,
                },
                576: {
                  slidesPerView: (itemsPerView < 3) ? 2 : 2.33,
                }
              },
              navigation: {
                nextEl: '.info-button-nextCard-' + index,
                prevEl: '.info-button-prevCard-' + index
              },
              scrollbar: {
                el: '.info-swiper-scrollbar',
                draggable: true
              }
            });

            $(window).on('resize', function() {
              swiperCards[index].update();
            });
          }
        });
      }
    }
  };
})(jQuery, _, Drupal);
