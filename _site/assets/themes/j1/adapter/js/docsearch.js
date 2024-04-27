

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/docsearch.js
 # J1 Adapter for the DocSearch module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-04-25 16:41:58 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.docsearch = ((j1, window) => {
var environment           = 'development';
var state                 = 'not_started';
var cookie_names          = j1.getCookieNames();
var docsearchDefaults;
var docsearchSettings;
var docsearchOptions;
var docsearchModal;
var modal_container;
var user_consent;
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
    init: () => {
      // -----------------------------------------------------------------------
      // default module settings
      // -----------------------------------------------------------------------
      docsearchDefaults = $.extend({}, {"enabled":false, "provider_settings":{"provider_id":"<your-provider_id>", "bot_id":"<your-bot_id-id>"}, "bot_settings":{"iframe":{"title":"", "height":500, "width":"100%", "scrolling":false, "style":"border: none; background: #FAFAFA;"}}, "dialog_settings":{"modal_container_id":"docsearch_container", "modal_settings":{"title":"DocSearch AI", "body_text":"Using <b>DocSearch AI</b>, you can ask <b>your</b> questions based on all documents available at <a href=\"//jekyll.one/\" target=\"_blank\" rel=\"noopener\">JekyllOne</a> to receive human readable answers. Below, the superpower of DocSearch AI is available at your fingertips. <div class=\"listingblock mt-4 mb-4\">\n  <div class=\"title\">Example Question</div>\n  <div class=\"content\">\n    <div class=\"j1-clipboard\"><span class=\"btn-clipboard\" data-bs-toggle=\"tooltip\" data-bs-placement=\"left\" data-bs-original-title=\"to clipboard\">Copy</span></div>\n    <pre class=\"rouge highlight notranslate\"><code data-lang=\"apib\">What is J1 Template?</code></pre>\n  </div>\n</div> Ask <b>your</b> question and get an answer in seconds.\n", "privacy_notice":"<b>DocSearch AI</b> requires Cookies for traffic analysis and personalization to run the service. <br><br> Required Cookie Settings: <ul>\n  <li style=\"list-style-type: none;\">\n    <b>Analysis</b>\n    <p>\n      For the use of DocSearch AI, your consent on analysis\n      in the <b>Privacy Settings</b> is required.\n    </p>\n  </li>\n  <li style=\"list-style-type: none;\">\n    <b>Personalization</b>\n    <p>\n      For the use of DocSearch AI, your consent on personalization\n      in the <b>Privacy Settings</b> is required.\n    </p>\n  </li>\n</ul>\n"}}});
      docsearchSettings = $.extend({}, {"enabled":false, "provider_settings":{"provider_id":"<your-provider_id>", "bot_id":"<your-bot_id-id>"}, "bot_settings":{"iframe":{"title":"J1 DocSearch", "height":400, "width":"100%", "scrolling":false, "style":"border: none; background: white;"}}});
      docsearchOptions  = $.extend(true, {}, docsearchDefaults, docsearchSettings);
      _this  = j1.adapter.docsearch;
      logger = log4javascript.getLogger('j1.adapter.docsearch');
      modal_container               = document.createElement('div');
      modal_container.id            = 'docsearch_container';
      modal_container.style.display = 'none';
      modal_container.setAttribute('class', 'modal fade');
      modal_container.setAttribute('tabindex', '-1');
      modal_container.setAttribute('role', 'dialog');
      modal_container.setAttribute('aria-labelledby', 'docsearch_container');
      document.body.append(modal_container);
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (() => {
        var pageState      = $('#content').css("display");
        var pageVisible    = (pageState === 'block') ? true : false;
        var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
        var atticFinished  = (j1.adapter.attic.getState() === 'finished') ? true: false;
        if (j1CoreFinished && pageVisible && atticFinished) {
          startTimeModule = Date.now();
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          user_consent = j1.readCookie(cookie_names.user_consent);
          if (!user_consent.personalization) {
            const docsSearchButton = '#quickLinksDocSearchButton';
            $(docsSearchButton).hide();
            return;
          }
          // -----------------------------------------------------------------
          // data loader
          // -----------------------------------------------------------------
          j1.loadHTML ({
            xhr_container_id:   'docsearch_container',
            xhr_data_path:      '/assets/data/docsearch/index.html',
            xhr_data_element:   'docsearch-modal-data' },
            'j1.adapter.docsearch',
            'null'
          );
          // -------------------------------------------------------------------
          // on 'show'
          // -------------------------------------------------------------------
          $('#docsearch_container').on('show.bs.modal', () => {
            //
            // place code here
            //
          }); // END modal on 'show'
          // -------------------------------------------------------------------
          // on 'shown'
          // -------------------------------------------------------------------
          $('#docsearch_container').on('shown.bs.modal', () => {
            //
            // place code here
            //
          }); // END modal on 'shown'
          // -------------------------------------------------------------------
          // on 'hidden' (close)
          // -------------------------------------------------------------------
          $('#docsearch_container').on('hidden.bs.modal', () => {
            //
            // do something here
            //
          }); // END modal on 'hidden'
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module initialization finished');
          endTimeModule = Date.now();
          logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval(dependencies_met_page_ready);
        } // END if
      }, 10); // END dependencies_met_page_ready
    }, // END init
    // -------------------------------------------------------------------------
    // showDialog()
    // display the dialog
    // -------------------------------------------------------------------------
    showDialog: () => {
      logger.debug('\n' + "showDialog");
      $('#docsearch_container').modal({
        backdrop: 'static',
        keyboard: false
      });
      $('#docsearch_container').modal('show');
    }, // END showDialog
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



