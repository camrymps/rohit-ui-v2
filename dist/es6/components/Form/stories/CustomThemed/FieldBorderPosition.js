import React, { useState } from 'react';
import { Box, CheckBoxGroup, Form, FormField, Grid, RadioButtonGroup, RangeInput, Select, Text, TextArea, TextInput, ThemeContext } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';
var allOptions = Array(3).fill().map(function (_, i) {
  return "option " + (i + 1);
});
var borderPositions = [{
  name: 'Default Grommet Theme',
  theme: grommet
}, {
  name: 'Border Inner',
  theme: deepMerge(grommet, {
    formField: {
      border: {
        position: 'inner',
        side: 'all'
      }
    }
  })
}, {
  name: 'Border Outer',
  theme: deepMerge(grommet, {
    formField: {
      border: {
        position: 'outer',
        side: 'all'
      }
    }
  })
}, {
  name: 'Border None',
  theme: deepMerge(grommet, {
    formField: {
      border: {
        position: 'none'
      }
    }
  })
}, {
  name: 'Border Undefined',
  theme: deepMerge(grommet, {
    formField: {
      border: undefined,
      content: {
        pad: 'large'
      }
    }
  })
}];
var FormExample = function FormExample(_ref) {
  var index = _ref.index,
    borderPosition = _ref.borderPosition,
    theme = _ref.theme;
  var _useState = useState(''),
    value = _useState[0],
    setValue = _useState[1];
  return /*#__PURE__*/React.createElement(Box, {
    background: "#F7F7F7",
    gap: "medium",
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Text, {
    weight: "bold"
  }, borderPosition), /*#__PURE__*/React.createElement(ThemeContext.Extend, {
    value: theme
  }, /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(FormField, {
    htmlFor: "textinput-" + index,
    name: "textinput",
    label: "Label"
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "textinput-" + index,
    name: "textinput",
    placeholder: "placeholder text"
  })), /*#__PURE__*/React.createElement(FormField, {
    htmlFor: "select-" + index,
    name: "select",
    label: "Label"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "select-" + index,
    name: "select",
    placeholder: "-- select --",
    options: allOptions,
    value: value,
    onChange: function onChange(_ref2) {
      var option = _ref2.option;
      return setValue(option);
    }
  })), /*#__PURE__*/React.createElement(FormField, {
    htmlFor: "rbg-" + index,
    name: "rbg",
    label: "Label"
  }, /*#__PURE__*/React.createElement(RadioButtonGroup, {
    id: "rbg-" + index,
    name: "rbg",
    options: allOptions
  })), /*#__PURE__*/React.createElement(FormField, {
    htmlFor: "cbg-" + index,
    name: "cbg",
    label: "Label"
  }, /*#__PURE__*/React.createElement(CheckBoxGroup, {
    id: "cbg-" + index,
    name: "cbg",
    options: allOptions
  })), /*#__PURE__*/React.createElement(FormField, {
    htmlFor: "rangeInput-" + index,
    name: "rangeInput",
    label: "Label"
  }, /*#__PURE__*/React.createElement(RangeInput, {
    id: "rangeInput-" + index,
    name: "rangeInput"
  })), /*#__PURE__*/React.createElement(FormField, {
    htmlFor: "textArea-" + index,
    name: "textArea",
    label: "Label"
  }, /*#__PURE__*/React.createElement(TextArea, {
    id: "textArea-" + index,
    name: "textArea"
  })))));
};
export var FieldBorderPosition = function FieldBorderPosition() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    React.createElement(Box, {
      pad: "large"
    }, /*#__PURE__*/React.createElement(Grid, {
      columns: {
        count: 'fit',
        size: ['auto', 'medium']
      },
      gap: "medium"
    }, borderPositions && borderPositions.map(function (example, index) {
      return /*#__PURE__*/React.createElement(FormExample, {
        key: example.name,
        borderPosition: example.name,
        theme: example.theme,
        index: index
      });
    })))
    // </Grommet>
  );
};

FieldBorderPosition.storyName = 'Field border position';
export default {
  title: 'Input/Form/Custom Themed/Field border position'
};