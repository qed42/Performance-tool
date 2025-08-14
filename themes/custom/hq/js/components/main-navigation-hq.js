(function($, Drupal, once) {
  Drupal.behaviors.hqMegaMenu = {
    attach: function(context, settings) {
      // Check if screen width is 1180px or greater (Desktop view)
      if (window.innerWidth >= 1180) {

        // Function to close any open dropdown menus
        function closeDropdown() {
          document.querySelectorAll('.hq-main-menu .dropdown-menu').forEach(menu => {
            if (menu.classList.contains('show')) {
              const parent = menu.parentElement;
              menu.classList.remove('show');
              parent.classList.remove('show');
              parent.querySelector('.dropdown-toggle').setAttribute('aria-expanded', false);
            }
          });
        }

        // Apply behavior only once using Drupal's "once" function
        once('hqMegaMenu', '.hq-main-menu .dropdown', context).forEach(dropdown => {
          const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
          const dropdownMenuLevel = dropdown.querySelector('.menu-level-1');
          const menuImages = dropdown.querySelectorAll('.menu-item__image');
          let menuItems = dropdown.querySelectorAll('.menu-level-1 > .menu-item');
          let hoverTimeout;

          // Move images inside the dropdown menu if available
          if (menuImages.length >= 1) {
            menuImages.forEach(item => {
              item.classList.remove('hidden');
              dropdownMenuLevel.appendChild(item);
            });
          }

          // Ensure the menu does not exceed 4 items, removing extra items if necessary
          while (menuItems.length > 4) {
            dropdownMenuLevel.removeChild(menuItems[menuItems.length - 1]);
            menuItems = dropdown.querySelectorAll('.menu-level-1 > .menu-item');
          }

          // Show dropdown menu when hovered
          dropdown.addEventListener('mouseenter', function(event) {
            hoverTimeout = setTimeout(() => { // Prevent flickering with a timeout
              closeDropdown();
              const currentMenu = event.target;
              currentMenu.classList.add('show');
              currentMenu.querySelector('.dropdown-toggle').setAttribute('aria-expanded', true);
              currentMenu.querySelector('.dropdown-menu').classList.add('show');
            }, 100);
          });

          // Hide dropdown menu when mouse leaves
          dropdown.addEventListener('mouseleave', function(event) {
            clearInterval(hoverTimeout);
            const currentMenu = event.target;
            currentMenu.classList.remove('show');
            currentMenu.querySelector('.dropdown-menu').classList.remove('show');
            currentMenu.querySelector('.dropdown-toggle').setAttribute('aria-expanded', false);
          });

          // Open dropdown menu when focused (keyboard navigation)
          dropdownToggle.addEventListener('focus', function(event) {
            closeDropdown();
            const currentMenuLink = event.target;
            currentMenuLink.setAttribute('aria-expanded', true);
            currentMenuLink.parentElement.classList.add('show');
            currentMenuLink.parentElement.querySelector('.dropdown-menu').classList.add('show');
          });

          // Redirect to the clicked link when clicking the dropdown toggle
          dropdownToggle.addEventListener('click', function(event) {
            window.location.href = event.currentTarget.getAttribute('href');
          });

          // Close dropdown when focus leaves the main menu
          document.querySelector('.hq-main-menu').addEventListener('focusout', function() {
            setTimeout(() => { // Prevent flickering with a timeout
              if (!this.matches(':hover, :focus-within')) {
                closeDropdown();
              }
            }, 100);
          });

          // Close dropdown when clicking outside of the menu
          document.addEventListener('click', function(event) {
            const megaMenu = document.querySelector('.hq-main-menu');
            if (!megaMenu.contains(event.target)) {
              closeDropdown();
            }
          });

        }); // End forEach

        // Close dropdown menu when focusing on a non-dropdown link
        once('hqMegaMenu', '.hq-main-menu > .nav-item > .nav-link:not(.dropdown-toggle)', context).forEach(link => {
          link.addEventListener('focus', function() {
            closeDropdown();
          });
        }); // End forEach

      } else { // Mobile view behavior
        once('hqMegaMenu', '.hq-main-menu .dropdown', context).forEach(dropdown => {
          const dropdownToggle = dropdown.querySelector('.dropdown-toggle');

          // Handle click event on dropdown toggle
          dropdownToggle.addEventListener('click', function(event) {
            if (event.target.tagName === 'SPAN') {
              window.location.href = event.target;
            }
          });
        });
      } // End if condition
    }
  };
})(jQuery, Drupal, once);

//# sourceMappingURL=../map/components/main-navigation-hq.js.map
