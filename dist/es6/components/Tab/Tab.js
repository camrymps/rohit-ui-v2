var _excluded = ["active", "disabled", "children", "icon", "plain", "title", "onBlur", "onFocus", "onMouseOver", "onMouseOut", "reverse", "onClick"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { defaultProps } from '../../default-props';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { TabsContext } from '../Tabs/TabsContext';
import { normalizeColor, useForwardedRef } from '../../utils';
import { StyledTab } from './StyledTab';
import { TabPropTypes } from './propTypes';
import { useLayoutEffect } from '../../utils/use-isomorphic-layout-effect';
var Tab = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var activeProp = _ref.active,
    disabled = _ref.disabled,
    children = _ref.children,
    icon = _ref.icon,
    plain = _ref.plain,
    title = _ref.title,
    _onBlur = _ref.onBlur,
    _onFocus = _ref.onFocus,
    onMouseOver = _ref.onMouseOver,
    onMouseOut = _ref.onMouseOut,
    reverse = _ref.reverse,
    onClick = _ref.onClick,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _useContext = useContext(TabsContext),
    active = _useContext.active,
    activeIndex = _useContext.activeIndex,
    index = _useContext.index,
    tabsContextRef = _useContext.ref,
    onActivate = _useContext.onActivate,
    setActiveContent = _useContext.setActiveContent,
    setActiveTitle = _useContext.setActiveTitle,
    setFocusIndex = _useContext.setFocusIndex;
  var theme = useContext(ThemeContext) || defaultProps.theme;
  var _useState = useState(undefined),
    over = _useState[0],
    setOver = _useState[1];
  var normalizedTitle = title;
  var tabStyles = {};
  var tabRef = useForwardedRef(ref);
  useLayoutEffect(function () {
    if (tabRef.current && tabsContextRef) {
      tabsContextRef.current = tabRef.current;
    }
  });
  useEffect(function () {
    if (active) {
      setActiveContent(children);
      var activeTitle = typeof title === 'string' ? title : activeIndex + 1;
      setActiveTitle(activeTitle);
    }
  }, [active, activeIndex, children, setActiveContent, setActiveTitle, title]);
  var onMouseOverTab = function onMouseOverTab(event) {
    setOver(true);
    if (onMouseOver) {
      onMouseOver(event);
    }
  };
  var onMouseOutTab = function onMouseOutTab(event) {
    setOver(undefined);
    if (onMouseOut) {
      onMouseOut(event);
    }
  };
  if (!plain) {
    if (typeof title !== 'string') {
      normalizedTitle = title;
    } else if (active) {
      normalizedTitle = /*#__PURE__*/React.createElement(Text, theme.tab.active, title);
    } else if (disabled && theme.tab.disabled) {
      normalizedTitle = /*#__PURE__*/React.createElement(Text, theme.tab.disabled, title);
    } else {
      normalizedTitle = /*#__PURE__*/React.createElement(Text, {
        color: over ? theme.tab.hover.color : theme.tab.color
      }, title);
    }
  }
  var onClickTab = function onClickTab(event) {
    if (event) {
      event.preventDefault();
    }
    onActivate();
    if (onClick) {
      onClick(event);
    }
  };
  if (active && disabled) {
    console.warn( // eslint-disable-next-line max-len
    "Warning: Tab props 'active' and 'disabled' have both been set to TRUE on the same Tab resulting in an interesting Tab state. Is this your intent?");
  }
  if (!plain) {
    if (typeof title !== 'string') {
      normalizedTitle = title;
    } else if (active) {
      normalizedTitle = /*#__PURE__*/React.createElement(Text, theme.tab.active, title);
    } else if (disabled && theme.tab.disabled) {
      normalizedTitle = /*#__PURE__*/React.createElement(Text, theme.tab.disabled, title);
    } else {
      normalizedTitle = /*#__PURE__*/React.createElement(Text, {
        color: over ? theme.tab.hover.color : theme.tab.color
      }, title);
    }
    if (theme.tab.border) {
      var borderColor = theme.tab.border.color || theme.global.control.border.color;
      if (active) {
        borderColor = theme.tab.border.active.color || borderColor;
      } else if (disabled && theme.tab.border.disabled) {
        borderColor = theme.tab.border.disabled.color || borderColor;
      } else if (over) {
        borderColor = theme.tab.border.hover.color || borderColor;
      }
      borderColor = normalizeColor(borderColor, theme);
      tabStyles.border = {
        side: theme.tab.border.side,
        size: theme.tab.border.size,
        color: borderColor
      };
    }
    tabStyles.background = active ? theme.tab.active.background || theme.tab.background : theme.tab.background;
    tabStyles.pad = theme.tab.pad;
    tabStyles.margin = theme.tab.margin;
  }

  // needed to apply hover/active styles to the icon
  var renderIcon = function renderIcon(iconProp) {
    if (active) {
      return /*#__PURE__*/React.cloneElement(iconProp, _extends({}, theme.tab.active));
    }
    if (disabled) {
      return /*#__PURE__*/React.cloneElement(iconProp, _extends({}, theme.tab.disabled));
    }
    return /*#__PURE__*/React.cloneElement(iconProp, {
      color: over ? theme.tab.hover.color : theme.tab.color
    });
  };
  var normalizedIcon;
  if (icon) {
    normalizedIcon = renderIcon(icon);
  }
  var first = reverse ? normalizedTitle : normalizedIcon;
  var second = reverse ? normalizedIcon : normalizedTitle;
  var withIconStyles;
  if (first && second) {
    withIconStyles = {
      direction: 'row',
      align: 'center',
      justify: 'center',
      gap: 'small'
    };
  }
  return /*#__PURE__*/React.createElement(Button, _extends({
    ref: tabRef,
    plain: true,
    role: "tab",
    "aria-selected": active,
    "aria-expanded": active,
    disabled: disabled
  }, rest, {
    onClick: onClickTab,
    onMouseOver: onMouseOverTab,
    onMouseOut: onMouseOutTab,
    onFocus: function onFocus() {
      if (_onFocus) _onFocus();
      setFocusIndex(index);
    },
    onBlur: function onBlur() {
      if (_onBlur) _onBlur();
      setFocusIndex(-1);
    }
  }), /*#__PURE__*/React.createElement(StyledTab, _extends({
    as: Box,
    disabled: disabled,
    plain: plain
  }, withIconStyles, tabStyles), first, second));
});
Tab.displayName = 'Tab';
Tab.defaultProps = {};
Object.setPrototypeOf(Tab.defaultProps, defaultProps);
Tab.propTypes = TabPropTypes;
export { Tab };