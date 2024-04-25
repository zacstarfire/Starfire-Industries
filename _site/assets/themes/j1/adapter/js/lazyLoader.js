

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/lazyLoader.js
 # J1 Adapter for the lazyLoader module (core)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
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
j1.adapter.lazyLoader = ((j1, window) => {
var environment     = 'development';
var cookie_names    = j1.getCookieNames();
var user_state      = j1.readCookie(cookie_names.user_state);
var state           = 'not_started';
var lazyLoaderDefaults;
var lazyLoaderSettings;
var lazyLoaderOptions;
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
        module_name: 'j1.adapter.lazyLoader',
        generated:   '2024-04-25 16:38:04 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      // create settings object from module options
      //
      lazyLoaderDefaults = $.extend({}, {"enabled":false});
      lazyLoaderSettings = $.extend({}, {"enabled":true, "loaders":[{"loader":null, "enabled":true, "description":"MDI Icons (light)", "src":"/assets/themes/j1/core/css/icon-fonts/mdil.min.css", "selector":".mdil", "rootMargin":"150px 0px"}, {"loader":null, "enabled":true, "description":"MDI Icon CSS (regular)", "src":"/assets/themes/j1/core/css/icon-fonts/mdi.min.css", "selector":".mdi", "rootMargin":"150px 0px"}, {"loader":null, "enabled":true, "description":"FA Icon CSS", "src":"/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css", "selector":".fa", "rootMargin":"150px 0px"}, {"loader":null, "enabled":true, "description":"CountryFlag Icon CSS", "src":"/assets/themes/j1/core/country-flags/css/theme/uno.min.css", "selector":".flag-icon", "rootMargin":"150px 0px"}, {"loader":null, "enabled":true, "description":"rTable CSS", "src":"/assets/themes/j1/modules/rtable/css/theme/uno/rtable.min.css", "selector":".rtable", "rootMargin":"150px 0px"}]});
      lazyLoaderOptions  = $.extend(true, {}, lazyLoaderDefaults, lazyLoaderSettings);
      _this  = j1.adapter.lazyLoader;
      logger = log4javascript.getLogger('j1.adapter.lazyLoader');
      // -------------------------------------------------------------------------
      // module initializer
      // ---------------------------------------------------------------------
      var dependency_met_j1_core_ready = setInterval(() => {
        var j1CoreFinished = (j1.getState() === 'finished') ? true: false;
        if (j1CoreFinished) {
          startTimeModule = Date.now();
          _this.setState('started');
          logger.debug('\n' + 'set module state to: ' + _this.getState());
          logger.info('\n' + 'initializing module: started');
          _this.registerLoaders(lazyLoaderOptions);
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module: finished');
          endTimeModule = Date.now();
          logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval(dependency_met_j1_core_ready);
        } // END if pageVisible
      }, 10); // END dependency_met_j1_core_ready
    }, // END init
    // -------------------------------------------------------------------------
    // registerLoaders()
    // Lazy load CSS to speed up page rendering
    //
    // Requires the following settings:
    //
    //    src:        the 'location' of the CSS file
    //    selector:   the 'selector' that triggers the observer
    //    rootMargin: the 'margin' before the load is trigged
    //
    // -------------------------------------------------------------------------
    //
    registerLoaders: () => {
        j1.lazyCSS().observe({
          src:        '/assets/themes/j1/core/css/icon-fonts/mdil.min.css',
          selector:   '.mdil',
          rootMargin: '150px 0px'
        });
        logger.info('\n' + 'register lazy loading for: MDI Icons (light)');
        j1.lazyCSS().observe({
          src:        '/assets/themes/j1/core/css/icon-fonts/mdi.min.css',
          selector:   '.mdi',
          rootMargin: '150px 0px'
        });
        logger.info('\n' + 'register lazy loading for: MDI Icon CSS (regular)');
        j1.lazyCSS().observe({
          src:        '/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css',
          selector:   '.fa',
          rootMargin: '150px 0px'
        });
        logger.info('\n' + 'register lazy loading for: FA Icon CSS');
        j1.lazyCSS().observe({
          src:        '/assets/themes/j1/core/country-flags/css/theme/uno.min.css',
          selector:   '.flag-icon',
          rootMargin: '150px 0px'
        });
        logger.info('\n' + 'register lazy loading for: CountryFlag Icon CSS');
        j1.lazyCSS().observe({
          src:        '/assets/themes/j1/modules/rtable/css/theme/uno/rtable.min.css',
          selector:   '.rtable',
          rootMargin: '150px 0px'
        });
        logger.info('\n' + 'register lazy loading for: rTable CSS');
    }, // END registerLoaders
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



