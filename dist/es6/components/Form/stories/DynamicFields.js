import React, { useState } from 'react';
import { Box, Button, CheckBox, Form, FormField, TextInput } from 'grommet';
export var DynamicFields = function DynamicFields() {
  var _useState = useState(),
    haveAlias = _useState[0],
    setHaveAlias = _useState[1];
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    React.createElement(Box, {
      fill: true,
      align: "center",
      justify: "center"
    }, /*#__PURE__*/React.createElement(Box, {
      width: "medium"
    }, /*#__PURE__*/React.createElement(Form, {
      validate: "blur",
      onReset: function onReset(event) {
        return console.log(event);
      },
      onValidate: function onValidate(event) {
        return console.log('Validate', event);
      },
      onSubmit: function onSubmit(_ref) {
        var value = _ref.value;
        return console.log('Submit', value);
      }
    }, /*#__PURE__*/React.createElement(FormField, {
      label: "Name",
      name: "name",
      required: true
    }, /*#__PURE__*/React.createElement(TextInput, {
      name: "name",
      "aria-label": "name"
    })), /*#__PURE__*/React.createElement(FormField, {
      name: "haveAlias"
    }, /*#__PURE__*/React.createElement(CheckBox, {
      name: "haveAlias",
      label: "alias?",
      checked: haveAlias,
      onChange: function onChange() {
        return setHaveAlias(!haveAlias);
      }
    })), haveAlias && /*#__PURE__*/React.createElement(FormField, {
      label: "Alias",
      name: "alias",
      required: true
    }, /*#__PURE__*/React.createElement(TextInput, {
      name: "alias"
    })), /*#__PURE__*/React.createElement(Box, {
      direction: "row",
      justify: "between",
      margin: {
        top: 'medium'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      type: "reset",
      label: "Reset"
    }), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      label: "Update",
      primary: true
    })))))
    // </Grommet>
  );
};

DynamicFields.storyName = 'Dynamic fields';
DynamicFields.args = {
  full: true
};
export default {
  title: 'Input/Form/Dynamic fields'
};