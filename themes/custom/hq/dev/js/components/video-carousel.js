(function ($, Drupal, once) {
  Drupal.behaviors.videoCarousel = {
    attach: function (context) {
      // Close popup on click outside or close button
      once('video-popup-close', 'body', context).forEach(() => {
        $('body').on('click', function (e) {
          if (
            $(e.target).is('#video-popup-overlay') ||
            $(e.target).hasClass('video-popup-close')
          ) {
            closeVideoPopup();
          }
        });
      });

      // Close popup on ESC key
      once('video-popup-esc', 'body', context).forEach(() => {
        $(document).on('keydown.videoPopupEsc', function (e) {
          if (e.key === 'Escape' || e.keyCode === 27) {
            closeVideoPopup();
          }
        });
      });

      function getVideoSrc($iframe) {
        // Support for both iframe and div[data-src] (social embed)
        if ($iframe.length === 0) {
          return null;
        }
        return $iframe.data('src') || $iframe.attr('src');
      }

      function openVideoPopup(src) {
        if (!src) return;

        if (!src.includes('autoplay=1')) {
          src += (src.includes('?') ? '&' : '?') + 'autoplay=1';
        }

        const iframe = `<iframe src="${src}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
        $('#video-popup-overlay .video-popup-content').html(iframe);
        $('#video-popup-overlay').removeClass('hidden');
      }

      function closeVideoPopup() {
        $('#video-popup-overlay .video-popup-content').empty();
        $('#video-popup-overlay').addClass('hidden');
      }

      function bindVideoPopupTriggers($wrapper, videoSrc) {
        const $poster = $wrapper.find('.video-poster');
        const $playButton = $wrapper.find('.video-play-button');

        if (!videoSrc) return;

        $poster.off('click').on('click', function () {
          openVideoPopup(videoSrc);
        });

        $playButton.off('click').on('click', function () {
          openVideoPopup(videoSrc);
        });
      }

      // Swiper carousel setup
      $('.paragraph--type--video-carousel .swiper-container', context).each(function () {
        const $videoSwiperContainer = $(this);
        if ($videoSwiperContainer.data('initialized')) return;
        $videoSwiperContainer.data('initialized', true);
      
        const swiperId = $videoSwiperContainer.attr('id');
        const $prev = $(`.swiper-button-prev[data-swiper-target="${swiperId}"]`);
        const $next = $(`.swiper-button-next[data-swiper-target="${swiperId}"]`);
      
        // Bind popup triggers
        $videoSwiperContainer.find('.video-wrapper').each(function () {
          const $wrapper = $(this);
          const $iframe = $wrapper.find('.video-iframe, .embedded-social-video iframe');
          const videoSrc = getVideoSrc($iframe);
          bindVideoPopupTriggers($wrapper, videoSrc);
        });
      
        const itemsPerView = parseInt($videoSwiperContainer.data('items-per-view')) || 2;
        const totalItems = $videoSwiperContainer.find('.swiper-slide').length;
      
        // Always use partial preview if 3 per view
        let slidesPerView = itemsPerView === 3 ? 2.13 : itemsPerView;
      
        // Enable loop *only* if itemsPerView === 3 and totalItems === 3
        const enableLoop = itemsPerView === 3 && totalItems === 3;
      
        const swiper = new Swiper($videoSwiperContainer[0], {
          slidesPerView: 1,
          spaceBetween: 40,
          slidesPerGroup: 1,
          freeMode: false,
          simulateTouch: true,
          grabCursor: true,
          loop: enableLoop,
          navigation: {
            nextEl: $next[0],
            prevEl: $prev[0]
          },
          breakpoints: {
            641: {
              slidesPerView: slidesPerView,
              spaceBetween: 20
            }
          }
        });
      
        // Hide arrows only if totalItems <= itemsPerView and loop is not enabled
        if (!enableLoop && totalItems <= itemsPerView) {
          $prev.hide();
          $next.hide();
        }
      });

      // Non-swiper (single video) layout binding
      once('standalone-video-play', '.video-crousel__content .video-wrapper', context).forEach((wrapper) => {
        const $wrapper = $(wrapper);
        const $iframe = $wrapper.find('.video-iframe, .embedded-social-video iframe');
        const videoSrc = getVideoSrc($iframe);
        bindVideoPopupTriggers($wrapper, videoSrc);
      });
    }
  };
})(jQuery, Drupal, once);
