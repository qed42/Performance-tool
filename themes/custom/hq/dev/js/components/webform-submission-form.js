(function ($, _, Drupal) {
  Drupal.behaviors.webformSubmissionForm = {
    attach: function (context) {
      const formInputs = document.querySelectorAll('input.error');
      const formTextarea = document.querySelectorAll('textarea.error');
      formInputs.forEach(function(element) {
        let node = document.createElement('i');
        node.classList.add('icon', 'icon-error');
        element.closest('.form-item').appendChild(node);
      });

      formTextarea.forEach(function(element) {
        let node = document.createElement('i');
        node.classList.add('icon', 'icon-error');
        element.closest('.form-item').appendChild(node);
      });
    }
  };
})(jQuery, _, Drupal);
