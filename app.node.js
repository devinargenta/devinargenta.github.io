module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(25);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(5);

  var _coreLocation = __webpack_require__(3);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(7);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(12);
    }, '/500': function _() {
      return __webpack_require__(13);
    }, '/about': function about() {
      return __webpack_require__(14);
    }, '/': function _() {
      return __webpack_require__(15);
    }, '/projects': function projects() {
      return __webpack_require__(16);
    }, '/resume': function resume() {
      return __webpack_require__(17);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

  module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(5);

  var _historyLibCreateBrowserHistory = __webpack_require__(22);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(23);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(24);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\na {\n  color: #2082ED\n}\n\na:hover {\n  color: #4A4A4A\n}\n*, *:before, *:after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: #f0f0f0;\n  color: #4A4A4A;\n  font-family: 'Avenir Next','Helvetica',sans-serif;\n}\nbody {\n  padding: 0 20px;\n}\na {\n  text-decoration: none;\n}\n.Layout {\n  margin: 0 auto;\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n  .Layout {\n    max-width: calc(768px - 18px);\n  }\n}\n\n@media (min-width: 992px) {\n  .Layout {\n    max-width: calc(992px - 22px);\n  }\n}\n\n@media (min-width: 1080px) {\n  .Layout {\n    max-width: calc(1080px - 30px);\n  }\n}\n\n.intro-header {\n  text-align: center;\n  border-bottom: 1px solid #ddd;\n  max-width: 500px;\n  margin: 40px auto;\n  padding-bottom: 20px;\n}\n\nfooter {\n  margin: 30px 0;\n  font-weight: medium;\n  font-size: 14px;\n  text-align: right;\n  text-align: center;\n}\n\nfooter a {}\n\n@media (min-width: 768px ){\n\n  footer {\n    text-align: right\n  }\n  }\n", ""]);

  // exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(18);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'intro-header' },
          _react2['default'].createElement('img', { src: 'logo.png', width: '150' }),
          _react2['default'].createElement(
            'h1',
            null,
            'Devin Argenta'
          ),
          _react2['default'].createElement(
            'h2',
            null,
            'Front End Web Developer'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Currently Senior Front End @ESPN'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Interested in: React, Node, and snacks...'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'email' },
            _react2['default'].createElement(
              'svg',
              { className: 'email-icon', style: { width: 20, height: 18 }, version: '1.1', x: '0px', y: '0px',
                viewBox: '0 0 20 20' },
              _react2['default'].createElement('path', { d: 'M1.574,5.286c0.488,0.262,7.248,3.894,7.5,4.029C9.326,9.45,9.652,9.514,9.98,9.514c0.328,0,0.654-0.064,0.906-0.199 s7.012-3.767,7.5-4.029C18.875,5.023,19.337,4,18.44,4H1.521C0.624,4,1.086,5.023,1.574,5.286z M18.613,7.489 c-0.555,0.289-7.387,3.849-7.727,4.027s-0.578,0.199-0.906,0.199s-0.566-0.021-0.906-0.199S1.941,7.777,1.386,7.488 C0.996,7.284,1,7.523,1,7.707S1,15,1,15c0,0.42,0.566,1,1,1h16c0.434,0,1-0.58,1-1c0,0,0-7.108,0-7.292S19.004,7.285,18.613,7.489z'
              })
            ),
            _react2['default'].createElement(
              'a',
              { href: 'mailto:devin@devinargenta.com' },
              'devin@devinargenta.com'
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(4);

  var _Navigation = __webpack_require__(9);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _SiteFooterFooter = __webpack_require__(11);

  var _SiteFooterFooter2 = _interopRequireDefault(_SiteFooterFooter);

  function Layout(_ref) {
    var children = _ref.children;

    return _react2['default'].createElement(
      'div',
      { className: 'Layout' },
      _react2['default'].createElement(_Navigation2['default'], null),
      children
    );
  }

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(19);

  var _coreLocation = __webpack_require__(3);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({}, props, { onClick: Link.handleClick.bind(this) }),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(20);

  var _Link = __webpack_require__(8);

  var _Link2 = _interopRequireDefault(_Link);

  /**
  <li className="Navigation-item">
    <a className="Navigation-link" href="/about" onClick={Link.handleClick}>About</a>
  </li>
  <li className="Navigation-item">
    <a className="Navigation-link" href="/blog" onClick={Link.handleClick}>Blog</a>
  </li>
  <li className="Navigation-item">
    <a className="Navigation-link" href="/" onClick={Link.handleClick}>Home</a>
  </li>git
  // <li className="Navigation-item">
  //   <a className="Navigation-link" href="/resume" onClick={Link.handleClick}>Resume</a>
  // </li>
  */

  function Navigation() {
    return _react2['default'].createElement(
      'ul',
      { className: 'Navigation', role: 'menu' },
      _react2['default'].createElement(
        'li',
        { className: 'Navigation-item' },
        _react2['default'].createElement(
          'a',
          { className: 'Navigation-link', target: '_blank', href: 'http://github.com/devinargenta' },
          'Github'
        )
      ),
      _react2['default'].createElement(
        'li',
        { className: 'Navigation-item' },
        _react2['default'].createElement(
          'a',
          { className: 'Navigation-link', target: '_blank', href: 'http://twitter.com/devin.argenta' },
          'Twitter'
        )
      ),
      _react2['default'].createElement(
        'li',
        { className: 'Navigation-item' },
        _react2['default'].createElement(
          'a',
          { className: 'Navigation-link', href: 'mailto:devin@devinargenta.com' },
          'E-Mail'
        )
      )
    );
  }

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(21);

  function ProjectLink(_ref) {
    var name = _ref.name;
    var link = _ref.link;
    var details = _ref.details;
    var _ref$type = _ref.type;
    var type = _ref$type === undefined ? null : _ref$type;

    var content = undefined;
    var extra = null;
    if (type === 'fed') {
      content = _react2['default'].createElement(
        'svg',
        { width: '25px', viewBox: '0 0 50 36', version: '1.1' },
        _react2['default'].createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
          _react2['default'].createElement(
            'g',
            { transform: 'translate(-1219.000000, -885.000000)', fill: '#818181' },
            _react2['default'].createElement('path', { d: 'M1233.30285,914.463507 C1232.71314,914.463507 1232.11844,914.255383 1231.64368,913.831612 L1219,902.552796 L1232.34583,890.647099 C1233.37531,889.731855 1234.95452,889.819618 1235.87156,890.855223 C1236.78861,891.890828 1236.69615,893.47558 1235.66417,894.395839 L1226.52124,902.552796 L1234.96202,910.080365 C1235.994,911.000624 1236.08646,912.585376 1235.16942,913.620981 C1234.67716,914.180157 1233.99,914.463507 1233.30285,914.463507 L1233.30285,914.463507 Z M1255.65417,914.458492 L1269,902.552796 L1256.35632,891.273979 C1255.32434,890.35372 1253.74513,890.446498 1252.83058,891.482103 C1251.91354,892.517708 1252.006,894.102459 1253.03798,895.022719 L1261.47876,902.552796 L1252.33583,910.707245 C1251.30385,911.627504 1251.21139,913.212255 1252.12844,914.24786 C1252.62069,914.807037 1253.30785,915.090387 1253.995,915.090387 C1254.58471,915.090387 1255.17941,914.882263 1255.65417,914.458492 L1255.65417,914.458492 Z M1243.96502,918.011645 L1248.96252,887.921427 C1249.18991,886.55483 1248.27036,885.263458 1246.90855,885.035274 C1245.54173,884.804582 1244.25737,885.729856 1244.03498,887.096454 L1239.03748,917.186672 C1238.81009,918.553269 1239.72964,919.844641 1241.09145,920.072825 C1241.23138,920.095393 1241.36632,920.105423 1241.50375,920.105423 C1242.70315,920.105423 1243.76262,919.235314 1243.96502,918.011645 L1243.96502,918.011645 Z' })
          )
        )
      );
    } else if (type === 'git') {
      content = _react2['default'].createElement(
        'svg',
        { width: '25px', viewBox: '0 0 50 43', version: '1.1' },
        _react2['default'].createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
          _react2['default'].createElement(
            'g',
            { transform: 'translate(-1219.000000, -1080.000000)', fill: '#818181' },
            _react2['default'].createElement('path', { d: 'M1252.6413,1104.75272 C1250.69022,1104.75272 1249.1087,1106.94565 1249.1087,1109.6413 C1249.1087,1112.34239 1250.69022,1114.53533 1252.6413,1114.53533 C1254.59239,1114.53533 1256.17391,1112.34239 1256.17391,1109.6413 C1256.1712,1106.94565 1254.59239,1104.75272 1252.6413,1104.75272 L1252.6413,1104.75272 Z M1264.94022,1092.02717 C1265.34511,1091.03533 1265.36141,1085.39946 1263.21467,1080 C1263.21467,1080 1258.29348,1080.54076 1250.84783,1085.65217 C1249.28533,1085.21739 1246.6413,1085.00543 1244.00272,1085.00543 C1241.3587,1085.00543 1238.71739,1085.21739 1237.15489,1085.65217 C1229.70652,1080.54076 1224.78533,1080 1224.78533,1080 C1222.6413,1085.39946 1222.66304,1091.03533 1223.0625,1092.02717 C1220.54076,1094.7663 1219,1098.05707 1219,1102.5462 C1219,1122.07337 1235.2038,1122.38587 1239.29076,1122.38587 C1240.22011,1122.38587 1242.05707,1122.3913 1244.00272,1122.3913 C1245.94565,1122.3913 1247.78533,1122.38587 1248.70924,1122.38587 C1252.80163,1122.38587 1269,1122.07337 1269,1102.5462 C1269,1098.05707 1267.46196,1094.7663 1264.94022,1092.02717 L1264.94022,1092.02717 Z M1244.07609,1119.98641 L1243.92391,1119.98641 C1233.67663,1119.98641 1225.69293,1118.7663 1225.69293,1108.80435 C1225.69293,1106.41576 1226.53533,1104.2038 1228.53804,1102.36685 C1231.87228,1099.30435 1237.51902,1100.92391 1243.92391,1100.92391 L1244.00272,1100.92391 L1244.07609,1100.92391 C1250.48098,1100.92391 1256.13043,1099.30435 1259.46739,1102.36685 C1261.46467,1104.2038 1262.30707,1106.41576 1262.30707,1108.80435 C1262.30707,1118.7663 1254.32609,1119.98641 1244.07609,1119.98641 L1244.07609,1119.98641 Z M1235.36141,1104.75272 C1233.41033,1104.75272 1231.8288,1106.94565 1231.8288,1109.6413 C1231.8288,1112.34239 1233.41033,1114.53533 1235.36141,1114.53533 C1237.31522,1114.53533 1238.89674,1112.34239 1238.89674,1109.6413 C1238.89674,1106.94565 1237.31522,1104.75272 1235.36141,1104.75272 L1235.36141,1104.75272 Z' })
          )
        )
      );
    }

    if (name === 'Purnell School') {
      extra = _react2['default'].createElement(
        'span',
        { className: 'project-extra' },
        'Check out ',
        _react2['default'].createElement(
          'a',
          { href: 'http://www.purnell.org/the-purnell-difference' },
          'The Purnell Difference'
        )
      );
    } else {
      extra = null;
    }
    return _react2['default'].createElement(
      'li',
      { className: 'project-item' },
      _react2['default'].createElement(
        'span',
        { className: 'project-type' },
        content
      ),
      _react2['default'].createElement(
        'h3',
        { className: 'project-name' },
        _react2['default'].createElement(
          'a',
          { target: '_blank', href: link },
          name
        )
      ),
      _react2['default'].createElement(
        'a',
        { className: 'project-link', href: link, target: '_blank' },
        link
      ),
      _react2['default'].createElement(
        'span',
        { className: 'project-details' },
        details
      ),
      extra
    );
  }

  exports['default'] = ProjectLink;
  module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

  
  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(4);

  function Footer() {
    return _react2['default'].createElement(
      'footer',
      null,
      _react2['default'].createElement(
        'div',
        null,
        'Built With React ',
        _react2['default'].createElement('br', null),
        'Boilerplate:',
        _react2['default'].createElement(
          'a',
          { href: 'https://github.com/koistya/react-static-boilerplate' },
          'https://github.com/koistya/react-static-boilerplate'
        )
      )
    );
  }

  exports['default'] = Footer;
  module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'About Us'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsIntroHeaderIntroHeaderJs = __webpack_require__(6);

  var _componentsIntroHeaderIntroHeaderJs2 = _interopRequireDefault(_componentsIntroHeaderIntroHeaderJs);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsIntroHeaderIntroHeaderJs2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsProjectLinkProjectLink = __webpack_require__(10);

  var _componentsProjectLinkProjectLink2 = _interopRequireDefault(_componentsProjectLinkProjectLink);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'ul',
            { className: 'project-list' },
            _react2['default'].createElement(_componentsProjectLinkProjectLink2['default'], { name: 'Purnell School', link: 'http://purnell.org', details: 'HTML, CSS, JS, GSAP, ScrollMagic', type: 'fed' }),
            _react2['default'].createElement(_componentsProjectLinkProjectLink2['default'], { name: 'Stick-Em-Up jQuery Plugin', link: 'https://github.com/devinargenta/stick-em-up', details: 'jQuery', type: 'git' }),
            _react2['default'].createElement(_componentsProjectLinkProjectLink2['default'], { name: 'React-Spotify-Search', link: 'http://devinargenta.github.io/spotify-top-songs-react/', details: 'ReactJS, Spotify API', type: 'git' }),
            _react2['default'].createElement(_componentsProjectLinkProjectLink2['default'], { name: 'Loomis Chaffee', link: 'http://loomischaffee.org', details: 'HTML, CSS, JS', type: 'fed' }),
            _react2['default'].createElement(_componentsProjectLinkProjectLink2['default'], { name: 'Asheville School', link: 'http://ashevilleschool.org', details: 'HTML, CSS, JS, Skrollr', type: 'fed' }),
            _react2['default'].createElement(_componentsProjectLinkProjectLink2['default'], { name: 'Highland School', link: 'http://www.highlandschool.org/', details: 'HTML, CSS, JS', type: 'fed' })
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  // import Resume from '../components/Resume/Resume.js';

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: "render",
      value: function render() {
        return _react2["default"].createElement(
          "div",
          { className: "resume-container" },
          "\"Resume Coming Soon\""
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports["default"] = _default;
  module.exports = exports["default"];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\na {\n  color: #2082ED\n}\n\na:hover {\n  color: #4A4A4A\n}\n\nh1 {\n  font-size: 28px;\n  font-weight: 700;\n  line-height: .9em;\n  margin: 10px 0 0;\n  text-transform: uppercase;\n}\n\nh2 {\n  font-size: 22px;\n  font-weight: 400;\n  margin: 0 auto 10px;\n}\n\np {\n  margin: 5px 0;\n}\n.email svg, .email a {\n  display: inline-block;\n  vertical-align: middle;\n}\n.email svg {\n  fill: #4A4A4A;\n  margin-right: 5px;\n  height: 25px;\n}\n", ""]);

  // exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\na {\n  color: #2082ED\n}\n\na:hover {\n  color: #4A4A4A\n}\n\n.Navigation {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 2em 0 5em 0;\n  list-style: none;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0\n}\n\n@media (min-width: 768px){\n\n  .Navigation {\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end\n  }\n  }\n\n\n.Navigation-link {\n  padding: 0.5em ;\n  color: #4A4A4A;\n  text-decoration: none;\n  text-transform: uppercase;\n  cursor: pointer;\n  font-size: 16px;\n  -webkit-transition: .25s ease-out;\n  -o-transition: .25s ease-out;\n  transition: .25s ease-out\n}\n\n\n.Navigation-link:hover {\n  color: #2082ED\n}\n", ""]);

  // exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\na {\n  color: #2082ED\n}\n\na:hover {\n  color: #4A4A4A\n}\n\n.project-list {\n  list-style: none;\n  padding: 20px 0;\n  margin: 0;\n  position: relative;\n}\n.project-item {\n  padding: 20px;\n  border-bottom: 1px solid #ddd;\n  position: relative;\n  text-align: center;\n}\n.project-item svg g {\n  -webkit-transition: 0.25s ease-in-out;\n  -o-transition: 0.25s ease-in-out;\n  transition: 0.25s ease-in-out;\n}\n@media (min-width: 768px){\n\n  .project-item {\n    text-align: left\n  }\n  }\n.project-item:before {\n  display: none;\n  content: 'Front End Developer';\n  position: absolute;\n  right: 100px;\n  top: 50%;\n  -webkit-transform: translateY(-50%) scale(0);\n      -ms-transform: translateY(-50%) scale(0);\n       -o-transform: translateY(-50%) scale(0);\n          transform: translateY(-50%) scale(0);\n  opacity: 0;\n  padding: 10px 20px;\n  background: rgba(0,0,0,.2);\n  color: #fff;\n  -webkit-transition: 0.3s ease-in-out;\n  -o-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  font-size: 12px\n}\n@media (min-width: 768px) {\n\n  .project-item:before {\n    display: block\n  }\n}\n.project-item:hover {}\n.project-item:hover:before {\n  opacity: 1;\n  -webkit-transform: translateY(-50%) scale(1);\n      -ms-transform: translateY(-50%) scale(1);\n       -o-transform: translateY(-50%) scale(1);\n          transform: translateY(-50%) scale(1)\n}\n.project-item:hover {\n  background: rgba(0,0,0,.025);\n}\n.project-item:hover svg g {\n  fill: #2082ED\n}\n.project-item:last-of-type {\n  border-bottom: 0\n}\n.project-name {\n  font-weight: 700;\n  font-size: 22px;\n  margin: 0;\n}\n.project-name a {\n  color: inherit;\n  -webkit-transition: 0.25s ease-out;\n  -o-transition: 0.25s ease-out;\n  transition: 0.25s ease-out\n}\n.project-name a:hover {\n  color: #4A4A4A\n}\n.project-link {\n  font-weight: 600;\n  font-size: 14px;\n  color: #2082ED;\n  -webkit-transition: 0.2s ease-in;\n  -o-transition: 0.2s ease-in;\n  transition: 0.2s ease-in\n}\n.project-link:hover {\n  color: #4A4A4A\n}\n.project-type {\n  display: block;\n  font-weight: 900;\n  text-align: center;\n  line-height: 0;\n  margin: 0 auto 20px auto;\n  width: 100%;\n\n}\n@media (min-width:768px) {\n  .project-type {\n  position: absolute;\n  width: 100px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n       -o-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 20px;\n  margin: 0;\n  }\n}\n.project-details {\n  display: block;\n  font-size: 12px;\n  margin-top: 5px;\n}\n.project-extra {\n  font-size: 12px;\n  margin: 5px 0 0;\n}\n.project-extra a {\n  color: #2082ED\n}\n.project-extra a:hover {\n  color: #4A4A4A\n}\n", ""]);

  // exports


/***/ }),
/* 22 */
/***/ (function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

  module.exports = require("react-dom");

/***/ })
/******/ ]);