"use strict";

exports.__esModule = true;
exports.StyledMeter = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _utils = require("../../utils");
var _defaultProps = require("../../default-props");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var roundStyle = (0, _styledComponents.css)(["border-radius:", ";"], function (props) {
  return props.theme.global.edgeSize[props.round.size];
});

// overflow: hidden is needed for ie11
var StyledMeter = _styledComponents["default"].svg.withConfig({
  displayName: "StyledMeter",
  componentId: "sc-nsxarx-0"
})(["max-width:100%;overflow:hidden;", " ", " path{transition:stroke 0.3s,stroke-width 0.3s;}", ";"], _utils.genericStyles, function (props) {
  return props.round && roundStyle;
}, function (props) {
  return props.theme.meter && props.theme.meter.extend;
});
exports.StyledMeter = StyledMeter;
StyledMeter.defaultProps = {};
Object.setPrototypeOf(StyledMeter.defaultProps, _defaultProps.defaultProps);