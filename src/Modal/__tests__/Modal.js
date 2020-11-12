import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import {Modal} from '../Modal';

test('renders', () => {
  const {container} = render(<Modal>Text inside</Modal>);
  expect(container.firstChild).toMatchSnapshot();
});
