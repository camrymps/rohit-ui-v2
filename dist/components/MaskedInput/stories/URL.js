"use strict";

exports.__esModule = true;
exports["default"] = exports.UrlMaskedInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var UrlMaskedInput = function UrlMaskedInput() {
  var _React$useState = _react["default"].useState(''),
    value = _React$useState[0],
    setValue = _React$useState[1];
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    _react["default"].createElement(_grommet.Box, {
      fill: true,
      align: "center",
      justify: "start",
      pad: "large"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: "medium",
      gap: "medium"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.MaskedInput, {
      mask: [{
        fixed: 'https://'
      }, {
        regexp: /^.*$/
      }],
      value: value,
      onChange: function onChange(event) {
        return setValue(event.target.value);
      }
    })))
    // </Grommet>
  );
};
exports.UrlMaskedInput = UrlMaskedInput;
UrlMaskedInput.storyName = 'URL';
UrlMaskedInput.parameters = {
  chromatic: {
    disable: true
  }
};
UrlMaskedInput.args = {
  full: true
};
var _default = {
  title: 'Input/MaskedInput/URL'
};
exports["default"] = _default;