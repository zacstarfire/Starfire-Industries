

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/iconPicker.js
 # J1 Adapter for the iconPicker module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # NOTE:
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-04-25 16:38:04 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.iconPicker = ((j1, window) => {
var environment           = 'development';
var state                 = 'not_started';
var iconPickerDefaults;
var iconPickerSettings;
var iconPickerOptions;
var frontmatterOptions;
var icon_picker;
var icon_picker_button_id;
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
  // Main object
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
        module_name: 'j1.adapter.iconPicker',
        generated:   '2024-04-25 16:38:04 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      // create settings object from module options
      iconPickerDefaults = $.extend({}, {"enabled":false, "api_options":{"allowEmpty":false}});
      iconPickerSettings = $.extend({}, {"enabled":true, "picker_button_wrapper_classes":"mt-3 mb-4 d-grid gap-2", "picker_button_id":"icon_picker", "picker_button_label":"Show icon set selected", "picker_button_classes":"btn btn-info btn-flex btn-lg", "picker_button_icon":"emoticon", "api_options":{"iconLibraries":["mdi-icons-base.min.json", "mdi-icons-light.min.json", "font-awesome.min.json"], "iconLibrariesCss":["//cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css", "//cdn.jsdelivr.net/npm/@mdi/light-font@0.2.63/css/materialdesignicons-light.min.css", "//cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"]}, "pickers":[{"picker":null, "enabled":false, "id":"base", "picker_button_id":"icon_picker_base", "iconLibraries":["mdi-icons-light.min.json"], "iconLibrariesCss":["/assets/themes/j1/core/css/icon-fonts/mdil.min.css"]}, {"picker":null, "enabled":false, "id":"mdi", "picker_button_id":"icon_picker_base", "iconLibraries":["mdi-icons-base.min.json"], "iconLibrariesCss":["/assets/themes/j1/core/css/icon-fonts/mdib.min.css"]}]});
      iconPickerOptions  = $.extend(true, {}, iconPickerDefaults, iconPickerSettings);
      _this  = j1.adapter.iconPicker;
      logger = log4javascript.getLogger('j1.adapter.iconPicker');
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval((options) => {
        var pageState       = $('#content').css("display");
        var pageVisible     = (pageState === 'block') ? true : false;
        var j1CoreFinished  = (j1.getState() === 'finished') ? true : false;
        if (j1CoreFinished && pageVisible) {
          startTimeModule = Date.now();
          icon_picker_button_id = '#' + iconPickerOptions.picker_button_id;
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized on id: ' + icon_picker_button_id);
          var dependencies_met_picker_button_ready = setInterval (() => {
            var buttonState = $(icon_picker_button_id).length;
            var buttonReady = (buttonState > 0) ? true : false;
            if (buttonReady) {
              // setup initial slimSelect values|iconPicker options
              icon_picker = new UniversalIconPicker(icon_picker_button_id, {
                allowEmpty:       iconPickerOptions.api_options.allowEmpty,
                iconLibraries:    iconPickerOptions.api_options.iconLibraries,
                iconLibrariesCss: iconPickerOptions.api_options.iconLibrariesCss,
                onSelect:         (jsonIconData) => {
                  // copy selected icon to clipboard (iconClass)
                  var copyFrom = document.createElement('textarea');
                  copyFrom.value = jsonIconData.iconClass;
                  document.body.appendChild(copyFrom);
                  copyFrom.select();
                  document.execCommand('copy');
                  // Remove data element from body
                  setTimeout(() => {
                    document.body.removeChild(copyFrom);
                  }, 500);
                }
              });
              // save config settings into the toccer object for later access
              _this['icon_picker']    = icon_picker;
              _this['moduleOptions']  = iconPickerOptions;
              _this.setState('finished');
              logger.debug('\n' + 'state: ' + _this.getState());
              logger.info('\n' + 'initializing module finished');
              endTimeModule = Date.now();
              logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
              clearInterval(dependencies_met_picker_button_ready);
            } // END if buttonReady
          }, 10); // END dependencies_met_picker_button_ready
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
    // Returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: () => {
      return _this.state;
    } // END getState
  }; // END main (return)
})(j1, window);



