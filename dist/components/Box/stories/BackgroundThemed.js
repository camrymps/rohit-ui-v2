"use strict";

exports.__esModule = true;
exports["default"] = exports.BackgroundThemed = void 0;
var _react = _interopRequireWildcard(require("react"));
var _grommet = require("grommet");
var _Grid = require("../../Grid");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var BackgroundThemed = function BackgroundThemed() {
  var theme = (0, _react.useContext)(_grommet.ThemeContext);
  var backgrounds = theme.global.backgrounds;
  return (
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet>
    backgrounds ? /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
      columns: "small",
      rows: "small",
      gap: "small",
      pad: "large"
    }, Object.entries(backgrounds).map(function (_ref) {
      var key = _ref[0],
        background = _ref[1];
      return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
        key: key,
        background: background,
        fill: true,
        pad: "medium",
        justify: "center",
        round: "small"
      }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
        weight: "bold",
        size: "large"
      }, key));
    })) : /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      pad: "large"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Paragraph, {
      size: "large"
    }, "There are no backgrounds defined at `theme.global.backgrounds` for the currently selected theme. Selecting \"grommet\" from the Theme menu above is a good place to start."))
    // </Grommet>
  );
};
exports.BackgroundThemed = BackgroundThemed;
BackgroundThemed.storyName = 'Background from theme';
var _default = {
  title: 'Layout/Box/Background from theme'
};
exports["default"] = _default;