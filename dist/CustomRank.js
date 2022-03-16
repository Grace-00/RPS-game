"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomRank;

var _reactNative = require("react-native");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CustomRank(props) {
  var renderItem = function renderItem(_ref) {
    var item = _ref.item;
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: [props.itemStyle, {
        flexDirection: props.orientation
      }]
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: props.nameStyle
    }, item.name), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: props.scoreStyle
    }, item.score));
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: props.rankContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, props.label), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: props.flatlistContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    data: props.data,
    renderItem: renderItem,
    keyExtractor: function keyExtractor(item) {
      return item.id;
    }
  })));
}

var styles = _reactNative.StyleSheet.create({
  rankContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatlistContainer: {
    width: 400,
    height: 200
  },
  itemStyle: {
    height: 50,
    width: 400,
    justifyContent: 'space-between',
    paddingBottom: 7
  },
  scoreStyle: {
    flexBasis: '32%'
  },
  nameStyle: {
    flexBasis: '32%'
  }
});

CustomRank.defaultProps = {
  rankContainer: styles.rankContainer,
  flatlistContainer: styles.flatlistContainer,
  itemStyle: styles.itemStyle,
  scoreStyle: styles.scoreStyle,
  nameStyle: styles.nameStyle,
  orientation: 'row',
  label: 'Ranking'
};
CustomRank.propTypes = {
  data: _propTypes.default.array.isRequired,
  renderItem: _propTypes.default.func,
  keyExtractor: _propTypes.default.func,
  name: _propTypes.default.string,
  score: _propTypes.default.number
};