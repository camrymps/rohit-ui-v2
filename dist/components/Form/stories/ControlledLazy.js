"use strict";

exports.__esModule = true;
exports["default"] = exports.ControlledLazy = void 0;
var _react = _interopRequireWildcard(require("react"));
var _grommet = require("grommet");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var defaultValue = {
  name: '',
  email: '',
  subscribe: false,
  ampm: '',
  size: '',
  comments: '',
  age: ''
};
var ControlledLazy = function ControlledLazy() {
  var _useState = (0, _react.useState)(defaultValue),
    value = _useState[0],
    setValue = _useState[1];
  (0, _react.useEffect)(function () {
    return setValue({
      name: 'initial',
      email: 'initial@my.com',
      subscribe: true,
      ampm: 'evening',
      size: 'large',
      comments: 'initial',
      age: 60
    });
  }, []);
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    _react["default"].createElement(_grommet.Box, {
      align: "center",
      justify: "center",
      pad: "large"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: "medium"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Form, {
      value: value,
      onChange: function onChange(nextValue) {
        console.log('Change', nextValue);
        setValue(nextValue);
      },
      onReset: function onReset() {
        return setValue(defaultValue);
      },
      onSubmit: function onSubmit(event) {
        return console.log('Submit', event.value, event.touched);
      }
    }, /*#__PURE__*/_react["default"].createElement(_grommet.FormField, {
      label: "Name",
      htmlFor: "name",
      name: "name"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.TextInput, {
      id: "name",
      name: "name"
    })), /*#__PURE__*/_react["default"].createElement(_grommet.FormField, {
      label: "Email",
      htmlFor: "email",
      name: "email",
      required: true
    }, /*#__PURE__*/_react["default"].createElement(_grommet.MaskedInput, {
      id: "email",
      name: "email",
      mask: [{
        regexp: /^[\w\-_.]+$/,
        placeholder: 'example'
      }, {
        fixed: '@'
      }, {
        regexp: /^[\w]+$/,
        placeholder: 'my'
      }, {
        fixed: '.'
      }, {
        regexp: /^[\w]+$/,
        placeholder: 'com'
      }]
    })), /*#__PURE__*/_react["default"].createElement(_grommet.FormField, {
      name: "subscribe"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.CheckBox, {
      name: "subscribe",
      label: "Subscribe?"
    })), /*#__PURE__*/_react["default"].createElement(_grommet.FormField, {
      name: "ampm"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.RadioButtonGroup, {
      name: "ampm",
      options: ['morning', 'evening']
    })), /*#__PURE__*/_react["default"].createElement(_grommet.FormField, {
      label: "Size",
      htmlFor: "size",
      name: "size"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Select, {
      id: "size",
      "aria-label": "size",
      name: "size",
      options: ['small', 'medium', 'large']
    })), /*#__PURE__*/_react["default"].createElement(_grommet.FormField, {
      label: "Comments",
      htmlFor: "comments",
      name: "comments"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.TextArea, {
      id: "comments",
      name: "comments"
    })), /*#__PURE__*/_react["default"].createElement(_grommet.FormField, {
      label: "Age",
      htmlFor: "age",
      name: "age",
      pad: true
    }, /*#__PURE__*/_react["default"].createElement(_grommet.RangeInput, {
      id: "age",
      name: "age",
      min: 15,
      max: 75
    })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      direction: "row",
      justify: "between",
      margin: {
        top: 'medium'
      }
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
      label: "Cancel"
    }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
      type: "reset",
      label: "Reset"
    }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
      type: "submit",
      label: "Update",
      primary: true
    })))))
    // </Grommet>
  );
};
exports.ControlledLazy = ControlledLazy;
ControlledLazy.storyName = 'Controlled lazy';
ControlledLazy.parameters = {
  // chromatic disabled because snapshot is the same as Controlled
  chromatic: {
    disable: true
  }
};
ControlledLazy.args = {
  full: true
};
var _default = {
  title: 'Input/Form/Controlled lazy'
};
exports["default"] = _default;