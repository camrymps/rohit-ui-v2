"use strict";

exports.__esModule = true;
exports["default"] = exports.UnitsDataTable = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DATA = [{
  name: 'Boot',
  free: 24,
  size: 4
}, {
  name: 'Backup',
  free: 30,
  size: 12
}, {
  name: 'Application',
  free: 40,
  size: 23
}];
var columns = [{
  property: 'name',
  header: 'Disk Name',
  size: 'small'
}, {
  property: 'size',
  header: 'Size',
  size: 'xsmall',
  align: 'end',
  units: '(TiB)'
}, {
  property: 'free',
  header: 'Free',
  size: 'xsmall',
  align: 'end',
  units: '%'
}];
var SORTABLE_DATA = [{
  last: 'Lullaby',
  first: 'Julius',
  count: '7',
  percentUsed: '79.3',
  consumption: '651'
}, {
  last: 'Rhodes',
  first: 'Fender',
  count: '5',
  percentUsed: '22.5',
  consumption: '37'
}];
var sortableColumns = [{
  property: 'last',
  header: 'Last'
}, {
  property: 'first',
  header: 'First'
}, {
  property: 'count',
  header: 'Count',
  align: 'end'
}, {
  property: 'percentUsed',
  header: 'Percent Used',
  align: 'end',
  units: '%'
}, {
  property: 'consumption',
  header: 'Consumption',
  align: 'end',
  units: 'TiB'
}];
var UnitsDataTable = function UnitsDataTable() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={grommet}>
    _react["default"].createElement(_grommet.Box, {
      align: "center"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Heading, {
      level: "3"
    }, "Table with units in the heading"), /*#__PURE__*/_react["default"].createElement(_grommet.DataTable, {
      columns: columns,
      data: DATA,
      primaryKey: false
    }), /*#__PURE__*/_react["default"].createElement(_grommet.Heading, {
      level: "3"
    }, "Sortable with units in the heading"), /*#__PURE__*/_react["default"].createElement(_grommet.DataTable, {
      sortable: true,
      columns: sortableColumns,
      data: SORTABLE_DATA
    }))
    // </Grommet>
  );
};
exports.UnitsDataTable = UnitsDataTable;
UnitsDataTable.storyName = 'Units';
var _default = {
  title: 'Visualizations/DataTable/Units'
};
exports["default"] = _default;