import PropTypes from 'prop-types';
var PropType = {};
if (process.env.NODE_ENV !== 'production') {
  PropType = {
    children: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.any),
    onMore: PropTypes.func,
    renderMarker: PropTypes.func,
    replace: PropTypes.bool,
    show: PropTypes.number,
    step: PropTypes.number
  };
}
export var InfiniteScrollPropTypes = PropType;