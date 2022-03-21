"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeData = exports.getRandomNumber = exports.getData = void 0;

var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var storeData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(key, value) {
    var val;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            val = JSON.stringify(value);
            _context.next = 4;
            return _asyncStorage.default.setItem(key, val);

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log('errore', _context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function storeData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.storeData = storeData;

var getData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(key) {
    var jsonValue, val;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _asyncStorage.default.getItem(key);

          case 3:
            jsonValue = _context2.sent;
            val = JSON.parse(jsonValue);
            return _context2.abrupt("return", jsonValue != null ? val : null);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function getData(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getData = getData;

var getRandomNumber = function getRandomNumber(min, max) {
  var num = Math.round(Math.random() * max - min) + min;
  return num;
};

exports.getRandomNumber = getRandomNumber;