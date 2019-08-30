import React, {FormEvent, FC} from 'react';
import styled from 'styled-components';

import {Icon} from '../Icon';

import {theme} from '../theme';

interface IContainer {
  hasLabel: boolean;
}

interface IInput {
  error: boolean;
}

type Props = {
  /** ID, usually used for tests  */
  id: string;
  /** className attribute to apply classses from props */
  className?: string;
  /** Input type for proper browser support */
  type?: string;
  /** Placeholder */
  placeholder: string;
  /** label displayed above the input  */
  label?: string;
  /** used for label - input connection */
  name?: string;
  /** input value */
  value: string;
  /** error flag */
  error?: boolean;
  /** error text message */
  errorMsg?: string;
  /** onChange listener */
  onChange: (e: string) => void;
  /** onChange listener */
  trailingIcon?: string;
};

export const TextInput: FC<Props> = ({
  id,
  className,
  type,
  placeholder,
  label,
  name,
  value,
  error,
  errorMsg,
  trailingIcon,
  onChange,
}) => (
  <Container className={className} hasLabel={!!label}>
    {label && <Label htmlFor={name}>{label}</Label>}
    <Content error={error || false}>
      <Input
        type={type || 'text'}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        error={error || false}
        autoComplete="off"
        onChange={(e: FormEvent<HTMLInputElement>) =>
          onChange(e.currentTarget.value)
        }
      />
      {trailingIcon && <Icon render={trailingIcon} color="grey4" />}
    </Content>
    {error && <ErrorBox>{errorMsg}</ErrorBox>}
  </Container>
);

const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  height: ${p => (p.hasLabel ? '64px' : '52px')};
`;

const Label = styled.label`
  color: ${theme.colors.grey4};
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 700;
`;

const Content = styled.div<IInput>`
  border-bottom: 1px solid;
  border-color: ${p => theme.colors[`${p.error ? 'red7' : 'grey4'}`]};
  display: flex;
  height: 32px;

  &:hover {
    border-color: ${p => theme.colors[`${p.error ? 'red7' : 'grey6'}`]};
  }

  &:focus {
    border-color: ${p => theme.colors[`${p.error ? 'red7' : 'blue5'}`]};
  }
`;

const Input = styled.input<IInput>`
  border: none;
  color: ${p => theme.colors[`${p.error ? 'red7' : 'black'}`]};
  font-size: 16px;
  width: 100%;
  outline: none;

  &::placeholder {
    color: ${theme.colors.grey4};
  }
`;

const ErrorBox = styled.span`
  margin-top: 7px;
  color: ${theme.colors.red7};
  font-size: 12px;
`;
