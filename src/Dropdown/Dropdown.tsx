import React, {FC, useRef, useEffect} from 'react';
import styled from 'styled-components';

import {Text} from '../Text';
import {Icon} from '../Icon';

import {theme} from '../theme';

interface IDropdown {
  active: boolean;
}

export type DropdownItem = {
  label: string;
  value: string | number | boolean;
};

type Props = {
  /** ID, usually used for tests  */
  id: string;
  /** className attribute to apply classses from props */
  className?: string;
  /** label displayed above the dropdown  */
  label?: string;
  /** Placeholder (initial state) */
  placeholder?: string;
  /** current active item selected */
  value: string;
  /** list of items for the dropdown list */
  list: DropdownItem[];
  /** onSelect handler */
  onSelect: (item: DropdownItem) => void;
};

export const Dropdown: FC<Props> = ({
  id,
  className = '',
  label,
  placeholder,
  value,
  list,
  onSelect,
}) => {
  const node = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = (e: any) => {
    if (node && node.current) {
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }
    }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const selectItem = (newItem: DropdownItem) => {
    if (newItem.value !== value) {
      onSelect(newItem);
    }

    setOpen(false);
  };

  return (
    <Container
      ref={node}
      className={className}
      active={isOpen}
      onClick={() => setOpen(!isOpen)}
    >
      {label && (
        <Text tag="label" color="grey4" typo="label">
          {label}
        </Text>
      )}
      <Content id={id}>
        <Value>{value || placeholder}</Value>
        <Icon render="up-down" color="grey4" size={24} />
        <List active={isOpen}>
          {list.map((el, i) => (
            <Item key={i} onClick={() => selectItem(el)}>
              {el.label}
            </Item>
          ))}
        </List>
      </Content>
    </Container>
  );
};

const Container = styled.div<IDropdown>`
  display: flex;
  flex-direction: column;
  height: 44px;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Content = styled.div`
  border-bottom: 1px solid;
  border-color: ${theme.colors.grey4};
  display: flex;
  height: 32px;
  position: relative;
  align-items: center;
  cursor: pointer;

  &:hover {
    border-color: ${theme.colors.grey6};
  }

  &:focus {
    border-color: ${theme.colors.blue5};
  }
`;

const Value = styled.span`
  border: none;
  color: ${theme.colors.blue7};
  font-family: ${theme.font.family.normal};
  font-size: 16px;
  width: 100%;
  padding: 0;
  outline: none;
  text-align: left;

  &::placeholder {
    color: ${theme.colors.grey4};
  }
`;

const List = styled.ul<IDropdown>`
  display: ${p => (p.active ? 'block' : 'none')};
  position: absolute;
  transform: translateY(32px);
  max-height: 192px;
  width: 100%;
  overflow: auto;
  top: 0px;
  left: 0px;
  padding: 0;
  margin: 0;
  will-change: transform;
  z-index: 200;
  list-style: none;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.grey4};
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Item = styled.li`
  padding: 16px;
  font-family: ${theme.font.family.normal};

  &:hover {
    background-color: ${theme.colors.bg3};
    cursor: pointer;
  }
`;
