"use strict";

exports.__esModule = true;
exports["default"] = exports.Marker = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var allItems = Array(2000).fill().map(function (_, i) {
  return "item " + (i + 1);
});
var Example = function Example(props) {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    _react["default"].createElement(_grommet.Box, null, /*#__PURE__*/_react["default"].createElement(_grommet.InfiniteScroll, _extends({
      items: allItems
    }, props), function (item) {
      return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
        key: item,
        pad: "medium",
        border: {
          side: 'bottom'
        },
        align: "center"
      }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, item));
    }))
    // </Grommet>
  );
};

var Marker = function Marker() {
  return /*#__PURE__*/_react["default"].createElement(Example, {
    renderMarker: function renderMarker(marker) {
      return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
        pad: "medium",
        background: "accent-1"
      }, marker);
    }
  });
};
exports.Marker = Marker;
var _default = {
  title: 'Utilities/InfiniteScroll/Marker'
};
exports["default"] = _default;