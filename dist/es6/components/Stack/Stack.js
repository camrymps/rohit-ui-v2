var _excluded = ["anchor", "children", "fill", "guidingChild", "interactiveChild"];
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { Children, forwardRef } from 'react';
import { StyledStack, StyledStackLayer } from './StyledStack';
import { StackPropTypes } from './propTypes';
var buildStyledChildren = function buildStyledChildren(_ref) {
  var anchor = _ref.anchor,
    fill = _ref.fill,
    guidingIndex = _ref.guidingIndex,
    interactiveChild = _ref.interactiveChild,
    interactiveIndex = _ref.interactiveIndex;
  return function (child, index) {
    var interactive = interactiveChild === undefined || interactiveIndex === index;
    var isGuidingIndex = index === guidingIndex;
    var props = isGuidingIndex ? {
      guiding: true,
      fillContainer: fill
    } : {
      anchor: anchor
    };
    return /*#__PURE__*/React.createElement(StyledStackLayer, _extends({
      key: index,
      interactive: interactive
    }, props), child);
  };
};
var Stack = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var anchor = _ref2.anchor,
    children = _ref2.children,
    fill = _ref2.fill,
    guidingChild = _ref2.guidingChild,
    interactiveChild = _ref2.interactiveChild,
    rest = _objectWithoutPropertiesLoose(_ref2, _excluded);
  var prunedChildren = Children.toArray(children).filter(function (c) {
    return c;
  });
  var toChildIndex = function toChildIndex(child) {
    var index = child;
    if (index === 'first' || !index) index = 0;else if (index === 'last') index = prunedChildren.length - 1;
    return index;
  };
  var guidingIndex = toChildIndex(guidingChild);
  var interactiveIndex = interactiveChild && toChildIndex(interactiveChild);
  var styledChildren = prunedChildren.map(buildStyledChildren({
    anchor: anchor,
    fill: fill,
    guidingIndex: guidingIndex,
    interactiveChild: interactiveChild,
    interactiveIndex: interactiveIndex
  }));
  return /*#__PURE__*/React.createElement(StyledStack, _extends({
    ref: ref,
    fillContainer: fill
  }, rest), styledChildren);
});
Stack.displayName = 'Stack';
Stack.propTypes = StackPropTypes;
export { Stack };