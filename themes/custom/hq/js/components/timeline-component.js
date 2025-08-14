(function ($, _, Drupal) {
  Drupal.behaviors.timelineFilter = {
    attach: _.once(function (context, settings) {
      if ($('.timeline-filter').length) {
        let isScrolling = false; // Flag for scroll event control

        function setActiveState($element) {
          $element.addClass('active'); // Set the element as active

          // Activate the first associated month-text
          var $firstMonth = $element.find('.month-text').first();
          $('.month-text').removeClass('active');
          $firstMonth.addClass('active');
        }

        // Set the first filter-year element to be active on page load
        var $firstFilterYear = $('.filter-year').first();
        setActiveState($firstFilterYear);


        function scrollHandler(targetId) {
          var targetElement = $('#' + targetId);
          var animateValue = 0;

          if(!targetElement.parent().hasClass('aos-animate')) {
            animateValue = 100;
          }
          else {
            animateValue = 0;
          }

          if (targetElement.length) {
            isScrolling = true; // Set the flag before the scroll
            $('html, body').animate(
              { scrollTop: targetElement.offset().top - 270 - animateValue},
              500,
              function () {
                isScrolling = false; // Reset the flag after the scroll
              }
            );
          }
        }

        // Handle the click event for filter-year
        $('.filter-year').on('click keydown', function (event) {
          var $current = $(this);

          if (event.type === 'click' || event.keyCode === 13) {
            event.preventDefault();

            var targetId = $current.find('.month-text').first().data('target');;
            scrollHandler(targetId);
          }
        });

        // Handle the click event for month-text
        $('.month-text').on('click keydown', function (event) {
          if (event.type === 'click' || event.keyCode === 13) {
            event.stopPropagation();

            $('.paragraph--section--timeline-component [data-aos]').css('transform', 'translateZ(0)');

            var targetId = $(this).data('target');
            scrollHandler(targetId);

            $('.month-text').removeClass('active');
            $(this).addClass('active');
          }
        });

        // Utility function to check if an element is in the viewport
        function isInViewport(element) {
          var elementTop = element.offset().top - 324;
          var elementBottom = elementTop + element.outerHeight();
          var viewportTop = $(window).scrollTop();
          var viewportBottom = viewportTop + $(window).height();

          return elementBottom > viewportTop && elementTop < viewportBottom;
        }

        // Function to set the active class on the corresponding year and month
        function setActiveClasses($targetItem) {
          var targetId = $targetItem.attr('id');
          var $monthText = $('.month-text[data-target="' + targetId + '"]');
          var $yearText = $monthText.closest('.filter-year').find('.year-text');

          $('.month-text').removeClass('active');
          $('.filter-year').removeClass('active');

          $monthText.addClass('active');
          $yearText.closest('.filter-year').addClass('active');
        }

        // Scroll event to handle active class updates
        $(window).on('scroll', function () {
          if (isScrolling) return;

          $('.field__item .paragraph--type--timeline-component-item').each(function () {
            var $targetItem = $(this);

            if (isInViewport($targetItem)) {
              setActiveClasses($targetItem);
              return false;
            }
          });
        });

        // Initial check on page load
        $(window).trigger('scroll');
      }
    }),
  };
})(jQuery, _, Drupal);

//# sourceMappingURL=../map/components/timeline-component.js.map
