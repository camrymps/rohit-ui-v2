"use strict";

exports.__esModule = true;
exports.Cards = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _DataContext = require("../../contexts/DataContext");
var _Box = require("../Box");
var _Card = require("../Card");
var _CardBody = require("../CardBody");
var _Grid = require("../Grid");
var _InfiniteScroll = require("../InfiniteScroll");
var _Pagination = require("../Pagination");
var _utils = require("../../utils");
var _propTypes = require("./propTypes");
var _excluded = ["as", "children", "data", "margin", "onMore", "pad", "paginate", "show", "size", "step"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var emptyData = [];
var Cards = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
    as = _ref$as === void 0 ? 'ul' : _ref$as,
    children = _ref.children,
    dataProp = _ref.data,
    margin = _ref.margin,
    onMore = _ref.onMore,
    pad = _ref.pad,
    paginate = _ref.paginate,
    showProp = _ref.show,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'small' : _ref$size,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? paginate ? 50 : undefined : _ref$step,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext);
  var _useContext = (0, _react.useContext)(_DataContext.DataContext),
    contextData = _useContext.data;
  var data = dataProp || contextData || emptyData;
  var _usePagination = (0, _utils.usePagination)(_extends({
      data: data,
      page: (0, _utils.normalizeShow)(showProp, step),
      step: step
    }, paginate)),
    items = _usePagination[0],
    paginationProps = _usePagination[1];
  var Container = paginate ? _Box.Box : _react.Fragment;
  var containerProps = paginate ? _extends({}, theme.cards.container, {
    pad: pad,
    margin: margin
  }) : undefined;
  return /*#__PURE__*/_react["default"].createElement(Container, containerProps, /*#__PURE__*/_react["default"].createElement(_Grid.Grid, _extends({
    ref: ref,
    as: as,
    columns: size,
    gap: "medium",
    margin: !paginate && margin || 'none',
    pad: !paginate && pad || 'none'
  }, rest), /*#__PURE__*/_react["default"].createElement(_InfiniteScroll.InfiniteScroll, {
    items: !paginate ? data : items,
    onMore: onMore,
    show: !paginate ? showProp : undefined,
    step: step,
    renderMarker: function renderMarker(marker) {
      return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
        as: "li",
        flex: false
      }, marker);
    }
  }, function (item, index) {
    var _ref2, _ref3;
    return children ? children(item, index) : /*#__PURE__*/_react["default"].createElement(_Card.Card, {
      key: index.toString(),
      as: as === 'ul' ? 'li' : undefined
    }, /*#__PURE__*/_react["default"].createElement(_CardBody.CardBody, null, (_ref2 = (_ref3 = typeof item === 'string' && item) != null ? _ref3 : typeof item === 'object' && Object.values(item)[0]) != null ? _ref2 : index));
  })), paginate && data.length > step && items && items.length ? /*#__PURE__*/_react["default"].createElement(_Pagination.Pagination, _extends({
    alignSelf: "end"
  }, paginationProps)) : null);
});
exports.Cards = Cards;
Cards.displayName = 'Cards';
Cards.propTypes = _propTypes.CardsPropTypes;