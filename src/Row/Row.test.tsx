import { screen, render } from '../testUtils'
import { Row } from './Row'

describe('Row', () => {
  describe('headings', () => {
    it('renders heading', () => {
      const { baseElement } = render(<Row heading="A lovely heading" />)

      expect(baseElement).toMatchSnapshot()

      expect(screen.getByText('A lovely heading')).toBeTruthy()
    })

    it('renders bold heading', () => {
      const { baseElement } = render(
        <Row heading="A lovely heading" boldHeading />,
      )

      expect(baseElement).toMatchSnapshot()

      expect(screen.getByText('A lovely heading')).toBeTruthy()
    })

    it('renders subHeading', () => {
      const { baseElement } = render(
        <Row heading="A lovely heading" subHeading="a nice sub heading" />,
      )

      expect(baseElement).toMatchSnapshot()

      expect(screen.getByText('a nice sub heading')).toBeTruthy()
    })
  })

  describe('type', () => {
    it('renders first type', () => {
      const { baseElement } = render(
        <Row heading="A lovely heading" type="first" />,
      )

      expect(baseElement).toMatchSnapshot()
    })

    it('renders curved type', () => {
      const { baseElement } = render(
        <Row heading="A lovely heading" type="curved" />,
      )

      expect(baseElement).toMatchSnapshot()
    })

    it('renders curved last', () => {
      const { baseElement } = render(
        <Row heading="A lovely heading" type="last" />,
      )

      expect(baseElement).toMatchSnapshot()
    })
  })

  describe('icons', () => {
    it('renders iconLeft', () => {
      const { baseElement } = render(
        <Row heading="A lovely heading" iconLeft="info" />,
      )

      expect(baseElement).toMatchSnapshot()
    })
    it('renders iconRight', () => {
      const { baseElement } = render(
        <Row heading="A lovely heading" iconRight="info" />,
      )

      expect(baseElement).toMatchSnapshot()
    })
  })

  describe('borders', () => {
    it('renders borderTop', () => {
      const { baseElement } = render(
        <Row heading="A lovely heading" borderTop borderBottom={false} />,
      )

      expect(baseElement).toMatchSnapshot()
    })
    it('renders borderBottom', () => {
      const { baseElement } = render(
        <Row heading="A lovely heading" borderTop={false} borderBottom />,
      )

      expect(baseElement).toMatchSnapshot()
    })
  })
})
