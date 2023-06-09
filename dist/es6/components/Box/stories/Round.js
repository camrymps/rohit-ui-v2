import React from 'react';
import { Box, Grid } from 'grommet';
export var RoundBox = function RoundBox() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    React.createElement(Box, {
      pad: "small",
      gap: "small"
    }, /*#__PURE__*/React.createElement(Box, {
      pad: "small",
      background: "brand",
      round: true,
      alignSelf: "start"
    }, "true"), /*#__PURE__*/React.createElement(Grid, {
      columns: "small",
      gap: "small"
    }, ['xsmall', 'small', 'medium', 'large', 'xlarge', 'full'].map(function (size) {
      return /*#__PURE__*/React.createElement(Box, {
        key: size,
        pad: "large",
        background: "brand",
        round: {
          size: size
        }
      }, size);
    })), /*#__PURE__*/React.createElement(Grid, {
      columns: "small",
      gap: "small"
    }, ['large', 'xlarge', 'full'].map(function (size) {
      return /*#__PURE__*/React.createElement(Box, {
        responsive: false,
        key: size,
        pad: "large",
        background: "dark-4",
        round: {
          size: size
        }
      }, size, " - Not responsive");
    })), /*#__PURE__*/React.createElement(Grid, {
      columns: "small",
      gap: "small"
    }, ['left', 'top', 'right', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right'].map(function (corner) {
      return /*#__PURE__*/React.createElement(Box, {
        key: corner,
        pad: "small",
        background: "brand",
        round: {
          corner: corner
        }
      }, corner);
    }), /*#__PURE__*/React.createElement(Box, {
      background: "brand",
      pad: "small",
      round: {
        corner: 'left',
        size: '15px'
      }
    }, "left rounded corner px value")))
    // </Grommet>
  );
};

RoundBox.storyName = 'Round';
export default {
  title: 'Layout/Box/Round'
};