import {FC} from 'react';
import styled from 'styled-components';

import {flex, FlexProps} from '../utils/flex';
import {measure, MeasureProps} from '../utils/measure';
import {space, SpaceProps} from '../utils/space';

interface IBox extends SpaceProps, FlexProps, MeasureProps {}

export const Box: FC = styled.div<IBox>`
  ${space};
  ${flex};
  ${measure};
`;
