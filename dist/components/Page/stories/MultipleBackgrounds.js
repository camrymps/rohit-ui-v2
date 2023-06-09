"use strict";

exports.__esModule = true;
exports["default"] = exports.MultipleBackgrounds = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MultipleBackgrounds = function MultipleBackgrounds() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    _react["default"].createElement(_grommet.Page, {
      kind: "narrow"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.PageContent, {
      background: {
        fill: 'horizontal',
        color: 'white'
      }
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Header, null, /*#__PURE__*/_react["default"].createElement(_grommet.Heading, null, "Narrow Page"))), /*#__PURE__*/_react["default"].createElement(_grommet.PageContent, {
      background: {
        fill: 'horizontal',
        color: 'light-2'
      }
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo gravida tincidunt. Nunc fringilla blandit tortor, id accumsan nisi dictum quis. Aenean porttitor at mi id semper. Donec mattis bibendum leo, interdum ullamcorper lectus ultrices vel. Fusce nec enim faucibus nunc porta egestas. Fusce dapibus lobortis tincidunt.")), /*#__PURE__*/_react["default"].createElement(_grommet.PageContent, {
      background: {
        fill: 'horizontal',
        color: 'dark-4'
      }
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      pad: {
        vertical: 'medium'
      }
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Grid, {
      rows: "small",
      columns: {
        count: 'fit',
        size: 'small'
      },
      gap: "small"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Card, {
      background: "white",
      pad: "large"
    }, "Card"), /*#__PURE__*/_react["default"].createElement(_grommet.Card, {
      background: "white",
      pad: "large"
    }, "Card")))), /*#__PURE__*/_react["default"].createElement(_grommet.PageContent, {
      background: {
        fill: 'horizontal',
        color: 'light-2'
      }
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo gravida tincidunt. Nunc fringilla blandit tortor, id accumsan nisi dictum quis. Aenean porttitor at mi id semper. Donec mattis bibendum leo, interdum ullamcorper lectus ultrices vel. Fusce nec enim faucibus nunc porta egestas. Fusce dapibus lobortis tincidunt.")), /*#__PURE__*/_react["default"].createElement(_grommet.PageContent, {
      background: {
        fill: 'horizontal',
        color: 'white'
      }
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Footer, {
      pad: {
        vertical: 'small'
      }
    }, "Footer")))
    // </Grommet>
  );
};
exports.MultipleBackgrounds = MultipleBackgrounds;
MultipleBackgrounds.storyName = 'Multiple backgrounds';
var _default = {
  title: 'Layout/Page/Multiple backgrounds'
};
exports["default"] = _default;