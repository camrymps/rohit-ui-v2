import React from 'react';
import { Box, DateInput } from 'grommet';
var dateFormat = new Intl.DateTimeFormat(undefined, {
  month: 'short',
  day: 'numeric'
});
export var Range = function Range() {
  var _React$useState = React.useState(['2020-07-31T15:27:42.920Z', '2020-08-07T15:27:42.920Z']),
    value = _React$useState[0],
    setValue = _React$useState[1];
  var onChange = function onChange(event) {
    var nextValue = event.value;
    console.log('onChange iso date:', nextValue);
    console.log('onChange utc date:', new Date(nextValue[0]), new Date(nextValue[1]));
    setValue(nextValue);
  };
  return /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(DateInput, {
    value: value,
    buttonProps: {
      label: dateFormat.format(new Date(value[0])) + " - " + dateFormat.format(new Date(value[1]))
    },
    onChange: onChange
  }));
};
Range.parameters = {
  chromatic: {
    disable: true
  }
};
export default {
  title: 'Input/DateInput/Range'
};