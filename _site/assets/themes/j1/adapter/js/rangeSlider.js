

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/rangeSlider.js
 # J1 Adapter for J1 Module rangeSlider
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
j1.adapter.rangeSlider = ((j1, window) => {
  var environment   = 'development';
  var instances     = [];
  var state         = 'not_started';
  var rangeSliderDefaults;
  var rangeSliderSettings;
  var rangeSliderOptions;
  var elms;
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
  function prepend(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
  }
  function append(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  function insert(newNode, referenceNode) {
    referenceNode.appendChild(newNode);
  }
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
        module_name: 'j1.adapter.rangeSlider',
        generated:   '2024-04-25 16:41:58 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.rangeSlider;
      logger  = log4javascript.getLogger('j1.adapter.rangeSlider');
      // Load  module DEFAULTS|CONFIG
      rangeSliderDefaults = $.extend({}, {"enabled":false, "options":{"orientation":"vertical", "connect":true, "step":1, "cbOnUpdate":"j1.adapter.rangeSlider.cbOnUpdate", "format":{"decimals":0}}});
      rangeSliderSettings = $.extend({}, {"enabled":true, "options":{"orientation":"horizontal"}, "sliders":[{"slider":{"enabled":true, "id":"example_slider_asciidoc", "options":{"title":"Title of the Example Slider", "label":"Example Slider (Asciidoc), range: [5,50], start at: 25, step: 5", "start":25, "step":5, "connect":true, "range":{"min":5, "max":50}, "format":{"decimals":0}}}}, {"slider":{"enabled":true, "id":"example_slider_html", "options":{"title":"Title of the Example Slider (controlled)", "label":"Example Slider (HTML), range: [5,50], start at: 25, step: 5", "start":25, "step":5, "connect":true, "range":{"min":5, "max":50}, "format":{"decimals":0}}}}, {"slider":{"enabled":true, "id":"example_slider_1", "options":{"title":"", "label":"Slider 1, range: [0,100], start at: 20", "start":20, "connect":true, "step":1, "range":{"min":0, "max":100}, "format":{"decimals":0}}}}, {"slider":{"enabled":true, "id":"example_slider_2", "options":{"title":"", "label":"Slider 2, range: [0,200], start at: 80", "start":80, "connect":true, "step":1, "range":{"min":0, "max":200}, "format":{"decimals":0}}}}, {"slider":{"enabled":true, "id":"jgSlider_row_heigth", "options":{"title":"", "label":"Image Row Height [px]", "start":150, "connect":true, "step":1, "range":{"min":100, "max":300}, "format":{"decimals":0}}}}, {"slider":{"enabled":true, "id":"jgSlider_thumb_spacing", "options":{"title":"", "label":"Thumb Image Spacing [px]", "start":1, "connect":true, "step":1, "range":{"min":0, "max":10}, "format":{"decimals":0}}}}, {"slider":{"enabled":true, "id":"jgSlider_gallery_padding", "options":{"title":"", "label":"Gallery Padding [px]", "start":0, "connect":true, "step":1, "range":{"min":0, "max":50}, "format":{"decimals":0}}}}]});
      rangeSliderOptions  = $.extend(true, {}, rangeSliderDefaults, rangeSliderSettings);
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependencies_met_j1_finished = setInterval(() => {
        var pageState      = $('#content').css("display");
        var pageVisible    = (pageState === 'block') ? true : false;
        var j1CoreFinished = (j1.getState() === 'finished') ? true : false;
        if (j1CoreFinished) {
          startTimeModule = Date.now();
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          var dependencies_met_elms_loaded = setInterval(() => {
            elms = document.querySelectorAll('.range-slider');
            if (elms.length) {
              logger.info('\n' + 'number of rangeSlider elements found: ' + elms.length);
              var log_text = '\n' + 'rangeSlider elements are being initialized';
              logger.info(log_text);
                elms.forEach((elm) => {
                  var id      = elm.id;
                  var parent  = document.getElementById(id);
                  if (id === 'example_slider_asciidoc') {
                    // processing rangeSlider: example_slider_asciidoc
                    //
                    logger.info('\n' + 'configure rangeSlider: ' + id);
                    var slider_example_slider_asciidoc = document.getElementById('example_slider_asciidoc');
                    var instance = noUiSlider.create(slider_example_slider_asciidoc, {
                       start:       [25],
                       connect:     true,
                       step:        5,
                       orientation: 'horizontal',
                       range: {
                         'min':     5,
                         'max':     50
                       },
                       format: wNumb({
                         decimals:  0
                       })
                    });
                    if ('Title of the Example Slider'.length) {
                      var title = document.createElement('div');
                      title.classList.add('range-slider-title');
                      title.innerHTML = 'Title of the Example Slider';
                      prepend(title, parent);
                    }
                    var label = document.createElement('label');
                    label.classList.add('range-slider-label');
                    label.innerHTML = 'Example Slider (Asciidoc), range: [5,50], start at: 25, step: 5';
                    insert(label, parent);
                    slider_example_slider_asciidoc.noUiSlider.on('update', (values, handle) => {
                      var logger = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate');
                      logger.debug('\n' + 'current value: ' + values[handle]);
                    });
                    instances.push(instance);
                  }
                }); // END forEach
                elms.forEach((elm) => {
                  var id      = elm.id;
                  var parent  = document.getElementById(id);
                  if (id === 'example_slider_html') {
                    // processing rangeSlider: example_slider_html
                    //
                    logger.info('\n' + 'configure rangeSlider: ' + id);
                    var slider_example_slider_html = document.getElementById('example_slider_html');
                    var instance = noUiSlider.create(slider_example_slider_html, {
                       start:       [25],
                       connect:     true,
                       step:        5,
                       orientation: 'horizontal',
                       range: {
                         'min':     5,
                         'max':     50
                       },
                       format: wNumb({
                         decimals:  0
                       })
                    });
                    if ('Title of the Example Slider (controlled)'.length) {
                      var title = document.createElement('div');
                      title.classList.add('range-slider-title');
                      title.innerHTML = 'Title of the Example Slider (controlled)';
                      prepend(title, parent);
                    }
                    var label = document.createElement('label');
                    label.classList.add('range-slider-label');
                    label.innerHTML = 'Example Slider (HTML), range: [5,50], start at: 25, step: 5';
                    insert(label, parent);
                    slider_example_slider_html.noUiSlider.on('update', (values, handle) => {
                      var logger = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate');
                      logger.debug('\n' + 'current value: ' + values[handle]);
                    });
                    instances.push(instance);
                  }
                }); // END forEach
                elms.forEach((elm) => {
                  var id      = elm.id;
                  var parent  = document.getElementById(id);
                  if (id === 'example_slider_1') {
                    // processing rangeSlider: example_slider_1
                    //
                    logger.info('\n' + 'configure rangeSlider: ' + id);
                    var slider_example_slider_1 = document.getElementById('example_slider_1');
                    var instance = noUiSlider.create(slider_example_slider_1, {
                       start:       [20],
                       connect:     true,
                       step:        1,
                       orientation: 'horizontal',
                       range: {
                         'min':     0,
                         'max':     100
                       },
                       format: wNumb({
                         decimals:  0
                       })
                    });
                    if (''.length) {
                      var title = document.createElement('div');
                      title.classList.add('range-slider-title');
                      title.innerHTML = '';
                      prepend(title, parent);
                    }
                    var label = document.createElement('label');
                    label.classList.add('range-slider-label');
                    label.innerHTML = 'Slider 1, range: [0,100], start at: 20';
                    insert(label, parent);
                    slider_example_slider_1.noUiSlider.on('update', (values, handle) => {
                      var logger = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate');
                      logger.debug('\n' + 'current value: ' + values[handle]);
                    });
                    instances.push(instance);
                  }
                }); // END forEach
                elms.forEach((elm) => {
                  var id      = elm.id;
                  var parent  = document.getElementById(id);
                  if (id === 'example_slider_2') {
                    // processing rangeSlider: example_slider_2
                    //
                    logger.info('\n' + 'configure rangeSlider: ' + id);
                    var slider_example_slider_2 = document.getElementById('example_slider_2');
                    var instance = noUiSlider.create(slider_example_slider_2, {
                       start:       [80],
                       connect:     true,
                       step:        1,
                       orientation: 'horizontal',
                       range: {
                         'min':     0,
                         'max':     200
                       },
                       format: wNumb({
                         decimals:  0
                       })
                    });
                    if (''.length) {
                      var title = document.createElement('div');
                      title.classList.add('range-slider-title');
                      title.innerHTML = '';
                      prepend(title, parent);
                    }
                    var label = document.createElement('label');
                    label.classList.add('range-slider-label');
                    label.innerHTML = 'Slider 2, range: [0,200], start at: 80';
                    insert(label, parent);
                    slider_example_slider_2.noUiSlider.on('update', (values, handle) => {
                      var logger = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate');
                      logger.debug('\n' + 'current value: ' + values[handle]);
                    });
                    instances.push(instance);
                  }
                }); // END forEach
                elms.forEach((elm) => {
                  var id      = elm.id;
                  var parent  = document.getElementById(id);
                  if (id === 'jgSlider_row_heigth') {
                    // processing rangeSlider: jgSlider_row_heigth
                    //
                    logger.info('\n' + 'configure rangeSlider: ' + id);
                    var slider_jgSlider_row_heigth = document.getElementById('jgSlider_row_heigth');
                    var instance = noUiSlider.create(slider_jgSlider_row_heigth, {
                       start:       [150],
                       connect:     true,
                       step:        1,
                       orientation: 'horizontal',
                       range: {
                         'min':     100,
                         'max':     300
                       },
                       format: wNumb({
                         decimals:  0
                       })
                    });
                    if (''.length) {
                      var title = document.createElement('div');
                      title.classList.add('range-slider-title');
                      title.innerHTML = '';
                      prepend(title, parent);
                    }
                    var label = document.createElement('label');
                    label.classList.add('range-slider-label');
                    label.innerHTML = 'Image Row Height [px]';
                    insert(label, parent);
                    slider_jgSlider_row_heigth.noUiSlider.on('update', (values, handle) => {
                      var logger = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate');
                      logger.debug('\n' + 'current value: ' + values[handle]);
                    });
                    instances.push(instance);
                  }
                }); // END forEach
                elms.forEach((elm) => {
                  var id      = elm.id;
                  var parent  = document.getElementById(id);
                  if (id === 'jgSlider_thumb_spacing') {
                    // processing rangeSlider: jgSlider_thumb_spacing
                    //
                    logger.info('\n' + 'configure rangeSlider: ' + id);
                    var slider_jgSlider_thumb_spacing = document.getElementById('jgSlider_thumb_spacing');
                    var instance = noUiSlider.create(slider_jgSlider_thumb_spacing, {
                       start:       [1],
                       connect:     true,
                       step:        1,
                       orientation: 'horizontal',
                       range: {
                         'min':     0,
                         'max':     10
                       },
                       format: wNumb({
                         decimals:  0
                       })
                    });
                    if (''.length) {
                      var title = document.createElement('div');
                      title.classList.add('range-slider-title');
                      title.innerHTML = '';
                      prepend(title, parent);
                    }
                    var label = document.createElement('label');
                    label.classList.add('range-slider-label');
                    label.innerHTML = 'Thumb Image Spacing [px]';
                    insert(label, parent);
                    slider_jgSlider_thumb_spacing.noUiSlider.on('update', (values, handle) => {
                      var logger = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate');
                      logger.debug('\n' + 'current value: ' + values[handle]);
                    });
                    instances.push(instance);
                  }
                }); // END forEach
                elms.forEach((elm) => {
                  var id      = elm.id;
                  var parent  = document.getElementById(id);
                  if (id === 'jgSlider_gallery_padding') {
                    // processing rangeSlider: jgSlider_gallery_padding
                    //
                    logger.info('\n' + 'configure rangeSlider: ' + id);
                    var slider_jgSlider_gallery_padding = document.getElementById('jgSlider_gallery_padding');
                    var instance = noUiSlider.create(slider_jgSlider_gallery_padding, {
                       start:       [0],
                       connect:     true,
                       step:        1,
                       orientation: 'horizontal',
                       range: {
                         'min':     0,
                         'max':     50
                       },
                       format: wNumb({
                         decimals:  0
                       })
                    });
                    if (''.length) {
                      var title = document.createElement('div');
                      title.classList.add('range-slider-title');
                      title.innerHTML = '';
                      prepend(title, parent);
                    }
                    var label = document.createElement('label');
                    label.classList.add('range-slider-label');
                    label.innerHTML = 'Gallery Padding [px]';
                    insert(label, parent);
                    slider_jgSlider_gallery_padding.noUiSlider.on('update', (values, handle) => {
                      var logger = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate');
                      logger.debug('\n' + 'current value: ' + values[handle]);
                    });
                    instances.push(instance);
                  }
                }); // END forEach
              if (instances.length) {
                logger.info('\n' + 'number of rangeSlider instances configured: ' + instances.length);
              } else {
                logger.error('\n' + 'no configured rangeSlider instances found');
                logger.warning('\n' + 'initializing module failed');
              } // END if instances
            } // END if elms
            clearInterval(dependencies_met_elms_loaded);
          }, 10); // END dependencies_met_elms_loaded
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module finished');
          endTimeModule = Date.now();
          logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval(dependencies_met_j1_finished);
        } // END if j1CoreFinished
      }, 10); // END dependencies_met_j1_finished
    }, // END init
    // -------------------------------------------------------------------------
    // cbOnClick)
    // called by the rangeSlider CORE module when and dropdown element
    // is clicked
    // -------------------------------------------------------------------------
    cbOnclick: (event) => {
      var logger  = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnClick');
      var itemEl = $(event.target).closest('li')[0];
      // logText = '\n' + 'entered cbOnClick on id: ' + id;
      // logger.info(logText);
      return true;
    },
    // -------------------------------------------------------------------------
    // cbOnOpen()
    // called by the rangeSlider CORE module when dropdown get opened
    // -------------------------------------------------------------------------
    cbOnOpen: (elm) => {
      var logger  = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnOpen');
      var id      = elm.id;
      logText = '\n' + 'entered cbOnOpen on id: ' + id;
      logger.info(logText);
      return true;
    },
    // -------------------------------------------------------------------------
    // cbOnClose()
    // called by the rangeSlider CORE module when dropdown get closed
    // -------------------------------------------------------------------------
    cbOnClose: (elm) => {
      var logger    = log4javascript.getLogger('j1.adapter.rangeSlider.cbOnClose');
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
    },
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



