import React from 'react';
import { Grommet, Box, Button, RadioButton } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
var theme = deepMerge(grommet, {
  radioButton: {
    gap: 'xsmall',
    size: '25px',
    hover: {
      border: {
        color: 'neutral-4'
      }
    },
    check: {
      color: {
        light: 'neutral-4'
      },
      background: {
        color: 'light-1'
      }
    },
    icon: {
      size: '20px'
    },
    font: {
      weight: 500
    }
  }
});
export var ThemeRadioButton = function ThemeRadioButton() {
  var _React$useState = React.useState(),
    selected = _React$useState[0],
    setSelected = _React$useState[1];
  return /*#__PURE__*/React.createElement(Grommet, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large",
    gap: "large"
  }, /*#__PURE__*/React.createElement(RadioButton, {
    label: "option 1",
    name: "name",
    value: "option 1",
    checked: selected === 'option 1',
    onChange: function onChange(event) {
      return setSelected(event.target.value);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    label: "clear",
    onClick: function onClick() {
      return setSelected(undefined);
    }
  })));
};
ThemeRadioButton.storyName = 'Theme';
export default {
  title: 'Input/RadioButton/Custom Themed/Theme'
};