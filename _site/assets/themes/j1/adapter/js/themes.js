

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/themes.js
 # JS Adapter for J1 themes (ThemeSwitcher)
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/jguadagno/ThemeSwitcher
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 # Copyright (C) 2014 Joseph Guadagno
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # ThemeSwitcher is licensed under the MIT License.
 # For details, see https://github.com/jguadagno/ThemeSwitcher/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 # NOTE:
 #  Setup of theme loaders for local_themes|remote_themes moved
 #  to adapter navigator.js
 # -----------------------------------------------------------------------------
 # Adapter generated: 2024-04-25 16:38:04 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
/* eslint quotes: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.themes = (function (j1, window) {
  var environment               = 'development';
  var development               = (environment.includes('dev') ? true : false);
  var url                       = new liteURL(window.location.href);
  var secure                    = (url.protocol.includes('https')) ? true : false;
  var user_state                = {};
  var user_consent              = {};
  var cookie_names              = j1.getCookieNames();
  var styleLoaded               = false;
  var id                        = 'default';
  var state                     = 'not_started';
  var cssExtension              = (development) ? '.css' : '.min.css';
  var default_theme_name        = 'UnoLight';
  var default_theme_author      = 'J1 Team';
  var default_theme_author_url  = 'https://jekyll.one/';
  var default_theme_css_name    = default_theme_name.toLowerCase();
  var default_theme_css         = '/assets/themes/j1/core/css/themes/' + default_theme_css_name + '/bootstrap' + cssExtension;
  var interval_count            = 0;
  var user_state_cookie;
  var theme_css_html;
  var cookie_written;
  var themesDefaults;
  var themesSettings;
  var themesOptions;
  var max_count;
  var j1Cookies;
  var gaCookies;
  var url;
  var baseUrl;
  var error_page;
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
  function styleSheetLoaded(styleSheet) {
    var sheets = document.styleSheets, stylesheet = sheets[(sheets.length - 1)];
    // find CSS file 'styleSheetName' in document
    for (var i in document.styleSheets) {
      if(sheets[i].href && sheets[i].href.indexOf(styleSheet) > -1) {
        return true;
      }
    }
    return false;
  }
  // see: https://stackoverflow.com/questions/4301968/checking-a-url-in-jquery-javascript
  // see: https://stackoverflow.com/questions/16481598/prevent-unhandled-jquery-ajax-error
  //
  var urlExists = function (url, callback) {
      if ( ! $.isFunction (callback)) {
         throw Error('Not a valid callback');
      }
      $.ajax({
        type:     'HEAD',
        url:      url,
        success:  $.proxy(callback, this, true),
        error:    $.proxy(callback, this, false)
      });
  };
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.themes',
        generated:   '2024-04-25 16:38:04 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this           = j1.adapter.themes;
      logger          = log4javascript.getLogger('j1.adapter.themes');
      // Load  module DEFAULTS|CONFIG
      themesDefaults  = $.extend({}, {"enabled":false, "debug":false, "saveToCookie":true, "reloadPageOnChange":false, "retries":30, "preview_page":"/pages/public/tools/previewer/current_theme/", "menu_icon_family":"mdib", "menu_icon_color":"var(--md-gray-500)", "menu_icon_size":"mdib-sm", "cssThemeLink":"bootstrapTheme", "defaultCssFile":"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css", "bootswatchApiUrl":"https://bootswatch.com/api", "bootswatchApiVersion":5, "loadFromBootswatch":true, "localThemes":"/assets/data/themes.json", "excludeBootswatch":"Default, default, Lux, Sketchy", "includeBootswatch":null, "skipIncludeBootswatch":null});
      themesSettings  = $.extend({}, {"enabled":true});
      themesOptions   = $.extend(true, {}, themesDefaults, themesSettings);
      max_count       = themesOptions.retries;
      url             = new liteURL(window.location.href);
      baseUrl         = url.origin;
      error_page      = url.origin + '/204.html';
      j1Cookies       = j1.findCookie('j1');
      gaCookies       = j1.findCookie('__g');
      // jadams, 2023-06-10: Added to optimze 'CLS' of a page load.
      // Find conterpart (show) in the j1.adapter
      // hide content|footer until 'page' is loaded
      //
      // $('#content').hide();
      // $('.active_footer').hide();
      // jadams, 2021-07-25: problem seems NOT an timing issue on the iPad
      // platform. (General) Dependency should be REMOVED!!!
      // TODO: Isolate redirect for iPad ONLY!!!
      //
      // jadams, 2021-07-11: added dependecy on the user state cookie
      // Found timing issues testing mobile devices (iPad)
      //
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (() => {
        var pageState           = $('#content').css("display");
//      var pageState           = $('#no_flicker').css("display");
        var pageVisible         = (pageState === 'block') ? true : false;
        var j1CoreFinished      = (j1.getState() === 'finished') ? true : false;
        var atticFinished       = (j1.adapter.attic.getState() === 'finished') ? true: false;
//      var userStateDetected   = j1.existsCookie(cookie_names.user_state);
        // counter how often the check should be done for the existence
        // of the user state cookie
        // interval_count += 1;
        if (pageVisible && j1CoreFinished) {
          startTimeModule = Date.now();
          user_state   = j1.readCookie(cookie_names.user_state);
          user_consent = j1.readCookie(cookie_names.user_consent);
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          // hide page until 'theme' is loaded
          logger.info('\n' + 'hide page until theme is loaded');
          $('#no_flicker').hide();
          // logger.info('\n' + 'cookie ' +  cookie_names.user_state + ' successfully loaded after: ' + interval_count * 25 + ' ms');
          // initial theme data
          if (user_state.theme_css === '') {
            user_state.theme_name       = default_theme_name;
            user_state.theme_css        = default_theme_css;
            user_state.theme_author     = default_theme_author;
            user_state.theme_author_url = default_theme_author_url;
            cookie_written = j1.writeCookie({
              name:     cookie_names.user_state,
              data:     user_state,
              secure:   secure,
              expires:  365
            });
            if (!cookie_written) {
             logger.error('\n' + 'failed to write cookie: ' + cookie_names.user_consent);
            }
          } // END if user_state theme_css === ''
          // set the theme switcher state
          user_state.theme_switcher = themesOptions.enabled;
          if (themesOptions.enabled) {
             // enable BS ThemeSwitcher
             logger.info('\n' + 'themes detected as: ' + themesOptions.enabled);
             logger.info('\n' + 'remote themes are being initialized');
             /* eslint-disable */
             // load list of remote themes
             $('#remote_themes').ThemeSwitcher.defaults = {
               debug:                    themesOptions.debug,
               saveToCookie:             themesOptions.saveToCookie,
               cssThemeLink:             themesOptions.cssThemeLink,
               cookieThemeName:          themesOptions.cookieThemeName,
               cookieDefaultThemeName:   themesOptions.cookieDefaultThemeName,
               cookieThemeCss:           themesOptions.cookieThemeCss,
               cookieThemeExtensionCss:  themesOptions.cookieThemeExtensionCss,
               cookieExpiration:         themesOptions.cookieExpiration,
               cookiePath:               themesOptions.cookiePath,
               defaultCssFile:           themesOptions.defaultCssFile,
               bootswatchApiUrl:         themesOptions.bootswatchApiUrl,
               bootswatchApiVersion:     themesOptions.bootswatchApiVersion,
               loadFromBootswatch:       themesOptions.loadFromBootswatch,
               localFeed:                themesOptions.localThemes,
               excludeBootswatch:        themesOptions.excludeBootswatch,
               includeBootswatch:        themesOptions.includeBootswatch,
               skipIncludeBootswatch:    themesOptions.skipIncludeBootswatch
             };
             /* eslint-enable */
           } else {
             logger.debug('\n' + 'themes detected as: disabled');
             logger.debug('\n' + 'no remote themes are available');
          } // END if themesOptions enabled
          // validate theme to be loaded
          urlExists(user_state.theme_css, function(success) {
             // load  theme
             if (success) {
               // continue processing if page is ready
               var dependencies_met_theme_loaded = setInterval (function () {
                 if (j1.getState() == 'finished') {
                   theme_css_html = '<link rel="stylesheet" id="' + id + '" href="' + user_state.theme_css + '" type="text/css">';
                   $('head').append(theme_css_html);
                   clearInterval(dependencies_met_theme_loaded);
                 }
               }, 10); // END dependencies_met_theme_loaded
             } else {
               // invalid theme, fallback on default
               logger.warn('\n' + 'themes CSS invalid: ' + user_state.theme_css);
               theme_css_html = '<link rel="stylesheet" id="' + id + '" href="' + default_theme_css + '" type="text/css">';
               logger.debug('\n' + 'set default theme :' + default_theme_name);
               logger.debug('\n' + 'theme CSS loaded: ' + default_theme_css);
               $('head').append(theme_css_html);
               // write theme defaults to cookie
               user_state.theme_name       = default_theme_name;
               user_state.theme_css        = default_theme_css;
               user_state.theme_author     = default_theme_author;
               user_state.theme_author_url = default_theme_author_url;
               cookie_written = j1.writeCookie({
                 name:     cookie_names.user_state,
                 data:     user_state,
                 secure:   secure,
                 expires:  365
               });
               if (!cookie_written) {
                 logger.error('\n' + 'failed to write cookie: ' + cookie_names.user_consent);
               }
               // reload page using the default thme
               location.reload(true);
             }
           });
          clearInterval(dependencies_met_page_ready);
        }
      }, 10); // END dependencies_met_page_ready
      // set final module state if theme loaded
      var dependencies_met_theme_applied = setInterval (() => {
        user_state  = j1.readCookie(cookie_names.user_state);
        styleLoaded = styleSheetLoaded(user_state.theme_css);
        if (styleLoaded) {
          // show page (theme is loaded)
          logger.info('\n' + 'theme loaded successfully: ' + user_state.theme_name);
          logger.debug('\n' + 'theme CSS loaded: ' + user_state.theme_css);
          logger.info('\n' + 'show page on theme loaded');
          $('#no_flicker').show();
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module finished');
          endTimeModule = Date.now();
          logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval(dependencies_met_theme_applied);
        } // ENF if styleLoaded
      }, 10); // END dependencies_met_theme_applied
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



