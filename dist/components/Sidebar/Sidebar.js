"use strict";

exports.__esModule = true;
exports.Sidebar = void 0;
var _react = _interopRequireDefault(require("react"));
var _Box = require("../Box");
var _propTypes = require("./propTypes");
var _excluded = ["children", "footer", "header"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
    footer = _ref.footer,
    header = _ref.header,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({
    pad: "small",
    gap: "large",
    height: {
      min: '100%'
    }
  }, rest), header, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    flex: true
  }, children), footer);
};
exports.Sidebar = Sidebar;
Sidebar.propTypes = _propTypes.SidebarPropTypes;
Sidebar.defaultProps = {
  children: undefined,
  footer: undefined,
  header: undefined
};