"use strict";

exports.__esModule = true;
exports.AnnounceContext = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = require("./propTypes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var createAnnouncer = function createAnnouncer() {
  var announcer = document.createElement('div');
  announcer.id = 'grommet-announcer';
  announcer.style.left = '-100%';
  announcer.style.right = '100%';
  announcer.style.position = 'fixed';
  announcer.style['z-index'] = '-1';
  document.body.insertBefore(announcer, document.body.firstChild);
  return announcer;
};
var AnnounceContext = /*#__PURE__*/_react["default"].createContext(function (message, mode, timeout) {
  if (mode === void 0) {
    mode = 'polite';
  }
  if (timeout === void 0) {
    timeout = 500;
  }
  // we only create a new container if we don't have one already
  // we create a separate node so that grommet does not set aria-hidden to it
  var announcer = document.body.querySelector("#grommet-announcer[aria-live]") || createAnnouncer();
  announcer.setAttribute('aria-live', 'off');
  announcer.innerHTML = message;
  announcer.setAttribute('aria-live', mode);
  setTimeout(function () {
    announcer.innerHTML = '';
  }, timeout);
});
exports.AnnounceContext = AnnounceContext;
AnnounceContext.propTypes = _propTypes.AnnounceContextPropTypes;