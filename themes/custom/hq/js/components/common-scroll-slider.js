(function ($, _, Drupal) {

  window.Drupal.commonSlider = Drupal.commonSlider || {};

  window.Drupal.commonSlider = function (sliderWrapper, paragraphPhotoSlide, paragraphVerticalSwiper) {

    function getScrollbarWidth() {
      const scrollDiv = document.createElement("div");
      scrollDiv.style.width = "100px";
      scrollDiv.style.height = "100px";
      scrollDiv.style.overflow = "scroll";
      scrollDiv.style.position = "absolute";
      scrollDiv.style.top = "-9999px";

      document.body.appendChild(scrollDiv);
      const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);

      return scrollbarWidth;
    }

    let scrollbarWidth = getScrollbarWidth();

    let $sliderWrapper = sliderWrapper,
      stickyClass = 'is-sticky',
      onceClass = 'swiper-once',
      isScrollLocked = false,
      passed = false,
      isWheelBlocked = false; // Flag to block multiple wheel events

    function toggleScrolling(lock) {
      $('body').css({
        'overflow': lock ? 'hidden' : 'auto',
        'padding-right': lock ? scrollbarWidth : 0
      });
    }

    function checkScrollPosition() {
      let scrollTop = $(window).scrollTop(),
        targetOffset = $sliderWrapper.offset().top;

      if (scrollTop === 0) {
        $sliderWrapper.removeClass(`${onceClass} ${stickyClass}`);
        isScrollLocked = false;
        toggleScrolling(false);
      } else if (scrollTop >= targetOffset && !isScrollLocked) {
        requestAnimationFrame(() => {
          isScrollLocked = true;
          toggleScrolling(true);
          $sliderWrapper.addClass(stickyClass);
          $(window).scrollTop(targetOffset);
        });
      } else if (scrollTop < targetOffset && $sliderWrapper.hasClass(onceClass)) {
        requestAnimationFrame(() => {
          isScrollLocked = false;
          $sliderWrapper.addClass(stickyClass);
          toggleScrolling(true);
          $(window).scrollTop(targetOffset);
        });
      }
      lastScrollY = scrollTop;
    }

    $(document).ready(function () {
      $('html, body').animate({ scrollTop: 0 }, 200);
    });

    let lastScrollY = 0;
    $(window).on("scroll", function () {
      checkScrollPosition();
    });

    $sliderWrapper.on('wheel', function (e) {
      if (!$sliderWrapper.hasClass(stickyClass)) {
         return; // Prevent multiple wheel events
      }

      if (isWheelBlocked) {
         return; // Prevent multiple wheel events
      }

      e.preventDefault(); // Prevent default scroll behavior
      // Block the wheel event temporarily for 500ms
      isWheelBlocked = true;

      requestAnimationFrame(() => {
        if (e.originalEvent.deltaY > 0) { // Scroll down
          if (paragraphPhotoSlide.activeIndex < paragraphPhotoSlide.slides.length - 2) {
            paragraphPhotoSlide.slideNext();
            if (paragraphVerticalSwiper) paragraphVerticalSwiper.slideNext();
            setTimeout(function () {
              $sliderWrapper.addClass(onceClass);
            }, 500);
            
          } else {
            $sliderWrapper.removeClass(stickyClass);
            toggleScrolling(false);
            isScrollLocked = true;
          }
        } else { // Scroll up
          if ($sliderWrapper.hasClass(onceClass)) {
            paragraphPhotoSlide.slidePrev();
            if (paragraphVerticalSwiper) paragraphVerticalSwiper.slidePrev();

            if (paragraphPhotoSlide.activeIndex <= 1) {
              setTimeout(function () {
                $sliderWrapper.removeClass(`${onceClass} ${stickyClass}`);
                isScrollLocked = false;
                toggleScrolling(false);
              }, 500);
            }
          }
        }
      });

      // Release the wheel block after 1200ms
      setTimeout(function () {
        isWheelBlocked = false;
      },1200);
    });
  };

})(jQuery, _, Drupal);

//# sourceMappingURL=../map/components/common-scroll-slider.js.map
