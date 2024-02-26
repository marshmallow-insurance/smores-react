import React from 'react';
import {render} from '@testing-library/react';
import 'jest-styled-components';

import {Toggle} from '../Toggle';

test('renders', () => {
  const {container} = render(
    <Toggle id="toggle" checked={false} onToggle={() => {}} />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
