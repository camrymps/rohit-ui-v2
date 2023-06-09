"use strict";

exports.__esModule = true;
exports["default"] = exports.Sticky = void 0;
var _react = _interopRequireWildcard(require("react"));
var _grommet = require("grommet");
var _grommetIcons = require("grommet-icons");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Sticky = function Sticky() {
  var _useState = (0, _react.useState)(false),
    open = _useState[0],
    setOpen = _useState[1];
  var onOpen = function onOpen() {
    return setOpen(true);
  };
  var onClose = function onClose() {
    return setOpen(undefined);
  };

  // eslint-disable-next-line no-unused-vars
  var onSubmit = function onSubmit(_ref) {
    var value = _ref.value,
      touched = _ref.touched;
  } // Your submission logic here
  ;

  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    _react["default"].createElement(_grommet.Page, {
      kind: "narrow"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.PageContent, null, /*#__PURE__*/_react["default"].createElement(_grommet.Header, {
      background: "light-3",
      sticky: "scrollup",
      pad: {
        vertical: 'small'
      }
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Avatar, {
      background: "brand"
    }, "SY"), /*#__PURE__*/_react["default"].createElement(_grommet.Nav, {
      align: "center",
      direction: "row"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Anchor, {
      label: "Home",
      href: "#"
    }), /*#__PURE__*/_react["default"].createElement(_grommet.Menu, {
      dropProps: {
        align: {
          top: 'bottom',
          left: 'left'
        }
      },
      label: "Profile",
      items: [{
        label: 'Home'
      }, {
        label: 'Profile',
        icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.User, null),
        gap: 'small'
      }, {
        label: 'Logout',
        icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Power, null),
        reverse: true,
        gap: 'small'
      }]
    }))), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      pad: "large",
      align: "center"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
      label: "Show me the Layer",
      onClick: onOpen,
      primary: true
    })), /*#__PURE__*/_react["default"].createElement(_grommet.Paragraph, null, "To maximize screen real-estate, the Header on this page scrolls out of view as the user moves down the page. However if the user scrolls upwards, the Header is revealed and fixed atop the window. On long pages this behavior allows easy access to the Headers content, such as navigation or menus, while preventing the Header from obscuring content on mobile devices or in smaller windows."), /*#__PURE__*/_react["default"].createElement(_grommet.Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo gravida tincidunt. Nunc fringilla blandit tortor, id accumsan nisi dictum quis. Aenean porttitor at mi id semper. Donec mattis bibendum leo, interdum ullamcorper lectus ultrices vel. Fusce nec enim faucibus nunc porta egestas. Fusce dapibus lobortis tincidunt."), /*#__PURE__*/_react["default"].createElement(_grommet.Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo gravida tincidunt. Nunc fringilla blandit tortor, id accumsan nisi dictum quis. Aenean porttitor at mi id semper. Donec mattis bibendum leo, interdum ullamcorper lectus ultrices vel. Fusce nec enim faucibus nunc porta egestas. Fusce dapibus lobortis tincidunt."), /*#__PURE__*/_react["default"].createElement(_grommet.Grid, {
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
    }, "Card"), /*#__PURE__*/_react["default"].createElement(_grommet.Card, {
      background: "white",
      pad: "large"
    }, "Card")), /*#__PURE__*/_react["default"].createElement(_grommet.Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo gravida tincidunt. Nunc fringilla blandit tortor, id accumsan nisi dictum quis. Aenean porttitor at mi id semper. Donec mattis bibendum leo, interdum ullamcorper lectus ultrices vel. Fusce nec enim faucibus nunc porta egestas. Fusce dapibus lobortis tincidunt.")), open && /*#__PURE__*/_react["default"].createElement(_grommet.Layer, {
      position: "right",
      onClickOutside: onClose,
      onEsc: onClose
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      fill: "vertical",
      overflow: "auto"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Header, {
      background: "light-3",
      sticky: "scrollup",
      pad: {
        vertical: 'small',
        horizontal: 'medium'
      }
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Heading, {
      margin: "none",
      level: 2,
      size: "small"
    }, "Add Monitor"), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.FormClose, null),
      onClick: onClose
    })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      pad: {
        horizontal: 'medium'
      }
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Paragraph, null, "To maximize screen real-estate, the Header on this page scrolls out of view as the user moves down the page. However if the user scrolls upwards, the Header is revealed and fixed atop the window. On long pages this behavior allows easy access to the Headers content, such as navigation or menus, while preventing the Header from obscuring content on mobile devices or in smaller windows."), /*#__PURE__*/_react["default"].createElement(_grommet.Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo gravida tincidunt. Nunc fringilla blandit tortor, id accumsan nisi dictum quis. Aenean porttitor at mi id semper. Donec mattis bibendum leo, interdum ullamcorper lectus ultrices vel. Fusce nec enim faucibus nunc porta egestas. Fusce dapibus lobortis tincidunt."), /*#__PURE__*/_react["default"].createElement(_grommet.Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo gravida tincidunt. Nunc fringilla blandit tortor, id accumsan nisi dictum quis. Aenean porttitor at mi id semper. Donec mattis bibendum leo, interdum ullamcorper lectus ultrices vel. Fusce nec enim faucibus nunc porta egestas. Fusce dapibus lobortis tincidunt.")))))
    // </Grommet>
  );
};
exports.Sticky = Sticky;
Sticky.storyName = 'Sticky';
var _default = {
  title: 'Layout/Header/Sticky'
};
exports["default"] = _default;