import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import renderWithDefaultProps from "./src/renderWithDefaultProps";
import testReduxComponent from "./src/testReduxComponent.js";

export { renderWithDefaultProps, testReduxComponent };
