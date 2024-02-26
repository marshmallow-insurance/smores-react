import React from 'react';
import {render} from '@testing-library/react';

import {CheckBox} from '../CheckBox';

test('renders', () => {
  const {container} = render(<CheckBox />);
  expect(container.firstChild).toMatchSnapshot();
});
