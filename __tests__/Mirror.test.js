// MyComponent.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Mirror from '../src/components/Mirror';

describe("Mirror component", () => {
  it("should render the Mirror component", () => {
    const wrapper = shallow(<Mirror />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});