

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/rouge.js
 # J1 Adapter for rouge
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # Note:
 #  https://github.com/jirutka/asciidoctor-rouge/issues/9
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-04-25 16:41:58 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
/* eslint quotes: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.rouge = ((j1, window) => {
  var environment             = 'development';
  var moduleOptions           = {};
  var user_state              = {};
  var cookie_names            = j1.getCookieNames();
  var cookie_user_state_name  = cookie_names.user_state;
  var state                   = 'not_started';
  var user_state_detected;
  var themeCss;
  var darkTheme;
  var _this;
  var logger;
  var logText;
  // date|time
  var startTime;
  var endTime;
  var startTimeModule;
  var endTimeModule;
  var timeSeconds;
  var templateOptions = $.extend({}, {"monitor":{"performance_observer":false}, "theme":{"name":"UnoLight", "author":"J1 Team", "author_url":"https://jekyll.one/"}, "css":{"custom_scss":false, "custom_css":false}, "typography":{"rtext":true, "rtext_size":300}, "asset_path":"/assets/themes/j1", "app_path":"/assets/apps", "image_path":"/assets/images", "archive_path":"/builder/posts/timeline", "categories_path":"/builder/categories", "tags_path":"/builder/tags", "about-site-url":"/pages/public/about/site/", "user_info_url":"/pages/public/legal/en/privacy/", "theme_author_url":"https://jekyll.one", "runtime_data_path":"/assets/data/runtime-data.yml", "message_catalog_data_path":"/assets/data/messages.yml", "colors_data_path":"/assets/data/colors.json", "font_size_data_path":"/assets/data/font_sizes.json", "country_data_path":"/assets/data/countries.json", "cookies":{"app_session":"j1.app.session", "user_session":"j1.user.session", "user_state":"j1.user.state", "user_consent":"j1.user.consent", "user_translate":"j1.user.translate", "chat_prompt":"j1.chat_prompt", "search_prompt":"j1.search_prompt"}, "prettify":true, "pages":null, "page_on_load_timeout":1000, "timeoutScrollDynamicPages":1000, "scrollDynamicPagesTopOnChange":false, "body":{"scrollbar":false, "background-color":"md_gray_50", "font-color":"md_gray_900", "font-size":"1em", "font-weight":400, "line-height":1.5, "animation":true, "animation_type":"fadeIn", "animation_duration":2}, "posts":{"category_blacklist":["posts", "public", "private", "protected", "featured", "series", "qa"]}, "user":{"provider":"j1", "provider_site_url":"https://jekyll.one", "provider_home_url":"https://jekyll.one", "provider_blog_url":"/pages/public/blog/navigator/", "provider_member_url":"/pages/public/learn/whats_up/", "provider_privacy_url":"/pages/public/legal/en/privacy/", "user_name":"guest", "status":"active", "provider_membership":"guest", "provider_permissions":["public"]}, "bootstrap":{"default_theme":"bootstrap", "cards":{"card_deck":{"break_on_sm":1, "break_on_md":2, "break_on_lg":3, "break_on_xl":3}}, "tooltips":{"enabled":true, "trigger":"hover"}, "popovers":{"enabled":true, "trigger":"hover"}}, "rouge":{"theme_light":"uno.light", "theme_dark":"uno.dark"}, "fa":{"color":"default"}, "preload":{"image":{"preload":false, "files":["/assets/images/modules/icons/j1/j1-512x512.png"]}, "font":{"preload":false, "cors":"crossorigin", "fonts":[]}, "css":{"preload":false, "css":["/assets/themes/j1/core/css/themes/unolight/bootstrap", "/assets/themes/j1/core/css/vendor"], "files":[]}, "js":{"preload":false, "js":["/assets/themes/j1/modules/bmd/js/bmd", "/assets/themes/j1/modules/backstretch/js/backstretch", "/assets/themes/j1/core/js/template"], "files":["/assets/themes/j1/adapter/js/attic.js", "/assets/themes/j1/adapter/js/logger.js", "/assets/themes/j1/adapter/js/bmd.js", "/assets/themes/j1/adapter/js/navigator.js"]}}, "preconnect":{"enabled":true, "urls":["https://bootswatch.com"]}});
  // ---------------------------------------------------------------------------
  // helper functions
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // main
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // helper functions
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // adapter initializer
    // -------------------------------------------------------------------------
    init: (options) => {
      // -----------------------------------------------------------------------
      // default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.rouge',
        generated:   '2024-04-25 16:41:58 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.rouge;
      logger  = log4javascript.getLogger('j1.adapter.rouge');
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependency_met_page_ready = setInterval(() => {
        var pageState      = $('#content').css("display");
        var pageVisible    = (pageState === 'block') ? true : false;
        var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
        if (j1CoreFinished && pageVisible) {
          startTimeModule = Date.now();
          _this.setState('started');
          logger.debug('\n' + 'set module state to: ' + _this.getState());
          logger.info('\n' + 'initializing module: started');
          // Detect|Set J1 UserState
          user_state_detected = j1.existsCookie(cookie_user_state_name);
          if (user_state_detected) {
            user_state  = j1.readCookie(cookie_user_state_name);
            themeCss    = user_state.theme_css;
            darkTheme   = themeCss.includes('dark') ||
                          themeCss.includes('cyborg') ||
                          themeCss.includes('darkly') ||
                          themeCss.includes('slate') ||
                          themeCss.includes('superhero');
          } else {
            log_text = '\n' + 'user_state cookie not found';
            logger.warn(log_text);
          }
          $('.dropdown-menu a').click(() => {
            $('#selected-theme').html('Current selection: <div class="md-gray-900 mt-1 p-2" style="background-color: #BDBDBD; font-weight: 700;">' +$(this).text() + '</div>');
          });
          // disable (Google) translation for all highlight HTML elements
          // used for rouge
          // see: https://www.codingexercises.com/replace-all-instances-of-css-class-in-vanilla-js
          //
          var highlight = document.getElementsByClassName('highlight');
          [...highlight].forEach((x) => {
           if (!x.className.includes('notranslate')) {
             x.className += " notranslate"
           }
          });
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module: finished');
          endTimeModule = Date.now();
          logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval(dependency_met_page_ready);
        } // END if pageVisible
      }, 10); // END dependency_met_page_ready
      var dependencies_met_rouge_finished = setInterval(() => {
        var moduleFinished = (j1.adapter.rouge.getState() === 'finished') ? true : false;
        if (moduleFinished) {
          if (darkTheme) {
            j1.adapter.rouge.reaplyStyles(templateOptions.rouge.theme_dark);
          } else {
            j1.adapter.rouge.reaplyStyles(templateOptions.rouge.theme_light);
          }
          clearInterval(dependencies_met_rouge_finished);
        } //  END if darkTheme
      }, 10); // END dependencies_met_rouge_finished
    }, // END init
    // -------------------------------------------------------------------------
    // reaplyStyles()
    // load|apply new rouge theme
    // -------------------------------------------------------------------------
    reaplyStyles: (themename) => {
      _this.removeAllRougeStyles();
      _this.addStyle(themename);
      return true;
    },
    // -------------------------------------------------------------------------
    // removeAllRougeStyles()
    // remove existing rouge theme CSS (from section <head>)
    // -------------------------------------------------------------------------
    removeAllRougeStyles: () => {
      $('link[rel=stylesheet][href*="/assets/themes/j1/modules/rouge"]').remove();
    },
    // -------------------------------------------------------------------------
    // addStyle()
    // add rouge theme CSS (to section <head>)
    // -------------------------------------------------------------------------
    addStyle: (themename) => {
      $('<link>').attr('rel','stylesheet')
      .attr('type','text/css')
      .attr('href','/assets/themes/j1/modules/rouge/css/' +themename+ '/theme.min.css')
      .appendTo('head');
    },
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



