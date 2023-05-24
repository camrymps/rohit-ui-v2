import React from 'react';
import { Box, Carousel, Image } from 'grommet';
var data = ['//v2.grommet.io/assets/IMG_4210.jpg', '//v2.grommet.io/assets/Wilderpeople_Ricky.jpg', '//v2.grommet.io/assets/IMG_4245.jpg', '//v2.grommet.io/assets/IMG_4210.jpg', 'https://avatars1.githubusercontent.com/u/14203820?s=280&v=4', '//v2.grommet.io/assets/Wilderpeople_Ricky.jpg', '//v2.grommet.io/assets/IMG_4245.jpg', '//v2.grommet.io/assets/IMG_4210.jpg', '//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'];
var captions = {
  '//v2.grommet.io/assets/IMG_4210.jpg': 'Office workspace with decorations',
  '//v2.grommet.io/assets/IMG_4245.jpg': 'Shore with a bridge and some ships',
  '//v2.grommet.io/assets/Wilderpeople_Ricky.jpg': 'Boy hiding behind bushes',
  'https://avatars1.githubusercontent.com/u/14203820?s=280&v=4': 'Grommet logo'
};
var View0 = function View0() {
  var imgs = data.slice(0, 3);
  return /*#__PURE__*/React.createElement(Box, {
    direction: "row"
  }, imgs.map(function (img) {
    return /*#__PURE__*/React.createElement(Image, {
      key: img,
      src: img,
      fit: "contain",
      alt: captions[img]
    });
  }));
};
var View1 = function View1() {
  var imgs = data.slice(3, 6);
  return /*#__PURE__*/React.createElement(Box, {
    direction: "row"
  }, imgs.map(function (img) {
    return /*#__PURE__*/React.createElement(Image, {
      key: img,
      src: img,
      fit: "contain",
      alt: captions[img]
    });
  }));
};
var View2 = function View2() {
  var imgs = data.slice(6);
  return /*#__PURE__*/React.createElement(Box, {
    direction: "row"
  }, imgs.map(function (img) {
    return /*#__PURE__*/React.createElement(Image, {
      key: img,
      src: img,
      fit: "contain",
      alt: captions[img]
    });
  }));
};
export var Multi = function Multi() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    React.createElement(Box, null, /*#__PURE__*/React.createElement(Carousel, null, /*#__PURE__*/React.createElement(View0, null), /*#__PURE__*/React.createElement(View1, null), /*#__PURE__*/React.createElement(View2, null)))
    // </Grommet>
  );
};

export default {
  title: 'Media/Carousel/Multi'
};