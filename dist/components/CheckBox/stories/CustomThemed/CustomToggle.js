"use strict";

exports.__esModule = true;
exports["default"] = exports.CustomToggle = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _grommet = require("grommet");
var _themes = require("grommet/themes");
var _utils = require("grommet/utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var checkboxCheckStyle = (0, _styledComponents.css)(["background-color:#2196f3;border-color:#2196f3;"]);
var customToggleTheme = {
  global: {
    colors: {
      'toggle-bg': '#757575',
      'toggle-knob': 'white',
      'toggle-accent': 'accent-2'
    }
  },
  checkBox: {
    border: {
      color: {
        light: 'toggle-bg'
      }
    },
    color: {
      light: 'toggle-knob'
    },
    check: {
      radius: '2px'
    },
    hover: {
      border: {
        color: undefined
      }
    },
    toggle: {
      background: {
        light: 'toggle-accent'
      },
      color: {
        light: 'toggle-knob'
      },
      size: '36px',
      knob: {
        extend: "\n          top: -4px;\n          box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.12),\n           0px 2px 2px 0px rgba(0,0,0,0.24);\n        "
      },
      extend: function extend(_ref) {
        var checked = _ref.checked;
        return "\n        height: 14px;\n        " + (checked && checkboxCheckStyle) + "\n      ";
      }
    },
    gap: 'xsmall',
    size: '18px'
  }
};
var CustomToggle = function CustomToggle(props) {
  var _useState = (0, _react.useState)(false),
    checked = _useState[0],
    setChecked = _useState[1];
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: (0, _utils.deepMerge)(_themes.grommet, customToggleTheme)
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.CheckBox, _extends({}, props, {
    label: "Choice",
    checked: checked,
    onChange: function onChange(event) {
      return setChecked(event.target.checked);
    },
    toggle: true
  }))));
};
exports.CustomToggle = CustomToggle;
CustomToggle.storyName = 'Custom toggle';
var _default = {
  title: 'Input/CheckBox/Custom Themed/Custom toggle'
};
exports["default"] = _default;