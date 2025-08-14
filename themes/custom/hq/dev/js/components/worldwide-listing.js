(function($, _, Drupal) {
  Drupal.behaviors.worldwideListing = {
    attach: _.once(function(context) {
      let resizeId;

      function showListing(id) {
        const worldwideListing = $('.worldwide-listing__content');
        worldwideListing.removeClass('show');
        worldwideListing.find(`#${id}`).closest('.m-listing').addClass('show');
      }

      function initShowListing() {
        if (window.innerWidth <= 767) {
          const worldwideList = $('.worldwide-listing__select-box select');
          const listingSelect = worldwideList.select2();
          listingSelect.on('change', function(e) {
            let tmpData = worldwideList.select2('data');
            showListing(tmpData[0].id);
          });

          listingSelect.data('select2').$dropdown.addClass('worldwide-listing__select-dropdown');
          let tmpData = listingSelect.select2('data');
          showListing(tmpData[0].id);
        }
      }

      initShowListing();

      $(window).resize(() => {
        clearTimeout(resizeId);
        resizeId = setTimeout(() => {
          initShowListing();
        }, 100);
      });

    })
  };
})(jQuery, _, Drupal);


(function (Drupal) {
  Drupal.behaviors.worldwideListing = {
    attach: (function () {
      let resizeId; // Variable to store the timeout ID for resize event throttling

      /**
       * Function to display the selected listing content.
       * @param {string} id - The ID of the listing content to be shown.
       */
      function showListing(id) {
        // Remove 'show' class from all listing content sections
        document.querySelectorAll('.worldwide-listing__content').forEach(content => {
          content.classList.remove('show');
        });

        // Find the element with the given ID and ensure its parent .worldwide-listing__content is shown
        const targetElement = document.getElementById(id);
        if (targetElement) {
          targetElement.closest('.worldwide-listing__content').classList.add('show');
        }
      }

      /**
       * Initializes the listing dropdown and handles selection changes.
       */
      function initShowListing() {
        // Apply logic only if the screen width is 767px or less (mobile view)
        if (window.innerWidth <= 767) {
          const selectBox = document.querySelector('.worldwide-listing__select-box select');
          if (!selectBox) return; // Exit if the select box is not found

          // Event listener for when a new option is selected
          selectBox.addEventListener('change', function () {
            const selectedOption = selectBox.options[selectBox.selectedIndex];
            if (selectedOption) {
              showListing(selectedOption.value);
            }
          });

          // Show the initially selected listing on page load
          const initialSelectedOption = selectBox.options[selectBox.selectedIndex];
          if (initialSelectedOption) {
            showListing(initialSelectedOption.value);
          }
        }
      }

      // Run the listing initialization function on page load
      initShowListing();

      /**
       * Handles window resize event to reinitialize the listing dropdown when needed.
       */
      window.addEventListener('resize', () => {
        clearTimeout(resizeId); // Clear the previous timeout to prevent excessive function calls
        resizeId = setTimeout(() => {
          initShowListing(); // Reinitialize the listing on resize after a short delay
        }, 100);
      });

    })()
  };
})(Drupal);
