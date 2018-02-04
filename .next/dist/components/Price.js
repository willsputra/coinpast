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

var _isomorphicUnfetch = require("isomorphic-unfetch");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Price = function (_React$Component) {
  (0, _inherits3.default)(Price, _React$Component);

  function Price() {
    (0, _classCallCheck3.default)(this, Price);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Price.__proto__ || (0, _getPrototypeOf2.default)(Price)).call(this));

    _this.state = {
      price: ""
    };
    return _this;
  }

  (0, _createClass3.default)(Price, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var period = this.props.period;

      fetch("https://api.coindesk.com/v1/bpi/historical/close.json?start=" + period + "&end=" + period).then(function (results) {
        return results.json();
      }).then(function (data) {
        _this2.setState({ price: data.bpi[period] });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Card, { centered: true, style: { height: "150px", paddingTop: "40px" } }, _react2.default.createElement(_semanticUiReact.Card.Content, null, _react2.default.createElement(_semanticUiReact.Card.Header, null, "USD ", this.state.price), _react2.default.createElement(_semanticUiReact.Card.Description, null, this.props.description, " | ", this.props.period)));
    }
  }]);

  return Price;
}(_react2.default.Component);

exports.default = Price;