"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_semanticUiReact.Container, { textAlign: "center" }, _react2.default.createElement(_head2.default, null, _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
  })), _react2.default.createElement(_semanticUiReact.Header, {
    as: "h1",
    style: { marginTop: "2em", marginBottom: "1em" }
  }, "Past Bitcoin"), props.children);
};