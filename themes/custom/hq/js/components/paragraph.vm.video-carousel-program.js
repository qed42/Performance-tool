(function ($, Drupal, once) {
  Drupal.behaviors.videoCarouselProgram = {
    attach: function (context) {
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

      once('video-popup-esc', 'body', context).forEach(() => {
        $(document).on('keydown.videoPopupEsc', function (e) {
          if (e.key === 'Escape' || e.keyCode === 27) {
            closeVideoPopup();
          }
        });
      });

      function getVideoSrc($iframe) {
        if ($iframe.length === 0) return null;
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

      $('.paragraph--type--video-carousel.paragraph--view-mode--program .swiper-container', context).each(function () {
        const $videoSwiperContainer = $(this);
        const $wrapperList = $videoSwiperContainer.find('.video-wrapper');
        if (!$wrapperList.length) return;

        $wrapperList.each(function () {
          const $wrapper = $(this);
          const $iframe = $wrapper.find('.video-iframe, .embedded-social-video iframe');
          const videoSrc = getVideoSrc($iframe);
          bindVideoPopupTriggers($wrapper, videoSrc);
        });

        if (window.innerWidth <= 767.98 && !$videoSwiperContainer.data('initialized')) {
          $videoSwiperContainer.data('initialized', true);

          new Swiper($videoSwiperContainer[0], {
            slidesPerView: 1.15,
            spaceBetween: 32,
            slidesPerGroup: 1,
            simulateTouch: true,
            grabCursor: true,
            freeMode: false,
            watchSlidesProgress: true,
          });
        }
      });

      once('standalone-video-play', '.video-crousel__content .video-wrapper', context).forEach((wrapper) => {
        const $wrapper = $(wrapper);
        const $iframe = $wrapper.find('.video-iframe, .embedded-social-video iframe');
        const videoSrc = getVideoSrc($iframe);
        bindVideoPopupTriggers($wrapper, videoSrc);
      });
    }
  };
})(jQuery, Drupal, once);

//# sourceMappingURL=../map/components/paragraph.vm.video-carousel-program.js.map
