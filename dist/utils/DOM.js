"use strict";

exports.__esModule = true;
exports.withinDropPortal = exports.shouldKeepFocus = exports.setFocusWithoutScroll = exports.makeNodeUnfocusable = exports.makeNodeFocusable = exports.isNodeBeforeScroll = exports.isNodeAfterScroll = exports.isFocusable = exports.getNewContainer = exports.getFirstFocusableDescendant = exports.findVisibleParent = exports.findScrollParents = exports.findScrollParent = exports.findButtonParent = exports.containsFocus = void 0;
var findScrollParent = function findScrollParent(element, horizontal) {
  var result;
  if (element) {
    var parent = element.parentNode;
    while (!result && parent && parent.getBoundingClientRect) {
      var rect = parent.getBoundingClientRect();
      // 10px is to account for borders and scrollbars in a lazy way
      if (horizontal) {
        if (rect.width && parent.scrollWidth > rect.width + 10) {
          result = parent;
        }
      } else if (rect.height && parent.scrollHeight > rect.height + 10) {
        result = parent;
      }
      parent = parent.parentNode;
    }
    // last scrollable element will be the document
    // if nothing else is scrollable in the page
    if (!result) {
      result = document;
    } else if (result.tagName.toLowerCase() === 'body') {
      result = document;
    }
  }
  return result;
};
exports.findScrollParent = findScrollParent;
var documentTags = ['html', 'body'];
var findScrollParents = function findScrollParents(element, horizontal) {
  var result = [];
  if (element) {
    var parent = element.parentNode;
    while (parent && parent.getBoundingClientRect) {
      var rect = parent.getBoundingClientRect();
      // 10px is to account for borders and scrollbars in a lazy way
      if (horizontal) {
        if (rect.width && parent.scrollWidth > rect.width + 10) {
          result.push(parent);
        }
      } else if (rect.height && parent.scrollHeight > rect.height + 10) {
        result.push(parent);
      }
      parent = parent.parentNode;
    }
    if (result.length && documentTags.includes(result[0].tagName.toLowerCase())) {
      result.length = 0;
    }
    // last scrollable element will be the document
    result.push(document);
  }
  return result;
};
exports.findScrollParents = findScrollParents;
var containsFocus = function containsFocus(node) {
  var root = node.getRootNode();
  var element = root.activeElement;
  while (element) {
    if (element === node) break;
    element = element.parentElement;
  }
  return !!element;
};
exports.containsFocus = containsFocus;
var withinDropPortal = function withinDropPortal(node, portalContext) {
  var root = node == null ? void 0 : node.getRootNode();
  var element = node;
  var portalId;
  while (element && element !== root) {
    if (element.hasAttribute('data-g-portal-id')) {
      portalId = element.getAttribute('data-g-portal-id');
      element = root;
    } else {
      element = element.parentElement;
    }
  }
  // if portalContext doesn't contain the portalId then the
  // portal is new and node is within a drop that just opened
  if (portalId === undefined || portalContext.indexOf(parseInt(portalId, 10)) !== -1) return false;
  return true;
};

// Check if the element.tagName is an input, select or textarea
exports.withinDropPortal = withinDropPortal;
var isFocusable = function isFocusable(element) {
  var tagName = element.tagName.toLowerCase();
  return tagName === 'input' || tagName === 'select' || tagName === 'textarea';
};

// Get the first element that can receive focus
exports.isFocusable = isFocusable;
var getFirstFocusableDescendant = function getFirstFocusableDescendant(element) {
  var children = element.getElementsByTagName('*');
  for (var i = 0; i < children.length; i += 1) {
    var child = children[i];
    if (isFocusable(child)) {
      return child;
    }
  }
  return undefined;
};
exports.getFirstFocusableDescendant = getFirstFocusableDescendant;
var shouldKeepFocus = function shouldKeepFocus(root) {
  var element = root.activeElement;
  if (isFocusable(element)) return true;
  return !!getFirstFocusableDescendant(element);
};
exports.shouldKeepFocus = shouldKeepFocus;
var getNewContainer = function getNewContainer(target, targetChildPosition) {
  if (target === void 0) {
    target = document.body;
  }
  // setup DOM
  var container = document.createElement('div');
  if (targetChildPosition === 'first') {
    // for SkipLinks
    target.prepend(container);
  } else {
    target.appendChild(container);
  }
  return container;
};
exports.getNewContainer = getNewContainer;
var setFocusWithoutScroll = function setFocusWithoutScroll(element) {
  var x = window.scrollX;
  var y = window.scrollY;
  element.focus();
  window.scrollTo(x, y);
};
exports.setFocusWithoutScroll = setFocusWithoutScroll;
var TABINDEX = 'tabindex';
var TABINDEX_STATE = 'data-g-tabindex';
var makeNodeFocusable = function makeNodeFocusable(node) {
  // do not touch aria live containers so that announcements work
  if (!node.hasAttribute('aria-live')) {
    node.removeAttribute('aria-hidden');
    // allow children to receive focus again
    var elements = node.getElementsByTagName('*');
    // only reset elements we've changed in makeNodeUnfocusable()
    Array.prototype.filter.call(elements || [], function (element) {
      return element.hasAttribute(TABINDEX_STATE);
    }).forEach(function (element) {
      var prior = element.getAttribute(TABINDEX_STATE);
      if (prior >= 0) {
        element.setAttribute(TABINDEX, element.getAttribute(TABINDEX_STATE));
      } else if (prior === 'none') {
        element.removeAttribute(TABINDEX);
      }
      element.removeAttribute(TABINDEX_STATE);
    });
  }
};
exports.makeNodeFocusable = makeNodeFocusable;
var autoFocusingTags = /(a|area|input|select|textarea|button|iframe)$/;
var makeNodeUnfocusable = function makeNodeUnfocusable(node) {
  // do not touch aria live containers so that announcements work
  if (!node.hasAttribute('aria-live')) {
    node.setAttribute('aria-hidden', true);
    // prevent children to receive focus
    var elements = node.getElementsByTagName('*');
    // first, save off the tabIndex of any element with one
    Array.prototype.filter.call(elements || [], function (element) {
      return element.getAttribute(TABINDEX) !== null;
    }).forEach(function (element) {
      element.setAttribute(TABINDEX_STATE, element.getAttribute(TABINDEX));
      element.setAttribute(TABINDEX, -1);
    });
    // then, if any element is inherently focusable and not handled above,
    // give it a tabIndex of -1 so it can't receive focus
    Array.prototype.filter.call(elements || [], function (element) {
      var currentTag = element.tagName.toLowerCase();
      return currentTag.match(autoFocusingTags) && element.focus && element.getAttribute(TABINDEX_STATE) === null;
    }).forEach(function (element) {
      element.setAttribute(TABINDEX_STATE, 'none');
      element.setAttribute(TABINDEX, -1);
    });
  }
};
exports.makeNodeUnfocusable = makeNodeUnfocusable;
var findVisibleParent = function findVisibleParent(element) {
  if (element) {
    // Get the closest ancestor element that is positioned.
    return element.offsetParent ? element : findVisibleParent(element.parentElement) || element;
  }
  return undefined;
};
exports.findVisibleParent = findVisibleParent;
var isNodeAfterScroll = function isNodeAfterScroll(node, target) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    bottom = _node$getBoundingClie.bottom;
  // target will be the document from findScrollParent()
  var _ref = target.getBoundingClientRect ? target.getBoundingClientRect() : {
      height: 0,
      top: 0
    },
    height = _ref.height,
    top = _ref.top;
  return bottom >= top + height;
};
exports.isNodeAfterScroll = isNodeAfterScroll;
var isNodeBeforeScroll = function isNodeBeforeScroll(node, target) {
  var _node$getBoundingClie2 = node.getBoundingClientRect(),
    top = _node$getBoundingClie2.top;
  // target will be the document from findScrollParent()
  var _ref2 = target.getBoundingClientRect ? target.getBoundingClientRect() : {
      top: 0
    },
    targetTop = _ref2.top;
  return top <= targetTop;
};
exports.isNodeBeforeScroll = isNodeBeforeScroll;
var findButtonParent = function findButtonParent(element) {
  if (element && element.nodeName !== 'BUTTON' && element.nodeName !== 'A') return findButtonParent(element.parentElement);
  return element;
};
exports.findButtonParent = findButtonParent;