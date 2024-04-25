

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/analytics.js
 # J1 Adapter for the analytics module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-04-25 16:34:03 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.analytics = ((j1, window) => {
  var url               = new liteURL(window.location.href);
  var hostname          = url.hostname;
  var environment       = 'development';
  var gaScript          = document.createElement('script');
  var cookie_names      = j1.getCookieNames();
  var date              = new Date();
  var timestamp_now     = date.toISOString();
  var skipHost          = false;
  var state             = 'not_started';
  var analyticsDefaults;
  var analyticsSettings;
  var analyticsOptions;
  var providerID;
  var skipAllHosts;
  var optInOut;
  var anonymizeIP;
  var validProviderID;
  var skipHosts;
  var gaCookies;
  var user_consent;
  var gaExists;
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
      // module initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (() => {
        var pageState      = $('#content').css("display");
        var pageVisible    = (pageState === 'block') ? true: false;
        var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
        if (j1CoreFinished && pageVisible) {
            logger = log4javascript.getLogger('j1.adapter.analytics');
            logger.info('\n' + 'Google Analytics: disabled');
            clearInterval(dependencies_met_page_ready);
        }
      }, 10);
      return;
    }, // END init
    // -------------------------------------------------------------------------
    // messageHandler()
    // manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: (sender, message) => {
      var json_message = JSON.stringify(message, undefined, 2);
      logText = '\n' + 'received message from ' + sender + ': ' + json_message;
      logger.debug(logText);
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      if (message.type === 'command' && message.action === 'module_initialized') {
        //
        // Place handling of command|action here
        //
        logger.info('\n' + message.text);
      }
      //
      // Place handling of other command|action here
      //
      return true;
    }, // END messageHandler
    // -------------------------------------------------------------------------
    // setState()
    // Sets the current (processing) state of the module
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
  }; // END return
})(j1, window);



