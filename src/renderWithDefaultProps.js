import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

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
