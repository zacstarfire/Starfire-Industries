

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/scroller.js
 # J1 Adapter for the J1 Scroller jQuery plugin
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
j1.adapter.scroller = ((j1, window) => {
  var environment   = 'development';
  var language      = 'en';
  var user_agent    = platform.ua;
  var state         = 'not_started';
  var scrollerDefaults;
  var scrollerSettings;
  var scrollerOptions;
  var lastPageInfo;
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
      var settings = $.extend({
        module_name: 'j1.adapter.scroller',
        generated:   '2024-04-25 16:34:03 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.scroller;
      logger  = log4javascript.getLogger('j1.adapter.scroller');
      // load module DEFAULTS|CONFIG
      scrollerDefaults = $.extend({}, {"enabled":false, "smoothscroll":{"offsetBase":80, "offsetCorrection":0, "offsetCorrectionLocal":0}});
      scrollerSettings = $.extend({}, {"enabled":true, "smoothscroll":{"offsetBase":80, "offsetCorrection":-9, "offsetCorrectionLocal":-90}, "scrollers":[{"scroller":{"enabled":false, "type":"showOnScroll", "id":"panel_home_intro", "container":"panel_home_intro", "showDelay":1000, "scrollOffset":500}}, {"scroller":{"enabled":false, "type":"showOnScroll", "id":"panel_home_service", "container":"panel_home_service", "showDelay":700, "scrollOffset":200}}, {"scroller":{"enabled":true, "type":"infiniteScroll", "id":"panel_home_news", "container":"panel_home_news-scroll-group", "pagePath":"/assets/data/news_panel_posts/page", "elementScroll":true, "scrollOffset":200, "lastPage":2, "infoLastPage":true, "lastPageInfo_en":"More articles can be found with the <a href=\"/pages/public/blog/navigator/\" class=\"link-no-decoration\">Navigator</a>\n", "lastPageInfo_de":"Weitere Artikel finden Sie im <a href=\"/pages/public/blog/navigator/\" class=\"link-no-decoration\">Navigator</a>\n"}}, {"scroller":{"enabled":true, "type":"infiniteScroll", "id":"preview_content", "container":"timeline", "pagePath":"/pages/public/blog/navigator/page", "elementScroll":true, "scrollOffset":200, "lastPage":2, "infoLastPage":false, "lastPageInfo_en":"", "lastPageInfo_de":""}}]});
      scrollerOptions  = $.extend(true, {}, scrollerDefaults, scrollerSettings);
      // initialize state flag
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      // -----------------------------------------------------------------------
      // module initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval(() => {
        var pageState       = $('#content').css("display");
        var pageVisible     = (pageState === 'block') ? true: false;
        var j1CoreFinished  = (j1.getState() === 'finished') ? true : false;
        var atticFinished   = (j1.adapter.attic.getState() == 'finished') ? true : false;
        if (j1CoreFinished && pageVisible && atticFinished) {
          startTimeModule = Date.now();
          _this.setState('started');
          logger.debug('\n' + 'set module state to: ' + _this.getState());
          logger.info('\n' + 'initializing module: started');
          logger.info('\n' + 'initialize scrollers');
          _this.generate_scrollers();
          clearInterval(dependencies_met_page_ready);
        } // END if pageVisible
      }, 10); // END dependency_met_page_ready
    }, // END init
    // -------------------------------------------------------------------------
    // generate_scrollers()
    // generate scrollers configured|enabled
    // -------------------------------------------------------------------------
    generate_scrollers: () => {
      var wrapper_dependencies = {};
      var dependency;
      logger.info('\n' + 'scroller panel_home_news is being initialized on wrapper: panel_home_news-scroll-group');
      // create dynamic loader variable to setup
      dependency = 'dependency_met_wrapper_ready_panel_home_news-scroll-group';
      wrapper_dependencies[dependency] = '';
      wrapper_dependencies['dependency_met_wrapper_ready_panel_home_news-scroll-group'] = setInterval(() => {
        var scrollerID     = document.getElementById('panel_home_news-scroll-group');
        var scrollerExists = (scrollerID !== undefined || scrollerID !== null ) ? true: false;
        // process the wrapper if extsts
        if (scrollerExists) {
          var container = '#' + 'panel_home_news-scroll-group';
          var pagePath  = '/assets/data/news_panel_posts/page';
          var dependencies_met_container_exists = setInterval(() => {
            var containerExists = ($(container).length) ? true : false;
              if (containerExists) {
                // create an (scroller) instance of infiniteScroll
                logText = '\n' + 'scroller of type infiniteScroll initialized on: ' + 'panel_home_news';
                logger.info(logText);
                if (language === 'en') {
                  lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
                  lastPageInfo += 'More articles can be found with the <a href="/pages/public/blog/navigator/" class="link-no-decoration">Navigator</a>';
                  lastPageInfo += '</p></div>';
                } else if (language === 'de') {
                  lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
                  lastPageInfo += 'Weitere Artikel finden Sie im <a href="/pages/public/blog/navigator/" class="link-no-decoration">Navigator</a>';
                  lastPageInfo += '</p></div>';
                } else {
                  lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
                  lastPageInfo += 'More articles can be found with the <a href="/pages/public/blog/navigator/" class="link-no-decoration">Navigator</a>';
                  lastPageInfo += '</p></div>';
                }
                $(container).scroller({
                  id:             'panel_home_news',
                  type:           'infiniteScroll',
                  pagePath:       '/assets/data/news_panel_posts/page',
                  elementScroll:  true,
                  scrollOffset:   200,
                  lastPage:       2,
                  infoLastPage:   true,
                  lastPageInfo:   lastPageInfo,
                });
                _this.setState('finished');
                logger.debug('\n' + 'state: ' + _this.getState());
                logger.info('\n' + 'module initialized successfully');
                endTimeModule = Date.now();
                logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
                clearInterval(dependencies_met_container_exists);
            } // END containerExists
          }, 10); // END dependencies_met_container_exists
          // END scroller_id: panel_home_news
          clearInterval(wrapper_dependencies['dependency_met_wrapper_ready_panel_home_news-scroll-group']);
        } // END if scrollerExists
      }, 10); // END dependencies_met_scroller_exists
      logger.info('\n' + 'scroller preview_content is being initialized on wrapper: timeline');
      // create dynamic loader variable to setup
      dependency = 'dependency_met_wrapper_ready_timeline';
      wrapper_dependencies[dependency] = '';
      wrapper_dependencies['dependency_met_wrapper_ready_timeline'] = setInterval(() => {
        var scrollerID     = document.getElementById('timeline');
        var scrollerExists = (scrollerID !== undefined || scrollerID !== null ) ? true: false;
        // process the wrapper if extsts
        if (scrollerExists) {
          var container = '#' + 'timeline';
          var pagePath  = '/pages/public/blog/navigator/page';
          var dependencies_met_container_exists = setInterval(() => {
            var containerExists = ($(container).length) ? true : false;
              if (containerExists) {
                // create an (scroller) instance of infiniteScroll
                logText = '\n' + 'scroller of type infiniteScroll initialized on: ' + 'preview_content';
                logger.info(logText);
                if (language === 'en') {
                  lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
                  lastPageInfo += '';
                  lastPageInfo += '</p></div>';
                } else if (language === 'de') {
                  lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
                  lastPageInfo += '';
                  lastPageInfo += '</p></div>';
                } else {
                  lastPageInfo =  '<div class="page-scroll-last"><p class="infinite-scroll-last">';
                  lastPageInfo += '';
                  lastPageInfo += '</p></div>';
                }
                $(container).scroller({
                  id:             'preview_content',
                  type:           'infiniteScroll',
                  pagePath:       '/pages/public/blog/navigator/page',
                  elementScroll:  true,
                  scrollOffset:   200,
                  lastPage:       2,
                  infoLastPage:   false,
                  lastPageInfo:   lastPageInfo,
                });
                _this.setState('finished');
                logger.debug('\n' + 'state: ' + _this.getState());
                logger.info('\n' + 'module initialized successfully');
                endTimeModule = Date.now();
                logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
                clearInterval(dependencies_met_container_exists);
            } // END containerExists
          }, 10); // END dependencies_met_container_exists
          // END scroller_id: preview_content
          clearInterval(wrapper_dependencies['dependency_met_wrapper_ready_timeline']);
        } // END if scrollerExists
      }, 10); // END dependencies_met_scroller_exists
    }, // END generate scrollers
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



