(function ($, Drupal) {
  Drupal.behaviors.topicMenuToggle = {
    attach: function (context, settings) {
      // Toggle button
      once('toggleBound', '.toggle', context).forEach(function (btn) {
        const $btn = $(btn);

        const toggleExpand = function () {
          const $currentLi = $btn.closest('li.topic-item');

          // Collapse all other open trees at the same level
          const $allSiblings = $currentLi.siblings('.is-open');
          $allSiblings.removeClass('is-open')
            .find('.toggle')
            .attr('aria-expanded', 'false')
            .text('+');

          // Toggle current
          const isOpen = $currentLi.hasClass('is-open');
          $currentLi.toggleClass('is-open', !isOpen);
          $btn.attr('aria-expanded', String(!isOpen));
          $btn.text(!isOpen ? '−' : '+');
        };

        $btn.on('click', toggleExpand);

        $btn.on('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpand();
          }
        });
      });

      // See more / See less
      once('moreBound', '.see-more-button', context).forEach(function (btn) {
        const $btn = $(btn);
        const $wrapper = $(context).find('.topic-hidden-wrapper');
        const $lessBtn = $(context).find('.see-less-button');

        $btn.on('click', function () {
          $wrapper.removeClass('hidden');
          $btn.addClass('hidden');
          $lessBtn.removeClass('hidden');
        });
      });

      once('lessBound', '.see-less-button', context).forEach(function (btn) {
        const $btn = $(btn);
        const $wrapper = $(context).find('.topic-hidden-wrapper');
        const $moreBtn = $(context).find('.see-more-button');

        $btn.on('click', function () {
          $wrapper.addClass('hidden');
          $moreBtn.removeClass('hidden');
          $btn.addClass('hidden');
          $moreBtn[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      });

      // Mobile menu toggle
      once('mobileToggleBound', '.mobile-menu-toggle', context).forEach(function (btn) {
        const $btn = $(btn);
        const $menu = $(context).find('.topic-menu-content');
        const $heading = $btn.closest('.topic-navigation-heading'); // ✅ Get heading wrapper

        $btn.on('click', function () {
          const expanded = $btn.attr('aria-expanded') === 'true';
          $btn.attr('aria-expanded', String(!expanded));
          $menu.toggleClass('open');

          // ✅ Toggle class on heading
          if (!expanded) {
            $heading.addClass('menu-open');
          } else {
            $heading.removeClass('menu-open');
          }
        });

        $btn.on('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            $btn.click();
          }
        });
      });

      let lastScrollY = window.scrollY;
      let scrollDirection = 'down';

      window.addEventListener('scroll', function () {
        const currentScroll = window.scrollY;
        scrollDirection = currentScroll > lastScrollY ? 'down' : 'up';
        lastScrollY = currentScroll;
      });

      const targetBlock = document.querySelector('.block-views-block-related-resources-explore-issues');
      const topicNav = document.querySelector('.topic-navigation');

      if (targetBlock && topicNav) {
        const observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            // Only apply relative if scrolling down AND block is entering
            if (entry.isIntersecting && scrollDirection === 'down') {
              topicNav.classList.add('in-viewport');
              topicNav.classList.remove('is-sticky');
            }
          
            // When scrolling up and block is out of view, remove the class
            if (!entry.isIntersecting && scrollDirection === 'up') {
              topicNav.classList.remove('in-viewport');
              topicNav.classList.add('is-sticky');
            }
          });
        }, {
          threshold: 0.1,
        });
      
        observer.observe(targetBlock);
      }
    }
  };
})(jQuery, Drupal);

//# sourceMappingURL=../map/components/block.sidebar-navigation-topic-hierarchical-navigation.js.map
