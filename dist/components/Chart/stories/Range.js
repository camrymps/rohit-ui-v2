"use strict";

exports.__esModule = true;
exports["default"] = exports.Range = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var values = [[10, 20, 30], [20, 30, 60], [30, 15, 20]];
var Range = function Range() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={grommet}>
    _react["default"].createElement(_grommet.Box, {
      direction: "row-responsive",
      wrap: true,
      pad: "large"
    }, ['bar', 'line', 'area', 'point'].map(function (type) {
      return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
        key: type,
        margin: "medium"
      }, /*#__PURE__*/_react["default"].createElement(_grommet.Heading, {
        size: "small",
        textAlign: "center"
      }, type), /*#__PURE__*/_react["default"].createElement(_grommet.Chart, {
        type: type,
        values: values,
        thickness: "small"
      }));
    }))
    // </Grommet>
  );
};
exports.Range = Range;
var _default = {
  title: 'Visualizations/Chart/Range'
};
exports["default"] = _default;