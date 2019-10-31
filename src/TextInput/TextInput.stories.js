import React from 'react';
import {storiesOf} from '@storybook/react';

import {text, boolean} from '@storybook/addon-knobs';

import {TextInput} from './TextInput';
import {Container} from './Container.jsx';

storiesOf('TextInput', module)
  .addWithJSX('default', () => (
    <TextInput
      id="textInput"
      name="textInput"
      placeholder={text('Placeholder', 'Placeholder')}
      value=""
      onChange={str => {}}
    />
  ))
  .addWithJSX('type email', () => (
    <TextInput
      id="textInput"
      type="email"
      name="textInput"
      placeholder={text('Placeholder', 'Placeholder')}
      value=""
      onChange={str => {}}
    />
  ))
  .addWithJSX('error', () => (
    <TextInput
      id="textInput"
      name="textInput"
      label={text('Label', 'label')}
      placeholder={text('Placeholder', 'Placeholder')}
      value="kek"
      error={boolean('Error', true)}
      errorMsg="Oh boy, something went wrong!"
      onChange={str => {}}
    />
  ))
  .addWithJSX('with Label', () => (
    <TextInput
      id="textInput"
      name="textInput"
      label={text('Label', 'label')}
      placeholder={text('Placeholder', 'Placeholder')}
      value=""
      onChange={str => {}}
    />
  ))
  .addWithJSX('with Icon', () => (
    <TextInput
      id="textInput"
      name="textInput"
      label={text('Label', 'label')}
      placeholder={text('Placeholder', 'Placeholder')}
      value="kek"
      trailingIcon="at"
      onChange={str => {}}
    />
  ))
  .addWithJSX('disabled', () => (
    <TextInput
      id="textInput"
      name="textInput"
      label={text('Label', 'label')}
      placeholder={text('Placeholder', 'Placeholder')}
      value="kek"
      onChange={str => {}}
      disabled={true}
    />
  ))
  .addWithJSX('functional', () => <Container />);
