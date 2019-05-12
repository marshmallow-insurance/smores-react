import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { Text } from '../Text';
 
test('renders', () => {
    const { container } = render(<Text>The quick brown fox jumps over the lazy dog</Text>);
    expect(container.firstChild).toMatchSnapshot();
});