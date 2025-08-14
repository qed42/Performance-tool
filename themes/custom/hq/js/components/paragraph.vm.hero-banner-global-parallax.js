(function ($, _, Drupal) {
  Drupal.behaviors.heroParallax = {
    attach: _.once(function (context) {
      new Rellax('.hero-banner-global__content-wrapper', {
        speed: -5,
        center: true,
        min: -100,
        max: 200,
        scale: 1,
        stopPoint: 'md',
        mapBreakpoints: {
          'xs': 0,
          'sm': 576,
          'md': 768,
          'lg': 1180,
          'xl': 1366,
        }
      });
    })
  }
})(jQuery, _, Drupal);

//# sourceMappingURL=../map/components/paragraph.vm.hero-banner-global-parallax.js.map
