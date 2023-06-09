"use strict";

exports.__esModule = true;
exports["default"] = exports.Everything = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var data = [];
for (var i = 0; i < 13; i += 1) {
  var v = -Math.sin(i / 2.0);
  var v2 = Math.cos(i / 2.0);
  data.push({
    date: "2020-07-" + (i % 30 + 1).toString().padStart(2, 0),
    amount: Math.floor(v * 10),
    need: Math.floor(v2 * 9),
    needMax: Math.floor(v2 * 9) + i / 2,
    needMin: Math.floor(v2 * 9) - i / 2,
    growth: i
  });
}
var Everything = function Everything() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={grommet}>
    _react["default"].createElement(_grommet.Box, {
      align: "center",
      justify: "start",
      pad: "large"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.DataChart, {
      data: data,
      series: ['date', 'amount', 'need', 'growth'],
      bounds: "align",
      chart: [{
        property: 'amount',
        type: 'area',
        thickness: 'xsmall',
        color: 'graph-2',
        opacity: 'medium'
      }, {
        property: 'amount',
        type: 'line',
        thickness: 'xxsmall',
        round: true
      }, {
        property: 'amount',
        type: 'bar',
        thickness: 'hair'
      }, {
        property: 'amount',
        type: 'point',
        thickness: 'small'
      }, {
        property: ['needMin', 'needMax'],
        type: 'area',
        thickness: 'xsmall',
        color: 'graph-3',
        opacity: 'medium'
      }, {
        property: 'need',
        type: 'line',
        thickness: 'xxsmall',
        dash: true,
        round: true
      }, {
        property: 'need',
        type: 'point',
        thickness: 'small'
      }, {
        property: 'growth',
        type: 'line',
        thickness: 'hair'
      }],
      axis: {
        x: 'date',
        y: {
          property: 'amount',
          granularity: 'medium'
        }
      },
      guide: {
        y: {
          granularity: 'medium'
        },
        x: {
          granularity: 'fine'
        }
      },
      gap: "xsmall",
      pad: "small",
      legend: true,
      detail: true
    }))
    // </Grommet>
  );
};
exports.Everything = Everything;
var _default = {
  title: 'Visualizations/DataChart/Everything'
};
exports["default"] = _default;