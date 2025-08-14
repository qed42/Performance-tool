(function ($, _, Drupal) {
  Drupal.behaviors.OurpresenceMap = {
    attach: _.once(function (context, settings) {
      $(document).ready(function() {
        setTimeout(function()
        {
          $('.map-image').addClass('zoomOut');
        }, 1000); // Delay of 1 second

        setTimeout(function()
        {
          $('.map-image').addClass('add-label');
        }, 3000);

        setTimeout(function()
        {
          $('.map-image').addClass('remove-label');
        }, 5000);

        let currElement;
        let element = $('.map-image #Black path[id^="yellow_"], .map-image #Blue path[id^="yellow_"], .map-image #Yellow path[id^="yellow_"],.map-image #yellow');
        element.hover(
          function() {
            currElement = $(this).siblings();
            currElement.children().css('display', 'block');
            currElement.appendTo(currElement.parents('.map-image svg>g'));
          },
          function() {
            currElement.appendTo($(this).parent());
            currElement.children().css('display', 'none');
          }
        );

        element.click(function() {
          // const dialogType = $(this).data('dialog-type');
          const id = $(this).parent().parent().attr('id');
          const lang = $('html').attr('lang');
          const hrefValue = "/" + lang + "/location-detail/" + id;
      
          var ajaxSettings = {
            url: hrefValue,
            dialogType: 'modal',
            dialog: { 
              width: '704',
              height: '325',
              dialogClass: 'contact-class map-modal',
            },
          };
          var myAjaxObject = Drupal.ajax(ajaxSettings);
          myAjaxObject.execute();
        });

        if($('.map-image').length) {
          $(document).on('mousedown', function(event) {
            // Check if the clicked element is the .ui-widget-overlay
            if ($(event.target).closest('.ui-widget-overlay').length) {
              // You can close the modal or perform other actions here
              $('.ui-dialog-content').dialog('close');  // Example: close the dialog if it's a modal
              $('body').removeClass('body-fixed');
            }
          });
          
          $(document).ajaxComplete(function () {
            // Check if the modal with class 'ui-dialog' is present in the DOM
            if ($('.ui-dialog.contact-class', context).length > 0) {
              // Add 'body-fixed' class to the body when the modal appears
              $('body').addClass('body-fixed');
              document.getElementById("ui-dialog-title").scrollIntoView();
              setTimeout(() => {
                const closeButton = document.getElementsByClassName("ui-dialog-titlebar-close");
                closeButton[0].blur();
              }, 100);
            }
    
            // Optionally, listen for the close button in the modal to remove the fixed class
            $('.ui-dialog-titlebar-close').on('click', function() {
              $('body').removeClass('body-fixed');
            });
          });
        }
      });     
    })
  };
})(jQuery, _, Drupal);
