import React from 'react';
import { Box, Chart } from 'grommet';
var values = [{
  value: [10, 20],
  thickness: 12,
  color: 'status-critical',
  opacity: 'medium'
}, {
  value: [10, 30],
  thickness: 29,
  color: 'status-critical',
  opacity: true
}, {
  value: [11, 37],
  thickness: 68,
  color: 'status-critical',
  opacity: 0.4
}, {
  value: [13, 10],
  thickness: 'small',
  color: 'status-critical',
  opacity: 'medium'
}, {
  value: [20, 30],
  thickness: 'small',
  color: 'status-ok'
}, {
  value: [22, 5],
  thickness: 'medium',
  color: 'status-ok'
}, {
  value: [27, 42],
  thickness: 'large',
  color: 'status-ok'
}, {
  value: [30, 15],
  thickness: 'large',
  color: 'status-warning'
}];
export var ValueStyleChart = function ValueStyleChart() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={grommet}>
    React.createElement(Box, {
      align: "center",
      pad: "large",
      gap: "large"
    }, /*#__PURE__*/React.createElement(Chart, {
      type: "point",
      point: "circle",
      values: values
    }), /*#__PURE__*/React.createElement(Chart, {
      type: "bar",
      values: values
    }))
    // </Grommet>
  );
};

ValueStyleChart.storyName = 'Value style';
export default {
  title: 'Visualizations/Chart/Value style'
};