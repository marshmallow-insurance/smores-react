import styled from 'styled-components';

import {flex, FlexProps} from '../utils/flex';
import {measure, MeasureProps} from '../utils/measure';
import {space, SpaceProps} from '../utils/space';

interface IBox extends SpaceProps, FlexProps, MeasureProps {}

export const Box = styled.div<IBox>`
  ${space};
  ${flex};
  ${measure};
`;
