"use strict";

exports.__esModule = true;
exports["default"] = exports.Point = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var values = [{
  value: [10, 20]
}, {
  value: [20, 30]
}, {
  value: [30, 15]
}];
var Point = function Point() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={grommet}>
    _react["default"].createElement(_grommet.Box, {
      direction: "row-responsive",
      wrap: true,
      pad: "large"
    }, ['circle', 'square', 'diamond', 'star', 'triangle', 'triangleDown'].map(function (point) {
      return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
        key: point,
        margin: "medium"
      }, /*#__PURE__*/_react["default"].createElement(_grommet.Heading, {
        size: "small",
        textAlign: "center"
      }, point), /*#__PURE__*/_react["default"].createElement(_grommet.Chart, {
        type: "point",
        values: values,
        point: point
      }));
    }))
    // </Grommet>
  );
};
exports.Point = Point;
var _default = {
  title: 'Visualizations/Chart/Point'
};
exports["default"] = _default;