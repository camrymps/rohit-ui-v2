"use strict";

exports.__esModule = true;
exports.MaskedInput = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _defaultProps = require("../../default-props");
var _Box = require("../Box");
var _Button = require("../Button");
var _Drop = require("../Drop");
var _FormContext = require("../Form/FormContext");
var _Keyboard = require("../Keyboard");
var _utils = require("../../utils");
var _StyledMaskedInput = require("./StyledMaskedInput");
var _propTypes = require("./propTypes");
var _excluded = ["a11yTitle", "dropHeight", "dropProps", "focus", "focusIndicator", "icon", "id", "mask", "name", "onBlur", "onChange", "onFocus", "onKeyDown", "placeholder", "plain", "reverse", "textAlign", "value"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var parseValue = function parseValue(mask, value) {
  // break the value up into mask parts
  var valueParts = []; // { part, beginIndex, endIndex }
  var valueIndex = 0;
  var maskIndex = 0;
  while (value !== undefined && valueIndex < value.length && maskIndex < mask.length) {
    var item = mask[maskIndex];
    var found = void 0;
    if (item.fixed) {
      var length = item.fixed.length;

      // grab however much of value (starting at valueIndex) matches
      // item.fixed. If none matches it and there is more in value
      // add in the fixed item.
      var matching = 0;
      while (matching < length && value[valueIndex + matching] === item.fixed[matching]) {
        matching += 1;
      }
      if (matching > 0) {
        var part = value.slice(valueIndex, valueIndex + matching);
        if (valueIndex + matching < value.length) {
          // matched part of the fixed portion but there's more stuff
          // after it. Go ahead and fill in the entire fixed chunk
          part = item.fixed;
        }
        valueParts.push({
          part: part,
          beginIndex: valueIndex,
          endIndex: valueIndex + matching - 1
        });
        valueIndex += matching;
      } else {
        valueParts.push({
          part: item.fixed,
          beginIndex: valueIndex,
          endIndex: valueIndex + length - 1
        });
      }
      maskIndex += 1;
      found = true;
    } else if (item.options && item.restrictToOptions !== false) {
      // reverse assuming larger is later
      found = item.options.slice(0).reverse()
      // eslint-disable-next-line no-loop-func
      .some(function (option) {
        var length = option.length;
        var part = value.slice(valueIndex, valueIndex + length);
        if (part === option) {
          valueParts.push({
            part: part,
            beginIndex: valueIndex,
            endIndex: valueIndex + length - 1
          });
          valueIndex += length;
          maskIndex += 1;
          return true;
        }
        return false;
      });
    }
    if (!found) {
      if (item.regexp) {
        var minLength = Array.isArray(item.length) && item.length[0] || item.length || 1;
        var maxLength = Array.isArray(item.length) && item.length[1] || item.length || value.length - valueIndex;
        var _length = maxLength;
        while (!found && _length >= minLength) {
          var _part = value.slice(valueIndex, valueIndex + _length);
          if (item.regexp.test(_part)) {
            valueParts.push({
              part: _part,
              beginIndex: valueIndex,
              endIndex: valueIndex + _length - 1
            });
            valueIndex += _length;
            maskIndex += 1;
            found = true;
          }
          _length -= 1;
        }
        if (!found) {
          valueIndex = value.length;
        }
      } else {
        var _length2 = Array.isArray(item.length) ? item.length[1] : item.length || value.length - valueIndex;
        var _part2 = value.slice(valueIndex, valueIndex + _length2);
        valueParts.push({
          part: _part2,
          beginIndex: valueIndex,
          endIndex: valueIndex + _length2 - 1
        });
        valueIndex += _length2;
        maskIndex += 1;
      }
    }
  }
  return valueParts;
};
var defaultMask = [{
  regexp: /[^]*/
}];
var ContainerBox = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "MaskedInput__ContainerBox",
  componentId: "sc-af8hzu-0"
})(["", ";"], function (props) {
  return props.dropHeight ? (0, _utils.sizeStyle)('max-height', props.dropHeight, props.theme) : 'max-height: inherit;';
});
var dropAlign = {
  top: 'bottom',
  left: 'left'
};
var MaskedInput = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
    dropHeight = _ref.dropHeight,
    dropProps = _ref.dropProps,
    focusProp = _ref.focus,
    _ref$focusIndicator = _ref.focusIndicator,
    focusIndicator = _ref$focusIndicator === void 0 ? true : _ref$focusIndicator,
    icon = _ref.icon,
    id = _ref.id,
    _ref$mask = _ref.mask,
    mask = _ref$mask === void 0 ? defaultMask : _ref$mask,
    name = _ref.name,
    _onBlur = _ref.onBlur,
    onChange = _ref.onChange,
    _onFocus = _ref.onFocus,
    onKeyDown = _ref.onKeyDown,
    placeholder = _ref.placeholder,
    plain = _ref.plain,
    reverse = _ref.reverse,
    textAlign = _ref.textAlign,
    valueProp = _ref.value,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;
  var formContext = (0, _react.useContext)(_FormContext.FormContext);
  var _formContext$useFormI = formContext.useFormInput({
      name: name,
      value: valueProp
    }),
    value = _formContext$useFormI[0],
    setValue = _formContext$useFormI[1];
  var valueParts = (0, _react.useMemo)(function () {
    return parseValue(mask, value);
  }, [mask, value]);
  var inputRef = (0, _utils.useForwardedRef)(ref);
  var dropRef = (0, _react.useRef)();

  // Caller's ref, if provided
  var _useState = (0, _react.useState)(),
    dropPropsTarget = _useState[0],
    setDropPropsTarget = _useState[1];
  (0, _react.useEffect)(function () {
    var nextDropPropsTarget;
    // If caller provided a ref, set to 'pending' until ref.current is defined
    if (dropProps && 'target' in dropProps) {
      nextDropPropsTarget = dropProps.target || 'pending';
      setDropPropsTarget(nextDropPropsTarget);
    }
  }, [dropProps]);
  var _useState2 = (0, _react.useState)(focusProp),
    focus = _useState2[0],
    setFocus = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    activeMaskIndex = _useState3[0],
    setActiveMaskIndex = _useState3[1];
  var _useState4 = (0, _react.useState)(),
    activeOptionIndex = _useState4[0],
    setActiveOptionIndex = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    showDrop = _useState5[0],
    setShowDrop = _useState5[1];
  (0, _react.useEffect)(function () {
    if (focus) {
      var timer = setTimeout(function () {
        // determine which mask element the caret is at
        var caretIndex = inputRef.current.selectionStart;
        var maskIndex;
        valueParts.some(function (part, index) {
          if (part.beginIndex <= caretIndex && part.endIndex >= caretIndex) {
            maskIndex = index;
            return true;
          }
          return false;
        });
        if (maskIndex === undefined && valueParts.length < mask.length) {
          maskIndex = valueParts.length; // first unused one
        }

        if (maskIndex && mask[maskIndex].fixed) {
          maskIndex -= 1; // fixed mask parts are never "active"
        }

        if (maskIndex !== activeMaskIndex) {
          setActiveMaskIndex(maskIndex);
          setActiveOptionIndex(-1);
          setShowDrop(maskIndex >= 0 && mask[maskIndex].options && true);
        }
      }, 10); // 10ms empirically chosen
      return function () {
        return clearTimeout(timer);
      };
    }
    return undefined;
  }, [activeMaskIndex, focus, inputRef, mask, valueParts]);
  var setInputValue = (0, _react.useCallback)(function (nextValue) {
    // Calling set value function directly on input because React library
    // overrides setter `event.target.value =` and loses original event
    // target fidelity.
    // https://stackoverflow.com/a/46012210 &&
    // https://github.com/grommet/grommet/pull/3171#discussion_r296415239
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    nativeInputValueSetter.call(inputRef.current, nextValue);
    var event = new Event('input', {
      bubbles: true
    });
    inputRef.current.dispatchEvent(event);
  }, [inputRef]);

  // This could be due to a paste or as the user is typing.
  var onChangeInput = (0, _react.useCallback)(function (event) {
    var eventValue = event.target.value;
    // Align with the mask.
    var nextValueParts = parseValue(mask, eventValue);
    var nextValue = nextValueParts.map(function (part) {
      return part.part;
    }).join('');
    if (nextValue !== eventValue) {
      // The mask adjusted the next value. If something was added,
      // the value must be valid. Change the actual input value
      // to correspond.
      // This will re-trigger this callback with the next value.
      if (nextValue.length > eventValue.length) setInputValue(nextValue);
      // If the nextValue is shorter, something must be invalid.
      else if (value && eventValue.length < value.length) {
        // If the user is removing characters, preserve what the
        // user is working on.
        setValue(eventValue);
        if (onChange) onChange(event);
      } else {
        // If the user is adding invalid characters, don't allow it.
        // Revert to the prior value.
        setInputValue(value);
      }
    } else if (value !== nextValue) {
      setValue(nextValue);
      if (onChange) onChange(event);
    }
  }, [mask, onChange, setInputValue, setValue, value]);
  var onOption = (0, _react.useCallback)(function (option) {
    return function () {
      var nextValueParts = [].concat(valueParts);
      nextValueParts[activeMaskIndex] = {
        part: option
      };
      // add any fixed parts that follow
      var index = activeMaskIndex + 1;
      while (index < mask.length && !nextValueParts[index] && mask[index].fixed) {
        nextValueParts[index] = {
          part: mask[index].fixed
        };
        index += 1;
      }
      var nextValue = nextValueParts.map(function (part) {
        return part.part;
      }).join('');
      setInputValue(nextValue);
      // restore focus to input
      inputRef.current.focus();
    };
  }, [activeMaskIndex, inputRef, mask, setInputValue, valueParts]);
  var onNextOption = (0, _react.useCallback)(function (event) {
    var item = mask[activeMaskIndex];
    if (item && item.options) {
      event.preventDefault();
      var index = Math.min(activeOptionIndex + 1, item.options.length - 1);
      setActiveOptionIndex(index);
    }
  }, [activeMaskIndex, activeOptionIndex, mask]);
  var onPreviousOption = (0, _react.useCallback)(function (event) {
    if (activeMaskIndex >= 0 && mask[activeMaskIndex].options) {
      event.preventDefault();
      var index = Math.max(activeOptionIndex - 1, 0);
      setActiveOptionIndex(index);
    }
  }, [activeMaskIndex, activeOptionIndex, mask]);
  var onSelectOption = (0, _react.useCallback)(function (event) {
    if (activeMaskIndex >= 0 && activeOptionIndex >= 0) {
      event.preventDefault();
      var option = mask[activeMaskIndex].options[activeOptionIndex];
      onOption(option)();
    }
  }, [activeMaskIndex, activeOptionIndex, mask, onOption]);
  var onEsc = (0, _react.useCallback)(function (event) {
    if (showDrop) {
      // we have to stop both synthetic events and native events
      // drop and layer should not close by pressing esc on this input
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      setShowDrop(false);
    }
  }, [showDrop]);
  var onHideDrop = (0, _react.useCallback)(function () {
    return setShowDrop(false);
  }, []);
  var renderPlaceholder = function renderPlaceholder() {
    return mask.map(function (item) {
      return item.placeholder || item.fixed;
    }).join('');
  };
  var maskedInputIcon = (0, _utils.useSizedIcon)(icon, rest.size, theme);
  return /*#__PURE__*/_react["default"].createElement(_StyledMaskedInput.StyledMaskedInputContainer, {
    plain: plain
  }, maskedInputIcon && /*#__PURE__*/_react["default"].createElement(_StyledMaskedInput.StyledIcon, {
    reverse: reverse,
    theme: theme
  }, maskedInputIcon), /*#__PURE__*/_react["default"].createElement(_Keyboard.Keyboard, {
    onEsc: onEsc,
    onTab: showDrop ? function () {
      return setShowDrop(false);
    } : undefined,
    onLeft: undefined,
    onRight: undefined,
    onUp: onPreviousOption,
    onDown: showDrop ? onNextOption : function () {
      return setShowDrop(true);
    },
    onEnter: onSelectOption,
    onKeyDown: onKeyDown
  }, /*#__PURE__*/_react["default"].createElement(_StyledMaskedInput.StyledMaskedInput, _extends({
    ref: inputRef,
    "aria-label": a11yTitle,
    id: id,
    name: name,
    autoComplete: "off",
    focusIndicator: focusIndicator,
    plain: plain,
    placeholder: placeholder || renderPlaceholder(),
    icon: icon,
    reverse: reverse,
    focus: focus,
    textAlign: textAlign
  }, rest, {
    value: value,
    theme: theme,
    onFocus: function onFocus(event) {
      setFocus(true);
      setShowDrop(true);
      if (_onFocus) _onFocus(event);
    },
    onBlur: function onBlur(event) {
      setFocus(false);
      // This will be called when the user clicks on a suggestion,
      // check for that and don't remove the drop in that case.
      // Drop will already have removed itself if the user has focused
      // outside of the Drop.
      if (!dropRef.current) setShowDrop(false);
      if (_onBlur) _onBlur(event);
    },
    onChange: onChangeInput
  }))), showDrop && mask[activeMaskIndex] && mask[activeMaskIndex].options &&
  // If caller has specified dropProps.target, ensure target is defined
  dropPropsTarget !== 'pending' && /*#__PURE__*/_react["default"].createElement(_Drop.Drop, _extends({
    id: id ? "masked-input-drop__" + id : undefined,
    align: dropAlign,
    responsive: false,
    target: inputRef.current,
    onClickOutside: onHideDrop,
    onEsc: onHideDrop
  }, dropProps), /*#__PURE__*/_react["default"].createElement(ContainerBox, {
    ref: dropRef,
    overflow: "auto",
    dropHeight: dropHeight
  }, mask[activeMaskIndex].options.map(function (option, index) {
    // Determine whether the label is done as a child or
    // as an option Button kind property.
    var child = !theme.button.option ? /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      pad: {
        horizontal: 'small',
        vertical: 'xsmall'
      }
    }, option) : undefined;
    // if we have a child, turn on plain, and hoverIndicator

    return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      key: option,
      flex: false
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      tabIndex: "-1",
      onClick: onOption(option),
      onMouseOver: function onMouseOver() {
        return setActiveOptionIndex(index);
      },
      onFocus: function onFocus() {},
      active: index === activeOptionIndex,
      plain: !child ? undefined : true,
      align: "start",
      kind: !child ? 'option' : undefined,
      hoverIndicator: !child ? undefined : 'background',
      label: !child ? option : undefined
    }, child));
  }))));
});
exports.MaskedInput = MaskedInput;
MaskedInput.displayName = 'MaskedInput';
MaskedInput.propTypes = _propTypes.MaskedInputPropTypes;