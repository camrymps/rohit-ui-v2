import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Heading } from 'grommet';
var headingFiller = "\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua.\n";
var longWord = 'Supercalifragilisticexpialidocious';
var H = function H(_ref) {
  var level = _ref.level,
    size = _ref.size;
  return /*#__PURE__*/React.createElement(Heading, {
    level: level,
    size: size
  }, "Heading " + level + " " + size);
};
H.propTypes = {
  level: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired
};
var Set = function Set(_ref2) {
  var size = _ref2.size;
  return /*#__PURE__*/React.createElement("div", null, [1, 2, 3, 4, 5, 6].map(function (level) {
    return /*#__PURE__*/React.createElement(H, {
      key: level,
      level: level,
      size: size
    });
  }));
};
Set.propTypes = {
  size: PropTypes.string.isRequired
};
export var All = function All() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, {
      columns: "large",
      gap: "medium"
    }, /*#__PURE__*/React.createElement(Set, {
      size: "medium"
    }), /*#__PURE__*/React.createElement(Set, {
      size: "small"
    }), /*#__PURE__*/React.createElement(Set, {
      size: "large"
    }), /*#__PURE__*/React.createElement(Set, {
      size: "xlarge"
    })), /*#__PURE__*/React.createElement(Heading, {
      fill: true
    }, headingFiller), /*#__PURE__*/React.createElement(Heading, {
      fill: true
    }, longWord))
    // </Grommet>
  );
};

export default {
  title: 'Type/Heading/All'
};