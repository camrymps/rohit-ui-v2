"use strict";

exports.__esModule = true;
exports["default"] = exports.Layer = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
var _DataFilters = require("../DataFilters");
var _data = require("../../DataTable/stories/data");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Layer = function Layer() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    _react["default"].createElement(_grommet.Box, {
      align: "center",
      justify: "start",
      pad: "large",
      gap: "medium"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Notification, {
      status: "info",
      message: "Data is in 'beta'. The API surface is subject to change."
    }), /*#__PURE__*/_react["default"].createElement(_grommet.Data, {
      data: _data.DATA
    }, /*#__PURE__*/_react["default"].createElement(_DataFilters.DataFilters, {
      layer: true
    }, /*#__PURE__*/_react["default"].createElement(_grommet.DataFilter, {
      property: "name"
    }), /*#__PURE__*/_react["default"].createElement(_grommet.DataFilter, {
      property: "location"
    }), /*#__PURE__*/_react["default"].createElement(_grommet.DataFilter, {
      property: "percent"
    }), /*#__PURE__*/_react["default"].createElement(_grommet.DataFilter, {
      property: "paid"
    }))))
    // </Grommet>
  );
};
exports.Layer = Layer;
Layer.args = {
  full: true
};
var _default = {
  title: 'Data/DataFilters/Layer'
};
exports["default"] = _default;