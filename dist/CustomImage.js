"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomImage;

var _reactNative = require("react-native");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CustomImage(props) {
  var handlePress = function handlePress() {
    props.callbackPress();
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: props.imageContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: handlePress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: props.imageURI,
    style: props.imageStyle
  })));
}

var styles = _reactNative.StyleSheet.create({
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: '50%'
  },
  imageStyle: {
    width: 50,
    height: 50
  }
});

CustomImage.defaultProps = {
  imageContainer: styles.imageContainer,
  imageStyle: styles.imageStyle
};
CustomImage.propTypes = {
  imageURI: _propTypes.default.string.isRequired,
  callbackPress: _propTypes.default.func
};