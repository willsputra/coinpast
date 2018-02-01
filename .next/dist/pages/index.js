"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require("isomorphic-unfetch");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _semanticUiReact = require("semantic-ui-react");

var _Price = require("../components/Price");

var _Price2 = _interopRequireDefault(_Price);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: "getLastYearDate",
    value: function getLastYearDate() {
      var currDateTime = new Date();
      var lastYear = currDateTime.getFullYear() - 1;
      var lastYearDate = lastYear + "-" + ("0" + (currDateTime.getMonth() + 1)).slice(-2) + "-" + ("0" + currDateTime.getDate()).slice(-2);

      return lastYearDate;
    }
  }, {
    key: "getLastMonthDate",
    value: function getLastMonthDate() {
      var currDateTime = new Date();
      var lastMonthDate = currDateTime.getFullYear() + "-" + ("0" + currDateTime.getMonth()).slice(-2) + "-" + ("0" + currDateTime.getDate()).slice(-2);

      return lastMonthDate;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement(_semanticUiReact.Header, { as: "h1" }, "Past Bitcoin Price "), _react2.default.createElement(_semanticUiReact.Card.Group, null, _react2.default.createElement(_Price2.default, { bpi: this.props.lastMonthBpi, period: this.getLastMonthDate(), periodDesc: "Last Month" }), _react2.default.createElement(_Price2.default, { bpi: this.props.lastYearBpi, period: this.getLastYearDate(), periodDesc: "Last Year" })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var currDateTime, lastYear, lastYearDate, lastYearPrice, lastYearRes, lastYearData, lastMonthDate, lastMonthPrice, lastMonthRes, lastMonthData;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currDateTime = new Date();

                //lastYear

                lastYear = currDateTime.getFullYear() - 1;
                lastYearDate = lastYear + "-" + ("0" + (currDateTime.getMonth() + 1)).slice(-2) + "-" + ("0" + currDateTime.getDate()).slice(-2);
                lastYearPrice = "https://api.coindesk.com/v1/bpi/historical/close.json?start=" + lastYearDate + "&end=" + lastYearDate;
                _context.next = 6;
                return fetch(lastYearPrice);

              case 6:
                lastYearRes = _context.sent;
                _context.next = 9;
                return lastYearRes.json();

              case 9:
                lastYearData = _context.sent;

                //lastMonth
                lastMonthDate = currDateTime.getFullYear() + "-" + ("0" + currDateTime.getMonth()).slice(-2) + "-" + ("0" + currDateTime.getDate()).slice(-2);
                lastMonthPrice = "https://api.coindesk.com/v1/bpi/historical/close.json?start=" + lastMonthDate + "&end=" + lastMonthDate;
                _context.next = 14;
                return fetch(lastMonthPrice);

              case 14:
                lastMonthRes = _context.sent;
                _context.next = 17;
                return lastMonthRes.json();

              case 17:
                lastMonthData = _context.sent;
                return _context.abrupt("return", {
                  lastYearBpi: lastYearData.bpi,
                  lastMonthBpi: lastMonthData.bpi
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;