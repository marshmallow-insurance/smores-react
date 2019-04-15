import React from 'react';
import TextInput from './TextInput';

type Props = {}

type State = {
  value: string;
};

class BasicForm extends React.PureComponent<Props, State> {
  public state = {
    value: ''
  }

  public render() {
    const { value } = this.state;

    return (
      <form>
        <TextInput
          id="textInput"
          label="label"
          name="textInput"
          onChange={this.setTextInput}
          placeholder="Placeholder"
          error={value.length > 7}
          errorMsg='Value is over 7 characters!'
          trailingIcon='contact-at'
          value={value}
        />
      </form>
    )
  }

  private setTextInput = (e: string): void => {
    this.setState({ value: e });
  }
}

export default BasicForm;