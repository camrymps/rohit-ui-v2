import React from 'react';
import { css } from 'styled-components';
import { CircleInformation } from "grommet-icons/es6/icons/CircleInformation";
import { Currency } from "grommet-icons/es6/icons/Currency";
import { Box, Grommet, FormField, Tab, Tabs, Text, TextInput } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
var RichTabTitle = function RichTabTitle(_ref) {
  var icon = _ref.icon,
    label = _ref.label;
  return /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center",
    gap: "xsmall",
    margin: "xsmall"
  }, icon, /*#__PURE__*/React.createElement(Text, {
    size: "small"
  }, /*#__PURE__*/React.createElement("strong", null, label)));
};
var customTheme = deepMerge(grommet, {
  global: {
    edgeSize: {
      small: '10px'
    },
    elevation: {
      light: {
        small: '0px 1px 5px rgba(0, 0, 0, 0.50)',
        medium: '0px 3px 8px rgba(0, 0, 0, 0.50)'
      }
    }
  },
  tab: {
    active: {
      background: 'dark-1',
      color: 'accent-1'
    },
    background: 'dark-3',
    border: undefined,
    color: 'white',
    hover: {
      background: 'dark-1'
    },
    margin: undefined,
    pad: {
      bottom: undefined,
      horizontal: 'small'
    },
    extend: function extend(_ref2) {
      var theme = _ref2.theme;
      return css(["border-radius:4px;box-shadow:0px 1px 5px rgba(0,0,0,0.5);"]);
    }
  },
  tabs: {
    background: 'dark-3',
    gap: 'medium',
    header: {
      background: 'dark-2',
      extend: function extend(_ref3) {
        var theme = _ref3.theme;
        return css(["padding:10px;box-shadow:0px 3px 8px rgba(0,0,0,0.5);"]);
      }
    },
    panel: {
      extend: function extend(_ref4) {
        var theme = _ref4.theme;
        return css(["padding:48px;box-shadow:0px 3px 8px rgba(0,0,0,0.5);"]);
      }
    }
  }
});
var CustomTabs = function CustomTabs() {
  return /*#__PURE__*/React.createElement(Grommet, {
    theme: customTheme
  }, /*#__PURE__*/React.createElement(Tabs, null, /*#__PURE__*/React.createElement(Tab, {
    title: /*#__PURE__*/React.createElement(RichTabTitle, {
      icon: /*#__PURE__*/React.createElement(CircleInformation, {
        color: "accent-1"
      }),
      label: "Personal Data"
    })
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Name"
  }, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Enter your name..."
  }))), /*#__PURE__*/React.createElement(Tab, {
    title: /*#__PURE__*/React.createElement(RichTabTitle, {
      icon: /*#__PURE__*/React.createElement(Currency, {
        color: "light-3"
      }),
      label: "Payment"
    })
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Card Number"
  }, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Enter your card number..."
  }))), /*#__PURE__*/React.createElement(Tab, {
    title: "Simple Tab"
  }, "This Tab has a different styling than the RichTabTitle (e.g tab.active.color)")));
};
export var Custom = function Custom() {
  return /*#__PURE__*/React.createElement(CustomTabs, null);
};
export default {
  title: 'Controls/Tabs/Custom Themed/Custom'
};