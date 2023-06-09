import React from 'react';
import { Add } from "grommet-icons/es6/icons/Add";
import { Box, Button } from 'grommet';
export var IconLabel = function IconLabel() {
  return /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Box, {
    round: "full",
    overflow: "hidden",
    background: "neutral-1"
  }, /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Add, null),
    hoverIndicator: true,
    onClick: function onClick() {}
  })), /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large",
    gap: "small"
  }, /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Add, null),
    label: "Add",
    onClick: function onClick() {},
    primary: true
  }), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Add, null),
    label: "Add",
    onClick: function onClick() {}
  }), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Add, null),
    label: "Add",
    gap: "xlarge",
    onClick: function onClick() {}
  }), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Add, null),
    label: "500px gap",
    gap: "500px",
    onClick: function onClick() {}
  })));
};
IconLabel.storyName = 'Icon label';
export default {
  title: "Controls/Button/Icon label"
};