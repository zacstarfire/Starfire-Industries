

  /*
 # -----------------------------------------------------------------------------
 #  ~/assets/themes/j1/adapter/js/iframer.js
 #  J1 Adapter for J1 Module iFramer
 #
 #  Product/Info:
 #  https://jekyll.one
 #  http://davidjbradshaw.github.io/iframe-resizer/
 #
 #  Copyright (C) 2023, 2024 Juergen Adams
 #  Copyright (C) 2013-2023  David J. Bradshaw
 #
 #  J1 Template is licensed under the MIT License.
 #  For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 #  iFrameResizer is licensed under under the MIT License.
 #  For details, see http://davidjbradshaw.github.io/iframe-resizer/
 #
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
j1.adapter.iframer = ((j1, window) => {
  var environment       = 'development';
  var state             = 'not_started';
  var iframerDefaults;
  var iframerSettings;
  var iframerOptions;
  var url;
  var origin;
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
    // adapter tnitializer
    // -------------------------------------------------------------------------
    init: (options) => {
      url     = new URL(window.location.href);
      origin  = url.origin;
      // -----------------------------------------------------------------------
      // default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.iframer',
        generated:   '2024-04-25 16:34:03 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.iframer;
      logger  = log4javascript.getLogger('j1.adapter.iframer');
      // Load  module DEFAULTS|CONFIG
      iframerDefaults = $.extend({}, {"enabled":false, "xhr_data_path":"/assets/data/iframes", "delay_iframer":1000, "inject_contentWindowScript":false, "delay_inject_contentWindowScript":500, "attributes":{"allow":false, "allowfullscreen":true, "height":false, "loading":"eager", "name":false, "referrerpolicy":"no-referrer", "src":"", "scrolling":false, "title":false, "width":false}, "options":{"autoResize":true, "bodyBackground":null, "bodyMargin":null, "bodyMarginV1":8, "bodyPadding":null, "checkOrigin":true, "inPageLinks":false, "enablePublicMethods":true, "heightCalculationMethod":"bodyOffset", "id":"iFrameResizer", "interval":32, "log":false, "maxHeight":"Infinity", "maxWidth":"Infinity", "minHeight":0, "minWidth":0, "mouseEvents":true, "resizeFrom":"parent", "scrolling":false, "sizeHeight":true, "sizeWidth":false, "warningTimeout":5000, "tolerance":0, "widthCalculationMethod":"scroll", "onClose":"function () { return true }", "onClosed":"function () {}", "onInit":"function () {}", "onMessage":"function () { warn('onMessage function not defined') }", "onMouseEnter":"function () {}", "onMouseLeave":"function () {}", "onResized":"function () {}", "onScroll":"function () { return true }"}});
      iframerSettings = $.extend({}, {"enabled":true, "iframes":[{"iframe":null, "enabled":true, "id":"magic_iframe", "inject_contentWindowScript":true, "attributes":{"loading":"lazy", "name":"iframe document", "src":"/pages/public/tools/previewer/iframer_documents/iframe.content.html", "width":"100%", "scrolling":false}, "options":{"log":true, "inPageLinks":true, "onResized":"function(messageData) {\n  // Callback when page is resized\n  $('p#resize_stats').html (\n    '<b>iFrame ID:</b> ' +\n      messageData.iframe.id +\n      '&nbsp;&nbsp; <b>Height:</b> ' +\n      messageData.height +\n      '&nbsp;&nbsp; <b>Width:</b> ' +\n      messageData.width +\n      '&nbsp;&nbsp; <b>Event type:</b> ' +\n      messageData.type\n  )\n}\n"}}, {"iframe":null, "enabled":true, "id":"documind", "inject_contentWindowScript":true, "attributes":{"loading":"lazy", "src":"/pages/public/tools/previewer/iframer_documents/iframe.docsearch.info.html", "title":"", "allowtransparency":true, "style":"background: #FAFAFA;", "height":600, "width":"100%"}, "options":{"checkOrigin":false}}]});
      iframerOptions  = $.extend(true, {}, iframerDefaults, iframerSettings);
      // load HTML portion for all grids
      console.debug('loading HTML portion for all iFrames configured');
      _this.loadIframeHTML(iframerOptions, iframerOptions.iframes);
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
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          logger.info('\n' + 'initialize iFramer');
          _this.initialize(iframerOptions);
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module finished');
          endTimeModule = Date.now();
          logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval(dependencies_met_page_ready);
        } // END j1CoreFinished && pageVisible
      }, 10); // END dependencies_met_page_ready
    }, // END init
    // -------------------------------------------------------------------------
    // Load AJAX data and initialize the jg gallery
    // -------------------------------------------------------------------------
    initialize: (options) => {
      var iframerOptions    = options;
      var xhrLoadState      = 'pending';                                        // (initial) load state for the HTML portion of the slider
      var load_dependencies = {};
      var dependency;
      // logger = log4javascript.getLogger('j1.adapter.gallery');
      _this.setState('running');
      logger.debug('\n' + 'state: ' + _this.getState());
        logger.info('\n' + 'found iframe on id: ' + 'magic_iframe');
          // create dynamic loader variable to setup the grid on id magic_iframe
          dependency = 'dependencies_met_html_loaded_magic_iframe';
          load_dependencies[dependency] = '';
          // initialize the iframe if HTML portion successfully loaded
          //
          load_dependencies['dependencies_met_html_loaded_magic_iframe'] = setInterval (() => {
            // check if HTML portion of the iframe is loaded successfully
            xhrLoadState = j1.xhrDOMState['#magic_iframe_parent'];
            if (xhrLoadState === 'success') {
              var $iframe_magic_iframe = $('#magic_iframe');                  // used for later access
              logger.info('\n' + 'dyn_loader, initialize iframe on id: ' + 'magic_iframe');
              // Inject contentWindow script into the docoment to be loaded
              // into an iframe element
              if ('true' == 'true') {
                setTimeout(() => {
                  var iframe;
                  var iframeSelector;
                  var iframeDocument;
                  var contentWindowScript;
                  // create DOM selector
                  //
                  iframeSelector            = 'magic_iframe'
                  iframe                    = document.getElementById(iframeSelector);
                  iframeDocument            = iframe.contentDocument || iframe.contentWindow.document;
                  // create contentWindow script
                  //
                  contentWindowScript       = iframeDocument.createElement('script');
                  contentWindowScript.id    = 'contentWindowScript';
                  contentWindowScript.async = true;
                  contentWindowScript.src   = origin + '/assets/themes/j1/modules/iframeResizer/js/client/iframeResizer.contentWindow.min.js';
                  iframeDocument.head.appendChild(contentWindowScript);
                }, iframerOptions.delay_inject_contentWindowScript);
            } // END if iframerOptions.inject_contentWindowScript
            setTimeout(() => {
              /* eslint-disable */
              var $iframe_magic_iframe = iFrameResize({
                  log: true,
                  inPageLinks: true,
                  onResized: function(messageData) {
  // Callback when page is resized
  $('p#resize_stats').html (
    '<b>iFrame ID:</b> ' +
      messageData.iframe.id +
      '&nbsp;&nbsp; <b>Height:</b> ' +
      messageData.height +
      '&nbsp;&nbsp; <b>Width:</b> ' +
      messageData.width +
      '&nbsp;&nbsp; <b>Event type:</b> ' +
      messageData.type
  )
}
,
                },
                '#magic_iframe'
              )
              /* eslint-enable */
            }, 1000);
            clearInterval(load_dependencies['dependencies_met_html_loaded_magic_iframe']);
          } // END  if xhrLoadState === 'success'
          }, 10); // END dependencies_met_html_loaded
         // ENDIF iframe enabled
        logger.info('\n' + 'found iframe on id: ' + 'documind');
          // create dynamic loader variable to setup the grid on id documind
          dependency = 'dependencies_met_html_loaded_documind';
          load_dependencies[dependency] = '';
          // initialize the iframe if HTML portion successfully loaded
          //
          load_dependencies['dependencies_met_html_loaded_documind'] = setInterval (() => {
            // check if HTML portion of the iframe is loaded successfully
            xhrLoadState = j1.xhrDOMState['#documind_parent'];
            if (xhrLoadState === 'success') {
              var $iframe_documind = $('#documind');                  // used for later access
              logger.info('\n' + 'dyn_loader, initialize iframe on id: ' + 'documind');
              // Inject contentWindow script into the docoment to be loaded
              // into an iframe element
              if ('true' == 'true') {
                setTimeout(() => {
                  var iframe;
                  var iframeSelector;
                  var iframeDocument;
                  var contentWindowScript;
                  // create DOM selector
                  //
                  iframeSelector            = 'documind'
                  iframe                    = document.getElementById(iframeSelector);
                  iframeDocument            = iframe.contentDocument || iframe.contentWindow.document;
                  // create contentWindow script
                  //
                  contentWindowScript       = iframeDocument.createElement('script');
                  contentWindowScript.id    = 'contentWindowScript';
                  contentWindowScript.async = true;
                  contentWindowScript.src   = origin + '/assets/themes/j1/modules/iframeResizer/js/client/iframeResizer.contentWindow.min.js';
                  iframeDocument.head.appendChild(contentWindowScript);
                }, iframerOptions.delay_inject_contentWindowScript);
            } // END if iframerOptions.inject_contentWindowScript
            setTimeout(() => {
              /* eslint-disable */
              var $iframe_documind = iFrameResize({
                  checkOrigin: false,
                },
                '#documind'
              )
              /* eslint-enable */
            }, 1000);
            clearInterval(load_dependencies['dependencies_met_html_loaded_documind']);
          } // END  if xhrLoadState === 'success'
          }, 10); // END dependencies_met_html_loaded
         // ENDIF iframe enabled
      _this.setState('finished');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module initialized successfully');
    }, // END function initialize
    // -------------------------------------------------------------------------
    // loadIframeHTML()
    // loads the HTML portion via AJAX for all iFrames configured.
    // NOTE: Make sure the placeholder DIV is available in the content
    // page as generated using the Asciidoc extension iframe::
    // -------------------------------------------------------------------------
    loadIframeHTML: (options, iframe) => {
      var numIFrames  = Object.keys(iframe).length;
      var activeIFrames  = numIFrames;
      var xhr_data_path = options.xhr_data_path + '/index.html';
      var xhr_container_id;
      console.debug('number of iframes found: ' + activeIFrames);
      _this.setState('load_data');
      Object.keys(iframe).forEach((key) => {
        if (iframe[key].enabled) {
          xhr_container_id = iframe[key].id + '_parent';
          console.debug('load HTML portion on iframe id: ' + iframe[key].id);
          j1.loadHTML({
            xhr_container_id: xhr_container_id,
            xhr_data_path:    xhr_data_path,
            xhr_data_element: iframe[key].id
          });
        } else {
          console.debug('iframe found disabled on id: ' + iframe[key].id);
          activeIFrames--;
        }
      });
      console.debug('iframes loaded in page enabled|all: ' + activeIFrames + '|' + numIFrames);
      _this.setState('data_loaded');
    }, // END loadIframeHTML
    // -------------------------------------------------------------------------
    // setXhrState
    // Set the final (loading) state of an element (partial) loaded via Xhr
    // -------------------------------------------------------------------------
    setXhrState: (obj, stat) => {
      j1.adapter.navigator.xhrData[obj] = stat;
    }, // END setXhrState
    // -------------------------------------------------------------------------
    // getState
    // Returns the final (loading) state of an element (partial) loaded via Xhr
    // -------------------------------------------------------------------------
    getXhrState: (obj) => {
      return j1.adapter.navigator.xhrData[obj];
    }, // END getXhrState
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



