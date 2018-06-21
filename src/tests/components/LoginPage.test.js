import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

describe('Login page', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<LoginPage />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should call loginHandler on button click', () => {
    const loginSpy = jest.fn();
    const wrapper = shallow(<LoginPage loginHandler={loginSpy} />);

    wrapper.find('button').simulate('click');
    expect(loginSpy).toHaveBeenCalled();
  });
});
