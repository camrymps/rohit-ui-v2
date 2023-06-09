function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { Box } from '../Box';
var YGuide = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var guide = _ref.guide,
    padArg = _ref.pad;
  // omit any horizontal pad so the guides cover the thickness that
  // is within the pad
  var pad;
  if (typeof padArg === 'object') pad = _extends({}, padArg, {
    start: 'none',
    end: 'none'
  });else if (typeof padArg === 'string') pad = {
    vertical: padArg
  };
  return /*#__PURE__*/React.createElement(Box, {
    ref: ref,
    fill: true,
    justify: "between",
    pad: pad,
    responsive: false
  }, Array.from({
    length: guide.y.count
  }).map(function (_, i) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement(Box, {
        key: i,
        border: "top"
      })
    );
  }));
});
export { YGuide };