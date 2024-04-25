

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/navigator.js
 # JS Adapter for J1 Navigator
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
 # Adapter generated: 2024-04-25 16:34:03 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.navigator = ((j1, window) => {
  var environment                 = 'development';
  var dclFinished                 = false;
  var moduleOptions               = {};
  var state                       = 'not_started';
  var nav_menu_id                 = '';
  var nav_quicklinks_id           = '';
  var authclient_modals_id        = '';
  var authclient_xhr_data_element = 'authClientModals';
  var authclient_modals_data_path = '/assets/data/authclient/index.html';
  var nav_menu_data_path          = '';
  var nav_quicklinks_data_path    = '';
  var colors_data_path            = '';
  var font_size_data_path         = '';
  var cookie_names                = j1.getCookieNames();
  var cookie_user_session_name    = cookie_names.user_session;
  var navigatorCoreInitialized    = false;
  var themesEnabled               = true;
  var user_session                = {};
  var user_session_merged         = {};
  var session_state               = {};
  // switcher|state
  var desktopThemesLocalLoaded    =  false;
  var desktopThemesRemoteLoaded   =  false;
  var mobileThemesLocalLoaded     =  false;
  var mobileThemesRemoteLoaded    =  false;
  var switcher;
  var switcher_menu;
  var authClientEnabled;
  var appDetected;
  var json_data;
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
      var settings  = $.extend({
        module_name: 'j1.adapter.navigator',
        generated:   '2024-04-25 16:34:03 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      _this         = j1.adapter.navigator;
      logger        = log4javascript.getLogger('j1.adapter.navigator');
      // initialize state flag
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      // -----------------------------------------------------------------------
      // options loader
      // -----------------------------------------------------------------------
      /* eslint-disable */
      var authConfig                = {};
      var navDefaults               = {};
      var navBarConfig              = {};
      var navMenuConfig             = {};
      var navQuicklinksConfig       = {};
      var navAuthClientConfig       = {};
      var navBarOptions             = {};
      var navMenuOptions            = {};
      var navQuicklinksOptions      = {};
      var navAuthClientOptions      = {};
      var navAuthMAnagerConfig      = {};
      var user_state                = {};
      var cookie_names              = j1.getCookieNames();
      var cookie_user_state_name    = cookie_names.user_state;
      var themesOptions             = {};
      navDefaults                   = $.extend({}, {"enabled":true, "icon_family":"mdib", "icon_style":"mdib", "icon_color":"mdib-grey", "icon_size":"mdib-sm", "nav_primary_color":"var(--md-blue)", "nav_bar":{"enabled":false, "translation":"notranslate", "container_id":"navigator_nav_navbar", "media_breakpoint":"lg", "brand_position":"right", "brand_type":"image", "brand_type_collapsed":"text", "fixed":true, "style":"overlay", "color":"light", "nav_item_color":"var(--md-gray-900)", "nav_item_color_hover":"var(--md-gray-300)", "nav_item_background_image":"linear-gradient(var(--md-gray-500), var(--md-gray-900) 60%, var(--md-gray-900));", "position":"left", "bottom_line_height":1, "bottom_line_color":"var(--md-gray-300)", "background_color_full":"rgba(255, 255, 255, 0.8)", "background_color_scrolled":"var(--md-blue)"}, "nav_mmenu":{"enabled":false, "nav_main_menu":"navigator_nav_menu", "nav_quicklinks":"quicklinks", "mmenu_plugin":{"node":"null", "mediaQuery":"all", "max_width":100000}, "mmenu_navigator":{"selected":"Selected", "slidingSubmenus":true, "title":"Navigation", "theme":"dark"}, "mmenu_drawer":{"position":"right"}}, "nav_menu":{"enabled":false, "xhr_container_id":"navigator_nav_menu", "xhr_data_element":"desktop_menu", "xhr_data_path":"/assets/data/menu/index.html", "raised_level":5, "delay_menu_open":200, "max_height":600, "menu_font_size":"larger", "megamenu_font_size":"small", "icon_family":"mdib", "icon_style":"mdib", "icon_color":"var(--md-gray-500)", "icon_size":"mdib-sm", "menu_item_color":"var(--md-gray-900)", "menu_item_color_hover":"var(--md-gray-300)", "dropdown_style":"raised", "dropdown_color":"var(--md-blue)", "dropdown_left":12, "dropdown_item_style":"flat", "dropdown_animate":false, "dropdown_animate_in":"slideInDown", "dropdown_animate_out":"fadeOutDown", "dropdown_animate_duration":0.75, "dropdown_item_min_width":15, "dropdown_menu_max_height":35, "dropdown_font_size":"small", "dropdown_padding_x":18, "dropdown_padding_y":10, "dropdown_item_color":"var(--md-gray-900)", "dropdown_border_color":"var(--md-blue)", "dropdown_border_top":0, "dropdown_border_radius":2, "dropdown_background_color_hover":"var(--md-gray-300)", "dropdown_background_color_active":"var(--md-gray-500)"}, "nav_quicklinks":{"enabled":false, "xhr_container_id":"navigator_nav_quicklinks", "xhr_data_element":"quicklinks", "xhr_data_path":"/assets/data/quicklinks/index.html", "icon_family":"mdib", "icon_color":"var(--md-gray-900)", "icon_color_hover":"var(--md-gray-500)", "icon_size":"mdib-2x", "home_icon":"home-variant", "home_url":"/", "home_label":"Home", "disqus_icon":"disqus", "disqus_url":"none", "disqus_label":"Disqus", "github_icon":"github-circle", "github_url":"none", "github_label":"Github", "patreon_icon":"patreon", "patreon_url":"none", "patreon_label":"Patreon", "facebook_icon":"facebook", "facebook_url":"none", "facebook_label":"Facebook", "twitter_icon":"twitter", "twitter_url":"none", "twitter_label":"Twitter", "buymeacoffee_icon":"food", "buymeacoffee_url":"none", "buymeacoffee_label":"buymeacoffee", "docsearch_icon":"head-question", "docsearch_action":"documind", "docsearch_label":"Doc Search", "quicksearch_icon":"magnify", "quicksearch_action":"quicksearch", "quicksearch_label":"Search", "cookies_icon":"cookie", "cookies_action":"cookie-consent", "cookies_label":"Cookie Consent", "translate_icon":"google-translate", "translate_action":"translate", "translate_label":"Google Translate", "speak2me_icon":"speaker", "speak2me_action":"speak", "speak2me_label":"Speak2Me", "theme_toggler_icon":"lightbulb-outline", "theme_toggler_action":"themeToggler", "theme_toggler_label":"Theme Toggler", "r_text_icon":false, "r_text_action":"rtext", "r_text_label":"Text Resizer"}});
      navBarConfig                  = $.extend({}, {"enabled":true, "translation":"notranslate", "container_id":"navigator_nav_navbar", "media_breakpoint":"lg", "brand_position":"right", "brand_type":"image", "brand_type_collapsed":"text", "fixed":true, "style":"overlay", "color":"light", "nav_item_color":"var(--md-gray-900)", "nav_item_color_hover":"var(--md-gray-300)", "nav_item_background_image":"linear-gradient(var(--md-gray-500), var(--md-gray-900) 60%, var(--md-gray-900));", "position":"left", "bottom_line_height":1, "bottom_line_color":"var(--md-gray-300)", "background_color_full":"rgba(255, 255, 255, 0.8)", "background_color_scrolled":"var(--md-blue)"});
      navMenuConfig                 = $.extend({}, {"enabled":true, "xhr_container_id":"navigator_nav_menu", "xhr_data_element":"desktop_menu", "xhr_data_path":"/assets/data/menu/index.html", "raised_level":5, "delay_menu_open":200, "max_height":600, "menu_font_size":"larger", "megamenu_font_size":"small", "icon_family":"mdib", "icon_style":"mdib", "icon_color":"var(--md-gray-500)", "icon_size":"mdib-sm", "menu_item_color":"var(--md-gray-900)", "menu_item_color_hover":"var(--md-gray-300)", "dropdown_style":"raised", "dropdown_color":"var(--md-blue)", "dropdown_left":12, "dropdown_item_style":"flat", "dropdown_animate":false, "dropdown_animate_in":"slideInDown", "dropdown_animate_out":"fadeOutDown", "dropdown_animate_duration":0.75, "dropdown_item_min_width":15, "dropdown_menu_max_height":35, "dropdown_font_size":"small", "dropdown_padding_x":18, "dropdown_padding_y":10, "dropdown_item_color":"var(--md-gray-900)", "dropdown_border_color":"var(--md-blue)", "dropdown_border_top":0, "dropdown_border_radius":2, "dropdown_background_color_hover":"var(--md-gray-300)", "dropdown_background_color_active":"var(--md-gray-500)"});
      navQuicklinksConfig           = $.extend({}, {"enabled":true, "xhr_container_id":"navigator_nav_quicklinks", "xhr_data_element":"quicklinks", "xhr_data_path":"/assets/data/quicklinks/index.html", "icon_family":"mdib", "icon_color":"var(--md-gray-900)", "icon_color_hover":"var(--md-gray-500)", "icon_size":"mdib-2x", "home_icon":"home-variant", "home_url":"/", "home_label":"Home", "disqus_icon":"disqus", "disqus_url":"none", "disqus_label":"Disqus", "github_icon":"github-circle", "github_url":"none", "github_label":"Github", "patreon_icon":"patreon", "patreon_url":"none", "patreon_label":"Patreon", "facebook_icon":"facebook", "facebook_url":"none", "facebook_label":"Facebook", "twitter_icon":"twitter", "twitter_url":"none", "twitter_label":"Twitter", "buymeacoffee_icon":"food", "buymeacoffee_url":"none", "buymeacoffee_label":"buymeacoffee", "docsearch_icon":"head-question", "docsearch_action":"documind", "docsearch_label":"Doc Search", "quicksearch_icon":"magnify", "quicksearch_action":"quicksearch", "quicksearch_label":"Search", "cookies_icon":"cookie", "cookies_action":"cookie-consent", "cookies_label":"Cookie Consent", "translate_icon":"google-translate", "translate_action":"translate", "translate_label":"Google Translate", "speak2me_icon":"speaker", "speak2me_action":"speak", "speak2me_label":"Speak2Me", "theme_toggler_icon":"lightbulb-outline", "theme_toggler_action":"themeToggler", "theme_toggler_label":"Theme Toggler", "r_text_icon":false, "r_text_action":"rtext", "r_text_label":"Text Resizer"});
      navAuthClientConfig           = $.extend({}, {"enabled":true, "xhr_container_id":"authclient_modals", "xhr_data_element":"authClientModals", "xhr_data_path":"/assets/data/authclient/index.html", "signin_modal_id":"modalOmniSignIn", "hide_on_cookies_declined":true, "icon_family":"mdib", "signin_icon":"login", "signout_icon":"logout", "auth_signin_modal":{"title":"SignIn", "body_text":"In order to get *signed in*, check one of the options below and mark a provider for authentication. You'll be *redirected* to authenticate with the provider *selected*. If signed in *successfully*, you get back to this site for the page requested.\n\nNOTE: To get access to secured pages of this site, authentication with a provider is needed only *once*.\n"}, "auth_signout_modal":{"title":"SignOut", "body_text":"After signing out from this site, you'll be *redirected* to the *provider* you're currently authenticated. From your home page at the *provider*, you can *sign out* completely.\n\nNOTE: In order to signing out *completely*, check the switch below to *on*.\n"}, "auth_disqus":{"id":1, "title":"Disqus", "text":"SignIn to Disqus. Get access to all *PROTECTED* content pages of this site."}, "auth_github":{"id":2, "title":"Github", "text":"SignIn to Github. Get access to all *PROTECTED* content pages of this site."}});
      navAuthMAnagerConfig          = $.extend({}, {"enabled":true, "j1_auth":{"enabled":false, "ssl":false, "content":{"public":["\\W*((?i)assets(?-i))\\W*", "\\W*((?i)public(?-i))\\W*"], "protected":["\\W*((?i)protected(?-i))\\W*"], "private":["\\W*((?i)private(?-i))\\W*"]}, "providers":{"activated":["github", "disqus"], "disqus":{"provider_url":"https://disqus.com", "strategy":"member", "scope":[], "users":["all"], "permissions":["protected"], "data_fields":[], "conditions":{"protected":{"enabled":true, "users":{"blacklist":[]}}, "private":{"enabled":false, "users":{"whitelist":["all"], "blacklist":[]}}}}, "github":{"provider_url":"https://github.com", "strategy":"member", "scope":[], "users":["all"], "permissions":["protected", "private"], "data_fields":[], "conditions":{"protected":{"enabled":true, "users":{"blacklist":[]}}, "private":{"enabled":true, "users":{"whitelist":["all"], "blacklist":[]}}}}}}, "auth_client":{"enabled":true, "auth_signin_modal":{"title":"SignIn", "body_text":"In order to get *signed in*, check one of the options below and mark a provider for authentication. You'll be *redirected* to authenticate with the provider *selected*. If signed in *successfully*, you get back to this site for the page requested.\n\nNOTE: To get access to secured pages of this site, authentication with a provider is needed only *once*.\n"}, "auth_signout_modal":{"title":"SignOut", "body_text":"After signing out from this site, you'll be *redirected* to the *provider* you're currently authenticated. From your home page at the *provider*, you can *sign out* completely.\n\nNOTE: In order to signing out *completely*, check the switch below to *on*.\n"}, "auth_disqus":{"id":1, "title":"Disqus", "text":"SignIn to Disqus. Get access to all *PROTECTED* content pages of this site."}, "auth_github":{"id":2, "title":"Github", "text":"SignIn to Github. Get access to all *PROTECTED* content pages of this site."}}});
      authClientEnabled             = navAuthMAnagerConfig.enabled;
      themesOptions                 = $.extend({}, {"enabled":true, "debug":false, "saveToCookie":true, "reloadPageOnChange":false, "retries":30, "preview_page":"/pages/public/tools/previewer/current_theme/", "menu_icon_family":"mdib", "menu_icon_color":"var(--md-gray-500)", "menu_icon_size":"mdib-sm", "cssThemeLink":"bootstrapTheme", "defaultCssFile":"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css", "bootswatchApiUrl":"https://bootswatch.com/api", "bootswatchApiVersion":5, "loadFromBootswatch":true, "localThemes":"/assets/data/themes.json", "excludeBootswatch":"Default, default, Lux, Sketchy", "includeBootswatch":"", "skipIncludeBootswatch":""});
      // merge|overload module CONFIG by DEFAULTS
      navBarOptions                  = $.extend(true, {}, navDefaults.nav_bar,  navBarConfig);
      navMenuOptions                 = $.extend(true, {}, navDefaults.nav_menu, navMenuConfig);
      navQuicklinksOptions           = $.extend(true, {}, navDefaults.nav_bar,  navQuicklinksConfig,);
      navAuthClientConfig            = $.extend(true, {}, navAuthClientConfig,  navDefaults.nav_authclient);
      // save config settings for later use
      _this['navDefaults']           = navDefaults;
      _this['navBarOptions']         = navBarOptions;
      _this['navMenuOptions']        = navMenuOptions;
      _this['navQuicklinksOptions']  = navQuicklinksOptions;
      _this['navAuthClientConfig']   = navAuthClientConfig;
      _this['navAuthManagerConfig']  = navAuthMAnagerConfig;
      // load frontmatter options (currently NOT used)
      if (options !== null) {var frontmatterOptions = $.extend({}, options)}
      /* eslint-enable */
      // start module processing time
      startTimeModule = Date.now();
      // -----------------------------------------------------------------------
      // Load dymanic HTML data (AJAX)
      // -----------------------------------------------------------------------
      //
      // jadams, 202-06-24: Promise (chain) if $.when seems NOT to work correctly.
      // It seems a chain using .then will be a better solution to make it sure
      // that the last Deferred set the state to 'data_loaded'.
      // Found the final state randomly set to 'null' what prevent the module
      // to run mmenuInitializer.
      // Workaround: Set 'data_loaded' to be returned by all Deferred in
      // the chain.
      // See: https://stackoverflow.com/questions/5436327/jquery-deferreds-and-promises-then-vs-done
      // authclient_xhr_data_element
      //
      // -----------------------------------------------------------------------
      // data loaders
      // -----------------------------------------------------------------------
      j1.loadHTML({
        xhr_container_id:   navQuicklinksOptions.xhr_container_id,
        xhr_data_path:      navQuicklinksOptions.xhr_data_path,
        xhr_data_element:   navQuicklinksOptions.xhr_data_element },
        'j1.adapter.navigator',
        null);
      j1.loadHTML({
        xhr_container_id:   navAuthClientConfig.xhr_container_id,
        xhr_data_path:      navAuthClientConfig.xhr_data_path,
        xhr_data_element:   navAuthClientConfig.xhr_data_element },
        'j1.adapter.navigator',
        null);
      j1.loadHTML({
        xhr_container_id:   navMenuOptions.xhr_container_id,
        xhr_data_path:      navMenuOptions.xhr_data_path,
        xhr_data_element:   navMenuOptions.xhr_data_element },
        'j1.adapter.navigator',
        'data_loaded');
      // initialize navigator core
      var dependencies_met_html_loaded = setInterval(() => {
        var htmloaded = (j1.xhrDOMState['#'+navQuicklinksOptions.xhr_container_id] === 'success'
          && j1.xhrDOMState['#'+navAuthClientConfig.xhr_container_id] === 'success'
          && j1.xhrDOMState['#'+navMenuOptions.xhr_container_id] === 'success') ? true : false;
        // initialize navigator core if all AJAX loads finished
        if (htmloaded) {
          _this.setState('started');
          logger.debug('\n' + 'set module state to: ' + _this.getState());
          logger.info('\n' + 'initializing module: started');
          logger.info('\n' + 'initialize navigator core: started');
          j1.core.navigator.init (_this.navDefaults, _this.navMenuOptions);
          clearInterval(dependencies_met_html_loaded);
        } // END if htmloaded
      }, 10); // END dependencies_met_navigator_core_initialized
      if (themesEnabled) {
        logger.info('\n' + 'themes detected: enabled');
        logger.info('\n' + 'loading themes menu: started');
        // load
        var dependencies_met_navigator_core_initialized = setInterval(() => {
          if (navigatorCoreInitialized) {
            logger.info('\n' + 'initialize navigator core: finished');
            logger.info('\n' + 'loading theme menu: started');
            // load LOCAL themes (switcher)
            logger.debug('\n' + 'load local themes to menu');
            $('#local_themes').ThemeSwitcher({
              localFeed: themesOptions.localThemes
            });
            // load REMOTE themes (switcher)
            logger.debug('\n' + 'load remote themes to menu');
            $('#remote_themes').ThemeSwitcher({
              localFeed: '',
              bootswatchApiVersion: themesOptions.bootswatchApiVersion
            });
            clearInterval(dependencies_met_navigator_core_initialized);
          } // END if navigatorCoreInitialized
        }, 10); // END dependencies_met_navigator_core_initialized
      } // END if themesEnabled
      // -------------------------------------------------------------------
      // final initialization
      // -------------------------------------------------------------------
      var dependencies_met_module_initialized = setInterval (() => {
        var pageState          = $('#content').css("display");
        var pageVisible        = (pageState === 'block') ? true: false;
        var j1CoreFinished     = (j1.getState() === 'finished') ? true: false;
        var themesFinished     = (j1.adapter.themes.getState() === 'finished') ? true: false;
        var themeMenuLoaded    = (desktopThemesLocalLoaded && desktopThemesRemoteLoaded) ? true: false;
        if (pageVisible && j1CoreFinished && themesFinished && themeMenuLoaded) {
          // apply Navigator configuration settings
          logger.info('\n' + 'apply configuration settings');
          _this.applyNavigatorSettings (
            navDefaults, navBarOptions,
            navMenuOptions, navQuicklinksOptions
          );
          // apply general|global theme CSS settings
          logger.info('\n' + 'apply CSS styles');
          _this.applyThemeSettings (
            navDefaults, navBarOptions, navMenuOptions,
            navQuicklinksOptions
          );
          // detect J1 App state
          appDetected       = j1.appDetected();
          authClientEnabled = j1.authEnabled();
          if (appDetected && authClientEnabled) {
            logger.debug('\n' + 'application status detected: ' + appDetected);
            logger.debug('\n' + 'init auth client');
            _this.initAuthClient(_this.navAuthManagerConfig);
          } // END if
          // ----------------------------------------------------------------------
          // Register event 'reset on resize' to call j1.core.navigator on
          // manageDropdownMenu to manage the (current) NAV menu for
          // desktop or mobile
          // -----------------------------------------------------------------------
          $(window).on('resize', function () {
            j1.core.navigator.manageDropdownMenu(navDefaults, navMenuOptions);
            // Manage sticky NAV bars
            j1.core.navigator.navbarSticky();
            // Scroll the page one pixel back and forth to get
            // the right position for the toccer
            $(window).scrollTop($(window).scrollTop()+1);
            $(window).scrollTop($(window).scrollTop()-1);
          });
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module: finished');
          endTimeModule = Date.now();
          logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval(dependencies_met_module_initialized);
        } // END if
      }, 10); // END dependencies_met_module_initialized
    }, // END init
    // -------------------------------------------------------------------------
    // initialize JS portion for the dialogs (modals) used by J1AuthClient
    // NOTE: Currently cookie updates NOT processed at the NAV module
    //       All updates on Cookies are managed by Cookie Consent.
    //       To be considered to re-add cookie updates for the auth state
    // -------------------------------------------------------------------------
    initAuthClient: (auth_config) => {
      var logger       = log4javascript.getLogger('j1.adapter.navigator.initAuthClient');
      var user_session = j1.readCookie(cookie_user_session_name);
      _this.modalEventHandler(auth_config);
      if (j1.appDetected() && j1.authEnabled()) {
        // Toggle/Set SignIn/SignOut icon|link in QuickLinks
        // See: https://stackoverflow.com/questions/13524107/how-to-set-data-attributes-in-html-elements
        if (user_session.authenticated === 'true') {
          // Set SignOut
          $('#navLinkSignInOut').attr('data-bs-target', '#modalOmniSignOut');
          $('#iconSignInOut').removeClass('mdib-login').addClass('mdib-logout');
        } else {
          // Set SignIn
          $('#navLinkSignInOut').attr('data-bs-target', '#modalOmniSignIn');
          $('#iconSignInOut').removeClass('mdib-logout').addClass('mdib-login');
        }
      }
      return true;
    }, // END initAuthClient
    // -------------------------------------------------------------------------
    // modalEventHandler
    // Manage button click events for all BS Modals
    // See: https://www.nickang.com/add-event-listener-for-loop-problem-in-javascript/
    // -------------------------------------------------------------------------
    modalEventHandler: (options) => {
      // var logger      = log4javascript.getLogger('j1.adapter.navigator.EventHandler');
      var authConfig  = options.j1_auth;
      var route;
      var provider;
      var provider_url;
      var allowed_users;
      var logText;
      var signIn = {
        provider:         authConfig.providers.activated[0],
        users:            authConfig.providers[authConfig.providers['activated'][0]]['users'],
        do:               false
      };
      var signOut = {
        provider:         authConfig.providers.activated[0],
        providerSignOut:  false,
        do:               false
      };
      logText = '\n' + 'initialize button click events (modals)';
      logger.info(logText);
      // Manage button click events for modal "signInOutButton"
      // -----------------------------------------------------------------------
      $('ul.nav-pills > li').click(function (e) {
        // suppress default actions|bubble up
        e.preventDefault();
        e.stopPropagation();
        // jadams, 2019-07-30: To be checked if needed
        signIn.provider       = $(this).text().trim();
        signIn.provider       = signIn.provider.toLowerCase();
        signIn.allowed_users  = signIn.users.toString();
      });
      $('a.btn').click(function (e) {
        // suppress default actions|bubble up
        e.preventDefault();
        e.stopPropagation();
        if (this.id === 'signInButton') {
          signIn.do = true;
        } else {
          signIn.do = false;
        }
        if (this.id === 'signOutButton') {
          signOut.do = true;
        } else {
          signOut.do = false;
        }
      });
      $('input:checkbox[name="providerSignOut"]').on('click', function (e) {
        // suppress default actions|bubble up
        e.preventDefault();
        e.stopPropagation();
        signOut.providerSignOut = $('input:checkbox[name="providerSignOut"]').is(':checked');
        if (environment === 'development') {
          logText = '\n' + 'provider signout set to: ' + signOut.providerSignOut;
          logger.info(logText);
        }
      });
      // Manage pre events on modal "modalOmniSignIn"
      // -----------------------------------------------------------------------
      $('#modalOmniSignOut').on('show.bs.modal', function () {
          var modal = $(this);
          logger.info('\n' + 'place current user data');
          user_session = j1.readCookie(cookie_user_session_name);
          modal.find('.user-info').text('You are signed in to provider: ' + user_session.provider);
      }); // END SHOW modalOmniSignOut
      // Manage post events on modal "modalOmniSignIn"
      // -----------------------------------------------------------------------
      $('#modalOmniSignIn').on('hidden.bs.modal', function () {
        if (signIn.do === true) {
          provider      = signIn.provider.toLowerCase();
          allowed_users = signIn.users.toString();
          logText       = '\n' + 'provider detected: ' + provider;
          logger.info(logText);
          var route = '/authentication?request=signin&provider=' +provider+ '&allowed_users=' +allowed_users;
          logText = '\n' + 'call middleware for signin on route: ' + route;
          logger.info(logText);
          window.location.href = route;
        } else {
          provider = signIn.provider.toLowerCase();
          logText = '\n' + 'provider detected: ' + provider;
          logger.info(logText);
          logText = '\n' + 'login declined for provider: ' +provider;
          logger.info(logText);
        }
      }); // END post events "modalOmniSignIn"
      // Manage post events on modal "modalOmniSignOut"
      // -----------------------------------------------------------------------
      $('#modalOmniSignOut').on('hidden.bs.modal', function () {
        if (signOut.do === true) {
          logger.info('\n' + 'load active provider from cookie: ' + cookie_user_session_name);
          user_session  = j1.readCookie(cookie_user_session_name);
          provider      = user_session.provider;
          provider_url  = user_session.provider_site_url;
          logText = '\n' + 'provider detected: ' + provider;
          logger.info(logText);
          logText = '\n' + 'initiate signout for provider: ' +provider;
          logger.info(logText);
          var route = '/authentication?request=signout&provider=' + provider + '&provider_signout=' + signOut.providerSignOut; // + '/logout/';
          logText = '\n' + 'call middleware on route : ' +route;
          logger.info(logText);
          window.location.href = route;
        } else {
          provider = signOut.provider.toLowerCase();
          logText = '\n' + 'provider detected: ' + provider;
          logger.info(logText);
          logText = '\n' + 'signout declined for provider: ' +provider ;
          logger.info(logText);
        }
      }); // END post events "modalSignOut"
      logText = '\n' + 'initialize button click events (modals) completed';
      logger.info(logText);
      return true;
    }, // END modalEventHandler
    // -------------------------------------------------------------------------
    // applyThemeSettings
    // Apply CSS styles from current theme
    // -------------------------------------------------------------------------
    applyThemeSettings: (navDefaults, navBarOptions, navMenuOptions, navQuicklinksOptions) => {
      var logger            = log4javascript.getLogger('j1.adapter.navigator.applyThemeSettings');
      var gridBreakpoint_lg = '992px';
      var gridBreakpoint_md = '768px';
      var gridBreakpoint_sm = '576px';
      var navbar_scrolled_color;
      var navbar_scrolled_style;
      var bg_scrolled;
      var bg_collapsed;
      var style;
      // Set dymanic styles
      // -----------------------------------------------------------------------
      // read current background colors
      var bg_primary = $('#bg-primary').css('background-color');
      var bg_table   = $('body').css('background-color');
      // set navbar background colors
      bg_scrolled    = bg_primary;
      bg_collapsed   = bg_primary;
      // navBar styles
      var navPrimaryColor     = navDefaults.nav_primary_color;
      if (navBarOptions.background_color_scrolled == 'default' ) {
        navbar_scrolled_color = bg_primary;
      } else {
        navbar_scrolled_color = navBarOptions.background_color_scrolled;
      }
      navbar_scrolled_style  = '<style id="navbar_scrolled_color">';
      navbar_scrolled_style += '  .navbar-scrolled {';
      navbar_scrolled_style += '    background-color: ' + navbar_scrolled_color + ' !important;';
      navbar_scrolled_style += '  }';
      navbar_scrolled_style += '</style>';
      $('head').append(navbar_scrolled_style);
      // set current body background color for all tables
      $('table').css('background', bg_table);
      logger.debug('\n' + 'set dynamic styles for the theme');
      // set|resolve navMenuOptions
      navMenuOptions.dropdown_font_size               = navMenuOptions.dropdown_font_size;
      navMenuOptions.megamenu_font_size               = navMenuOptions.megamenu_font_size;
      // set|resolve navBarOptions
      navBarOptions.background_color_full             = navBarOptions.background_color_full;
      // set|resolve navMenuOptions
      navMenuOptions.menu_item_color                  = navMenuOptions.menu_item_color;
      navMenuOptions.menu_item_color_hover            = navMenuOptions.menu_item_color_hover;
      navMenuOptions.menu_item_dropdown_color         = navMenuOptions.menu_item_dropdown_color;
      navMenuOptions.dropdown_item_color              = navMenuOptions.dropdown_item_color;
      navMenuOptions.dropdown_background_color_hover  = navMenuOptions.dropdown_background_color_hover;
      navMenuOptions.dropdown_background_color_active = navMenuOptions.dropdown_background_color_active;
      navMenuOptions.dropdown_border_color            = navMenuOptions.dropdown_border_color;
      // set|resolve navQuicklinksOptions
      navQuicklinksOptions.icon_color                 = navQuicklinksOptions.icon_color;
      navQuicklinksOptions.icon_color_hover           = navQuicklinksOptions.icon_color_hover;
      navQuicklinksOptions.background_color           = navQuicklinksOptions.background_color;
      // timeline styles
      style  = '<style>';
      style += '  .timeline > li > .timeline-panel:after {';
      style += '    border-left: 14px solid ' + bg_scrolled + ';';
      style += '    border-right: 0 solid ' + bg_scrolled + ';';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      style  = '<style>';
      style += '  .tmicon {';
      style += '    background: ' + bg_scrolled + ';';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // heading styles
      style  = '<style>';
      style += '  .heading:after {';
      style += '    background: ' + bg_scrolled + ' !important;';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // cloud tag styles
      style  = '<style>';
      style += '  .tag-cloud ul li a {';
      style += '    background: ' + bg_scrolled + ' !important;';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // toccer styles
      style  = '<style>';
      style += '  .is-active-link::before {';
      style += '    background-color: ' + bg_scrolled + ' !important;';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // extended modal styles
      style  = '<style>';
      style += '  .modal-dialog.modal-notify.modal-primary .modal-header {';
      style += '    background-color: ' + bg_scrolled + ' !important;';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // nav|pills styles
      style  = '<style>';
      style += '  .nav-pills .nav-link.active, .nav-pills .show > .nav-link  {';
      style += '    background-color: ' + bg_scrolled + ' !important;';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      return true;
    }, // END applyThemeSettings
    // -------------------------------------------------------------------------
    // applyNavigatorSettings
    // Apply settings from configuration
    // -------------------------------------------------------------------------
    applyNavigatorSettings: (navDefaults, navBarOptions, navMenuOptions, navQuicklinksOptions) => {
      var logger              = log4javascript.getLogger('j1.adapter.navigator.applyThemeSettings');
      var gridBreakpoint_lg   = '992px';
      var gridBreakpoint_md   = '768px';
      var gridBreakpoint_sm   = '576px';
      var navPrimaryColor     = navDefaults.nav_primary_color;
      var navbar_scrolled_style;
      var navbar_scrolled_color = '#212529';
      navbar_scrolled_style  = '<style id="navbar_scrolled_color">';
      navbar_scrolled_style += '  .navbar-scrolled {';
      navbar_scrolled_style += '    background-color: ' + navbar_scrolled_color + ' !important;';
      navbar_scrolled_style += '  }';
      navbar_scrolled_style += '</style>';
      $('head').append(navbar_scrolled_style);
      logger.debug('\n' + 'set dynamic styles');
      // set|resolve navMenuOptions
      navMenuOptions.dropdown_font_size               = navMenuOptions.dropdown_font_size;
      navMenuOptions.megamenu_font_size               = navMenuOptions.megamenu_font_size;
      // set|resolve navBarOptions
      navBarOptions.background_color_full             = navBarOptions.background_color_full;
      // set|resolve navMenuOptions
      navMenuOptions.menu_item_color                  = navMenuOptions.menu_item_color;
      navMenuOptions.menu_item_color_hover            = navMenuOptions.menu_item_color_hover;
      navMenuOptions.menu_item_dropdown_color         = navMenuOptions.menu_item_dropdown_color;
      navMenuOptions.dropdown_item_color              = navMenuOptions.dropdown_item_color;
      navMenuOptions.dropdown_background_color_hover  = navMenuOptions.dropdown_background_color_hover;
      navMenuOptions.dropdown_background_color_active = navMenuOptions.dropdown_background_color_active;
      navMenuOptions.dropdown_border_color            = navMenuOptions.dropdown_border_color;
      // set|resolve navQuicklinksOptions
      navQuicklinksOptions.icon_color                 = navQuicklinksOptions.icon_color;
      navQuicklinksOptions.icon_color_hover           = navQuicklinksOptions.icon_color_hover;
      navQuicklinksOptions.background_color           = navQuicklinksOptions.background_color;
      // set dymanic styles
      var style;
      // read current background colors
      var bg_primary    = $('#bg-primary').css('background-color');
      var bg_table      = $('body').css('background-color');
      // set navbar background colors
      var bg_scrolled   = bg_primary;
      var bg_collapsed  = bg_primary;
      // navBar styles
      // -----------------------------------------------------------------------
      // set current body background color for all tables
      $('table').css('background', bg_table);
      // jadams, 2023-02-26: navbar settings
      style  = '<style>';
      style += '  li.nav-item > a {';
      style += '    color: ' + navBarOptions.nav_item_color + ' !important;';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // jadams, 2023-02-26: navbar settings
      style  = '<style>';
      style += '  li.nav-item > a:hover {';
      style += '    color: ' + navBarOptions.nav_item_color_hover + ' !important;';
      style += '    background-image: ' + navBarOptions.nav_item_background_image + ' !important;';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // jadams, 2023-02-26: navmenu settings
      style  = '<style>';
      style += '  li.dropdown.nav-item > a {';
      style += '    color: ' + navMenuOptions.menu_item_color + ' !important;';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // jadams, 2023-02-26: navmenu settings
      style  = '<style>';
      style += '  li.dropdown.nav-item > a:hover {';
      style += '    color: ' + navMenuOptions.menu_item_color_hover + ' !important;';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // jadams, 2023-02-26: navicon settings
      style  = '<style>';
      style += '  .nav-icon {';
      style += '    color: ' + navQuicklinksOptions.icon_color + ';';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // jadams, 2023-02-26: navicon settings
      style  = '<style>';
      style += '  .nav-icon:hover {';
      style += '    color: ' + navQuicklinksOptions.icon_color_hover + ';';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      style  = '<style>';
      style += '  var(--bg-primary) {';
      style += '    color: ' + bg_scrolled;
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // size of brand image
      style  = '<style>';
      style += '  .navbar-brand > img {';
      style += '     height: 48pxpx !important;';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // navbar transparent-light (light)
      style  = '<style>';
      style += '  @media screen and (min-width: ' + gridBreakpoint_lg + ') {';
      style += '    nav.navbar.navigator.navbar-transparent.light {';
      style += '      background-color: ' + navBarOptions.background_color_full + ' !important;';
      style += '      border-bottom: solid 0px !important;';
      style += '    }';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // style  = '<style>';
      // style += '  @media screen and (min-width: ' + gridBreakpoint_lg + ') {';
      // style += '    nav.navbar.navigator.navbar-scrolled.light {';
      // style += '      background-color: ' + bg_scrolled + ' !important;';
      // style += '    }';
      // style += '  }';
      // style += '</style>';
      // $('head').append(style);
      style  = '<style id="dynNav">';
      style += '  @media screen and (max-width: ' + gridBreakpoint_md + ') {';
      style += '    nav.navbar.navigator.navbar-transparent.light {';
      style += '      background-color: ' + navBarOptions.background_color_full + ' !important;';
      style += '      border-bottom: solid 0px !important;';
      style += '    }';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // style  = '<style id="dynNav">';
      // style += '  @media screen and (max-width: ' + gridBreakpoint_md + ') {';
      // style += '    nav.navbar.navigator.navbar-scrolled.light {';
      // style += '      background-color: ' + bg_scrolled + ' !important;';
      // style += '    }';
      // style += '  }';
      // style += '</style>';
      // $('head').append(style);
      style  = '<style id="dynNav">';
      style += '  @media screen and (min-width: ' + gridBreakpoint_md + ') {';
      style += '    nav.navbar.navigator.navbar-transparent.light {';
      style += '      background-color: ' + navBarOptions.background_color_full + ' !important;';
      style += '      border-bottom: solid 0px !important;';
      style += '    }';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // style  = '<style id="dynNav">';
      // style += '  @media screen and (min-width: ' + gridBreakpoint_md + ') {';
      // style += '    nav.navbar.navigator.navbar-scrolled.light {';
      // style += '      background-color: ' + bg_scrolled + ' !important;';
      // style += '    }';
      // style += '  }';
      // style += '</style>';
      // $('head').append(style);
      style  = '<style id="dynNav">';
      style += '  @media screen and (max-width: ' + gridBreakpoint_sm + ') {';
      style += '    nav.navbar.navigator.navbar-transparent.light {';
      style += '      background-color: ' + navBarOptions.background_color_full + ' !important;';
      style += '      border-bottom: solid 0px !important;';
      style += '    }';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // style  = '<style id="dynNav">';
      // style += '  @media screen and (max-width: ' + gridBreakpoint_sm + ') {';
      // style += '    nav.navbar.navigator.navbar-scrolled.light {';
      // style += '      background-color: ' + bg_scrolled + ' !important;';
      // style += '    }';
      // style += '  }';
      // style += '</style>';
      // $('head').append(style);
      // quick link styles
      style  = '<style>';
      style += '  .quicklink-nav> ul > li > a {';
      style += '    color: ' + navQuicklinksOptions.icon_color + ' !important;';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      style  = '<style>';
      style += '  .quicklink-nav> ul > li > a:hover {';
      style += '    color: ' + navQuicklinksOptions.icon_color_hover + ' !important;';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // nav menu styles
      // -----------------------------------------------------------------------
      // Remove background for anchor
      style  = '<style>';
      style += '  .dropdown-menu > .active > a {';
      style += '    background-color: transparent !important;';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // hover menu-item|menu-sub-item
      style  = '<style>';
      style += '  @media screen and (min-width: ' + gridBreakpoint_lg + ') {';
      style += '    nav.navbar.navigator .dropdown-item:focus,';
      style += '    nav.navbar.navigator .dropdown-item:hover,';
      style += '    nav.navbar.navigator .nav-sub-item:focus,';
      style += '    nav.navbar.navigator .nav-sub-item:hover {';
      style += '       background: ' + navMenuOptions.dropdown_background_color_hover + ' !important;';
      style += '    }';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // limit 1st dropdown item width
      style  = '<style>';
      style += '  @media screen and (min-width: ' + gridBreakpoint_lg + ') {';
      style += '    nav.navbar.navigator ul.nav.navbar-right .dropdown-menu .dropdown-menu  {';
      style += '       left: -' + navMenuOptions.dropdown_item_min_width + 'rem !important;';
      style += '    }';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      //  set dropdown item colors
      style  = '<style>';
      style += '  @media screen and (min-width: ' + gridBreakpoint_lg + ') {';
      style += '    nav.navbar.navigator ul.nav > li > a  {';
      style += '       color: ' + navMenuOptions.menu_item_color + ' !important;';
      style += '    }';
      style += '  }';
      style += '</style>';
      style  = '<style>';
      style += '  @media screen and (min-width: ' + gridBreakpoint_lg + ') {';
      style += '    nav.navbar.navigator ul.nav > li > a:hover {';
      style += '       color: ' + navMenuOptions.menu_item_color_hover + ' !important;';
      style += '    }';
      style += '  }';
      style += '</style>';
      // 1st level dropdown menu styles
      style  = '<style>';
      style += '  @media screen and (min-width: ' + gridBreakpoint_lg + ') {';
      style += '    nav.navbar.navigator li.dropdown ul.dropdown-menu {';
      style += '       max-height: ' + navMenuOptions.dropdown_menu_max_height + 'rem !important;';
      style += '       animation-duration: ' + navMenuOptions.dropdown_animate_duration + 's !important;';
      style += '       min-width: ' + navMenuOptions.dropdown_item_min_width + 'rem !important;';
      style += '       border-top: solid ' + navMenuOptions.dropdown_border_top + 'px !important;';
      style += '       border-radius: ' + navMenuOptions.dropdown_border_radius + 'px !important;';
      // jadams, 2023-12-22: overwrite "margin-top" default of dropdown-menu[data-bs-popper]
      style += '       margin-top: 0;';
      style += '       left: 0;';
      style += '    }';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // limit last (2nd) dropdown in height
      style  = '<style>';
      style += '  @media screen and (min-width: ' + gridBreakpoint_lg + ') {';
      style += '    nav.navbar.navigator li.dropdown ul.dropdown-menu ul.dropdown-menu  {';
      style += '       top: -' + navMenuOptions.dropdown_border_top + 'px !important;';
      style += '       max-height: ' + navMenuOptions.dropdown_menu_max_height + 'rem !important;';
      style += '    }';
      style += '  }';
      style += '</style>';
      // configure dropdown_font_size|color
      // style  = '<style>';
      // style += '  @media screen and (min-width: ' + gridBreakpoint_lg + ') {';
      // style += '    nav.navbar.navigator li.dropdown ul.dropdown-menu > li > a {';
      // style += '       color: ' + navMenuOptions.dropdown_item_color + ' !important;';
      // style += '       font-size: ' + navMenuOptions.dropdown_font_size + ' !important;';
      // style += '       font-weight: 400;';
      // style += '    }';
      // style += '  }';
      // style += '</style>';
      // $('head').append(style);
      style  = '<style>';
      style += '  @media screen and (min-width: ' + gridBreakpoint_lg + ') {';
      style += '    nav.navbar.navigator ul.dropdown-menu.megamenu-content .content ul.menu-col li a {';
      style += '       font-size: ' + navMenuOptions.megamenu_font_size + ' !important;';
      style += '       font-weight: 400;';
      style += '    }';
      style += '  }';
      style += '</style>';
      $('head').append(style);
      // navQuicklinks|navTopSearch
      // -----------------------------------------------------------------------
      // style  = '<style>';
      // style += '  .top-search {';
      // style += '    background-color: ' + navTopsearchOptions.background_color + ' !important;';
      // style += '  }';
      // style += '</style>';
      // $('head').append(style);
      return true;
    }, // END applyThemeSettings
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
      if (sender === 'j1.navigator.core') {
        if (message.type === 'state' && message.action === 'core_initialized') {
          navigatorCoreInitialized = true;
          logger.info('\n' + message.text);
        }
      } // END if sender j1.navigator.core
      if (sender === 'ThemeSwitcher') {
        switcher      = (message.action.includes("desktop")) ? 'desktop'  : 'mobile';
        switcher_menu = (message.text.includes("local_themes")) ? 'local' : 'remote';
        if (switcher === 'desktop') {
          if (switcher_menu === 'local') {
            desktopThemesLocalLoaded  = true;
          } else {
            desktopThemesRemoteLoaded = true;
          }
        } // END if switcher desktop
        if (switcher === 'mobile') {
          if (switcher_menu === 'local') {
            mobileThemesLocalLoaded  = true;
          } else {
            mobileThemesRemoteLoaded = true;
          }
        } // END if switcher mobile
        if (message.type === 'state' && message.action === 'desktop') {
          navigatorCoreInitialized = true;
          logger.info('\n' + message.text);
        }
      } // END if sender j1.themes.switcher
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



