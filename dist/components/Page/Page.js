"use strict";

exports.__esModule = true;
exports.Page = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _Box = require("../Box");
var _PageContext = require("./PageContext");
var _ResponsiveContext = require("../../contexts/ResponsiveContext");
var _propTypes = require("./propTypes");
var _excluded = ["kind"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Page = function Page(_ref) {
  var kind = _ref.kind,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var size = (0, _react.useContext)(_ResponsiveContext.ResponsiveContext);
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext);
  var contentValue = (0, _react.useMemo)(function () {
    var _theme$page$kind, _theme$page$kind2;
    return _extends({
      alignSelf: (_theme$page$kind = theme.page[kind]) == null ? void 0 : _theme$page$kind.alignSelf,
      width: (_theme$page$kind2 = theme.page[kind]) == null ? void 0 : _theme$page$kind2.width
    }, theme.page[kind][size]);
  }, [theme, size, kind]);
  return /*#__PURE__*/_react["default"].createElement(_PageContext.PageContext.Provider, {
    value: contentValue
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({
    fill: "horizontal"
  }, rest)));
};
exports.Page = Page;
Page.displayName = 'Page';
Page.propTypes = _propTypes.PagePropTypes;
Page.defaultProps = {
  kind: 'wide'
};