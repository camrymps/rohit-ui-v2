"use strict";

exports.__esModule = true;
exports["default"] = exports.CustomBreakpoints = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var customBreakpoints = {
  global: {
    breakpoints: {
      xsmall: {
        value: 375
      },
      small: {
        value: 568,
        edgeSize: {
          none: '0px',
          small: '6px',
          medium: '12px',
          large: '24px'
        }
      },
      medium: {
        value: 768,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px'
        }
      },
      large: {
        value: 1024,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px'
        }
      },
      xlarge: {
        value: 1366,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px'
        }
      }
    }
  }
};
var CustomBreakpoints = function CustomBreakpoints() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: customBreakpoints,
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_grommet.ResponsiveContext.Consumer, null, function (size) {
    return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      fill: true,
      background: "brand"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Heading, null, "Hi, I'm " + size + ", resize me!"));
  }));
};
exports.CustomBreakpoints = CustomBreakpoints;
CustomBreakpoints.storyName = 'Custom breakpoints';
var _default = {
  title: 'Utilities/ResponsiveContext/Custom breakpoints'
};
exports["default"] = _default;