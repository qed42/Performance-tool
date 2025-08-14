(function ($, _, Drupal) {
  Drupal.behaviors.contactEmail = {
    attach: _.once(function (context) {
      const showEmail = document.getElementsByClassName("contact__email");
      const hideStaticText = document.getElementsByClassName("contact__clicktext");

      hideStaticText[0].addEventListener('click', (e) => {
        hideStaticText[0].classList.add('hidden');
        showEmail[0].classList.remove('hidden');
      });
    })
  };
})(jQuery, _, Drupal);
