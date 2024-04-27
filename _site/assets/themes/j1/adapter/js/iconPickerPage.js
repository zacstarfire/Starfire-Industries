

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/iconPickers.js
 # J1 Adapter for the iconPickers module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # NOTE: iconPicker styles defind in /assets/data/panel.html, key 'iconPicker'
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
j1.adapter.iconPickerPage = ((j1, window) => {
  const selectID          = 'icon_library';
  var iconPickerDefaults;
  var iconPickerSettings;
  var iconPickerOptions;
  var slimSelectDefaults;
  var slimSelectSettings;
  var slimSelectOptions;
  var _this;
  var logger;
  var logText;
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
        module_name: 'j1.adapter.iconPickerPage',
        generated:   '2024-04-25 16:41:58 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      iconPickerDefaults  = $.extend({}, {"enabled":false, "api_options":{"allowEmpty":false}});
      iconPickerSettings  = $.extend({}, );
      iconPickerOptions   = $.extend(true, {}, iconPickerDefaults, iconPickerSettings);
      slimSelectDefaults  = $.extend({}, {"enabled":false, "api_options":{"showSearch":true, "searchPlaceholder":"Enter your search expression", "searchText":"No results", "searchingText":"Searching ...", "searchHighlight":false, "closeOnSelect":true, "contentPosition":"absolute", "openPosition":"auto", "placeholderText":"Select an item", "allowDeselect":false, "hideSelected":false, "showOptionTooltips":false, "minSelected":0, "maxSelected":1, "timeoutDelay":200, "maxValuesShown":20, "maxValuesMessage":"{number} selected"}});
      slimSelectSettings  = $.extend({}, {"enabled":true, "api_options":{"showSearch":true}, "selects":[{"select":"icon_library", "enabled":true, "wrapper_id":"icon_library_select_wrapper", "id":"icon_library", "name":"icon-library", "items":"<select id=\"icon_library\" name=\"icon-library\">\n  <optgroup label=\"Material Design Icons (MDI)\">\n    <option value=\"mdi-icons-base\"        data-css=\"/assets/themes/j1/core/css/icon-fonts/mdib.min.css\" selected=\"selected\">MDI Icons Base</option>\n    <option value=\"mdi-icons-light\"       data-css=\"/assets/themes/j1/core/css/icon-fonts/mdil.min.css\">MDI Icons Light</option>\n    <option value=\"mdi-icons-regular\"     data-css=\"/assets/themes/j1/core/css/icon-fonts/mdi.min.css\">MDI Icons Regular</option>\n  </optgroup>\n\n  <optgroup label=\"Font Awesome Icons (FA)\">\n    <option value=\"font-awesome\"          data-css=\"/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css\">FA Icons (all)</option>\n    <option value=\"font-awesome-solid\"    data-css=\"/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css\">FA Icons Solid</option>\n    <option value=\"font-awesome-regular\"  data-css=\"/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css\">FA Icons Regular</option>\n    <option value=\"font-awesome-brands\"   data-css=\"/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css\">FA Icons Brands</option>\n  </optgroup>\n</select>\n"}, {"select":"prompt_history", "enabled":true, "wrapper_id":"prompt_history_select_wrapper", "id":"prompt_history", "name":"prompt-history", "items":"<select multiple=\"\" id=\"prompt_history\" name=\"prompt-history\"></select>"}, {"select":"search_history", "enabled":true, "wrapper_id":"search_history_select_wrapper", "id":"search_history", "name":"search-history", "items":"<select multiple=\"\" id=\"search_history\" name=\"search-history\"></select>"}]});
      slimSelectOptions   = $.extend(true, {}, slimSelectDefaults, slimSelectSettings);
      _this   = j1.adapter.iconPickerPage;
      logger  = log4javascript.getLogger('j1.adapter.iconPicker');
      function init_select() {
        // set initial select values
        const select              = document.getElementById(selectID);
        const icon_picker         = j1.adapter.iconPicker.icon_picker;
        var currentIconLibrary    = select.value;
        var currentIconLibraryCss = select.options[select.selectedIndex].dataset.css;
        icon_picker.setOptions({
          iconLibraries:          [currentIconLibrary + '.min.json'],
          iconLibrariesCss:       [currentIconLibraryCss]
        });
        // stop default actions on picker button
        const pickerButton = document.getElementById('icon_picker');
        pickerButton.addEventListener('click', (e) => {
          // suppress default actions|bubble up
          e.preventDefault();
          e.stopPropagation();
        }); // END pickerButton (click)
        // setup slimSelect events|iconPicker options
        logger.info('\n' + 'setup select events');
        init_select_events();
        _this.setState('finished');
        logger.debug('\n' + 'state: ' + _this.getState());
        logger.info('\n' + 'initializing finished');
      } // END init_select
      function init_select_events() {
        const $slimSelect = j1.adapter.slimSelect.select.icon_library;
        $slimSelect.events.afterClose = () => {
          const icon_picker         = j1.adapter.iconPicker.icon_picker;
          const select              = document.getElementById(selectID);
          var currentIconLibrary    = select.value;
          var currentIconLibraryCss = select.options[select.selectedIndex].dataset.css;
          logger.debug('\n' + 'use current IconLibrary: ' + currentIconLibrary);
          // apply selection
          currentIconLibrary        = select.value;
          currentIconLibraryCss     = select.options[select.selectedIndex].dataset.css;
          icon_picker.setOptions({
            iconLibraries:          [currentIconLibrary + '.min.json'],
            iconLibrariesCss:       [currentIconLibraryCss]
          });
        }
      } // END init_select_events
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (() => {
        var pageState   = $('#content').css("display");
        var pageVisible = (pageState === 'block') ? true : false;
        var j1Finished  = (j1.getState() === 'finished') ? true : false;
        if (j1Finished && pageVisible) {
          _this.setState('started');
          logger.debug('\n' + 'set module state to: ' + _this.getState());
          logger.info('\n' + 'initializing started');
          var dependencies_met_modules_ready = setInterval(() => {
            var selectState         = $('#container_icon_library_select_wrapper').length;
            var selectReady         = (selectState > 0) ? true : false;
            var slimSelectFinished  = (j1.adapter.slimSelect.getState() === 'finished') ? true: false;
            var iconPickerFinished = (j1.adapter.iconPicker.getState() === 'finished') ? true: false;
            if (slimSelectFinished && iconPickerFinished && selectReady) {
              logger.info('\n' + 'initializing select data');
              // setup initial slimSelect values|iconPicker options
              init_select();
              clearInterval(dependencies_met_modules_ready);
            } // END if modules loaded
          }, 10); // END if modules loaded
          // currently, a dummy headline is required to place the
          // select in the page correcty (after the picker button)
          //
          const dummy = document.getElementById('dummy');
          dummy.remove();
          var wrapperContainer = document.getElementById('icon_library_select_wrapper');
          wrapperContainer.classList.add('mb-7');
          clearInterval(dependencies_met_page_ready);
        } // END if page loaded
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



