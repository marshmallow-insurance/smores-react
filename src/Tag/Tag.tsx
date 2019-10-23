import React, {FC} from 'react';
import styled from 'styled-components';

import {theme} from '../theme';

interface IWrapper {
  color: string;
}

type TagProps = {
  label: string;
  color?: string;
};

export const Tag: FC<TagProps> = ({label, color = 'grey6'}) => (
  <Wrapper color={color}>
    <span>{label}</span>
  </Wrapper>
);

const Wrapper = styled.div<IWrapper>`
  font-family: GorditaRegular, sans-serif;
  font-size: 14px;
  display: inline-block;
  background-color: ${({color}) => theme.colors[color]};
  color: ${theme.colors.white};
  padding: 9px 16px 8px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  margin-right: 16px;
  text-transform: capitalize;
`;
