import { shallow } from 'enzyme';
import React from 'react';
import Home from '../Home';

describe('Home tests', () => {
  const requestMock = {};
  const sendTextMock = jest.fn();
  const wrapper = shallow(
    <Home
      request={requestMock}
      sendTex={sendTextMock}
    />
  );
  
  it('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
