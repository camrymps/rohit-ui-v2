"use strict";

exports.__esModule = true;
exports["default"] = exports.Round = void 0;
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
var Round = function Round() {
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
        round: true
      }));
    }))
    // </Grommet>
  );
};
exports.Round = Round;
var _default = {
  title: 'Visualizations/Chart/Round'
};
exports["default"] = _default;