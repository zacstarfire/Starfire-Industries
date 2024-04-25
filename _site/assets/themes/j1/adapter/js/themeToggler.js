

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/themeToggler.js
 # J1 Adapter for the Theme Toggler module
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
j1.adapter.themeToggler = ((j1, window) => {
  var environment           = 'development';
  var cookie_names          = j1.getCookieNames();
  var user_state            = j1.readCookie(cookie_names.user_state);
  var viewport_width        = $(window).width();
  var url                   = new liteURL(window.location.href);
  var secure                = (url.protocol.includes('https')) ? true : false;
  var cookie_names          = j1.getCookieNames();
  var state                 = 'not_started';
  var user_state            = {};
  var light_theme_css;
  var dark_theme_css;
  var light_theme_name;
  var dark_theme_name;
  var togglerDefaults;
  var togglerSettings;
  var togglerOptions;
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
        module_name: 'j1.adapter.themeToggler',
        generated:   '2024-04-25 16:34:03 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      // create settings object from frontmatter
      frontmatterOptions  = options != null ? $.extend({}, options) : {};
      logger = log4javascript.getLogger('j1.adapter.themeToggler');
      _this  = j1.adapter.themeToggler;
      // create settings object from module options
      togglerDefaults     = $.extend({}, {"enabled":false, "themes":{"light":{"name":"UnoLight", "css_file":"/assets/themes/j1/core/css/themes/unolight/bootstrap.css"}, "dark":{"name":"UnoDark", "css_file":"/assets/themes/j1/core/css/themes/unodark/bootstrap.css"}}});
      togglerSettings     = $.extend({}, {"enabled":true});
      togglerOptions      = $.extend(true, {}, togglerDefaults, togglerSettings, frontmatterOptions);
      // toggle themes
      light_theme_name    = togglerOptions.themes.light.name;
      light_theme_css     = togglerOptions.themes.light.css_file;
      dark_theme_name     = togglerOptions.themes.dark.name;
      dark_theme_css      = togglerOptions.themes.dark.css_file;;
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (() => {
        var pageState         = $('#content').css("display");
        var pageVisible       = (pageState === 'block') ? true : false;
        var j1CoreFinished    = (j1.getState() === 'finished') ? true : false;
        var navigatorFinished = (j1.adapter.navigator.getState() === 'finished') ? true: false;
        if (j1CoreFinished && pageVisible && navigatorFinished) {
          startTimeModule = Date.now();
          user_state = j1.readCookie(cookie_names.user_state);
          _this.setState('started');
          logger.debug('\n' + 'set module state to: ' + _this.getState());
          logger.info('\n' + 'initializing module: started');
          // -------------------------------------------------------------------
          // Event Mgmt SHOULD moved ta navigator core
          // -------------------------------------------------------------------
          // toggle themeToggler icon to 'dark' if required
          if ($('#quickLinksThemeTogglerButton').length) {
            if (user_state.theme_name === dark_theme_name) {
              $('#quickLinksThemeTogglerButton a i').toggleClass('mdib-lightbulb mdib-lightbulb-outline');
            }
          }
          $('#quickLinksThemeTogglerButton').click(function () {
            if (user_state.theme_name === light_theme_name) {
              user_state.theme_name = dark_theme_name;
              user_state.theme_css  = dark_theme_css;
              user_state.theme_icon = 'mdib-lightbulb';
            } else {
              user_state.theme_name = light_theme_name;
              user_state.theme_css  = light_theme_css;
              user_state.theme_icon = 'mdib-lightbulb-outline';
            }
            logger.info('\n' + 'switch theme to: ' + user_state.theme_name);
            user_state.writer = 'themeToggler';
            var cookie_written = j1.writeCookie({
              name:     cookie_names.user_state,
              data:     user_state,
              secure:   secure,
              expires:  365
            });
            if (!cookie_written) {
              logger.error('\n' + 'failed write to cookie: ' + cookie_names.user_consent);
            } else {
              location.reload(true);
            }
          }); // END button click
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module: finished');
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
    // returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: () => {
      return _this.state;
    } // END getState
  }; // END main (return)
})(j1, window);



