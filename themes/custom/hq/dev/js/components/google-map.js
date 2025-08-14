(function ($, _, Drupal) {
  Drupal.behaviors.hideMap = {
    attach: _.once(function (context) {
      const mapLinkHide = document.getElementsByClassName("event__map-link--hide");
      const mapLinkShow = document.getElementsByClassName("event__map-link--show");
      let eventMap = document.querySelectorAll(".event__map iframe");

      mapLinkHide[0].addEventListener('click', (e) => {
        e.target.classList.add('hidden');
        e.target.closest('.event__block').classList.add('hide');
        eventMap[0].classList.add('map-hide');
        mapLinkShow[0].classList.remove('hidden');
        mapLinkShow[0].focus();
      });

      mapLinkShow[0].addEventListener('click', (e) => {
        e.target.classList.add('hidden');
        e.target.closest('.event__block').classList.remove('hide');
        eventMap[0].classList.remove('map-hide');
        mapLinkHide[0].classList.remove('hidden');
        mapLinkHide[0].focus();
      });
    })
  };
})(jQuery, _, Drupal);
