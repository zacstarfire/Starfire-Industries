

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/slick.js
 # JS Adapter for J1 Slick
 #
 #  Product/Info:
 #  http://jekyll.one
 #
 #  Copyright (C) 2023, 2024 Juergen Adams
 #
 #  J1 Theme is licensed under MIT License.
 #  See: https://github.com/jekyll-one/J1 Theme/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-04-25 16:38:04 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
/* eslint quotes: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.slick = ((j1, window) => {
  var responsiveSettings          = [];
  var carouselResponsiveSettings  = [];
  var atticDefaults;
  var atticSettings;
  var atticOptions;
  var slickDefaults;
  var slickSettings;
  var slickLightboxDefaults;
  var slickLightboxSettings;
  var slickLightboxOptions;
  var slickOptions;
  var carouselOptions;
  var carouselSettings;
  var slideImageHeight;
  var _this;
  var logger;
  var logText;
  // date|time
  var startTime;
  var endTime;
  var startTimeModule;
  var endTimeModule;
  var timeSeconds;
  // ---------------------------------------------------------------------------
  // helper functions
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // main
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // adapter initializer
    // -------------------------------------------------------------------------
    init: (options) => {
      var xhrLoadState                  = 'pending';                            // (initial) load state for the HTML portion of the carousel
      var load_dependencies             = {};                                   // dynamic variable
      var carouselResponsiveSettingsOBJ = {};                                   // initial object for responsive settings
      var reload_on_resize              = false;
      var dependency;
      var carouselResponsiveSettingsYAML;
      var carouselResponsiveSettingsSTRING;
      var slick_lightbox_enabled;
      // -----------------------------------------------------------------------
      // default module settings
      // -----------------------------------------------------------------------
      var settings  = $.extend({
        module_name: 'j1.adapter.cookieConsent',
        generated:   '2024-04-25 16:38:04 +0200'
      }, options);
      // Load module DEFAULTS|CONFIG
      atticDefaults         = $.extend({}, );
      atticSettings         = $.extend({}, {"attics":[{"name":"Home", "attic":{"enabled":true, "id":"attic_home", "layout":"home", "title_animate":"animate__bounceInDown", "title_animate_duration":"animate__fast", "tagline_animate":"animate__fadeInRight", "tagline_animate_duration":"animate__slow", "padding_top":600}}, {"name":"Pages", "attic":{"enabled":true, "id":"attic_page", "layout":"page", "padding_top":600}}, {"name":"Posts", "attic":{"enabled":true, "id":"attic_post", "layout":["collection", "post"], "title_animate":"animate__fadeInDown", "padding_top":600}}]});
      atticOptions          = $.extend(true, {}, atticDefaults, atticSettings);
      slickDefaults         = $.extend({}, {"enabled":false, "xhr_data_path":"/assets/data/slick", "lightbox":{"enabled":false, "type":"slick", "caption":false, "useHistoryApi":false, "background":"rgba(0,0,0,.8)", "closeOnEscape":true, "closeOnBackdropClick":true, "navigateByKeyboard":true, "destroyTimeout":500, "imageMaxHeight":0.9, "lazy":false}, "filters":{"enabled":false, "grayscale":1, "contrast":1, "brightness":1}, "accessibility":true, "adaptiveHeight":false, "arrows":false, "autoplay":false, "autoplaySpeed":3000, "centerMode":false, "centerPadding":"50px", "cssEase":"ease", "dots":false, "dotsClass":"slick-dots", "draggable":true, "easing":"linear", "edgeFriction":0.15, "fade":false, "focusOnSelect":false, "focusOnChange":false, "infinite":true, "initialSlide":0, "lazyLoad":"ondemand", "mobileFirst":false, "pauseOnDotsHover":false, "pauseOnFocus":true, "pauseOnHover":true, "respondTo":"window", "responsive":null, "rows":1, "rtl":false, "slide":"", "slidesPerRow":1, "slidesToScroll":1, "slidesToShow":1, "speed":300, "swipe":true, "swipeToSlide":false, "touchMove":true, "touchThreshold":5, "useCSS":true, "useTransform":true, "variableWidth":false, "vertical":false, "verticalSwiping":false, "waitForAnimate":true, "zIndex":1000});
      slickSettings         = $.extend({}, {"enabled":true, "lightbox":{"enabled":false, "caption":"caption", "background":false}, "captions":{"enabled":true}, "carousels":[{"carousel":null, "enabled":true, "id":"post_carousel_featured", "type":"post", "gutters":1, "group":"Featured", "image_styles":"img-fluid img-object--cover", "image_height":"300px", "translate_links":false, "link_new_window":true, "options":{"autoplay":false, "arrows":true, "dots":true, "slidesToShow":2, "slidesToScroll":2, "responsive":true}, "filters":{"enabled":true, "grayscale":1, "contrast":1, "brightness":0.4}, "responsive":[{"breakpoint":null, "settings":{"breakOn":1024, "slidesToShow":2, "slidesToScroll":2}}, {"breakpoint":null, "settings":{"breakOn":600, "slidesToShow":1, "slidesToScroll":1, "dots":true}}, {"breakpoint":null, "settings":{"breakOn":480, "slidesToShow":1, "slidesToScroll":1}}]}, {"carousel":null, "enabled":true, "id":"collection_carousel_portfolio", "type":"collection", "gutters":1, "collection":"portfolio", "translate_links":false, "link_new_window":true, "image_styles":"img-fluid img-object--cover", "image_height":"500px", "options":{"autoplay":false, "arrows":true, "dots":false, "slidesToShow":3, "slidesToScroll":3, "responsive":true}, "responsive":[{"breakpoint":null, "settings":{"breakOn":1024, "slidesToShow":2, "slidesToScroll":2}}, {"breakpoint":null, "settings":{"breakOn":600, "slidesToShow":1, "slidesToScroll":1, "dots":true}}, {"breakpoint":null, "settings":{"breakOn":480, "slidesToShow":1, "slidesToScroll":1}}]}, {"carousel":null, "enabled":true, "id":"collection_carousel_biography", "type":"collection", "gutters":1, "collection":"biography", "translate_links":false, "link_new_window":true, "image_styles":"img-fluid img-object--cover", "image_height":"500px", "options":{"autoplay":false, "arrows":true, "dots":true, "slidesToShow":3, "slidesToScroll":3, "responsive":true}, "filters":{"enabled":true, "grayscale":1, "contrast":1, "brightness":0.8}, "responsive":[{"breakpoint":null, "settings":{"breakOn":1024, "slidesToShow":2, "slidesToScroll":2}}, {"breakpoint":null, "settings":{"breakOn":600, "slidesToShow":1, "slidesToScroll":1, "dots":true}}, {"breakpoint":null, "settings":{"breakOn":480, "slidesToShow":1, "slidesToScroll":1}}]}, {"carousel":null, "enabled":true, "id":"collection_carousel_fantasy", "type":"collection", "gutters":1, "collection":"fantasy", "translate_links":false, "link_new_window":true, "image_styles":"img-fluid img-object--cover", "image_height":"500px", "options":{"autoplay":false, "arrows":true, "dots":false, "slidesToShow":3, "slidesToScroll":3, "responsive":true}, "responsive":[{"breakpoint":null, "settings":{"breakOn":1024, "slidesToShow":2, "slidesToScroll":2}}, {"breakpoint":null, "settings":{"breakOn":600, "slidesToShow":1, "slidesToScroll":1, "dots":true}}, {"breakpoint":null, "settings":{"breakOn":480, "slidesToShow":1, "slidesToScroll":1}}]}, {"carousel":null, "enabled":true, "id":"collection_carousel_romance", "type":"collection", "gutters":1, "collection":"romance", "translate_links":false, "link_new_window":true, "image_styles":"img-fluid img-object--cover", "image_height":"500px", "options":{"autoplay":false, "arrows":true, "dots":true, "slidesToShow":3, "slidesToScroll":3, "responsive":true}, "responsive":[{"breakpoint":null, "settings":{"breakOn":1024, "slidesToShow":2, "slidesToScroll":2}}, {"breakpoint":null, "settings":{"breakOn":600, "slidesToShow":1, "slidesToScroll":1, "dots":true}}, {"breakpoint":null, "settings":{"breakOn":480, "slidesToShow":1, "slidesToScroll":1}}]}, {"carousel":null, "enabled":true, "id":"example_carousel_arrows_dots", "type":"example", "gutters":1, "style":"h3", "height":"200px", "slides":9, "options":{"arrows":true, "dots":true, "autoplay":false, "slidesToShow":3, "slidesToScroll":3, "responsive":true}, "responsive":[{"breakpoint":null, "settings":{"breakOn":1024, "arrows":true, "dots":true, "slidesToShow":2, "slidesToScroll":2}}, {"breakpoint":null, "settings":{"breakOn":600, "slidesToShow":1, "slidesToScroll":1}}, {"breakpoint":null, "settings":{"breakOn":480, "slidesToShow":1, "slidesToScroll":1}}]}, {"carousel":null, "enabled":true, "id":"image_carousel_simple", "type":"image", "gutters":0, "image_base_path":"/assets/images/modules/gallery/mega_cities", "image_styles":"img-fluid img-object--cover", "image_height":"300px", "lightbox":{"enabled":false}, "captions":{"enabled":false, "position":"bottom"}, "options":{"autoplay":false, "arrows":false, "dots":false, "speed":300, "slidesToShow":2, "slidesToScroll":2, "responsive":true}, "responsive":[{"breakpoint":null, "settings":{"breakOn":1024, "slidesToShow":2, "slidesToScroll":2}}, {"breakpoint":null, "settings":{"breakOn":800, "slidesToShow":1, "slidesToScroll":1}}, {"breakpoint":null, "settings":{"breakOn":480, "dots":false, "slidesToShow":1, "slidesToScroll":1}}], "slides":[{"slide":null, "image":"denys-nevozhai-1_b.jpg", "caption":"Man posing at the rooftop of Jin Mao Tower Shanghai - China"}, {"slide":null, "image":"thomas-tucker_b.jpg", "caption":"Sunset over Taipei City - Taiwan"}, {"slide":null, "image":"emmad-mazhari_b.jpg", "caption":"Chicago - United States"}, {"slide":null, "image":"johan-mouchet_b.jpg", "caption":"The Queen Bee at the Eureka Tower - Melbourne Southbank Australia"}, {"slide":null, "image":"federico-rizzarelli_b.jpg", "caption":"Shanghai - China"}, {"slide":null, "image":"gints-gailis_b.jpg", "caption":"Shangri-La Hotel Jakarta - Indonesia"}]}, {"carousel":null, "enabled":true, "id":"image_carousel_full", "type":"image", "gutters":1, "image_base_path":"/assets/images/modules/gallery/mega_cities", "image_styles":"img-fluid img-object--cover", "image_height":"300px", "lightbox":{"enabled":true}, "captions":{"enabled":true, "position":"bottom"}, "options":{"autoplay":false, "arrows":true, "dots":true, "speed":300, "slidesToShow":2, "slidesToScroll":2, "responsive":true}, "responsive":[{"breakpoint":null, "settings":{"breakOn":1024, "slidesToShow":2, "slidesToScroll":2}}, {"breakpoint":null, "settings":{"breakOn":800, "slidesToShow":1, "slidesToScroll":1}}, {"breakpoint":null, "settings":{"breakOn":480, "slidesToShow":1, "slidesToScroll":1}}], "slides":[{"slide":null, "image":"denys-nevozhai-1_b.jpg", "caption":"Man posing at the rooftop of Jin Mao Tower Shanghai - China"}, {"slide":null, "image":"thomas-tucker_b.jpg", "caption":"Sunset over Taipei City - Taiwan"}, {"slide":null, "image":"emmad-mazhari_b.jpg", "caption":"Chicago - United States"}, {"slide":null, "image":"johan-mouchet_b.jpg", "caption":"The Queen Bee at the Eureka Tower - Melbourne Southbank Australia"}, {"slide":null, "image":"federico-rizzarelli_b.jpg", "caption":"Shanghai - China"}, {"slide":null, "image":"gints-gailis_b.jpg", "caption":"Shangri-La Hotel Jakarta - Indonesia"}]}]});
      slickLightboxDefaults = $.extend({}, {"enabled":false, "type":"slick", "caption":false, "useHistoryApi":false, "background":"rgba(0,0,0,.8)", "closeOnEscape":true, "closeOnBackdropClick":true, "navigateByKeyboard":true, "destroyTimeout":500, "imageMaxHeight":0.9, "lazy":false});
      slickLightboxSettings = $.extend({}, {"enabled":false, "caption":"caption", "background":false});
      slickLightboxOptions  = $.extend(true, {}, slickLightboxDefaults, slickLightboxSettings);
      slickOptions          = $.extend(true, {}, slickDefaults, slickSettings);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      _this                 = j1.adapter.slick;
      logger                = log4javascript.getLogger('j1.adapter.slick');
      // load HTML portion for all carousels
      _this.loadCarouselHTML(slickOptions, slickOptions.carousels);
      // re-Init all carousels in a page if window is resized (if enabled)
      if (reload_on_resize) {
        window.onresize = () => {
          location.reload();
        }
      }
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (() => {
        var pageState      = $('#content').css("display");
        var pageVisible    = (pageState == 'block') ? true : false;
        var j1CoreFinished = (j1.getState() == 'finished') ? true : false;
        var atticFinished  = (j1.adapter.attic.getState() == 'finished') ? true : false;
        if (j1CoreFinished && pageVisible && atticFinished) {
          startTimeModule = Date.now();
          _this.setState('started');
          logger.debug('\n' + 'set module state to: ' + _this.getState());
          logger.info('\n' + 'initializing module: started');
          logger.info ('\n' + 'initialize carousel on id: ' + 'post_carousel_featured');
          logger.debug ('\n' + 'collect responsive settings for carousel on id: ' + 'post_carousel_featured');
          // collect breakpoint settings from carousel config
          responsiveSettings = $.extend({}, [{"breakpoint":null, "settings":{"breakOn":1024, "slidesToShow":2, "slidesToScroll":2}}, {"breakpoint":null, "settings":{"breakOn":600, "slidesToShow":1, "slidesToScroll":1, "dots":true}}, {"breakpoint":null, "settings":{"breakOn":480, "slidesToShow":1, "slidesToScroll":1}}]);
          // generate carousel breakpoint settings as YAML data structure
          carouselResponsiveSettings  = '[' ;
          for (const [obj_key, obj_value] of Object.entries(responsiveSettings)) {
            var length = Object.keys(obj_value.settings).length;
            var count = 0;
            for (const [key, value] of Object.entries(obj_value.settings)) {
              count++;
              if (key == 'breakOn' && count == 1) {
                carouselResponsiveSettings += '  {' ;
                carouselResponsiveSettings += '    breakpoint: ' + value + ',' ;
                carouselResponsiveSettings += '    settings: {' ;
              } else {
                carouselResponsiveSettings += '      ' + key + ': ' + value + ',' ;
              }
              // close current breakpoint element
              if (count == length) {
                carouselResponsiveSettings += '    }' ;
                carouselResponsiveSettings += '  },' ;
              }
            }
          } // End generate breakpoint YAML elements
          // close breakpoint YAML data
          carouselResponsiveSettings += ']';
          // create dynamic loader variable|s
          dependency = 'dependencies_met_html_loaded_post_carousel_featured';
          load_dependencies[dependency] = '';
          // initialize carousel if HTML portion successfully loaded
          load_dependencies['dependencies_met_html_loaded_post_carousel_featured'] = setInterval (() => {
            // check if HTML portion of the carousel is loaded successfully (loadcarouselHTML)
            xhrLoadState = j1.xhrDOMState['#post_carousel_featured_parent'];
            if (xhrLoadState === 'success') {
              // collect general carousel settings
              carouselOptions  = $.extend({}, {"autoplay":false, "arrows":true, "dots":true, "slidesToShow":2, "slidesToScroll":2, "responsive":true});
              carouselSettings = $.extend(true, {}, slickDefaults, carouselOptions );
              // convert carousel responsive settings to object (carouselResponsiveSettingsOBJ)
              carouselResponsiveSettingsYAML    = yaml.loadAll(carouselResponsiveSettings, 'utf8');
              carouselResponsiveSettingsOBJ     = carouselResponsiveSettingsYAML[0];
              carouselResponsiveSettingsSTRING  = JSON.stringify(carouselResponsiveSettingsOBJ, null, 4);
              logger.debug('\n' + 'responsive settings on carousel id #post_carousel_featured: ' + '\n' + carouselResponsiveSettingsSTRING);
              $('.post-carousel-featured').on('init', function (event, slick) {
                logger.debug('\n' + 'carousel initialized on id: post_carousel_featured');
                slick_lightbox_enabled = '';
                // check if a lightbox is used|enabled
                if ( slick_lightbox_enabled !== '' && slick_lightbox_enabled == 'true' ) {
                  slick_lightbox_enabled = true;
                } else {
                  slick_lightbox_enabled = false;
                }
                if (slick_lightbox_enabled) {
                  logger.debug('\n' + 'initialize lightbox on id: post_carousel_featured');
                  // See: http://mreq.github.io/slick-lightbox/demo/
                  $('#post_carousel_featured').slickLightbox ({
                    caption:                  slickLightboxOptions.caption,
                    useHistoryApi:            slickLightboxOptions.useHistoryApi,
                    background:               slickLightboxOptions.background,
                    closeOnEscape:            slickLightboxOptions.closeOnEscape,
                    closeOnBackdropClick:     slickLightboxOptions.closeOnBackdropClick,
                    navigateByKeyboard:       slickLightboxOptions.navigateByKeyboard,
                    destroyTimeout:           slickLightboxOptions.destroyTimeout,
                    imageMaxHeight:           slickLightboxOptions.imageMaxHeight,
                    lazy:                     slickLightboxOptions.lazy,
                  });
                } // END carousel lightbox enabled
                logger.debug ('\n' + 'adjust positions of slick lightbox arrows on id: post_carousel_featured');
                var buttons = $("#post_carousel_featured > button");
                var arrowTopPos = Math.round (document.documentElement.clientHeight/2)
                // add CSS style for individual top position for all carousels
                if ($('#post_carousel_featured_caption')) {
                  logger.debug ('\n' + 'adjust top position of arrows on id: post_carousel_featured');
                  var buttons = $("#post_carousel_featured > button");
                  $.each ($(buttons), function (index, button) {
                    $(button).addClass ('slick-arrow-post_carousel_featured');
                  });
                }
              }); // END on carousel init
              function debounce(callback, timeout = 300) {
                let timer;
                var buttons = $("#post_carousel_featured > button");
                $.each ($(buttons), (index, button) => {
                  $(button).addClass ('slick-arrow-post_carousel_featured');
                });
                return (...args) => {
                  clearTimeout (timer);
                  timer = setTimeout (() => { callback.apply(this, args); }, timeout);
                };
              }
              // calculate individual arrow positions for all carousels
              function positionSlickArrows (e) {
                var dependencies_met_page_ready = setInterval (() => {
                  var pageState      = $('#content').css("display");
                  var pageVisible    = (pageState === 'block') ? true : false;
                  var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
                  if (j1CoreFinished && pageVisible) {
                    const carousel_type = 'post';
                    const $slick        = $('.post-carousel-featured');
                    const $slides       = $slick.find('.slick-slide');
                    const $currentSlide = $slides.filter ((index, slide) => $(slide).hasClass ('slick-current'));
                    if (carousel_type === 'example') {
                      slideImageHeight = ($currentSlide.find ('').height()/2) - 25;
                    } else {
                      slideImageHeight = ($currentSlide.find ('img').height()/2) - 25;
                    }
                    logger.debug ('\n' + 'adjust top arrow position (centered) by ' + slideImageHeight + ' on id: post_carousel_featured');
                    $('.slick-arrow-post_carousel_featured').css ('top', slideImageHeight + 'px');
                    clearInterval (dependencies_met_page_ready);
                  }
                }, 10);
              }
              // set individual arrow positions for a carousel
              $('.post-carousel-featured').on('init afterChange', positionSlickArrows);
              // setup the carousel
              logger.debug ('\n' + 'carousel is being setup on id: ' + 'post_carousel_featured');
              $('.post-carousel-featured').slick ({
                accessibility:              carouselSettings.accessibility,
                adaptiveHeight:             carouselSettings.adaptiveHeight,
                arrows:                     carouselSettings.arrows,
                autoplay:                   carouselSettings.autoplay,
                autoplaySpeed:              carouselSettings.autoplaySpeed,
                centerMode:                 carouselSettings.centerMode,
                centerPadding:              carouselSettings.centerPadding,
                cssEase:                    carouselSettings.cssEase,
                dots:                       carouselSettings.dots,
                dotsClass:                  carouselSettings.dotsClass,
                draggable:                  carouselSettings.draggable,
                easing:                     carouselSettings.easing,
                edgeFriction:               carouselSettings.edgeFriction,
                fade:                       carouselSettings.fade,
                focusOnSelect:              carouselSettings.focusOnSelect,
                focusOnChange:              carouselSettings.focusOnChange,
                infinite:                   carouselSettings.infinite,
                initialSlide:               carouselSettings.initialSlide,
                lazyLoad:                   carouselSettings.lazyLoad,
                mobileFirst:                carouselSettings.mobileFirst,
                pauseOnDotsHover:           carouselSettings.pauseOnDotsHover,
                pauseOnFocus:               carouselSettings.pauseOnFocus,
                pauseOnHover:               carouselSettings.pauseOnHover,
                respondTo:                  carouselSettings.respondTo,
                rows:                       carouselSettings.rows,
                rtl:                        carouselSettings.rtl,
                slide:                      carouselSettings.slide,
                slidesPerRow:               carouselSettings.slidesPerRow,
                slidesToScroll:             carouselSettings.slidesToScroll,
                slidesToShow:               carouselSettings.slidesToShow,
                speed:                      carouselSettings.speed,
                swipe:                      carouselSettings.swipe,
                swipeToSlide:               carouselSettings.swipeToSlide,
                touchMove:                  carouselSettings.touchMove,
                touchThreshold:             carouselSettings.touchThreshold,
                useCSS:                     carouselSettings.useCSS,
                useTransform:               carouselSettings.useTransform,
                variableWidth:              carouselSettings.variableWidth,
                vertical:                   carouselSettings.vertical,
                verticalSwiping:            carouselSettings.verticalSwiping,
                waitForAnimate:             carouselSettings.waitForAnimate,
                zIndex:                     carouselSettings.zIndex,
                responsive:                 carouselResponsiveSettingsOBJ
              });
              // NOT issued correctly (disabled for now)
              // $(window).resize(debounce(positionSlickArrows, 100));
              clearInterval (load_dependencies['dependencies_met_html_loaded_post_carousel_featured']);
            } // END if xhrLoadState success
          }, 10); // END dependencies_met_html_loaded carousel.id
          logger.info ('\n' + 'initialize carousel on id: ' + 'collection_carousel_portfolio');
          logger.debug ('\n' + 'collect responsive settings for carousel on id: ' + 'collection_carousel_portfolio');
          // collect breakpoint settings from carousel config
          responsiveSettings = $.extend({}, [{"breakpoint":null, "settings":{"breakOn":1024, "slidesToShow":2, "slidesToScroll":2}}, {"breakpoint":null, "settings":{"breakOn":600, "slidesToShow":1, "slidesToScroll":1, "dots":true}}, {"breakpoint":null, "settings":{"breakOn":480, "slidesToShow":1, "slidesToScroll":1}}]);
          // generate carousel breakpoint settings as YAML data structure
          carouselResponsiveSettings  = '[' ;
          for (const [obj_key, obj_value] of Object.entries(responsiveSettings)) {
            var length = Object.keys(obj_value.settings).length;
            var count = 0;
            for (const [key, value] of Object.entries(obj_value.settings)) {
              count++;
              if (key == 'breakOn' && count == 1) {
                carouselResponsiveSettings += '  {' ;
                carouselResponsiveSettings += '    breakpoint: ' + value + ',' ;
                carouselResponsiveSettings += '    settings: {' ;
              } else {
                carouselResponsiveSettings += '      ' + key + ': ' + value + ',' ;
              }
              // close current breakpoint element
              if (count == length) {
                carouselResponsiveSettings += '    }' ;
                carouselResponsiveSettings += '  },' ;
              }
            }
          } // End generate breakpoint YAML elements
          // close breakpoint YAML data
          carouselResponsiveSettings += ']';
          // create dynamic loader variable|s
          dependency = 'dependencies_met_html_loaded_collection_carousel_portfolio';
          load_dependencies[dependency] = '';
          // initialize carousel if HTML portion successfully loaded
          load_dependencies['dependencies_met_html_loaded_collection_carousel_portfolio'] = setInterval (() => {
            // check if HTML portion of the carousel is loaded successfully (loadcarouselHTML)
            xhrLoadState = j1.xhrDOMState['#collection_carousel_portfolio_parent'];
            if (xhrLoadState === 'success') {
              // collect general carousel settings
              carouselOptions  = $.extend({}, {"autoplay":false, "arrows":true, "dots":false, "slidesToShow":3, "slidesToScroll":3, "responsive":true});
              carouselSettings = $.extend(true, {}, slickDefaults, carouselOptions );
              // convert carousel responsive settings to object (carouselResponsiveSettingsOBJ)
              carouselResponsiveSettingsYAML    = yaml.loadAll(carouselResponsiveSettings, 'utf8');
              carouselResponsiveSettingsOBJ     = carouselResponsiveSettingsYAML[0];
              carouselResponsiveSettingsSTRING  = JSON.stringify(carouselResponsiveSettingsOBJ, null, 4);
              logger.debug('\n' + 'responsive settings on carousel id #collection_carousel_portfolio: ' + '\n' + carouselResponsiveSettingsSTRING);
              $('.collection-carousel-portfolio').on('init', function (event, slick) {
                logger.debug('\n' + 'carousel initialized on id: collection_carousel_portfolio');
                slick_lightbox_enabled = '';
                // check if a lightbox is used|enabled
                if ( slick_lightbox_enabled !== '' && slick_lightbox_enabled == 'true' ) {
                  slick_lightbox_enabled = true;
                } else {
                  slick_lightbox_enabled = false;
                }
                if (slick_lightbox_enabled) {
                  logger.debug('\n' + 'initialize lightbox on id: collection_carousel_portfolio');
                  // See: http://mreq.github.io/slick-lightbox/demo/
                  $('#collection_carousel_portfolio').slickLightbox ({
                    caption:                  slickLightboxOptions.caption,
                    useHistoryApi:            slickLightboxOptions.useHistoryApi,
                    background:               slickLightboxOptions.background,
                    closeOnEscape:            slickLightboxOptions.closeOnEscape,
                    closeOnBackdropClick:     slickLightboxOptions.closeOnBackdropClick,
                    navigateByKeyboard:       slickLightboxOptions.navigateByKeyboard,
                    destroyTimeout:           slickLightboxOptions.destroyTimeout,
                    imageMaxHeight:           slickLightboxOptions.imageMaxHeight,
                    lazy:                     slickLightboxOptions.lazy,
                  });
                } // END carousel lightbox enabled
                logger.debug ('\n' + 'adjust positions of slick lightbox arrows on id: collection_carousel_portfolio');
                var buttons = $("#collection_carousel_portfolio > button");
                var arrowTopPos = Math.round (document.documentElement.clientHeight/2)
                // add CSS style for individual top position for all carousels
                if ($('#collection_carousel_portfolio_caption')) {
                  logger.debug ('\n' + 'adjust top position of arrows on id: collection_carousel_portfolio');
                  var buttons = $("#collection_carousel_portfolio > button");
                  $.each ($(buttons), function (index, button) {
                    $(button).addClass ('slick-arrow-collection_carousel_portfolio');
                  });
                }
              }); // END on carousel init
              function debounce(callback, timeout = 300) {
                let timer;
                var buttons = $("#collection_carousel_portfolio > button");
                $.each ($(buttons), (index, button) => {
                  $(button).addClass ('slick-arrow-collection_carousel_portfolio');
                });
                return (...args) => {
                  clearTimeout (timer);
                  timer = setTimeout (() => { callback.apply(this, args); }, timeout);
                };
              }
              // calculate individual arrow positions for all carousels
              function positionSlickArrows (e) {
                var dependencies_met_page_ready = setInterval (() => {
                  var pageState      = $('#content').css("display");
                  var pageVisible    = (pageState === 'block') ? true : false;
                  var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
                  if (j1CoreFinished && pageVisible) {
                    const carousel_type = 'collection';
                    const $slick        = $('.collection-carousel-portfolio');
                    const $slides       = $slick.find('.slick-slide');
                    const $currentSlide = $slides.filter ((index, slide) => $(slide).hasClass ('slick-current'));
                    if (carousel_type === 'example') {
                      slideImageHeight = ($currentSlide.find ('').height()/2) - 25;
                    } else {
                      slideImageHeight = ($currentSlide.find ('img').height()/2) - 25;
                    }
                    logger.debug ('\n' + 'adjust top arrow position (centered) by ' + slideImageHeight + ' on id: collection_carousel_portfolio');
                    $('.slick-arrow-collection_carousel_portfolio').css ('top', slideImageHeight + 'px');
                    clearInterval (dependencies_met_page_ready);
                  }
                }, 10);
              }
              // set individual arrow positions for a carousel
              $('.collection-carousel-portfolio').on('init afterChange', positionSlickArrows);
              // setup the carousel
              logger.debug ('\n' + 'carousel is being setup on id: ' + 'collection_carousel_portfolio');
              $('.collection-carousel-portfolio').slick ({
                accessibility:              carouselSettings.accessibility,
                adaptiveHeight:             carouselSettings.adaptiveHeight,
                arrows:                     carouselSettings.arrows,
                autoplay:                   carouselSettings.autoplay,
                autoplaySpeed:              carouselSettings.autoplaySpeed,
                centerMode:                 carouselSettings.centerMode,
                centerPadding:              carouselSettings.centerPadding,
                cssEase:                    carouselSettings.cssEase,
                dots:                       carouselSettings.dots,
                dotsClass:                  carouselSettings.dotsClass,
                draggable:                  carouselSettings.draggable,
                easing:                     carouselSettings.easing,
                edgeFriction:               carouselSettings.edgeFriction,
                fade:                       carouselSettings.fade,
                focusOnSelect:              carouselSettings.focusOnSelect,
                focusOnChange:              carouselSettings.focusOnChange,
                infinite:                   carouselSettings.infinite,
                initialSlide:               carouselSettings.initialSlide,
                lazyLoad:                   carouselSettings.lazyLoad,
                mobileFirst:                carouselSettings.mobileFirst,
                pauseOnDotsHover:           carouselSettings.pauseOnDotsHover,
                pauseOnFocus:               carouselSettings.pauseOnFocus,
                pauseOnHover:               carouselSettings.pauseOnHover,
                respondTo:                  carouselSettings.respondTo,
                rows:                       carouselSettings.rows,
                rtl:                        carouselSettings.rtl,
                slide:                      carouselSettings.slide,
                slidesPerRow:               carouselSettings.slidesPerRow,
                slidesToScroll:             carouselSettings.slidesToScroll,
                slidesToShow:               carouselSettings.slidesToShow,
                speed:                      carouselSettings.speed,
                swipe:                      carouselSettings.swipe,
                swipeToSlide:               carouselSettings.swipeToSlide,
                touchMove:                  carouselSettings.touchMove,
                touchThreshold:             carouselSettings.touchThreshold,
                useCSS:                     carouselSettings.useCSS,
                useTransform:               carouselSettings.useTransform,
                variableWidth:              carouselSettings.variableWidth,
                vertical:                   carouselSettings.vertical,
                verticalSwiping:            carouselSettings.verticalSwiping,
                waitForAnimate:             carouselSettings.waitForAnimate,
                zIndex:                     carouselSettings.zIndex,
                responsive:                 carouselResponsiveSettingsOBJ
              });
              // NOT issued correctly (disabled for now)
              // $(window).resize(debounce(positionSlickArrows, 100));
              clearInterval (load_dependencies['dependencies_met_html_loaded_collection_carousel_portfolio']);
            } // END if xhrLoadState success
          }, 10); // END dependencies_met_html_loaded carousel.id
          logger.info ('\n' + 'initialize carousel on id: ' + 'collection_carousel_biography');
          logger.debug ('\n' + 'collect responsive settings for carousel on id: ' + 'collection_carousel_biography');
          // collect breakpoint settings from carousel config
          responsiveSettings = $.extend({}, [{"breakpoint":null, "settings":{"breakOn":1024, "slidesToShow":2, "slidesToScroll":2}}, {"breakpoint":null, "settings":{"breakOn":600, "slidesToShow":1, "slidesToScroll":1, "dots":true}}, {"breakpoint":null, "settings":{"breakOn":480, "slidesToShow":1, "slidesToScroll":1}}]);
          // generate carousel breakpoint settings as YAML data structure
          carouselResponsiveSettings  = '[' ;
          for (const [obj_key, obj_value] of Object.entries(responsiveSettings)) {
            var length = Object.keys(obj_value.settings).length;
            var count = 0;
            for (const [key, value] of Object.entries(obj_value.settings)) {
              count++;
              if (key == 'breakOn' && count == 1) {
                carouselResponsiveSettings += '  {' ;
                carouselResponsiveSettings += '    breakpoint: ' + value + ',' ;
                carouselResponsiveSettings += '    settings: {' ;
              } else {
                carouselResponsiveSettings += '      ' + key + ': ' + value + ',' ;
              }
              // close current breakpoint element
              if (count == length) {
                carouselResponsiveSettings += '    }' ;
                carouselResponsiveSettings += '  },' ;
              }
            }
          } // End generate breakpoint YAML elements
          // close breakpoint YAML data
          carouselResponsiveSettings += ']';
          // create dynamic loader variable|s
          dependency = 'dependencies_met_html_loaded_collection_carousel_biography';
          load_dependencies[dependency] = '';
          // initialize carousel if HTML portion successfully loaded
          load_dependencies['dependencies_met_html_loaded_collection_carousel_biography'] = setInterval (() => {
            // check if HTML portion of the carousel is loaded successfully (loadcarouselHTML)
            xhrLoadState = j1.xhrDOMState['#collection_carousel_biography_parent'];
            if (xhrLoadState === 'success') {
              // collect general carousel settings
              carouselOptions  = $.extend({}, {"autoplay":false, "arrows":true, "dots":true, "slidesToShow":3, "slidesToScroll":3, "responsive":true});
              carouselSettings = $.extend(true, {}, slickDefaults, carouselOptions );
              // convert carousel responsive settings to object (carouselResponsiveSettingsOBJ)
              carouselResponsiveSettingsYAML    = yaml.loadAll(carouselResponsiveSettings, 'utf8');
              carouselResponsiveSettingsOBJ     = carouselResponsiveSettingsYAML[0];
              carouselResponsiveSettingsSTRING  = JSON.stringify(carouselResponsiveSettingsOBJ, null, 4);
              logger.debug('\n' + 'responsive settings on carousel id #collection_carousel_biography: ' + '\n' + carouselResponsiveSettingsSTRING);
              $('.collection-carousel-biography').on('init', function (event, slick) {
                logger.debug('\n' + 'carousel initialized on id: collection_carousel_biography');
                slick_lightbox_enabled = '';
                // check if a lightbox is used|enabled
                if ( slick_lightbox_enabled !== '' && slick_lightbox_enabled == 'true' ) {
                  slick_lightbox_enabled = true;
                } else {
                  slick_lightbox_enabled = false;
                }
                if (slick_lightbox_enabled) {
                  logger.debug('\n' + 'initialize lightbox on id: collection_carousel_biography');
                  // See: http://mreq.github.io/slick-lightbox/demo/
                  $('#collection_carousel_biography').slickLightbox ({
                    caption:                  slickLightboxOptions.caption,
                    useHistoryApi:            slickLightboxOptions.useHistoryApi,
                    background:               slickLightboxOptions.background,
                    closeOnEscape:            slickLightboxOptions.closeOnEscape,
                    closeOnBackdropClick:     slickLightboxOptions.closeOnBackdropClick,
                    navigateByKeyboard:       slickLightboxOptions.navigateByKeyboard,
                    destroyTimeout:           slickLightboxOptions.destroyTimeout,
                    imageMaxHeight:           slickLightboxOptions.imageMaxHeight,
                    lazy:                     slickLightboxOptions.lazy,
                  });
                } // END carousel lightbox enabled
                logger.debug ('\n' + 'adjust positions of slick lightbox arrows on id: collection_carousel_biography');
                var buttons = $("#collection_carousel_biography > button");
                var arrowTopPos = Math.round (document.documentElement.clientHeight/2)
                // add CSS style for individual top position for all carousels
                if ($('#collection_carousel_biography_caption')) {
                  logger.debug ('\n' + 'adjust top position of arrows on id: collection_carousel_biography');
                  var buttons = $("#collection_carousel_biography > button");
                  $.each ($(buttons), function (index, button) {
                    $(button).addClass ('slick-arrow-collection_carousel_biography');
                  });
                }
              }); // END on carousel init
              function debounce(callback, timeout = 300) {
                let timer;
                var buttons = $("#collection_carousel_biography > button");
                $.each ($(buttons), (index, button) => {
                  $(button).addClass ('slick-arrow-collection_carousel_biography');
                });
                return (...args) => {
                  clearTimeout (timer);
                  timer = setTimeout (() => { callback.apply(this, args); }, timeout);
                };
              }
              // calculate individual arrow positions for all carousels
              function positionSlickArrows (e) {
                var dependencies_met_page_ready = setInterval (() => {
                  var pageState      = $('#content').css("display");
                  var pageVisible    = (pageState === 'block') ? true : false;
                  var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
                  if (j1CoreFinished && pageVisible) {
                    const carousel_type = 'collection';
                    const $slick        = $('.collection-carousel-biography');
                    const $slides       = $slick.find('.slick-slide');
                    const $currentSlide = $slides.filter ((index, slide) => $(slide).hasClass ('slick-current'));
                    if (carousel_type === 'example') {
                      slideImageHeight = ($currentSlide.find ('').height()/2) - 25;
                    } else {
                      slideImageHeight = ($currentSlide.find ('img').height()/2) - 25;
                    }
                    logger.debug ('\n' + 'adjust top arrow position (centered) by ' + slideImageHeight + ' on id: collection_carousel_biography');
                    $('.slick-arrow-collection_carousel_biography').css ('top', slideImageHeight + 'px');
                    clearInterval (dependencies_met_page_ready);
                  }
                }, 10);
              }
              // set individual arrow positions for a carousel
              $('.collection-carousel-biography').on('init afterChange', positionSlickArrows);
              // setup the carousel
              logger.debug ('\n' + 'carousel is being setup on id: ' + 'collection_carousel_biography');
              $('.collection-carousel-biography').slick ({
                accessibility:              carouselSettings.accessibility,
                adaptiveHeight:             carouselSettings.adaptiveHeight,
                arrows:                     carouselSettings.arrows,
                autoplay:                   carouselSettings.autoplay,
                autoplaySpeed:              carouselSettings.autoplaySpeed,
                centerMode:                 carouselSettings.centerMode,
                centerPadding:              carouselSettings.centerPadding,
                cssEase:                    carouselSettings.cssEase,
                dots:                       carouselSettings.dots,
                dotsClass:                  carouselSettings.dotsClass,
                draggable:                  carouselSettings.draggable,
                easing:                     carouselSettings.easing,
                edgeFriction:               carouselSettings.edgeFriction,
                fade:                       carouselSettings.fade,
                focusOnSelect:              carouselSettings.focusOnSelect,
                focusOnChange:              carouselSettings.focusOnChange,
                infinite:                   carouselSettings.infinite,
                initialSlide:               carouselSettings.initialSlide,
                lazyLoad:                   carouselSettings.lazyLoad,
                mobileFirst:                carouselSettings.mobileFirst,
                pauseOnDotsHover:           carouselSettings.pauseOnDotsHover,
                pauseOnFocus:               carouselSettings.pauseOnFocus,
                pauseOnHover:               carouselSettings.pauseOnHover,
                respondTo:                  carouselSettings.respondTo,
                rows:                       carouselSettings.rows,
                rtl:                        carouselSettings.rtl,
                slide:                      carouselSettings.slide,
                slidesPerRow:               carouselSettings.slidesPerRow,
                slidesToScroll:             carouselSettings.slidesToScroll,
                slidesToShow:               carouselSettings.slidesToShow,
                speed:                      carouselSettings.speed,
                swipe:                      carouselSettings.swipe,
                swipeToSlide:               carouselSettings.swipeToSlide,
                touchMove:                  carouselSettings.touchMove,
                touchThreshold:             carouselSettings.touchThreshold,
                useCSS:                     carouselSettings.useCSS,
                useTransform:               carouselSettings.useTransform,
                variableWidth:              carouselSettings.variableWidth,
                vertical:                   carouselSettings.vertical,
                verticalSwiping:            carouselSettings.verticalSwiping,
                waitForAnimate:             carouselSettings.waitForAnimate,
                zIndex:                     carouselSettings.zIndex,
                responsive:                 carouselResponsiveSettingsOBJ
              });
              // NOT issued correctly (disabled for now)
              // $(window).resize(debounce(positionSlickArrows, 100));
              clearInterval (load_dependencies['dependencies_met_html_loaded_collection_carousel_biography']);
            } // END if xhrLoadState success
          }, 10); // END dependencies_met_html_loaded carousel.id
          logger.info ('\n' + 'initialize carousel on id: ' + 'collection_carousel_fantasy');
          logger.debug ('\n' + 'collect responsive settings for carousel on id: ' + 'collection_carousel_fantasy');
          // collect breakpoint settings from carousel config
          responsiveSettings = $.extend({}, [{"breakpoint":null, "settings":{"breakOn":1024, "slidesToShow":2, "slidesToScroll":2}}, {"breakpoint":null, "settings":{"breakOn":600, "slidesToShow":1, "slidesToScroll":1, "dots":true}}, {"breakpoint":null, "settings":{"breakOn":480, "slidesToShow":1, "slidesToScroll":1}}]);
          // generate carousel breakpoint settings as YAML data structure
          carouselResponsiveSettings  = '[' ;
          for (const [obj_key, obj_value] of Object.entries(responsiveSettings)) {
            var length = Object.keys(obj_value.settings).length;
            var count = 0;
            for (const [key, value] of Object.entries(obj_value.settings)) {
              count++;
              if (key == 'breakOn' && count == 1) {
                carouselResponsiveSettings += '  {' ;
                carouselResponsiveSettings += '    breakpoint: ' + value + ',' ;
                carouselResponsiveSettings += '    settings: {' ;
              } else {
                carouselResponsiveSettings += '      ' + key + ': ' + value + ',' ;
              }
              // close current breakpoint element
              if (count == length) {
                carouselResponsiveSettings += '    }' ;
                carouselResponsiveSettings += '  },' ;
              }
            }
          } // End generate breakpoint YAML elements
          // close breakpoint YAML data
          carouselResponsiveSettings += ']';
          // create dynamic loader variable|s
          dependency = 'dependencies_met_html_loaded_collection_carousel_fantasy';
          load_dependencies[dependency] = '';
          // initialize carousel if HTML portion successfully loaded
          load_dependencies['dependencies_met_html_loaded_collection_carousel_fantasy'] = setInterval (() => {
            // check if HTML portion of the carousel is loaded successfully (loadcarouselHTML)
            xhrLoadState = j1.xhrDOMState['#collection_carousel_fantasy_parent'];
            if (xhrLoadState === 'success') {
              // collect general carousel settings
              carouselOptions  = $.extend({}, {"autoplay":false, "arrows":true, "dots":false, "slidesToShow":3, "slidesToScroll":3, "responsive":true});
              carouselSettings = $.extend(true, {}, slickDefaults, carouselOptions );
              // convert carousel responsive settings to object (carouselResponsiveSettingsOBJ)
              carouselResponsiveSettingsYAML    = yaml.loadAll(carouselResponsiveSettings, 'utf8');
              carouselResponsiveSettingsOBJ     = carouselResponsiveSettingsYAML[0];
              carouselResponsiveSettingsSTRING  = JSON.stringify(carouselResponsiveSettingsOBJ, null, 4);
              logger.debug('\n' + 'responsive settings on carousel id #collection_carousel_fantasy: ' + '\n' + carouselResponsiveSettingsSTRING);
              $('.collection-carousel-fantasy').on('init', function (event, slick) {
                logger.debug('\n' + 'carousel initialized on id: collection_carousel_fantasy');
                slick_lightbox_enabled = '';
                // check if a lightbox is used|enabled
                if ( slick_lightbox_enabled !== '' && slick_lightbox_enabled == 'true' ) {
                  slick_lightbox_enabled = true;
                } else {
                  slick_lightbox_enabled = false;
                }
                if (slick_lightbox_enabled) {
                  logger.debug('\n' + 'initialize lightbox on id: collection_carousel_fantasy');
                  // See: http://mreq.github.io/slick-lightbox/demo/
                  $('#collection_carousel_fantasy').slickLightbox ({
                    caption:                  slickLightboxOptions.caption,
                    useHistoryApi:            slickLightboxOptions.useHistoryApi,
                    background:               slickLightboxOptions.background,
                    closeOnEscape:            slickLightboxOptions.closeOnEscape,
                    closeOnBackdropClick:     slickLightboxOptions.closeOnBackdropClick,
                    navigateByKeyboard:       slickLightboxOptions.navigateByKeyboard,
                    destroyTimeout:           slickLightboxOptions.destroyTimeout,
                    imageMaxHeight:           slickLightboxOptions.imageMaxHeight,
                    lazy:                     slickLightboxOptions.lazy,
                  });
                } // END carousel lightbox enabled
                logger.debug ('\n' + 'adjust positions of slick lightbox arrows on id: collection_carousel_fantasy');
                var buttons = $("#collection_carousel_fantasy > button");
                var arrowTopPos = Math.round (document.documentElement.clientHeight/2)
                // add CSS style for individual top position for all carousels
                if ($('#collection_carousel_fantasy_caption')) {
                  logger.debug ('\n' + 'adjust top position of arrows on id: collection_carousel_fantasy');
                  var buttons = $("#collection_carousel_fantasy > button");
                  $.each ($(buttons), function (index, button) {
                    $(button).addClass ('slick-arrow-collection_carousel_fantasy');
                  });
                }
              }); // END on carousel init
              function debounce(callback, timeout = 300) {
                let timer;
                var buttons = $("#collection_carousel_fantasy > button");
                $.each ($(buttons), (index, button) => {
                  $(button).addClass ('slick-arrow-collection_carousel_fantasy');
                });
                return (...args) => {
                  clearTimeout (timer);
                  timer = setTimeout (() => { callback.apply(this, args); }, timeout);
                };
              }
              // calculate individual arrow positions for all carousels
              function positionSlickArrows (e) {
                var dependencies_met_page_ready = setInterval (() => {
                  var pageState      = $('#content').css("display");
                  var pageVisible    = (pageState === 'block') ? true : false;
                  var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
                  if (j1CoreFinished && pageVisible) {
                    const carousel_type = 'collection';
                    const $slick        = $('.collection-carousel-fantasy');
                    const $slides       = $slick.find('.slick-slide');
                    const $currentSlide = $slides.filter ((index, slide) => $(slide).hasClass ('slick-current'));
                    if (carousel_type === 'example') {
                      slideImageHeight = ($currentSlide.find ('').height()/2) - 25;
                    } else {
                      slideImageHeight = ($currentSlide.find ('img').height()/2) - 25;
                    }
                    logger.debug ('\n' + 'adjust top arrow position (centered) by ' + slideImageHeight + ' on id: collection_carousel_fantasy');
                    $('.slick-arrow-collection_carousel_fantasy').css ('top', slideImageHeight + 'px');
                    clearInterval (dependencies_met_page_ready);
                  }
                }, 10);
              }
              // set individual arrow positions for a carousel
              $('.collection-carousel-fantasy').on('init afterChange', positionSlickArrows);
              // setup the carousel
              logger.debug ('\n' + 'carousel is being setup on id: ' + 'collection_carousel_fantasy');
              $('.collection-carousel-fantasy').slick ({
                accessibility:              carouselSettings.accessibility,
                adaptiveHeight:             carouselSettings.adaptiveHeight,
                arrows:                     carouselSettings.arrows,
                autoplay:                   carouselSettings.autoplay,
                autoplaySpeed:              carouselSettings.autoplaySpeed,
                centerMode:                 carouselSettings.centerMode,
                centerPadding:              carouselSettings.centerPadding,
                cssEase:                    carouselSettings.cssEase,
                dots:                       carouselSettings.dots,
                dotsClass:                  carouselSettings.dotsClass,
                draggable:                  carouselSettings.draggable,
                easing:                     carouselSettings.easing,
                edgeFriction:               carouselSettings.edgeFriction,
                fade:                       carouselSettings.fade,
                focusOnSelect:              carouselSettings.focusOnSelect,
                focusOnChange:              carouselSettings.focusOnChange,
                infinite:                   carouselSettings.infinite,
                initialSlide:               carouselSettings.initialSlide,
                lazyLoad:                   carouselSettings.lazyLoad,
                mobileFirst:                carouselSettings.mobileFirst,
                pauseOnDotsHover:           carouselSettings.pauseOnDotsHover,
                pauseOnFocus:               carouselSettings.pauseOnFocus,
                pauseOnHover:               carouselSettings.pauseOnHover,
                respondTo:                  carouselSettings.respondTo,
                rows:                       carouselSettings.rows,
                rtl:                        carouselSettings.rtl,
                slide:                      carouselSettings.slide,
                slidesPerRow:               carouselSettings.slidesPerRow,
                slidesToScroll:             carouselSettings.slidesToScroll,
                slidesToShow:               carouselSettings.slidesToShow,
                speed:                      carouselSettings.speed,
                swipe:                      carouselSettings.swipe,
                swipeToSlide:               carouselSettings.swipeToSlide,
                touchMove:                  carouselSettings.touchMove,
                touchThreshold:             carouselSettings.touchThreshold,
                useCSS:                     carouselSettings.useCSS,
                useTransform:               carouselSettings.useTransform,
                variableWidth:              carouselSettings.variableWidth,
                vertical:                   carouselSettings.vertical,
                verticalSwiping:            carouselSettings.verticalSwiping,
                waitForAnimate:             carouselSettings.waitForAnimate,
                zIndex:                     carouselSettings.zIndex,
                responsive:                 carouselResponsiveSettingsOBJ
              });
              // NOT issued correctly (disabled for now)
              // $(window).resize(debounce(positionSlickArrows, 100));
              clearInterval (load_dependencies['dependencies_met_html_loaded_collection_carousel_fantasy']);
            } // END if xhrLoadState success
          }, 10); // END dependencies_met_html_loaded carousel.id
          logger.info ('\n' + 'initialize carousel on id: ' + 'collection_carousel_romance');
          logger.debug ('\n' + 'collect responsive settings for carousel on id: ' + 'collection_carousel_romance');
          // collect breakpoint settings from carousel config
          responsiveSettings = $.extend({}, [{"breakpoint":null, "settings":{"breakOn":1024, "slidesToShow":2, "slidesToScroll":2}}, {"breakpoint":null, "settings":{"breakOn":600, "slidesToShow":1, "slidesToScroll":1, "dots":true}}, {"breakpoint":null, "settings":{"breakOn":480, "slidesToShow":1, "slidesToScroll":1}}]);
          // generate carousel breakpoint settings as YAML data structure
          carouselResponsiveSettings  = '[' ;
          for (const [obj_key, obj_value] of Object.entries(responsiveSettings)) {
            var length = Object.keys(obj_value.settings).length;
            var count = 0;
            for (const [key, value] of Object.entries(obj_value.settings)) {
              count++;
              if (key == 'breakOn' && count == 1) {
                carouselResponsiveSettings += '  {' ;
                carouselResponsiveSettings += '    breakpoint: ' + value + ',' ;
                carouselResponsiveSettings += '    settings: {' ;
              } else {
                carouselResponsiveSettings += '      ' + key + ': ' + value + ',' ;
              }
              // close current breakpoint element
              if (count == length) {
                carouselResponsiveSettings += '    }' ;
                carouselResponsiveSettings += '  },' ;
              }
            }
          } // End generate breakpoint YAML elements
          // close breakpoint YAML data
          carouselResponsiveSettings += ']';
          // create dynamic loader variable|s
          dependency = 'dependencies_met_html_loaded_collection_carousel_romance';
          load_dependencies[dependency] = '';
          // initialize carousel if HTML portion successfully loaded
          load_dependencies['dependencies_met_html_loaded_collection_carousel_romance'] = setInterval (() => {
            // check if HTML portion of the carousel is loaded successfully (loadcarouselHTML)
            xhrLoadState = j1.xhrDOMState['#collection_carousel_romance_parent'];
            if (xhrLoadState === 'success') {
              // collect general carousel settings
              carouselOptions  = $.extend({}, {"autoplay":false, "arrows":true, "dots":true, "slidesToShow":3, "slidesToScroll":3, "responsive":true});
              carouselSettings = $.extend(true, {}, slickDefaults, carouselOptions );
              // convert carousel responsive settings to object (carouselResponsiveSettingsOBJ)
              carouselResponsiveSettingsYAML    = yaml.loadAll(carouselResponsiveSettings, 'utf8');
              carouselResponsiveSettingsOBJ     = carouselResponsiveSettingsYAML[0];
              carouselResponsiveSettingsSTRING  = JSON.stringify(carouselResponsiveSettingsOBJ, null, 4);
              logger.debug('\n' + 'responsive settings on carousel id #collection_carousel_romance: ' + '\n' + carouselResponsiveSettingsSTRING);
              $('.collection-carousel-romance').on('init', function (event, slick) {
                logger.debug('\n' + 'carousel initialized on id: collection_carousel_romance');
                slick_lightbox_enabled = '';
                // check if a lightbox is used|enabled
                if ( slick_lightbox_enabled !== '' && slick_lightbox_enabled == 'true' ) {
                  slick_lightbox_enabled = true;
                } else {
                  slick_lightbox_enabled = false;
                }
                if (slick_lightbox_enabled) {
                  logger.debug('\n' + 'initialize lightbox on id: collection_carousel_romance');
                  // See: http://mreq.github.io/slick-lightbox/demo/
                  $('#collection_carousel_romance').slickLightbox ({
                    caption:                  slickLightboxOptions.caption,
                    useHistoryApi:            slickLightboxOptions.useHistoryApi,
                    background:               slickLightboxOptions.background,
                    closeOnEscape:            slickLightboxOptions.closeOnEscape,
                    closeOnBackdropClick:     slickLightboxOptions.closeOnBackdropClick,
                    navigateByKeyboard:       slickLightboxOptions.navigateByKeyboard,
                    destroyTimeout:           slickLightboxOptions.destroyTimeout,
                    imageMaxHeight:           slickLightboxOptions.imageMaxHeight,
                    lazy:                     slickLightboxOptions.lazy,
                  });
                } // END carousel lightbox enabled
                logger.debug ('\n' + 'adjust positions of slick lightbox arrows on id: collection_carousel_romance');
                var buttons = $("#collection_carousel_romance > button");
                var arrowTopPos = Math.round (document.documentElement.clientHeight/2)
                // add CSS style for individual top position for all carousels
                if ($('#collection_carousel_romance_caption')) {
                  logger.debug ('\n' + 'adjust top position of arrows on id: collection_carousel_romance');
                  var buttons = $("#collection_carousel_romance > button");
                  $.each ($(buttons), function (index, button) {
                    $(button).addClass ('slick-arrow-collection_carousel_romance');
                  });
                }
              }); // END on carousel init
              function debounce(callback, timeout = 300) {
                let timer;
                var buttons = $("#collection_carousel_romance > button");
                $.each ($(buttons), (index, button) => {
                  $(button).addClass ('slick-arrow-collection_carousel_romance');
                });
                return (...args) => {
                  clearTimeout (timer);
                  timer = setTimeout (() => { callback.apply(this, args); }, timeout);
                };
              }
              // calculate individual arrow positions for all carousels
              function positionSlickArrows (e) {
                var dependencies_met_page_ready = setInterval (() => {
                  var pageState      = $('#content').css("display");
                  var pageVisible    = (pageState === 'block') ? true : false;
                  var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
                  if (j1CoreFinished && pageVisible) {
                    const carousel_type = 'collection';
                    const $slick        = $('.collection-carousel-romance');
                    const $slides       = $slick.find('.slick-slide');
                    const $currentSlide = $slides.filter ((index, slide) => $(slide).hasClass ('slick-current'));
                    if (carousel_type === 'example') {
                      slideImageHeight = ($currentSlide.find ('').height()/2) - 25;
                    } else {
                      slideImageHeight = ($currentSlide.find ('img').height()/2) - 25;
                    }
                    logger.debug ('\n' + 'adjust top arrow position (centered) by ' + slideImageHeight + ' on id: collection_carousel_romance');
                    $('.slick-arrow-collection_carousel_romance').css ('top', slideImageHeight + 'px');
                    clearInterval (dependencies_met_page_ready);
                  }
                }, 10);
              }
              // set individual arrow positions for a carousel
              $('.collection-carousel-romance').on('init afterChange', positionSlickArrows);
              // setup the carousel
              logger.debug ('\n' + 'carousel is being setup on id: ' + 'collection_carousel_romance');
              $('.collection-carousel-romance').slick ({
                accessibility:              carouselSettings.accessibility,
                adaptiveHeight:             carouselSettings.adaptiveHeight,
                arrows:                     carouselSettings.arrows,
                autoplay:                   carouselSettings.autoplay,
                autoplaySpeed:              carouselSettings.autoplaySpeed,
                centerMode:                 carouselSettings.centerMode,
                centerPadding:              carouselSettings.centerPadding,
                cssEase:                    carouselSettings.cssEase,
                dots:                       carouselSettings.dots,
                dotsClass:                  carouselSettings.dotsClass,
                draggable:                  carouselSettings.draggable,
                easing:                     carouselSettings.easing,
                edgeFriction:               carouselSettings.edgeFriction,
                fade:                       carouselSettings.fade,
                focusOnSelect:              carouselSettings.focusOnSelect,
                focusOnChange:              carouselSettings.focusOnChange,
                infinite:                   carouselSettings.infinite,
                initialSlide:               carouselSettings.initialSlide,
                lazyLoad:                   carouselSettings.lazyLoad,
                mobileFirst:                carouselSettings.mobileFirst,
                pauseOnDotsHover:           carouselSettings.pauseOnDotsHover,
                pauseOnFocus:               carouselSettings.pauseOnFocus,
                pauseOnHover:               carouselSettings.pauseOnHover,
                respondTo:                  carouselSettings.respondTo,
                rows:                       carouselSettings.rows,
                rtl:                        carouselSettings.rtl,
                slide:                      carouselSettings.slide,
                slidesPerRow:               carouselSettings.slidesPerRow,
                slidesToScroll:             carouselSettings.slidesToScroll,
                slidesToShow:               carouselSettings.slidesToShow,
                speed:                      carouselSettings.speed,
                swipe:                      carouselSettings.swipe,
                swipeToSlide:               carouselSettings.swipeToSlide,
                touchMove:                  carouselSettings.touchMove,
                touchThreshold:             carouselSettings.touchThreshold,
                useCSS:                     carouselSettings.useCSS,
                useTransform:               carouselSettings.useTransform,
                variableWidth:              carouselSettings.variableWidth,
                vertical:                   carouselSettings.vertical,
                verticalSwiping:            carouselSettings.verticalSwiping,
                waitForAnimate:             carouselSettings.waitForAnimate,
                zIndex:                     carouselSettings.zIndex,
                responsive:                 carouselResponsiveSettingsOBJ
              });
              // NOT issued correctly (disabled for now)
              // $(window).resize(debounce(positionSlickArrows, 100));
              clearInterval (load_dependencies['dependencies_met_html_loaded_collection_carousel_romance']);
            } // END if xhrLoadState success
          }, 10); // END dependencies_met_html_loaded carousel.id
          logger.info ('\n' + 'initialize carousel on id: ' + 'example_carousel_arrows_dots');
          logger.debug ('\n' + 'collect responsive settings for carousel on id: ' + 'example_carousel_arrows_dots');
          // collect breakpoint settings from carousel config
          responsiveSettings = $.extend({}, [{"breakpoint":null, "settings":{"breakOn":1024, "arrows":true, "dots":true, "slidesToShow":2, "slidesToScroll":2}}, {"breakpoint":null, "settings":{"breakOn":600, "slidesToShow":1, "slidesToScroll":1}}, {"breakpoint":null, "settings":{"breakOn":480, "slidesToShow":1, "slidesToScroll":1}}]);
          // generate carousel breakpoint settings as YAML data structure
          carouselResponsiveSettings  = '[' ;
          for (const [obj_key, obj_value] of Object.entries(responsiveSettings)) {
            var length = Object.keys(obj_value.settings).length;
            var count = 0;
            for (const [key, value] of Object.entries(obj_value.settings)) {
              count++;
              if (key == 'breakOn' && count == 1) {
                carouselResponsiveSettings += '  {' ;
                carouselResponsiveSettings += '    breakpoint: ' + value + ',' ;
                carouselResponsiveSettings += '    settings: {' ;
              } else {
                carouselResponsiveSettings += '      ' + key + ': ' + value + ',' ;
              }
              // close current breakpoint element
              if (count == length) {
                carouselResponsiveSettings += '    }' ;
                carouselResponsiveSettings += '  },' ;
              }
            }
          } // End generate breakpoint YAML elements
          // close breakpoint YAML data
          carouselResponsiveSettings += ']';
          // create dynamic loader variable|s
          dependency = 'dependencies_met_html_loaded_example_carousel_arrows_dots';
          load_dependencies[dependency] = '';
          // initialize carousel if HTML portion successfully loaded
          load_dependencies['dependencies_met_html_loaded_example_carousel_arrows_dots'] = setInterval (() => {
            // check if HTML portion of the carousel is loaded successfully (loadcarouselHTML)
            xhrLoadState = j1.xhrDOMState['#example_carousel_arrows_dots_parent'];
            if (xhrLoadState === 'success') {
              // collect general carousel settings
              carouselOptions  = $.extend({}, {"arrows":true, "dots":true, "autoplay":false, "slidesToShow":3, "slidesToScroll":3, "responsive":true});
              carouselSettings = $.extend(true, {}, slickDefaults, carouselOptions );
              // convert carousel responsive settings to object (carouselResponsiveSettingsOBJ)
              carouselResponsiveSettingsYAML    = yaml.loadAll(carouselResponsiveSettings, 'utf8');
              carouselResponsiveSettingsOBJ     = carouselResponsiveSettingsYAML[0];
              carouselResponsiveSettingsSTRING  = JSON.stringify(carouselResponsiveSettingsOBJ, null, 4);
              logger.debug('\n' + 'responsive settings on carousel id #example_carousel_arrows_dots: ' + '\n' + carouselResponsiveSettingsSTRING);
              $('.example-carousel-arrows-dots').on('init', function (event, slick) {
                logger.debug('\n' + 'carousel initialized on id: example_carousel_arrows_dots');
                slick_lightbox_enabled = '';
                // check if a lightbox is used|enabled
                if ( slick_lightbox_enabled !== '' && slick_lightbox_enabled == 'true' ) {
                  slick_lightbox_enabled = true;
                } else {
                  slick_lightbox_enabled = false;
                }
                if (slick_lightbox_enabled) {
                  logger.debug('\n' + 'initialize lightbox on id: example_carousel_arrows_dots');
                  // See: http://mreq.github.io/slick-lightbox/demo/
                  $('#example_carousel_arrows_dots').slickLightbox ({
                    caption:                  slickLightboxOptions.caption,
                    useHistoryApi:            slickLightboxOptions.useHistoryApi,
                    background:               slickLightboxOptions.background,
                    closeOnEscape:            slickLightboxOptions.closeOnEscape,
                    closeOnBackdropClick:     slickLightboxOptions.closeOnBackdropClick,
                    navigateByKeyboard:       slickLightboxOptions.navigateByKeyboard,
                    destroyTimeout:           slickLightboxOptions.destroyTimeout,
                    imageMaxHeight:           slickLightboxOptions.imageMaxHeight,
                    lazy:                     slickLightboxOptions.lazy,
                  });
                } // END carousel lightbox enabled
                logger.debug ('\n' + 'adjust positions of slick lightbox arrows on id: example_carousel_arrows_dots');
                var buttons = $("#example_carousel_arrows_dots > button");
                var arrowTopPos = Math.round (document.documentElement.clientHeight/2)
                // add CSS style for individual top position for all carousels
                if ($('#example_carousel_arrows_dots_caption')) {
                  logger.debug ('\n' + 'adjust top position of arrows on id: example_carousel_arrows_dots');
                  var buttons = $("#example_carousel_arrows_dots > button");
                  $.each ($(buttons), function (index, button) {
                    $(button).addClass ('slick-arrow-example_carousel_arrows_dots');
                  });
                }
              }); // END on carousel init
              function debounce(callback, timeout = 300) {
                let timer;
                var buttons = $("#example_carousel_arrows_dots > button");
                $.each ($(buttons), (index, button) => {
                  $(button).addClass ('slick-arrow-example_carousel_arrows_dots');
                });
                return (...args) => {
                  clearTimeout (timer);
                  timer = setTimeout (() => { callback.apply(this, args); }, timeout);
                };
              }
              // calculate individual arrow positions for all carousels
              function positionSlickArrows (e) {
                var dependencies_met_page_ready = setInterval (() => {
                  var pageState      = $('#content').css("display");
                  var pageVisible    = (pageState === 'block') ? true : false;
                  var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
                  if (j1CoreFinished && pageVisible) {
                    const carousel_type = 'example';
                    const $slick        = $('.example-carousel-arrows-dots');
                    const $slides       = $slick.find('.slick-slide');
                    const $currentSlide = $slides.filter ((index, slide) => $(slide).hasClass ('slick-current'));
                    if (carousel_type === 'example') {
                      slideImageHeight = ($currentSlide.find ('h3').height()/2) - 25;
                    } else {
                      slideImageHeight = ($currentSlide.find ('img').height()/2) - 25;
                    }
                    logger.debug ('\n' + 'adjust top arrow position (centered) by ' + slideImageHeight + ' on id: example_carousel_arrows_dots');
                    $('.slick-arrow-example_carousel_arrows_dots').css ('top', slideImageHeight + 'px');
                    clearInterval (dependencies_met_page_ready);
                  }
                }, 10);
              }
              // set individual arrow positions for a carousel
              $('.example-carousel-arrows-dots').on('init afterChange', positionSlickArrows);
              // setup the carousel
              logger.debug ('\n' + 'carousel is being setup on id: ' + 'example_carousel_arrows_dots');
              $('.example-carousel-arrows-dots').slick ({
                accessibility:              carouselSettings.accessibility,
                adaptiveHeight:             carouselSettings.adaptiveHeight,
                arrows:                     carouselSettings.arrows,
                autoplay:                   carouselSettings.autoplay,
                autoplaySpeed:              carouselSettings.autoplaySpeed,
                centerMode:                 carouselSettings.centerMode,
                centerPadding:              carouselSettings.centerPadding,
                cssEase:                    carouselSettings.cssEase,
                dots:                       carouselSettings.dots,
                dotsClass:                  carouselSettings.dotsClass,
                draggable:                  carouselSettings.draggable,
                easing:                     carouselSettings.easing,
                edgeFriction:               carouselSettings.edgeFriction,
                fade:                       carouselSettings.fade,
                focusOnSelect:              carouselSettings.focusOnSelect,
                focusOnChange:              carouselSettings.focusOnChange,
                infinite:                   carouselSettings.infinite,
                initialSlide:               carouselSettings.initialSlide,
                lazyLoad:                   carouselSettings.lazyLoad,
                mobileFirst:                carouselSettings.mobileFirst,
                pauseOnDotsHover:           carouselSettings.pauseOnDotsHover,
                pauseOnFocus:               carouselSettings.pauseOnFocus,
                pauseOnHover:               carouselSettings.pauseOnHover,
                respondTo:                  carouselSettings.respondTo,
                rows:                       carouselSettings.rows,
                rtl:                        carouselSettings.rtl,
                slide:                      carouselSettings.slide,
                slidesPerRow:               carouselSettings.slidesPerRow,
                slidesToScroll:             carouselSettings.slidesToScroll,
                slidesToShow:               carouselSettings.slidesToShow,
                speed:                      carouselSettings.speed,
                swipe:                      carouselSettings.swipe,
                swipeToSlide:               carouselSettings.swipeToSlide,
                touchMove:                  carouselSettings.touchMove,
                touchThreshold:             carouselSettings.touchThreshold,
                useCSS:                     carouselSettings.useCSS,
                useTransform:               carouselSettings.useTransform,
                variableWidth:              carouselSettings.variableWidth,
                vertical:                   carouselSettings.vertical,
                verticalSwiping:            carouselSettings.verticalSwiping,
                waitForAnimate:             carouselSettings.waitForAnimate,
                zIndex:                     carouselSettings.zIndex,
                responsive:                 carouselResponsiveSettingsOBJ
              });
              // NOT issued correctly (disabled for now)
              // $(window).resize(debounce(positionSlickArrows, 100));
              clearInterval (load_dependencies['dependencies_met_html_loaded_example_carousel_arrows_dots']);
            } // END if xhrLoadState success
          }, 10); // END dependencies_met_html_loaded carousel.id
          logger.info ('\n' + 'initialize carousel on id: ' + 'image_carousel_simple');
          logger.debug ('\n' + 'collect responsive settings for carousel on id: ' + 'image_carousel_simple');
          // collect breakpoint settings from carousel config
          responsiveSettings = $.extend({}, [{"breakpoint":null, "settings":{"breakOn":1024, "slidesToShow":2, "slidesToScroll":2}}, {"breakpoint":null, "settings":{"breakOn":800, "slidesToShow":1, "slidesToScroll":1}}, {"breakpoint":null, "settings":{"breakOn":480, "dots":false, "slidesToShow":1, "slidesToScroll":1}}]);
          // generate carousel breakpoint settings as YAML data structure
          carouselResponsiveSettings  = '[' ;
          for (const [obj_key, obj_value] of Object.entries(responsiveSettings)) {
            var length = Object.keys(obj_value.settings).length;
            var count = 0;
            for (const [key, value] of Object.entries(obj_value.settings)) {
              count++;
              if (key == 'breakOn' && count == 1) {
                carouselResponsiveSettings += '  {' ;
                carouselResponsiveSettings += '    breakpoint: ' + value + ',' ;
                carouselResponsiveSettings += '    settings: {' ;
              } else {
                carouselResponsiveSettings += '      ' + key + ': ' + value + ',' ;
              }
              // close current breakpoint element
              if (count == length) {
                carouselResponsiveSettings += '    }' ;
                carouselResponsiveSettings += '  },' ;
              }
            }
          } // End generate breakpoint YAML elements
          // close breakpoint YAML data
          carouselResponsiveSettings += ']';
          // create dynamic loader variable|s
          dependency = 'dependencies_met_html_loaded_image_carousel_simple';
          load_dependencies[dependency] = '';
          // initialize carousel if HTML portion successfully loaded
          load_dependencies['dependencies_met_html_loaded_image_carousel_simple'] = setInterval (() => {
            // check if HTML portion of the carousel is loaded successfully (loadcarouselHTML)
            xhrLoadState = j1.xhrDOMState['#image_carousel_simple_parent'];
            if (xhrLoadState === 'success') {
              // collect general carousel settings
              carouselOptions  = $.extend({}, {"autoplay":false, "arrows":false, "dots":false, "speed":300, "slidesToShow":2, "slidesToScroll":2, "responsive":true});
              carouselSettings = $.extend(true, {}, slickDefaults, carouselOptions );
              // convert carousel responsive settings to object (carouselResponsiveSettingsOBJ)
              carouselResponsiveSettingsYAML    = yaml.loadAll(carouselResponsiveSettings, 'utf8');
              carouselResponsiveSettingsOBJ     = carouselResponsiveSettingsYAML[0];
              carouselResponsiveSettingsSTRING  = JSON.stringify(carouselResponsiveSettingsOBJ, null, 4);
              logger.debug('\n' + 'responsive settings on carousel id #image_carousel_simple: ' + '\n' + carouselResponsiveSettingsSTRING);
              $('.image-carousel-simple').on('init', function (event, slick) {
                logger.debug('\n' + 'carousel initialized on id: image_carousel_simple');
                slick_lightbox_enabled = 'false';
                // check if a lightbox is used|enabled
                if ( slick_lightbox_enabled !== '' && slick_lightbox_enabled == 'true' ) {
                  slick_lightbox_enabled = true;
                } else {
                  slick_lightbox_enabled = false;
                }
                if (slick_lightbox_enabled) {
                  logger.debug('\n' + 'initialize lightbox on id: image_carousel_simple');
                  // See: http://mreq.github.io/slick-lightbox/demo/
                  $('#image_carousel_simple').slickLightbox ({
                    caption:                  slickLightboxOptions.caption,
                    useHistoryApi:            slickLightboxOptions.useHistoryApi,
                    background:               slickLightboxOptions.background,
                    closeOnEscape:            slickLightboxOptions.closeOnEscape,
                    closeOnBackdropClick:     slickLightboxOptions.closeOnBackdropClick,
                    navigateByKeyboard:       slickLightboxOptions.navigateByKeyboard,
                    destroyTimeout:           slickLightboxOptions.destroyTimeout,
                    imageMaxHeight:           slickLightboxOptions.imageMaxHeight,
                    lazy:                     slickLightboxOptions.lazy,
                  });
                } // END carousel lightbox enabled
                logger.debug ('\n' + 'adjust positions of slick lightbox arrows on id: image_carousel_simple');
                var buttons = $("#image_carousel_simple > button");
                var arrowTopPos = Math.round (document.documentElement.clientHeight/2)
                // add CSS style for individual top position for all carousels
                if ($('#image_carousel_simple_caption')) {
                  logger.debug ('\n' + 'adjust top position of arrows on id: image_carousel_simple');
                  var buttons = $("#image_carousel_simple > button");
                  $.each ($(buttons), function (index, button) {
                    $(button).addClass ('slick-arrow-image_carousel_simple');
                  });
                }
              }); // END on carousel init
              function debounce(callback, timeout = 300) {
                let timer;
                var buttons = $("#image_carousel_simple > button");
                $.each ($(buttons), (index, button) => {
                  $(button).addClass ('slick-arrow-image_carousel_simple');
                });
                return (...args) => {
                  clearTimeout (timer);
                  timer = setTimeout (() => { callback.apply(this, args); }, timeout);
                };
              }
              // calculate individual arrow positions for all carousels
              function positionSlickArrows (e) {
                var dependencies_met_page_ready = setInterval (() => {
                  var pageState      = $('#content').css("display");
                  var pageVisible    = (pageState === 'block') ? true : false;
                  var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
                  if (j1CoreFinished && pageVisible) {
                    const carousel_type = 'image';
                    const $slick        = $('.image-carousel-simple');
                    const $slides       = $slick.find('.slick-slide');
                    const $currentSlide = $slides.filter ((index, slide) => $(slide).hasClass ('slick-current'));
                    if (carousel_type === 'example') {
                      slideImageHeight = ($currentSlide.find ('').height()/2) - 25;
                    } else {
                      slideImageHeight = ($currentSlide.find ('img').height()/2) - 25;
                    }
                    logger.debug ('\n' + 'adjust top arrow position (centered) by ' + slideImageHeight + ' on id: image_carousel_simple');
                    $('.slick-arrow-image_carousel_simple').css ('top', slideImageHeight + 'px');
                    clearInterval (dependencies_met_page_ready);
                  }
                }, 10);
              }
              // set individual arrow positions for a carousel
              $('.image-carousel-simple').on('init afterChange', positionSlickArrows);
              // setup the carousel
              logger.debug ('\n' + 'carousel is being setup on id: ' + 'image_carousel_simple');
              $('.image-carousel-simple').slick ({
                accessibility:              carouselSettings.accessibility,
                adaptiveHeight:             carouselSettings.adaptiveHeight,
                arrows:                     carouselSettings.arrows,
                autoplay:                   carouselSettings.autoplay,
                autoplaySpeed:              carouselSettings.autoplaySpeed,
                centerMode:                 carouselSettings.centerMode,
                centerPadding:              carouselSettings.centerPadding,
                cssEase:                    carouselSettings.cssEase,
                dots:                       carouselSettings.dots,
                dotsClass:                  carouselSettings.dotsClass,
                draggable:                  carouselSettings.draggable,
                easing:                     carouselSettings.easing,
                edgeFriction:               carouselSettings.edgeFriction,
                fade:                       carouselSettings.fade,
                focusOnSelect:              carouselSettings.focusOnSelect,
                focusOnChange:              carouselSettings.focusOnChange,
                infinite:                   carouselSettings.infinite,
                initialSlide:               carouselSettings.initialSlide,
                lazyLoad:                   carouselSettings.lazyLoad,
                mobileFirst:                carouselSettings.mobileFirst,
                pauseOnDotsHover:           carouselSettings.pauseOnDotsHover,
                pauseOnFocus:               carouselSettings.pauseOnFocus,
                pauseOnHover:               carouselSettings.pauseOnHover,
                respondTo:                  carouselSettings.respondTo,
                rows:                       carouselSettings.rows,
                rtl:                        carouselSettings.rtl,
                slide:                      carouselSettings.slide,
                slidesPerRow:               carouselSettings.slidesPerRow,
                slidesToScroll:             carouselSettings.slidesToScroll,
                slidesToShow:               carouselSettings.slidesToShow,
                speed:                      carouselSettings.speed,
                swipe:                      carouselSettings.swipe,
                swipeToSlide:               carouselSettings.swipeToSlide,
                touchMove:                  carouselSettings.touchMove,
                touchThreshold:             carouselSettings.touchThreshold,
                useCSS:                     carouselSettings.useCSS,
                useTransform:               carouselSettings.useTransform,
                variableWidth:              carouselSettings.variableWidth,
                vertical:                   carouselSettings.vertical,
                verticalSwiping:            carouselSettings.verticalSwiping,
                waitForAnimate:             carouselSettings.waitForAnimate,
                zIndex:                     carouselSettings.zIndex,
                responsive:                 carouselResponsiveSettingsOBJ
              });
              // NOT issued correctly (disabled for now)
              // $(window).resize(debounce(positionSlickArrows, 100));
              clearInterval (load_dependencies['dependencies_met_html_loaded_image_carousel_simple']);
            } // END if xhrLoadState success
          }, 10); // END dependencies_met_html_loaded carousel.id
          logger.info ('\n' + 'initialize carousel on id: ' + 'image_carousel_full');
          logger.debug ('\n' + 'collect responsive settings for carousel on id: ' + 'image_carousel_full');
          // collect breakpoint settings from carousel config
          responsiveSettings = $.extend({}, [{"breakpoint":null, "settings":{"breakOn":1024, "slidesToShow":2, "slidesToScroll":2}}, {"breakpoint":null, "settings":{"breakOn":800, "slidesToShow":1, "slidesToScroll":1}}, {"breakpoint":null, "settings":{"breakOn":480, "slidesToShow":1, "slidesToScroll":1}}]);
          // generate carousel breakpoint settings as YAML data structure
          carouselResponsiveSettings  = '[' ;
          for (const [obj_key, obj_value] of Object.entries(responsiveSettings)) {
            var length = Object.keys(obj_value.settings).length;
            var count = 0;
            for (const [key, value] of Object.entries(obj_value.settings)) {
              count++;
              if (key == 'breakOn' && count == 1) {
                carouselResponsiveSettings += '  {' ;
                carouselResponsiveSettings += '    breakpoint: ' + value + ',' ;
                carouselResponsiveSettings += '    settings: {' ;
              } else {
                carouselResponsiveSettings += '      ' + key + ': ' + value + ',' ;
              }
              // close current breakpoint element
              if (count == length) {
                carouselResponsiveSettings += '    }' ;
                carouselResponsiveSettings += '  },' ;
              }
            }
          } // End generate breakpoint YAML elements
          // close breakpoint YAML data
          carouselResponsiveSettings += ']';
          // create dynamic loader variable|s
          dependency = 'dependencies_met_html_loaded_image_carousel_full';
          load_dependencies[dependency] = '';
          // initialize carousel if HTML portion successfully loaded
          load_dependencies['dependencies_met_html_loaded_image_carousel_full'] = setInterval (() => {
            // check if HTML portion of the carousel is loaded successfully (loadcarouselHTML)
            xhrLoadState = j1.xhrDOMState['#image_carousel_full_parent'];
            if (xhrLoadState === 'success') {
              // collect general carousel settings
              carouselOptions  = $.extend({}, {"autoplay":false, "arrows":true, "dots":true, "speed":300, "slidesToShow":2, "slidesToScroll":2, "responsive":true});
              carouselSettings = $.extend(true, {}, slickDefaults, carouselOptions );
              // convert carousel responsive settings to object (carouselResponsiveSettingsOBJ)
              carouselResponsiveSettingsYAML    = yaml.loadAll(carouselResponsiveSettings, 'utf8');
              carouselResponsiveSettingsOBJ     = carouselResponsiveSettingsYAML[0];
              carouselResponsiveSettingsSTRING  = JSON.stringify(carouselResponsiveSettingsOBJ, null, 4);
              logger.debug('\n' + 'responsive settings on carousel id #image_carousel_full: ' + '\n' + carouselResponsiveSettingsSTRING);
              $('.image-carousel-full').on('init', function (event, slick) {
                logger.debug('\n' + 'carousel initialized on id: image_carousel_full');
                slick_lightbox_enabled = 'true';
                // check if a lightbox is used|enabled
                if ( slick_lightbox_enabled !== '' && slick_lightbox_enabled == 'true' ) {
                  slick_lightbox_enabled = true;
                } else {
                  slick_lightbox_enabled = false;
                }
                if (slick_lightbox_enabled) {
                  logger.debug('\n' + 'initialize lightbox on id: image_carousel_full');
                  // See: http://mreq.github.io/slick-lightbox/demo/
                  $('#image_carousel_full').slickLightbox ({
                    caption:                  slickLightboxOptions.caption,
                    useHistoryApi:            slickLightboxOptions.useHistoryApi,
                    background:               slickLightboxOptions.background,
                    closeOnEscape:            slickLightboxOptions.closeOnEscape,
                    closeOnBackdropClick:     slickLightboxOptions.closeOnBackdropClick,
                    navigateByKeyboard:       slickLightboxOptions.navigateByKeyboard,
                    destroyTimeout:           slickLightboxOptions.destroyTimeout,
                    imageMaxHeight:           slickLightboxOptions.imageMaxHeight,
                    lazy:                     slickLightboxOptions.lazy,
                  });
                } // END carousel lightbox enabled
                logger.debug ('\n' + 'adjust positions of slick lightbox arrows on id: image_carousel_full');
                var buttons = $("#image_carousel_full > button");
                var arrowTopPos = Math.round (document.documentElement.clientHeight/2)
                // add CSS style for individual top position for all carousels
                if ($('#image_carousel_full_caption')) {
                  logger.debug ('\n' + 'adjust top position of arrows on id: image_carousel_full');
                  var buttons = $("#image_carousel_full > button");
                  $.each ($(buttons), function (index, button) {
                    $(button).addClass ('slick-arrow-image_carousel_full');
                  });
                }
              }); // END on carousel init
              function debounce(callback, timeout = 300) {
                let timer;
                var buttons = $("#image_carousel_full > button");
                $.each ($(buttons), (index, button) => {
                  $(button).addClass ('slick-arrow-image_carousel_full');
                });
                return (...args) => {
                  clearTimeout (timer);
                  timer = setTimeout (() => { callback.apply(this, args); }, timeout);
                };
              }
              // calculate individual arrow positions for all carousels
              function positionSlickArrows (e) {
                var dependencies_met_page_ready = setInterval (() => {
                  var pageState      = $('#content').css("display");
                  var pageVisible    = (pageState === 'block') ? true : false;
                  var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
                  if (j1CoreFinished && pageVisible) {
                    const carousel_type = 'image';
                    const $slick        = $('.image-carousel-full');
                    const $slides       = $slick.find('.slick-slide');
                    const $currentSlide = $slides.filter ((index, slide) => $(slide).hasClass ('slick-current'));
                    if (carousel_type === 'example') {
                      slideImageHeight = ($currentSlide.find ('').height()/2) - 25;
                    } else {
                      slideImageHeight = ($currentSlide.find ('img').height()/2) - 25;
                    }
                    logger.debug ('\n' + 'adjust top arrow position (centered) by ' + slideImageHeight + ' on id: image_carousel_full');
                    $('.slick-arrow-image_carousel_full').css ('top', slideImageHeight + 'px');
                    clearInterval (dependencies_met_page_ready);
                  }
                }, 10);
              }
              // set individual arrow positions for a carousel
              $('.image-carousel-full').on('init afterChange', positionSlickArrows);
              // setup the carousel
              logger.debug ('\n' + 'carousel is being setup on id: ' + 'image_carousel_full');
              $('.image-carousel-full').slick ({
                accessibility:              carouselSettings.accessibility,
                adaptiveHeight:             carouselSettings.adaptiveHeight,
                arrows:                     carouselSettings.arrows,
                autoplay:                   carouselSettings.autoplay,
                autoplaySpeed:              carouselSettings.autoplaySpeed,
                centerMode:                 carouselSettings.centerMode,
                centerPadding:              carouselSettings.centerPadding,
                cssEase:                    carouselSettings.cssEase,
                dots:                       carouselSettings.dots,
                dotsClass:                  carouselSettings.dotsClass,
                draggable:                  carouselSettings.draggable,
                easing:                     carouselSettings.easing,
                edgeFriction:               carouselSettings.edgeFriction,
                fade:                       carouselSettings.fade,
                focusOnSelect:              carouselSettings.focusOnSelect,
                focusOnChange:              carouselSettings.focusOnChange,
                infinite:                   carouselSettings.infinite,
                initialSlide:               carouselSettings.initialSlide,
                lazyLoad:                   carouselSettings.lazyLoad,
                mobileFirst:                carouselSettings.mobileFirst,
                pauseOnDotsHover:           carouselSettings.pauseOnDotsHover,
                pauseOnFocus:               carouselSettings.pauseOnFocus,
                pauseOnHover:               carouselSettings.pauseOnHover,
                respondTo:                  carouselSettings.respondTo,
                rows:                       carouselSettings.rows,
                rtl:                        carouselSettings.rtl,
                slide:                      carouselSettings.slide,
                slidesPerRow:               carouselSettings.slidesPerRow,
                slidesToScroll:             carouselSettings.slidesToScroll,
                slidesToShow:               carouselSettings.slidesToShow,
                speed:                      carouselSettings.speed,
                swipe:                      carouselSettings.swipe,
                swipeToSlide:               carouselSettings.swipeToSlide,
                touchMove:                  carouselSettings.touchMove,
                touchThreshold:             carouselSettings.touchThreshold,
                useCSS:                     carouselSettings.useCSS,
                useTransform:               carouselSettings.useTransform,
                variableWidth:              carouselSettings.variableWidth,
                vertical:                   carouselSettings.vertical,
                verticalSwiping:            carouselSettings.verticalSwiping,
                waitForAnimate:             carouselSettings.waitForAnimate,
                zIndex:                     carouselSettings.zIndex,
                responsive:                 carouselResponsiveSettingsOBJ
              });
              // NOT issued correctly (disabled for now)
              // $(window).resize(debounce(positionSlickArrows, 100));
              clearInterval (load_dependencies['dependencies_met_html_loaded_image_carousel_full']);
            } // END if xhrLoadState success
          }, 10); // END dependencies_met_html_loaded carousel.id
            // ENDFOR (all) carousels
          _this.setState ('finished');
          logger.debug ('\n' + 'state: ' + _this.getState());
          logger.info ('\n' + 'module initialization finished');
          endTimeModule = Date.now();
          logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval (dependencies_met_page_ready);
        } // END if pageVisible
      }, 10); // END dependency_met_page_ready
    }, // END init
    // -------------------------------------------------------------------------
    // loadcarouselHTML()
    // load all Slick carousels (HTML portion) dynanically configured
    // and enabled (AJAX) from YAMLdata file
    // NOTE: Make sure the placeholder is available in the content page
    // eg. using the asciidoc extension mastercarousel::
    // -------------------------------------------------------------------------
    loadCarouselHTML: (options, carousel) => {
      var numcarousels      = Object.keys(carousel).length;
      var active_carousels  = numcarousels;
      var xhr_data_path   = options.xhr_data_path + '/index.html';
      var xhr_container_id;
      // console.debug('number of carousels found: ' + numcarousels);
      _this.setState('load_data');
      Object.keys(carousel).forEach ((key) => {
        if (carousel[key].enabled) {
          xhr_container_id = carousel[key].id + '_parent';
          // console.debug('load HTML data on carousel id: ' + carousel[key].id);
          j1.loadHTML({
            xhr_container_id: xhr_container_id,
            xhr_data_path:    xhr_data_path,
            xhr_data_element: carousel[key].id
          });
        } else {
          // console.debug('carousel found disabled on id: ' + carousel[key].id);
          active_carousels--;
        }
      });
      // console.debug('carousels loaded in page enabled|all: ' + active_carousels + '|' + numcarousels);
      _this.setState('data_loaded');
    }, // END loadcarouselHTML
    // -------------------------------------------------------------------------
    // messageHandler()
    // manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: (sender, message) => {
      var json_message = JSON.stringify(message, undefined, 2);
      logText = '\n' + 'received message from ' + sender + ': ' + json_message;
      logger.debug(logText);
      // -----------------------------------------------------------------------
      //  process commands|actions
      // -----------------------------------------------------------------------
      if (message.type === 'command' && message.action === 'module_initialized') {
        //
        // place handling of command|action here
        //
        logger.info('\n' + message.text);
      }
      //
      // place handling of other command|action here
      //
      return true;
    }, // END messageHandler
    // -------------------------------------------------------------------------
    // setState()
    // sets the current (processing) state of the module
    // -------------------------------------------------------------------------
    setState: (stat) => {
      _this.state = stat;
    }, // END setState
    // -------------------------------------------------------------------------
    // getState()
    // Returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: () => {
      return _this.state;
    } // END getState
  }; // END main (return)
})(j1, window);



