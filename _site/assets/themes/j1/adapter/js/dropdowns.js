

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/dropdowns.js
 # J1 Adapter for J1 Module Dropdowns
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
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
j1.adapter.dropdowns = ((j1, window) => {
  var environment           = 'development';
  var instances             = [];
  var state                 = 'not_started';
  var dropdownsDefaults;
  var dropdownsSettings;
  var dropdownsOptions;
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
      var settings = $.extend({
        module_name: 'j1.adapter.dropdowns',
        generated:   '2024-04-25 16:34:03 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.dropdowns;
      logger  = log4javascript.getLogger('j1.adapter.dropdowns');
      // Load  module DEFAULTS|CONFIG
      dropdownsDefaults = $.extend({}, );
      dropdownsSettings = $.extend({}, );
      dropdownsOptions  = $.extend(true, {}, dropdownsDefaults, dropdownsSettings);
      // initialize state flag
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (() => {
        var pageState      = $('#content').css("display");
        var pageVisible    = (pageState === 'block') ? true : false;
        var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
        if (j1CoreFinished && pageVisible) {
          var elms = document.querySelectorAll('.dropdowns');
          startTimeModule = Date.now();
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
            elms.forEach((elm) => {
              var id = elm.dataset.target;
              if (id === 'icon-dropdown') {
                // processing: icon-dropdown
                //
                var instance = j1.dropdowns.init(elm, {
                  alignment:        "bottom",
                  autoTrigger:      true,
                  constrainWidth:   true,
                  coverTrigger:     true,
                  closeOnClick:     true,
                  hover:            true,
                  inDuration:       "300",
                  outDuration:      "300",
                  onOpen:           "j1.adapter.dropdowns.cbOnOpen",
                  onClose:          "j1.adapter.dropdowns.cbOnClose",
                  onItemClick:      "false"
                });
                instances.push(instance);
              }
            });
            elms.forEach((elm) => {
              var id = elm.dataset.target;
              if (id === 'button-dropdown') {
                // processing: button-dropdown
                //
                var instance = j1.dropdowns.init(elm, {
                  alignment:        "left",
                  autoTrigger:      true,
                  constrainWidth:   true,
                  coverTrigger:     true,
                  closeOnClick:     true,
                  hover:            false,
                  inDuration:       "150",
                  outDuration:      "250",
                  onOpen:           "j1.adapter.dropdowns.cbOnOpen",
                  onClose:          "j1.adapter.dropdowns.cbOnClose",
                  onItemClick:      "false"
                });
                instances.push(instance);
              }
            });
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module initialized successfully');
          endTimeModule = Date.now();
          logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval(dependencies_met_page_ready);
        } // END pageVisible
      }, 10); // END dependencies_met_page_ready
    }, // END init
    // -------------------------------------------------------------------------
    // cbOnClick)
    // called by the dropdowns CORE module when and dropdown element
    // is clicked
    // -------------------------------------------------------------------------
    cbOnclick: (event) => {
      var logger = log4javascript.getLogger('j1.adapter.dropdowns.cbOnClick');
      var itemEl = $(event.target).closest('li')[0];
      // logText = '\n' + 'entered cbOnClick on id: ' + id;
      // logger.info(logText);
      return true;
    }, // END cbOnclick
    // -------------------------------------------------------------------------
    // cbOnOpen()
    // called by the dropdowns CORE module when dropdown get opened
    // -------------------------------------------------------------------------
    cbOnOpen: (elm) => {
      var logger  = log4javascript.getLogger('j1.adapter.dropdowns.cbOnOpen');
      var id      = elm.id;
      logText = '\n' + 'entered cbOnOpen on id: ' + id;
      logger.info(logText);
      return true;
    }, // END cbOnOpen
    // -------------------------------------------------------------------------
    // cbOnClose()
    // called by the dropdowns CORE module when dropdown get closed
    // -------------------------------------------------------------------------
    cbOnClose: (elm) => {
      var logger    = log4javascript.getLogger('j1.adapter.dropdowns.cbOnClose');
      var id        = elm.id;
      var listItems = '#' + elm.id + " li";
      var menuItems = document.querySelectorAll(listItems);
      var activeItem;
      var activeValue;
      // Loop through each <li> element and mark selected menuItem by class active
      for (var i=0; i < menuItems.length; i++) {
        if (menuItems[i].classList.contains('active')) {
            activeItem  = i;
            activeValue = menuItems[i].dataset.target;
        }
      }
      logText = '\n' + 'entered cbOnClose on id: ' + id;
      logger.info(logText);
      logText = '\n' + 'item selected: ' + activeItem;
      logger.info(logText);
      logText = '\n' + 'value selected: ' + activeValue;
      logger.info(logText);
      return true;
    }, // END cbOnClose
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



