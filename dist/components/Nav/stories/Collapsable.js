"use strict";

exports.__esModule = true;
exports["default"] = exports.Collapsable = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CollapsableNav = function CollapsableNav() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    _react["default"].createElement(_grommet.Header, {
      background: "dark-1",
      pad: "medium"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      direction: "row",
      align: "center",
      gap: "small"
    }, "Resize the page to collapse the Nav into a Menu"), /*#__PURE__*/_react["default"].createElement(_grommet.ResponsiveContext.Consumer, null, function (responsive) {
      return responsive === 'small' ? /*#__PURE__*/_react["default"].createElement(_grommet.Menu, {
        label: "Click me",
        items: [{
          label: 'This is',
          onClick: function onClick() {}
        }, {
          label: 'The Menu',
          onClick: function onClick() {}
        }, {
          label: 'Component',
          onClick: function onClick() {}
        }]
      }) : /*#__PURE__*/_react["default"].createElement(_grommet.Nav, {
        direction: "row"
      }, /*#__PURE__*/_react["default"].createElement(_grommet.Anchor, {
        href: "#",
        label: "This is"
      }), /*#__PURE__*/_react["default"].createElement(_grommet.Anchor, {
        href: "#",
        label: "The Nav"
      }), /*#__PURE__*/_react["default"].createElement(_grommet.Anchor, {
        href: "#",
        label: "Component"
      }));
    }))
    // </Grommet>
  );
};

var Collapsable = function Collapsable() {
  return /*#__PURE__*/_react["default"].createElement(CollapsableNav, null);
};
exports.Collapsable = Collapsable;
var _default = {
  title: 'Controls/Nav/Collapsable'
};
exports["default"] = _default;