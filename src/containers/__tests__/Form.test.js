import { shallow } from 'enzyme';
import React from 'react';
import Form from '../Form';

describe('Form tests', () => {
  const onSubmitMock = jest.fn();
  const wrapper = shallow(
    <Form onSubmit={onSubmitMock} />
  );

  it('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
