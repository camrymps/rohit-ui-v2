import React from 'react';
import { Box, Chart } from 'grommet';
var gradient = [{
  value: 0,
  color: 'status-ok'
}, {
  value: 25,
  color: 'status-ok'
}, {
  value: 27,
  color: 'status-warning'
}, {
  value: 30,
  color: 'status-critical'
}];
export var GradientCharts = function GradientCharts() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={grommet}>
    React.createElement(Box, {
      align: "center",
      pad: "large",
      gap: "medium"
    }, /*#__PURE__*/React.createElement(Chart, {
      id: "bar",
      type: "bar",
      color: gradient,
      values: [[10, 20], [20, 30], [30, 15]]
    }), /*#__PURE__*/React.createElement(Chart, {
      id: "line",
      type: "line",
      color: gradient,
      values: [20, 30, 15]
    }), /*#__PURE__*/React.createElement(Chart, {
      id: "area",
      type: "area",
      color: gradient,
      values: [{
        value: [10, 20]
      }, {
        value: [20, 30]
      }, {
        value: [30, 15]
      }]
    }), /*#__PURE__*/React.createElement(Chart, {
      id: "point",
      type: "point",
      color: gradient,
      values: [[10, 20], [20, 30], [30, 15]],
      round: true
    }))
    // </Grommet>
  );
};

GradientCharts.storyName = 'Gradient';
export default {
  title: 'Visualizations/Chart/Gradient'
};