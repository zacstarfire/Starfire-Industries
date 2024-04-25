

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/gallery.js
 # JS Adapter for J1 Gallery
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/miromannino/Justified-Gallery
 #
 # Copyright (C) 2020 Miro Mannino
 # Copyright (C) 2023 Sachin Neravath
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # See: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Justified Gallery is licensed under the MIT license
 # See: https://github.com/miromannino/Justified-Gallery/blob/master/LICENSE
 # lightGallery is licensed under the GPLv3 license
 # See: https://github.com/sachinchoolur/lightGallery/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 # Adapter generated: 2024-04-25 16:34:03 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.gallery = ((j1, window) => {
  var environment   = 'development';
  var state         = 'not_started';
  var play_button   = '/assets/themes/j1/modules/lightGallery/css/themes/uno/icons/play-button.png';
  var url;
  var origin;
  var galleryDefaults;
  var gallerySettings;
  var galleryOptions;
  var frontmatterOptions;
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
      url    = new URL(window.location.href);
      origin = url.origin;
      // flag used for Chromium browser workaround
      j1['jg'] = {
        callback:   {},
      };
      // -----------------------------------------------------------------------
      // default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.gallery',
        generated:   '2024-04-25 16:34:03 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      _this  = j1.adapter.gallery;
      logger = log4javascript.getLogger('j1.adapter.gallery');
      // create settings object from frontmatter (page settings)
      frontmatterOptions = options != null ? $.extend({}, options) : {};
      // Load  module DEFAULTS|CONFIG
      galleryDefaults = $.extend({}, {"enabled":false, "xhr_data_path":"/assets/data/galeries", "gallery_complete_timeout":1000, "filters":{"enabled":false, "grayscale":1, "contrast":0.8, "brightness":0.4}});
      gallerySettings = $.extend({}, {"enabled":true, "galleries":[{"gallery":null, "enabled":true, "id":"jg_old_times", "type":"image", "image_base_path":"/assets/images/modules/gallery/old_times", "thumb_base_path":"/assets/images/modules/gallery/old_times", "gallery_options":{"rowHeight":250, "gutters":3}, "lightbox":{"enabled":true, "type":"lg"}, "lightGallery":{"plugins":"lgFullscreen, lgRotate, lgThumbnail", "options":{"licenseKey":"0000-0000-000-0000", "download":false, "alignThumbnails":"left"}}, "images":[{"image":null, "file":"image_01.jpg", "description":"<h5>GrandPa</h5> <h6>80th Birthday</h6>\n", "caption":{"text":"GrandPa &middot; 80th Birthday"}}, {"image":null, "file":"image_02.jpg", "description":"<h5>GrandPa</h5> <h6>80th Birthday</h6>\n", "caption":{"text":"GrandPa &middot; 80th Birthday"}}, {"image":null, "file":"image_03.jpg", "description":"<h5>GrandPa</h5> <h6>Annual journey</h6>\n", "caption":{"text":"GrandPa &middot; Annual journey"}}, {"image":null, "file":"image_04.jpg", "description":"<h5>GrandPa</h5> <h6>Annual journey</h6>\n", "caption":{"text":"GrandPa &middot; Annual journey"}}]}, {"gallery":null, "enabled":true, "id":"jg_mega_cities", "type":"image", "image_base_path":"/assets/images/modules/gallery/mega_cities", "thumb_base_path":"/assets/images/modules/gallery/mega_cities", "gallery_options":{"rowHeight":150, "gutters":1}, "lightbox":{"enabled":true, "type":"lg"}, "lightGallery":{"plugins":"lgFullscreen, lgRotate, lgThumbnail", "options":{"licenseKey":"0000-0000-000-0000", "download":false, "alignThumbnails":"left", "addClass":"lg-uno-thumbnails", "appendThumbnailsTo":".lg-outer", "animateThumb":false, "allowMediaOverlap":true}}, "filters":{"enabled":false, "grayscale":0, "contrast":0.8, "brightness":0.4}, "images":[{"image":null, "file":"banter-snaps_b.jpg", "description":"<h5>Japan</h5> <h6>City of Osaka</h6>\n", "caption":{"text":"Japan &middot; City of Osaka"}}, {"image":null, "file":"denys-nevozhai-1_b.jpg", "description":"<h5>China</h5> <h6>Man posing at the rooftop of Jin Mao Tower Shanghai</h6>\n", "caption":{"text":"China &middot; Man posing at the rooftop of Jin Mao Tower Shanghai"}}, {"image":null, "file":"gints-gailis_b.jpg", "description":"<h5>Indonesia</h5> <h6>Shangri-La Hotel Jakarta</h6>\n", "caption":{"text":"Indonesia &middot; Shangri-La Hotel Jakarta"}}, {"image":null, "file":"steven-diaz_b.jpg", "description":"<h5>Japan</h5> <h6>Tokyo seen from World Trade Center Observation Deck</h6>\n", "caption":{"text":"Japan - Tokyo seen from World Trade Center Observation Deck"}}, {"image":null, "file":"denys-nevozhai-2_b.jpg", "description":"<h5>China</h5> <h6>Young couple over Shenzhen</h6>\n", "caption":{"text":"China &middot; Young couple over Shenzhen"}}, {"image":null, "file":"johan-mouchet_b.jpg", "description":"<h5>Australia</h5> <h6>The Queen Bee at the Eureka Tower of Melbourne</h6>\n", "caption":{"text":"Australia &middot; The Queen Bee at the Eureka Tower of Melbourne"}}, {"image":null, "file":"thomas-tucker_b.jpg", "description":"<h5>Taiwan</h5> <h6>Sunset over City of Taipei</h6>\n", "caption":{"text":"Taiwan &middot; Sunset over City of Taipei"}}, {"image":null, "file":"emmad-mazhari_b.jpg", "description":"<h5>United States</h5> <h6>City of Chicago</h6>\n", "caption":{"text":"United States &middot; City of Chicago"}}, {"image":null, "file":"federico-rizzarelli_b.jpg", "description":"<h5>China</h5> <h6>City of Shanghai</h6>\n", "caption":{"text":"China &middot; City of Shanghai"}}, {"image":null, "file":"andreas-brucker_b.jpg", "description":"<h5>Thailand</h5> <h6>City of Bangkok</h6>\n", "caption":{"text":"Thailand &middot; City of Bangkok"}}, {"image":null, "file":"luca-bravo_b.jpg", "description":"<h5>Taiwan</h5> <h6>Sunset over City of Taipei</h6>\n", "caption":{"text":"Taiwan &middot; Sunset over City of Taipei"}}, {"image":null, "file":"ethan-brooke_b.jpg", "description":"<h5>South Korea</h5> <h6>Lotte World Tower Seoul</h6>\n", "caption":{"text":"South Korea &middot; Lotte World Tower Seoul"}}]}, {"gallery":null, "enabled":true, "id":"jg_video_html5", "type":"video", "video":"html5", "video_base_path":"/assets/videos/gallery/html5", "image_base_path":"/assets/videos/gallery", "thumb_base_path":"/assets/videos/gallery", "gallery_options":{"rowHeight":250, "gutters":3}, "lightbox":{"enabled":true, "type":"lg"}, "lightGallery":{"plugins":"lgThumbnail, lgVideo", "options":{"licenseKey":"0000-0000-000-0000", "download":false, "alignThumbnails":"left", "animateThumb":true, "autoplayFirstVideo":true, "videojs":true, "videojsTheme":"vjs-theme-uno"}, "videojsOptions":{"enabled":true, "controls":true, "muted":false, "preload":true, "playbackRates":[0.25, 0.5, 1, 1.5, 2], "zoomPlugin":{"enabled":true}, "controlBar":{"remainingTimeDisplay":true, "pictureInPictureToggle":false, "volumePanel":{"inline":false}}}}, "filters":{"enabled":false, "grayscale":0, "contrast":1, "brightness":1}, "videos":[{"video":null, "enabled":true, "name":"Peck Pocketed", "type":"html5", "size":"1280-720", "source":"video1.mp4", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>Peck Pocketed by Kevin Herron | Disney Favorite</h5> <h6>Student Academy Award winning Cartoon Clip</h6> <br>\n", "caption":{"text":"Peck Pocketed &middot; Student Academy Award winning Cartoon Clip"}, "poster":{"source":"video1-poster.jpg"}, "tracks":[{"track":null, "default":true, "kind":"captions", "srclang":"en", "label":"English", "src":"/assets/videos/vtt/captions/video1.vtt"}, {"track":null, "default":true, "kind":"chapters", "srclang":"en", "label":"Chapters", "src":"/assets/videos/vtt/chapters/video1.vtt"}]}, {"video":null, "enabled":true, "name":"Rollin Wild", "type":"html5", "size":"1280-720", "source":"video2.mp4", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>Rollin` Wild</h5> <h6>Short Funny Animated Clip created at the Film Academy</h6> <br>\n", "caption":{"text":"Rollin` Wild &middot; Short Funny animated video clip created at the Film Academy"}, "poster":{"source":"video2-poster.jpg"}}]}, {"gallery":null, "enabled":true, "id":"jg_video_online_youtube", "type":"video", "video":"youtube", "image_base_path":"/assets/videos/gallery", "thumb_base_path":"/assets/videos/gallery", "gallery_options":{"rowHeight":200, "gutters":3}, "lightbox":{"enabled":true, "type":"lg"}, "lightGallery":{"plugins":"lgThumbnail, lgVideo", "options":{"licenseKey":"0000-0000-000-0000", "download":false, "alignThumbnails":"left", "animateThumb":true, "autoplayFirstVideo":true, "videojs":false}, "videojsOptions":{"enabled":false}, "playerParams":{"enabled":true, "start":["00:00:50", "00:00:50"], "autoplay":0, "controls":0, "enablejsapi":1, "hl":"en", "loop":0, "mute":0, "playsinline":1, "wmode":"opaque"}}, "filters":{"enabled":false, "grayscale":0, "contrast":1, "brightness":1}, "videos":[{"video":null, "enabled":true, "id":"X5Cfi7U4eL4", "name":"Carpool Karaoke Lady Gaga", "type":"youtube", "size":"1280-720", "source":"//youtube.com/watch?v=X5Cfi7U4eL4", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>Carpool Karaoke</h5> <h6>\n  Lady Gaga joins James for a drive through Los Angeles\n  singing her classics and tracks from her new album.\n</h6> <br>\n", "caption":{"text":"Carpool Karaoke &middot; Lady Gaga"}, "poster":{"source":"video_gaga-poster.jpg"}, "playerParams":{"enabled":false}}, {"video":null, "enabled":true, "name":"Carpool Karaoke Adele", "type":"youtube", "size":"1280-720", "source":"//youtube.com/watch?v=Nck6BZga7TQ", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>Carpool Karaoke</h5> <h6>\n  James Corden is about the holidays in London and gets Adele\n  off for a ride through the city. On the way they sing some\n  of their biggest hits and Adele raps Nicki Minaj's <b>monster</b>\n</h6> <br>\n", "caption":{"text":"Carpool Karaoke &middot; Adele"}, "poster":{"source":"video_adele-poster.jpg"}, "playerParams":{"enabled":true, "start":50}}, {"video":null, "enabled":true, "name":"Carpool Karaoke Gwen Stefani", "type":"youtube", "size":"1280-720", "source":"//youtube.com/watch?v=F2SXmzk8ve4", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>Carpool Karaoke</h5> <h6>\n  Gwen Stefani, Julia Roberts, George Clooney and James Corden\n  singing Holla back girl, there's nothing left to see\n</h6> <br>\n", "poster":{"source":"video_gwen-poster.jpg"}, "caption":{"text":"Carpool Karaoke &middot; Gwen Stefani"}, "playerParams":false}, {"video":null, "enabled":true, "name":"Carpool Karaoke Michelle Obama", "type":"youtube", "size":"1280-720", "source":"//youtube.com/watch?v=ln3wAdRAim4", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>Carpool Karaoke</h5> <h6>\n  James Corden's White House tour takes an unthinkable turn\n  when First Lady Michelle Obama joins him for a drive around\n  the grounds singing Stevie Wonder and Beyonce\n</h6> <br>\n", "caption":{"text":"Carpool Karaoke &middot; Michelle Obama"}, "poster":{"source":"video_michelle-poster.jpg"}, "playerParams":{"enabled":false}}]}, {"gallery":null, "enabled":true, "id":"jg_video_online_youtube_james_and_adele", "type":"video", "video":"youtube", "image_base_path":"/assets/videos/gallery", "thumb_base_path":"/assets/videos/gallery", "gallery_options":{"rowHeight":250, "gutters":3}, "lightbox":{"enabled":true, "type":"lg"}, "lightGallery":{"plugins":"lgThumbnail, lgVideo", "options":{"licenseKey":"0000-0000-000-0000", "download":false, "alignThumbnails":"left", "animateThumb":true, "autoplayFirstVideo":true, "videojs":false}, "videojsOptions":{"enabled":false}, "playerParams":{"enabled":true, "start":["00:00:50", "00:00:50"], "autoplay":1, "mute":0}}, "filters":{"enabled":false, "grayscale":0, "contrast":1, "brightness":1}, "videos":[{"video":null, "enabled":true, "name":"Carpool Karaoke Lady Gaga", "type":"youtube", "size":"1280-720", "source":"//youtube.com/watch?v=Nck6BZga7TQ", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>Carpool Karaoke</h5> <h6> December 2015 - James is on holidays is about the holidays in London and gets Adele off for a ride through the city. On the way they sing some of their biggest hits. </h6> <br>\n", "caption":{"text":"Carpool Karaoke &middot; James and Adele"}, "poster":{"source":"video_adele-poster.jpg"}, "playerParams":{"start":50}}, {"video":null, "enabled":true, "name":"Last Carpool Karaoke", "type":"youtube", "size":"1280-720", "source":"//youtube.com/watch?v=nV8UZJNBY6Y", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>Carpool Karaoke</h5> <h6>\n  April 2023 - Adele wakeup James at home for the last Late Night Show,\n  for the last Carpool Caraoke ever.\n</h6> <br>\n", "caption":{"text":"Carpool Karaoke &middot; Last Carpool Karaoke"}, "poster":{"source":"video_adele_last_carpool_caraoke_poster.jpg"}, "playerParams":{"start":50}}]}, {"gallery":null, "enabled":true, "id":"jg_video_online_youtube_voice_kids", "type":"video", "video":"youtube", "image_base_path":"/assets/videos/gallery/voice_kids_de_2021", "thumb_base_path":"/assets/videos/gallery/voice_kids_de_2021", "gallery_options":{"rowHeight":200, "gutters":3}, "lightbox":{"enabled":true, "type":"lg"}, "lightGallery":{"plugins":"lgThumbnail, lgVideo", "options":{"licenseKey":"0000-0000-000-0000", "download":false, "alignThumbnails":"left", "animateThumb":true, "autoplayFirstVideo":true, "videojs":false}, "videojsOptions":{"enabled":false}, "playerParams":{"enabled":true, "autoplay":1, "mute":0}}, "filters":{"enabled":false, "grayscale":0, "contrast":1, "brightness":1}, "videos":[{"video":null, "enabled":true, "name":"Voice Kids Constance", "type":"youtube", "size":"1280-720", "source":"//youtube.com/watch?v=aQqPgLMgO-I", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>\n  The Voice Kids Germany 2021 &middot; Constance\n</h5> <h6>\n  The 14-year-old Constance has dreamed of being on The Voice Kids stage\n  for a very long time. Your dream has finally come true! She performs a\n  breathtaking version of Sia's song Alive.\n</h6> <br>\n", "caption":{"text":"Voice Kids Germany 2021 &middot; Constance"}, "poster":{"source":"constance.jpg"}}, {"video":null, "enabled":true, "name":"Voice Kids Elisa", "type":"youtube", "size":"1280-720", "source":"//youtube.com/watch?v=Bl6tkAgaP1g", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>\n  The Voice Kids Germany 2021 &middot; Elisa\n</h5> <h6>\n  The 14-year-old Elisa is fascinated by the classics of pop music.\n  Her version of Hey Jude from The Beatles comes with a lot of feeling.\n</h6> <br>\n", "caption":{"text":"Voice Kids Germany 2021 &middot; Elisa"}, "poster":{"source":"elisa.jpg"}}, {"video":null, "enabled":true, "name":"Voice Kids Ben", "type":"youtube", "size":"1280-720", "source":"//youtube.com/watch?v=GuiOYCv9NTI", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>\n  The Voice Kids Germany 2021 &middot; Ben\n</h5> <h6>\n  The 14-year-old Ben pours all of his emotions into his performance\n  of Maroon 5's Sunday Morning. He wants to show what he's made of.\n</h6> <br>\n", "caption":{"text":"Voice Kids Germany 2021 &middot; Ben"}, "poster":{"source":"ben.jpg"}}, {"video":null, "enabled":true, "name":"Voice Kids The Battle", "type":"youtube", "size":"1280-720", "source":"//youtube.com/watch?v=1bvE2mgJ22I", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>\n  The Voice Kids Germany 2021 &middot; The Battle\n</h5> <h6>\n  The battle of the three young people is a real emotional battle.\n  Elisa's husky voice, Constanze's unbelievable power, and Ben's\n  rhythm come into their own in Adele's James Bond theme song Skyfall.\n</h6> <br>\n", "caption":{"text":"Voice Kids Germany 2021 &middot; The Battle"}, "poster":{"source":"battle.jpg"}}]}, {"gallery":null, "enabled":true, "id":"jg_video_online_vimeo", "type":"video", "video":"vimeo", "image_base_path":"/assets/videos/gallery", "thumb_base_path":"/assets/videos/gallery", "gallery_options":{"rowHeight":250, "gutters":3}, "lightbox":{"enabled":true, "type":"lg"}, "lightGallery":{"plugins":"lgThumbnail, lgVideo", "options":{"licenseKey":"0000-0000-000-0000", "download":false, "alignThumbnails":"left", "animateThumb":true, "autoplayFirstVideo":true, "videojs":false}, "videojsOptions":{"enabled":false}, "playerParams":{"enabled":false, "autoplay":0, "byline":0, "portrait":0, "color":"var(--md-gray-100)", "muted":0}}, "filters":{"enabled":false, "grayscale":0, "contrast":1, "brightness":1}, "videos":[{"video":null, "enabled":true, "name":"Forever 21", "type":"vimeo", "size":"1280-720", "source":"//vimeo.com/179528528", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>\n  Forever 21\n</h5> <h6>\n  Kick It Old School\n</h6> <br>\n", "caption":{"text":"Forever 21 &middot; Kick It Old School"}, "poster":{"source":"kick-it-old-school-poster.jpg"}, "playerParams":{"start":50}}, {"video":null, "enabled":true, "name":"Forever 21", "type":"vimeo", "size":"1280-720", "source":"//vimeo.com/202117650", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>Forever 21</h5> <h6>Stay Colorful, Babe!</h6> <br>\n", "caption":{"text":"Forever 21 &middot; Stay Colorful, Babe!"}, "poster":{"source":"stay-colorful-poster.jpg"}}]}, {"gallery":null, "enabled":true, "id":"jg_video_online_dailymotion", "type":"video", "video":"dailymotion", "image_base_path":"/assets/videos/gallery/dailymotion", "thumb_base_path":"/assets/videos/gallery/dailymotion", "gallery_options":{"rowHeight":250, "gutters":3}, "lightbox":{"enabled":true, "type":"lg"}, "lightGallery":{"plugins":"lgThumbnail, lgVideo", "options":{"licenseKey":"0000-0000-000-0000", "download":false, "alignThumbnails":"left", "animateThumb":true, "autoplayFirstVideo":true, "videojs":false}, "videojsOptions":{"enabled":false}, "playerParams":{"enabled":false}}, "filters":{"enabled":false, "grayscale":0, "contrast":1, "brightness":1}, "videos":[{"video":null, "enabled":true, "name":"SELF Channel", "type":"dailymotion", "size":"1280-720", "source":"//dai.ly/x887s09", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>SELF Channel</h5> <h6>Guided Meditation: Morning Energy</h6> <br>\n", "caption":{"text":"SELF Channel &middot; Morning Energy"}, "poster":{"source":"meditation.jpg"}}, {"video":null, "enabled":true, "name":"SELF Channel", "type":"dailymotion", "size":"1280-720", "source":"//dai.ly/x87ycik", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>SELF Channel</h5> <h6>Beginner Mat Pilates: Core Workout</h6> <br>\n", "caption":{"text":"SELF Channel &middot; Pilates Core Workout"}, "poster":{"source":"pilates.jpg"}}]}, {"gallery":null, "enabled":true, "id":"jg_video_online_tiktoc", "type":"video", "video":"tiktoc", "image_base_path":"/assets/videos/gallery", "thumb_base_path":"/assets/videos/gallery", "gallery_options":{"rowHeight":480, "gutters":3}, "lightbox":{"enabled":true, "type":"lg"}, "lightGallery":{"plugins":"lgThumbnail, lgVideo", "options":{"licenseKey":"0000-0000-000-0000", "download":false, "alignThumbnails":"left", "animateThumb":true, "autoplayFirstVideo":true, "videojs":false}, "videojsOptions":{"enabled":false}, "playerParams":{"enabled":false, "autoplay":0, "muted":0}}, "filters":{"enabled":false, "grayscale":0, "contrast":1, "brightness":1}, "videos":[{"video":null, "enabled":true, "name":"Gesund", "type":"tiktoc", "size":"300-575", "source":"//tiktok.com/embed/6901614235709869314", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>Gianna Bacio</h5> <h6>Warum 2x wöchentlich Sex gesund ist</h6> <br>\n", "caption":{"text":"Gianna Bacio &middot; Warum 2x wöchentlich Sex gesund ist"}, "poster":{"source":"gianna_1.jpg"}}, {"video":null, "enabled":true, "name":"Vergesslichkeit", "type":"tiktoc", "size":"300-575", "source":"//tiktok.com/embed/6938375143181913349", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>Gianna Bacio</h5> <h6>Sex hilft gegen Vergesslichkeit?!</h6> <br>\n", "caption":{"text":"Gianna Bacio &middot; Sex hilft gegen Vergesslichkeit?!"}, "poster":{"source":"gianna_2.jpg"}}, {"video":null, "enabled":true, "name":"Denken", "type":"tiktoc", "size":"300-575", "source":"//tiktok.com/embed/6919457437510569218", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h5>Gianna Bacio</h5> <h6>Daran denken die Meisten beim Sex!</h6> <br>\n", "caption":{"text":"Gianna Bacio &middot; Daran denken die Meisten beim Sex!"}, "poster":{"source":"gianna_3.jpg"}}]}]});
      galleryOptions  = $.extend(true, {}, galleryDefaults, gallerySettings, frontmatterOptions);
      // load HTML portion for all grids
      console.debug('loading HTML portion for all galleries configured');
      _this.loadGalleryHTML(galleryOptions, galleryOptions.galleries);
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependency_met_page_ready = setInterval (() => {
        var pageState      = $('#content').css("display");
        var pageVisible    = (pageState === 'block') ? true : false;
        var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
        if (j1CoreFinished && pageVisible) {
          startTimeModule = Date.now();
          // initialize state flag
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          _this.initialize(galleryOptions);
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module initialized successfully');
          endTimeModule = Date.now();
          logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval(dependency_met_page_ready);
        } // END 'finished' && 'pageVisible'
      }, 10); // END dependency_met_page_ready
    }, // END init
    // -----------------------------------------------------------------------
    // Load AJAX data and initialize the jg gallery
    // -----------------------------------------------------------------------
    initialize: (options) => {
      var xhrLoadState      = 'pending';                                        // (initial) load state for the HTML portion of the slider
      var load_dependencies = {};
      var dependency;
      logger = log4javascript.getLogger('j1.adapter.gallery');
      _this.setState('running');
      logger.debug('\n' + 'state: ' + _this.getState());
        logger.info('\n' + 'found gallery on id: ' + 'jg_old_times');
          // create dynamic loader variable to setup the grid on id jg_old_times
          dependency = 'dependencies_met_html_loaded_jg_old_times';
          load_dependencies[dependency] = '';
          // initialize the gallery if HTML portion successfully loaded
          //
          load_dependencies['dependencies_met_html_loaded_jg_old_times'] = setInterval (() => {
            // check if HTML portion of the gallery is loaded successfully
            xhrLoadState = j1.xhrDOMState['#jg_old_times_parent'];
            if (xhrLoadState === 'success') {
              var $grid_jg_old_times = $('#jg_old_times');                  // used for later access
              logger.debug('\n' + 'dyn_loader, initialize gallery on id: ' + 'jg_old_times');
              j1.jg.callback.jg_old_times = 'waiting';
              /* eslint-disable */
              $('#jg_old_times').justifiedGallery({
                "rowHeight": 250,
                "margins": 3,
              })
              .on('jg.complete', (evt) => {
                evt.stopPropagation();
                j1.jg.callback.jg_old_times = 'successful';
                // setup the lightbox
                //
                logger.debug('\n' + 'dyn_loader, callback "jg.complete" entered on id: ' + 'jg_old_times');
                logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_old_times');
                var lg = document.getElementById("jg_old_times");
                lightGallery(lg, {
                  "plugins":    [lgFullscreen, lgRotate, lgThumbnail],
                  "licenseKey": "0000-0000-000-0000",
                  "download": false,
                  "alignThumbnails": "left",
                  "galleryId":  "jg_old_times",
                  "selector":   ".lg-item",
                }); // END lightGallery
              }); // END justifiedGallery on('jg.complete)
              /* eslint-enable */
              // workaround for Chromium brwosers if callback jg.complete
              // NOT fired
              //
              setTimeout(() => {
                if (j1.jg.callback.jg_old_times == 'waiting') {
                  logger.debug('\n' + 'dyn_loader, callback "jg.callback": ' + j1.jg.callback.jg_old_times)
                  logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_old_times');
                  var lg = document.getElementById("jg_old_times");
                  lightGallery(lg, {
                    "plugins":    [lgFullscreen, lgRotate, lgThumbnail],
                    "licenseKey": "0000-0000-000-0000",
                    "download": false,
                    "alignThumbnails": "left",
                    "galleryId":  "jg_old_times",
                    "selector":   ".lg-item",
                  }); // END lightGallery
                } // END if j1.jg.callback
              }, 1000); // END timeout
              clearInterval(load_dependencies['dependencies_met_html_loaded_jg_old_times']);
            } // END  if xhrLoadState === 'success'
          }, 10); // END dependencies_met_html_loaded
         // ENDIF gallery enabled
        logger.info('\n' + 'found gallery on id: ' + 'jg_mega_cities');
          // create dynamic loader variable to setup the grid on id jg_mega_cities
          dependency = 'dependencies_met_html_loaded_jg_mega_cities';
          load_dependencies[dependency] = '';
          // initialize the gallery if HTML portion successfully loaded
          //
          load_dependencies['dependencies_met_html_loaded_jg_mega_cities'] = setInterval (() => {
            // check if HTML portion of the gallery is loaded successfully
            xhrLoadState = j1.xhrDOMState['#jg_mega_cities_parent'];
            if (xhrLoadState === 'success') {
              var $grid_jg_mega_cities = $('#jg_mega_cities');                  // used for later access
              logger.debug('\n' + 'dyn_loader, initialize gallery on id: ' + 'jg_mega_cities');
              j1.jg.callback.jg_mega_cities = 'waiting';
              /* eslint-disable */
              $('#jg_mega_cities').justifiedGallery({
                "rowHeight": 150,
                "margins": 1,
              })
              .on('jg.complete', (evt) => {
                evt.stopPropagation();
                j1.jg.callback.jg_mega_cities = 'successful';
                // setup the lightbox
                //
                logger.debug('\n' + 'dyn_loader, callback "jg.complete" entered on id: ' + 'jg_mega_cities');
                logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_mega_cities');
                var lg = document.getElementById("jg_mega_cities");
                lightGallery(lg, {
                  "plugins":    [lgFullscreen, lgRotate, lgThumbnail],
                  "licenseKey": "0000-0000-000-0000",
                  "download": false,
                  "alignThumbnails": "left",
                  "addClass": "lg-uno-thumbnails",
                  "appendThumbnailsTo": ".lg-outer",
                  "animateThumb": false,
                  "allowMediaOverlap": true,
                  "galleryId":  "jg_mega_cities",
                  "selector":   ".lg-item",
                }); // END lightGallery
              }); // END justifiedGallery on('jg.complete)
              /* eslint-enable */
              // workaround for Chromium brwosers if callback jg.complete
              // NOT fired
              //
              setTimeout(() => {
                if (j1.jg.callback.jg_mega_cities == 'waiting') {
                  logger.debug('\n' + 'dyn_loader, callback "jg.callback": ' + j1.jg.callback.jg_mega_cities)
                  logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_mega_cities');
                  var lg = document.getElementById("jg_mega_cities");
                  lightGallery(lg, {
                    "plugins":    [lgFullscreen, lgRotate, lgThumbnail],
                    "licenseKey": "0000-0000-000-0000",
                    "download": false,
                    "alignThumbnails": "left",
                    "addClass": "lg-uno-thumbnails",
                    "appendThumbnailsTo": ".lg-outer",
                    "animateThumb": false,
                    "allowMediaOverlap": true,
                    "galleryId":  "jg_mega_cities",
                    "selector":   ".lg-item",
                  }); // END lightGallery
                } // END if j1.jg.callback
              }, 1000); // END timeout
              clearInterval(load_dependencies['dependencies_met_html_loaded_jg_mega_cities']);
            } // END  if xhrLoadState === 'success'
          }, 10); // END dependencies_met_html_loaded
         // ENDIF gallery enabled
        logger.info('\n' + 'found gallery on id: ' + 'jg_video_html5');
          // create dynamic loader variable to setup the grid on id jg_video_html5
          dependency = 'dependencies_met_html_loaded_jg_video_html5';
          load_dependencies[dependency] = '';
          // initialize the gallery if HTML portion successfully loaded
          //
          load_dependencies['dependencies_met_html_loaded_jg_video_html5'] = setInterval (() => {
            // check if HTML portion of the gallery is loaded successfully
            xhrLoadState = j1.xhrDOMState['#jg_video_html5_parent'];
            if (xhrLoadState === 'success') {
              var $grid_jg_video_html5 = $('#jg_video_html5');                  // used for later access
              logger.debug('\n' + 'dyn_loader, initialize gallery on id: ' + 'jg_video_html5');
              j1.jg.callback.jg_video_html5 = 'waiting';
              /* eslint-disable */
              $('#jg_video_html5').justifiedGallery({
                "rowHeight": 250,
                "margins": 3,
              })
              .on('jg.complete', (evt) => {
                evt.stopPropagation();
                j1.jg.callback.jg_video_html5 = 'successful';
                // setup the lightbox
                //
                logger.debug('\n' + 'dyn_loader, callback "jg.complete" entered on id: ' + 'jg_video_html5');
                logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_video_html5');
                var lg = document.getElementById("jg_video_html5");
                lightGallery(lg, {
                  "plugins":    [lgThumbnail, lgVideo],
                  "licenseKey": "0000-0000-000-0000",
                  "download": false,
                  "alignThumbnails": "left",
                  "animateThumb": true,
                  "autoplayFirstVideo": true,
                  "videojs": true,
                  "videojsTheme": "vjs-theme-uno",
                  "galleryId":  "jg_video_html5",
                  "selector":   ".lg-item",
                  "videojsOptions": {
                    "controls": true,
                    "muted": false,
                    "preload": true,
                    "playbackRates": [0.25,0.5,1,1.5,2],
                    "zoomPlugin": {"enabled":true},
                    "controlBar": {"remainingTimeDisplay":true,"pictureInPictureToggle":false,"volumePanel":{"inline":false}},
                  }
                }); // END lightGallery
              }); // END justifiedGallery on('jg.complete)
              /* eslint-enable */
              // workaround for Chromium brwosers if callback jg.complete
              // NOT fired
              //
              setTimeout(() => {
                if (j1.jg.callback.jg_video_html5 == 'waiting') {
                  logger.debug('\n' + 'dyn_loader, callback "jg.callback": ' + j1.jg.callback.jg_video_html5)
                  logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_video_html5');
                  var lg = document.getElementById("jg_video_html5");
                  lightGallery(lg, {
                    "plugins":    [lgThumbnail, lgVideo],
                    "licenseKey": "0000-0000-000-0000",
                    "download": false,
                    "alignThumbnails": "left",
                    "animateThumb": true,
                    "autoplayFirstVideo": true,
                    "videojs": true,
                    "videojsTheme": "vjs-theme-uno",
                    "galleryId":  "jg_video_html5",
                    "selector":   ".lg-item",
                    "videojsOptions": {
                      "controls": true,
                      "muted": false,
                      "preload": true,
                      "playbackRates": [0.25,0.5,1,1.5,2],
                      "zoomPlugin": {"enabled":true},
                      "controlBar": {"remainingTimeDisplay":true,"pictureInPictureToggle":false,"volumePanel":{"inline":false}},
                    }
                  }); // END lightGallery
                } // END if j1.jg.callback
              }, 1000); // END timeout
              clearInterval(load_dependencies['dependencies_met_html_loaded_jg_video_html5']);
            } // END  if xhrLoadState === 'success'
          }, 10); // END dependencies_met_html_loaded
         // ENDIF gallery enabled
        logger.info('\n' + 'found gallery on id: ' + 'jg_video_online_youtube');
          // create dynamic loader variable to setup the grid on id jg_video_online_youtube
          dependency = 'dependencies_met_html_loaded_jg_video_online_youtube';
          load_dependencies[dependency] = '';
          // initialize the gallery if HTML portion successfully loaded
          //
          load_dependencies['dependencies_met_html_loaded_jg_video_online_youtube'] = setInterval (() => {
            // check if HTML portion of the gallery is loaded successfully
            xhrLoadState = j1.xhrDOMState['#jg_video_online_youtube_parent'];
            if (xhrLoadState === 'success') {
              var $grid_jg_video_online_youtube = $('#jg_video_online_youtube');                  // used for later access
              logger.debug('\n' + 'dyn_loader, initialize gallery on id: ' + 'jg_video_online_youtube');
              j1.jg.callback.jg_video_online_youtube = 'waiting';
              /* eslint-disable */
              $('#jg_video_online_youtube').justifiedGallery({
                "rowHeight": 200,
                "margins": 3,
              })
              .on('jg.complete', (evt) => {
                evt.stopPropagation();
                j1.jg.callback.jg_video_online_youtube = 'successful';
                // setup the lightbox
                //
                logger.debug('\n' + 'dyn_loader, callback "jg.complete" entered on id: ' + 'jg_video_online_youtube');
                logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_video_online_youtube');
                var lg = document.getElementById("jg_video_online_youtube");
                lightGallery(lg, {
                  "plugins":    [lgThumbnail, lgVideo],
                  "licenseKey": "0000-0000-000-0000",
                  "download": false,
                  "alignThumbnails": "left",
                  "animateThumb": true,
                  "autoplayFirstVideo": true,
                  "videojs": false,
                  "galleryId":  "jg_video_online_youtube",
                  "selector":   ".lg-item",
                  "youTubePlayerParams": {
                    "start": ["00:00:50","00:00:50"],
                    "autoplay": 0,
                    "controls": 0,
                    "enablejsapi": 1,
                    "hl": "en",
                    "loop": 0,
                    "mute": 0,
                    "playsinline": 1,
                    "wmode": "opaque",
                    "origin": "origin"
                  }
                }); // END lightGallery
              }); // END justifiedGallery on('jg.complete)
              /* eslint-enable */
              // workaround for Chromium brwosers if callback jg.complete
              // NOT fired
              //
              setTimeout(() => {
                if (j1.jg.callback.jg_video_online_youtube == 'waiting') {
                  logger.debug('\n' + 'dyn_loader, callback "jg.callback": ' + j1.jg.callback.jg_video_online_youtube)
                  logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_video_online_youtube');
                  var lg = document.getElementById("jg_video_online_youtube");
                  lightGallery(lg, {
                    "plugins":    [lgThumbnail, lgVideo],
                    "licenseKey": "0000-0000-000-0000",
                    "download": false,
                    "alignThumbnails": "left",
                    "animateThumb": true,
                    "autoplayFirstVideo": true,
                    "videojs": false,
                    "galleryId":  "jg_video_online_youtube",
                    "selector":   ".lg-item",
                    "youTubePlayerParams": {
                      "start": ["00:00:50","00:00:50"],
                      "autoplay": 0,
                      "controls": 0,
                      "enablejsapi": 1,
                      "hl": "en",
                      "loop": 0,
                      "mute": 0,
                      "playsinline": 1,
                      "wmode": "opaque",
                      "origin": "origin"
                    }
                  }); // END lightGallery
                } // END if j1.jg.callback
              }, 1000); // END timeout
              clearInterval(load_dependencies['dependencies_met_html_loaded_jg_video_online_youtube']);
            } // END  if xhrLoadState === 'success'
          }, 10); // END dependencies_met_html_loaded
         // ENDIF gallery enabled
        logger.info('\n' + 'found gallery on id: ' + 'jg_video_online_youtube_james_and_adele');
          // create dynamic loader variable to setup the grid on id jg_video_online_youtube_james_and_adele
          dependency = 'dependencies_met_html_loaded_jg_video_online_youtube_james_and_adele';
          load_dependencies[dependency] = '';
          // initialize the gallery if HTML portion successfully loaded
          //
          load_dependencies['dependencies_met_html_loaded_jg_video_online_youtube_james_and_adele'] = setInterval (() => {
            // check if HTML portion of the gallery is loaded successfully
            xhrLoadState = j1.xhrDOMState['#jg_video_online_youtube_james_and_adele_parent'];
            if (xhrLoadState === 'success') {
              var $grid_jg_video_online_youtube_james_and_adele = $('#jg_video_online_youtube_james_and_adele');                  // used for later access
              logger.debug('\n' + 'dyn_loader, initialize gallery on id: ' + 'jg_video_online_youtube_james_and_adele');
              j1.jg.callback.jg_video_online_youtube_james_and_adele = 'waiting';
              /* eslint-disable */
              $('#jg_video_online_youtube_james_and_adele').justifiedGallery({
                "rowHeight": 250,
                "margins": 3,
              })
              .on('jg.complete', (evt) => {
                evt.stopPropagation();
                j1.jg.callback.jg_video_online_youtube_james_and_adele = 'successful';
                // setup the lightbox
                //
                logger.debug('\n' + 'dyn_loader, callback "jg.complete" entered on id: ' + 'jg_video_online_youtube_james_and_adele');
                logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_video_online_youtube_james_and_adele');
                var lg = document.getElementById("jg_video_online_youtube_james_and_adele");
                lightGallery(lg, {
                  "plugins":    [lgThumbnail, lgVideo],
                  "licenseKey": "0000-0000-000-0000",
                  "download": false,
                  "alignThumbnails": "left",
                  "animateThumb": true,
                  "autoplayFirstVideo": true,
                  "videojs": false,
                  "galleryId":  "jg_video_online_youtube_james_and_adele",
                  "selector":   ".lg-item",
                  "youTubePlayerParams": {
                    "start": ["00:00:50","00:00:50"],
                    "autoplay": 1,
                    "mute": 0,
                    "origin": "origin"
                  }
                }); // END lightGallery
              }); // END justifiedGallery on('jg.complete)
              /* eslint-enable */
              // workaround for Chromium brwosers if callback jg.complete
              // NOT fired
              //
              setTimeout(() => {
                if (j1.jg.callback.jg_video_online_youtube_james_and_adele == 'waiting') {
                  logger.debug('\n' + 'dyn_loader, callback "jg.callback": ' + j1.jg.callback.jg_video_online_youtube_james_and_adele)
                  logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_video_online_youtube_james_and_adele');
                  var lg = document.getElementById("jg_video_online_youtube_james_and_adele");
                  lightGallery(lg, {
                    "plugins":    [lgThumbnail, lgVideo],
                    "licenseKey": "0000-0000-000-0000",
                    "download": false,
                    "alignThumbnails": "left",
                    "animateThumb": true,
                    "autoplayFirstVideo": true,
                    "videojs": false,
                    "galleryId":  "jg_video_online_youtube_james_and_adele",
                    "selector":   ".lg-item",
                    "youTubePlayerParams": {
                      "start": ["00:00:50","00:00:50"],
                      "autoplay": 1,
                      "mute": 0,
                      "origin": "origin"
                    }
                  }); // END lightGallery
                } // END if j1.jg.callback
              }, 1000); // END timeout
              clearInterval(load_dependencies['dependencies_met_html_loaded_jg_video_online_youtube_james_and_adele']);
            } // END  if xhrLoadState === 'success'
          }, 10); // END dependencies_met_html_loaded
         // ENDIF gallery enabled
        logger.info('\n' + 'found gallery on id: ' + 'jg_video_online_youtube_voice_kids');
          // create dynamic loader variable to setup the grid on id jg_video_online_youtube_voice_kids
          dependency = 'dependencies_met_html_loaded_jg_video_online_youtube_voice_kids';
          load_dependencies[dependency] = '';
          // initialize the gallery if HTML portion successfully loaded
          //
          load_dependencies['dependencies_met_html_loaded_jg_video_online_youtube_voice_kids'] = setInterval (() => {
            // check if HTML portion of the gallery is loaded successfully
            xhrLoadState = j1.xhrDOMState['#jg_video_online_youtube_voice_kids_parent'];
            if (xhrLoadState === 'success') {
              var $grid_jg_video_online_youtube_voice_kids = $('#jg_video_online_youtube_voice_kids');                  // used for later access
              logger.debug('\n' + 'dyn_loader, initialize gallery on id: ' + 'jg_video_online_youtube_voice_kids');
              j1.jg.callback.jg_video_online_youtube_voice_kids = 'waiting';
              /* eslint-disable */
              $('#jg_video_online_youtube_voice_kids').justifiedGallery({
                "rowHeight": 200,
                "margins": 3,
              })
              .on('jg.complete', (evt) => {
                evt.stopPropagation();
                j1.jg.callback.jg_video_online_youtube_voice_kids = 'successful';
                // setup the lightbox
                //
                logger.debug('\n' + 'dyn_loader, callback "jg.complete" entered on id: ' + 'jg_video_online_youtube_voice_kids');
                logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_video_online_youtube_voice_kids');
                var lg = document.getElementById("jg_video_online_youtube_voice_kids");
                lightGallery(lg, {
                  "plugins":    [lgThumbnail, lgVideo],
                  "licenseKey": "0000-0000-000-0000",
                  "download": false,
                  "alignThumbnails": "left",
                  "animateThumb": true,
                  "autoplayFirstVideo": true,
                  "videojs": false,
                  "galleryId":  "jg_video_online_youtube_voice_kids",
                  "selector":   ".lg-item",
                  "youTubePlayerParams": {
                    "autoplay": 1,
                    "mute": 0,
                    "origin": "origin"
                  }
                }); // END lightGallery
              }); // END justifiedGallery on('jg.complete)
              /* eslint-enable */
              // workaround for Chromium brwosers if callback jg.complete
              // NOT fired
              //
              setTimeout(() => {
                if (j1.jg.callback.jg_video_online_youtube_voice_kids == 'waiting') {
                  logger.debug('\n' + 'dyn_loader, callback "jg.callback": ' + j1.jg.callback.jg_video_online_youtube_voice_kids)
                  logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_video_online_youtube_voice_kids');
                  var lg = document.getElementById("jg_video_online_youtube_voice_kids");
                  lightGallery(lg, {
                    "plugins":    [lgThumbnail, lgVideo],
                    "licenseKey": "0000-0000-000-0000",
                    "download": false,
                    "alignThumbnails": "left",
                    "animateThumb": true,
                    "autoplayFirstVideo": true,
                    "videojs": false,
                    "galleryId":  "jg_video_online_youtube_voice_kids",
                    "selector":   ".lg-item",
                    "youTubePlayerParams": {
                      "autoplay": 1,
                      "mute": 0,
                      "origin": "origin"
                    }
                  }); // END lightGallery
                } // END if j1.jg.callback
              }, 1000); // END timeout
              clearInterval(load_dependencies['dependencies_met_html_loaded_jg_video_online_youtube_voice_kids']);
            } // END  if xhrLoadState === 'success'
          }, 10); // END dependencies_met_html_loaded
         // ENDIF gallery enabled
        logger.info('\n' + 'found gallery on id: ' + 'jg_video_online_vimeo');
          // create dynamic loader variable to setup the grid on id jg_video_online_vimeo
          dependency = 'dependencies_met_html_loaded_jg_video_online_vimeo';
          load_dependencies[dependency] = '';
          // initialize the gallery if HTML portion successfully loaded
          //
          load_dependencies['dependencies_met_html_loaded_jg_video_online_vimeo'] = setInterval (() => {
            // check if HTML portion of the gallery is loaded successfully
            xhrLoadState = j1.xhrDOMState['#jg_video_online_vimeo_parent'];
            if (xhrLoadState === 'success') {
              var $grid_jg_video_online_vimeo = $('#jg_video_online_vimeo');                  // used for later access
              logger.debug('\n' + 'dyn_loader, initialize gallery on id: ' + 'jg_video_online_vimeo');
              j1.jg.callback.jg_video_online_vimeo = 'waiting';
              /* eslint-disable */
              $('#jg_video_online_vimeo').justifiedGallery({
                "rowHeight": 250,
                "margins": 3,
              })
              .on('jg.complete', (evt) => {
                evt.stopPropagation();
                j1.jg.callback.jg_video_online_vimeo = 'successful';
                // setup the lightbox
                //
                logger.debug('\n' + 'dyn_loader, callback "jg.complete" entered on id: ' + 'jg_video_online_vimeo');
                logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_video_online_vimeo');
                var lg = document.getElementById("jg_video_online_vimeo");
                lightGallery(lg, {
                  "plugins":    [lgThumbnail, lgVideo],
                  "licenseKey": "0000-0000-000-0000",
                  "download": false,
                  "alignThumbnails": "left",
                  "animateThumb": true,
                  "autoplayFirstVideo": true,
                  "videojs": false,
                  "galleryId":  "jg_video_online_vimeo",
                  "selector":   ".lg-item",
                }); // END lightGallery
              }); // END justifiedGallery on('jg.complete)
              /* eslint-enable */
              // workaround for Chromium brwosers if callback jg.complete
              // NOT fired
              //
              setTimeout(() => {
                if (j1.jg.callback.jg_video_online_vimeo == 'waiting') {
                  logger.debug('\n' + 'dyn_loader, callback "jg.callback": ' + j1.jg.callback.jg_video_online_vimeo)
                  logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_video_online_vimeo');
                  var lg = document.getElementById("jg_video_online_vimeo");
                  lightGallery(lg, {
                    "plugins":    [lgThumbnail, lgVideo],
                    "licenseKey": "0000-0000-000-0000",
                    "download": false,
                    "alignThumbnails": "left",
                    "animateThumb": true,
                    "autoplayFirstVideo": true,
                    "videojs": false,
                    "galleryId":  "jg_video_online_vimeo",
                    "selector":   ".lg-item",
                  }); // END lightGallery
                } // END if j1.jg.callback
              }, 1000); // END timeout
              clearInterval(load_dependencies['dependencies_met_html_loaded_jg_video_online_vimeo']);
            } // END  if xhrLoadState === 'success'
          }, 10); // END dependencies_met_html_loaded
         // ENDIF gallery enabled
        logger.info('\n' + 'found gallery on id: ' + 'jg_video_online_dailymotion');
          // create dynamic loader variable to setup the grid on id jg_video_online_dailymotion
          dependency = 'dependencies_met_html_loaded_jg_video_online_dailymotion';
          load_dependencies[dependency] = '';
          // initialize the gallery if HTML portion successfully loaded
          //
          load_dependencies['dependencies_met_html_loaded_jg_video_online_dailymotion'] = setInterval (() => {
            // check if HTML portion of the gallery is loaded successfully
            xhrLoadState = j1.xhrDOMState['#jg_video_online_dailymotion_parent'];
            if (xhrLoadState === 'success') {
              var $grid_jg_video_online_dailymotion = $('#jg_video_online_dailymotion');                  // used for later access
              logger.debug('\n' + 'dyn_loader, initialize gallery on id: ' + 'jg_video_online_dailymotion');
              j1.jg.callback.jg_video_online_dailymotion = 'waiting';
              /* eslint-disable */
              $('#jg_video_online_dailymotion').justifiedGallery({
                "rowHeight": 250,
                "margins": 3,
              })
              .on('jg.complete', (evt) => {
                evt.stopPropagation();
                j1.jg.callback.jg_video_online_dailymotion = 'successful';
                // setup the lightbox
                //
                logger.debug('\n' + 'dyn_loader, callback "jg.complete" entered on id: ' + 'jg_video_online_dailymotion');
                logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_video_online_dailymotion');
                var lg = document.getElementById("jg_video_online_dailymotion");
                lightGallery(lg, {
                  "plugins":    [lgThumbnail, lgVideo],
                  "licenseKey": "0000-0000-000-0000",
                  "download": false,
                  "alignThumbnails": "left",
                  "animateThumb": true,
                  "autoplayFirstVideo": true,
                  "videojs": false,
                  "galleryId":  "jg_video_online_dailymotion",
                  "selector":   ".lg-item",
                }); // END lightGallery
              }); // END justifiedGallery on('jg.complete)
              /* eslint-enable */
              // workaround for Chromium brwosers if callback jg.complete
              // NOT fired
              //
              setTimeout(() => {
                if (j1.jg.callback.jg_video_online_dailymotion == 'waiting') {
                  logger.debug('\n' + 'dyn_loader, callback "jg.callback": ' + j1.jg.callback.jg_video_online_dailymotion)
                  logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_video_online_dailymotion');
                  var lg = document.getElementById("jg_video_online_dailymotion");
                  lightGallery(lg, {
                    "plugins":    [lgThumbnail, lgVideo],
                    "licenseKey": "0000-0000-000-0000",
                    "download": false,
                    "alignThumbnails": "left",
                    "animateThumb": true,
                    "autoplayFirstVideo": true,
                    "videojs": false,
                    "galleryId":  "jg_video_online_dailymotion",
                    "selector":   ".lg-item",
                  }); // END lightGallery
                } // END if j1.jg.callback
              }, 1000); // END timeout
              clearInterval(load_dependencies['dependencies_met_html_loaded_jg_video_online_dailymotion']);
            } // END  if xhrLoadState === 'success'
          }, 10); // END dependencies_met_html_loaded
         // ENDIF gallery enabled
        logger.info('\n' + 'found gallery on id: ' + 'jg_video_online_tiktoc');
          // create dynamic loader variable to setup the grid on id jg_video_online_tiktoc
          dependency = 'dependencies_met_html_loaded_jg_video_online_tiktoc';
          load_dependencies[dependency] = '';
          // initialize the gallery if HTML portion successfully loaded
          //
          load_dependencies['dependencies_met_html_loaded_jg_video_online_tiktoc'] = setInterval (() => {
            // check if HTML portion of the gallery is loaded successfully
            xhrLoadState = j1.xhrDOMState['#jg_video_online_tiktoc_parent'];
            if (xhrLoadState === 'success') {
              var $grid_jg_video_online_tiktoc = $('#jg_video_online_tiktoc');                  // used for later access
              logger.debug('\n' + 'dyn_loader, initialize gallery on id: ' + 'jg_video_online_tiktoc');
              j1.jg.callback.jg_video_online_tiktoc = 'waiting';
              /* eslint-disable */
              $('#jg_video_online_tiktoc').justifiedGallery({
                "rowHeight": 480,
                "margins": 3,
              })
              .on('jg.complete', (evt) => {
                evt.stopPropagation();
                j1.jg.callback.jg_video_online_tiktoc = 'successful';
                // setup the lightbox
                //
                logger.debug('\n' + 'dyn_loader, callback "jg.complete" entered on id: ' + 'jg_video_online_tiktoc');
                logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_video_online_tiktoc');
                var lg = document.getElementById("jg_video_online_tiktoc");
                lightGallery(lg, {
                  "plugins":    [lgThumbnail, lgVideo],
                  "licenseKey": "0000-0000-000-0000",
                  "download": false,
                  "alignThumbnails": "left",
                  "animateThumb": true,
                  "autoplayFirstVideo": true,
                  "videojs": false,
                  "galleryId":  "jg_video_online_tiktoc",
                  "selector":   ".lg-item",
                }); // END lightGallery
              }); // END justifiedGallery on('jg.complete)
              /* eslint-enable */
              // workaround for Chromium brwosers if callback jg.complete
              // NOT fired
              //
              setTimeout(() => {
                if (j1.jg.callback.jg_video_online_tiktoc == 'waiting') {
                  logger.debug('\n' + 'dyn_loader, callback "jg.callback": ' + j1.jg.callback.jg_video_online_tiktoc)
                  logger.debug('\n' + 'dyn_loader, initialize lightGallery on id: ' + 'jg_video_online_tiktoc');
                  var lg = document.getElementById("jg_video_online_tiktoc");
                  lightGallery(lg, {
                    "plugins":    [lgThumbnail, lgVideo],
                    "licenseKey": "0000-0000-000-0000",
                    "download": false,
                    "alignThumbnails": "left",
                    "animateThumb": true,
                    "autoplayFirstVideo": true,
                    "videojs": false,
                    "galleryId":  "jg_video_online_tiktoc",
                    "selector":   ".lg-item",
                  }); // END lightGallery
                } // END if j1.jg.callback
              }, 1000); // END timeout
              clearInterval(load_dependencies['dependencies_met_html_loaded_jg_video_online_tiktoc']);
            } // END  if xhrLoadState === 'success'
          }, 10); // END dependencies_met_html_loaded
         // ENDIF gallery enabled
    }, // END initialize
    // -------------------------------------------------------------------------
    // loadGalleryHTML()
    // loads the HTML portion via AJAX for all galleries configured.
    // NOTE: Make sure the placeholder DIV is available in the content
    // page as generated using the Asciidoc extension gallery::
    // -------------------------------------------------------------------------
    loadGalleryHTML: (options, gallery) => {
      var numGalleries  = Object.keys(gallery).length;
      var active_grids  = numGalleries;
      var xhr_data_path = options.xhr_data_path + '/index.html';
      var xhr_container_id;
      console.debug('number of galleries found: ' + active_grids);
      _this.setState('load_data');
      Object.keys(gallery).forEach((key) => {
        if (gallery[key].enabled) {
          xhr_container_id = gallery[key].id + '_parent';
          console.debug('load HTML portion on gallery id: ' + gallery[key].id);
          j1.loadHTML({
            xhr_container_id: xhr_container_id,
            xhr_data_path:    xhr_data_path,
            xhr_data_element: gallery[key].id
          });
        } else {
          console.debug('gallery found disabled on id: ' + gallery[key].id);
          active_grids--;
        }
      });
      console.debug('galleries loaded in page enabled|all: ' + active_grids + '|' + numGalleries);
      _this.setState('data_loaded');
    }, // END loadGalleryHTML
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



