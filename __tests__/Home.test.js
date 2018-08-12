// MyComponent.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Home from '../src/components/Home';

describe("Home component", () => {
  it("should render the Home component", () => {
    const wrapper = shallow(<Home />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();

  });
});