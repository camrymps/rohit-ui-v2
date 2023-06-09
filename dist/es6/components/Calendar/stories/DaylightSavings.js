import React from 'react';
import { Box, Calendar, Text } from 'grommet';

// DSTCalendar has dates specifically chosen to identify issues with
// crossing the daylight savings time boundary (from California).
export var DSTCalendar = function DSTCalendar() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    React.createElement(Box, {
      align: "center",
      pad: "large",
      direction: "row",
      justify: "center"
    }, /*#__PURE__*/React.createElement(Box, {
      align: "center",
      pad: "large",
      border: "right"
    }, /*#__PURE__*/React.createElement(Text, {
      size: "xlarge"
    }, "Daylight MST"), /*#__PURE__*/React.createElement(Box, {
      align: "center",
      pad: {
        vertical: 'medium'
      }
    }, /*#__PURE__*/React.createElement(Calendar, {
      date: "2018-11-04T06:00:00.000Z",
      bounds: ['2013-11-06', '2018-12-06']
    })), /*#__PURE__*/React.createElement(Box, {
      align: "center",
      pad: {
        vertical: 'medium'
      }
    }, /*#__PURE__*/React.createElement(Calendar, {
      date: "2019-03-11T05:00:01.409Z",
      bounds: ['2019-03-01', '2019-03-31']
    }))), /*#__PURE__*/React.createElement(Box, {
      align: "center",
      pad: "large"
    }, /*#__PURE__*/React.createElement(Text, {
      size: "xlarge"
    }, "Daylight PST"), /*#__PURE__*/React.createElement(Box, {
      align: "center",
      pad: {
        vertical: 'medium'
      }
    }, /*#__PURE__*/React.createElement(Calendar, {
      date: "2018-11-04T07:00:00.000Z",
      bounds: ['2013-11-06', '2018-12-06']
    })), /*#__PURE__*/React.createElement(Box, {
      align: "center",
      pad: {
        vertical: 'medium'
      }
    }, /*#__PURE__*/React.createElement(Calendar, {
      date: "2019-03-15T06:00:01.409Z",
      bounds: ['2019-03-01', '2019-03-31']
    }))))
    // </Grommet>
  );
};

DSTCalendar.storyName = 'Daylight savings time';
export default {
  title: "Visualizations/Calendar/Daylight savings time"
};