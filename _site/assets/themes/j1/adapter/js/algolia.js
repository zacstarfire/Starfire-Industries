

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/algolia.js
 # J1 Adapter for Algolia
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
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
j1.adapter.algolia = ((j1, window) => {
  var environment   = 'development';
  var moduleOptions = {};
  var state         = 'not_started';
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
    // module initializer
    // -------------------------------------------------------------------------
    init: (options) => {
      // -----------------------------------------------------------------------
      // default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.algolia',
        generated:   '2024-04-25 16:38:04 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.algolia;
      logger  = log4javascript.getLogger('j1.adapter.algolia');
      startTimeModule = Date.now();
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      // Load  module DEFAULTS|CONFIG
      /* eslint-disable */
      moduleOptions = $.extend({}, {"enabled":false, "application_id":"your_application_id", "search_only_api_key":"your_searchonly_api_key", "index_name":"your_index_name", "extensions_to_index":["adoc"], "files_to_exclude":[]});
      /* eslint-enable */
      if (typeof settings !== 'undefined') {
        moduleOptions = $.extend({}, moduleOptions, settings);
      }
      var search = instantsearch({
        appId:      moduleOptions.application_id,
        apiKey:     moduleOptions.search_only_api_key,
        indexName:  moduleOptions.index_name,
        routing:    true
      });
      var hitTemplate = (hit) => {
        var re = new RegExp('^\/pages|^\/posts|^\/collections');
        if (re.test(hit.url)) {
          var date = '';
          if (hit.date) {
            date = moment.unix(hit.date).format('MMM D, YYYY');
          }
          var url         = hit.url;
          const title     = hit._highlightResult.title.value;
          var breadcrumbs = '';
          if (hit._highlightResult.headings) {
            breadcrumbs = hit._highlightResult.headings.map(match => {
              return `<span class="post-breadcrumb">${match.value}</span>`;
            }).join(' > ');
          }
          var content = hit._highlightResult.html.value;
          return `
            <li class="search-result-item">
              <div class="card card-flat">
                <div class="card-body">
                  <span class="post-meta">${date}</span>
                  <h2 class="card-title">${title}</h2>
                  <h6 class="card-subtitle mb-2 text-muted">${hit.tagline}</h6>
                  <div class="card-text">${content}</div>
                  <div class="card-footer">
                    <a class="card-link" href="${url}" target="_blank">Read more ..</a>
                  </div>
                </div>
              </div>
            </li>
          `;
        }
        // state = 'finished search';
        // logger.debug('\n' + 'state: ' + state);
      };
      if (moduleOptions.enabled == true) {
        // initialize currentRefinedValues
        search.addWidget(
          instantsearch.widgets.currentRefinedValues({
            container: '#current-refined-values',
            // This widget can also contain a clear all link to remove all filters,
            // we disable it in this example since we use `clearAll` widget on its own.
            clearAll: false
          })
        );
        // initialize clearAll
        search.addWidget(
          instantsearch.widgets.clearAll({
            container: '#clear-all',
            templates: {
              link:    'Reset TAGS'
            },
            clearsQuery: false,
            autoHideContainer: false
          })
        );
        // initialize pagination
        search.addWidget(
          instantsearch.widgets.pagination({
            container:  '#pagination',
            maxPages:   20,
            // default is to scroll to 'body', here we disable this behavior
            scrollTo:   false
          })
        );
        // initialize SearchBox
        search.addWidget(
          instantsearch.widgets.searchBox({
            container:        '#search-searchbar',
            placeholder:      'Search this site ..',
            autofocus:        true,
            reset:            true,
            loadingIndicator: false,
            poweredBy:        true // This is required if you're on the free Community plan
          })
        );
        // initialize hits widget
        search.addWidget(
          instantsearch.widgets.hits({
            container:  '#search-hits',
            templates:  {
              empty:    'No results',
              item:     hitTemplate
            }
          })
        );
        // initialize RefinementList
        search.addWidget(
          instantsearch.widgets.refinementList({
            container:      '#refinement-list',
            attributeName:  'tags',
            collapsible:    true,
            operator:       'and',
            limit:          5,
            sortBy:         ['isRefined','count:desc','name:asc'],
            templates: {
              header:       'Tags'
            },
            showMore:       true
          })
        );
        // search.addWidget(
        //   instantsearch.widgets.hitsPerPageSelector({
        //     container: '#hits-per-page-selector',
        //     items: [
        //       {value: 3, label: '3 per page', default: true},
        //       {value: 6, label: '6 per page'},
        //       {value: 12, label: '12 per page'},
        //     ]
        //   })
        // );
      } // END if moduleOptions enabled
      if (moduleOptions.enabled === true) {
        search.start();
        $('#searcher').addClass('row');
        _this.setState('finished');
        logger.debug('\n' + 'state: ' + _this.getState());
        logger.info('\n' + 'module initialized successfully');
        endTimeModule = Date.now();
        logger.info('\n' + 'module initializing time: ' + (endTimeModule-startTimeModule) + 'ms');
      } else {
        $('#algolia-site-search').append('<p class="ml-5 mt-5 mb-5 "> <strong>Algolia Search DISABLED</strong> </p>');
        _this.setState('finished');
        logger.debug('\n' + 'state: ' + _this.getState());
        logger.warn('\n' + 'module disabled');
      } // END if moduleOptions enabled
      return true;
    }, // END init
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 CookieConsent module
    // Manage messages send from other J1 modules
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



