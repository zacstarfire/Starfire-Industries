

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/translator.js
 # JS Adapter for J1 Translate
 #
 #  Product/Info:
 #  http://jekyll.one
 #
 #  Copyright (C) 2023, 2024 Juergen Adams
 #
 #  J1 Theme is licensed under MIT License.
 #  See: https://github.com/jekyll-one/J1 Theme/blob/master/LICENSE
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
// https://github.com/EdwardBalaj/Simple-DeepL-API-Integration
// https://www.javatpoint.com/how-to-add-google-translate-button-on-your-webpage
// https://gist.github.com/ab007shetty/28e99707734db32a6e881e4d245d42f7
// https://github.com/marghoobsuleman/ms-Dropdown
// https://www.marghoobsuleman.com/image-dropdown/help
// https://www.marghoobsuleman.com/image-dropdown/advanced-help
'use strict';
j1.adapter.translator = (function (j1, window) {
  var environment       = 'development';
  var state             = 'not_started';
  var user_translate    = {};
  var translatorDefaults;
  var translatorSettings;
  var translatorOptions;
  var translationFeedbackHighlight;
  var _this;
  var $modal;
  var cookie_names;
  var user_consent;
  var logger;
  var url;
  var baseUrl;
  var hostname;
  var domain;
  var subDomain;
  var isSubDomain;
  var cookie_option_domain;
  var secure;
  var logText;
  var cookie_written;
  var navigator_language;
  var translation_language;
  var ddSourceLanguage;
  var head;
  var gtTranslateScript;
  var gtCallbackScript;
  var languageList;
  var domainAttribute;
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // Initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.translator',
        generated:   '2024-04-25 16:41:58 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this                 = j1.adapter.translator;
      logger                = log4javascript.getLogger('j1.adapter.translator');
      // Load  module DEFAULTS|CONFIG
      translatorDefaults    = $.extend({},   {"enabled":false, "translationEnabled":false, "hideTranslatorIcon":false, "disableLanguageSelector":false, "translationLanguage":"en", "translatorLanguagesFile":"/assets/data/iso-639-language-codes-flags.json", "translatorLanguages":"translator-languages", "translateAllPages":true, "reloadPageOnChange":true, "contentURL":"/assets/data/translator", "contentLanguage":"auto", "dialogLanguage":"auto", "dialogLanguages":["en", "de"], "cookieName":"j1.user.translate", "cookieConsentName":"j1.user.consent", "xhrDataElement":"google-data", "dialogContainerID":"translator-dialog", "google":{"postSelectionCallback":"j1.adapter.translator.cbGoogle", "hideSuggestionBox":true, "hidePoweredBy":true, "hideTopFrame":true, "translationLanguages":["af", "sq", "am", "ar", "hy", "az", "eu", "be", "bn", "bs", "bg", "km", "ca", "ny", "zh-CN", "zh-TW", "co", "hr", "cs", "da", "nl", "en", "et", "tl", "fi", "fr", "fy", "gl", "ka", "de", "el", "gu", "ht", "ha", "haw", "iw", "hi", "hu", "is", "ig", "id", "ga", "it", "ja", "jw", "kn", "kk", "rw", "ko", "ku", "ky", "lo", "lv", "lt", "mk", "mg", "ms", "ml", "mt", "mi", "mr", "mo", "mn", "ne", false, "nn", "or", "ps", "fa", "pl", "pt", "pa", "ro", "rm", "ru", "gd", "sr", "st", "sn", "sd", "si", "sk", "sl", "so", "es", "su", "sw", "sv", "tg", "ta", "tt", "te", "th", "tr", "tk", "ug", "uk", "ur", "uz", "vi", "cy", "xh", "yi", "yo", "zu"], "modal_settings":{"title":"Google Übersetzer", "body_text":"Diese Website nutzt den <b>kostenlosen</b> Dienst <b>Google Translator</b> Übersetzen Sie den Inhalt dieser Website in Sekundenschnelle in über 100 Sprachen. Die zu übersetzende Sprache wird automatisch von Ihrem Browser übernommen Einstellungen.\n", "language_selector_title":"Ihre aktuellen Spracheinstellungen für die Übersetzung sind\n", "privacy_notice":"Der <b>kostenlose Dienst</b> von Google Translate verwendet zur Bereitstellung Cookies seine Dienste, personalisieren Werbung und führen Verkehrsanalysen durch Für die Nutzung von Cookies ist Ihre Einwilligung erforderlich. Weitere Informationen finden Sie hier etwa bei Google <a href=\"https://policies.google.com/\" target=\"_blank\" rel=\"noopener\">Datenschutzerklärung</a>. <br><br> Erforderliche Cookie-Einstellungen: <ul>\n  <li style=\"list-style-type: none;\">\n    <b>Analyse</b>\n    <p>\n      Für die Nutzung von Google Translations ist Ihre Einwilligung zur Analyse erforderlich\n      in den Datenschutzeinstellungen ist erforderlich.\n    </p>\n  </li>\n  <li style=\"list-style-type: none;\">\n    <b>Personalisierung</b>\n    <p>\n      Für die Nutzung von Google Translations ist Ihre Einwilligung zur Personalisierung erforderlich\n      in den Datenschutzeinstellungen ist erforderlich.\n    </p>\n  </li>\n</ul>\n"}}});
      translatorSettings    = $.extend({},   {"enabled":true, "translatorName":"google", "contentLanguage":"en", "dialogLanguage":"auto", "translationLanguage":"de"});
      translatorOptions     = $.extend(true, {}, translatorDefaults, translatorSettings);
      url                   = new liteURL(window.location.href);
      baseUrl               = url.origin;
      hostname              = url.hostname;
      domain                = hostname.substring(hostname.lastIndexOf('.', hostname.lastIndexOf('.') - 1) + 1);
      subDomain             = '.' + domain;
      isSubDomain           = j1.subdomain(hostname);
      secure                = (url.protocol.includes('https')) ? true : false;
      navigator_language    = navigator.language || navigator.userLanguage;     // userLanguage for MS IE compatibility
      translation_language  = navigator_language.split('-')[0];
      cookie_names          = j1.getCookieNames();
      head                  = document.getElementsByTagName('head')[0];
      gtTranslateScript     = document.createElement('script');
      gtTranslateScript.id  = 'gt-translate';
      gtTranslateScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      gtCallbackScript      = document.createElement('script');
      gtCallbackScript.id   = 'gt-callback';
      user_translate = {
        'translatorName':           'google',
        'translationEnabled':       false,
        'analysis':                 true,
        'personalization':          true,
        'translateAllPages':        true,
        'useLanguageFromBrowser':   true,
        'translationLanguage':      translation_language,
      };
      // initialize state flag
      _this.state = 'pending';
      // add GT callback script dynamically in the head section
      // jadams, 2022-04-21: postTranslateElementInit cause error, disabled
      // -----------------------------------------------------------------------
      gtCallbackScript.text  = '\n';
      gtCallbackScript.text += 'function googleTranslateElementInit() {' + '\n';
      gtCallbackScript.text += '  var gtAPI = new google.translate.TranslateElement({' + '\n';
      gtCallbackScript.text += '    pageLanguage: "en",' + '\n';
      gtCallbackScript.text += '    layout:       google.translate.TranslateElement.FloatPosition.TOP_LEFT' + '\n';
      gtCallbackScript.text += '  },' + '\n';
      gtCallbackScript.text += '  "google_translate_element");' + '\n';
      gtCallbackScript.text += '}' + '\n';
      document.head.appendChild(gtCallbackScript);
      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (() => {
        var pageState       = $('#content').css("display");
        var pageVisible     = (pageState == 'block') ? true: false;
        var j1CoreFinished  = (j1.getState() == 'finished') ? true : false;
        var atticFinished   = (j1.adapter.attic.getState() == 'finished') ? true : false;
        if (j1CoreFinished && pageVisible && atticFinished) {
          var expires       = '365';
          var same_site     = 'Strict';
          var option_domain = 'false';
          user_consent = j1.readCookie(cookie_names.user_consent);
          if (!user_consent.personalization) {
            const translateButton = '#quickLinksTranslateButton';
            $(translateButton).hide();
            return;
          }
          // set domain used by cookies
          //
          if (option_domain == 'auto') {
            domainAttribute = domain ;
          } else  {
            domainAttribute = '';
          }
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState ());
          logger.info('\n' + 'module is being initialized');
          // load|initialize user translate cookie
          //
          if (j1.existsCookie(cookie_names.user_translate)) {
            user_translate = j1.readCookie(cookie_names.user_translate);
          } else {
            logger.debug ('\n' + 'write to cookie : ' + cookie_names.user_translate);
            cookie_written = j1.writeCookie({
              name:     cookie_names.user_translate,
              data:     user_translate,
              samesite: same_site,
              secure:   secure,
              expires:  expires
            });
          }
          // hide the google translate element if exists
          //
          if ($('google_translate_element')) {
            $('google_translate_element').hide();
          }
          // show|hide translate button if enabled
          //
          if (translatorOptions.hideTranslatorIcon) {
            if (!user_consent.analysis || !user_consent.personalization) {
              // disable google translate button if visible
              //
              if ($('#quickLinksTranslateButton').css('display') === 'block')  {
                logger.info('\n' + 'disable quickLinksTranslateButton');
                $('#quickLinksTranslateButton').css('display', 'none');
              }
            }
            if (user_consent.analysis && user_consent.personalization) {
              // enable google translate button if NOT visible
              //
              if ($('#quickLinksTranslateButton').css('display') === 'none')  {
                logger.info('\n' + 'enable quickLinksTranslateButton');
                $('#quickLinksTranslateButton').css('display', 'block');
              }
            }
          }
          // load|set user translate cookie
          //
          user_consent = j1.readCookie(cookie_names.user_consent);
          if (!user_consent.analysis || !user_consent.personalization) {
            // disable translation service
            user_translate.translationEnabled = false;
            cookie_written = j1.writeCookie({
              name:     cookie_names.user_translate,
              data:     user_translate,
              secure:   secure
            });
            // expire permanent cookie to session
            //
            j1.expireCookie({ name: cookie_names.user_translate });
          } else {
            logger.debug('\n' + 'write to cookie : ' + cookie_names.user_translate);
            cookie_written = j1.writeCookie({
              name:     cookie_names.user_translate,
              data:     user_translate,
              secure:   secure,
              expires:  365
            });
          }
          if (translatorOptions.dialogLanguage === 'auto') {
            translatorOptions.dialogLanguage = 'en';
          }
          j1.translator = new Translator({
            contentURL:               translatorOptions.contentURL,                     // dialog content (modals) for all supported languages
            cookieName:               cookie_names.user_translate,                      // name of the translator cookie
            cookieStorageDays:        expires,                                          // lifetime of a cookie [0..365], 0: session cookie
            cookieSameSite:           same_site,                                        // restrict consent cookie
            cookieDomain:             domainAttribute,                                  // set domain (hostname|domain)
            cookieSecure:             secure,                                           // set secure
            cookieConsentName:        translatorOptions.cookieConsentName,              // the name of the Cookie Consent Cookie (secondary data)
            disableLanguageSelector:  translatorOptions.disableLanguageSelector,        // disable language dropdown for translation in dialog (modal)
            translatorLanguagesFile:  translatorOptions.translatorLanguagesFile,
            translatorLanguages:      translatorOptions.translatorLanguages,
            dialogContainerID:        translatorOptions.dialogContainerID,              // dest container, the dialog modal is loaded (dynamically)
            dialogLanguage:           translatorOptions.dialogLanguage,                 // language for the dialog (modal)
            translationLanguage:      translatorOptions.translationLanguage,            // default language for translation
            translationLanguages:     translatorOptions.google.translationLanguages,    // supported languages for translation
            translationEnabled:       translatorOptions.translationEnabled,             // run translation enabled|disabled
            translatorName:           translatorOptions.translatorName,                 // translator used for translation
            xhrDataElement:           translatorOptions.xhrDataElement,                 // container for all language-specific dialogs (modals)
            postSelectionCallback:    translatorOptions.google.postSelectionCallback    // prepared but currently NOT actively used
          });
          // hide the translation feedback
          //
          translationFeedbackHighlight  = '<style id="translationFeedbackHighlight">';
          translationFeedbackHighlight += '  .VIpgJd-yAWNEb-VIpgJd-fmcmS-sn54Q {';
          translationFeedbackHighlight += '    background-color:  transparent !important;';
          translationFeedbackHighlight += '    box-shadow: none !important;;';
          translationFeedbackHighlight += '  }';
          translationFeedbackHighlight += '</style>';
          $('head').append(translationFeedbackHighlight);
          // enable|disable translation (after callback)
          if (user_translate.analysis && user_translate.personalization && user_translate.translationEnabled) {
            if (translatorOptions.translatorName === 'google') {
              logger.info('\n' + 'append Google Translate Script: ' + gtTranslateScript.id);
              head.appendChild(gtTranslateScript);
              if ($('google_translate_element')) {
                $('google_translate_element').hide();
              }
            }
          } else {
            if (translatorOptions.translatorName === 'google') {
              logger.info('\n' + 'translation disabled');
              logger.info('\n' + 'remove existing Google Translate cookies');
              // remove all googtrans cookies that POTENTIALLY exists
              //
              Cookies.remove('googtrans', { domain: domainAttribute });
              Cookies.remove('googtrans', { domain: subDomain });
              Cookies.remove('googtrans', { domain: hostname });
              Cookies.remove('googtrans');
            }
          }
          // -------------------------------------------------------------------
          // NOTE: Click events moved to Navigator (core)
          // -------------------------------------------------------------------
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module initialized successfully');
          clearInterval(dependencies_met_page_ready);
        }
      }, 10);
    }, // END init
    // -------------------------------------------------------------------------
    // postTranslateElementInit()
    // prepared but currently NOT actively used
    // -------------------------------------------------------------------------
    postTranslateElementInit: function (response) {
      // code for post processing
      logger.info('\n' + 'postTranslateElementInit entered');
      logger.info('\n' + response.T.Dh);
      return;
    }, // END postTranslateElementInit
    // -------------------------------------------------------------------------
    // cbGoogle()
    // Called by the translator CORE module after the user has made
    // the selection for a translation|language
    // -------------------------------------------------------------------------
    cbGoogle: function (option) {
      var logger            = log4javascript.getLogger('j1.adapter.translator.cbGoogle');
      var msDropdown        = document.getElementById('dropdownJSON').msDropdown;
      var url               = new liteURL(window.location.href);
      var baseUrl           = url.origin;
      var hostname          = url.hostname;
      var domain            = hostname.substring(hostname.lastIndexOf('.', hostname.lastIndexOf('.') - 1) + 1);
      var subDomain         = '.' + domain;
      var isSubDomain       = j1.subdomain(hostname);
      var domainAttribute   = '';
      var srcLang;
      var destLang;
      var transCode;
      var selectedTranslationLanguage;
      // set domain used by cookies
      // if (cookie_option_domain == 'auto') {
      //   domainAttribute = domain ;
      // } else  {
      //   // domainAttribute = hostname;
      //   domainAttribute = '';
      // }
      // button 'Do nothing' clicked
      //
      if (option === 'exitOnly') {
        return;
      }
      selectedTranslationLanguage = msDropdown.value;
      logger.info('\n' + 'selected translation language: ' + selectedTranslationLanguage);
      // set content language
      //
      if (translatorOptions.contentLanguage === 'auto') {
        srcLang = 'en';
      } else {
        srcLang = translatorOptions.contentLanguage;
      }
      // translation language MUST be DIFFERENT from content language
      //
      if (srcLang == selectedTranslationLanguage ) {
        // remove all googtrans cookies that POTENTIALLY exists
        //
        Cookies.remove('googtrans', { domain: domainAttribute });
        Cookies.remove('googtrans', { domain: subDomain });
        Cookies.remove('googtrans', { domain: hostname });
        Cookies.remove('googtrans');
        location.reload();
      }
      // set transCode settings
      //
      destLang  = translation_language;
      transCode = '/' + srcLang + '/' + selectedTranslationLanguage;
      // remove all googtrans cookies that POTENTIALLY exists
      //
      Cookies.remove('googtrans', { domain: domainAttribute });
      Cookies.remove('googtrans', { domain: subDomain });
      Cookies.remove('googtrans', { domain: hostname });
      Cookies.remove('googtrans');
      // set googtrans cookie for all sites
      //
      Cookies.set('googtrans', transCode);
      // -----------------------------------------------------------------------
      // NOTE: googtrans cookie will be rewritten (by Google!?) for
      // attributes 'SameSite' and 'Domain'. This results for 'SameSite'
      // in an empty field and two cookies (host+domain) if domain option
      // is enabled!!!
      // -----------------------------------------------------------------------
      if (isSubDomain) {
        Cookies.set('googtrans', transCode, { domain: domain });
      }
      // reload current page
      location.reload();
    }, // END cbGoogle
    // -------------------------------------------------------------------------
    // cbDeepl()
    // Called by the translator CORE module after the user made the
    // selection for a translation language
    // -------------------------------------------------------------------------
    cbDeepl: function () {
      var logger     = log4javascript.getLogger('j1.adapter.translator.cbDeepl');
      //
      // place code for processing here
      //
    }, // END cbDeepl
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 google_translate module
    // Manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
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
    setState: function (stat) {
      _this.state = stat;
    }, // END setState
    // -------------------------------------------------------------------------
    // getState()
    // Returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: function () {
      return _this.state;
    } // END getState
  }; // END return
})(j1, window);



