

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/attic.js
 # JS Adapter for J1 Master Header
 #
 # Product/Info:
 # https://jekyll.one
 # http://www.jquery-backstretch.com/
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 # Copyright (C) 2012 Scott Robbin
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Backstretch is licensed under the MIT License.
 # For details, see https://github.com/jquery-backstretch/jquery-backstretch
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-04-25 16:38:04 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.attic = ((j1, window) => {
  var environment   = 'development';
  var state         = 'not_started';
  var moduleOptions = {};
  var atticFilters;
  var filterArray;
  var filterStr;
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
  // main
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // adapter initializer
    // -------------------------------------------------------------------------
    init: (options) => {
      // -----------------------------------------------------------------------
      // default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.attic',
        generated:   '2024-04-25 16:38:04 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.attic;
      logger  = log4javascript.getLogger('j1.adapter.attic');
      // initialize state flag
      _this.state = 'pending';
      // create settings object from frontmatter
      var frontmatterOptions  = options != null ? $.extend({}, options) : {};
      // create settings object from attic options
      var atticDefaults = $.extend({}, {"enabled":true, "debug":false, "hide_page_oninit":true, "circuit":false, "notranslate":true, "pauseOnHover":false, "icon_family":"mdib", "icon_color":"var(--md-gray-500)", "icon_size":"default", "raised_level":0, "r_text":"enabled", "text_emphasis":"stronger", "padding_top":400, "padding_bottom":50, "margin_bottom":50, "title_size":"3em", "title_color":"rgba(255, 255, 255, 0.8)", "title_align":"left", "title_animate":"animate__bounceInDown", "title_animate_delay":false, "title_animate_duration":"animate__slow", "tagline_size":"1.5em", "tagline_color":"rgba(255, 255, 255, 0.8)", "tagline_align":"left", "tagline_animate":"animate__fadeInRight", "tagline_animate_delay":false, "tagline_animate_duration":"animate__slow", "background_color_1":"var(--md-blue-900)", "background_color_2":"var(--md-blue-900)", "slides":[{"url":"/assets/images/modules/attics/placeholder/transparent-1920x1280.png", "alt":"Placeholder background image"}], "filters":{"grayscale":1, "contrast":0.8, "brightness":0.8}, "action_enabled":false, "action_url":"#", "action_button":"btn-default", "action_icon":"download", "action_icon_family":"mdib", "action_text":"Download Now", "logo_enabled":false, "logo_url":"/assets/images/modules/icons/j1/j1-512x512.png", "logo_alt":"Jekyll-One-Template", "logo_height":196, "logo_animate":"animate__slideInDown", "spinner":false, "caption":"", "caption_href":"", "caption_color":"rgba(255, 255, 255, 0.5)", "opacity":0.5, "alignX":0.5, "alignY":0.5, "scale":"cover", "transition":"fadeInOut", "duration":5000, "transitionDuration":"normal", "animateFirst":false, "start":0, "paused":false, "preload":5, "preloadSize":1, "bypassCss":false, "alwaysTestWindowResolution":false, "resolutionRefreshRate":2500, "resolutionChangeRatioThreshold":0.1, "isVideo":false, "loop":false, "mute":false, "attics":[{"name":"Home", "attic":{"enabled":false, "id":"attic_home", "layout":"home", "notranslate":true}}, {"name":"Page_Post", "attic":{"enabled":false, "id":"attic_page_post", "layout":["page", "post"], "notranslate":true}}, {"name":"Text attic", "attic":{"enabled":false, "id":"attic_text", "layout":["collection", "app", "raw"], "notranslate":true}}]});
      var atticSettings = $.extend({}, {"attics":[{"name":"Home", "attic":{"enabled":true, "id":"attic_home", "layout":"home", "title_animate":"animate__bounceInDown", "title_animate_duration":"animate__fast", "tagline_animate":"animate__fadeInRight", "tagline_animate_duration":"animate__slow", "padding_top":600}}, {"name":"Pages", "attic":{"enabled":true, "id":"attic_page", "layout":"page", "padding_top":600}}, {"name":"Posts", "attic":{"enabled":true, "id":"attic_post", "layout":["collection", "post"], "title_animate":"animate__fadeInDown", "padding_top":600}}]});
      var atticOptions  = $.extend(true, {}, atticDefaults, atticSettings, frontmatterOptions);
      // save frontmatterOptions and atticOptions in the j1 namespace
      // to be used later by j1.template.init() to load the header
      //
      _this['frontmatterOptions'] = frontmatterOptions;
      _this['atticOptions']       = atticOptions;
      // -----------------------------------------------------------------------
      // adapter initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (() => {
        var pageState   = $('#no_flicker').css("display");
        var pageVisible = (pageState === 'block') ? true: false;
        if (pageVisible) {
          startTimeModule = Date.now();
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          logger.info('\n' + 'module initializaton: started');
          if (atticOptions.hide_page_oninit) {
            // hide whole page while attic is being created
            // jadams, 2023-05-12: page visible while loading the attic
            // cause high numbers for cumulative layout shift (CLS)
            //
            logger.debug('\n' + 'hide attic on initialization');
            $('#no_flicker').css('display', 'none');
          }
          _this.createAllAttics();
          clearInterval(dependencies_met_page_ready);
        }
      }, 10);
    }, // END init
    // -------------------------------------------------------------------------
    // createAllAttics()
    // initialize all header supported
    // -------------------------------------------------------------------------
    createAllAttics: () => {
      var frontmatterOptions  = _this.frontmatterOptions;
      // merge all attic options
      var atticOptions = $.extend(true, {}, _this.atticOptions, _this.frontmatterOptions);
          // create RUNNER for id: attic_home
          function attic_home_runner (atticOptions) {
            var atticOptionsFilters = {};
            var atticItemFilters    = {};
            var atticFilters        = {};
            var my_attic      	    = $.extend({}, {"enabled":true, "id":"attic_home", "layout":"home", "title_animate":"animate__bounceInDown", "title_animate_duration":"animate__fast", "tagline_animate":"animate__fadeInRight", "tagline_animate_duration":"animate__slow", "padding_top":600});
            // collect attic filter settings to object to array to string
            //
            atticOptionsFilters = atticOptions.filters;
            atticFilters        = $.extend(true, {}, atticOptionsFilters, atticItemFilters);
            filterArray         = [];
            $.each(atticFilters, (idx2, val2) => {
              var str = idx2 + '(' + val2 + ')';
              filterArray.push(str);
            });
            filterStr = filterArray.join(' ');
            // fire backstretch for all slides on attic_id
            if ($('#attic_home').length) {
              $('#attic_home').backstretch(
                atticOptions.slides, {
                  debug:                          atticOptions.debug,
                  spinner:                        atticOptions.spinner,
                  alignX:                         atticOptions.alignX,
                  alignY:                         atticOptions.alignY,
                  scale:                          atticOptions.scale,
                  transition:                     atticOptions.transition,
                  transitionDuration:             atticOptions.transitionDuration,
                  animateFirst:                   atticOptions.animateFirst,
                  duration:                       atticOptions.duration,
                  paused:                         atticOptions.paused,
                  start:                          atticOptions.start,
                  preload:                        atticOptions.preload,
                  preloadSize:                    atticOptions.preloadSize,
                  bypassCss:                      atticOptions.bypassCss,
                  alwaysTestWindowResolution:     atticOptions.alwaysTestWindowResolution,
                  resolutionRefreshRate:          atticOptions.resolutionRefreshRate,
                  resolutionChangeRatioThreshold: atticOptions.transition,
                  isVideo:                        atticOptions.isVideo,
                  loop:                           atticOptions.loop,
                  mute:                           atticOptions.mute
              });
            } else {
              logger.warn('\n' + 'no attic container found on id: attic_home');
            }
            if (atticOptions.spinner) {
              $('.backstretch').addClass(atticOptions.spinner);
            }
            // collect backstretch instance data for Backstretch callbacks
            var backstretch_instance_data = $('#attic_home').data('backstretch');
            // add event for pauseOnHover
            if (atticOptions.pauseOnHover) {
              $('#attic_id').hover (
                () => {
                  $('#attic_home').backstretch('pause'); },
                () => {
                  $('#attic_home').backstretch('resume'); }
              );
            }
            // run callback backstretch before
            $(window).on('backstretch.before', (e, instance, index) => {
              var evt                = e;
              var inst               = instance;
              var idx                = index;
              var atticOptions       = _this.atticOptions;
              var textOverlayTitle   = instance.images[index].title
              var textOverlayTagline = instance.images[index].tagline;
              var textOverlayHTML;
              // console.log('module attic - set state: backstretch_before');
              _this.setState('backstretch_before');
              if (index === backstretch_instance_data.images.length -1) {
                if (atticOptions.circuit === false) {
                  // Stop the slideshow after reached the last image
                  $('#attic_home').backstretch('pause');
                }
                // remove class for the backstretch_intro background
                $('.backstretch').removeClass(atticOptions.spinner);
              }
              // Add collected CSS filters
              $('.backstretch').css('filter', filterStr);
              // mute the overlay content while sliding
              $('.textOverlay').css('opacity', '0');
              // mute the badge while sliding
              $('.attic-caption').css('opacity', '0');
              // re-initialze particles on a slideshow if exists
              if ($('.particles-js-canvas-el').length > 0) {
                j1.adapter.particles.init();
              }
            }); // // END callback backstretch.before
            // run callback backstretch.after
            // NOTE: add a 'caption' or 'badge' if configured
            // SEE:  https://github.com/jquery-backstretch/jquery-backstretch/issues/194
            //
            $(window).on('backstretch.after', (e, instance, index) => {
              var textOverlayTitle    = instance.images[index].title
              var textOverlayTagline  = instance.images[index].tagline;
              var atticOptions        = _this.atticOptions;
              var frontmatterOptions  = _this.frontmatterOptions;
              var textOverlayHTML;
              // apply FRONTMATTER settings for title|tagline if
              // NOT set with the FIRST backstretch (image) instance
              //
              if (index === 0) {
                if (typeof instance.images[index].title === 'undefined') {
                  textOverlayTitle    = frontmatterOptions.title;
                }
                if (typeof instance.images[index].tagline === 'undefined') {
                  textOverlayTagline  = frontmatterOptions.tagline;
                }
              }
              if (typeof instance.images[index].badge != 'undefined') {
                var bType               = instance.images[index].badge.type;
                var bAuthor             = instance.images[index].badge.author;
                var bLink               = instance.images[index].badge.href;
              }
              _this.setState('backstretch_after');
              if (typeof instance.images[index].caption != 'undefined') {
                var cText = instance.images[index].caption.text;
                var cLink = instance.images[index].caption.href;
                if (cLink) {
                  $('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="' + cLink + '" target="_blank">'+cText+'</a>').show();
                } else {
                  $('.attic-caption').text(cText).show();
                }
              } else if (typeof instance.images[index].badge != 'undefined') {
                if (bType === 'unsplash') {
                  var badgeHTML = ''
                      + '<div class="attic__badge animate__animated animate__fadeIn animate__slower">'
                      + ' <a class="attic__badge_unsplash link-no-decoration"'
                      + '  href="' +bLink+ '?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"'
                      + '  target="_blank"'
                      + '  rel="noopener noreferrer"'
                      + '  title="Free high-resolution photos from ' +bAuthor+ '">'
                      + '  <span class="attic__badge_unsplash_icon">'
                      + '    <svg xmlns="http://www.w3.org/2000/svg"'
                      + '	   class="attic__badge_unsplash_icon-size"'
                      + '      viewBox="0 0 32 32">'
                      + '      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>'
                      + '    </svg>'
                      + '  </span>'
                      + '  <span class="attic__badge_unsplash_text">' +bAuthor+ '</span>'
                      + ' </a>'
                      + '</div>';
                      $('.attic-caption').html(badgeHTML).hide();
                }
              }
              // TODO: Add additional styles to head-title-text|head-tagline (e.g. text-center)
              textOverlayHTML = ''
                + '<div id="head-title" class="head-title animate__animated ">'
                + '  <h2 id="head-title-text" class="notoc text-' + atticOptions.title_align + ' text-emphasis-stronger">' + textOverlayTitle + '</h2>'
                + '</div>'
                + '<div id="head-tagline" class="head-tagline animate__animated ">'
                + '  <h3 id="head-tagline-text" class="notoc text-' + atticOptions.tagline_align + '">' + textOverlayTagline + '</h3>'
                + '</div>';
              // hide textOverlay while animate classes are being applied
              $('.textOverlay').html(textOverlayHTML).hide();
              // collect individual title options
              var title_animate             = !!my_attic.title_animate ? my_attic.title_animate : atticOptions.title_animate;
              var title_animate_delay       = !!my_attic.title_animate_delay ? my_attic.title_animate_delay : atticOptions.title_animate_delay;
              var title_animate_duration    = !!my_attic.title_animate_duration ? my_attic.title_animate_duration : atticOptions.title_animate_duration;
              $('#head-title').addClass(title_animate);
              $('#head-title').addClass(title_animate_delay);
              $('#head-title').addClass(title_animate_duration);
              // collect individual tagline options
              var tagline_animate           = !!my_attic.tagline_animate ? my_attic.tagline_animate : atticOptions.tagline_animate;
              var tagline_animate_delay     = !!my_attic.tagline_animate_delay ? my_attic.tagline_animate_delay : atticOptions.tagline_animate_delay;
              var tagline_animate_duration  = !!my_attic.tagline_animate_duration ? my_attic.tagline_animate_duration : atticOptions.tagline_animate_duration;
              $('#head-tagline').addClass(tagline_animate);
              $('#head-tagline').addClass(tagline_animate_delay);
              $('#head-tagline').addClass(tagline_animate_duration);
              // show configured textOverlay
              $('.textOverlay').show();
              $('.textOverlay').css('opacity', '1');
              // jadams, 2022-08-19: show a badge only if configured
              if (typeof instance.images[index].badge != 'undefined') {
                $('.attic-caption').show();
                $('.attic-caption').css('opacity', '1');
              }
              // show page if attic finalized
              $('#no_flicker').css('display', 'block');
              // jadams, 2022-08-09:
              // resize the (background-)image to make sure the 'attic'
              // container is changed in size (heigth) if title/tagline
              // expands 'multiline' on small viewports
              // e.g. on mobile devices
              //
              $('#attic_home').backstretch('resize');
             _this.setState('finished');
             logger.debug('\n' + 'state: ' + _this.getState());
             logger.info('\n' + 'initialize attic on id attic_home: finished');
             logger.info('\n' + 'module initializaton: finished');
             endTimeModule = Date.now();
             logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
            }); // END callback backstretch.after
          } // END if attic_id exists
          // run attic found in page: attic_home
          if ($('#attic_home').length) {
            // apply CSS styles
            // NOTE: unclear why title_size|tagline_size evaluated to 1 if NOT set
            //
                // Create and json object for HEADER options taken from
                // header config (YAML data file)
                /* eslint-disable */
                var atticOptionsHeader = {
                            "padding_top":            600, 
                }
                /* eslint-enable */
                // Create an json object for BACKSTRETCH options taken from
                // header config (yaml data file)
                /* eslint-disable */
                var atticOptionsBackstretch = {
                }
                /* eslint-enable */
                // merge|overload Attic OPTIONS
                //
                atticOptions = $.extend({}, atticOptions, atticOptionsHeader, atticOptionsBackstretch);
                // overload Attic OPTIONS by settings from frontmatterOptions
                //
                if (frontmatterOptions.background_color_1) atticOptions.background_color_1 = frontmatterOptions.background_color_1;
                if (frontmatterOptions.background_color_2) atticOptions.background_color_2 = frontmatterOptions.background_color_2;
               // ENDIF attic_id
                 // ENDFOR item in header_config.attics
            // frontmatter takes precedence (over header options)
            //
            if (frontmatterOptions) {
              if (typeof frontmatterOptions.raised_level != 'undefined') { atticOptions.raised_level = frontmatterOptions.raised_level; }
              if (typeof frontmatterOptions.r_text != 'undefined') { atticOptions.r_text = frontmatterOptions.r_text; }
              if (typeof frontmatterOptions.text_emphasis != 'undefined') { atticOptions.text_emphasis = frontmatterOptions.text_emphasis; }
              if (typeof frontmatterOptions.padding_top != 'undefined') { atticOptions.padding_top = frontmatterOptions.padding_top; }
              if (typeof frontmatterOptions.padding_bottom != 'undefined') { atticOptions.padding_bottom = frontmatterOptions.padding_bottom; }
              if (typeof frontmatterOptions.margin_bottom != 'undefined') { atticOptions.margin_bottom = frontmatterOptions.margin_bottom; }
              if (typeof frontmatterOptions.title != 'undefined') {
                if (typeof frontmatterOptions.title.color != 'undefined') { atticOptions.title_color = frontmatterOptions.title.color; }
                if (typeof frontmatterOptions.title.size != 'undefined') { atticOptions.title_size = frontmatterOptions.title.size; }
                if (typeof frontmatterOptions.title.animate != 'undefined') { atticOptions.title_animate = frontmatterOptions.title.animate; }
                if (typeof frontmatterOptions.title.align != 'undefined') { atticOptions.title_align = frontmatterOptions.title.align; }
              }
              if (typeof frontmatterOptions.tagline != 'undefined') {
                if (typeof frontmatterOptions.tagline.color != 'undefined') { atticOptions.tagline_color = frontmatterOptions.tagline.color; }
                if (typeof frontmatterOptions.tagline.size != 'undefined') { atticOptions.tagline_size = frontmatterOptions.tagline.size; }
                if (typeof frontmatterOptions.tagline.animate != 'undefined') { atticOptions.tagline_animate = frontmatterOptions.tagline.animate; }
                if (typeof frontmatterOptions.tagline.align != 'undefined') { atticOptions.tagline_align = frontmatterOptions.tagline.align; }
              }
              if (typeof frontmatterOptions.spinner != 'undefined') { atticOptions.spinner = frontmatterOptions.spinner; }
              if (typeof frontmatterOptions.opacity != 'undefined') { atticOptions.opacity = frontmatterOptions.opacity; }
              if (typeof frontmatterOptions.alignX != 'undefined') { atticOptions.alignX = frontmatterOptions.alignX; }
              if (typeof frontmatterOptions.alignY != 'undefined') { atticOptions.alignY = frontmatterOptions.alignY; }
              if (typeof frontmatterOptions.scale != 'undefined') { atticOptions.scale = frontmatterOptions.scale; }
              if (typeof frontmatterOptions.start != 'undefined') { atticOptions.start = frontmatterOptions.start; }
              if (typeof frontmatterOptions.animateFirst != 'undefined') { atticOptions.animateFirst = frontmatterOptions.animateFirst; }
              if (typeof frontmatterOptions.preload != 'undefined') { atticOptions.preload = frontmatterOptions.preload; }
              if (typeof frontmatterOptions.preloadSize != 'undefined') { atticOptions.preloadSize = frontmatterOptions.preloadSize; }
              if (typeof frontmatterOptions.mute != 'undefined') { atticOptions.mute = frontmatterOptions.mute; }
              if (typeof frontmatterOptions.bypassCss != 'undefined') { atticOptions.bypassCss = frontmatterOptions.bypassCss; }
              if (typeof frontmatterOptions.isVideo != 'undefined') { atticOptions.isVideo = frontmatterOptions.isVideo; }
              if (typeof frontmatterOptions.loop != 'undefined') { atticOptions.loop = frontmatterOptions.loop; }
              if (typeof frontmatterOptions.paused != 'undefined') { atticOptions.paused = frontmatterOptions.paused; }
              if (typeof frontmatterOptions.transition != 'undefined') { atticOptions.transition = frontmatterOptions.transition; }
              if (typeof frontmatterOptions.duration != 'undefined') { atticOptions.duration = frontmatterOptions.duration; }
              if (typeof frontmatterOptions.transitionDuration != 'undefined') { atticOptions.transitionDuration = frontmatterOptions.transitionDuration; }
              if (typeof frontmatterOptions.slides != 'undefined') { atticOptions.slides = frontmatterOptions.slides; }
            }
            // add r-text|raised_level settings
            //
            if (atticOptions.r_text === 'enabled') { $('#attic_home').addClass('r-text'); }
            var raised_level = 'raised-z' +atticOptions.raised_level;
            $('#attic_home').addClass(raised_level);
            $('#head-title').addClass(atticOptions.title_animate);
            $('#head-title').addClass(atticOptions.title_animate_delay);
            $('#head-title').addClass(atticOptions.title_animate_duration);
            $('#head-tagline').addClass(atticOptions.tagline_animate);
            $('#head-tagline').addClass(atticOptions.tagline_animate_duration);
            var text_emphasis = 'text-emphasis-' +atticOptions.text_emphasis;
            $('#head-title-text').addClass(text_emphasis);
            $('#head-tagline-text').addClass(text_emphasis);
            // check if attic should be translated
            //
            if (atticOptions.notranslate) {
              $('#attic_home').addClass('notranslate');
            }
            // add header CSS styles to <HEAD>
            //
            var attic_style = '';
            // initialze header background gradient
            //
            attic_style += '<style> .attic { ';
            attic_style += 'background-image: -webkit-gradient(linear, left top, left bottom, from(' +atticOptions.background_color_1 + '), to(' +atticOptions.background_color_2+ ')) !important;';
            attic_style += 'background-image: -webkit-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: -o-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: linear-gradient(to bottom, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' +atticOptions.background_color_1 + '", endColorstr="' +atticOptions.background_color_2 + '", GradientType=0) !important;';
            attic_style += '} </style>';
            $('head').append(attic_style);
            // collect individual (title|tagline) options
            //
            var my_attic      	= $.extend({}, {"enabled":true, "id":"attic_home", "layout":"home", "title_animate":"animate__bounceInDown", "title_animate_duration":"animate__fast", "tagline_animate":"animate__fadeInRight", "tagline_animate_duration":"animate__slow", "padding_top":600});
            var padding_top     = !!my_attic.padding_top ? my_attic.padding_top : atticOptions.padding_top;
            var padding_bottom  = !!my_attic.padding_bottom ? my_attic.padding_bottom : atticOptions.padding_bottom;
            var margin_bottom   = !!my_attic.margin_bottom ? my_attic.margin_bottom : atticOptions.margin_bottom;
            // frontmatter options takes precedence
            //
            if (typeof frontmatterOptions.padding_top != 'undefined')     { padding_top    = frontmatterOptions.padding_top; }
            if (typeof frontmatterOptions.padding_bottom != 'undefined')  { padding_bottom = frontmatterOptions.padding_bottom; }
            if (typeof frontmatterOptions.margin_bottom != 'undefined')   { margin_bottom  = frontmatterOptions.margin_bottom; }
            attic_style = '';
            attic_style = '<style> .attic { padding-top: ' +padding_top+ 'px; padding-bottom: ' +padding_bottom+ 'px; margin-bottom: ' +margin_bottom+ 'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>';
            $('head').append(attic_style);
            $('head').append('<style> .attic .head-title h2 { color: ' +atticOptions.title_color+ ';font-size: ' +atticOptions.title_size+ ' !important; text-align: ' +atticOptions.title_align+ ';} </style>');
            $('head').append('<style> .attic .head-tagline h3 { color: ' +atticOptions.tagline_color+ ';font-size: ' +atticOptions.tagline_size+ ' !important; text-align: ' +atticOptions.tagline_align+ '; } </style>');
            // Add opacity to ALL header (backstretch) images
            // See: https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/
            //
            var item_opacity        = !!my_attic.opacity ? my_attic.opacity : atticOptions.opacity;
            var backstretch_opacity = '<style> .backstretch-item { opacity: ' +item_opacity+ '; </style>';
            $('head').append(backstretch_opacity);
            _this.setState('initialized');
            logger.debug('\n' + 'state: ' + _this.getState());
            // start RUNNER on page 'ready'|module state 'initialized'
            //
            $(() => {
              var dependencies_met_attic_ready = setInterval (() => {
                if (_this.getState() === 'initialized') {
                  logger.info('\n' + 'initialize attic on id attic_home: started');
                  attic_home_runner (atticOptions);
                  clearInterval(dependencies_met_attic_ready);
                }
              }, 10);
            });
          } // END apply CSS styles|start ATTIC RUNNER
         // END if header enabled
          // create RUNNER for id: attic_page
          function attic_page_runner (atticOptions) {
            var atticOptionsFilters = {};
            var atticItemFilters    = {};
            var atticFilters        = {};
            var my_attic      	    = $.extend({}, {"enabled":true, "id":"attic_page", "layout":"page", "padding_top":600});
            // collect attic filter settings to object to array to string
            //
            atticOptionsFilters = atticOptions.filters;
            atticFilters        = $.extend(true, {}, atticOptionsFilters, atticItemFilters);
            filterArray         = [];
            $.each(atticFilters, (idx2, val2) => {
              var str = idx2 + '(' + val2 + ')';
              filterArray.push(str);
            });
            filterStr = filterArray.join(' ');
            // fire backstretch for all slides on attic_id
            if ($('#attic_page').length) {
              $('#attic_page').backstretch(
                atticOptions.slides, {
                  debug:                          atticOptions.debug,
                  spinner:                        atticOptions.spinner,
                  alignX:                         atticOptions.alignX,
                  alignY:                         atticOptions.alignY,
                  scale:                          atticOptions.scale,
                  transition:                     atticOptions.transition,
                  transitionDuration:             atticOptions.transitionDuration,
                  animateFirst:                   atticOptions.animateFirst,
                  duration:                       atticOptions.duration,
                  paused:                         atticOptions.paused,
                  start:                          atticOptions.start,
                  preload:                        atticOptions.preload,
                  preloadSize:                    atticOptions.preloadSize,
                  bypassCss:                      atticOptions.bypassCss,
                  alwaysTestWindowResolution:     atticOptions.alwaysTestWindowResolution,
                  resolutionRefreshRate:          atticOptions.resolutionRefreshRate,
                  resolutionChangeRatioThreshold: atticOptions.transition,
                  isVideo:                        atticOptions.isVideo,
                  loop:                           atticOptions.loop,
                  mute:                           atticOptions.mute
              });
            } else {
              logger.warn('\n' + 'no attic container found on id: attic_page');
            }
            if (atticOptions.spinner) {
              $('.backstretch').addClass(atticOptions.spinner);
            }
            // collect backstretch instance data for Backstretch callbacks
            var backstretch_instance_data = $('#attic_page').data('backstretch');
            // add event for pauseOnHover
            if (atticOptions.pauseOnHover) {
              $('#attic_id').hover (
                () => {
                  $('#attic_page').backstretch('pause'); },
                () => {
                  $('#attic_page').backstretch('resume'); }
              );
            }
            // run callback backstretch before
            $(window).on('backstretch.before', (e, instance, index) => {
              var evt                = e;
              var inst               = instance;
              var idx                = index;
              var atticOptions       = _this.atticOptions;
              var textOverlayTitle   = instance.images[index].title
              var textOverlayTagline = instance.images[index].tagline;
              var textOverlayHTML;
              // console.log('module attic - set state: backstretch_before');
              _this.setState('backstretch_before');
              if (index === backstretch_instance_data.images.length -1) {
                if (atticOptions.circuit === false) {
                  // Stop the slideshow after reached the last image
                  $('#attic_page').backstretch('pause');
                }
                // remove class for the backstretch_intro background
                $('.backstretch').removeClass(atticOptions.spinner);
              }
              // Add collected CSS filters
              $('.backstretch').css('filter', filterStr);
              // mute the overlay content while sliding
              $('.textOverlay').css('opacity', '0');
              // mute the badge while sliding
              $('.attic-caption').css('opacity', '0');
              // re-initialze particles on a slideshow if exists
              if ($('.particles-js-canvas-el').length > 0) {
                j1.adapter.particles.init();
              }
            }); // // END callback backstretch.before
            // run callback backstretch.after
            // NOTE: add a 'caption' or 'badge' if configured
            // SEE:  https://github.com/jquery-backstretch/jquery-backstretch/issues/194
            //
            $(window).on('backstretch.after', (e, instance, index) => {
              var textOverlayTitle    = instance.images[index].title
              var textOverlayTagline  = instance.images[index].tagline;
              var atticOptions        = _this.atticOptions;
              var frontmatterOptions  = _this.frontmatterOptions;
              var textOverlayHTML;
              // apply FRONTMATTER settings for title|tagline if
              // NOT set with the FIRST backstretch (image) instance
              //
              if (index === 0) {
                if (typeof instance.images[index].title === 'undefined') {
                  textOverlayTitle    = frontmatterOptions.title;
                }
                if (typeof instance.images[index].tagline === 'undefined') {
                  textOverlayTagline  = frontmatterOptions.tagline;
                }
              }
              if (typeof instance.images[index].badge != 'undefined') {
                var bType               = instance.images[index].badge.type;
                var bAuthor             = instance.images[index].badge.author;
                var bLink               = instance.images[index].badge.href;
              }
              _this.setState('backstretch_after');
              if (typeof instance.images[index].caption != 'undefined') {
                var cText = instance.images[index].caption.text;
                var cLink = instance.images[index].caption.href;
                if (cLink) {
                  $('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="' + cLink + '" target="_blank">'+cText+'</a>').show();
                } else {
                  $('.attic-caption').text(cText).show();
                }
              } else if (typeof instance.images[index].badge != 'undefined') {
                if (bType === 'unsplash') {
                  var badgeHTML = ''
                      + '<div class="attic__badge animate__animated animate__fadeIn animate__slower">'
                      + ' <a class="attic__badge_unsplash link-no-decoration"'
                      + '  href="' +bLink+ '?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"'
                      + '  target="_blank"'
                      + '  rel="noopener noreferrer"'
                      + '  title="Free high-resolution photos from ' +bAuthor+ '">'
                      + '  <span class="attic__badge_unsplash_icon">'
                      + '    <svg xmlns="http://www.w3.org/2000/svg"'
                      + '	   class="attic__badge_unsplash_icon-size"'
                      + '      viewBox="0 0 32 32">'
                      + '      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>'
                      + '    </svg>'
                      + '  </span>'
                      + '  <span class="attic__badge_unsplash_text">' +bAuthor+ '</span>'
                      + ' </a>'
                      + '</div>';
                      $('.attic-caption').html(badgeHTML).hide();
                }
              }
              // TODO: Add additional styles to head-title-text|head-tagline (e.g. text-center)
              textOverlayHTML = ''
                + '<div id="head-title" class="head-title animate__animated ">'
                + '  <h2 id="head-title-text" class="notoc text-' + atticOptions.title_align + ' text-emphasis-stronger">' + textOverlayTitle + '</h2>'
                + '</div>'
                + '<div id="head-tagline" class="head-tagline animate__animated ">'
                + '  <h3 id="head-tagline-text" class="notoc text-' + atticOptions.tagline_align + '">' + textOverlayTagline + '</h3>'
                + '</div>';
              // hide textOverlay while animate classes are being applied
              $('.textOverlay').html(textOverlayHTML).hide();
              // collect individual title options
              var title_animate             = !!my_attic.title_animate ? my_attic.title_animate : atticOptions.title_animate;
              var title_animate_delay       = !!my_attic.title_animate_delay ? my_attic.title_animate_delay : atticOptions.title_animate_delay;
              var title_animate_duration    = !!my_attic.title_animate_duration ? my_attic.title_animate_duration : atticOptions.title_animate_duration;
              $('#head-title').addClass(title_animate);
              $('#head-title').addClass(title_animate_delay);
              $('#head-title').addClass(title_animate_duration);
              // collect individual tagline options
              var tagline_animate           = !!my_attic.tagline_animate ? my_attic.tagline_animate : atticOptions.tagline_animate;
              var tagline_animate_delay     = !!my_attic.tagline_animate_delay ? my_attic.tagline_animate_delay : atticOptions.tagline_animate_delay;
              var tagline_animate_duration  = !!my_attic.tagline_animate_duration ? my_attic.tagline_animate_duration : atticOptions.tagline_animate_duration;
              $('#head-tagline').addClass(tagline_animate);
              $('#head-tagline').addClass(tagline_animate_delay);
              $('#head-tagline').addClass(tagline_animate_duration);
              // show configured textOverlay
              $('.textOverlay').show();
              $('.textOverlay').css('opacity', '1');
              // jadams, 2022-08-19: show a badge only if configured
              if (typeof instance.images[index].badge != 'undefined') {
                $('.attic-caption').show();
                $('.attic-caption').css('opacity', '1');
              }
              // show page if attic finalized
              $('#no_flicker').css('display', 'block');
              // jadams, 2022-08-09:
              // resize the (background-)image to make sure the 'attic'
              // container is changed in size (heigth) if title/tagline
              // expands 'multiline' on small viewports
              // e.g. on mobile devices
              //
              $('#attic_page').backstretch('resize');
             _this.setState('finished');
             logger.debug('\n' + 'state: ' + _this.getState());
             logger.info('\n' + 'initialize attic on id attic_page: finished');
             logger.info('\n' + 'module initializaton: finished');
             endTimeModule = Date.now();
             logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
            }); // END callback backstretch.after
          } // END if attic_id exists
          // run attic found in page: attic_page
          if ($('#attic_page').length) {
            // apply CSS styles
            // NOTE: unclear why title_size|tagline_size evaluated to 1 if NOT set
            //
                // Create and json object for HEADER options taken from
                // header config (YAML data file)
                /* eslint-disable */
                var atticOptionsHeader = {
                            "padding_top":            600, 
                }
                /* eslint-enable */
                // Create an json object for BACKSTRETCH options taken from
                // header config (yaml data file)
                /* eslint-disable */
                var atticOptionsBackstretch = {
                }
                /* eslint-enable */
                // merge|overload Attic OPTIONS
                //
                atticOptions = $.extend({}, atticOptions, atticOptionsHeader, atticOptionsBackstretch);
                // overload Attic OPTIONS by settings from frontmatterOptions
                //
                if (frontmatterOptions.background_color_1) atticOptions.background_color_1 = frontmatterOptions.background_color_1;
                if (frontmatterOptions.background_color_2) atticOptions.background_color_2 = frontmatterOptions.background_color_2;
               // ENDIF attic_id
                 // ENDFOR item in header_config.attics
            // frontmatter takes precedence (over header options)
            //
            if (frontmatterOptions) {
              if (typeof frontmatterOptions.raised_level != 'undefined') { atticOptions.raised_level = frontmatterOptions.raised_level; }
              if (typeof frontmatterOptions.r_text != 'undefined') { atticOptions.r_text = frontmatterOptions.r_text; }
              if (typeof frontmatterOptions.text_emphasis != 'undefined') { atticOptions.text_emphasis = frontmatterOptions.text_emphasis; }
              if (typeof frontmatterOptions.padding_top != 'undefined') { atticOptions.padding_top = frontmatterOptions.padding_top; }
              if (typeof frontmatterOptions.padding_bottom != 'undefined') { atticOptions.padding_bottom = frontmatterOptions.padding_bottom; }
              if (typeof frontmatterOptions.margin_bottom != 'undefined') { atticOptions.margin_bottom = frontmatterOptions.margin_bottom; }
              if (typeof frontmatterOptions.title != 'undefined') {
                if (typeof frontmatterOptions.title.color != 'undefined') { atticOptions.title_color = frontmatterOptions.title.color; }
                if (typeof frontmatterOptions.title.size != 'undefined') { atticOptions.title_size = frontmatterOptions.title.size; }
                if (typeof frontmatterOptions.title.animate != 'undefined') { atticOptions.title_animate = frontmatterOptions.title.animate; }
                if (typeof frontmatterOptions.title.align != 'undefined') { atticOptions.title_align = frontmatterOptions.title.align; }
              }
              if (typeof frontmatterOptions.tagline != 'undefined') {
                if (typeof frontmatterOptions.tagline.color != 'undefined') { atticOptions.tagline_color = frontmatterOptions.tagline.color; }
                if (typeof frontmatterOptions.tagline.size != 'undefined') { atticOptions.tagline_size = frontmatterOptions.tagline.size; }
                if (typeof frontmatterOptions.tagline.animate != 'undefined') { atticOptions.tagline_animate = frontmatterOptions.tagline.animate; }
                if (typeof frontmatterOptions.tagline.align != 'undefined') { atticOptions.tagline_align = frontmatterOptions.tagline.align; }
              }
              if (typeof frontmatterOptions.spinner != 'undefined') { atticOptions.spinner = frontmatterOptions.spinner; }
              if (typeof frontmatterOptions.opacity != 'undefined') { atticOptions.opacity = frontmatterOptions.opacity; }
              if (typeof frontmatterOptions.alignX != 'undefined') { atticOptions.alignX = frontmatterOptions.alignX; }
              if (typeof frontmatterOptions.alignY != 'undefined') { atticOptions.alignY = frontmatterOptions.alignY; }
              if (typeof frontmatterOptions.scale != 'undefined') { atticOptions.scale = frontmatterOptions.scale; }
              if (typeof frontmatterOptions.start != 'undefined') { atticOptions.start = frontmatterOptions.start; }
              if (typeof frontmatterOptions.animateFirst != 'undefined') { atticOptions.animateFirst = frontmatterOptions.animateFirst; }
              if (typeof frontmatterOptions.preload != 'undefined') { atticOptions.preload = frontmatterOptions.preload; }
              if (typeof frontmatterOptions.preloadSize != 'undefined') { atticOptions.preloadSize = frontmatterOptions.preloadSize; }
              if (typeof frontmatterOptions.mute != 'undefined') { atticOptions.mute = frontmatterOptions.mute; }
              if (typeof frontmatterOptions.bypassCss != 'undefined') { atticOptions.bypassCss = frontmatterOptions.bypassCss; }
              if (typeof frontmatterOptions.isVideo != 'undefined') { atticOptions.isVideo = frontmatterOptions.isVideo; }
              if (typeof frontmatterOptions.loop != 'undefined') { atticOptions.loop = frontmatterOptions.loop; }
              if (typeof frontmatterOptions.paused != 'undefined') { atticOptions.paused = frontmatterOptions.paused; }
              if (typeof frontmatterOptions.transition != 'undefined') { atticOptions.transition = frontmatterOptions.transition; }
              if (typeof frontmatterOptions.duration != 'undefined') { atticOptions.duration = frontmatterOptions.duration; }
              if (typeof frontmatterOptions.transitionDuration != 'undefined') { atticOptions.transitionDuration = frontmatterOptions.transitionDuration; }
              if (typeof frontmatterOptions.slides != 'undefined') { atticOptions.slides = frontmatterOptions.slides; }
            }
            // add r-text|raised_level settings
            //
            if (atticOptions.r_text === 'enabled') { $('#attic_page').addClass('r-text'); }
            var raised_level = 'raised-z' +atticOptions.raised_level;
            $('#attic_page').addClass(raised_level);
            $('#head-title').addClass(atticOptions.title_animate);
            $('#head-title').addClass(atticOptions.title_animate_delay);
            $('#head-title').addClass(atticOptions.title_animate_duration);
            $('#head-tagline').addClass(atticOptions.tagline_animate);
            $('#head-tagline').addClass(atticOptions.tagline_animate_duration);
            var text_emphasis = 'text-emphasis-' +atticOptions.text_emphasis;
            $('#head-title-text').addClass(text_emphasis);
            $('#head-tagline-text').addClass(text_emphasis);
            // check if attic should be translated
            //
            if (atticOptions.notranslate) {
              $('#attic_page').addClass('notranslate');
            }
            // add header CSS styles to <HEAD>
            //
            var attic_style = '';
            // initialze header background gradient
            //
            attic_style += '<style> .attic { ';
            attic_style += 'background-image: -webkit-gradient(linear, left top, left bottom, from(' +atticOptions.background_color_1 + '), to(' +atticOptions.background_color_2+ ')) !important;';
            attic_style += 'background-image: -webkit-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: -o-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: linear-gradient(to bottom, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' +atticOptions.background_color_1 + '", endColorstr="' +atticOptions.background_color_2 + '", GradientType=0) !important;';
            attic_style += '} </style>';
            $('head').append(attic_style);
            // collect individual (title|tagline) options
            //
            var my_attic      	= $.extend({}, {"enabled":true, "id":"attic_page", "layout":"page", "padding_top":600});
            var padding_top     = !!my_attic.padding_top ? my_attic.padding_top : atticOptions.padding_top;
            var padding_bottom  = !!my_attic.padding_bottom ? my_attic.padding_bottom : atticOptions.padding_bottom;
            var margin_bottom   = !!my_attic.margin_bottom ? my_attic.margin_bottom : atticOptions.margin_bottom;
            // frontmatter options takes precedence
            //
            if (typeof frontmatterOptions.padding_top != 'undefined')     { padding_top    = frontmatterOptions.padding_top; }
            if (typeof frontmatterOptions.padding_bottom != 'undefined')  { padding_bottom = frontmatterOptions.padding_bottom; }
            if (typeof frontmatterOptions.margin_bottom != 'undefined')   { margin_bottom  = frontmatterOptions.margin_bottom; }
            attic_style = '';
            attic_style = '<style> .attic { padding-top: ' +padding_top+ 'px; padding-bottom: ' +padding_bottom+ 'px; margin-bottom: ' +margin_bottom+ 'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>';
            $('head').append(attic_style);
            $('head').append('<style> .attic .head-title h2 { color: ' +atticOptions.title_color+ ';font-size: ' +atticOptions.title_size+ ' !important; text-align: ' +atticOptions.title_align+ ';} </style>');
            $('head').append('<style> .attic .head-tagline h3 { color: ' +atticOptions.tagline_color+ ';font-size: ' +atticOptions.tagline_size+ ' !important; text-align: ' +atticOptions.tagline_align+ '; } </style>');
            // Add opacity to ALL header (backstretch) images
            // See: https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/
            //
            var item_opacity        = !!my_attic.opacity ? my_attic.opacity : atticOptions.opacity;
            var backstretch_opacity = '<style> .backstretch-item { opacity: ' +item_opacity+ '; </style>';
            $('head').append(backstretch_opacity);
            _this.setState('initialized');
            logger.debug('\n' + 'state: ' + _this.getState());
            // start RUNNER on page 'ready'|module state 'initialized'
            //
            $(() => {
              var dependencies_met_attic_ready = setInterval (() => {
                if (_this.getState() === 'initialized') {
                  logger.info('\n' + 'initialize attic on id attic_page: started');
                  attic_page_runner (atticOptions);
                  clearInterval(dependencies_met_attic_ready);
                }
              }, 10);
            });
          } // END apply CSS styles|start ATTIC RUNNER
         // END if header enabled
          // create RUNNER for id: attic_post
          function attic_post_runner (atticOptions) {
            var atticOptionsFilters = {};
            var atticItemFilters    = {};
            var atticFilters        = {};
            var my_attic      	    = $.extend({}, {"enabled":true, "id":"attic_post", "layout":["collection", "post"], "title_animate":"animate__fadeInDown", "padding_top":600});
            // collect attic filter settings to object to array to string
            //
            atticOptionsFilters = atticOptions.filters;
            atticFilters        = $.extend(true, {}, atticOptionsFilters, atticItemFilters);
            filterArray         = [];
            $.each(atticFilters, (idx2, val2) => {
              var str = idx2 + '(' + val2 + ')';
              filterArray.push(str);
            });
            filterStr = filterArray.join(' ');
            // fire backstretch for all slides on attic_id
            if ($('#attic_post').length) {
              $('#attic_post').backstretch(
                atticOptions.slides, {
                  debug:                          atticOptions.debug,
                  spinner:                        atticOptions.spinner,
                  alignX:                         atticOptions.alignX,
                  alignY:                         atticOptions.alignY,
                  scale:                          atticOptions.scale,
                  transition:                     atticOptions.transition,
                  transitionDuration:             atticOptions.transitionDuration,
                  animateFirst:                   atticOptions.animateFirst,
                  duration:                       atticOptions.duration,
                  paused:                         atticOptions.paused,
                  start:                          atticOptions.start,
                  preload:                        atticOptions.preload,
                  preloadSize:                    atticOptions.preloadSize,
                  bypassCss:                      atticOptions.bypassCss,
                  alwaysTestWindowResolution:     atticOptions.alwaysTestWindowResolution,
                  resolutionRefreshRate:          atticOptions.resolutionRefreshRate,
                  resolutionChangeRatioThreshold: atticOptions.transition,
                  isVideo:                        atticOptions.isVideo,
                  loop:                           atticOptions.loop,
                  mute:                           atticOptions.mute
              });
            } else {
              logger.warn('\n' + 'no attic container found on id: attic_post');
            }
            if (atticOptions.spinner) {
              $('.backstretch').addClass(atticOptions.spinner);
            }
            // collect backstretch instance data for Backstretch callbacks
            var backstretch_instance_data = $('#attic_post').data('backstretch');
            // add event for pauseOnHover
            if (atticOptions.pauseOnHover) {
              $('#attic_id').hover (
                () => {
                  $('#attic_post').backstretch('pause'); },
                () => {
                  $('#attic_post').backstretch('resume'); }
              );
            }
            // run callback backstretch before
            $(window).on('backstretch.before', (e, instance, index) => {
              var evt                = e;
              var inst               = instance;
              var idx                = index;
              var atticOptions       = _this.atticOptions;
              var textOverlayTitle   = instance.images[index].title
              var textOverlayTagline = instance.images[index].tagline;
              var textOverlayHTML;
              // console.log('module attic - set state: backstretch_before');
              _this.setState('backstretch_before');
              if (index === backstretch_instance_data.images.length -1) {
                if (atticOptions.circuit === false) {
                  // Stop the slideshow after reached the last image
                  $('#attic_post').backstretch('pause');
                }
                // remove class for the backstretch_intro background
                $('.backstretch').removeClass(atticOptions.spinner);
              }
              // Add collected CSS filters
              $('.backstretch').css('filter', filterStr);
              // mute the overlay content while sliding
              $('.textOverlay').css('opacity', '0');
              // mute the badge while sliding
              $('.attic-caption').css('opacity', '0');
              // re-initialze particles on a slideshow if exists
              if ($('.particles-js-canvas-el').length > 0) {
                j1.adapter.particles.init();
              }
            }); // // END callback backstretch.before
            // run callback backstretch.after
            // NOTE: add a 'caption' or 'badge' if configured
            // SEE:  https://github.com/jquery-backstretch/jquery-backstretch/issues/194
            //
            $(window).on('backstretch.after', (e, instance, index) => {
              var textOverlayTitle    = instance.images[index].title
              var textOverlayTagline  = instance.images[index].tagline;
              var atticOptions        = _this.atticOptions;
              var frontmatterOptions  = _this.frontmatterOptions;
              var textOverlayHTML;
              // apply FRONTMATTER settings for title|tagline if
              // NOT set with the FIRST backstretch (image) instance
              //
              if (index === 0) {
                if (typeof instance.images[index].title === 'undefined') {
                  textOverlayTitle    = frontmatterOptions.title;
                }
                if (typeof instance.images[index].tagline === 'undefined') {
                  textOverlayTagline  = frontmatterOptions.tagline;
                }
              }
              if (typeof instance.images[index].badge != 'undefined') {
                var bType               = instance.images[index].badge.type;
                var bAuthor             = instance.images[index].badge.author;
                var bLink               = instance.images[index].badge.href;
              }
              _this.setState('backstretch_after');
              if (typeof instance.images[index].caption != 'undefined') {
                var cText = instance.images[index].caption.text;
                var cLink = instance.images[index].caption.href;
                if (cLink) {
                  $('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="' + cLink + '" target="_blank">'+cText+'</a>').show();
                } else {
                  $('.attic-caption').text(cText).show();
                }
              } else if (typeof instance.images[index].badge != 'undefined') {
                if (bType === 'unsplash') {
                  var badgeHTML = ''
                      + '<div class="attic__badge animate__animated animate__fadeIn animate__slower">'
                      + ' <a class="attic__badge_unsplash link-no-decoration"'
                      + '  href="' +bLink+ '?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"'
                      + '  target="_blank"'
                      + '  rel="noopener noreferrer"'
                      + '  title="Free high-resolution photos from ' +bAuthor+ '">'
                      + '  <span class="attic__badge_unsplash_icon">'
                      + '    <svg xmlns="http://www.w3.org/2000/svg"'
                      + '	   class="attic__badge_unsplash_icon-size"'
                      + '      viewBox="0 0 32 32">'
                      + '      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>'
                      + '    </svg>'
                      + '  </span>'
                      + '  <span class="attic__badge_unsplash_text">' +bAuthor+ '</span>'
                      + ' </a>'
                      + '</div>';
                      $('.attic-caption').html(badgeHTML).hide();
                }
              }
              // TODO: Add additional styles to head-title-text|head-tagline (e.g. text-center)
              textOverlayHTML = ''
                + '<div id="head-title" class="head-title animate__animated ">'
                + '  <h2 id="head-title-text" class="notoc text-' + atticOptions.title_align + ' text-emphasis-stronger">' + textOverlayTitle + '</h2>'
                + '</div>'
                + '<div id="head-tagline" class="head-tagline animate__animated ">'
                + '  <h3 id="head-tagline-text" class="notoc text-' + atticOptions.tagline_align + '">' + textOverlayTagline + '</h3>'
                + '</div>';
              // hide textOverlay while animate classes are being applied
              $('.textOverlay').html(textOverlayHTML).hide();
              // collect individual title options
              var title_animate             = !!my_attic.title_animate ? my_attic.title_animate : atticOptions.title_animate;
              var title_animate_delay       = !!my_attic.title_animate_delay ? my_attic.title_animate_delay : atticOptions.title_animate_delay;
              var title_animate_duration    = !!my_attic.title_animate_duration ? my_attic.title_animate_duration : atticOptions.title_animate_duration;
              $('#head-title').addClass(title_animate);
              $('#head-title').addClass(title_animate_delay);
              $('#head-title').addClass(title_animate_duration);
              // collect individual tagline options
              var tagline_animate           = !!my_attic.tagline_animate ? my_attic.tagline_animate : atticOptions.tagline_animate;
              var tagline_animate_delay     = !!my_attic.tagline_animate_delay ? my_attic.tagline_animate_delay : atticOptions.tagline_animate_delay;
              var tagline_animate_duration  = !!my_attic.tagline_animate_duration ? my_attic.tagline_animate_duration : atticOptions.tagline_animate_duration;
              $('#head-tagline').addClass(tagline_animate);
              $('#head-tagline').addClass(tagline_animate_delay);
              $('#head-tagline').addClass(tagline_animate_duration);
              // show configured textOverlay
              $('.textOverlay').show();
              $('.textOverlay').css('opacity', '1');
              // jadams, 2022-08-19: show a badge only if configured
              if (typeof instance.images[index].badge != 'undefined') {
                $('.attic-caption').show();
                $('.attic-caption').css('opacity', '1');
              }
              // show page if attic finalized
              $('#no_flicker').css('display', 'block');
              // jadams, 2022-08-09:
              // resize the (background-)image to make sure the 'attic'
              // container is changed in size (heigth) if title/tagline
              // expands 'multiline' on small viewports
              // e.g. on mobile devices
              //
              $('#attic_post').backstretch('resize');
             _this.setState('finished');
             logger.debug('\n' + 'state: ' + _this.getState());
             logger.info('\n' + 'initialize attic on id attic_post: finished');
             logger.info('\n' + 'module initializaton: finished');
             endTimeModule = Date.now();
             logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
            }); // END callback backstretch.after
          } // END if attic_id exists
          // run attic found in page: attic_post
          if ($('#attic_post').length) {
            // apply CSS styles
            // NOTE: unclear why title_size|tagline_size evaluated to 1 if NOT set
            //
                // Create and json object for HEADER options taken from
                // header config (YAML data file)
                /* eslint-disable */
                var atticOptionsHeader = {
                            "padding_top":            600, 
                }
                /* eslint-enable */
                // Create an json object for BACKSTRETCH options taken from
                // header config (yaml data file)
                /* eslint-disable */
                var atticOptionsBackstretch = {
                }
                /* eslint-enable */
                // merge|overload Attic OPTIONS
                //
                atticOptions = $.extend({}, atticOptions, atticOptionsHeader, atticOptionsBackstretch);
                // overload Attic OPTIONS by settings from frontmatterOptions
                //
                if (frontmatterOptions.background_color_1) atticOptions.background_color_1 = frontmatterOptions.background_color_1;
                if (frontmatterOptions.background_color_2) atticOptions.background_color_2 = frontmatterOptions.background_color_2;
               // ENDIF attic_id
             // ENDFOR item in header_config.attics
            // frontmatter takes precedence (over header options)
            //
            if (frontmatterOptions) {
              if (typeof frontmatterOptions.raised_level != 'undefined') { atticOptions.raised_level = frontmatterOptions.raised_level; }
              if (typeof frontmatterOptions.r_text != 'undefined') { atticOptions.r_text = frontmatterOptions.r_text; }
              if (typeof frontmatterOptions.text_emphasis != 'undefined') { atticOptions.text_emphasis = frontmatterOptions.text_emphasis; }
              if (typeof frontmatterOptions.padding_top != 'undefined') { atticOptions.padding_top = frontmatterOptions.padding_top; }
              if (typeof frontmatterOptions.padding_bottom != 'undefined') { atticOptions.padding_bottom = frontmatterOptions.padding_bottom; }
              if (typeof frontmatterOptions.margin_bottom != 'undefined') { atticOptions.margin_bottom = frontmatterOptions.margin_bottom; }
              if (typeof frontmatterOptions.title != 'undefined') {
                if (typeof frontmatterOptions.title.color != 'undefined') { atticOptions.title_color = frontmatterOptions.title.color; }
                if (typeof frontmatterOptions.title.size != 'undefined') { atticOptions.title_size = frontmatterOptions.title.size; }
                if (typeof frontmatterOptions.title.animate != 'undefined') { atticOptions.title_animate = frontmatterOptions.title.animate; }
                if (typeof frontmatterOptions.title.align != 'undefined') { atticOptions.title_align = frontmatterOptions.title.align; }
              }
              if (typeof frontmatterOptions.tagline != 'undefined') {
                if (typeof frontmatterOptions.tagline.color != 'undefined') { atticOptions.tagline_color = frontmatterOptions.tagline.color; }
                if (typeof frontmatterOptions.tagline.size != 'undefined') { atticOptions.tagline_size = frontmatterOptions.tagline.size; }
                if (typeof frontmatterOptions.tagline.animate != 'undefined') { atticOptions.tagline_animate = frontmatterOptions.tagline.animate; }
                if (typeof frontmatterOptions.tagline.align != 'undefined') { atticOptions.tagline_align = frontmatterOptions.tagline.align; }
              }
              if (typeof frontmatterOptions.spinner != 'undefined') { atticOptions.spinner = frontmatterOptions.spinner; }
              if (typeof frontmatterOptions.opacity != 'undefined') { atticOptions.opacity = frontmatterOptions.opacity; }
              if (typeof frontmatterOptions.alignX != 'undefined') { atticOptions.alignX = frontmatterOptions.alignX; }
              if (typeof frontmatterOptions.alignY != 'undefined') { atticOptions.alignY = frontmatterOptions.alignY; }
              if (typeof frontmatterOptions.scale != 'undefined') { atticOptions.scale = frontmatterOptions.scale; }
              if (typeof frontmatterOptions.start != 'undefined') { atticOptions.start = frontmatterOptions.start; }
              if (typeof frontmatterOptions.animateFirst != 'undefined') { atticOptions.animateFirst = frontmatterOptions.animateFirst; }
              if (typeof frontmatterOptions.preload != 'undefined') { atticOptions.preload = frontmatterOptions.preload; }
              if (typeof frontmatterOptions.preloadSize != 'undefined') { atticOptions.preloadSize = frontmatterOptions.preloadSize; }
              if (typeof frontmatterOptions.mute != 'undefined') { atticOptions.mute = frontmatterOptions.mute; }
              if (typeof frontmatterOptions.bypassCss != 'undefined') { atticOptions.bypassCss = frontmatterOptions.bypassCss; }
              if (typeof frontmatterOptions.isVideo != 'undefined') { atticOptions.isVideo = frontmatterOptions.isVideo; }
              if (typeof frontmatterOptions.loop != 'undefined') { atticOptions.loop = frontmatterOptions.loop; }
              if (typeof frontmatterOptions.paused != 'undefined') { atticOptions.paused = frontmatterOptions.paused; }
              if (typeof frontmatterOptions.transition != 'undefined') { atticOptions.transition = frontmatterOptions.transition; }
              if (typeof frontmatterOptions.duration != 'undefined') { atticOptions.duration = frontmatterOptions.duration; }
              if (typeof frontmatterOptions.transitionDuration != 'undefined') { atticOptions.transitionDuration = frontmatterOptions.transitionDuration; }
              if (typeof frontmatterOptions.slides != 'undefined') { atticOptions.slides = frontmatterOptions.slides; }
            }
            // add r-text|raised_level settings
            //
            if (atticOptions.r_text === 'enabled') { $('#attic_post').addClass('r-text'); }
            var raised_level = 'raised-z' +atticOptions.raised_level;
            $('#attic_post').addClass(raised_level);
            $('#head-title').addClass(atticOptions.title_animate);
            $('#head-title').addClass(atticOptions.title_animate_delay);
            $('#head-title').addClass(atticOptions.title_animate_duration);
            $('#head-tagline').addClass(atticOptions.tagline_animate);
            $('#head-tagline').addClass(atticOptions.tagline_animate_duration);
            var text_emphasis = 'text-emphasis-' +atticOptions.text_emphasis;
            $('#head-title-text').addClass(text_emphasis);
            $('#head-tagline-text').addClass(text_emphasis);
            // check if attic should be translated
            //
            if (atticOptions.notranslate) {
              $('#attic_post').addClass('notranslate');
            }
            // add header CSS styles to <HEAD>
            //
            var attic_style = '';
            // initialze header background gradient
            //
            attic_style += '<style> .attic { ';
            attic_style += 'background-image: -webkit-gradient(linear, left top, left bottom, from(' +atticOptions.background_color_1 + '), to(' +atticOptions.background_color_2+ ')) !important;';
            attic_style += 'background-image: -webkit-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: -o-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: linear-gradient(to bottom, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' +atticOptions.background_color_1 + '", endColorstr="' +atticOptions.background_color_2 + '", GradientType=0) !important;';
            attic_style += '} </style>';
            $('head').append(attic_style);
            // collect individual (title|tagline) options
            //
            var my_attic      	= $.extend({}, {"enabled":true, "id":"attic_post", "layout":["collection", "post"], "title_animate":"animate__fadeInDown", "padding_top":600});
            var padding_top     = !!my_attic.padding_top ? my_attic.padding_top : atticOptions.padding_top;
            var padding_bottom  = !!my_attic.padding_bottom ? my_attic.padding_bottom : atticOptions.padding_bottom;
            var margin_bottom   = !!my_attic.margin_bottom ? my_attic.margin_bottom : atticOptions.margin_bottom;
            // frontmatter options takes precedence
            //
            if (typeof frontmatterOptions.padding_top != 'undefined')     { padding_top    = frontmatterOptions.padding_top; }
            if (typeof frontmatterOptions.padding_bottom != 'undefined')  { padding_bottom = frontmatterOptions.padding_bottom; }
            if (typeof frontmatterOptions.margin_bottom != 'undefined')   { margin_bottom  = frontmatterOptions.margin_bottom; }
            attic_style = '';
            attic_style = '<style> .attic { padding-top: ' +padding_top+ 'px; padding-bottom: ' +padding_bottom+ 'px; margin-bottom: ' +margin_bottom+ 'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>';
            $('head').append(attic_style);
            $('head').append('<style> .attic .head-title h2 { color: ' +atticOptions.title_color+ ';font-size: ' +atticOptions.title_size+ ' !important; text-align: ' +atticOptions.title_align+ ';} </style>');
            $('head').append('<style> .attic .head-tagline h3 { color: ' +atticOptions.tagline_color+ ';font-size: ' +atticOptions.tagline_size+ ' !important; text-align: ' +atticOptions.tagline_align+ '; } </style>');
            // Add opacity to ALL header (backstretch) images
            // See: https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/
            //
            var item_opacity        = !!my_attic.opacity ? my_attic.opacity : atticOptions.opacity;
            var backstretch_opacity = '<style> .backstretch-item { opacity: ' +item_opacity+ '; </style>';
            $('head').append(backstretch_opacity);
            _this.setState('initialized');
            logger.debug('\n' + 'state: ' + _this.getState());
            // start RUNNER on page 'ready'|module state 'initialized'
            //
            $(() => {
              var dependencies_met_attic_ready = setInterval (() => {
                if (_this.getState() === 'initialized') {
                  logger.info('\n' + 'initialize attic on id attic_post: started');
                  attic_post_runner (atticOptions);
                  clearInterval(dependencies_met_attic_ready);
                }
              }, 10);
            });
          } // END apply CSS styles|start ATTIC RUNNER
         // END if header enabled
       // END for item in header_config.attics
      // NO header found in page
      // if ($('#no_header').length) {
      //   _this.setState('completed');
      //   logger.debug('\n' + 'state: ' + _this.getState());
      //   logger.warn('\n' + 'no header configured or found in page');
      // }
      return true;
    }, // END createAllAttics
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



