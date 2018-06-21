import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

describe('Header', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Header logoutHandler={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should call logoutHandler on button click', () => {
    const logoutSpy = jest.fn();
    const wrapper = shallow(<Header logoutHandler={logoutSpy} />);

    wrapper.find('button').simulate('click');
    expect(logoutSpy).toHaveBeenCalled();
  });
});
