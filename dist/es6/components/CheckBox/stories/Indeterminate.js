import React, { useState } from 'react';
import { Box, CheckBox } from 'grommet';
export var Indeterminate = function Indeterminate() {
  var _useState = useState([]),
    checked = _useState[0],
    setChecked = _useState[1];
  var checkboxes = ['fruits', 'vegetables', 'olive oil'];
  var onCheckAll = function onCheckAll(event) {
    if (event.target.checked) {
      setChecked(checkboxes);
    } else {
      setChecked([]);
    }
  };
  var onCheck = function onCheck(event, value) {
    if (event.target.checked) {
      setChecked([].concat(checked, [value]));
    } else {
      setChecked(checked.filter(function (item) {
        return item !== value;
      }));
    }
  };
  return /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    gap: "medium"
  }, /*#__PURE__*/React.createElement(CheckBox, {
    checked: checked.length === 3,
    indeterminate: checked.length > 0 && checked.length < 3,
    label: "All",
    onChange: onCheckAll
  }), checkboxes.map(function (item) {
    return /*#__PURE__*/React.createElement(CheckBox, {
      key: item,
      checked: checked.includes(item),
      label: item,
      onChange: function onChange(e) {
        return onCheck(e, item);
      }
    });
  })));
};
export default {
  title: 'Input/CheckBox/Indeterminate'
};