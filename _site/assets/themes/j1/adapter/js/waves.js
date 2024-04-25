

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/waves.js
 # J1 Adapter for the waves module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # NOTE: Wave styles defind in /assets/data/panel.html, key 'wave'
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
j1.adapter.waves = ((j1, window) => {
  var environment         = 'development';
  var cookie_names        = j1.getCookieNames();
  var user_state          = j1.readCookie(cookie_names.user_state);
  var viewport_width      = $(window).width();
  var state               = 'not_started';
  var waveDefaults;
  var waveSettings;
  var waveOptions;
  var frontmatterOptions;
  var themes_allowed;
  var theme_enabled;
  var theme;
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
      // [INFO   ] [j1.adapter.comments                    ] [ detected comments provider (j1_config): } ]
      // [INFO   ] [j1.adapter.comments                    ] [ start processing load region head, layout:  ]
      // -----------------------------------------------------------------------
      // default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.waves',
        generated:   '2024-04-25 16:34:03 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      // create settings object from frontmatter
      frontmatterOptions  = options != null ? $.extend({}, options) : {};
      // create settings object from module options
      waveDefaults = $.extend({}, {"enabled":false, "themes":["UnoLight"]});
      waveSettings = $.extend({}, {"enabled":true, "themes":["UnoLight"]});
      waveOptions  = $.extend(true, {}, waveDefaults, waveSettings, frontmatterOptions);
      _this        = j1.adapter.waves;
      theme        = user_state.theme_name;
      logger       = log4javascript.getLogger('j1.adapter.wave');
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (() => {
        var pageState       = $('#content').css("display");
        var pageVisible     = (pageState === 'block') ? true : false;
        var j1CoreFinished  = (j1.getState() === 'finished') ? true : false;
        var atticFinished   = (j1.adapter.attic.getState() == 'finished') ? true : false;
        if (j1CoreFinished && pageVisible) {
          startTimeModule = Date.now();
          themes_allowed = waveOptions.themes.toString();
          theme_enabled  = waveOptions.themes.indexOf(theme) > -1 ? true : false;
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          logger.debug('\n' + 'themes allowd: ' + themes_allowed);
          logger.debug('\n' + 'theme detected: ' + theme);
          // TODO: Check why a timeout is required to enable|disable the wave elements
          if (themes_allowed === 'all') {
            logger.info('\n' + 'activate waves for theme: ' + 'all' );
            setTimeout(() => {
              $('.wave').show();
              logger.info('\n' + 'initializing module finished');
            }, 1000 );
          } else if (theme_enabled) {
            logger.info('\n' + 'activate waves for theme: ' + theme );
            setTimeout(() => {
              $('.wave').show();
              logger.info('\n' + 'initializing module finished');
            }, 1000 );
          } else {
            logger.warn('\n' + 'no valid theme/s found');
            logger.warn('\n' + 'deactivate (hide) waves');
            setTimeout(() => {
              $('.wave').hide();
              logger.info('\n' + 'initializing module finished');
            }, 1000 );
          }
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module finished');
          endTimeModule = Date.now();
          logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval(dependencies_met_page_ready);
        } // END pageVisible
      }, 10); // END dependencies_met_page_ready
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



