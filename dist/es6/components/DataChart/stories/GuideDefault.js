import React from 'react';
import { Box, DataChart } from 'grommet';
var data = [];
for (var i = 1; i < 8; i += 1) {
  var v = Math.sin(i / 2.0);
  data.push({
    date: "2020-" + (i % 12 + 1).toString().padStart(2, 0) + "-01",
    percent: Math.abs(v * 100)
  });
}
export var GuideDefault = function GuideDefault() {
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
      series: "percent",
      guide: true
    }))
    // </Grommet>
  );
};

GuideDefault.storyName = 'Guide default';
export default {
  title: 'Visualizations/DataChart/Guide default'
};