"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomButton;

var _reactNative = require("react-native");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CustomButton(props) {
  var handlePress = function handlePress() {
    props.callbackPress();
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: props.buttonContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: [props.buttonStyle, {
      backgroundColor: props.backgroundColor
    }],
    onPress: handlePress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: props.textStyle
  }, props.label)));
}

var styles = _reactNative.StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  textStyle: {
    color: 'white'
  }
});

CustomButton.defaultProps = {
  buttonContainer: styles.buttonContainer,
  buttonStyle: styles.buttonStyle,
  textStyle: styles.textStyle,
  label: 'Press',
  backgroundColor: '#00b4d8'
};
CustomButton.propTypes = {
  label: _propTypes.default.string.isRequired,
  callbackPress: _propTypes.default.func
};