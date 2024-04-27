

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/logger.js
 # JS Adapter for for J1 Logger (log4javascript)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # Adapter generated: 2024-04-25 16:41:58 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.logger = ((j1, window) => {
  var environment           = 'development';
  var page_id               = j1.generateId(11);
  var cookie_names          = j1.getCookieNames();
  var loggerRequestCallback = false;
  var state                 = 'not_started';
  var utilServerOptions     = {};
  var ajaxAppenderOptions   = {};
  var loggerDefaults;
  var loggerSettings;
  var loggerOptions;
  var user_session;
  var appDetected;
  var ajaxAppender;
  var consoleAppender;
  var jsonLayout;
  var httpPostDataLayout;
  var xmlLayout;
  var jsonLayout;
  var nullLayout;
  var simpleLayout;
  var patternLayout;
  var payloadURL;
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
  //
  // ---------------------------------------------------------------------------
  // getCustomData
  // throw a 'fake' exception to retrieve the stack trace and analyze
  // to find the line from which this function was called
  // ---------------------------------------------------------------------------
  var getCustomData = (layout, loggingReference) => {
    var customData = [];
    try { (0)(); } catch (e) {
      var pattern = /^(.+?) ?\(?((?:file|https?|chrome-extension):.*?):(\d+)(?::(\d+))?\)?\s*$/ig;
      // Split the stack trace
      var output = e.stack.replace(/^.*?\n/,'').replace(/(?:\n@:0)?\s+$/m,'').replace(/^\(/gm,'{anon}(').split('\n');
      // The last trace in the array is the line this function was called
      var logger_trace = output.pop();
      // Extract the full path:line number from this trace
      var path = logger_trace.replace(pattern, '$2:$3');
      // Extract the filename and line number from this trace
      var logger_location = logger_trace.split(':');
      var file = logger_location[logger_location.length - 3];
      var splitString = file.split('/');
      // The filename is (in array) at position length - 1
      file = splitString[splitString.length - 1];
      // If no file(name) found in the array, the file is the index document
      if (file == '') file = '(index)';
      var line = logger_location[logger_location.length - 2];
      // Push resulting fields on an Object|Array to identify
      // the first custom field (%f{1}) by index [0]
      customData.push({ 'name':  'file', 'value':file });
      customData.push({ 'name':  'line', 'value': line });
      customData.push({ 'name':  'path', 'value': path });
      customData.push({ 'name':  'id',   'value': page_id });
    }
    // set custom fields > %f{1}
    for (var i = 1, len = layout.customFields.length; i < len; i++) {
      var name = layout.customFields[i].name;
      if (customData[i].value) layout.customFields[i].value = customData[i].value;
    }
    // return custom field %f{1}
    return customData[0].value;
  };
  var requestCallback = (data) => {
    var xhrData = data;
    //
    // place handling of command|action here
    //
    return;
  };
  // ---------------------------------------------------------------------------
  // main
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // adapter initializer
    // -------------------------------------------------------------------------
    init: (options) => {
      // initialize state flag
      j1.adapter.logger.state = 'started';
      // -----------------------------------------------------------------------
      // default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.logger',
        generated:   '2024-04-25 16:41:58 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      _this               = j1.adapter.logger;
      logger              = log4javascript.getLogger('j1.adapter.logger');
      // Load  module DEFAULTS|CONFIG
      loggerDefaults      = $.extend({},   {"enabled":true, "tz_offset":"GMT+01:00", "appenders":[{"name":"Console Appender", "appender":{"name":"consoleAppender", "enabled":false, "type":"BrowserConsoleAppender", "layout":"PatternLayout", "custom_fields":["file", "line", "path"], "pattern_string":"[%d{HH:mm:ss.SSS}] [%-5p] [%-40c] [%f{1}:%f{2}] [%m]%n                       [%f{3}]"}}, {"name":"Ajax Appender", "appender":{"name":"ajaxAppender", "enabled":false, "type":"BrowserAjaxAppender", "layout":"JsonLayout", "custom_fields":["file", "line", "path"], "log_folder":"log", "log_file_name":"messages", "log_file_ext":"log", "create_on_start":true, "reset_on_start":true, "rolling_files":false, "mode":"append"}}, {"name":"Popup Appender", "appender":{"name":"popupAppender", "enabled":false, "type":"PopUpAppender", "width":600, "height":400, "lazyInit":false, "initiallyMinimized":false, "layout":"PatternLayout", "custom_fields":[], "pattern_string":"[%d{HH:mm:ss}] [ %-5p] - [%m{1}]%n"}}], "loggers":[{"name":"Parent Logger", "logger":{"type":"parent", "name":"j1", "appender":["consoleAppender", "ajaxAppender"], "level":{"production":"warn", "development":"debug"}}}]});
      loggerSettings      = $.extend({},   {"tz_offset":"GMT+01:00", "appenders":[{"name":"Console Appender", "appender":{"name":"consoleAppender", "enabled":true}}, {"name":"Ajax Appender", "appender":{"name":"ajaxAppender", "enabled":false}}, {"name":"Popup Appender", "appender":{"name":"popupAppender", "enabled":false}}]});
      loggerOptions       = $.extend(true, {}, loggerDefaults, loggerSettings);
      ajaxAppenderOptions = loggerOptions.appenders[1].appender;
      /* eslint-disable */
      utilServerOptions   = $.extend({}, {"enabled":false, "private_data":"_data/private.yml", "ssl":false, "origin":"localhost", "host_name":"0.0.0.0", "port":40020, "verbose":false, "logger_client":{"log_folder":"log", "log_file_name":"messages", "log_file_ext":"log", "create_on_start":true, "reset_on_start":true, "rolling_files":false, "file_mode":"append"}, "oauth_client":{"enabled":false, "provider":"github", "provider_url":"https://github.com", "token_path":"/login/oauth/access_token", "authorize_path":"/login/oauth/authorize"}, "git_client":{"enabled":false, "secret":"12ada70c0d34914d194f1a790c9b23bd", "payload_url":"https://smee.io/bzTe8lpQq1KeSJF", "pull":{"execute":false, "response_success":"The pull request to your local working copy finished successfully.", "response_failed":"The pull request to your local working copy has failed. Reason: "}}, "npm_client":{"enabled":false, "built":{"execute":false, "response_success":"The built request to your local site finished successfully.", "response_failed":"The built request to your local fite has failed. Reason: "}}, "commit_detection":{"modal_commit_detected":{"enabled":true, "autohide":false, "autohidden":5000}, "modal_pull_response":{"enabled":true, "autohide":false, "autohidden":5000}}});
      /* eslint-enable */
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependencies_met_mode_detected = setInterval(() => {
        var userSession  = j1.readCookie(cookie_names.user_session);
        var sessionReady = (userSession.mode !== 'na') ? true : false;
        if (sessionReady) {
          startTimeModule = Date.now();
          // appDetected = user_session.mode === 'app' ? true : false;
          // if (appDetected) {
          //   payloadURL = ajaxAppenderOptions.payload_url_app;
          // } else {
          //   payloadURL = ajaxAppenderOptions.payload_url_web;
          // }
          payloadURL = 'http://localhost:' + utilServerOptions.port + '/log2disk?request=write';
          // -------------------------------------------------------------------
          // setup appenders
          // -------------------------------------------------------------------
          // consoleAppender (browser console)
          //
          consoleAppender = new log4javascript.BrowserConsoleAppender();
          consoleAppender.setThreshold(log4javascript.Level.DEBUG);
          // ajaxAppender (XHR)
          // HTTP POST log data on the utility server (write log to disk)
          //
          ajaxAppender = new log4javascript.AjaxAppender(payloadURL);
          ajaxAppender.setThreshold(log4javascript.Level.DEBUG);
          ajaxAppender.setWaitForResponse(true);
          ajaxAppender.setSendAllOnUnload(true);
          ajaxAppender.addHeader('X-Page-ID', page_id);
          ajaxAppender.addHeader('X-TZ-Offset', loggerOptions.tz_offset);
          // success callback for testing (disabled for default)
          if (loggerRequestCallback) {
            ajaxAppender.setRequestSuccessCallback(requestCallback);
          }
          // setup layouts
          patternLayout      = new log4javascript.PatternLayout('[%d{HH:mm:ss.SSS}] [%f{4}] [%-5p] [%-60c] [%f{1}:%f{2}] %m%n[%f{3}]');
          httpPostDataLayout = new log4javascript.HttpPostDataLayout();
          xmlLayout          = new log4javascript.XmlLayout();
          jsonLayout         = new log4javascript.JsonLayout();
          nullLayout         = new log4javascript.NullLayout();
          simpleLayout       = new log4javascript.SimpleLayout();
          // use the method getLineNumber() as the value for the 0th custom field
          patternLayout.setCustomField('file',    getCustomData);
          patternLayout.setCustomField('line',    getCustomData);
          patternLayout.setCustomField('path',    getCustomData);
          patternLayout.setCustomField('id',      getCustomData);
          httpPostDataLayout.setCustomField('id', page_id);
          consoleAppender.setLayout(patternLayout);
          ajaxAppender.setLayout(httpPostDataLayout);
          // setup log levels
          if (environment === 'production') {
            log4javascript.getLogger('j1').setLevel(log4javascript.Level.WARN);
          }
          if (environment === 'development' || environment == 'devel' || environment == 'dev' || environment == 'test') {
            log4javascript.getLogger('j1').setLevel(log4javascript.Level.DEBUG);
          } else {
            // fallback settings
            log4javascript.getLogger('j1').setLevel(log4javascript.Level.WARN);
          }
          // setup (root) loggers
          log4javascript.getRootLogger().addAppender(consoleAppender);
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          // to use the ajaxAppender (write logs to disk), the utility server
          // needs to be enabled (util_srv.yml) as well
          //
          if (ajaxAppenderOptions.enabled) {
            log4javascript.getRootLogger().addAppender(ajaxAppender);
            logger.info('\n' + 'ajax appender/util server detected as: enabled');
          } else {
            logger.info('\n' + 'ajax appender/util server detected as: disabled');
          }
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module initialized successfully');
          endTimeModule = Date.now();
          logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
          clearInterval(dependencies_met_mode_detected);
          return true;
        } // END sessionReady
      }, 10); // END dependencies_met_mode_detected
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



