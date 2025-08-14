(function ($, _, Drupal, once) {
  Drupal.behaviors.copyGlossaryText = {
    attach: function (context, settings) {
      var copyIcons = $(context).find('.views-field-copy-icon');

      once('copy-glossary-text', '.views-field-copy-icon', context).forEach(function (copyIcon) {
        $(copyIcon).on('click', function () {
          var detailsDiv = $(this).prev('.block-glossary-listing--row-details');
          var htmlContent = getAllHTMLContent(detailsDiv);
          copyToClipboard(htmlContent);
          showCopiedMessage($(this));
        });
      });

      function getAllHTMLContent(element) {
        return element.html().trim();
      }

      function cleanHTMLContent(html) {
        return html.replace(/\s\s+/g, ' ').replace(/\n/g, '');
      }

      function copyToClipboard(html) {
        if (!html) {
          return;
        }

        var cleanedHTML = cleanHTMLContent(html);

        if (navigator.clipboard && navigator.clipboard.write) {
          navigator.clipboard.write([
            new ClipboardItem({ 'text/html': new Blob([cleanedHTML], { type: 'text/html' }) })
          ]).catch(function (error) {
            // Handle error if necessary
          });
        } else {
          // Fallback for browsers that don't support Clipboard API
          var tempDiv = $('<div>').html(cleanedHTML).css({
            position: 'absolute',
            left: '-9999px',
            top: '0',
            whiteSpace: 'pre'
          }).attr('contenteditable', 'true').appendTo('body');

          var range = document.createRange();
          range.selectNodeContents(tempDiv[0]);

          var selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);

          try {
            document.execCommand('copy');
          } finally {
            selection.removeAllRanges();
            tempDiv.remove();
          }
        }
      }

      function showCopiedMessage(copyIconElement) {
        var copiedButton = $('<div class="copied-button"><span>Copied!</span></div>');
        copyIconElement.append(copiedButton);

        setTimeout(function () {
          copiedButton.remove();
        }, 1000);
      }
    }
  };
})(jQuery, _, Drupal, once);
