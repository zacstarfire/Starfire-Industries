

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/clipboard.js
 # JS Adapter for Clipboard
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 # NOTE:
 # -----------------------------------------------------------------------------
 # Adapter generated: 2024-04-25 16:38:04 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.clipboard = ((j1, window) => {
  // ---------------------------------------------------------------------------
  // globals
  // ---------------------------------------------------------------------------
  var environment         = 'development';
  var state               = 'not_started';
  var clipboardDefaults;
  var clipboardSettings;
  var clipboardOptions;
  var clipboardJS;
  var language;
  var btnTitle;
  var btnText;
  var btnResponseText;
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
      var settings  = $.extend({
        module_name: 'j1.adapter.clipboard',
        generated:   '2024-04-25 16:38:04 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      _this    = j1.adapter.clipboard;
      logger   = log4javascript.getLogger('j1.adapter.clipboard');
      language = 'en';
      // load module DEFAULTS|CONFIG
      clipboardDefaults = $.extend({},   );
      clipboardSettings = $.extend({},   );
      clipboardOptions  = $.extend(true, {}, clipboardDefaults, clipboardSettings);
      // initialize state flag
      _this.state = 'started';
      logText = '\n' + 'initialization: started';
      logger.info(logText);
      if (language == 'en') {
        btnTitle        = 'to clipboard';
        btnText         = 'Copy';
        btnResponseText = 'copied!';
      } else if (language == 'de') {
        btnTitle        = 'zur Zwischenablage';
        btnText         = 'Kopieren';
        btnResponseText = 'kopiert!';
      } else {
        btnTitle        = 'to clipboard';
        btnText         = 'Copy';
        btnResponseText = 'copied!';
      }
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependencies_met_j1_finished = setInterval(() => {
        var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
        if (j1CoreFinished) {
          startTimeModule = Date.now();
          _this.setState('started');
          logger.debug('\n' + 'set module state to: ' + _this.getState());
          logger.info('\n' + 'initializing module: started');
          clipboardJS = new ClipboardJS('.btn-clipboard', {
            target: function target(trigger) {
              return trigger.parentNode.nextElementSibling;
            }
          });
          _this.initClipButtons();
          _this.initEventHandler(clipboardJS);
          logger.debug('\n' + 'met dependencies for: j1');
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module initialized successfully');
          endTimeModule = Date.now();
          logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval(dependencies_met_j1_finished);
        } // END j1CoreFinished
      }, 10); // END dependencies_met_j1_finished
    }, // END init
    // -------------------------------------------------------------------------
    // initClipboard()
    // create copy-to-clipboard for all pages
    // -------------------------------------------------------------------------
    initClipButtons: () => {
      var btnHtml = '<div class="j1-clipboard"><span class="btn-clipboard" data-bs-toggle="tooltip" data-bs-placement="left" title="' + btnTitle +'">' + btnText + '</span></div>';
      var isNoClip;
      var isNotebook;
      // insert copy to clipboard button before all elements having a
      // class of ".highlight" assigned to (e.g. Asciidoc source blocks)
      //
      $('.highlight').each(function () {
        // Check if NO clipboard should be applied
        isNoClip    = $(this).closest('.noclip').length;
        isNotebook  = $(this).closest('.hl-ipython3').length;
        if (!isNoClip && !isNotebook) {
          $(this).before(btnHtml);
          $('.btn-clipboard').tooltip();
        }
      });
    }, // END initClipboard
    // -------------------------------------------------------------------------
    // initEventHandler()
    // initialize button events
    // -------------------------------------------------------------------------
    initEventHandler: (clipboard) => {
      // manage clipboard events
      clipboard.on('success', (e) => {
        $(e.trigger).attr('title', btnResponseText).tooltip('_fixTitle').tooltip('show').attr('title', btnTitle).tooltip('_fixTitle');
        var logger = log4javascript.getLogger('j1.initClipboard');
        var logText = '\n' + 'initialization copy-to-clipboard sucessfull';
        logger.debug(logText);
        /* Cleanup clipped data for trailing numbers */
        var splitted = e.text.split('\n');
        var concat;
        var i;
        for (i=0; i<splitted.length; i++) {
          concat += splitted[i].replace(/^\s+\d+/, '');
        }
        e.clearSelection();
      });
      clipboard.on('error', (e) => {
        var fallbackMsg = /Mac/i.test(navigator.userAgent) ? 'press \u2318 to copy' : 'press ctrl-c to copy';
        logger = log4javascript.getLogger('j1.initClipboard');
        logText = '\n' + 'initialization copy-to-clipboard failed, fallback used.';
        logger.warn(logText);
        $(e.trigger).attr('title', fallbackMsg).tooltip('_fixTitle').tooltip('show').attr('title', 'copy to clipboard').tooltip('_fixTitle');
      });
    }, // END initEventHandler
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



