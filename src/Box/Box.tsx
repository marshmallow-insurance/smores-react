import styled from 'styled-components';

import {flex, FlexProps} from '../../utils/flex';
import {measure, MeasureProps} from '../../utils/measure';
import {space, SpaceProps} from '../../utils/space';

interface IBox extends SpaceProps, FlexProps, MeasureProps {}

const Box = styled.div<IBox>`
  ${space};
  ${flex};
  ${measure};
`;

export default Box;
