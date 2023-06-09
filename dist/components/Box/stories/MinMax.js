"use strict";

exports.__esModule = true;
exports["default"] = exports.MinMaxSizesBox = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MinMaxSizesBox = function MinMaxSizesBox() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    _react["default"].createElement(_grommet.Box, {
      pad: "small",
      gap: "small"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      pad: "small",
      gap: "small",
      direction: "row",
      align: "start"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: "small",
      height: {
        max: 'small'
      },
      round: "small",
      align: "center",
      justify: "center",
      background: "brand",
      overflow: "auto"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "max-height=small")), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: "small",
      height: {
        max: 'small'
      },
      round: "small",
      align: "center",
      justify: "center",
      background: "brand",
      overflow: "auto"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "max-height=small"), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "max-height=small"), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "max-height=small")), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: "small",
      height: {
        max: 'small'
      },
      round: "small",
      align: "center",
      justify: "center",
      background: "brand",
      overflow: "auto",
      tabIndex: 0
    }, Array(20).fill().map(function (_, i) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        _react["default"].createElement(_grommet.Text, {
          key: i
        }, "Small (" + i + ")")
      );
    })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: "small",
      height: {
        max: '100px'
      },
      round: "small",
      align: "center",
      justify: "center",
      background: "brand",
      overflow: "auto",
      tabIndex: 0
    }, Array(20).fill().map(function (_, i) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        _react["default"].createElement(_grommet.Text, {
          key: i
        }, "Small (" + i + ")")
      );
    }))), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      pad: "small",
      gap: "small",
      direction: "row",
      align: "start"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: "small",
      height: {
        min: '100px'
      },
      round: "small",
      align: "center",
      justify: "center",
      background: "brand",
      overflow: "auto"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "min-height=100px")), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: "small",
      height: {
        min: 'small'
      },
      round: "small",
      align: "center",
      justify: "center",
      background: "brand",
      overflow: "auto"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "min-height=small")), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: "small",
      height: {
        min: 'small'
      },
      round: "small",
      align: "center",
      justify: "center",
      background: "brand",
      overflow: "auto"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "min-height=small"), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "min-height=small"), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "min-height=small")), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: "small",
      height: {
        min: 'small'
      },
      round: "small",
      align: "center",
      justify: "center",
      background: "brand",
      overflow: "auto"
    }, Array(20).fill().map(function (_, i) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        _react["default"].createElement(_grommet.Text, {
          key: i
        }, "Small (" + i + ")")
      );
    }))), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      pad: "small",
      gap: "small",
      direction: "row",
      align: "start"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: {
        max: 'small'
      },
      round: "small",
      align: "center",
      justify: "center",
      background: "brand",
      overflow: "auto"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "max")), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: {
        max: 'small'
      },
      round: "small",
      align: "center",
      justify: "center",
      background: "brand",
      overflow: "auto"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "max-width=small")), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: {
        max: 'small'
      },
      round: "small",
      align: "center",
      justify: "center",
      background: "brand",
      overflow: "auto"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "max-width=small, max-width=small")), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: {
        max: '100px'
      },
      round: "small",
      align: "center",
      justify: "center",
      background: "brand",
      overflow: "auto"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "max-width=100px, max-width=100px"))), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      pad: "small",
      gap: "small",
      direction: "row",
      align: "start"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: {
        min: '100px'
      },
      round: "small",
      align: "center",
      justify: "center",
      background: "brand",
      overflow: "auto"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "100px")), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: {
        min: 'small'
      },
      round: "small",
      align: "center",
      justify: "center",
      background: "brand",
      overflow: "auto"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "small")), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: {
        min: 'small'
      },
      round: "small",
      align: "center",
      justify: "center",
      background: "brand",
      overflow: "auto"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "min-width=small")), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      width: {
        min: 'small'
      },
      round: "small",
      align: "center",
      justify: "center",
      background: "brand",
      overflow: "auto"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "min-width=small, min-width=small"))))
    // </Grommet>
  );
};
exports.MinMaxSizesBox = MinMaxSizesBox;
MinMaxSizesBox.storyName = 'Min and max sizes';
var _default = {
  title: 'Layout/Box/Min and max sizes'
};
exports["default"] = _default;