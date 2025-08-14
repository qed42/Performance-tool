(function ($, _, Drupal) {
  Drupal.behaviors.customSelect2Behavior = {
    attach: function(context) {

      function setPlacholder(currentTarget, status =  null) {
        let currentPlaceholder = currentTarget.data('select2-config');
        let currentInput = currentTarget.closest('.facet-inactive').find('.select2-search--inline input');
        currentPlaceholder = currentPlaceholder.placeholder.text;
        if (status) { 
          let preText = Drupal.t('Search');
          currentPlaceholder = preText + ' ' + currentPlaceholder.toLowerCase();
        } else {
          currentTarget.closest('.facet-inactive').find('.select2-selection__choice').hide();
        }
        currentInput.attr('placeholder', currentPlaceholder);
      }

      $('.js-facets-select2').on('select2:open', e => {
        setPlacholder($(e.target), true);
      });

      $('.js-facets-select2').on('select2:close', e => {
        setPlacholder($(e.target));
      });

      if ($('.js-facets-select2').length) {
        $('.js-facets-select2').each((index, element) => {
          setTimeout(function() {
            setPlacholder($(element));
          }, 50);
        });
      }

    }
  };
})(jQuery, _, Drupal);

//# sourceMappingURL=../map/components/resource-listing.js.map
