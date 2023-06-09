import React from 'react';
import PropTypes from 'prop-types';
import { Close } from "grommet-icons/es6/icons/Close";
import { Box, Button, DropButton, Heading, Text } from 'grommet';
var DropContent = function DropContent(_ref) {
  var onClose = _ref.onClose;
  return /*#__PURE__*/React.createElement(Box, {
    pad: "small"
  }, /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    justify: "between",
    align: "center"
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 3,
    margin: "small"
  }, "Heading"), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Close, null),
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Text, null, "Content"));
};
DropContent.propTypes = {
  onClose: PropTypes.func.isRequired
};
var align = {
  top: 'bottom'
};
var SimpleDropButton = function SimpleDropButton() {
  var _React$useState = React.useState(),
    open = _React$useState[0],
    setOpen = _React$useState[1];
  var onOpen = function onOpen() {
    setOpen(true);
  };
  var onClose = function onClose() {
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(DropButton, {
    label: "Open",
    open: open,
    onOpen: onOpen,
    onClose: onClose,
    dropContent: /*#__PURE__*/React.createElement(DropContent, {
      onClose: onClose
    }),
    dropProps: {
      align: align
    }
  }));
};
export var Simple = function Simple() {
  return /*#__PURE__*/React.createElement(SimpleDropButton, null);
};
Simple.parameters = {
  chromatic: {
    disable: true
  }
};
export default {
  title: 'Controls/DropButton/Simple'
};