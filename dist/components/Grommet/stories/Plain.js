"use strict";

exports.__esModule = true;
exports["default"] = exports.Plain = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Plain = function Plain() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    plain: true
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Plain Grommet"))), /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Not plain Grommet"))));
};
exports.Plain = Plain;
var _default = {
  title: 'Utilities/Grommet/Plain'
};
exports["default"] = _default;