"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CustomButton = _interopRequireDefault(require("./CustomButton"));

var _CustomInput = _interopRequireDefault(require("./CustomInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement(_CustomInput.default, null), /*#__PURE__*/_react.default.createElement(_CustomButton.default, null));
};

var _default = Login;
exports.default = _default;