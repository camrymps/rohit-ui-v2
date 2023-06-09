"use strict";

exports.__esModule = true;
exports.Notification = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _defaultProps = require("../../default-props");
var _Anchor = require("../Anchor");
var _Box = require("../Box");
var _Button = require("../Button");
var _Layer = require("../Layer");
var _Paragraph = require("../Paragraph");
var _Text = require("../Text");
var _propTypes = require("./propTypes");
var _excluded = ["actions", "message", "onClose", "id", "global", "status", "title", "toast", "icon", "time"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var adaptThemeStyle = function adaptThemeStyle(value, theme) {
  var textStyle = value;
  var closeButtonStyle = value;
  if (typeof value === 'string' && theme.global.edgeSize[value]) {
    textStyle = {
      vertical: value,
      left: value,
      right: undefined
    };
    closeButtonStyle = {
      vertical: value,
      right: value
    };
  } else if (typeof value === 'object') {
    var left = value.left,
      right = value.right,
      top = value.top,
      bottom = value.bottom,
      horizontal = value.horizontal,
      vertical = value.vertical;
    textStyle = {
      top: top || vertical,
      bottom: bottom || vertical,
      left: left || horizontal,
      right: undefined
    };
    closeButtonStyle = {
      top: top || vertical,
      bottom: bottom || vertical,
      right: right || horizontal
    };
  }
  return [textStyle, closeButtonStyle];
};
var NotificationAnchor = (0, _styledComponents["default"])(_Anchor.Anchor).withConfig({
  displayName: "Notification__NotificationAnchor",
  componentId: "sc-1yq09yz-0"
})(["white-space:nowrap;"]);
var Notification = function Notification(_ref) {
  var _theme$notification, _theme$notification2, _theme$notification2$, _theme$notification2$2, _theme$notification3, _theme$notification3$, _theme$notification4, _theme$notification4$, _theme$notification4$2, _theme$notification5, _theme$notification5$;
  var actionsProp = _ref.actions,
    messageProp = _ref.message,
    onClose = _ref.onClose,
    id = _ref.id,
    global = _ref.global,
    status = _ref.status,
    title = _ref.title,
    toast = _ref.toast,
    icon = _ref.icon,
    time = _ref.time,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var autoClose = toast && (toast == null ? void 0 : toast.autoClose) === undefined ? true : toast.autoClose;
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;
  var _useState = (0, _react.useState)(true),
    visible = _useState[0],
    setVisible = _useState[1];
  var position = (0, _react.useMemo)(function () {
    return toast && (toast == null ? void 0 : toast.position) || 'top';
  }, [toast]);
  var close = (0, _react.useCallback)(function (event) {
    setVisible(false);
    if (onClose) onClose(event);
  }, [onClose]);
  (0, _react.useEffect)(function () {
    if (autoClose) {
      var timer = setTimeout(close, time || theme.notification.toast.time || theme.notification.time);
      return function () {
        return clearTimeout(timer);
      };
    }
    return undefined;
  }, [autoClose, close, theme.notification.toast.time, theme.notification.time, time]);
  var CloseIcon = theme.notification.close.icon;
  var _ref2 = ((_theme$notification = theme.notification) == null ? void 0 : _theme$notification[status]) || theme.notification.unknown,
    StatusIcon = _ref2.icon,
    color = _ref2.color;
  var closeIconColor = theme.notification.close.color;
  var kind = (0, _react.useMemo)(function () {
    if (toast) return 'toast';
    if (global) return 'global';
    return undefined;
  }, [global, toast]);
  var direction;
  if (kind && theme.notification[kind].direction) direction = theme.notification[kind].direction;else direction = theme.notification.direction;
  var background;
  if (kind && (_theme$notification2 = theme.notification) != null && (_theme$notification2$ = _theme$notification2[status]) != null && (_theme$notification2$2 = _theme$notification2$[kind]) != null && _theme$notification2$2.background) background = theme.notification[status][kind].background;else if ((_theme$notification3 = theme.notification) != null && (_theme$notification3$ = _theme$notification3[status]) != null && _theme$notification3$.background) background = theme.notification[status].background;else background = ((_theme$notification4 = theme.notification) == null ? void 0 : (_theme$notification4$ = _theme$notification4[kind]) == null ? void 0 : (_theme$notification4$2 = _theme$notification4$.container) == null ? void 0 : _theme$notification4$2.background) || theme.notification.container.background;
  var TextWrapper = direction === 'row' ? _Text.Text : _react.Fragment;

  // notification is built with two child boxes that contain:
  // 1. icon + text (wrapped in button when clickable)
  // 2. close button
  // pad needs to be applied to the child boxes, but we don't want to apply
  // extra padding between the icon + text and the button.
  var pad;
  if (kind && theme.notification[kind].container.pad) pad = theme.notification[kind].container.pad;else pad = theme.notification.container.pad;
  var textPad;
  var closeButtonPad;
  if (onClose) {
    var _adaptThemeStyle = adaptThemeStyle(pad, theme);
    textPad = _adaptThemeStyle[0];
    closeButtonPad = _adaptThemeStyle[1];
  } else textPad = pad;
  var actions;
  var message = messageProp;
  if (actionsProp) actions = actionsProp.map(function (action) {
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
      key: action.label
    }, /*#__PURE__*/_react["default"].createElement(NotificationAnchor
    // create space between first anchor and
    // text content and next anchor
    , _extends({
      margin: {
        right: 'xsmall'
      }
    }, action, theme.notification.actions)), ' ');
  });
  var Message = direction !== 'row' ? _Paragraph.Paragraph : _Text.Text;
  if (message || actions) message = typeof message === 'string' ? /*#__PURE__*/_react["default"].createElement(Message, theme.notification.message, /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    margin: {
      right: 'xsmall'
    }
  }, message), actions) : message;
  var iconDimension = ((_theme$notification5 = theme.notification) == null ? void 0 : (_theme$notification5$ = _theme$notification5.message) == null ? void 0 : _theme$notification5$.size) || 'medium';
  var content = /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({}, theme.notification.container, global ? _extends({}, theme.notification.global.container) : {}, toast ? _extends({}, theme.notification.toast.container) : {}, {
    background: background
    // let internal box control pad
    ,
    pad: undefined,
    direction: "row",
    gap: "small",
    id: toast ? undefined : id
  }, rest), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    direction: "row",
    pad: textPad,
    flex: true
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, theme.notification.iconContainer, icon || /*#__PURE__*/_react["default"].createElement(StatusIcon, {
    color: color,
    height: iconDimension
  })), /*#__PURE__*/_react["default"].createElement(_Box.Box, theme.notification.textContainer, /*#__PURE__*/_react["default"].createElement(TextWrapper, null, title && /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.notification.title, title), message && title && direction === 'row' && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "\xA0"), message))), onClose &&
  /*#__PURE__*/
  // theme.notification.container and textContainer may both have pad,
  // account for both
  _react["default"].createElement(_Box.Box, {
    pad: closeButtonPad
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, theme.notification.textContainer, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(CloseIcon, {
      color: closeIconColor,
      height: iconDimension,
      width: iconDimension
    }),
    onClick: close,
    hoverIndicator: true,
    plain: true
  }))));
  if (toast) {
    content = visible && /*#__PURE__*/_react["default"].createElement(_Layer.Layer, _extends({}, theme.notification.toast.layer, {
      role: "log",
      modal: false,
      onEsc: onClose,
      id: id,
      responsive: false,
      plain: true,
      position: position
    }), content);
  }
  return content;
};
exports.Notification = Notification;
Notification.defaultProps = {
  status: 'unknown',
  toast: false
};
Object.setPrototypeOf(Notification.defaultProps, _defaultProps.defaultProps);
Notification.displayName = 'Notification';
Notification.propTypes = _propTypes.NotificationType;