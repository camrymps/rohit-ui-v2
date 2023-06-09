import React, { useMemo, useState } from 'react';
import { Box, Chart, Keyboard, Stack, Text } from 'grommet';
import { calcs } from '../calcs';
import { generateData } from './data';
var count = 30,
  max = 100,
  min = 0;
var ScanChart = function ScanChart() {
  var _useState = useState(undefined),
    active = _useState[0],
    setActive = _useState[1];
  var data = useMemo(function () {
    return generateData(count, max, min);
  }, []);
  var values = data.map(function (d) {
    return [d.time, d.value];
  });
  var _useMemo = useMemo(function () {
      return calcs(values, {
        min: min,
        max: max
      });
    }, [values]),
    axis = _useMemo.axis,
    bounds = _useMemo.bounds,
    pad = _useMemo.pad,
    thickness = _useMemo.thickness;
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={grommet}>
    React.createElement(Keyboard, {
      onLeft: function onLeft() {
        return setActive(Math.max(0, active - 1));
      },
      onRight: function onRight() {
        return setActive(Math.min(data.length - 1, active + 1));
      },
      onEsc: function onEsc() {
        return setActive(undefined);
      }
    }, /*#__PURE__*/React.createElement(Box, {
      tabIndex: "0",
      direction: "row",
      margin: "large"
    }, /*#__PURE__*/React.createElement(Box, {
      width: "xxsmall"
    }, /*#__PURE__*/React.createElement(Box, {
      flex: true,
      justify: "between"
    }, /*#__PURE__*/React.createElement(Box, {
      border: "top",
      align: "end"
    }, /*#__PURE__*/React.createElement(Box, {
      pad: "xsmall",
      background: {
        color: 'white',
        opacity: 'medium'
      }
    }, /*#__PURE__*/React.createElement(Text, null, axis[1][0]))), /*#__PURE__*/React.createElement(Box, {
      border: "bottom",
      align: "end"
    }, /*#__PURE__*/React.createElement(Box, {
      pad: "xsmall",
      background: {
        color: 'white',
        opacity: 'medium'
      }
    }, /*#__PURE__*/React.createElement(Text, null, axis[1][1])))), /*#__PURE__*/React.createElement(Box, {
      height: "xxsmall",
      flex: false
    })), /*#__PURE__*/React.createElement(Box, {
      width: "large"
    }, /*#__PURE__*/React.createElement(Stack, {
      guidingChild: "first"
    }, /*#__PURE__*/React.createElement(Box, {
      pad: {
        horizontal: pad
      }
    }, /*#__PURE__*/React.createElement(Chart, {
      type: "bar",
      overflow: true,
      bounds: bounds,
      values: values,
      thickness: thickness,
      size: {
        width: 'full',
        height: 'small'
      }
    })), /*#__PURE__*/React.createElement(Box, {
      fill: true,
      direction: "row",
      justify: "between"
    }, values.map(function (v, i) {
      return /*#__PURE__*/React.createElement(Box, {
        flex: false,
        key: v[0]
      }, /*#__PURE__*/React.createElement(Stack, {
        fill: true,
        anchor: "center",
        interactiveChild: "first"
      }, /*#__PURE__*/React.createElement(Box, {
        fill: true,
        pad: pad,
        background: active === i ? {
          color: 'dark-5',
          opacity: 'medium'
        } : undefined,
        onMouseOver: function onMouseOver() {
          return setActive(i);
        },
        onMouseOut: function onMouseOut() {
          return setActive(undefined);
        },
        onFocus: function onFocus() {},
        onBlur: function onBlur() {}
      }), active === i && /*#__PURE__*/React.createElement(Box, {
        animation: {
          type: 'fadeIn',
          duration: 100
        },
        width: "xsmall",
        pad: "small",
        round: "small",
        background: "dark-3"
      }, /*#__PURE__*/React.createElement(Text, {
        size: "large"
      }, data[active].value), /*#__PURE__*/React.createElement(Text, {
        className: "chromatic-ignore",
        size: "small"
      }, new Date(data[active].time).toLocaleDateString()))));
    }))), /*#__PURE__*/React.createElement(Box, {
      height: "xxsmall",
      direction: "row",
      justify: "between",
      align: "center"
    }, axis[0].map(function (t) {
      return /*#__PURE__*/React.createElement(Text, {
        className: "chromatic-ignore",
        key: t
      }, new Date(t).toLocaleDateString());
    })))))
    // </Grommet>
  );
};

export var Scan = function Scan() {
  return /*#__PURE__*/React.createElement(ScanChart, null);
};
Scan.parameters = {
  chromatic: {
    disable: true
  }
};
export default {
  title: 'Visualizations/Chart/Scan'
};