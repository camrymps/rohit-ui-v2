"use strict";

exports.__esModule = true;
exports["default"] = exports.Guide = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var data = [];
for (var i = 1; i < 8; i += 1) {
  var v = Math.sin(i / 2.0);
  data.push({
    date: "2020-" + (i % 12 + 1).toString().padStart(2, 0) + "-01",
    percent: Math.round(Math.abs(v * 100))
  });
}
var Guide = function Guide() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={grommet} full>
    _react["default"].createElement(_grommet.Box, {
      fill: true
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      pad: "large",
      width: {
        min: 'small',
        max: 'large'
      }
    }, /*#__PURE__*/_react["default"].createElement(_grommet.DataChart, {
      data: data,
      series: ['date', 'percent'],
      chart: [{
        property: 'percent',
        thickness: 'xsmall',
        type: 'line'
      }, {
        property: 'percent',
        thickness: 'medium',
        type: 'point',
        point: 'diamond'
      }],
      guide: {
        x: {
          granularity: 'fine'
        },
        y: {
          granularity: 'medium'
        }
      },
      size: {
        width: 'fill'
      },
      detail: true
    })))
    // </Grommet>
  );
};
exports.Guide = Guide;
var _default = {
  title: 'Visualizations/DataChart/Guide'
};
exports["default"] = _default;