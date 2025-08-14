(function (Drupal, window, document, undefined) {
  'use strict';

  Drupal.behaviors.infoCardDetails = {
    attach: function (context) {
      var componentWrapper = context.querySelector('.paragraph--type--info-card-detail');

      if (!componentWrapper) return;

      let firstTabHeader = componentWrapper.querySelector('.info-card--header:first-child');
      let firstCollapseElement = firstTabHeader.nextElementSibling;

      firstCollapseElement.classList.add('show');
      firstCollapseElement.classList.remove('collapse');

      firstTabHeader.querySelector('a').setAttribute('aria-expanded', 'true');

      function setHeight(element, height) {
        element.style.height = height + 'px';
      }

      function getMaxHeight(elements) {
        var max = 0;
        elements.forEach(function (element) {
          max = Math.max(max, element.offsetHeight);
        });
        return max;
      }

      function setAllHeights() {
        var windowWidth = window.innerWidth;
        if (windowWidth > 1180) {
          var headers = context.querySelectorAll('.info-card--header');
          var bodyWrappers = context.querySelectorAll('.info-card--body__wrapper');
          var details = context.querySelectorAll('.info-card--details');

          var maxHeaderHeight = getMaxHeight(headers);
          var maxBodyWrapperHeight = getMaxHeight(bodyWrappers);

          details.forEach(function (detail) {
            var totalHeight = maxHeaderHeight + maxBodyWrapperHeight;
            setHeight(detail, totalHeight);
          });

          headers.forEach(function (header) {
            setHeight(header, maxHeaderHeight);
            var anchor = header.querySelector('a');
            if (anchor) {
              anchor.style.height = maxHeaderHeight + 'px';
            }
          });
        } else {
          var details = context.querySelectorAll('.info-card--details');
          details.forEach(function (detail) {
            detail.style.height = 'auto';
          });
        }
      }

      setAllHeights();

      context.addEventListener('click', function (event) {
        if (event.target.classList.contains('info-card--header') || event.target.closest('.info-card--header')) {
          setTimeout(setAllHeights, 0);
        }
      });

      window.addEventListener('resize', function () {
        setAllHeights();
      });
    }
  };

})(Drupal, window, document);
