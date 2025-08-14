(function ($, _, Drupal) {
  Drupal.behaviors.modalSocialSharing = {
    attach: _.once(function (context) {
      $('.copy-link__btn').on('click', function() {
      // Get the text field
      var copyText = document.getElementById("copyLinkInput");
      // Select the text field
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices
      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value);
      });
    }) //end attach
  };
})(jQuery, _, Drupal);

//# sourceMappingURL=../map/components/modal-social-sharing.js.map
