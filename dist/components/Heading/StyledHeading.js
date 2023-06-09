"use strict";

exports.__esModule = true;
exports.StyledHeading = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _utils = require("../../utils");
var _defaultProps = require("../../default-props");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var sizeStyle = function sizeStyle(props) {
  // size is a combination of the level and size properties
  var size = props.size || 'medium';
  var headingTheme = props.theme.heading;
  var levelStyle = headingTheme.level[props.level];
  if (levelStyle) {
    var data = levelStyle[size];
    var styles = [(0, _styledComponents.css)(["font-size:", ";line-height:", ";max-width:", ";font-weight:", ";overflow-wrap:", ";"], data ? data.size : size, data ? data.height : 'normal', props.fillProp && 'none' || data && data.maxWidth || levelStyle.medium.maxWidth, props.weight || levelStyle.font.weight || headingTheme.weight, props.overflowWrap)];
    if (props.responsive && headingTheme.responsiveBreakpoint) {
      var breakpoint = props.theme.global.breakpoints[headingTheme.responsiveBreakpoint];
      if (breakpoint) {
        var responsiveData = headingTheme.level[props.level + 1] ? headingTheme.level[props.level + 1][size] : headingTheme.level[props.level][size];
        if (responsiveData) {
          styles.push((0, _utils.breakpointStyle)(breakpoint, "\n            font-size: " + responsiveData.size + ";\n            line-height: " + responsiveData.height + ";\n            max-width: " + (props.fillProp && 'none' || responsiveData.maxWidth) + ";\n          "));
        }
      }
    }
    return styles;
  }
  console.warn("Heading level " + props.level + " is not defined in your theme.");
  return '';
};
var fontFamily = function fontFamily(props) {
  var _ref = props.theme.heading.level[props.level] || {},
    font = _ref.font;
  if (font && font.family) {
    return (0, _styledComponents.css)(["font-family:", ";"], font.family);
  }
  return props.theme.heading.font ? (0, _styledComponents.css)(["font-family:", ";"], props.theme.heading.font.family) : '';
};
var truncateStyle = "\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n";
var colorStyle = (0, _styledComponents.css)(["color:", ";"], function (props) {
  return (0, _utils.normalizeColor)(props.colorProp || props.theme.heading.color, props.theme);
});
var StyledHeading = _styledComponents["default"].h1.withConfig({
  displayName: "StyledHeading",
  componentId: "sc-1rdh4aw-0"
})(["", " ", " ", " ", " ", " ", " ", ""], _utils.genericStyles, function (props) {
  return fontFamily(props);
}, function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.textAlign && _utils.textAlignStyle;
}, function (props) {
  return props.truncate && truncateStyle;
}, function (props) {
  return (props.colorProp || props.theme.heading.color) && colorStyle;
}, function (props) {
  return props.theme.heading && props.theme.heading.extend;
});
exports.StyledHeading = StyledHeading;
StyledHeading.defaultProps = {};
Object.setPrototypeOf(StyledHeading.defaultProps, _defaultProps.defaultProps);