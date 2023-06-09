"use strict";

exports.__esModule = true;
exports.FormField = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _defaultProps = require("../../default-props");
var _utils = require("../../utils");
var _styles = require("../../utils/styles");
var _mixins = require("../../utils/mixins");
var _refs = require("../../utils/refs");
var _Box = require("../Box");
var _CheckBox = require("../CheckBox");
var _CheckBoxGroup = require("../CheckBoxGroup");
var _RadioButtonGroup = require("../RadioButtonGroup");
var _Text = require("../Text");
var _TextInput = require("../TextInput");
var _FormContext = require("../Form/FormContext");
var _propTypes = require("./propTypes");
var _excluded = ["error", "info", "message", "type"],
  _excluded2 = ["component", "disabled", "invalid", "name", "onChange"],
  _excluded3 = ["children", "className", "component", "contentProps", "disabled", "error", "help", "htmlFor", "info", "label", "margin", "name", "onBlur", "onChange", "onFocus", "pad", "required", "style", "validate", "validateOn"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var grommetInputNames = ['CheckBox', 'CheckBoxGroup', 'TextInput', 'Select', 'MaskedInput', 'SelectMultiple', 'TextArea', 'DateInput', 'FileInput', 'RadioButtonGroup', 'RangeInput', 'RangeSelector', 'StarRating', 'ThumbsRating'];
var grommetInputPadNames = ['CheckBox', 'CheckBoxGroup', 'RadioButtonGroup', 'RangeInput', 'RangeSelector'];
var isGrommetInput = function isGrommetInput(comp) {
  return comp && (grommetInputNames.indexOf(comp.displayName) !== -1 || grommetInputPadNames.indexOf(comp.displayName) !== -1);
};
var FormFieldBox = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "FormField__FormFieldBox",
  componentId: "sc-m9hood-0"
})(["", " ", ""], function (props) {
  return props.focus && (0, _styles.focusStyle)({
    justBorder: true
  });
}, function (props) {
  return props.theme.formField && props.theme.formField.extend;
});
var FormFieldContentBox = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "FormField__FormFieldContentBox",
  componentId: "sc-m9hood-1"
})(["", ""], function (props) {
  return props.focus && (0, _styles.focusStyle)({
    justBorder: true
  });
});
var StyledMessageContainer = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "FormField__StyledMessageContainer",
  componentId: "sc-m9hood-2"
})(["", ""], function (props) {
  return props.messageType && props.theme.formField[props.messageType].container && props.theme.formField[props.messageType].container.extend;
});
var RequiredText = (0, _styledComponents["default"])(_Text.Text).withConfig({
  displayName: "FormField__RequiredText",
  componentId: "sc-m9hood-3"
})(["color:inherit;font-weight:inherit;line-height:inherit;"]);
var ScreenReaderOnly = (0, _styledComponents["default"])(_Text.Text).withConfig({
  displayName: "FormField__ScreenReaderOnly",
  componentId: "sc-m9hood-4"
})(["position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0;"]);
var Message = function Message(_ref) {
  var error = _ref.error,
    info = _ref.info,
    message = _ref.message,
    type = _ref.type,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;
  if (message) {
    var icon;
    var containerProps;
    if (type) {
      icon = theme.formField[type] && theme.formField[type].icon;
      containerProps = theme.formField[type] && theme.formField[type].container;
    }
    var messageContent;
    if (typeof message === 'string') messageContent = /*#__PURE__*/_react["default"].createElement(_Text.Text, rest, message);else messageContent = /*#__PURE__*/_react["default"].createElement(_Box.Box, rest, message);
    return icon || containerProps ? /*#__PURE__*/_react["default"].createElement(StyledMessageContainer, _extends({
      direction: "row",
      messageType: type
    }, containerProps), icon && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      flex: false
    }, icon), messageContent) : messageContent;
  }
  return null;
};
var Input = function Input(_ref2) {
  var component = _ref2.component,
    disabled = _ref2.disabled,
    invalid = _ref2.invalid,
    name = _ref2.name,
    _onChange = _ref2.onChange,
    rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  var formContext = (0, _react.useContext)(_FormContext.FormContext);
  var _formContext$useFormI = formContext.useFormInput({
      name: name,
      value: rest.value
    }),
    value = _formContext$useFormI[0],
    setValue = _formContext$useFormI[1];
  var InputComponent = component || _TextInput.TextInput;
  // Grommet input components already check for FormContext
  // and, using their `name`, end up calling the useFormInput.setValue()
  // already. For custom components, we expect they will call
  // this onChange() and we'll call setValue() here, primarily
  // for backwards compatibility.
  var extraProps = isGrommetInput(InputComponent) ? {
    focusIndicator: false,
    onChange: _onChange,
    plain: true
  } : {
    value: value,
    onChange: function onChange(event) {
      setValue(event.value !== undefined ? event.value : event.target.value);
      if (_onChange) _onChange(event);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(InputComponent, _extends({
    name: name,
    disabled: disabled,
    "aria-invalid": invalid || undefined
  }, rest, extraProps));
};
var useDebounce = function useDebounce() {
  var _useState = (0, _react.useState)(),
    func = _useState[0],
    setFunc = _useState[1];
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;
  (0, _react.useEffect)(function () {
    var timer;
    if (func) timer = setTimeout(function () {
      return func();
    }, theme.global.debounceDelay);
    return function () {
      return clearTimeout(timer);
    };
  }, [func, theme.global.debounceDelay]);
  return setFunc;
};
var FormField = /*#__PURE__*/(0, _react.forwardRef)(function (_ref3, ref) {
  var children = _ref3.children,
    className = _ref3.className,
    component = _ref3.component,
    contentProps = _ref3.contentProps,
    disabled = _ref3.disabled,
    errorProp = _ref3.error,
    help = _ref3.help,
    htmlFor = _ref3.htmlFor,
    infoProp = _ref3.info,
    label = _ref3.label,
    margin = _ref3.margin,
    name = _ref3.name,
    _onBlur = _ref3.onBlur,
    onChange = _ref3.onChange,
    _onFocus = _ref3.onFocus,
    pad = _ref3.pad,
    required = _ref3.required,
    style = _ref3.style,
    validate = _ref3.validate,
    validateOn = _ref3.validateOn,
    rest = _objectWithoutPropertiesLoose(_ref3, _excluded3);
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;
  var formContext = (0, _react.useContext)(_FormContext.FormContext);
  var _formContext$useFormF = formContext.useFormField({
      disabled: disabled,
      error: errorProp,
      info: infoProp,
      name: name,
      required: required,
      validate: validate,
      validateOn: validateOn
    }),
    error = _formContext$useFormF.error,
    info = _formContext$useFormF.info,
    inForm = _formContext$useFormF.inForm,
    contextOnBlur = _formContext$useFormF.onBlur,
    contextOnChange = _formContext$useFormF.onChange;
  var formKind = formContext.kind;
  var _useState2 = (0, _react.useState)(),
    focus = _useState2[0],
    setFocus = _useState2[1];
  var formFieldRef = (0, _refs.useForwardedRef)(ref);
  var formFieldTheme = theme.formField;
  var themeBorder = formFieldTheme.border;
  var debounce = useDebounce();
  var portalContext = (0, _react.useContext)(_utils.PortalContext);

  // This is here for backwards compatibility. In case the child is a grommet
  // input component, set plain and focusIndicator props, if they aren't
  // already set.
  var wantContentPad = component && (component === _CheckBox.CheckBox || component === _CheckBoxGroup.CheckBoxGroup || component === _RadioButtonGroup.RadioButtonGroup);
  var contents = themeBorder && children && _react.Children.map(children, function (child) {
    if (child && child.type && grommetInputPadNames.indexOf(child.type.displayName) !== -1) {
      wantContentPad = true;
    }
    if (child && child.type && grommetInputNames.indexOf(child.type.displayName) !== -1 && child.props.plain === undefined && child.props.focusIndicator === undefined) {
      var _formFieldTheme$check;
      return /*#__PURE__*/(0, _react.cloneElement)(child, {
        plain: true,
        focusIndicator: false,
        pad: 'CheckBox'.indexOf(child.type.displayName) !== -1 ? formFieldTheme == null ? void 0 : (_formFieldTheme$check = formFieldTheme.checkBox) == null ? void 0 : _formFieldTheme$check.pad : undefined
      });
    }
    return child;
  }) || children;

  // put rest on container, unless we use internal Input
  var containerRest = rest;
  if (inForm) {
    if (!contents) containerRest = {};
    contents = contents || /*#__PURE__*/_react["default"].createElement(Input, _extends({
      component: component,
      disabled: disabled,
      invalid: !!error,
      name: name,
      label: component === _CheckBox.CheckBox ? label : undefined
    }, rest));
  }
  var themeContentProps = _extends({}, formFieldTheme.content);
  if (!pad && !wantContentPad) {
    themeContentProps.pad = undefined;
  }
  if (themeBorder && themeBorder.position === 'inner') {
    if (error && formFieldTheme.error) {
      themeContentProps.background = formFieldTheme.error.background;
    } else if (disabled && formFieldTheme.disabled) {
      themeContentProps.background = formFieldTheme.disabled.background;
    }
  }

  // fileinput handle
  // use fileinput plain use formfield to drive the border
  var isFileInputComponent;
  if (children && _react.Children.forEach(children, function (child) {
    if (child && child.type && 'FileInput'.indexOf(child.type.displayName) !== -1) isFileInputComponent = true;
  })) ;
  if (component && component.displayName === 'FileInput' && !isFileInputComponent) {
    isFileInputComponent = true;
  }
  if (!themeBorder) {
    contents = /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({}, themeContentProps, contentProps), contents);
  }
  var borderColor;
  if (disabled && formFieldTheme.disabled.border && formFieldTheme.disabled.border.color) {
    borderColor = formFieldTheme.disabled.border.color;
  } else if (
  // backward compatibility check
  error && themeBorder && themeBorder.error.color || error && formFieldTheme.error && formFieldTheme.error.border) {
    if (themeBorder.error.color && formFieldTheme.error.border === undefined) {
      borderColor = themeBorder.error.color || 'status-critical';
    } else if (formFieldTheme.error.border && formFieldTheme.error.border.color) {
      borderColor = formFieldTheme.error.border.color || 'status-critical';
    }
  } else if (focus && formFieldTheme.focus && formFieldTheme.focus.border && formFieldTheme.focus.border.color) {
    borderColor = formFieldTheme.focus.border.color;
  } else {
    borderColor = themeBorder && themeBorder.color || 'border';
  }
  var labelStyle;
  if (formKind) {
    labelStyle = _extends({}, formFieldTheme[formKind].label);
  } else labelStyle = _extends({}, formFieldTheme.label);
  if (disabled) {
    labelStyle.color = formFieldTheme.disabled && formFieldTheme.disabled.label ? formFieldTheme.disabled.label.color : labelStyle.color;
  }
  var abut;
  var abutMargin;
  var outerStyle = style;

  // If fileinput is wrapped in a formfield we want to use
  // the border style from the fileInput.theme. We also do not
  // want the foocus around the formfield since the the focus
  // is on the anchor/button inside fileinput

  if (themeBorder) {
    var innerProps = themeBorder.position === 'inner' ? {
      border: _extends({}, themeBorder, {
        size: isFileInputComponent ? theme.fileInput.border.size : undefined,
        style: isFileInputComponent ? theme.fileInput.border.style : undefined,
        side: isFileInputComponent ? theme.fileInput.border.side : themeBorder.side || 'bottom',
        color: borderColor
      }),
      round: formFieldTheme.round,
      focus: isFileInputComponent ? undefined : focus
    } : {};
    contents = /*#__PURE__*/_react["default"].createElement(FormFieldContentBox, _extends({}, themeContentProps, innerProps, contentProps), contents);
    var mergedMargin = margin || formFieldTheme.margin;
    abut = themeBorder.position === 'outer' && (themeBorder.side === 'all' || themeBorder.side === 'horizontal' || !themeBorder.side) && !(mergedMargin && (typeof mergedMargin === 'string' && mergedMargin !== 'none' || mergedMargin.bottom && mergedMargin.bottom !== 'none' || mergedMargin.horizontal && mergedMargin.horizontal !== 'none'));
    if (abut) {
      // marginBottom is set to overlap adjacent fields
      abutMargin = {
        bottom: '-1px'
      };
      if (margin) {
        abutMargin = margin;
      } else if (themeBorder.size) {
        // if the user defines a margin,
        // then the default margin below will be overridden
        abutMargin = {
          bottom: "-" + (0, _mixins.parseMetricToNum)(theme.global.borderSize[themeBorder.size] || themeBorder.size) + "px"
        };
      }
      outerStyle = _extends({
        position: focus ? 'relative' : undefined,
        zIndex: focus ? 10 : undefined
      }, style);
    }
  }
  var outerBackground;
  if (themeBorder && themeBorder.position === 'outer') {
    if (error && formFieldTheme.error && formFieldTheme.error.background) {
      outerBackground = formFieldTheme.error.background;
    } else if (focus && formFieldTheme.focus && formFieldTheme.focus.background && formFieldTheme.focus.background.color) {
      outerBackground = formFieldTheme.focus.background.color;
    } else if (disabled && formFieldTheme.disabled && formFieldTheme.disabled.background) {
      outerBackground = formFieldTheme.disabled.background;
    }
  }
  var outerProps = themeBorder && themeBorder.position === 'outer' ? {
    border: _extends({}, themeBorder, {
      color: borderColor
    }),
    round: formFieldTheme.round,
    focus: focus
  } : {};
  var requiredIndicator = theme.formField.label.requiredIndicator;
  if (requiredIndicator === true)
    // accessibility resource: https://www.deque.com/blog/anatomy-of-accessible-forms-required-form-fields/
    // this approach allows the required indicator to be hidden visually,
    // but present for assistive tech.
    // using aria-hidden so screen does not read out "star" and
    // just reads out "required"
    requiredIndicator = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(RequiredText, {
      "aria-hidden": "true"
    }, "*"), /*#__PURE__*/_react["default"].createElement(ScreenReaderOnly, null, "required"));
  var showRequiredIndicator = required && requiredIndicator;
  if (typeof required === 'object' && required.indicator === false) showRequiredIndicator = false;
  return /*#__PURE__*/_react["default"].createElement(FormFieldBox, _extends({
    ref: formFieldRef,
    className: className,
    background: outerBackground,
    margin: abut ? abutMargin : margin || _extends({}, formFieldTheme.margin)
  }, outerProps, {
    style: outerStyle,
    onFocus: function onFocus(event) {
      var _formFieldRef$current;
      var root = (_formFieldRef$current = formFieldRef.current) == null ? void 0 : _formFieldRef$current.getRootNode();
      if (root) {
        setFocus((0, _utils.containsFocus)(formFieldRef.current) && (0, _utils.shouldKeepFocus)(root));
      }
      if (_onFocus) _onFocus(event);
    },
    onBlur: function onBlur(event) {
      setFocus(false);

      // if input has a drop and focus is within drop
      // prevent onBlur validation from running until
      // focus is no longer within the drop or input
      if (contextOnBlur && !formFieldRef.current.contains(event.relatedTarget) && !(0, _utils.withinDropPortal)(event.relatedTarget, portalContext)) {
        contextOnBlur(event);
      }
      if (_onBlur) _onBlur(event);
    },
    onChange: contextOnChange || onChange ? function (event) {
      event.persist();
      if (onChange) onChange(event);
      if (contextOnChange) debounce(function () {
        return function () {
          return contextOnChange(event);
        };
      });
    } : undefined
  }, containerRest), label && component !== _CheckBox.CheckBox || help ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, label && component !== _CheckBox.CheckBox && /*#__PURE__*/_react["default"].createElement(_Text.Text, _extends({
    as: "label",
    htmlFor: htmlFor
  }, labelStyle), label, showRequiredIndicator ? requiredIndicator : undefined), /*#__PURE__*/_react["default"].createElement(Message, _extends({
    message: help
  }, formFieldTheme.help))) : undefined, contents, /*#__PURE__*/_react["default"].createElement(Message, _extends({
    type: "error",
    message: error
  }, formFieldTheme.error)), /*#__PURE__*/_react["default"].createElement(Message, _extends({
    type: "info",
    message: info
  }, formFieldTheme.info)));
});
exports.FormField = FormField;
FormField.displayName = 'FormField';
FormField.propTypes = _propTypes.FormFieldPropTypes;