import { theme } from '../theme'
import { Typo } from './Text'

export const fontStyleMapping: Record<Typo, string> = {
  'hero-alternate': `
    font-size: 40px;
    font-family: 'MarshmallowYouth';
    font-weight: ${theme.font.weight.bold};
    line-height: 44px;

    @media (min-width: 768px) {
      font-size: 56px;
      line-height: 64px;
    }
  `,
  hero: `
    font-size: 32px;
    font-weight: ${theme.font.weight.medium};
    line-height: 40px;

    @media (min-width: 768px) {
      font-size: 40px;
      line-height: 44px;
    }
  `,
  'heading-large': `
    font-size: 28px;
    font-weight: ${theme.font.weight.medium};
    line-height: 32px;

    @media (min-width: 768px) {
      font-size: 32px;
      line-height: 40px;
    }
  `,
  'heading-medium': `
    font-size: 24px;
    font-weight: ${theme.font.weight.medium};
    line-height: 32px;
  `,
  'heading-small': `
    font-size: 20px;
    font-weight: ${theme.font.weight.medium};
    line-height: 28px;
  `,
  'headline-regular': `
    font-size: 16px;
    font-weight: ${theme.font.weight.medium};
    line-height: 20px;
  `,
  'headline-small': `
    font-size: 14px;
    font-weight: ${theme.font.weight.medium};
    line-height: 20px;
  `,
  'body-standfirst': `
    font-size: 18px;
    font-weight: ${theme.font.weight.normal};
    line-height: 24px;
  `,
  'body-regular': `
    font-size: 16px;
    font-weight: ${theme.font.weight.normal};
    line-height: 20px;
  `,
  'body-small': `
    font-size: 14px;
    font-weight: ${theme.font.weight.normal};
    line-height: 20px;
  `,
  caption: `
    font-size: 12px;
    font-weight: ${theme.font.weight.normal};
    line-height: 16px;
  `,
  label: `
    font-size: 10px;
    line-height: 12px;
    font-weight: ${theme.font.weight.medium};
    text-transform: uppercase;
  `,
}
