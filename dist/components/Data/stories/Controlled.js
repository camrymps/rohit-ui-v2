"use strict";

exports.__esModule = true;
exports["default"] = exports.Controlled = void 0;
var _react = _interopRequireWildcard(require("react"));
var _grommet = require("grommet");
var _Data = require("../Data");
var _data = require("../../DataTable/stories/data");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var defaultView = {
  properties: [],
  search: '',
  sort: {
    property: 'name',
    direction: 'asc'
  }
};

// simulate back end filtering
var filter = function filter(view) {
  var _view$search, _view$search2;
  var searchExp = (_view$search = view.search) != null && _view$search.text || typeof view.search === 'string' && view.search ? new RegExp(view.search.text || view.search, 'i') : undefined;
  var searchProperty = (_view$search2 = view.search) == null ? void 0 : _view$search2.property;
  return _data.DATA.filter(function (datum) {
    var matched = true;
    if (searchExp) {
      matched = Object.keys(datum).some(function (property) {
        if (!searchProperty || searchProperty === property || Array.isArray(searchProperty) && searchProperty.includes(property)) return searchExp.test(datum[property]);
        return false;
      });
    }
    var properties = view.properties;
    if (matched && properties) {
      matched = !Object.keys(properties).some(function (property) {
        var value = properties[property];
        if (Array.isArray(value)) return !value.includes(datum[property]);
        return value !== datum[property];
      });
    }
    return matched;
  });
};
var Controlled = function Controlled() {
  var _useState = (0, _react.useState)(defaultView),
    view = _useState[0],
    setView = _useState[1];
  var _useState2 = (0, _react.useState)(_data.DATA),
    data = _useState2[0],
    setData = _useState2[1];
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    _react["default"].createElement(_grommet.Grid, {
      flex: false,
      pad: "large",
      columns: [['small', 'large']],
      justifyContent: "center",
      gap: "large"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Notification, {
      status: "info",
      message: "Data is in 'beta'. The API surface is subject to change."
    }), /*#__PURE__*/_react["default"].createElement(_Data.Data, {
      data: data,
      total: _data.DATA.length,
      view: view,
      onView: function onView(nextView) {
        setView(nextView);
        setData(filter(nextView));
      }
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Toolbar, null, /*#__PURE__*/_react["default"].createElement(_grommet.DataSearch, null), /*#__PURE__*/_react["default"].createElement(_grommet.DataFilters, {
      drop: true
    }, /*#__PURE__*/_react["default"].createElement(_grommet.DataFilter, {
      property: "location",
      options: Array.from(new Set(_data.DATA.map(function (d) {
        return d.location;
      }))).filter(function (v) {
        return v;
      }).sort()
    }))), /*#__PURE__*/_react["default"].createElement(_grommet.DataSummary, null), /*#__PURE__*/_react["default"].createElement(_grommet.DataTable, {
      columns: _data.columns
    })))
    // </Grommet>
  );
};
exports.Controlled = Controlled;
Controlled.args = {
  full: true
};
var _default = {
  title: 'Data/Data/Controlled'
};
exports["default"] = _default;