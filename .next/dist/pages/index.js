"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
      return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement(_semanticUiReact.Card.Group, null, _react2.default.createElement(_Price2.default, { period: this.getLastMonthDate(), description: "Last Month" }), _react2.default.createElement(_Price2.default, { period: this.getLastYearDate(), description: "Last Year" })));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;