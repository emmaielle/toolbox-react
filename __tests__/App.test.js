// MyComponent.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from '../src/App';

describe("App component", () => {
  it("should render the App component", () => {
    const wrapper = shallow(<App />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });
});