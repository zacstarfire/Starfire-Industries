

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/cookieConsent.js
 # JS Adapter for J1 CookieConsent
 #
 #  Product/Info:
 #  http://jekyll.one
 #
 #  Copyright (C) 2023, 2024 Juergen Adams
 #
 #  J1 Theme is licensed under MIT License.
 #  See: https://github.com/jekyll-one/J1 Theme/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-04-25 16:34:03 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
/* eslint quotes: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.cookieConsent = ((j1, window) => {
  var environment           = 'development';
  var tracking_enabled      = ('false' === 'true') ? true: false;
  var tracking_id           = '';
  var tracking_id_valid     = (tracking_id.includes('tracking-id')) ? false : true;
  var stringifiedAttributes = '';
  var state                 = 'not_started';
  var expireCookiesOnRequiredOnly;
  var cookieDefaults;
  var cookieSettings;
  var cookieOptions;
  var cookieConsentDefaults;
  var cookieConsentSettings;
  var cookieConsentOptions;
  var $modal;
  var cookie_names;
  var user_cookie;
  var url;
  var baseUrl;
  var hostname;
  var auto_domain;
  var check_cookie_option_domain;
  var cookie_domain;
  var secure;
  var cookie_written;
  var contentLanguage;
  var navigatorLanguage;
  var domainAttribute;
  var logger;
  var logText;
  var _this;
  // date|time
  var startTime;
  var endTime;
  var startTimeModule;
  var endTimeModule;
  var timeSeconds;
  // ---------------------------------------------------------------------------
  // helper functions
  // ---------------------------------------------------------------------------
  // NOTE: RegEx for tracking_id: ^(G|UA|YT|MO)-[a-zA-Z0-9-]+$
  // See: https://stackoverflow.com/questions/20411767/how-to-validate-google-analytics-tracking-id-using-a-javascript-function/20412153
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
        module_name: 'j1.adapter.cookieConsent',
        generated:   '2024-04-25 16:34:03 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      _this             = j1.adapter.cookieConsent;
      logger            = log4javascript.getLogger('j1.adapter.cookieConsent');
      cookie_names      = j1.getCookieNames();
      url               = new liteURL(window.location.href);
      baseUrl           = url.origin;
      hostname          = url.hostname;
      auto_domain       = hostname.substring(hostname.lastIndexOf('.', hostname.lastIndexOf('.') - 1) + 1);
      secure            = (url.protocol.includes('https')) ? true : false;
      contentLanguage   = 'en';
      navigatorLanguage = navigator.language || navigator.userLanguage;
      // Load cookie DEFAULTS|CONFIG
      cookieDefaults    = $.extend({}, {"enabled":true, "checkCookies":false, "encryptCookiesOnHttp":false, "expireCookiesOnRequiredOnly":true, "path":"/", "domain":false, "expires":365, "same_site":"Strict", "secure":"auto", "http_only":false});
      cookieSettings    = $.extend({}, {"enabled":true, "checkCookies":true, "same_site":"Strict"});
      cookieOptions     = $.extend(true, {}, cookieDefaults, cookieSettings);
      // Load  module DEFAULTS|CONFIG
      cookieConsentDefaults = $.extend({}, {"enabled":false, "show_cookie_icon":false, "expire_cookies_on_required_only":true, "reloadPageOnChange":true, "autoShowDialog":true, "dialogLanguage":"content", "dialogLanguages":["en", "de"], "contentURL":"/assets/data/cookieconsent", "whitelisted":[], "xhrDataElement":"consent-data", "dialogContainerID":"consent-dialog", "postSelectionCallback":"j1.adapter.cookieConsent.cbCookie", "modal_settings":{"title":"Your Privacy", "body_text":"This website uses cookies and similar technologies that are required for operation. You are free to decide to give, refuse or withdraw your consent at any time by clicking the <b>My Settings</b> button. Changes are possible at any time by clicking on the cookie icon in the menu bar. Additional cookies are used only with your consent. Additional cookies are used to analyze the use of this website or to store your personal settings for this website. Personal settings allow all visitors to save preferences of the use of services. For more information about what data is collected and shared with partners, please find more information with <b>Privacy Notice</b>. <br><br> To visit this website, your consent on cookies is required by clicking the <b>I Agree</b> button.\n", "privacy_notice":"\nThe operator of this website takes the protection of your personal data seriously. We treat your data confidential and comply with the General Data Protection Regulation (GDPR) of the European Union to protect your privacy. A set of data is stored in persistent cookies and remain on your computer for later use. Our partners and we make use of persistent vookies. Those additional cookies are only used with your consent. <br> <ul>\n  <li style=\"list-style-type: none;\">\n    <b>Necessary</b>\n    <p>\n      This website is based on static content, and no database is used behind it.\n      All information (data) needed to control this site is stored in so-called\n      session Cookies. Your browser automatically removes all session cookies\n      if you close all windows in the browser.\n    </p>\n  </li>\n  <li style=\"list-style-type: none;\">\n    <b>Analysis</b>\n    <p>\n      Analysis of the usage of this website helps optimize the site's pages to\n      improve the visitor's experience. For traffic analysis, the service\n      Google Analytics (GA) is used. GA uses persistent cookies that remain on\n      your computer for its service. This website does <b>not</b> transfer any\n      personal data to GA. Implicit personal information, like IP addresses, is\n      anonymized to protect your privacy.\n    </p>\n  </li>\n  <li style=\"list-style-type: none;\">\n    <b>Personalization</b>\n    <p>\n      Remebering your personal settings provides additional services like themes\n      translation, comments, or running advertising campaigns to provide visitors\n      with a website free of charge. Partners use persistent cookies that\n      remain on your computer for their services. Our partners like Bootswatch,\n      Hyvor, Disqus, or Google provide excellent personalized services and finance\n      running this site.\n    </p>\n  </li>\n</ul>\n"}});
      cookieConsentSettings = $.extend({}, {"enabled":true, "show_cookie_icon":true});
      cookieConsentOptions  = $.extend(true, {}, cookieConsentDefaults, cookieConsentSettings);
      if (navigatorLanguage.indexOf("-") !== -1) {
        navigatorLanguage = navigatorLanguage.split("-")[0];
      }
      if (cookieConsentOptions.dialogLanguage === 'auto') {
        cookieConsentOptions.dialogLanguage = navigatorLanguage;
      } else if (cookieConsentOptions.dialogLanguage === 'content') {
        cookieConsentOptions.dialogLanguage = contentLanguage;
      } else {
        cookieConsentOptions.dialogLanguage = navigatorLanguage;
      }
      check_cookie_option_domain  = (cookieOptions.domain === 'false') ? false : true;
      expireCookiesOnRequiredOnly = (cookieOptions.expireCookiesOnRequiredOnly === 'true') ? true: false;
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval((options) => {
        var pageState      = $('#content').css("display");
        var pageVisible    = (pageState === 'block') ? true : false;
        var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
        if (j1CoreFinished) {
          var same_site = cookieOptions.same_site;
          var expires;
          startTimeModule = Date.now();
          _this.setState('started');
          logger.debug('\n' + 'set module state to: ' + _this.getState());
          logger.info('\n' + 'initializing module: started');
          if (cookieConsentOptions.enabled) {
            expires = cookieOptions.expires;
          } else {
            // expire permanent cookies to session
            j1.expireCookie({ name: cookie_names.user_state });
            j1.expireCookie({ name: cookie_names.user_consent });
            j1.expireCookie({ name: cookie_names.user_translate });
            // disable the themes menus
            $('#themes_menu').css('display', 'none');
            $('#themes_mmenu').css('display', 'none');
            logger.warn('\n' + 'disable module: Themes');
            // disable the quick link for (Google) Translation
            $('#quickLinksTranslateButton').css('display', 'none');
            logger.warn('\n' + 'disable module: Trranslator');
          }
          // set domain used by cookies
          if (check_cookie_option_domain) {
            if (cookieOptions.domain === 'auto') {
              domainAttribute = auto_domain;
              stringifiedAttributes += '; ' + 'Domain=' + domainAttribute;
            } else  {
              domainAttribute = cookieOptions.domain;
              stringifiedAttributes += '; ' + 'Domain=' + domainAttribute;
            }
          } else {
            domainAttribute = cookieOptions.domain;
          }
          // failsafe: if 'None' is given for samesite in non-secure
          // environments open access to cookies to subdomains
          // ---------------------------------------------------------------------
          if (same_site === 'None' && !secure) {
            same_site = 'Lax';
          }
          // -------------------------------------------------------------------
          // NOTE: Click events moved to Navigator (core)
          // -------------------------------------------------------------------
          if (cookieConsentOptions.enabled) {
            logger.info('\n' + 'initialize core module');
            j1.cookieConsent = new CookieConsent ({
              contentURL:             cookieConsentOptions.contentURL,          // dialog content (modals) for all supported languages
              cookieName:             cookie_names.user_consent,                // name of the consent cookie
              cookieStorageDays:      expires,                                  // lifetime of a cookie [0..365], 0: session cookie
              cookieSameSite:         same_site,                                // restrict consent cookie
              cookieSecure:           secure,                                   // only sent to the server with an encrypted request over HTTPS
              cookieDomain:           domainAttribute,                          // set domain (hostname|domain)
              dialogLanguage:         cookieConsentOptions.dialogLanguage,      // language for the dialog (modal)
              whitelisted:            cookieConsentOptions.whitelisted,         // pages NO cookie dialog is shown
              reloadPageOnChange:     cookieConsentOptions.reloadPageOnChange,  // reload if setzings has changed
              dialogContainerID:      cookieConsentOptions.dialogContainerID,   // container, the dialog modal is (dynamically) loaded
              xhrDataElement:         cookieConsentOptions.xhrDataElement,      // container for all language-specific dialogs (modals)
              postSelectionCallback:  cookieConsentOptions.postSelectionCallback, // callback function, called after the user has made his selection
            });
          } else {
            logger.warn('\n' + 'module is disabled');
          } // END if cookieConsentOptions enabled
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module initialized successfully');
          endTimeModule = Date.now();
          logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval(dependencies_met_page_ready);
        } // END  j1CoreFinished
      }, 10); // END dependencies_met_page_ready
    }, // END init
    // -------------------------------------------------------------------------
    // cbCookie()
    // callback for CookieConsent module after the user has
    // made his selection
    // -------------------------------------------------------------------------
    cbCookie: () => {
      var url             = new liteURL(window.location.href);
      var hostname        = url.hostname;
      var gaCookies       = j1.findCookie('_ga');
      var gasCookies      = j1.findCookie('__ga');
      var j1Cookies       = j1.findCookie('j1');
      var cookie_names    = j1.getCookieNames();
      var user_state      = j1.readCookie(cookie_names.user_state);
      var user_consent    = j1.readCookie(cookie_names.user_consent);
      var user_translate  = j1.readCookie(cookie_names.user_translate);
      var json            = JSON.stringify(user_consent);
      var user_agent      = platform.ua;
      var cookie_written;
      logger.info('\n' + 'entered post selection callback from CookieConsent');
      logger.info('\n' + 'current values from CookieConsent: ' + json);
      // enable cookie button if not visible
      if ($('#quickLinksCookieButton').css('display') === 'none')  {
        $('#quickLinksCookieButton').css('display', 'block');
      }
      // manage Google Analytics OptIn/Out
      // See: https://github.com/luciomartinez/gtag-opt-in/wiki
      if (tracking_enabled && tracking_id_valid) {
        // Managing cookie life-time
        // ---------------------------------------------------------------------
        // If cookie settings allows only "required" cookies, all "persistent"
        // cookies (Comments|Ads|Translation) get expired to "session" for
        // better GDPR compliance. The GDPR regulations does NOT require
        // any consent on session-only cookies.
        //
        if (!user_consent.analysis || !user_consent.personalization) {
          // overload cookie consent settings
          user_translate.analysis           = user_consent.analysis;
          user_translate.personalization    = user_consent.personalization;
          // disable translation service
          user_translate.translationEnabled = false;
          cookie_written = j1.writeCookie({
            name:     cookie_names.user_translate,
            data:     user_translate,
            secure:   secure
          });
          // expire permanent cookies to session
          // -------------------------------------------------------------------
          j1.expireCookie({ name: cookie_names.user_state });
          j1.expireCookie({ name: cookie_names.user_consent });
          j1.expireCookie({ name: cookie_names.user_translate });
        }
        if (cookieConsentOptions.reloadPageOnChange) {
          // reload current page (skip cache)
          location.reload(true);
        }
      } else {
        // failsafe: Make (really) sure the all GA|GAS cookies removed
        // left from a previous session/page view for better privacy compliance
        // ---------------------------------------------------------------------
        // remove cookies on invalid GA config or left from a previous
        // session/page view if they exists
        // ---------------------------------------------------------------------
        gaCookies.forEach((item) => {
          logger.warn('\n' + 'delete GA cookie: ' + item);
          j1.removeCookie({ name: item });
        });
        // remove cookies on invalid GAS config or left from a previous
        // session/page view if they exists
        // ---------------------------------------------------------------------
        gasCookies.forEach((item) => {
          // Remove cookies from Google Ads
          logger.warn('\n' + 'delete GAS cookie: ' + item);
          j1.removeCookie({
            name: item
          });
        });
        // managing cookie life-time. If cookie settings allows only
        // "required" cookies, all "persistent" cookies (Comments|Ads|Translation)
        // get expired to "session" for better GDPR compliance. The GDPR
        // regulations|privacy does NOT require any consent on using cookies
        // for session-only cookies.
        // ---------------------------------------------------------------------
        if (!user_consent.analysis || !user_consent.personalization) {
          // overload cookie consent settings
          user_translate.analysis           = user_consent.analysis;
          user_translate.personalization    = user_consent.personalization;
          // disable translation service
          user_translate.translationEnabled = false;
          cookie_written = j1.writeCookie({
            name:   cookie_names.user_translate,
            data:   user_translate,
            secure: secure
          });
          if (expireCookiesOnRequiredOnly) {
            // expire permanent cookies to session
            j1.expireCookie({ name: cookie_names.user_state });
            j1.expireCookie({ name: cookie_names.user_consent });
            j1.expireCookie({ name: cookie_names.user_translate });
          }
        }
        if (cookieConsentOptions.reloadPageOnChange) {
          // reload current page (skip cache)
          location.reload(true);
        }
      } // END if tracking_enabled
    }, // END cbCookie
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



