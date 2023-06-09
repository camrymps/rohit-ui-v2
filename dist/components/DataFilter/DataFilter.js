"use strict";

exports.__esModule = true;
exports.DataFilter = void 0;
var _react = _interopRequireWildcard(require("react"));
var _DataContext = require("../../contexts/DataContext");
var _DataForm = require("../Data/DataForm");
var _FormContext = require("../Form/FormContext");
var _FormField = require("../FormField");
var _CheckBoxGroup = require("../CheckBoxGroup");
var _RangeSelector = require("../RangeSelector");
var _SelectMultiple = require("../SelectMultiple");
var _propTypes = require("./propTypes");
var _excluded = ["children", "options", "property", "range"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var getValueAt = function getValueAt(valueObject, pathArg) {
  if (valueObject === undefined) return undefined;
  var path = Array.isArray(pathArg) ? pathArg : pathArg.split('.');
  if (path.length === 1) return valueObject[path];
  return getValueAt(valueObject[path.shift()], path);
};
var generateOptions = function generateOptions(data, property) {
  return Array.from(new Set(data.map(function (d) {
    return getValueAt(d, property);
  }))).filter(function (v) {
    return v !== undefined && v !== '';
  }).sort();
};
var alignMax = function alignMax(value, interval) {
  if (value > 0) return value - value % interval + interval;
  if (value < 0) return value + value % interval;
  return value;
};
var alignMin = function alignMin(value, interval) {
  if (value > 0) return value - value % interval;
  if (value < 0) return value - value % interval - interval;
  return value;
};
var booleanOptions = [{
  label: 'true',
  value: true
}, {
  label: 'false',
  value: false
}];
var DataFilter = function DataFilter(_ref) {
  var _properties$property3;
  var children = _ref.children,
    optionsProp = _ref.options,
    property = _ref.property,
    rangeProp = _ref.range,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _useContext = (0, _react.useContext)(_DataContext.DataContext),
    data = _useContext.data,
    dataId = _useContext.id,
    properties = _useContext.properties,
    unfilteredData = _useContext.unfilteredData;
  var _useContext2 = (0, _react.useContext)(_FormContext.FormContext),
    noForm = _useContext2.noForm;
  var _useMemo = (0, _react.useMemo)(function () {
      var _properties$property, _properties$property2;
      if (children) return [undefined, undefined]; // caller driving

      var optionsIn = optionsProp || (properties == null ? void 0 : (_properties$property = properties[property]) == null ? void 0 : _properties$property.options);
      var rangeIn = rangeProp || (properties == null ? void 0 : (_properties$property2 = properties[property]) == null ? void 0 : _properties$property2.range);
      if (optionsIn) return [optionsIn, undefined];
      if (rangeIn) return [undefined, [rangeIn.min, rangeIn.max]];

      // generate options from all values for property
      var uniqueValues = generateOptions(unfilteredData || data, property);
      // if less than two values, nothing to filter
      if (uniqueValues.length < 2) return [undefined, undefined];
      // if any values aren't numeric, treat as options
      if (uniqueValues.some(function (v) {
        return v !== undefined && typeof v !== 'number';
      })) return [uniqueValues, undefined];
      // all values are numeric, treat as range
      // normalize to make it friendler, so [1.3, 4.895] becomes [1, 5]
      var delta = uniqueValues[uniqueValues.length - 1] - uniqueValues[0];
      var interval = Number.parseFloat((delta / 3).toPrecision(1));
      var min = alignMin(uniqueValues[0], interval);
      var max = alignMax(uniqueValues[uniqueValues.length - 1], interval);
      return [undefined, [min, max]];
    }, [children, data, optionsProp, properties, property, rangeProp, unfilteredData]),
    options = _useMemo[0],
    range = _useMemo[1];
  var id = dataId + "-" + property;
  var content = children;
  if (!content) {
    if (range) {
      content = /*#__PURE__*/_react["default"].createElement(_RangeSelector.RangeSelector, {
        id: id,
        name: property + "._range",
        defaultValues: range,
        label: true,
        min: range[0],
        max: range[1],
        step: (range[1] - range[0]) / 20,
        size: "full",
        round: "small"
      });
    } else if (options) {
      if (options.length === 2 && options[1] === true && options[0] === false) {
        // special case boolean properties
        content = /*#__PURE__*/_react["default"].createElement(_CheckBoxGroup.CheckBoxGroup, {
          id: id,
          name: property,
          options: booleanOptions
        });
      } else if (options.length < 7) {
        content = /*#__PURE__*/_react["default"].createElement(_CheckBoxGroup.CheckBoxGroup, {
          id: id,
          name: property,
          options: options
        });
      } else {
        content = /*#__PURE__*/_react["default"].createElement(_SelectMultiple.SelectMultiple, {
          id: id,
          name: property,
          showSelectedInline: true,
          options: options
        });
      }
    }
  }
  if (!content) return null;
  if (noForm)
    // likely in Toolbar
    content = /*#__PURE__*/_react["default"].createElement(_DataForm.DataForm, {
      footer: false,
      updateOn: "change"
    }, content);else content = /*#__PURE__*/_react["default"].createElement(_FormField.FormField, _extends({
    htmlFor: id,
    name: property,
    label: (properties == null ? void 0 : (_properties$property3 = properties[property]) == null ? void 0 : _properties$property3.label) || property
  }, rest), content);
  return content;
};
exports.DataFilter = DataFilter;
DataFilter.propTypes = _propTypes.DataFilterPropTypes;