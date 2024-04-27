

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/lightbox.js
 # JS Adapter for J1 Lightbox
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/lokesh/lightbox2/
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 # Copyright (C) 2007, 2018 Lokesh Dhakar
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Lightbox V2 is licensed under the MIT License.
 # For details, see https://github.com/lokesh/lightbox2/
 #
 # -----------------------------------------------------------------------------
 # Adapter generated: 2024-04-25 16:41:58 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.lightbox = ((j1, window) => {
  var environment       = 'development';
  var state             = 'not_started';
  var lightboxDefaults;
  var lightboxSettings;
  var lightboxOptions;
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
      // -----------------------------------------------------------------------
      // default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.lightbox',
        generated:   '2024-04-25 16:41:58 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.lightbox;
      logger  = log4javascript.getLogger('j1.adapter.lightbox');
      // create settings object from frontmatter (page settings)
      frontmatterOptions    = options !== null ? $.extend({}, options) : {};
      // Load module DEFAULTS|CONFIG
      lightboxDefaults      = $.extend({}, {"version":"0.0.1", "enabled":true, "alwaysShowNavOnTouchDevices":false, "albumLabel":"Image %1 of %2", "disableScrolling":true, "fadeDuration":400, "fitImagesInViewport":true, "imageFadeDuration":600, "maxWidth":null, "maxHeight":null, "positionFromTop":50, "resizeDuration":250, "showImageNumberLabel":true, "wrapAround":true});
      lightboxSettings      = $.extend({}, {"enabled":true, "imageFadeDuration":600});
      lightboxOptions       = $.extend(true, {}, lightboxDefaults, lightboxSettings, frontmatterOptions);
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (() => {
        var pageState      = $('#content').css("display");
        var pageVisible    = (pageState === 'block') ? true: false;
        var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
        var lbV2Finished   = ($('#lightbox').length) ? true : false;
         if (j1CoreFinished && pageVisible && lbV2Finished) {
           startTimeModule = Date.now();
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          lightbox.option({
            alwaysShowNavOnTouchDevices:  lightboxOptions.alwaysShowNavOnTouchDevices,
            albumLabel:                   lightboxOptions.albumLabel,
            disableScrolling:             lightboxOptions.disableScrolling,
            fadeDuration:                 lightboxOptions.fadeDuration,
            fitImagesInViewport:          lightboxOptions.fitImagesInViewport,
            imageFadeDuration:            lightboxOptions.imageFadeDuration,
            maxWidth:                     lightboxOptions.maxWidth,
            maxHeight:                    lightboxOptions.maxHeight,
            positionFromTop:              lightboxOptions.positionFromTop,
            resizeDuration:               lightboxOptions.resizeDuration,
            showImageNumberLabel:         lightboxOptions.showImageNumberLabel,
            wrapAround:                   lightboxOptions.wrapAround
          });
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module finished');
          endTimeModule = Date.now();
          logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval(dependencies_met_page_ready);
        } // END if pageVisible
      }, 10); // END dependencies_met_page_ready
    }, // END init lightbox
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



