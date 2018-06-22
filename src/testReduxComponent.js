import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import { mount } from "enzyme";

function testReduxComponent(ConnectedComponent, component, initialStore = {}) {
  const state = initialStore;
  const createMockStore = () => createStore(() => state);

  const stateParam = Symbol("state");

  const render = function() {
    return mount(
      <Provider store={createMockStore()}>
        <ConnectedComponent />
      </Provider>
    );
  };

  const testAction = function(actionName, action) {
    it(`should inject action ${actionName}`, () => {
      action.mockImplementation(() => ({
        type: "MOCK_ACTION"
      }));

      const injected = render().find(component).prop(actionName);
      expect(injected).toBeDefined();

      injected();

      expect(action).toHaveBeenCalled();
    });
  };

  const testProp = function(propName, action, parameterOrder = [stateParam]) {
    it(`should inject ${propName}`, () => {
      const mockValue = Symbol("mock-value");
      action.mockImplementation(() => mockValue);

      const propPath = propName.includes(".")
        ? propName.split(".")
        : [propName];

      const prop = render().find(component).prop(propPath.shift());

      if (propPath.length === 0) {
        expect(prop).toBeDefined();
        expect(prop).toEqual(mockValue);
      } else {
        const leafProp = propPath.reduce((subProp, path) => {
          expect(subProp).toBeDefined;
          return subProp[path];
        }, prop);

        expect(leafProp).toBeDefined();
        expect(leafProp).toEqual(mockValue);
      }

      const parameters = parameterOrder.map(
        param => (param === stateParam ? state : param)
      );

      expect(action).toHaveBeenCalledWith(...parameters);
    });
  };

  const testRender = function() {
    it("should render", () => {
      expect(render().exists()).toBe(true);
    });

    it("should render its component", () => {
      expect(render().find(component).exists()).toBe(true);
    });
  };

  return { testProp, testAction, testRender, stateParam };
}

export default testReduxComponent;
