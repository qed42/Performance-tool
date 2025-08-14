(function ($, _, Drupal) {
  Drupal.behaviors.general = {
    attach: _.once(function (context) {
      // General JS code goes here
       if ($('.quicktabs-wrapper').length > 0) {
        const $tabLinks = $('li[id^="quicktabs-tab"] a');
    
        $tabLinks.on('contextmenu', function (e) {
          e.preventDefault();
          this.blur();
        });
      }
    })
  };

  Drupal.behaviors.themeToast = {
    attach: function () {
      if ($(".toast").length > 0) {
        $('.toast').toast('show');
        $('.toast').toast({ 'delay': 6000 });
      }
    }
  }

  Drupal.behaviors.parallax = {
    attach: _.once(function (context) {
      if ($(".parallax-image .field--type-image .image-container img").length > 0) {
        new Rellax('.parallax-image .field--type-image .image-container img', {
          speed: -2,
          center: true,
          min: 0,
          max: 60,
          stopPoint: 'sm',
          scale: 1.2,
          mapBreakpoints: {
            'xs': 568,
            'sm': 768,
            'md': 968,
            'lg': 1200
          }
        });
      }

      if ($(".hero-parallax").length > 0) {
        new Rellax('.hero-parallax', {
          speed: -2,
          center: true,
          min: 0,
          max: 60,
          stopPoint: 'sm',
          scale: 1.2,
          mapBreakpoints: {
            'xs': 568,
            'sm': 768,
            'md': 968,
            'lg': 1200
          }
        });
      }
    })
  }

  Drupal.behaviors.headerNavBar = {
    attach: _.once(function (context) {
      $('#header-search').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.search').find('.js-form-item').append('<span class="input-border"></span>');
        $(this).closest('.search').toggleClass('active');
        $(this).closest('.region-navbar').toggleClass('active');
        $(this).closest('.search').find('input[type=text]').focus();
        setTimeout(function () {
          $('.search .js-form-item .input-border').addClass('input-border-transition');
        }, 1);
      });

      $('#header-search-close').on('click', function () {
        $(this).closest('.search').find('input[type=text]').val('');
        $(this).closest('.search').find('.js-form-item span').remove();
        $(this).closest('.search').removeClass('active');
        $(this).closest('.region-navbar').removeClass('active');
        $('#header-search').focus();
      });

      $(document).on('keyup', function (e) {
        e.preventDefault();
        if ((e.keyCode == 27) && $('.search').hasClass('active')) {
          $('.search').find('input[type=text]').val('');
        }
      });

      $('#form-active-submit').on('click', function (e) {
        document.getElementById("views-exposed-form-search-content-page-1").submit();
      });

      $('#toggle-menu').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('icon-close');
        $(this).closest('header').toggleClass('open-navbar');
        if ($(this).closest('header').hasClass('open-navbar')) {
          $('.top-header__wrapper').appendTo('.region-navbar');
        } else {
          $('.top-header__wrapper').appendTo('.region-top-bar');
        }
        $("body").toggleClass("no-scroll");
      });

      $('.header--main-menu .tb-megamenu ul.level-0 li.tb-megamenu-item').on('click', function (e) {
        $(this).closest('div').find('.tb-megamenu-submenu').not(this).removeClass('active');
        $(this).toggleClass('active');
      });

      $(window).on('resize', function () {
        if (window.innerWidth < 1180 && $('.region-navbar').find('.top-header__wrapper').length > 0) {
          $('.top-header__wrapper').appendTo('.region-top-bar');
          $('.header--main-menu').removeClass('open-navbar');
          $('#toggle-menu').removeClass('icon-close');
        }
      });
    })
  };

  Drupal.behaviors.ctaCarousel = {
    attach: _.once(function (context) {
      let swiperCTACarousel = [];
      $('.paragraph--type--cta-carousel .swiper-container').each(function (index, element) {
        const $this = $(this);
        $this.addClass('instance-' + index);

        $this.closest('.cardCarousel_container').find('.swiper-button-prev').addClass('button-prev-' + index);

        $this.closest('.cardCarousel_container').find('.swiper-button-next').addClass('button-next-' + index);

        swiperCTACarousel[index] = new Swiper('.instance-' + index, {
          slidesPerView: 5.5,
          slidesPerGroup: 4,
          spaceBetween: 5,
          speed: 700,
          freeMode: true,
          breakpoints: {
            280: {
              slidesPerView: 1.5,
              slidesPerGroup: 1,
              spaceBetween: 5,
              grabCursor: true,
            },
            320: {
              slidesPerView: 1.5,
              slidesPerGroup: 1,
              spaceBetween: 5,
              grabCursor: true,
            },
            420: {
              slidesPerView: 2.5,
              slidesPerGroup: 2,
              spaceBetween: 5,
              grabCursor: true,
            },
            550: {
              slidesPerView: 2.5,
              slidesPerGroup: 2,
              spaceBetween: 5,
              grabCursor: true,
            },
            680: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 5,
            },
            1140: {
              slidesPerView: 4.5,
              slidesPerGroup: 4,
              spaceBetween: 5,
            }
          },
          navigation: {
            nextEl: '.button-next-' + index,
            prevEl: '.button-prev-' + index
          }
        });

      });

      $(window).on('resize', function () {
        $('.paragraph--type--cta-carousel .swiper-container').each(function (index, element) {
          swiperCTACarousel[index].update();
        });
      });
    })
  };

  Drupal.behaviors.contentCardsCarousel = {
    attach: _.once(function (context) {
      if ($(".paragraph--type--content-carousel").length > 0) {
        $('.paragraph--type--content-carousel').each(function (index, element) {
          const itemsPerView = $(this).find('.js-items-per-view').text();
          if (itemsPerView > 2) {
            let swiperCards = [];
            const $this = $(this).find('.swiper-container');
            $this.addClass('cards-' + index);
            $this.closest('.cards_container').find('.swiper-button-prev').addClass('button-prevCard-' + index);
            $this.closest('.cards_container').find('.swiper-button-next').addClass('button-nextCard-' + index);
            swiperCards[index] = new Swiper('.cards-' + index, {
              slidesPerView: 4,
              spaceBetween: 32,
              slidesPerGroup: 1,
              freeMode: true,
              simulateTouch: true,
              breakpoints: {
                10: {
                  slidesPerView: 1.33,
                  spaceBetween: 32,
                  grabCursor: true,
                },
                680: {
                  slidesPerView: 4,
                  slidesPerView: itemsPerView,
                  spaceBetween: 32,
                }
              },
              navigation: {
                nextEl: '.button-nextCard-' + index,
                prevEl: '.button-prevCard-' + index
              },
              scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true
              }
            });

            $(window).on('resize', function () {
              swiperCards[index].update();
            });
          }
        });
      }
    })
  };

  Drupal.behaviors.carouselTimeline = {
    attach: _.once(function (context) {
      let swiperTimeLine = [];
      $('.swiper-container-timeLine').each(function (index, element) {
        const $this = $(this);

        $this.addClass('timeLine-' + index);
        $this.closest('.timeLine-container').find('.swiper-button-prev').addClass('timeLine-prevCard-' + index);
        $this.closest('.timeLine-container').find('.swiper-button-next').addClass('timeLine-nextCard-' + index);
        $this.closest('.timeLine-container').find('.swiper-pagination').addClass('pagination-' + index);

        swiperTimeLine[index] = new Swiper('.timeLine-' + index, {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 5,
          freeMode: true,
          simulateTouch: true,
          navigation: {
            nextEl: '.timeLine-nextCard-' + index,
            prevEl: '.timeLine-prevCard-' + index
          },
          pagination: {
            el: '.pagination-' + index,
            clickable: true,
            renderBullet: function (paginationIndex, className) {
              return ('<span class="' + className + '" bulletId="' + paginationIndex + '">' + (paginationIndex + 1) + '</span>');
            }
          }
        });

        Drupal.behaviors.carouselTimeline.drawTimeLineSwiper(this, swiperTimeLine, index);
      });
    }),

    drawTimeLineSwiper: function (param, swiperIn, num) {
      const $this = $(param);

      let $timeLineContainer = $this.closest('.timeLine-container');
      var $eventSelect = $timeLineContainer.find('.timeLine-select');

      $eventSelect.select2({
        closeOnSelect: true,
        width: '100%',
        minimumResultsForSearch: -1
      });

      $eventSelect.on('select2:select', function (e) {
        let valueText = e.target.value;
        const slidesList = [
          ...$(e.target).closest('.timeLine-container').find('.swiper-slide')
        ];
        const activeIndex = slidesList.findIndex(item => {
          const slideText = $(item).attr('value');
          return slideText === valueText;
        });

        swiperIn[num].slideTo(activeIndex, 1000, true);
        $eventSelect.val(valueText).trigger('change');
        swiperIn[num].update();

        return true;
      });

      swiperIn[num].on('paginationUpdate', () => {
        let activeTextLine = $timeLineContainer.find('.swiper-pagination-bullet-active').attr('bullet-label');
        $eventSelect.val(activeTextLine).trigger('change');
      });

      const $bullets = $timeLineContainer.find('.swiper-pagination-bullet');
      $bullets.map((item, bulletItem) => {
        const bulletPageItem = $timeLineContainer.find('.pagination-title[bullet=' + item + ']').first();

        if (bulletPageItem) {
          const swiperBullet = $timeLineContainer.find('.swiper-pagination-bullet[bulletId=' + item + ']').first();
          $(swiperBullet).attr('bullet-label', bulletPageItem.text());
        }
      });
    }
  };

  Drupal.behaviors.imageSlideshow = {
    attach: _.once(function (context) {
      if ($(".gallery-top").length > 0) {
        var galleryTop = new Swiper('.gallery-top', {
          slidesPerView: 1,
          loop: true,
          loopedSlides: 7,
          autoplay: {
            delay: 5000
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        });
      }

      if ($(".gallery-thumbs").length > 0) {
        var galleryThumbs = new Swiper('.gallery-thumbs', {
          spaceBetween: 32,
          slidesPerView: 5,
          centeredSlides: true,
          slideToClickedSlide: true,
          loop: true,
          loopedSlides: 10,
          breakpoints: {
            0: {
              spaceBetween: 10,
              slidesPerView: 3.3,
            },
            680: {
              slidesPerView: 4.5,
              spaceBetween: 16,
            },
            900: {
              slidesPerView: 5,
              spaceBetween: 32,
            },
          }
        });
      }

      if (galleryTop || galleryThumbs) {
        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;

        $(window).on('resize', function () {
          galleryTop.update();
          galleryThumbs.update();
        });
      }
    })
  };

  Drupal.behaviors.storyNavigation = {
    attach: _.once(function (context) {
      let navSelect = $('.paragraph--story-navigation--select-wrap #menu--story');

      navSelect.select2({
        closeOnSelect: true,
        width: '100%',
        minimumResultsForSearch: -1
      });

      navSelect.on('change', function () {
        let targetPosition = $($(this).val()).offset().top;

        if ($('#toolbar-bar').length) {
          var toolbar = $('#toolbar-bar').height();
        } else {
          var toolbar = 0;
        }

        if ($('#toolbar-bar .toolbar-tray.is-active').length) {
          var toolbarActive = $('#toolbar-bar .toolbar-tray.is-active').height();
        } else {
          var toolbarActive = 0;
        }

        $('html,body').animate({ scrollTop: targetPosition - toolbar - toolbarActive - 35 }, 2000);
        $($(this).val('#0').trigger('change.select2'));
      });

      navSelect.on('select2:opening', function (e) {
        $(e.target).data("select2").$dropdown.addClass('navigation-dropdown__open');
      });

      const sections = document.querySelectorAll('section[data-title="true"]');

      function changeLinkState() {
        let index = sections.length; // Get amount of sections with a title
        while (--index && window.scrollY + 35 < sections[index].offsetTop) { }

        let allSectionHeight = $('.paragraph-list').height();
        let onePercentOfAllSection = allSectionHeight / 100;
        let headerOffsetTop = $('.paragraph-list').offset().top;
        let percentage = (window.scrollY - headerOffsetTop) / onePercentOfAllSection + 10;

        $('.progressive-bar').css('width', percentage + '%');
      }

      $(window).scroll(function () {
        if ($('.paragraph-list').length > 0) {
          if (navSelect.length && sections.length) { changeLinkState(); }

          let scrollTop = $(window).scrollTop(),
            elementOffset = $('.paragraph-list').offset().top,
            distance = elementOffset - scrollTop;

          if (distance <= 0) {
            $('.paragraph--story-navigation').addClass('display-navigation');
          }

          if (distance > 70) {
            $('.paragraph--story-navigation').removeClass('display-navigation');
          }
        }
      });
    })
  };

  Drupal.behaviors.videoJS = {
    attach: _.once(function (context) {
      $(".vjs-theme-fantasy").each(function () {
        let titleOverlayOptions = {
          title: $(this).find('.video-title').text()
        }
        let video_player = videojs($(this).attr('id'), {
          controlBar: {
            volumePanel: {
              inline: false,
              volumeControl: {
                vertical: true
              }
            }
          }
        });
        video_player.titleoverlay(titleOverlayOptions);
        video_player.titleoverlay.hideOverlay();
      });
    })
  };

  Drupal.behaviors.audioJS = {
    attach: _.once(function (context) {
      if ($('.vjs-audio-player').length > 0) {
        $('.vjs-audio-player').each(function () {
          let titleOverlayOptions = {
            title: $(this).find('.audio-title').text()
          }
          let audio_player = videojs($(this).attr('id'), {
            controlBar: {
              volumePanel: {
                inline: false,
                volumeControl: {
                  vertical: true
                }
              }
            }
          });
          audio_player.titleoverlay(titleOverlayOptions);
          audio_player.titleoverlay.showOverlay();
        });
      }
    })
  };

  Drupal.behaviors.aosAnimation = {
    attach: _.once(function (context, settings) {
      if($('[data-aos]', context).length > 0) {
        AOS.init({
          once: true,
          duration: 1200,
        });
      }
    })
  };

  Drupal.behaviors.unwsubsectionMenu = {
    attach: _.once(function (context, settings) {
      if ($('.submeniu ').length > 0) {
        $('.submeniu .dropdown-toggle-wrapper > i', context).click(function (e) {
          $(this).next('ul').slideToggle('slow', 'swing', function () {
            // On slideToggle complete.
            if ($(this).is(':visible')) {
              $(this).parent().addClass('open').removeClass('closed');
            }
            else {
              $(this).parent().addClass('closed').removeClass('open');
            }
          });
        });
      }
    })
  };
  Drupal.behaviors.palyVideoHoverEffect = {
    attach: _.once(function (context) {
      var figure = $("article.node--view-mode-teaser.has-video");
      figure.hover(hoverVideo, hideVideo);

      function hoverVideo(e) {
        $('video', this).get(0).play();
      }

      function hideVideo(e) {
        $('video', this).get(0).pause();
      }
    })
  };
  Drupal.behaviors.submenuSectionFixScroll = {
    attach: (function (context) {
      $(window).scroll(function () {
        var navHeight = $('.header--main-menu').height();
        if ($(window).scrollTop() > navHeight) {
          $('.menu-top-fixed').addClass('fixed');
        }
        else {
          $('.menu-top-fixed').removeClass('fixed');
        }
      });
    })
  };
  Drupal.behaviors.sidebarSectionFixScroll = {
    attach: (function (context) {
      $(function () {
        if($('.sidebar').length) {
          var top = $('.sidebar').offset().top - parseFloat($('.sidebar').css('marginTop').replace(/auto/, 0));
        }
        if($('.page__footer').length) {
          var footTop = $('.page__footer').offset().top - parseFloat($('.page__footer').css('marginTop').replace(/auto/, 0));
        }
        
        

        var maxY = footTop - $('.sidebar').outerHeight();
        var threshold = 161;
        $(window).scroll(function (evt) {
          var y = $(this).scrollTop();
          if (y + 20 >= top) {
            if (y + threshold < maxY) {
              $('.sidebar').addClass('fixed-sidebar').removeClass('bottom-fix');
            } else {
              $('.sidebar').addClass('bottom-fix').removeClass('fixed-sidebar');
            }
          } else {
            $('.sidebar').removeClass('fixed-sidebar bottom-fix');
          }
        });
      });
    })
  };
  
  Drupal.behaviors.backtotop = {
    attach: _.once(function (context, settings) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
          $('.scroll-top').fadeIn();
        } else {
          $('.scroll-top').fadeOut();
        }
      });

      $('.scroll-top').on('click', function () {
        $('html, body').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function () {
          $('html, body').stop();
        });

        $('html, body').animate({ scrollTop: 0 }, 200);
      });
    })
  };

  Drupal.behaviors.increaseDropdownWidth = {
    attach: function (context) {
      if(window.location.href.indexOf('/jobs/unwomen') != -1 && window.innerWidth > 1179) {
        $("body").once().on("click", ".select2-selection", function() {
          setTimeout( function() {
            $('span.select2-container--open:not(.select2) .select2-dropdown').css('width', '300px');
          }, 50);
        });
      }
    },
  };
})(jQuery, _, Drupal);
