'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  0% {transform: scale(1);opacity: 1} \n  45% {transform: scale(0.1);opacity: 0.7}\n  80% {transform: scale(1);opacity: 1}\n'], ['\n  0% {transform: scale(1);opacity: 1} \n  45% {transform: scale(0.1);opacity: 0.7}\n  80% {transform: scale(1);opacity: 1}\n']),
    _templateObject2 = _taggedTemplateLiteral(['{\n            background-color: ', ';\n            width: ', ';\n            height: ', ';\n            margin: ', ';\n            border-radius: 100%;\n            display: inline-block;\n            animation: ', ' 0.75s ', 's infinite cubic-bezier(.2,.68,.18,1.08);\n            animation-fill-mode: both;\n        }'], ['{\n            background-color: ', ';\n            width: ', ';\n            height: ', ';\n            margin: ', ';\n            border-radius: 100%;\n            display: inline-block;\n            animation: ', ' 0.75s ', 's infinite cubic-bezier(.2,.68,.18,1.08);\n            animation-fill-mode: both;\n        }']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = require('@emotion/core');

var _onlyUpdateForKeys = require('recompose/onlyUpdateForKeys');

var _onlyUpdateForKeys2 = _interopRequireDefault(_onlyUpdateForKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /** @jsx jsx */


// This returns an animation
var pulse = (0, _core.keyframes)(_templateObject);

var Loader = function (_React$Component) {
  _inherits(Loader, _React$Component);

  function Loader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Loader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.style = function (i) {
      var _this$props = _this.props,
          color = _this$props.color,
          size = _this$props.size,
          sizeUnit = _this$props.sizeUnit,
          margin = _this$props.margin;


      return (0, _core.css)(_templateObject2, color, '' + size + sizeUnit, '' + size + sizeUnit, margin, pulse, i * 0.12);
    }, _this.wrapper = function () {
      return _this.props.css || '';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Loader, [{
    key: 'render',
    value: function render() {
      var loading = this.props.loading;


      return loading ? (0, _core.jsx)(
        'div',
        { css: this.wrapper() },
        (0, _core.jsx)('div', { css: this.style(1) }),
        (0, _core.jsx)('div', { css: this.style(2) }),
        (0, _core.jsx)('div', { css: this.style(3) })
      ) : null;
    }
  }]);

  return Loader;
}(_react2.default.Component);

Loader.propTypes = {
  loading: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  margin: _propTypes2.default.string,
  sizeUnit: _propTypes2.default.string,
  css: _propTypes2.default.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 15,
  margin: '2px',
  sizeUnit: 'px',
  css: ''
};

var Component = (0, _onlyUpdateForKeys2.default)(['loading', 'color', 'size', 'margin', 'sizeUnit', 'css'])(Loader);
Component.defaultProps = Loader.defaultProps;
exports.default = Component;

//# sourceMappingURL=PulseLoader.jsx.map