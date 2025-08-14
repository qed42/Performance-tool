(function($, _, Drupal) {
  Drupal.behaviors.hqHeader = {
    attach: _.once(function(context) {
      let resizeId;
      $('.hq-navbar .has-block .dropdown-toggle').on('click', e => {
        const target = $(e.target);
        const subMenu = target.closest('.menu-item--expanded');
        let placeholderText = Drupal.t('Search countries...');
        if (subMenu.find('.unw-knowledge-country-form').length) {
          setTimeout(() => {
            if (subMenu.hasClass('show')) {
              $('.unw-kp-country').select2('open').data('select2').$dropdown.addClass('unw-kp-country__open');
              $('.select2-container--open').find('input').attr('placeholder', placeholderText);
            } else {
              $('.unw-kp-country').select2('close');
              target.focus();
            }
          }, 10);
        }
      });

      $('.hq-navbar .menu-item--expanded.dropdown').on('hide.bs.dropdown', e => {
        if ($('.unw-kp-country__open').length && e.clickEvent) {
          e.preventDefault();
          e.stopPropagation();
        }
      });

      $('.hq-hamburger__wrapper').on('hide.bs.collapse', e => {
        if ($('.unw-kp-country__open').length) {
          e.preventDefault();
          e.stopPropagation();
        }
      });

      $('.unw-kp-country').on("select2:close", e => {
        setTimeout(function() {
            $('.hq-navbar .menu-item--expanded.dropdown.has-block a').dropdown('hide');
            $('.hq-navbar .menu-item--expanded.dropdown.has-block a').focus();
        }, 100);
      });

      $('.unw-kp-country').on('select2:open', () => {
        setTimeout(() => {
          let currentInput = document.querySelectorAll('.select2-container--open .select2-search__field');
          currentInput[0].focus();
        }, 100);
      });

      function setMegamenu() {
        if (window.innerWidth <= 1180) {
          $('header').find('.hq-header-search').appendTo('.hq-search__content');
          $('.top-header__wrapper').appendTo('.hq-hamburger__content');
          if ($('.region-sub-navbar').length) {
            $('.thematic-menu__item.expanded').addClass('dropdown');
            $('.thematic-menu__item.expanded').find('.dropdown-menu').removeClass('show');
            $('.region-sub-navbar').prependTo('.hq-hamburger__content');
          }
          const $menuCollapseGroup = $('.hq-main-menu__content');
          $menuCollapseGroup.on('show.bs.collapse', '.collapse', function() {
            $menuCollapseGroup.find('.collapse.show').collapse('hide');
          });
          $menuCollapseGroup.on('hidden.bs.collapse', '.collapse', function() {
            if ($menuCollapseGroup.find('.collapse.show').length) {
              $('body').addClass('stop-scrolling');
            } else {
              $('body').removeClass('stop-scrolling');
            }
          });
          $menuCollapseGroup.on('shown.bs.collapse', '.collapse', function() {
            $('body').addClass('stop-scrolling');
          });
        } else {
          if ($('.hq-search__content').find('.hq-header-search').length) {
            $('.hq-search__content').find('.hq-header-search').appendTo('.hq-main-menu__content');
          }
          if ($('.hq-hamburger__content').find('.top-header__wrapper').length) {
            $('.hq-hamburger__content').find('.top-header__wrapper').appendTo('.region-top-bar');
          }
          if ($('.hq-hamburger__content').find('.region-sub-navbar').length) {
            $('.thematic-menu__item.expanded').removeClass('dropdown');
            $('.thematic-menu__item.expanded').find('.dropdown-menu').addClass('show');
            $('.hq-hamburger__content').find('.region-sub-navbar').appendTo('.region-sub-navbar__wrapper .col-12');
          }
        }
      }
      setMegamenu();
      $(window).resize(() => {
        clearTimeout(resizeId);
        resizeId = setTimeout(() => {
          setMegamenu();
        }, 100);
      });
    })
  };
})(jQuery, _, Drupal);

//# sourceMappingURL=../map/components/hq-header.js.map
