const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new Adapter() });

const renderWithDefaultProps = require("./src/renderWithDefaultProps");
const testReduxComponent = require("./src/testReduxComponent.js");

module.exports = {
  renderWithDefaultProps,
  testReduxComponent
};
