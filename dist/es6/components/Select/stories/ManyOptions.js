import React from 'react';
import { Box, CheckBox, Select } from 'grommet';
var Option = /*#__PURE__*/React.memo(function (_ref) {
  var value = _ref.value,
    selected = _ref.selected;
  return /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    gap: "small",
    align: "center",
    pad: "xsmall"
  }, /*#__PURE__*/React.createElement(CheckBox, {
    tabIndex: "-1",
    checked: selected,
    onChange: function onChange() {}
  }), value);
});
var dummyOptions = Array(2000).fill().map(function (_, i) {
  return "option " + i;
}).sort(function (a, b) {
  return a.localeCompare(b, undefined, {
    numeric: true,
    sensitivity: 'base'
  });
});
export var ManyOptions = function ManyOptions() {
  var _React$useState = React.useState([]),
    selected = _React$useState[0],
    setSelected = _React$useState[1];
  var _React$useState2 = React.useState(dummyOptions),
    options = _React$useState2[0],
    setOptions = _React$useState2[1];
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    React.createElement(Box, {
      fill: true,
      align: "center",
      justify: "start",
      pad: "large"
    }, /*#__PURE__*/React.createElement(Select, {
      multiple: true,
      closeOnChange: false,
      placeholder: "select an option...",
      selected: selected,
      options: options,
      dropHeight: "medium",
      onClose: function onClose() {
        return setOptions(options.sort(function (p1, p2) {
          var p1Exists = selected.includes(p1);
          var p2Exists = selected.includes(p2);
          if (!p1Exists && p2Exists) {
            return 1;
          }
          if (p1Exists && !p2Exists) {
            return -1;
          }
          return p1.localeCompare(p2, undefined, {
            numeric: true,
            sensitivity: 'base'
          });
        }));
      },
      onChange: function onChange(_ref2) {
        var nextSelected = _ref2.selected;
        setSelected(nextSelected);
      }
    }, function (option, index) {
      return /*#__PURE__*/React.createElement(Option, {
        value: option,
        selected: selected.indexOf(index) !== -1
      });
    }))
    // </Grommet>
  );
};

ManyOptions.storyName = 'Many options';
ManyOptions.parameters = {
  chromatic: {
    disable: true
  }
};
ManyOptions.args = {
  full: true
};
export default {
  title: 'Input/Select/Many options'
};