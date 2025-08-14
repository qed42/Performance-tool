(function ($, _, Drupal) {
  Drupal.behaviors.listingsearchFilters = {
    attach: function (context, settings) {
      const facetClearBtn = document.getElementsByClassName('facets-reset-button');
        if (facetClearBtn != null && facetClearBtn.length && !facetClearBtn[0].classList.contains('processed')) {
          facetClearBtn[0].classList.add('processed');

          function clearSearch(e) {
            // Prevent the default behavior of the link
            e.preventDefault();
            e.stopPropagation();

            // Clear search input
            document.querySelector('.kp-filter-block .js-form-item input').value= '';
            window.location.reload(true);
            window.location.href = e.target.getAttribute('href');
          }
          
          const facets = document.getElementsByClassName('facet-inactive');
          const wrapperDiv = document.querySelector('.kp-filter-block');
          const currentCount = facets.length;
          const placeholderWrapper = document.getElementsByClassName('ph-wrapper');
          const facetForm = wrapperDiv.getElementsByTagName("form");

          if (currentCount > 0) {
            for (let i = 0; i <= currentCount; i++) {
              if (i >= currentCount) {
                wrapperDiv.append(facetClearBtn[0]);
                placeholderWrapper[0].remove();
                facetForm[0].style.opacity = 1;
              } else {
                wrapperDiv.append(facets[i]);
              }
            }
          }
          
          document.querySelector('.kp-filter-block .facets-reset-link').addEventListener("click", clearSearch);
        }
    }
  };
})(jQuery, _, Drupal);
