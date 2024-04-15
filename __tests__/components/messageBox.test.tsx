import renderer from 'react-test-renderer';
import { MessageBox } from '../../src/components';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

test('renders correctly', () => {
  const tree = renderer.create(<MessageBox  timestamp={'123456'} title={'Title'} message={'Message'} callbackClose={() => undefined} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('callback test', () => {
  const mockOnPress = jest.fn();

  const { getByTestId  } = render(<MessageBox timestamp={'123456'} title={'Title'} message={'Message'} callbackClose={mockOnPress} />);
  fireEvent.press(getByTestId('messageBox'));
  expect(mockOnPress).toHaveBeenCalled();
});

