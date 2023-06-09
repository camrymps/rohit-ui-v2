import React from 'react';
import { Box, DataChart } from 'grommet';
var data = [];
for (var i = 1; i < 8; i += 1) {
  var v = Math.sin(i / 2.0);
  data.push({
    date: "2020-07-" + (i % 30 + 1).toString().padStart(2, 0),
    percent: Math.abs(v * 100)
  });
}
export var Detail = function Detail() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={grommet}>
    React.createElement(Box, {
      align: "center",
      justify: "start",
      pad: "large"
    }, /*#__PURE__*/React.createElement(DataChart, {
      data: data,
      series: [{
        property: 'date',
        label: 'Date'
      }, {
        property: 'percent',
        label: 'Percent',
        render: function render(value) {
          return Math.round(value) + "%";
        }
      }],
      chart: "percent",
      detail: true,
      axis: {
        x: {
          property: 'date',
          granularity: 'medium'
        }
      }
    }))
    // </Grommet>
  );
};

export default {
  title: 'Visualizations/DataChart/Detail'
};