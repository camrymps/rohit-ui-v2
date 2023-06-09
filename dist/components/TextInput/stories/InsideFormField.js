"use strict";

exports.__esModule = true;
exports["default"] = exports.InsideFormField = void 0;
var _react = _interopRequireWildcard(require("react"));
var _grommet = require("grommet");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var allSuggestions = Array(100).fill().map(function (_, i) {
  return "suggestion " + (i + 1);
});
var InsideFormField = function InsideFormField(props) {
  var _useState = (0, _react.useState)({
      value: '',
      suggestions: allSuggestions
    }),
    state = _useState[0],
    setState = _useState[1];
  var onChange = function onChange(event) {
    var value = event.target.value;
    // The line below escapes regular expression special characters:
    // [ \ ^ $ . | ? * + ( )
    var escapedText = value.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

    // Create the regular expression with modified value which
    // handles escaping special characters. Without escaping special
    // characters, errors will appear in the console
    var exp = new RegExp(escapedText, 'i');
    var suggestions = allSuggestions.filter(function (s) {
      return exp.test(s);
    });
    setState({
      value: value,
      suggestions: suggestions
    });
  };
  var onSelect = function onSelect(event) {
    return setState(_extends({}, state, {
      value: event.suggestion
    }));
  };
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    _react["default"].createElement(_grommet.Box, {
      align: "center",
      pad: "large"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Form, {
      onSubmit: function onSubmit(_ref) {
        var nextValue = _ref.value;
        console.log(nextValue);
        setState({
          value: '',
          suggestions: allSuggestions
        });
      }
    }, /*#__PURE__*/_react["default"].createElement(_grommet.FormField, _extends({
      label: "Label",
      htmlFor: "text-input"
    }, props), /*#__PURE__*/_react["default"].createElement(_grommet.TextInput, {
      id: "text-input",
      placeholder: "placeholder",
      value: state.value,
      onChange: onChange,
      onSelect: onSelect,
      suggestions: state.suggestions
    })), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
      type: "submit",
      label: "submit"
    })))
    // </Grommet>
  );
};
exports.InsideFormField = InsideFormField;
InsideFormField.storyName = 'Inside a FormField';
var _default = {
  title: 'Input/TextInput/Inside a FormField'
};
exports["default"] = _default;