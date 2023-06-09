import React, { useState } from 'react';
import { Accordion, AccordionPanel, Box, Text, TextInput } from 'grommet';
var renderPanelHeader = function renderPanelHeader(title, active) {
  return /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center",
    pad: "medium",
    gap: "small"
  }, /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement(Text, null, title)), /*#__PURE__*/React.createElement(Text, {
    color: "brand"
  }, active ? '-' : '+'));
};
var CustomHeaderAccordion = function CustomHeaderAccordion() {
  var _useState = useState([0]),
    activeIndex = _useState[0],
    setActiveIndex = _useState[1];
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    React.createElement(Accordion, {
      activeIndex: activeIndex,
      onActive: function onActive(newActiveIndex) {
        return setActiveIndex(newActiveIndex);
      }
    }, /*#__PURE__*/React.createElement(AccordionPanel, {
      header: renderPanelHeader('Panel 1', activeIndex.includes(0))
    }, /*#__PURE__*/React.createElement(Box, {
      pad: "medium",
      background: "light-2",
      style: {
        height: '800px'
      }
    }, /*#__PURE__*/React.createElement(Text, null, "Panel 1 contents"), /*#__PURE__*/React.createElement(TextInput, {
      a11yTitle: "panel 1 text box"
    }))), /*#__PURE__*/React.createElement(AccordionPanel, {
      header: renderPanelHeader('Panel 2', activeIndex.includes(1))
    }, /*#__PURE__*/React.createElement(Box, {
      pad: "medium",
      background: "light-2",
      style: {
        height: '50px'
      }
    }, /*#__PURE__*/React.createElement(Text, null, "Panel 2 contents"))), /*#__PURE__*/React.createElement(AccordionPanel, {
      header: renderPanelHeader('Panel 3', activeIndex.includes(2))
    }, /*#__PURE__*/React.createElement(Box, {
      pad: "medium",
      background: "light-2",
      style: {
        height: '300px'
      }
    }, /*#__PURE__*/React.createElement(Text, null, "Panel 3 contents"))))
    // </Grommet>
  );
};

export var Header = function Header() {
  return /*#__PURE__*/React.createElement(CustomHeaderAccordion, null);
};
export default {
  title: 'Controls/Accordion/Header'
};