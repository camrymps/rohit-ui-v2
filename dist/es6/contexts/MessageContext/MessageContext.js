import React from 'react';
import defaultMessages from '../../languages/default.json';

// options:
//   id: message id
//   messages: (optional) an object of message overrides
//   values: (optional) currently unused but in the future
//     will be an object with substitution values for
//     positional variables in the message text.
//   defaultMessage: (optional) default message to use if
//     the message isn't found elsewhere.
var _format = function format(options, messages) {
  var _options$id;
  // Message id's are hierarchical. For the component-specific
  // message objects passed as options.messages, just use the last
  // component in the id for backwards compatibility.
  //
  // For overall messages passed to grommet, use the hierarchical
  // id. For that messages object, the messages are in an object
  // hierarchy by component, similar to how the theme works.
  //
  // Applications that typically keep their messages in flat
  // objects with a single key string per message can override
  // this format function to get the grommet messages from
  // their bundles that way and don't need to pass the messages
  // themselves in this property, just the format function.
  var idParts = ((_options$id = options.id) == null ? void 0 : _options$id.split('.')) || [];
  // eslint-disable-next-line no-unsafe-optional-chaining
  var baseId = idParts[(idParts == null ? void 0 : idParts.length) - 1];
  var messageObj = messages;
  idParts.forEach(function (idPart) {
    if (typeof messageObj === 'object') {
      messageObj = messageObj[idPart];
    }
  });
  var message = (options.messages ? options.messages[baseId] : undefined) || messageObj || options.defaultMessage;
  var values = options.values;
  var newMessage = message;
  var tokens = message == null ? void 0 : message.match(/\{(.+?)\}/g);
  tokens == null ? void 0 : tokens.forEach(function (token) {
    var names = token.substr(1, token.length - 2);
    var value = values[names];
    newMessage = newMessage.replace(token, value);
  });
  return values ? newMessage : message;
};
export { _format as format };
var defaultValue = {
  messages: defaultMessages,
  format: function format(options) {
    return _format(options, defaultMessages);
  }
};
export var MessageContext = /*#__PURE__*/React.createContext(defaultValue);