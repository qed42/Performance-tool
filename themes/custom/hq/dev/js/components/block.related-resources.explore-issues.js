(function ($, Drupal, once) {
  Drupal.behaviors.relatedResourcesSlider = {
    attach: function (context, settings) {
      const containers = once('relatedResourcesSlider', '.block-views-block-related-resources-explore-issues .swiper-container', context);

      containers.forEach((container, index) => {
        const wrapper = container.querySelector('.swiper-wrapper');
        if (!wrapper) return;

        const uniqueClass = 'related-instance-' + index;
        container.classList.add(uniqueClass);

        const blockWrapper = container.closest('.block-views-block-related-resources-explore-issues');

        new Swiper('.' + uniqueClass, {
          slidesPerView: 3.25,
          spaceBetween: 32,
          loop: false,
          grabCursor: true,
          centeredSlides: false,
          navigation: {
            nextEl: blockWrapper ? blockWrapper.querySelector('.swiper-button-next') : null,
            prevEl: blockWrapper ? blockWrapper.querySelector('.swiper-button-prev') : null,
          },
          breakpoints: {
            10: { slidesPerView: 1.15 },
            576: { slidesPerView: 1.33 },
            768: { slidesPerView: 2.33 },
            1024: { slidesPerView: 3.25 },
          }
        });
      });
    }
  };

  Drupal.behaviors.mobileFilterToggle = {
    attach: function (context) {
      const fieldsets = once('mobileFilterToggle', '#block-views-block-related-resources-explore-issues .form-composite', context);

      fieldsets.forEach(fieldset => {
        const legend = fieldset.querySelector('legend');
        if (!legend) return;

        legend.addEventListener('click', () => {
          fieldset.classList.toggle('open');
        });
      });
    }
  };

  Drupal.behaviors.preserveFilterScroll = {
    attach: function (context) {
      const $filterBox = $('.form-checkboxes.bef-checkboxes', context);
      if (!$filterBox.length) return;

      once('preserveScrollSave', '.form-checkboxes.bef-checkboxes input[type="checkbox"]', context).forEach(el => {
        $(el).on('mousedown touchstart', function () {
          const scrollTop = $filterBox.scrollTop();
          sessionStorage.setItem('filterScrollTop', scrollTop);
        });
      });

      $(document).off('ajaxComplete.preserveScroll').on('ajaxComplete.preserveScroll', function () {
        const scrollTop = sessionStorage.getItem('filterScrollTop');
        if (scrollTop !== null) {
          $('.form-checkboxes.bef-checkboxes').scrollTop(scrollTop);
        }
      });
    }
  };
})(jQuery, Drupal, once);
