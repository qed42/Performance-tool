(function (Drupal) {
  'use strict';

  Drupal.behaviors.removeShowClass = {
    attach: function (context) {
      function checkViewportWidth() {
        if (window.matchMedia('(max-width: 767px)').matches) {
          var collapseElements = context.querySelectorAll('.resources-region__wrapper .tab-pane .collapse.show');
          collapseElements.forEach(function (collapseElement) {
            collapseElement.classList.remove('show');
          });
        }
      }

      document.addEventListener('DOMContentLoaded', function () {
        checkViewportWidth();
      });

      window.addEventListener('resize', function () {
        checkViewportWidth();
      });

      checkViewportWidth();
    }
  };
})(Drupal);

//# sourceMappingURL=../map/components/region-resource-card.js.map
