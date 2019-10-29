import React, {ChangeEvent, FC} from 'react';
import styled from 'styled-components';

import {Text} from '../Text';
import {Icon} from '../Icon';

import {theme} from '../theme';

interface IContainer {
  hasLabel: boolean;
  hasError: boolean;
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
  type?: 'number' | 'tel';
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
  onChange: (e: any) => void;
  /** onChange listener */
  trailingIcon?: string;
  /** toggle for the prefix (i.e. currency symbol) */
  prefix?: string;
  /** toggle for the suffix (i.e. miles or kilometre symbol) */
  suffix?: string;
  /** Required flag */
  required?: boolean;
  /** Minimum allowed number */
  min?: number;
  /** Maximum allowed number */
  max?: number;
  /** Adjust value if entering a number beyond the specified min or max */
  strict: boolean;
  /** Round currency to two decimal places if true */
  roundCurrency: boolean;
};

export const NumberInput: FC<Props> = ({
  id,
  className = '',
  type = 'number',
  placeholder,
  label,
  name,
  value,
  error = false,
  errorMsg,
  trailingIcon,
  onChange,
  prefix,
  suffix,
  required,
  min,
  max,
  strict = false,
  roundCurrency = false,
}) => {
  // Return an empty value if the value is null of undefined
  const defaultValueIfEmpty = (value: any) => {
    return isNaN(value) ? '' : value;
  };

  // Check whether the min/max value exists is within the specified range
  const isInRange = (value: number) => {
    if (min && value < min) {
      return false;
    }

    if (max && value > max) {
      return false;
    }

    return true;
  };

  const handleStrictValue = (event: number) => {
    if (isInRange(event)) {
      return event;
    }

    // Get the difference between the max (or min) and the current value
    const dMax = max && max - event;
    const dMin = min && min - event;

    // if the difference is zero return the min value
    if (!dMax) {
      return min;
    }

    // if the difference is zero return the max value
    if (!dMin) {
      return max;
    }

    // Convert all negative numbers to positive numbers (-90 becomes 90) then,
    // if the converted max diff is less than the min diff, return the max (eg. 100), otherwise return the min (eg. 0)
    return Math.abs(dMax) < Math.abs(dMin) ? max : min;
  };

  const roundNumber = (event: number) => {
    return Math.round(event * 100) / 100;
  };

  const handleChange = (event: number) => {
    const amount = roundCurrency ? roundNumber(event) : event;

    console.log(amount);

    if (strict) {
      onChange(defaultValueIfEmpty(handleStrictValue(amount)));
    } else {
      onChange(defaultValueIfEmpty(amount));
    }
  };

  return (
    <Container className={className} hasLabel={!!label} hasError={!!errorMsg}>
      {label && (
        <Text tag="label" color="grey4" typo="label">
          {label}&nbsp;{required && <Asterisk>*</Asterisk>}
        </Text>
      )}

      <Content error={error}>
        {prefix && (
          <SymbolText tag="span" color="blue7">
            {prefix}&nbsp;
          </SymbolText>
        )}

        <Input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          error={error}
          autoComplete="off"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event.currentTarget.valueAsNumber)
          }
          required={required}
        />

        {console.log(typeof value)}

        {suffix && (
          <SymbolText tag="span" color="blue7">
            &nbsp;{suffix}
          </SymbolText>
        )}

        {trailingIcon && <Icon render={trailingIcon} color="grey4" />}
      </Content>
      {error && <ErrorBox>{errorMsg}</ErrorBox>}
    </Container>
  );
};

const Container = styled.div<IContainer>`
  /* TODO: Remove me */
  font-family: 'Gordita';

  display: flex;
  flex-direction: column;
  height: ${({hasLabel, hasError}) => (hasLabel && hasError ? '64px' : '52px')};
`;

const Content = styled.div<IInput>`
  border-bottom: 1px solid;
  border-color: ${({error}) => theme.colors[`${error ? 'red7' : 'grey4'}`]};
  display: flex;
  align-items: center;
  height: 32px;

  &:hover {
    border-color: ${({error}) => theme.colors[`${error ? 'red7' : 'grey6'}`]};
  }

  &:focus {
    border-color: ${({error}) => theme.colors[`${error ? 'red7' : 'blue5'}`]};
  }
`;

const SymbolText = styled(Text)`
  font-size: 16px;
`;

const Input = styled.input<IInput>`
  /* TODO: Remove me */
  font-family: 'Gordita';
  min-width: 200px;

  border: none;
  color: ${({error}) => theme.colors[`${error ? 'red7' : 'black'}`]};
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

const Asterisk = styled.span`
  font-size: 14px;
  color: ${theme.colors.green5};
`;
