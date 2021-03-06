"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _utils = require("./utils/utils");

var _CustomButton = _interopRequireDefault(require("./CustomButton"));

var _CustomImage = _interopRequireDefault(require("./CustomImage"));

var _rock = _interopRequireDefault(require("./assets/rock.svg"));

var _paper = _interopRequireDefault(require("./assets/paper.svg"));

var _scissors = _interopRequireDefault(require("./assets/scissors.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Game = function Game(props) {
  var assetGame = ['scissors', 'paper', 'rock'];
  var arrOfPlayers = [];

  var _useState = (0, _react.useState)({
    pcPoints: 0,
    player: {
      name: props.name,
      points: 0,
      winner: ""
    },
    pcChoice: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];
  /* chiamata per salvare i player */


  var savePlayer = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var existingPlayers, foundPlayer;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _utils.getData)("arrayOfPlayers");

            case 2:
              existingPlayers = _context.sent;
              //copia tutti gli elementi di existingPlayers(key,value) in arrOfPlayers
              //non permette di azzerare l'array ad ogni azione
              Object.assign(arrOfPlayers, existingPlayers);
              foundPlayer = arrOfPlayers.find(function (obj) {
                if (obj.name === state.player.name) {
                  return obj;
                }
              });

              if (foundPlayer === undefined) {
                arrOfPlayers.push(state.player);
              } else {
                if (foundPlayer.points < state.player.points) {
                  arrOfPlayers.splice(arrOfPlayers.indexOf(foundPlayer), 1);
                  arrOfPlayers.push(state.player);
                }
              }

              _context.next = 8;
              return (0, _utils.storeData)("arrayOfPlayers", arrOfPlayers);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function savePlayer() {
      return _ref.apply(this, arguments);
    };
  }();

  var match = function match(typeCard) {
    return function () {
      var pcChoice = assetGame[(0, _utils.getRandomNumber)(0, 2)];
      var flagCase = null;
      var oneMoreUser = null;
      var oneMorePc = null;
      var winner = ""; //player wins

      if (typeCard === assetGame[0] && pcChoice === assetGame[1] || typeCard === assetGame[1] && pcChoice === assetGame[2] || typeCard === assetGame[2] && pcChoice === assetGame[0]) {
        flagCase = true;
        oneMoreUser = 1;
        oneMorePc = 0;
        winner = "You win!"; //tie
      } else if (typeCard === assetGame[0] && pcChoice === assetGame[0] || typeCard === assetGame[1] && pcChoice === assetGame[1] || typeCard === assetGame[2] && pcChoice === assetGame[2]) {
        flagCase = false;
        oneMoreUser = 0;
        oneMorePc = 0;
        winner = "It's a tie!"; //player loses
      } else if (pcChoice === assetGame[0] && typeCard === assetGame[1] || pcChoice === assetGame[1] && typeCard === assetGame[2] || pcChoice === assetGame[2] && typeCard === assetGame[0]) {
        flagCase = false;
        oneMoreUser = 0;
        oneMorePc = 1;
        winner = "You lose!";
      }

      setState({
        pcPoints: state.pcPoints + oneMorePc,
        player: {
          points: state.player.points + oneMoreUser,
          name: props.namePlayer
        },
        winner: winner,
        pcChoice: pcChoice
      });
    };
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, props.name)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: props.outerGameContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: props.gameContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: props.viewGame
  }, /*#__PURE__*/_react.default.createElement(_CustomImage.default, {
    imageContainer: props.imageContainer,
    imageStyle: props.imageStyle,
    imageURI: _rock.default,
    callbackPress: match('rock')
  }), /*#__PURE__*/_react.default.createElement(_CustomImage.default, {
    imageContainer: props.imageContainer,
    imageStyle: props.imageStyle,
    imageURI: _paper.default,
    callbackPress: match('paper')
  }), /*#__PURE__*/_react.default.createElement(_CustomImage.default, {
    imageContainer: props.imageContainer,
    imageStyle: props.imageStyle,
    imageURI: _scissors.default,
    callbackPress: match('scissors')
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: props.viewTexts
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: props.viewTexts
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: props.textStyle
  }, "YOUR POINTS"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: props.textStyle
  }, state.player.points)))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: props.gameContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: props.viewGame
  }, state.pcChoice === 'rock' && /*#__PURE__*/_react.default.createElement(_CustomImage.default, {
    imageContainer: props.imageContainer,
    imageStyle: props.imageStyle,
    imageURI: _rock.default
  }) || state.pcChoice === 'paper' && /*#__PURE__*/_react.default.createElement(_CustomImage.default, {
    imageContainer: props.imageContainer,
    imageStyle: props.imageStyle,
    imageURI: _paper.default
  }) || state.pcChoice === 'scissors' && /*#__PURE__*/_react.default.createElement(_CustomImage.default, {
    imageContainer: props.imageContainer,
    imageStyle: props.imageStyle,
    imageURI: _scissors.default
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: props.textStyle
  }, "PC POINTS"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: props.textStyle
  }, state.pcPoints))), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: props.textStyle
  }, state.winner), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    callbackPress: savePlayer,
    label: "Registrami"
  }));
};

var styles = _reactNative.StyleSheet.create({
  outerGameContainer: {
    flexDirection: 'row'
  },
  gameContainer: {
    flex: 1,
    height: 500,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 5,
    justifyContent: 'center'
  },
  viewGame: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40
  },
  viewTexts: {},
  textStyle: {
    textAlign: 'center'
  }
});

Game.defaultProps = {
  outerGameContainer: styles.outerGameContainer,
  gameContainer: styles.gameContainer,
  viewGame: styles.viewGame,
  viewTexts: styles.viewTexts,
  textStyle: styles.textStyle
};
var _default = Game;
exports.default = _default;