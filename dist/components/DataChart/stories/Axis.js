"use strict";

exports.__esModule = true;
exports["default"] = exports.Axis = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var data = [];
for (var i = 1; i <= 7; i += 1) {
  var v = Math.sin(i / 2.0);
  var digits = (i % 12 + 1).toString().padStart(2, 0);
  data.push({
    // explore variations in date format by changing the xAxis key to
    // the time period you are interested in
    second: "2020-05-15T08:04:" + digits,
    minute: "2020-05-15T08:" + digits + ":00",
    hour: "2020-05-15T" + digits + ":00:00",
    day: "2020-05-" + digits,
    month: "2020-" + digits + "-15",
    year: "20" + digits + "-01-15",
    // explore variations in yAxis value handling by changing the chart key
    // to one of these
    percent: Math.abs(v * 100),
    // make yAxis suffix '%'
    amount: i * 111111 // make yAxis prefix '$'
  });
}

var Axis = function Axis() {
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
      series: ['day', {
        property: 'percent',
        suffix: '%'
      }],
      chart: "percent",
      axis: {
        x: {
          property: 'day',
          granularity: 'medium'
        },
        y: {
          property: 'percent',
          granularity: 'medium'
        }
      }
    }))
    // </Grommet>
  );
};
exports.Axis = Axis;
var _default = {
  title: 'Visualizations/DataChart/Axis'
};
exports["default"] = _default;