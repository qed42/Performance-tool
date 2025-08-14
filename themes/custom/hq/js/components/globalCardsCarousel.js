(function($, _, Drupal) {
  Drupal.behaviors.globalCardsCarousel = {
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
        $('li[id^="quicktabs-tab-latest_resources_by_type_tabs-"] a').on('click', function() {
          activeCardSlider();
        });
      }

      function activeTabSlider(target) {
        const currentSwiper = target.find('.swiper-container');
        let itemsPerView = target.find('.card-carousel-items').text().trim();
        let tabSwiperCards = [];
        let activeTabText = $('.quicktabs-tabs').find('li.active a').text().toLowerCase();
        target.addClass('card-carousel-init');
        currentSwiper.addClass('cards-' + activeTabText);
        currentSwiper.closest('.cards_container').find('.swiper-button-prev').addClass('tab-card-button-prevCard-' + activeTabText);
        currentSwiper.closest('.cards_container').find('.swiper-button-next').addClass('tab-card-button-nextCard-' + activeTabText);
        currentSwiper.closest('.cards_container').find('.swiper-scrollbar').addClass('tab-swiper-scrollbar');
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
              slidesPerView: (itemsPerView < 3) ? 2 : 2.33,
            },
            768: {
              slidesPerView: (itemsPerView < 4) ? 3 : 3.33,
            },
            1024: {
              slidesPerView: (itemsPerView < 5) ? 4 : 4.33,
            }
          },
          navigation: {
            nextEl: '.tab-card-button-nextCard-' + activeTabText,
            prevEl: '.tab-card-button-prevCard-' + activeTabText
          },
          scrollbar: {
            el: '.tab-swiper-scrollbar',
            draggable: true
          }
        });
        $(window).on('resize', function() {
          tabSwiperCards[activeTabText].update();
        });
      }

      function activeCardSlider() {
        if ($('.hq-carousel-global-card:visible').length > 0) {
          $('.hq-carousel-global-card:visible').each(function(index, element) {
            let target = $(this);
            const currentSwiper = target.find('.swiper-container');
            let itemsPerView = target.find('.card-carousel-items').text().trim();
            let setItemPerView = parseInt(target.find('.field--name-field-items-per-view').text().trim());
            let caroselSlide = 4;
            if (!isNaN(setItemPerView)) {
              let totalItems = itemsPerView;;
              if (totalItems <= setItemPerView) {
                caroselSlide = setItemPerView; // Show exact slides if totalItems <= itemsPerView
              } else {
                // Determine the number of slides to show in the carousel.
                // If `setItemPerView` is 2, 3, or 4 and `totalItems` exceeds that value,
                // slightly increase the number of slides to allow partial visibility of the next item.
                // Otherwise, use the default `setItemPerView` value.
                caroselSlide = (setItemPerView === 2 && totalItems > 2) ? 2.33 :
                  (setItemPerView === 3 && totalItems > 3) ? 3.33 :
                  (setItemPerView === 4 && totalItems > 4) ? 4.33 :
                  setItemPerView;
              }
            }
            else if (itemsPerView > 4) {
              caroselSlide = 4.33;
            }
            let caroselSlideNexttablet = 3.33;
            let caroselSlideNext = 4.33;
            let globalSwiperCards = [];
            if ($(this).find('.card-carousel-slide').length) {
              caroselSlide = 3;
              caroselSlideNexttablet = 2.33;
              if (itemsPerView > 3) {
                caroselSlide = 3.33;
              }
            }
            
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
              currentSwiper.closest('.cards_container').find('.swiper-scrollbar').addClass('card-swiper-scrollbar');
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
                    slidesPerView: (itemsPerView < 3) ? 2 : 2.33,
                  },
                  768: {
                    slidesPerView: (itemsPerView < 4) ? caroselSlideNexttablet : caroselSlideNexttablet,
                  },
                  1024: {
                    slidesPerView: caroselSlide,
                  }
                },
                navigation: {
                  nextEl: '.card-button-nextCard-' + index,
                  prevEl: '.card-button-prevCard-' + index
                },
                scrollbar: {
                  el: '.card-swiper-scrollbar',
                  draggable: true
                }
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

//# sourceMappingURL=../map/components/globalCardsCarousel.js.map
