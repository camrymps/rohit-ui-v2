import React from 'react';
import { Box, Table, TableBody, TableCell, TableFooter, TableHeader, TableRow, Text } from 'grommet';
import { data, columns } from './data';
export var Default = function Default() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    React.createElement(Box, {
      align: "center",
      pad: "large"
    }, /*#__PURE__*/React.createElement(Table, {
      caption: "Default Table"
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, columns.map(function (c) {
      return /*#__PURE__*/React.createElement(TableCell, {
        key: c.property,
        scope: "col",
        align: c.align
      }, /*#__PURE__*/React.createElement(Text, null, c.label));
    }))), /*#__PURE__*/React.createElement(TableBody, null, data.map(function (datum) {
      return /*#__PURE__*/React.createElement(TableRow, {
        key: datum.id
      }, columns.map(function (c) {
        return /*#__PURE__*/React.createElement(TableCell, {
          key: c.property,
          scope: c.dataScope,
          align: c.align
        }, /*#__PURE__*/React.createElement(Text, null, c.format ? c.format(datum) : datum[c.property]));
      }));
    })), /*#__PURE__*/React.createElement(TableFooter, null, /*#__PURE__*/React.createElement(TableRow, null, columns.map(function (c) {
      return /*#__PURE__*/React.createElement(TableCell, {
        key: c.property,
        align: c.align
      }, /*#__PURE__*/React.createElement(Text, null, c.footer));
    })))))
    // </Grommet>
  );
};

export default {
  title: 'Visualizations/Table/Default'
};