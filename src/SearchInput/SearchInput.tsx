import React, {FC, useState} from 'react';
import styled from 'styled-components';

import {Text} from '../Text';
import {theme} from '../theme';

export type SearchInputItem = {
  label: string;
  value: string;
};

interface IContainer {
  show: boolean;
}
interface ISearchInput {
  id: string;
  name: string;
  value: string;
  onKeyUp: (e: React.FormEvent<HTMLInputElement>) => void;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

type Props = {
  /** ID, usually used for tests  */
  id: string;
  /** label displayed above the input  */
  label?: string;
  /** Placeholder (initial state) */
  placeholder?: string;
  /** list of items for the search list */
  searchList: SearchInputItem[];
  /** onFound listener */
  onFound: (element: string) => void;
};

export const SearchInput: FC<Props> = ({
  id,
  label,
  placeholder,
  searchList,
  onFound,
}) => {
  const [active, setActive] = useState(false);
  const [list, setList] = useState(searchList);
  const [selectedResult, setSelectedResult] = useState('');

  const search = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;

    if (value) {
      // start filtering if the input has at least 2 characters
      if (value.length >= 2) {
        const filteredList = searchList.filter(el =>
          el.label.toLowerCase().includes(value.toLocaleLowerCase()),
        );

        // update the local state with the filtered results
        setActive(true);
        setList(filteredList);
      }
    } else {
      setActive(false);
    }
  };

  const updateInputState = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;
    setSelectedResult(value);
  };

  const select = (selectedItem: SearchInputItem): void => {
    setActive(false);
    setSelectedResult(selectedItem.label);
    onFound(selectedItem.value);
  };

  return (
    <Container show={active}>
      {label && (
        <Text tag="label" color={theme.colors.grey[400]} typo="label">
          {label}
        </Text>
      )}
      <Input
        id={id}
        type="text"
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        value={selectedResult}
        onKeyUp={search}
        onChange={updateInputState}
      />

      <ResultsContainer show={active}>
        <ResultsList>
          {list.length ? (
            list.map((el, i) => (
              <li key={i} onClick={() => select(el)}>
                {el.label}
              </li>
            ))
          ) : (
            <li>No results</li>
          )}
        </ResultsList>
      </ResultsContainer>
    </Container>
  );
};

const Container = styled.div<IContainer>`
  position: relative;
  width: 100%;
  background: ${theme.colors.white};
`;

const Input = styled.input<ISearchInput>`
  display: block;
  border: none;
  border-bottom: 1px solid;
  border-color: ${theme.colors.grey[400]};
  outline: none;
  color: ${theme.colors.blue[700]};
  font-size: 16px;
  height: 32px;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: ${theme.colors.grey[400]};
  }
`;

const ResultsContainer = styled.div<IContainer>`
  box-sizing: border-box;
  overflow-y: hidden;
  position: absolute;
  width: 100%;

  ul {
    max-height: ${p => (p.show ? '192px' : '0px')};
    border-color: ${p =>
      p.show ? `${theme.colors.grey[400]}` : 'transparent'};
  }
`;

const ResultsList = styled.ul`
  position: relative;
  list-style: none;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.grey[400]};
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 1000;

  li {
    padding: 16px 14px;
    box-sizing: border-box;
    font-size: 16px;
    color: ${theme.colors.blue[700]};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.background[300]};
    }
  }
`;
