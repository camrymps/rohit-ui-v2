"use strict";

exports.__esModule = true;
exports["default"] = exports.FormatInline = void 0;
var _react = _interopRequireWildcard(require("react"));
var _grommet = require("grommet");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DATE = '2020-07-02';
var DATETZ = '2020-07-02T00:00:00-08:00';
var DATE_RANGE = ['2020-07-02', '2020-07-05'];
var DATE_RANGETZ = ['2020-07-02T00:00:00-08:00', '2020-07-05T00:00:00-08:00'];
var FormatInline = function FormatInline() {
  var _useState = (0, _react.useState)(),
    date = _useState[0],
    setDate = _useState[1];
  var _useState2 = (0, _react.useState)(),
    emptyDate = _useState2[0],
    setEmptyDate = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    dateRange = _useState3[0],
    setDateRange = _useState3[1];
  var _useState4 = (0, _react.useState)(),
    dateNoTZ = _useState4[0],
    setDateNoTZ = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    dateRangeNoTZ = _useState5[0],
    setDateRangeNoTZ = _useState5[1];
  var _useState6 = (0, _react.useState)(),
    dateNoDefault = _useState6[0],
    setDateNoDefault = _useState6[1];
  var _useState7 = (0, _react.useState)(DATETZ),
    dateStateDefault = _useState7[0],
    setDateStateDefault = _useState7[1];
  var _useState8 = (0, _react.useState)(DATE),
    dateStateDefaultNoTZ = _useState8[0],
    setDateStateDefaultNoTZ = _useState8[1];
  var onChangeEmpty = function onChangeEmpty(event) {
    var nextValue = event.value;
    console.log('onChange iso date:', nextValue);
    console.log('onChange utc date:', new Date(nextValue));
    setEmptyDate(nextValue);
  };
  var onChangeTZ = function onChangeTZ(event) {
    var nextValue = event.value;
    console.log('onChange iso date:', nextValue);
    console.log('onChange utc date:', new Date(nextValue));
    setDate(nextValue);
  };
  var onChangeNoTZ = function onChangeNoTZ(event) {
    var nextValue = event.value;
    console.log('onChange iso date:', nextValue);
    console.log('onChange utc date:', new Date(nextValue));
    setDateNoTZ(nextValue);
  };
  var onChangeRange = function onChangeRange(event) {
    var nextValue = event.value;
    console.log('onChange iso date:', nextValue);
    console.log('onChange utc date:', new Date(nextValue));
    setDateRange(nextValue);
  };
  var onChangeRangeNoTZ = function onChangeRangeNoTZ(event) {
    var nextValue = event.value;
    console.log('onChange iso date:', nextValue);
    console.log('onChange utc date:', new Date(nextValue));
    setDateRangeNoTZ(nextValue);
  };
  var onChangeNoDefault = function onChangeNoDefault(event) {
    var nextValue = event.value;
    console.log('onChange iso date:', nextValue);
    console.log('onChange utc date:', new Date(nextValue));
    setDateNoDefault(nextValue);
  };
  var onChangeStateDefault = function onChangeStateDefault(event) {
    var nextValue = event.value;
    console.log('onChange iso date:', nextValue);
    console.log('onChange utc date:', new Date(nextValue));
    setDateStateDefault(nextValue);
  };
  var onChangeStateDefaultNoTZ = function onChangeStateDefaultNoTZ(event) {
    var nextValue = event.value;
    console.log('onChange iso date:', nextValue);
    console.log('onChange utc date:', new Date(nextValue));
    setDateStateDefaultNoTZ(nextValue);
  };
  return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    pad: "large",
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    gap: "small",
    align: "start"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    weight: "bold"
  }, "1) When defaultValue is [], everything should be local"), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "defaultValue: []"), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "Current value:", ' ', emptyDate ? emptyDate[0] + " \u2014 " + emptyDate[1] : '--'), /*#__PURE__*/_react["default"].createElement(_grommet.DateInput, {
    id: "item",
    name: "item",
    defaultValue: [],
    format: "mm/dd/yyyy-mm/dd/yyyy",
    inline: true,
    value: emptyDate,
    onChange: onChangeEmpty
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    gap: "small",
    align: "start"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    weight: "bold"
  }, "2) When defaultValue has a timezone, everything stays in that timezone"), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "defaultValue: ", DATETZ), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "Current value: ", date || '--'), /*#__PURE__*/_react["default"].createElement(_grommet.DateInput, {
    format: "mm/dd/yyyy",
    inline: true,
    value: date,
    onChange: onChangeTZ,
    defaultValue: DATETZ,
    calendarProps: {
      bounds: ['2020-07-01', '2020-07-31']
    }
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    gap: "small",
    align: "start"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    weight: "bold"
  }, "3) When defaultValue has no timezone, everything is returned without a timezone and is assumed to be local time"), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "defaultValue: ", DATE), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "Current value: ", dateNoTZ || '--'), /*#__PURE__*/_react["default"].createElement(_grommet.DateInput, {
    format: "mm/dd/yyyy",
    inline: true,
    value: dateNoTZ,
    onChange: onChangeNoTZ,
    defaultValue: DATE
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    gap: "small",
    align: "start"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    weight: "bold"
  }, "4) When defaultValue is a range and has a timezone, everything stays in that timezone"), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "defaultValue: ", DATE_RANGETZ[0] + " \u2014 " + DATE_RANGETZ[1]), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "Current value:", ' ', dateRange ? dateRange[0] + " \u2014 " + dateRange[1] : '--'), /*#__PURE__*/_react["default"].createElement(_grommet.DateInput, {
    format: "mm/dd/yyyy-mm/dd/yyyy",
    inline: true,
    value: dateRange,
    onChange: onChangeRange,
    defaultValue: DATE_RANGETZ
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    gap: "small",
    align: "start"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    weight: "bold"
  }, "5) When defaultValue is a range and has no timezone, everything is returned without a timezone and is assumed to be local time"), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "defaultValue: ", DATE_RANGE[0] + " \u2014 " + DATE_RANGE[1]), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "Current value:", ' ', dateRangeNoTZ ? dateRangeNoTZ[0] + " \u2014 " + dateRangeNoTZ[1] : '--'), /*#__PURE__*/_react["default"].createElement(_grommet.DateInput, {
    format: "mm/dd/yyyy-mm/dd/yyyy",
    inline: true,
    value: dateRangeNoTZ,
    onChange: onChangeRangeNoTZ,
    defaultValue: DATE_RANGE
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    gap: "small",
    align: "start"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    weight: "bold"
  }, "6) When no defaultValue, everything is in UTC relative to local"), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "defaultValue: undefined"), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "Current value: ", dateNoDefault || '--'), /*#__PURE__*/_react["default"].createElement(_grommet.DateInput, {
    format: "mm/dd/yyyy",
    inline: true,
    value: dateNoDefault,
    onChange: onChangeNoDefault
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    gap: "small",
    align: "start"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    weight: "bold"
  }, "7) When state has default value with TZ, everything everything stays in that timezone"), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "defaultValue: ", DATETZ), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "Current value: ", dateStateDefault || '--'), /*#__PURE__*/_react["default"].createElement(_grommet.DateInput, {
    format: "mm/dd/yyyy",
    inline: true,
    value: dateStateDefault,
    onChange: onChangeStateDefault
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    gap: "small",
    align: "start"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    weight: "bold"
  }, "8) When state has default value w/o TZ, everything is returned without a timezone and is assumed to be local time"), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "defaultValue: ", DATE), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "Current value: ", dateStateDefaultNoTZ || '--'), /*#__PURE__*/_react["default"].createElement(_grommet.DateInput, {
    format: "mm/dd/yyyy",
    inline: true,
    value: dateStateDefaultNoTZ,
    onChange: onChangeStateDefaultNoTZ
  })));
};
exports.FormatInline = FormatInline;
FormatInline.storyName = 'Format inline';
var _default = {
  title: 'Input/DateInput/Format inline'
};
exports["default"] = _default;