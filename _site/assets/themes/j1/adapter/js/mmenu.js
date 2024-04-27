

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/mmenu.js
 # JS Adapter for J1 MobileMenu (MMenu Light)
 #
 # Product/Info:
 # 
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see 
 # -----------------------------------------------------------------------------
 # NOTE: For AJAX (XHR) loads see
 #  https://stackoverflow.com/questions/3709597/wait-until-all-jquery-ajax-requests-are-done
 # -----------------------------------------------------------------------------
 # NOTE: For getStyleValue helper see
 #  https://stackoverflow.com/questions/16965515/how-to-get-a-style-attribute-from-a-css-class-by-javascript-jquery
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
j1.adapter.mmenu = ((j1, window) => {
  var environment     = 'development';
  var dclFinished     = false;
  var moduleOptions   = {};
  var navMenuOptions  = {};
  var themesOptions   = {};
  var cookie_names    = j1.getCookieNames();
  var themesEnabled   = true;
  var state           = 'not_started';
  var user_state;
  var user_session;
  var user_data;
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
  // main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // adapter initializer
    // -------------------------------------------------------------------------
    init: (options) => {
      // -----------------------------------------------------------------------
      // default module settings
      // -----------------------------------------------------------------------
      var settings  = $.extend({
        module_name: 'j1.adapter.mmenu',
        generated:   '2024-04-25 16:41:58 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      _this         = j1.adapter.mmenu;
      logger        = log4javascript.getLogger('j1.adapter.mmenu');
      // initialize state flag
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      // -----------------------------------------------------------------------
      // options loader
      // -----------------------------------------------------------------------
      /* eslint-disable */
      navMenuOptions = $.extend({}, {"enabled":true, "nav_main_menu":"navigator_nav_menu", "nav_quicklinks":"quicklinks", "mmenu_plugin":{"node":"null", "mediaQuery":"all", "max_width":100000}, "mmenu_navigator":{"selected":"Selected", "slidingSubmenus":true, "title":"Navigation", "theme":"dark"}, "mmenu_drawer":{"position":"right"}, "menus":[{"menu":{"enabled":true, "xhr_container_id":"navigator_nav_mmenu", "xhr_data_element":"menu_mmenu", "xhr_data_path":"/assets/data/mmenu/index.html", "drawer":{"position":"right"}, "content":{"id":"menu_mmenu", "type":"navigation", "title":"Navigation", "theme":"dark", "button":"#mmenu-button", "button_activated":"always"}}}, {"menu":{"enabled":true, "xhr_container_id":"navigator_toc_mmenu", "xhr_data_element":"toc_mmenu", "xhr_data_path":"/assets/data/mmenu_toc/index.html", "drawer":{"position":"right"}, "content":{"id":"toc_mmenu", "type":"drawer", "title":"Table of Contents", "theme":"dark", "button":"#open_mmenu_toc", "button_activated":"js-toc-content"}}}, {"menu":{"enabled":false, "xhr_container_id":"navigator_sidebar_mmenu", "xhr_data_element":"sidebar_mmenu", "xhr_data_path":"/assets/data/mmenu_sidebar/index.html", "drawer":{"position":"left"}, "content":{"id":"sidebar_mmenu", "type":"drawer", "title":"Site Info", "theme":"dark", "button":"#navbar-brand", "button_activated":"always", "boxes":[{"box":{"enabled":true, "type":"theme_info", "title":"Theme", "links":[{"title":"Name", "icon":"theme-light-dark", "value":"??theme-name", "href":"/pages/public/previewer/current_theme/", "target":"none"}, {"title":"Author", "icon":"grease-pencil", "value":"??theme-author", "href":"??theme-author-url", "target":"_blank"}, {"title":"Version", "icon":"numeric", "value":"??theme-version", "href":"/pages/public/previewer/current_theme/", "target":"none"}]}}, {"box":{"enabled":false, "type":"site_info", "title":"Site", "links":[{"title":"About", "icon":"home-outline", "href":"/pages/public/about/site/", "target":"none"}, {"title":"Impress", "icon":"alert-outline", "href":"/pages/public/legal/en/impress/", "target":"none"}, {"title":"Privacy", "icon":"heart", "href":"/pages/public/legal/en/privacy/", "target":"none"}, {"title":"License", "icon":"checkbox-multiple-marked-circle-outline", "href":"/pages/public/legal/en/license_agreement/", "target":"none"}]}}, {"box":{"enabled":false, "type":"user_info", "title":"User", "links":[{"title":"Provider", "value":"??provider", "href":"??provider-site-url", "target":"_blank", "icon":"domain"}, {"title":"User", "icon":"account", "value":"??user-name", "href":"??provider_member_url", "target":"none"}, {"title":"Permissions", "icon":"account-check", "value":"??provider-permissions", "href":"??provider_member_url", "target":"none"}, {"title":"Membership", "icon":"account-settings", "value":"??provider-membership", "href":"??provider_member_url", "target":"none"}, {"title":"Cookies", "icon":"cookie", "value":"??cookie-state", "href":"??provider_privacy_url", "target":"none"}]}}]}}}]});
      themesOptions  = $.extend({}, {"enabled":true, "debug":false, "saveToCookie":true, "reloadPageOnChange":false, "retries":30, "preview_page":"/pages/public/tools/previewer/current_theme/", "menu_icon_family":"mdib", "menu_icon_color":"var(--md-gray-500)", "menu_icon_size":"mdib-sm", "cssThemeLink":"bootstrapTheme", "defaultCssFile":"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css", "bootswatchApiUrl":"https://bootswatch.com/api", "bootswatchApiVersion":5, "loadFromBootswatch":true, "localThemes":"/assets/data/themes.json", "excludeBootswatch":"Default, default, Lux, Sketchy", "includeBootswatch":"", "skipIncludeBootswatch":""});
      /* eslint-enable */
      var xhr_data_path;
      var menu_id;
      // save config settings into the mmenu object for global access
      //
      _this['navMenuOptions'] = navMenuOptions;
      // Load (individual) frontmatter options (currently NOT used)
      //
      if (options != null) { var frontmatterOptions = $.extend({}, options); }
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependency_met_page_ready = setInterval (() => {
        var pageState      = $('#content').css("display");
        var pageVisible    = (pageState === 'block') ? true : false;
        var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
        if (j1CoreFinished && pageVisible) {
          startTimeModule = Date.now();
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          _this.mmenuLoader(navMenuOptions);
          clearInterval(dependency_met_page_ready);
        } // END if pageVisible
      }, 10); // END dependency_met_page_ready
    }, // END init
    // -------------------------------------------------------------------------
    // MMenu Loader
    // -------------------------------------------------------------------------
    mmenuLoader: (mmOptions) => {
      var menu_id;
      var xhr_data_path;
      _this.setState('loading');
      logger.debug('\n' + 'status: ' + _this.getState());
      logger.debug('\n' + 'load HTML data for navs and drawers');
      // -----------------------------------------------------------------------
      // Load HTML data (AJAX)
      // -----------------------------------------------------------------------
      // jadams, 202-06-24: Promise (chain) if $.when seems NOT to work correctly.
      // It semms a chain using .then will be a better solution to make it sure
      // that the last Deferred set the state to 'data_loaded'.
      // Found the final state randomly set to 'null' what prevent the module
      // to run mmenuInitializer.
      // Workaround: Set 'data_loaded' to be returned by all Deferred in
      // the chain.
      // See: https://stackoverflow.com/questions/5436327/jquery-deferreds-and-promises-then-vs-done
      //
      j1.loadHTML ({
        xhr_container_id:   'navigator_nav_mmenu',
        xhr_data_path:      '/assets/data/mmenu/index.html',
        xhr_data_element:   'menu_mmenu' },
        'j1.adapter.mmenu',
        'null');
      j1.loadHTML ({
        xhr_container_id:   'navigator_toc_mmenu',
        xhr_data_path:      '/assets/data/mmenu_toc/index.html',
        xhr_data_element:   'toc_mmenu' },
        'j1.adapter.mmenu',
        'null');
       // ENDFOR menus
      logger.info('\n' + 'initialize navs and drawers');
      _this.mmenuInitializer(mmOptions);
      _this.setState('finished');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'initializing module: finished');
      endTimeModule = Date.now();
      logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
    }, // END dataLoader
    // -------------------------------------------------------------------------
    // MMenu Initializer
    // -------------------------------------------------------------------------
    mmenuInitializer: (mmOptions) => {
      var menu_id;
      var xhr_data_path;
      menu_id           = 'navigator_nav_mmenu';
      xhr_data_path     = '/assets/data/mmenu/index.html';
      // Create an mmenu instance if id exists: navigator_nav_mmenu
      if ($('#navigator_nav_mmenu').length) {
        logger.info('\n' + 'mmenu is being initialized on id: navigator_nav_mmenu');
        // Create an mmenu instance of type NAVIGATION
        logger.info('\n' + 'found content type: NAVIGATION');
        // ---------------------------------------------------------------------
        // menu initializer (NAVIGATION)
        // ---------------------------------------------------------------------
        // NOTE: Run load check (j1.xhrDataState) before initialization
        //
        logger.debug('\n' + 'initialize mmenu on id: #navigator_nav_mmenu');
        var dependencies_met_navigator_nav_mmenu_loaded = setInterval (() => {
          if (j1.xhrDataState['#navigator_nav_mmenu'] == 'success' ) {
            logger.debug('\n' + 'met dependencies for: navigator_nav_mmenu');
            const menu_selector = document.querySelector('#navigator_nav_mmenu');
            const mmenu_navigator_nav_mmenu = new MmenuLight (
              menu_selector,
              '(max-width: ' + mmOptions.mmenu_plugin.max_width +'px)', {
              // plugin options
              node:             mmOptions.mmenu_plugin.node,
              mediaQuery:       mmOptions.mmenu_plugin.mediaQuery
            });
            const drawer_navigator_nav_mmenu = mmenu_navigator_nav_mmenu.offcanvas ({
              // drawer options
              position: mmOptions.mmenu_drawer.position,
              toggle_mode: false
            });
            const navigator_navigator_nav_mmenu = mmenu_navigator_nav_mmenu.navigation ({
              // navigator options
              selected:         mmOptions.mmenu_navigator.selected,
              slidingSubmenus:  mmOptions.mmenu_navigator.slidingSubmenus,
              title:            mmOptions.mmenu_navigator.title,
              theme:            mmOptions.mmenu_navigator.theme
            });
            // make sure the QL menu is shown, if mmenu is closed
            // by clicking the mmenu backdrop
            //
            $('.mm-ocd__backdrop').click(function (e) {
              // suppress default actions|bubble up
              e.preventDefault();
              e.stopPropagation();
              $('#quicklinks').show();
              return false
            });
            // Toggle Bars (Hamburger) for the NavBar to open|close
            // the mmenu drawer
            //
            $('#mmenu-button').each(function (e) {
              var $this = $(this);
              var clicked;
              $this.on('click', function (e) {
                // suppress default actions|bubble up
                e.preventDefault();
                e.stopPropagation();
                const button_navigator_nav_mmenu = this;
                // toggle mmenu open|clse
                clicked = $('body.mm-ocd-opened').length ? true : false;
                if (clicked) {
                  drawer_navigator_nav_mmenu.close();
                  $('#quicklinks').show();
                  clicked = false;
                } else {
                  $('#quicklinks').hide();
                  drawer_navigator_nav_mmenu.open();
                  clicked = true;
                }
              });
            });
            // jadams, 2020-09-30: loading the menues (themes) if enabled
            if (themesEnabled) {
              // load REMOTE themes from Bootswatch API (localFeed EMPTY!)
              $('#remote_themes_mmenu').ThemeSwitcher({
                localFeed: '',
                bootswatchApiVersion: themesOptions.bootswatchApiVersion
              });
              // load LOCAL themes from JSON data
              $('#local_themes_mmenu').ThemeSwitcher({
                localFeed: themesOptions.localThemes
              });
            }
            $('#menu_mmenu').show();
            logger.debug('\n' + 'initializing mmenu finished on id: #navigator_nav_mmenu');
            clearInterval(dependencies_met_navigator_nav_mmenu_loaded);
          }; // END mmenu_loaded
        }, 10); // END dependencies_met_mmenu_loaded
         // ENDIF content_type: NAVIGATION
         // ENDIF content_type: DRAWER
        } // END menus|drawers
       // ENDIF menu enabled
      menu_id           = 'navigator_toc_mmenu';
      xhr_data_path     = '/assets/data/mmenu_toc/index.html';
      // Create an mmenu instance if id exists: navigator_toc_mmenu
      if ($('#navigator_toc_mmenu').length) {
        logger.info('\n' + 'mmenu is being initialized on id: navigator_toc_mmenu');
         // ENDIF content_type: NAVIGATION
          // Create an mmenu instance of type HTML
          logger.info('\n' + 'found content type: DRAWER');
          // -------------------------------------------------------------------
          // menu initializer (DRAWER)
          // -------------------------------------------------------------------
          // TODO: Check if Toggle button make sense/should be implemented
          // NOTE: Run load check (j1.xhrDataState) before initialization
          //
          logger.debug('\n' + 'initialize mmenu on id: #navigator_toc_mmenu');
          var dependencies_met_navigator_toc_mmenu_loaded = setInterval (() => {
            if (j1.xhrDataState['#navigator_toc_mmenu'] == 'success' && $('#open_mmenu_toc').length) {
              logger.debug('\n' + 'met dependencies for: xhrData/navigator_toc_mmenu');
              const menu_selector = document.querySelector('#navigator_toc_mmenu');
              const mmenu_navigator_toc_mmenu = new MmenuLight (
                menu_selector,
                '(max-width: ' + mmOptions.mmenu_plugin.max_width +'px)', {
                // plugin options
                node:             mmOptions.mmenu_plugin.node,
                mediaQuery:       mmOptions.mmenu_plugin.mediaQuery
              });
              const drawer_navigator_toc_mmenu = mmenu_navigator_toc_mmenu.offcanvas ({
                position: 'right'
              });
              // set an id on the drawer wrapper div for later use
              //
              drawer_navigator_toc_mmenu.wrapper.id = 'drawer_navigator_toc_mmenu';
              // monitor for state changes on the drawer
              //
              $('#drawer_navigator_toc_mmenu').attrchange({
                trackValues:  true,
                callback:     (event)  => {
                  logger.debug('\n' + 'hide|show the nav menu');
                  // switch off|on the (main) nav menu
                  $('#' + 'navigator_nav_navbar').toggle();
                  // $('#' + 'navbar-brand').toggle();
                  // $('#' + navMenuOptions.nav_main_menu).toggle();
                  // $('#' + navMenuOptions.nav_quicklinks).toggle();
                }
              });
              // button for the MMenu tocbar to open|close the toc drawer
              $('#open_mmenu_toc').each(function (e) {
                var $this = $(this);
                $this.on('click', function (e) {
                  var button_navigator_toc_mmenu = this;
                  var hasClass;
                  // suppress default actions|bubble up
                  e.preventDefault();
                  e.stopPropagation();
                  // check if the button should be activated
                  // e.g for TOC only if class js-toc-content is found
                  //
                  if ('js-toc-content' !== 'always') {
                    hasClass = $('main').hasClass('js-toc-content');
                  } else {
                    hasClass = true;
                  }
                  if (hasClass) {
                    e.preventDefault();
                    drawer_navigator_toc_mmenu.open();
                  } // END if hasclass
                });
              });
              logger.debug('\n' + 'met dependencies for: navigator_toc_mmenu loaded');
              $('#toc_mmenu').show();
              clearInterval(dependencies_met_navigator_toc_mmenu_loaded);
          }; // END if menu_loaded
        }, 10); // END dependencies_met_mmenu_loaded
        logger.debug('\n' + 'initializing mmenu finished on id: #navigator_toc_mmenu');
         // ENDIF content_type: DRAWER
        } // END menus|drawers
       // ENDIF menu enabled
        // ENDIF menu enabled
       // ENDFOR menus
    }, // END mmenuInitializer
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



