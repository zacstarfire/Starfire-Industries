

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/waves.js
 # J1 Adapter for the waves module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # NOTE: Wave styles defind in /assets/data/panel.html, key 'wave'
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
j1.adapter.slimSelect = ((j1, window) => {
// -----------------------------------------------------------------------------
// Set global variables
// -----------------------------------------------------------------------------
var slimSelectDefaults;
var slimSelectSettings;
var slimSelectOptions;
var _this;
var logger;
var logText;
var selectDIV;
var selectHTML;
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
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.slimSelect',
        generated:   '2024-04-25 16:41:58 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      slimSelectDefaults  = $.extend({}, {"enabled":false, "api_options":{"showSearch":true, "searchPlaceholder":"Enter your search expression", "searchText":"No results", "searchingText":"Searching ...", "searchHighlight":false, "closeOnSelect":true, "contentPosition":"absolute", "openPosition":"auto", "placeholderText":"Select an item", "allowDeselect":false, "hideSelected":false, "showOptionTooltips":false, "minSelected":0, "maxSelected":1, "timeoutDelay":200, "maxValuesShown":20, "maxValuesMessage":"{number} selected"}});
      slimSelectSettings  = $.extend({}, {"enabled":true, "api_options":{"showSearch":true}, "selects":[{"select":"icon_library", "enabled":true, "wrapper_id":"icon_library_select_wrapper", "id":"icon_library", "name":"icon-library", "items":"<select id=\"icon_library\" name=\"icon-library\">\n  <optgroup label=\"Material Design Icons (MDI)\">\n    <option value=\"mdi-icons-base\"        data-css=\"/assets/themes/j1/core/css/icon-fonts/mdib.min.css\" selected=\"selected\">MDI Icons Base</option>\n    <option value=\"mdi-icons-light\"       data-css=\"/assets/themes/j1/core/css/icon-fonts/mdil.min.css\">MDI Icons Light</option>\n    <option value=\"mdi-icons-regular\"     data-css=\"/assets/themes/j1/core/css/icon-fonts/mdi.min.css\">MDI Icons Regular</option>\n  </optgroup>\n\n  <optgroup label=\"Font Awesome Icons (FA)\">\n    <option value=\"font-awesome\"          data-css=\"/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css\">FA Icons (all)</option>\n    <option value=\"font-awesome-solid\"    data-css=\"/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css\">FA Icons Solid</option>\n    <option value=\"font-awesome-regular\"  data-css=\"/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css\">FA Icons Regular</option>\n    <option value=\"font-awesome-brands\"   data-css=\"/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css\">FA Icons Brands</option>\n  </optgroup>\n</select>\n"}, {"select":"prompt_history", "enabled":true, "wrapper_id":"prompt_history_select_wrapper", "id":"prompt_history", "name":"prompt-history", "items":"<select multiple=\"\" id=\"prompt_history\" name=\"prompt-history\"></select>"}, {"select":"search_history", "enabled":true, "wrapper_id":"search_history_select_wrapper", "id":"search_history", "name":"search-history", "items":"<select multiple=\"\" id=\"search_history\" name=\"search-history\"></select>"}]});
      slimSelectOptions   = $.extend(true, {}, slimSelectDefaults, slimSelectSettings);
      _this               = j1.adapter.slimSelect;
      logger              = log4javascript.getLogger('j1.adapter.slimSelect');
      // intialize select data (for later access)
      _this.select        = {};
      _this.selectHTML    = {};
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
          logger.debug('\n' + 'set module state to: ' + _this.getState());
          logger.info('\n' + 'initializing module: started');
          var wrapper_dependencies = {};
          var dependency;
          // setup selects on all wrappers
          logger.debug('\n' + 'select icon_library is being initialized on wrapper: icon_library_select_wrapper');
          // create dynamic loader variable to setup the
          // select 'icon_library' on wrapper: 'icon_library_select_wrapper'
          dependency = 'dependency_met_wrapper_ready_icon_library';
          wrapper_dependencies[dependency] = '';
          wrapper_dependencies['dependency_met_wrapper_ready_icon_library'] = setInterval (() => {
            var wrapperState = $('#icon_library_select_wrapper').length;
            var wrapperReady = (wrapperState > 0) ? true : false;
            // process the wrapper if extsts
            if (wrapperReady) {
              logger.debug('\n' + 'select icon_library is being placed on wrapper: icon_library_select_wrapper');
              // create|place select <div> element
              selectDIV           = document.createElement('div');
              selectDIV.id        = 'container_icon_library_select_wrapper';
              selectHTML          = `<select id="icon_library" name="icon-library">
  <optgroup label="Material Design Icons (MDI)">
    <option value="mdi-icons-base"        data-css="/assets/themes/j1/core/css/icon-fonts/mdib.min.css" selected="selected">MDI Icons Base</option>
    <option value="mdi-icons-light"       data-css="/assets/themes/j1/core/css/icon-fonts/mdil.min.css">MDI Icons Light</option>
    <option value="mdi-icons-regular"     data-css="/assets/themes/j1/core/css/icon-fonts/mdi.min.css">MDI Icons Regular</option>
  </optgroup>
  <optgroup label="Font Awesome Icons (FA)">
    <option value="font-awesome"          data-css="/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css">FA Icons (all)</option>
    <option value="font-awesome-solid"    data-css="/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css">FA Icons Solid</option>
    <option value="font-awesome-regular"  data-css="/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css">FA Icons Regular</option>
    <option value="font-awesome-brands"   data-css="/assets/themes/j1/core/css/icon-fonts/fontawesome.min.css">FA Icons Brands</option>
  </optgroup>
</select>
`;
              selectDIV.innerHTML = selectHTML;
              document.getElementById('icon_library_select_wrapper').appendChild(selectDIV);
              // store the select HTML code into the adapter for later access
              _this.selectHTML.icon_library = selectDIV;
              // setup new SlimSelect
              // jadams, 2024-03-06: setup events moved to page (test_icon_picker.adoc)
              logger.debug('\n' + 'SlimSelect object is being created for id: icon_library');
              var $select_icon_library = new SlimSelect ({
                select:                   'select[name ="icon-library"]',
                settings: {
                  showSearch:             slimSelectOptions.api_options.showSearch,
                  searchPlaceholder:      slimSelectOptions.api_options.searchPlaceholder,
                  searchText:             slimSelectOptions.api_options.searchText,
                  searchingText:          slimSelectOptions.api_options.searchingText,
                  searchHighlight:        slimSelectOptions.api_options.searchHighlight,
                  closeOnSelect:          slimSelectOptions.api_options.closeOnSelect,
                  contentPosition:        slimSelectOptions.api_options.contentPosition,
                  openPosition:           slimSelectOptions.api_options.openPosition,
                  placeholderText:        slimSelectOptions.api_options.placeholderText,
                  allowDeselect:          slimSelectOptions.api_options.allowDeselect,
                  hideSelected:           slimSelectOptions.api_options.hideSelected,
                  showOptionTooltips:     slimSelectOptions.api_options.showOptionTooltips,
                  minSelected:            slimSelectOptions.api_options.minSelected,
                  maxSelected:            slimSelectOptions.api_options.maxSelected,
                  timeoutDelay:           slimSelectOptions.api_options.timeoutDelay,
                  maxValuesShown:         slimSelectOptions.api_options.maxValuesShown
                }
              });
              // store the select in the adapter for later access
              _this.select.icon_library = $select_icon_library;
              logger.debug('\n' + 'initializing finished select: icon_library');
              clearInterval(wrapper_dependencies['dependency_met_wrapper_ready_icon_library']);
            } // END if wrapperReady
          }, 10); // END dependency_met_wrapper_ready
          logger.debug('\n' + 'select prompt_history is being initialized on wrapper: prompt_history_select_wrapper');
          // create dynamic loader variable to setup the
          // select 'prompt_history' on wrapper: 'prompt_history_select_wrapper'
          dependency = 'dependency_met_wrapper_ready_prompt_history';
          wrapper_dependencies[dependency] = '';
          wrapper_dependencies['dependency_met_wrapper_ready_prompt_history'] = setInterval (() => {
            var wrapperState = $('#prompt_history_select_wrapper').length;
            var wrapperReady = (wrapperState > 0) ? true : false;
            // process the wrapper if extsts
            if (wrapperReady) {
              logger.debug('\n' + 'select prompt_history is being placed on wrapper: prompt_history_select_wrapper');
              // create|place select <div> element
              selectDIV           = document.createElement('div');
              selectDIV.id        = 'container_prompt_history_select_wrapper';
              selectHTML          = `<select multiple="" id="prompt_history" name="prompt-history"></select>`;
              selectDIV.innerHTML = selectHTML;
              document.getElementById('prompt_history_select_wrapper').appendChild(selectDIV);
              // store the select HTML code into the adapter for later access
              _this.selectHTML.prompt_history = selectDIV;
              // setup new SlimSelect
              // jadams, 2024-03-06: setup events moved to page (test_icon_picker.adoc)
              logger.debug('\n' + 'SlimSelect object is being created for id: prompt_history');
              var $select_prompt_history = new SlimSelect ({
                select:                   'select[name ="prompt-history"]',
                settings: {
                  showSearch:             slimSelectOptions.api_options.showSearch,
                  searchPlaceholder:      slimSelectOptions.api_options.searchPlaceholder,
                  searchText:             slimSelectOptions.api_options.searchText,
                  searchingText:          slimSelectOptions.api_options.searchingText,
                  searchHighlight:        slimSelectOptions.api_options.searchHighlight,
                  closeOnSelect:          slimSelectOptions.api_options.closeOnSelect,
                  contentPosition:        slimSelectOptions.api_options.contentPosition,
                  openPosition:           slimSelectOptions.api_options.openPosition,
                  placeholderText:        slimSelectOptions.api_options.placeholderText,
                  allowDeselect:          slimSelectOptions.api_options.allowDeselect,
                  hideSelected:           slimSelectOptions.api_options.hideSelected,
                  showOptionTooltips:     slimSelectOptions.api_options.showOptionTooltips,
                  minSelected:            slimSelectOptions.api_options.minSelected,
                  maxSelected:            slimSelectOptions.api_options.maxSelected,
                  timeoutDelay:           slimSelectOptions.api_options.timeoutDelay,
                  maxValuesShown:         slimSelectOptions.api_options.maxValuesShown
                }
              });
              // store the select in the adapter for later access
              _this.select.prompt_history = $select_prompt_history;
              logger.debug('\n' + 'initializing finished select: prompt_history');
              clearInterval(wrapper_dependencies['dependency_met_wrapper_ready_prompt_history']);
            } // END if wrapperReady
          }, 10); // END dependency_met_wrapper_ready
          logger.debug('\n' + 'select search_history is being initialized on wrapper: search_history_select_wrapper');
          // create dynamic loader variable to setup the
          // select 'search_history' on wrapper: 'search_history_select_wrapper'
          dependency = 'dependency_met_wrapper_ready_search_history';
          wrapper_dependencies[dependency] = '';
          wrapper_dependencies['dependency_met_wrapper_ready_search_history'] = setInterval (() => {
            var wrapperState = $('#search_history_select_wrapper').length;
            var wrapperReady = (wrapperState > 0) ? true : false;
            // process the wrapper if extsts
            if (wrapperReady) {
              logger.debug('\n' + 'select search_history is being placed on wrapper: search_history_select_wrapper');
              // create|place select <div> element
              selectDIV           = document.createElement('div');
              selectDIV.id        = 'container_search_history_select_wrapper';
              selectHTML          = `<select multiple="" id="search_history" name="search-history"></select>`;
              selectDIV.innerHTML = selectHTML;
              document.getElementById('search_history_select_wrapper').appendChild(selectDIV);
              // store the select HTML code into the adapter for later access
              _this.selectHTML.search_history = selectDIV;
              // setup new SlimSelect
              // jadams, 2024-03-06: setup events moved to page (test_icon_picker.adoc)
              logger.debug('\n' + 'SlimSelect object is being created for id: search_history');
              var $select_search_history = new SlimSelect ({
                select:                   'select[name ="search-history"]',
                settings: {
                  showSearch:             slimSelectOptions.api_options.showSearch,
                  searchPlaceholder:      slimSelectOptions.api_options.searchPlaceholder,
                  searchText:             slimSelectOptions.api_options.searchText,
                  searchingText:          slimSelectOptions.api_options.searchingText,
                  searchHighlight:        slimSelectOptions.api_options.searchHighlight,
                  closeOnSelect:          slimSelectOptions.api_options.closeOnSelect,
                  contentPosition:        slimSelectOptions.api_options.contentPosition,
                  openPosition:           slimSelectOptions.api_options.openPosition,
                  placeholderText:        slimSelectOptions.api_options.placeholderText,
                  allowDeselect:          slimSelectOptions.api_options.allowDeselect,
                  hideSelected:           slimSelectOptions.api_options.hideSelected,
                  showOptionTooltips:     slimSelectOptions.api_options.showOptionTooltips,
                  minSelected:            slimSelectOptions.api_options.minSelected,
                  maxSelected:            slimSelectOptions.api_options.maxSelected,
                  timeoutDelay:           slimSelectOptions.api_options.timeoutDelay,
                  maxValuesShown:         slimSelectOptions.api_options.maxValuesShown
                }
              });
              // store the select in the adapter for later access
              _this.select.search_history = $select_search_history;
              logger.debug('\n' + 'initializing finished select: search_history');
              clearInterval(wrapper_dependencies['dependency_met_wrapper_ready_search_history']);
            } // END if wrapperReady
          }, 10); // END dependency_met_wrapper_ready
          // END (for) all selects
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module: finished');
          endTimeModule = Date.now();
          logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval(dependency_met_page_ready);
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
  }; // END return
})(j1, window);



