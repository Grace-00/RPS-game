"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Login;

var _react = _interopRequireDefault(require("react"));

var _CustomButton = _interopRequireDefault(require("./CustomButton"));

var _CustomInput = _interopRequireDefault(require("./CustomInput"));

var _reactNative = require("react-native");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Login(props) {
  var getName = function getName(e) {
    props.handleInput(e);
  };

  var handlePress = function handlePress() {
    props.handleButton();
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: props.loginContainer
  }, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    callbackName: getName
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    callbackPress: handlePress
  }));
}

var styles = _reactNative.StyleSheet.create({
  flex: 1
});

Login.defaultProps = {
  loginContainer: styles.loginContainer
};
Login.propTypes = {
  handleButton: _propTypes.default.func,
  handleInput: _propTypes.default.func
};