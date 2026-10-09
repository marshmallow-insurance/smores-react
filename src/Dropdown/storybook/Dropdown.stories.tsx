import { ReactElement, useEffect, useRef, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { useArgs } from 'storybook/preview-api'
import styled from 'styled-components'
import { SupportMessage } from '../../SupportMessage'
import { TextInput } from '../../TextInput'
import { Dropdown, DropdownProps } from '../Dropdown'

const days = [
  { label: 'Monday', value: 'MONDAY' },
  { label: 'Tuesday', value: 'TUESDAY' },
  { label: 'Wednesday', value: 'WEDNESDAY' },
  { label: 'Thursday', value: 'THURSDAY' },
  { label: 'Friday', value: 'FRIDAY' },
  { label: 'Saturday', value: 'SATURDAY' },
  { label: 'Sunday', value: 'SUNDAY' },
]

const meta: Meta<DropdownProps> = {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    list: days,
    label: 'Days of the Week',
    placeholder: 'Select a day',
  },
}

export default meta
type Story = StoryObj<DropdownProps>

const InteractiveTemplate = (args: DropdownProps) => {
  const [{ value }, updateArgs] = useArgs<DropdownProps>()

  const handleChange = (e: string) => {
    updateArgs({ value: e })
    args?.onSelect?.(e)
  }

  return <Dropdown {...args} value={value} onSelect={handleChange} />
}

export const Default: Story = {
  args: {
    id: 'days-default',
  },
  render: InteractiveTemplate,
}

export const DefaultFallback: Story = {
  args: {
    id: 'days-fallback',

    fallbackStyle: true,
  },
  render: InteractiveTemplate,
}

export const Disabled: Story = {
  args: {
    id: 'days-disabled',

    disabled: true,
  },
  render: InteractiveTemplate,
}
export const DisabledFallback: Story = {
  args: {
    id: 'days-disabled-fallback',

    disabled: true,
    fallbackStyle: true,
  },
  render: InteractiveTemplate,
}

export const NoPlaceholder: Story = {
  args: {
    id: 'days-no-placeholder',
    label: 'Days of the Week',
  },
  render: InteractiveTemplate,
}

export const ShowDefaultOption: Story = {
  args: {
    id: 'days-show-default-option',
    showDefaultOption: true,
  },
  render: InteractiveTemplate,
}

export const ShowDefaultOptionWithCustomLabel: Story = {
  args: {
    id: 'days-show-default-custom-label',
    showDefaultOption: true,
    customDefaultOption: 'Select a specific day',
  },
  render: InteractiveTemplate,
}

export const LeadingIcon: Story = {
  args: {
    id: 'days-leading-icon',
    frontIcon: 'iphone',
    fallbackStyle: true,
  },
  render: InteractiveTemplate,
}

export const Required: Story = {
  args: {
    id: 'days-required',
    required: true,
  },
  render: InteractiveTemplate,
}

export const AssistiveText: Story = {
  args: {
    id: 'days-assistive-text',
    assistiveText: 'Please select a day from the dropdown',
  },
  render: InteractiveTemplate,
}

export const Completed: Story = {
  args: {
    id: 'days-completed',
    completed: true,
  },
  render: InteractiveTemplate,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
}

export const AsTitle: Story = {
  args: {
    id: 'days-as-title',
    renderAsTitle: true,
  },
  render: InteractiveTemplate,
}

export const Error: Story = {
  args: {
    id: 'days-error',
    error: true,
    errorMsg: 'This field is required',
  },
  render: InteractiveTemplate,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
}

export const FallbackError: Story = {
  args: {
    id: 'days-fallback-error',
    fallbackStyle: true,
    error: true,
    errorMsg: 'This field is required',
  },
  render: InteractiveTemplate,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
}

export const ReactElementError: Story = {
  args: {
    id: 'days-react-element-error',
    error: true,
    errorMsg: (
      <SupportMessage type="warning" description="Error selecting a day!" />
    ),
  },
  render: InteractiveTemplate,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
}

export const NarrowCountryCode: Story = {
  args: {
    id: 'country-code',
    label: undefined,
    placeholder: undefined,
    'aria-label': 'Country code',
    value: '+44',
    list: [
      { label: '(+44)', value: '+44' },
      { label: '(+353)', value: '+353' },
    ],
  },
  decorators: [
    (Story: () => ReactElement) => (
      <div style={{ width: 95 }}>
        <Story />
      </div>
    ),
  ],
  render: InteractiveTemplate,
}

const countryCodes = [
  { label: '(+44) United Kingdom', value: 'GB' },
  { label: '(+1) United States', value: 'US' },
  { label: '(+353) Ireland', value: 'IE' },
  { label: '(+33) France', value: 'FR' },
  { label: '(+49) Germany', value: 'DE' },
  { label: '(+34) Spain', value: 'ES' },
  { label: '(+39) Italy', value: 'IT' },
  { label: '(+31) Netherlands', value: 'NL' },
  { label: '(+351) Portugal', value: 'PT' },
  { label: '(+48) Poland', value: 'PL' },
  { label: '(+40) Romania', value: 'RO' },
  { label: '(+61) Australia', value: 'AU' },
  { label: '(+64) New Zealand', value: 'NZ' },
  { label: '(+91) India', value: 'IN' },
  { label: '(+92) Pakistan', value: 'PK' },
  { label: '(+234) Nigeria', value: 'NG' },
  { label: '(+27) South Africa', value: 'ZA' },
  { label: '(+971) United Arab Emirates', value: 'AE' },
  { label: '(+1868) Trinidad and Tobago', value: 'TT' },
  { label: '(+44) Isle of Man', value: 'IM' },
]

/**
 * How consumers (e.g. uk-auto-signup-www) wrap a Dropdown to make a narrow
 * country-code select next to a phone number field.
 */
const ConsumerPhoneCode = styled.div<{ $width: number }>`
  min-width: ${({ $width }) => $width}px;
  margin-right: 8px;

  select {
    max-width: ${({ $width }) => $width}px;
    padding-right: 42px;
  }
`

/**
 * The create-account page joins the code and the number into one bordered
 * group: the group draws the border, the code has a divider on its right, and
 * the select and the input lose their own borders.
 */
const JoinedPhoneGroup = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.color.border.subtle};
  border-radius: 12px;

  &:hover {
    border-color: ${({ theme }) => theme.color.border.base};
  }
`

const JoinedPhoneCode = styled.div<{ $width: number }>`
  border-right: 1px solid ${({ theme }) => theme.color.border.subtle};
  min-width: ${({ $width }) => $width}px;

  select {
    border-radius: 12px 0 0 12px;
    max-width: ${({ $width }) => $width}px;
    padding-right: 42px;
  }

  div {
    height: auto;
  }

  div > * {
    border: none;
  }
`

const JoinedPhoneNumber = styled.div`
  flex: 1;

  input {
    border: none;
    border-radius: 0 12px 12px 0;
  }
`

const Measured = styled.p`
  margin: 4px 0 0;
  font: 12px/16px monospace;
  color: ${({ theme }) => theme.color.text.subtle};
`

const measureTextWidth = (text: string, select: HTMLSelectElement) => {
  const style = getComputedStyle(select)
  const context = document.createElement('canvas').getContext('2d')!
  context.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`
  return context.measureText(text).width
}

/** Width available for text in the closed select, and what its code needs. */
const measureSelect = (select: HTMLSelectElement) => {
  const style = getComputedStyle(select)
  const room =
    select.clientWidth -
    parseFloat(style.paddingLeft) -
    parseFloat(style.paddingRight)
  const code = (select.selectedOptions[0]?.text ?? '').split(' ')[0]
  return {
    room,
    code,
    needs: measureTextWidth(code, select),
    textOverflow: style.textOverflow,
  }
}

type PhoneCountryCodeArgs = {
  width: number
  value: string
}

const PhoneRow = ({
  title,
  width,
  initialValue,
  joined,
  plain,
}: {
  title: string
  width: number
  initialValue: string
  joined?: boolean
  plain?: boolean
}) => {
  const [value, setValue] = useState(initialValue)
  const [measured, setMeasured] = useState<ReturnType<
    typeof measureSelect
  > | null>(null)
  const rowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const measure = () => {
      const select = rowRef.current?.querySelector('select')
      if (select) setMeasured(measureSelect(select))
    }
    measure()
    // Circular may load after the first render.
    void document.fonts.ready.then(measure)
  }, [value, width])

  const dropdown = (
    <Dropdown
      id={`phone-code-${title}`}
      aria-label="Country code"
      list={countryCodes}
      value={value}
      onSelect={setValue}
    />
  )

  const phoneNumber = (
    <TextInput
      id={`phone-number-${title}`}
      aria-label="Phone number"
      type="tel"
      placeholder="Enter number"
      value=""
      onChange={() => undefined}
    />
  )

  return (
    <div data-testid={title}>
      <p style={{ margin: '16px 0 8px', fontWeight: 500 }}>{title}</p>
      <div ref={rowRef} style={{ display: 'flex', alignItems: 'flex-start' }}>
        {joined ? (
          <JoinedPhoneGroup>
            <JoinedPhoneCode $width={width}>{dropdown}</JoinedPhoneCode>
            <JoinedPhoneNumber>{phoneNumber}</JoinedPhoneNumber>
          </JoinedPhoneGroup>
        ) : (
          <>
            {plain ? (
              <div style={{ width }}>{dropdown}</div>
            ) : (
              <ConsumerPhoneCode $width={width}>{dropdown}</ConsumerPhoneCode>
            )}
            <div style={{ flex: 1 }}>{phoneNumber}</div>
          </>
        )}
      </div>
      {measured && (
        <Measured>
          text room {measured.room}px · {measured.code} needs{' '}
          {Math.round(measured.needs)}px →{' '}
          {measured.needs <= measured.room ? 'fits' : 'does not fit'} ·
          text-overflow: {measured.textOverflow}
        </Measured>
      )}
    </div>
  )
}

/**
 * A Dropdown with real country-code labels next to a phone number field, as
 * in uk-auto-signup-www. Consumers clamp the select to `width` with
 * `max-width` and `padding-right: 42px`, so the closed select only has room
 * for the code: the rest of the label must be clipped, not replaced by "…".
 */
export const PhoneCountryCode: StoryObj<PhoneCountryCodeArgs> = {
  args: { width: 96, value: 'GB' },
  argTypes: {
    width: { control: { type: 'number', min: 64, max: 320, step: 1 } },
    value: {
      control: 'select',
      options: countryCodes.map(({ value }) => value),
    },
  },
  render: ({ width, value }) => (
    <div style={{ maxWidth: 480 }}>
      <PhoneRow
        key={`default-${value}`}
        title="Default width (no consumer overrides)"
        width={288}
        initialValue={value}
        plain
      />
      <PhoneRow title="Consumer overrides" width={width} initialValue={value} />
      <PhoneRow
        key={`joined-${value}`}
        title="Create-account (joined)"
        width={width}
        initialValue={value}
        joined
      />
      <PhoneRow title="Longest codes: (+353)" width={width} initialValue="IE" />
      <PhoneRow
        title="Longest codes: (+1868)"
        width={width}
        initialValue="TT"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const select = canvasElement
      .querySelector('[data-testid="Consumer overrides"]')
      ?.querySelector('select')
    await expect(select).toBeTruthy()
    // The code must not be replaced by an ellipsis in a narrow select.
    await expect(getComputedStyle(select!).textOverflow).not.toBe('ellipsis')
    const { room, needs } = measureSelect(select!)
    await expect(needs).toBeLessThanOrEqual(room)
  },
}
