import React from 'react';
import { Box, Button, Layer } from 'grommet';
export var FullLayer = function FullLayer() {
  var _React$useState = React.useState(false),
    showLayer = _React$useState[0],
    setShowLayer = _React$useState[1];
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    React.createElement(Box, {
      pad: "small",
      fill: true,
      background: "dark-3",
      align: "center",
      justify: "center"
    }, /*#__PURE__*/React.createElement(Button, {
      primary: true,
      color: "accent-3",
      label: "Show",
      onClick: function onClick() {
        return setShowLayer(true);
      }
    }), showLayer && /*#__PURE__*/React.createElement(Layer, {
      full: true,
      animation: "fadeIn"
    }, /*#__PURE__*/React.createElement(Box, {
      fill: true,
      background: "light-4",
      align: "center",
      justify: "center"
    }, /*#__PURE__*/React.createElement(Button, {
      primary: true,
      label: "Close",
      onClick: function onClick() {
        return setShowLayer(false);
      }
    }))))
    // </Grommet>
  );
};

FullLayer.storyName = 'Full';
FullLayer.parameters = {
  chromatic: {
    disable: true
  }
};
FullLayer.args = {
  full: true
};
export default {
  title: 'Layout/Layer/Full'
};