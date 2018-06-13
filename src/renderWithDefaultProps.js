const React = require("react");
const { shallow, mount } = require("enzyme");

const defaultOptions = {
  useMount: false
};

module.exports = function renderWithDefaultProps(
  component,
  defaultProps,
  opts = defaultOptions
) {
  return function render(props) {
    const merged = Object.assign({}, defaultProps, props);

    const el = React.createElement(component, merged);
    const render = opts.useMount ? mount : shallow;

    return render(el);
  };
};
