"use strict";

exports.__esModule = true;
exports.StyledAnchor = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _utils = require("../../utils");
var _defaultProps = require("../../default-props");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var disabledStyle = "\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n";
var sizeStyle = function sizeStyle(props) {
  if (props.size) {
    var size = props.size || 'medium';
    var data = props.theme.text[size];
    return (0, _styledComponents.css)(["font-size:", ";line-height:", ";"], data ? data.size : size, data ? data.height : 'normal');
  }
  return (0, _styledComponents.css)(["font-size:inherit;line-height:inherit;"]);
};
var StyledAnchor = _styledComponents["default"].a.withConfig({
  // prevent custom props from bleeding into DOM
  // https://styled-components.com/docs/api#shouldforwardprop
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return !['as', 'colorProp', 'focus', 'hasIcon', 'hasLabel', 'reverse'].includes(prop) && defaultValidatorFn(prop);
  }
}).withConfig({
  displayName: "StyledAnchor",
  componentId: "sc-1rp7lwl-0"
})(["box-sizing:border-box;", " color:", ";", " text-decoration:", ";cursor:pointer;", " ", " ", " ", " ", " ", ""], function (props) {
  return sizeStyle(props);
}, function (props) {
  var _props$theme$anchor, _props$theme$anchor$s, _props$theme$anchor$s2;
  return (0, _utils.normalizeColor)(props.colorProp || ((_props$theme$anchor = props.theme.anchor) == null ? void 0 : (_props$theme$anchor$s = _props$theme$anchor.size) == null ? void 0 : (_props$theme$anchor$s2 = _props$theme$anchor$s[props.size]) == null ? void 0 : _props$theme$anchor$s2.color) || props.theme.anchor.color, props.theme);
}, function (props) {
  var _props$theme$anchor2, _props$theme$anchor2$, _props$theme$anchor2$2, _props$theme$anchor3, _props$theme$anchor3$, _props$theme$anchor3$2;
  return props.weight ? "font-weight: " + props.weight + ";" : (((_props$theme$anchor2 = props.theme.anchor) == null ? void 0 : (_props$theme$anchor2$ = _props$theme$anchor2.size) == null ? void 0 : (_props$theme$anchor2$2 = _props$theme$anchor2$[props.size]) == null ? void 0 : _props$theme$anchor2$2.fontWeight) || props.theme.anchor.fontWeight) && "font-weight: " + (((_props$theme$anchor3 = props.theme.anchor) == null ? void 0 : (_props$theme$anchor3$ = _props$theme$anchor3.size) == null ? void 0 : (_props$theme$anchor3$2 = _props$theme$anchor3$[props.size]) == null ? void 0 : _props$theme$anchor3$2.fontWeight) || props.theme.anchor.fontWeight) + ";";
}, function (props) {
  var _props$theme$anchor4, _props$theme$anchor4$, _props$theme$anchor4$2;
  return props.hasIcon ? 'none' : ((_props$theme$anchor4 = props.theme.anchor) == null ? void 0 : (_props$theme$anchor4$ = _props$theme$anchor4.size) == null ? void 0 : (_props$theme$anchor4$2 = _props$theme$anchor4$[props.size]) == null ? void 0 : _props$theme$anchor4$2.textDecoration) || props.theme.anchor.textDecoration;
}, _utils.genericStyles, function (props) {
  return !props.disabled && props.theme.anchor.hover && (0, _styledComponents.css)(["&:hover{", " ", " ", "}"], props.theme.anchor.hover.textDecoration && "text-decoration: " + props.theme.anchor.hover.textDecoration + ";", props.theme.anchor.hover.fontWeight && "font-weight: " + props.theme.anchor.hover.fontWeight + ";", props.theme.anchor.hover.extend);
}, function (props) {
  return props.hasIcon && !props.hasLabel && "\n    padding: " + props.theme.global.edgeSize.small + ";\n  ";
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return props.focus && (0, _utils.focusStyle)();
}, function (props) {
  return props.theme.anchor.extend;
});
exports.StyledAnchor = StyledAnchor;
StyledAnchor.defaultProps = {};
Object.setPrototypeOf(StyledAnchor.defaultProps, _defaultProps.defaultProps);