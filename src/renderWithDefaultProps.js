import React from "react";
import { shallow, mount } from "enzyme";

const defaultOptions = {
  useMount: false
};

export default (component, defaultProps, opts = defaultOptions) => props => {
  const merged = {
    ...defaultProps,
    ...props
  };

  const el = React.createElement(component, merged);
  const render = opts.useMount ? mount : shallow;

  return render(el);
};
