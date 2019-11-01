import React from 'react';
import {render} from '@testing-library/react';
import 'jest-styled-components';

import {Textarea} from '../Textarea';

test('renders', () => {
  const {container} = render(
    <Textarea
      id="textarea_id"
      label="Textarea label"
      value=""
      onChange={str => {}}
      resize="both"
      disabled={false}
      placeholder="Placeholder text!"
      className="Textarea"
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('disabled', () => {
  const {container} = render(
    <Textarea
      id="textarea_id"
      label="Textarea label"
      value=""
      onChange={str => {}}
      resize="both"
      disabled={true}
      placeholder="Placeholder text!"
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders with error', () => {
  const {container} = render(
    <Textarea
      id="textarea_id"
      label="Textarea label"
      value=""
      onChange={str => {}}
      resize="both"
      disabled={false}
      error={true}
      errorMsg="Something really quite terrible has gone wrong here!"
      placeholder="Placeholder text!"
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
