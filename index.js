import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

export { renderWithDefaultProps } from "./src/renderWithDefaultProps";
export { testReduxComponent } from "./src/testReduxComponent.js";
