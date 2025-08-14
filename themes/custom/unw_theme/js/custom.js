(function ($, drupalSettings) {
  "use strict";

  // Behavior for open & close Accordion element.
  Drupal.behaviors.AccodrionAction = {
    attach: function (context) {
      if ($(".paragraph--type--accordions-item").length) {
        // Open the accordion.
        once('accordion-open', '.paragraph--type--accordions-item .field--name-field-open-accordion-text', context)
          .forEach(function (el) {
            el.addEventListener('click', function (e) {
              e.preventDefault();
            
              $(el).hide(350);
              $(el)
                .closest(".paragraph--type--accordions-item")
                .find(".field--name-field-body")
                .slideDown(500);
              $(el)
                .closest(".paragraph--type--accordions-item")
                .find(".close-accordion-action")
                .show(350);
            });
          });

        // Close the accordion.
        once('accordion-close', '.paragraph--type--accordions-item .close-accordion-action', context).forEach(function (el) {
          el.addEventListener('click', function (e) {
            e.preventDefault();
            $(el).hide(350);
            $(el)
              .closest(".paragraph--type--accordions-item")
              .find(".field--name-field-body")
              .slideUp(500);
            $(el)
              .closest(".paragraph--type--accordions-item")
              .find(".field--name-field-open-accordion-text")
              .show(350);
          });
        });
      }
    },
  };

  // Behavior for Gender Term page.
  Drupal.behaviors.GenederTerm = {
    attach: function (context) {
      $(".view-gender-sensitive-lexicon ul.tabs li", context).click(
        function () {
          var tab_id = $(this).attr("data-tab");
          $(this).closest("div").find(".tabs li").removeClass("current");
          $(this).closest("div").find("div").removeClass("current");
          $(this).addClass("current");
          $(this)
            .closest("div")
            .find("." + tab_id)
            .addClass("current");
        }
      );

      // Initialize popovers in page.
      $(function () {
        $('a.pop-icon[data-toggle="popover"]').popover();
      });
    },
  };

  // Behavior for responsive menu close button.
  Drupal.behaviors.responsiveCloseMenu = {
    attach: function (context) {
      // Check if the selector exists in the context
      if ($(context).find(".navbar-navbar__title").length) {
        // The selector exists, so you can attach the click event
        $(".navbar-navbar__title::after").on("click", function () {
          $(".mm-navbar__title").append("<span>X</span>");
        });
      }
    },
  };

  // Add "two" class to migrated videos.
  Drupal.behaviors.twoClassMigrated = {
    attach: function (context) {
      $(".field--name-body .flex-media").each(function () {
        if ($(this).find("figure").length == 2) {
          $(this).addClass("two");
        }
      });
    },
  };

  // Collapsible in responsive tables.
  Drupal.behaviors.collapsibleRowTables = {
    attach: function (context) {
      var showHideElem = function (ev, elem) {
        $(elem).toggleClass("visible");
        $(ev.target).toggleClass("enabled");
      };
      var attachButtonEvents = function (itr, rowElem, context) {
        $(rowElem, context)
          .not(".event-click-attached")
          .each(function (ind, ir) {
            $(ir).addClass("event-click-attached");
            var expandableElem = $(ir)
              .parent()
              .find(".row-child-ind-" + itr)
              .first();
            var triggers = $(ir).find(".collapsible-trigger");
            if (triggers.length) {
              $(triggers).parent().addClass("trigger-wrapper");
            }
            triggers.first().click(function (trigger) {
              showHideElem(trigger, expandableElem);
            });
          });
      };
      var doAttach = function (context) {
        $(".collapsible-row-table tr.collapsible-row", context).each(function (
          itr,
          tr
        ) {
          moveRowElems(itr, tr, context);
          attachButtonEvents(itr, tr, context);
        });
      };
      var moveRowElems = function (itr, row, context) {
        $(row, context)
          .not(".event-move-attached")
          .each(function (ind, ir) {
            $(ir).addClass("event-move-attached");
            var content = $(ir).find(".row-detail-item");
            if (content) {
              var parentI = $(row).parent().find(".row-child-ind-" + itr);
              if (parentI.length) {
                $(parentI).first().append($(content));
              }
            }
          });
      };
      doAttach(context);
      $(document, context).ajaxComplete(function (itr, tr) {
        doAttach(context);
      });
    },
  };

  Drupal.behaviors.menuResponsive = {
    attach: function (context) {
      // Main menu.
      // Hover on first level of menu.
      $('.nav-item.menu-item--expanded').on('mouseover', function () {
        var w = $(window).width();
        var thisItem = $(this)[0].getBoundingClientRect().right + $(window)['scrollLeft']();
        var firstMenu = $(this).children('.dropdown-menu-first')[0].getBoundingClientRect().right + $(window)['scrollLeft']();

        // Check first menu.
        if (firstMenu > w) {
          var margin = (firstMenu - w) + (w - thisItem + 2);
          $(this).children('.dropdown-menu-first').css('margin-left', '-' + margin + 'px');
        }
      });

      // Reset on leave.
      $('.nav-item.menu-item--expanded').on('mouseleave', function () {
        $(this).children('.dropdown-menu-first').css('margin-left', '0px');
      });

      // Hover on second level of menu.
      $('.nav-item.menu-item--expanded .dropdown-item.menu-item--expanded').on('mouseover', function () {
        var w = $(window).width();
        var secondMenu = $(this).children('ul')[0].getBoundingClientRect().right + $(window)['scrollLeft']();

        // Check second menu.
        if (secondMenu > w) {
          $(this).addClass('left-expanded-menu');
        }
      });

      // Reset on leave.
      $('.nav-item.menu-item--expanded .dropdown-item.menu-item--expanded').on('mouseleave', function () {
        if ($(this).hasClass('left-expanded-menu')) {
          $(this).removeClass('left-expanded-menu');
        }
      });

      // Secondary menu.
      // Hover on first level of menu.
      $('#block-secondarynavigation .navbar-nav > .nav-item').on('mouseover', function () {
        var w = $(window).width();
        var thisItem = $(this)[0].getBoundingClientRect().right + $(window)['scrollLeft']();
        var firstMenu = $(this).children('.nav-level-first')[0].getBoundingClientRect().right + $(window)['scrollLeft']();

        // Check first menu.
        if (firstMenu > w) {
          var margin = (firstMenu - w) + (w - thisItem + 2);
          $(this).children('.nav-level-first').css('margin-left', '-' + margin + 'px');
        }
      });

      // Reset on leave.
      $('#block-secondarynavigation .navbar-nav > .nav-item').on('mouseleave', function () {
        $(this).children('.dropdown-menu-first').css('margin-left', '0px');
      });

      // Hover on second level of menu.
      $('#block-secondarynavigation .navbar-nav > .nav-item .nav-item').on('mouseover', function () {
        var w = $(window).width();
        var secondMenu = $(this).children('.nav-level-second')[0].getBoundingClientRect().right + $(window)['scrollLeft']();

        // Check second menu.
        if (secondMenu > w) {
          $(this).addClass('left-expanded-menu');
        }
      });

      // Reset on leave.
      $('#block-secondarynavigation .navbar-nav > .nav-item .nav-item').on('mouseleave', function () {
        if ($(this).hasClass('left-expanded-menu')) {
          $(this).removeClass('left-expanded-menu');
        }
      });

      // Hover on second level of menu.
      $('html[dir="rtl"] .nav-item.menu-item--expanded .dropdown-item.menu-item--expanded').on('mouseover', function () {
        var secondMenu = $(this).children('ul')[0].getBoundingClientRect().left + $(window)['scrollLeft']();
        console.log(secondMenu);

        // Check second menu.
        if (secondMenu < 0) {
          $(this).addClass('right-expanded-menu');
        }
      });

      // Reset on leave.
      $('html[dir="rtl"] .nav-item.menu-item--expanded .dropdown-item.menu-item--expanded').on('mouseleave', function () {
        if ($(this).hasClass('right-expanded-menu')) {
          $(this).removeClass('right-expanded-menu');
        }
      });
    },
  }

  // Collapse facets.
  Drupal.behaviors.facetsCollapse = {
    attach: function (context) {
      $('.facets-widget-links h3', context).click(function () {
        $(this).closest('.facets-widget-links').find('.facet-content').slideToggle("slow");
        $(this).closest('.facets-widget-links').toggleClass('closed');
      });
    },
  };

  // Add class to flex-media based on number of children.
  //for complex page and article
  Drupal.behaviors.childNoClass = {
    attach: function (context) {
      $('.node--type-complex-page .field--name-body .flex-media, .node--type-article .field--name-body .flex-media').addClass(function () {
        return ["none", "one", "two", "three", "four"]
        [$(this).children('figure').length];
      });
    },
  };

  // BX slider
  Drupal.behaviors.bxSlider = {
    attach: function (context) {
      $('.slider-wrap',context).append('<div class="slide-caption"></div>');
      var sliders = $('.bxslider');
      sliders.bxSlider({
        mode: 'fade',
        auto: true,
        onSliderLoad: function (currentIndex) {
          $(".slide-caption").html($('.bxslider figure').eq(currentIndex).find("figcaption").html());
      },
      onSlideBefore: function ($slideElement, oldIndex, newIndex) {
          var ctrClass = 'slide-caption';
          if ($('.slider-wrap').length > 1) {
              $slideElement.parents(".slider-wrap").find(".slide-caption").html($slideElement.find("figcaption").html());
          }
          else {
              $(".slide-caption").html($slideElement.find("figcaption").html());
          }
      }
      });
    },
  };

  Drupal.behaviors.unwomenCaptionFormatter = {
    attach: function (context) {
      $(function () {
        $('div.img-cap-left, div.img-cap-right').unwomenCaptionFormatter();
      });
      $.fn.extend({
        unwomenCaptionFormatter: function () {
          this.each(function () {
            var imgWidth = $('img', $(this)).innerWidth();
            $('div.caption', $(this)).css({ 'width': imgWidth });
          });
        }
      });
    },
  };

})(jQuery),
  drupalSettings;
