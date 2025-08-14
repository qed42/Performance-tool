(function ($, _, Drupal) {
  Drupal.behaviors.hideTabs = {
    attach: _.once(function (context) {
      // Hide empty tabs in quicktab.
      $('.quicktabs-wrapper', context).each(function() {
        let quicktabs_wrapper = $(this);
        quicktabs_wrapper.find('.quicktabs-tabs li').each(function() {
          let id = $(this).attr("id");
          if (quicktabs_wrapper.find(".quicktabs-main [aria-labelledby='" + id + "']").text().trim() == "") {
            $(this).hide();     
          } else {
            $(this).addClass('quicktabs-tab-li')
          }
        }); 
      }).promise().done( function(){
        $('.quicktabs-tabs .quicktabs-tab-li').first().find('a').trigger("click");          
      } );
    })
  };
})(jQuery, _, Drupal);
