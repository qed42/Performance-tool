(function ($, Drupal, once) {
  Drupal.behaviors.customAccordion = {
    attach: function (context, settings) {
      let activeLi = $('.block-topic-hierarchical__body.collapse .active', context);

      activeLi.parentsUntil('.block-topic-hierarchical__body').addClass('li-active__tree-element');
      activeLi.find('*').addClass('li-active__tree-element');

      function attachAccordion(context) {
        let customNav = $('.block-topic-hierarchical__body', context);
        let activeNav = $('.block-topic-hierarchical__body li.active', context);
        let navItems = $('.block-topic-hierarchical__body ul > li', context);

        customNav.addClass(activeNav.length ? 'with-active' : 'without-active');

        let accordionItems;

        if (activeNav.length) {
          accordionItems = once('custom-accordion', '.block-topic-hierarchical__body ul > li > ul', context);
        } else {
          accordionItems = once('custom-accordion', '.block-topic-hierarchical__body ul', context);
        }

        // Convert NodeList to jQuery object
        $(accordionItems).each(function () {
          let $accordion = $(this);
          let $accordionItems = $accordion.children('li');

          $accordion.addClass('accordion').find('ul').addClass('sub-menu');

          $accordionItems.each(function () {
            let $this = $(this);
            if ($this.find('ul').length) {
              let $link = $this.children('a');
              $link.addClass('accordion-heading').prependTo($this);
              $this.prepend('<span class="accordion-icon plus" role="button" tabindex="0"></span>');
            } else {
              $this.addClass('no-child');
            }
          });
        });

        customNav.on('click keydown', '.accordion-icon', function (e) {
          if (e.type === 'click' || (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' '))) {
            e.preventDefault();
            let $icon = $(this);
            let $heading = $icon.next('.accordion-heading');
            let $collapse = $heading.next('.sub-menu');

            $collapse.slideToggle();
            $heading.parent().toggleClass('open');
            $icon.toggleClass('plus minus');
          }
        });
      }

      attachAccordion(context);
    }
  };

  Drupal.behaviors.bootstrapCollapseBehavior = {
    attach: function (context, settings) {
      // Close collapse when clicking outside
      document.addEventListener('click', function (e) {
        var collapses = document.querySelectorAll('.collapse.show');
        collapses.forEach(function (collapse) {
          if (!collapse.contains(e.target)) {
            $(collapse).collapse('hide');
          }
        });
      });

      // Toggle accordion
      var headers = document.querySelectorAll('.block-topic-hierarchical__header a');
      headers.forEach(function (header) {
        header.addEventListener('click', function () {
          var parent = this.closest('.block-topic-hierarchical');
          var body = parent.querySelector('.block-topic-hierarchical__body');
          $(body).collapse('toggle');
        });
      });
    }
  };

})(jQuery, Drupal, once);
