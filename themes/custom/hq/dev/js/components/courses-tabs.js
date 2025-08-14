(function ($, Drupal) {
  Drupal.behaviors.coursesTabs = {
    attach: function (context) {
      let resizeId;

      function setCoursesTab() {
        if (window.innerWidth >= 768) {
          // Set height courses-tab-item.
          
          $('.courses-tab__item').each(function(index, element) {
            let currentHeight = $(this).find('.collapse').height();
            currentHeight =Math.round(currentHeight);
            $(this).find('.courses-tab__card').removeAttr('style');
            $(this).find('.courses-tab__card').css('height', currentHeight+'px');
          });

          // On click open courses-tab-item.
          $('.courses-tab__btn').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const target = $(e.target);
            const collapsedTargetId = target.data('target');
            $(`${collapsedTargetId}`).collapse('show');
          });

          // Set button height
          let maxHeight = -2;
          $('.courses-tab__btn').each(function() {
            $(this).removeAttr('style');
            maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
            maxHeight =Math.round(maxHeight);
          });

          $('.courses-tab__btn').each(function() {
           $(this).height(maxHeight);
          });

          // Set content margin top
          $('.courses-tab__content').css('margin-top', maxHeight+'px');

        } else {
          // On click open courses-tab-item.
          $('.courses-tab__btn').on('click', function(e) {
            const target = $(e.target);
            
            setTimeout(() => {
              target.focus();
            }, 350);
          });
        }

        // Open first courses-tab-item.
        let collapsedTargetId = $('.courses-tab__item:first-child').find('.courses-tab__btn').data('target');
        $(`${collapsedTargetId}`).collapse('show');
      }
      
      setCoursesTab();
      $(window).resize(() => {
        clearTimeout(resizeId);
        resizeId = setTimeout(() => {
          setCoursesTab();
        }, 200);
      });
    } //end attach
  };
})(jQuery, Drupal);
