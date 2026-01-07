$(document).ready(function(){

  var windowOn = $(window);

  // preloader 
   windowOn.on('load', function () {
      $("#loading").fadeOut(500);
   })

    // Back To Top
    var $backToTop = $(".mh-back-to-top");
    $backToTop.hide();

    windowOn.on('scroll', function() {
      if ($(this).scrollTop() > 300 ) {
        $backToTop.fadeIn();
        $backToTop.addClass("mh-back-to-top-open");
      } else {
        $backToTop.fadeOut();
        $backToTop.removeClass("mh-back-to-top-open");
      }
    });

    $backToTop.on('click', function(e) {
      $("html, body").animate({scrollTop: 0}, 300);
    });


    // sticky js 
    var windowOn = $(window)
    windowOn.on('scroll', function () {
      var scroll = windowOn.scrollTop();
      if (scroll < 100) {
        $("#mh-header-sticky").removeClass("header-sticky");
      } else {
        $("#mh-header-sticky").addClass("header-sticky");
      }
    });

    //Mobile Menu Custom
    var mhMenuHTML = $('.mh-mobile-menu-active > ul').clone();
    var mhOffcanvasMenu = $('.mh-offcanvas-menu > nav');

    mhOffcanvasMenu.append(mhMenuHTML);

    if($(mhOffcanvasMenu).find('.sub-menu').length !=0) {
      $(mhOffcanvasMenu).find('.sub-menu').parent().append('<button class="mh-sidemenu-close"><i class="far fa-chevron-right"></i></button>');
    };

    var mhSideMenuToggle = $('button.mh-sidemenu-close');

    $(mhSideMenuToggle).on('click',function(){
      $(this).siblings('.sub-menu').slideToggle();
      $(this).parent().toggleClass('active');
    });



    // offcanvas
    $(".mh-offcanvas-toggle").on('click',function(){
      $(".mh-offcanvas-area").addClass("mh-offcanvas-open");
      $(".mh-offcanvas-overlay").addClass("mh-offcanvas-overlay-open");
    });

    $(".mh-offcanvas-close-button,.mh-offcanvas-overlay").on('click',function(){
      $(".mh-offcanvas-area").removeClass("mh-offcanvas-open");
      $(".mh-offcanvas-overlay").removeClass("mh-offcanvas-overlay-open");
    });

    // Search bar
    $(".mh-search-toggle").on('click',function(){
      $(".mh-search-bar-area").addClass("mh-search-bar-open");
      $(".mh-offcanvas-overlay").addClass("mh-offcanvas-overlay-open");
    });

    $(".mh-search-bar-close,.mh-offcanvas-overlay").on('click',function(){
      $(".mh-search-bar-area").removeClass("mh-search-bar-open");
      $(".mh-offcanvas-overlay").removeClass("mh-offcanvas-overlay-open");
    });

    // color
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"))
    })

    // bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    // bg img
    $("[data-bg-img]").each(function () {
        $(this).css("background-image", `url(${$(this).data('bg-img')})`);
    });

    // width
    $("[data-width]").each(function () {
      $(this).css("width", $(this).attr("data-width"));
    });

    // testimonial slider
    var swiper = new Swiper(".mh-testimonial-active", {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        prevEl: ".mh-test-arrow-prev",
        nextEl: ".mh-test-arrow-next",
      },
    });

    // blog slider
    var swiper = new Swiper(".mh-blog-active", {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        prevEl: ".mh-blog-arrow-prev",
        nextEl: ".mh-blog-arrow-next",
      },
    });

    // brand slider yellow
      var swiper = new Swiper(".mh-brand-yellow-active", {
      slidesPerView: 'auto',
      spaceBetween: 80,
      loop: true,
      speed: 4000,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        300: {
          spaceBetween: 40,
        },
        768: {
          spaceBetween: 80,
        }
      }
    });

    // brand slider blue
      var swiper = new Swiper(".mh-brand-blue-active", {
      slidesPerView: 'auto',
      spaceBetween: 80,
      loop: true,
      speed: 4000,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        300: {
          spaceBetween: 40,
        },
        768: {
          spaceBetween: 80,
        }
      }
    });

    // Team Slider
      var swiper = new Swiper(".mh-team-slider-active", {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        prevEl: ".mh-team-slider-prev",
        nextEl: ".mh-team-slider-next",
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        300: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      }
    });

    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // popup img
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
    });

    // FAQ
    $(".mh-faq-button").on('click', function () {
        $('.mh-faq-item').removeClass('active');
        $(this).closest('.mh-faq-item').addClass('active');
    });

    // vidoe 
    $('.popup-video').magnificPopup({
      type: 'iframe'
      // other options
   });

  // isotope 
  if ($('.grid').length != 0) {
    var $grid = $('.grid');
    $grid.imagesLoaded( function() {
      $grid.isotope({
        itemSelector: '.grid-item',
        percentPosition: true,  
      });
    });

    $('.mh-portfolio-filter').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    $('.mh-portfolio-filter button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
  }

  // jarallax
   if ($('.jarallax').length !=0) {
      $('.jarallax').jarallax({
         speed: 0.2,
      });
   }

  // wow js
  if($('.wow').length) { 
  function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 100,
            mobile: false,
            live: true,
        });
        wow.init();
    }

  var windowOn = $(window);

  windowOn.on('load', function () {
    wowAnimation();
  }); 
  }

});