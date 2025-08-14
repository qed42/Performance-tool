(function($, _, Drupal) {
  Drupal.behaviors.highlightCardsCarousel = {
    attach: function(context) {

      function setsliderdefaultheight(currentSlider) {
        let defaultWrapper = currentSlider.find('.global-card__wrapper.default.vm');
        let defaultWrapperHeight = 0;
        let hqSlides = currentSlider.find('.swiper-wrapper .swiper-slide');
        hqSlides.each(function(i) {
          let image = $(this).find('.global-card__image');
          let imageHeight = image.height();
          if (imageHeight > defaultWrapperHeight) {
            defaultWrapperHeight = imageHeight;
          }
        });
        defaultWrapper.css('height', defaultWrapperHeight + 'px');
      }

      if ($('.quicktabs-wrapper').length > 0) {
        const $tabLinks = $('li[id^="quicktabs-tab-highlight_component-"] a');
    
        $tabLinks.on('click', function() {
          activeCardSlider();
        });
      }

      function activeTabSlider(target) {
        const currentSwiper = target.find('.swiper-container');
        let itemsPerView = target.find('.card-carousel-items').text().trim();
        let tabSwiperCards = [];
        let activeTabText = $('.block-quicktabshighlightcomponent .quicktabs-tabs').find('li.active a').text().toLowerCase();
        target.addClass('card-carousel-init');
        currentSwiper.addClass('cards-' + activeTabText);
        currentSwiper.closest('.cards_container').find('.swiper-button-prev').addClass('tab-card-button-prevCard-' + activeTabText);
        currentSwiper.closest('.cards_container').find('.swiper-button-next').addClass('tab-card-button-nextCard-' + activeTabText);
        tabSwiperCards[activeTabText] = new Swiper('.cards-' + activeTabText, {
          on: {
            slideChange: function() {
              if (target.closest('.quicktabs-tabpage').length) {
                setsliderdefaultheight(target);
              }
            }
          },
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
              slidesPerView: (itemsPerView < 3) ? 2 : 2,
            },
            768: {
              slidesPerView: (itemsPerView < 4) ? 3 : 3,
            },
            1024: {
              slidesPerView: (itemsPerView < 5) ? 4 : 4,
            }
          },
          navigation: {
            nextEl: '.tab-card-button-nextCard-' + activeTabText,
            prevEl: '.tab-card-button-prevCard-' + activeTabText
          },
        });
        $(window).on('resize', function() {
          tabSwiperCards[activeTabText].update();
        });
      }

      function activeCardSlider() {
        if ($('.hq-carousel-highlight-card:visible').length > 0) {
          $('.hq-carousel-highlight-card:visible').each(function(index, element) {
            let target = $(this);
            const currentSwiper = target.find('.swiper-container');
            let itemsPerView = target.find('.card-carousel-items').text().trim();
            let globalSwiperCards = [];
            
            if (target.hasClass('card-carousel-init')) {
              return;
            } else if(target.closest('.quicktabs-main').length) {
              activeTabSlider(target);
            } else {
              if (target.closest('.quicktabs-tabpage').length <= 0) {
                target.find('.global-card__wrapper.default.vm').closest('.views-row').remove();
              }
              target.addClass('card-carousel-init');
              currentSwiper.addClass('cards-' + index);
              currentSwiper.closest('.cards_container').find('.swiper-button-prev').addClass('card-button-prevCard-' + index);
              currentSwiper.closest('.cards_container').find('.swiper-button-next').addClass('card-button-nextCard-' + index);
              globalSwiperCards[index] = new Swiper('.cards-' + index, {
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
                    slidesPerView: (itemsPerView < 3) ? 2 : 2,
                  },
                  768: {
                    slidesPerView: (itemsPerView < 4) ? 3 : 3,
                  },
                  1024: {
                    slidesPerView: (itemsPerView < 5) ? 4 : 4,
                  }
                },
                navigation: {
                  nextEl: '.card-button-nextCard-' + index,
                  prevEl: '.card-button-prevCard-' + index
                },
              });
              $(window).on('resize', function() {
                globalSwiperCards[index].update();
              });
            }
          });
        } // end if
      } // end active card slider

      activeCardSlider();
    }
  };
})(jQuery, _, Drupal);
