import React from 'react';
import {render} from '@testing-library/react';
import 'jest-styled-components';

import {Loader} from '../Loader';
import {theme} from '../../theme';

test('renders', () => {
  const {container} = render(<Loader color={theme.colors.pink[400]} />);
  expect(container.firstChild).toMatchSnapshot();
});
