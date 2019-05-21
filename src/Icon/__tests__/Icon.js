import React from 'react';
import {render} from 'react-testing-library';
import 'jest-styled-components';

import {Icon} from '../Icon';

test('renders', () => {
  const {container} = render(
    <Icon render="contact-at" size="32" color="pink" />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
