import React from 'react';
import {render} from 'react-testing-library';
import 'jest-styled-components';

import {TextInput} from '../TextInput';

test('renders', () => {
  const {container} = render(
    <TextInput
      id="textInput"
      name="textInput"
      placeholder="Placeholder"
      value=""
      onChange={str => {}}
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
