import React, {FC} from 'react';
import styled from 'styled-components';

import {Text} from '../Text';

type TagProps = {
  label: string;
  className?: string;
  color: string;
  bgColor: string;
  borderColor: string;
};

export const Tag: FC<TagProps> = ({
  label,
  color,
  borderColor,
  bgColor,
  className,
}) => (
  <Wrapper bgColor={bgColor} className={className} borderColor={borderColor}>
    <TagText tag="span" typo="label" color={color}>
      {label}
    </TagText>
  </Wrapper>
);

interface IWrapper {
  bgColor: string;
  borderColor: string;
}

const Wrapper = styled.div<IWrapper>`
  display: inline-block;
  background-color: ${({bgColor}) => bgColor};
  border: 1px solid ${({borderColor}) => borderColor};
  padding: 2px 13px 4px 13px;
  border-radius: 8px;
`;

const TagText = styled(Text)`
  font-family: 'Gordita', sans-serif;
  text-transform: uppercase;
`;
