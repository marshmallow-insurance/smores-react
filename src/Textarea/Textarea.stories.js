import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';

import {Container} from './Container';
import {Textarea} from './Textarea';

storiesOf('Textarea', module)
  .addWithJSX('default', () => (
    <Textarea
      id="textarea_id"
      label={text('label', 'Textarea label')}
      value={text('value', '')}
      onChange={() => {}}
      disabled={boolean('disabled', false)}
      placeholder="Here is some placeholder text."
    />
  ))
  .addWithJSX('disabled', () => (
    <Textarea
      id="textarea_id"
      label={text('label', 'Textarea label')}
      value={text('value', '')}
      onChange={() => {}}
      resize="none"
      disabled={boolean('disabled', true)}
      placeholder="Here is some placeholder text."
    />
  ))
  .addWithJSX('error', () => (
    <Textarea
      id="textarea_id"
      label={text('label', 'Textarea label')}
      value={text('value', '')}
      onChange={() => {}}
      resize="both"
      disabled={boolean('disabled', false)}
      error={boolean('error', true)}
      errorMsg={text(
        'error message',
        'Something really quite terrible has gone wrong here!',
      )}
      placeholder={text('placeholder', 'Some lovely placeholder text!')}
    />
  ))
  .addWithJSX('functional', () => <Container />);
