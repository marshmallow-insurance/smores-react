import { faMinus, faPlus } from '@awesome.me/kit-46ca99185c/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  forwardRef,
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
} from 'react'
import styled, { keyframes } from 'styled-components'
import { margin, MarginProps, TransientMarginProps } from '../../utils/space'

export interface NumberStepperProps extends MarginProps {
  /** Current value */
  value: number
  /** Minimum allowed value */
  minValue: number
  /** Maximum allowed value */
  maxValue: number
  /** Whether the stepper is disabled */
  disabled?: boolean
  /** Callback when value changes */
  setValue: (newValue: number) => void
  /** Test ID for the component */
  testId?: string
  /** Accessible label for the input field */
  label?: string
  /** ID for the input field (required if label is used) */
  id?: string
}

/**
 * A control for editing a numeric value with buttons to decrease or increase the value.
 *
 * Features animated value transitions, boundary overshoot animations, editable text input,
 * arrow key support, and full accessibility.
 */
export const NumberStepper = forwardRef<HTMLInputElement, NumberStepperProps>(
  function NumberStepper(
    {
      value,
      minValue,
      maxValue,
      disabled = false,
      setValue,
      testId,
      label,
      id,
      m,
      mx,
      my,
      ml,
      mr,
      mt,
      mb,
    },
    ref,
  ) {
    const inputRef = useRef<HTMLInputElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [displayValue, setDisplayValue] = useState(String(value))
    const [isEditing, setIsEditing] = useState(false)

    // Forward ref to input
    useImperativeHandle(ref, () => inputRef.current!, [])

    // Sync display value when prop value changes (e.g., from button clicks)
    // But don't interrupt user while they're typing
    useEffect(() => {
      if (!isEditing) {
        setDisplayValue(String(value))
      }
    }, [value, isEditing])

    // Warn if label and id are mismatched (accessibility issue)
    useEffect(() => {
      if ((label && !id) || (!label && id)) {
        console.warn(
          'NumberStepper: label and id should be provided together for proper accessibility. ' +
            'Either provide both or neither.',
        )
      }
    }, [label, id])

    const triggerAnimation = (animationClass: string) => {
      if (!containerRef.current) return

      const el = containerRef.current

      // Remove all animation classes
      el.classList.remove('stepper--increment')
      el.classList.remove('stepper--decrement')
      el.classList.remove('stepper--increment-boundary')
      el.classList.remove('stepper--decrement-boundary')

      // Trigger a reflow to ensure the animation restarts
      void el.offsetWidth

      // Add the new animation class
      el.classList.add(`stepper--${animationClass}`)
    }

    const handleIncrement = () => {
      if (disabled || value >= maxValue) return
      const newValue = value + 1

      // Determine animation type
      const animationClass =
        newValue >= maxValue ? 'increment-boundary' : 'increment'
      triggerAnimation(animationClass)

      // Stop editing mode so displayValue syncs
      setIsEditing(false)
      setValue(newValue)
    }

    const handleDecrement = () => {
      if (disabled || value <= minValue) return
      const newValue = value - 1

      // Determine animation type
      const animationClass =
        newValue <= minValue ? 'decrement-boundary' : 'decrement'
      triggerAnimation(animationClass)

      // Stop editing mode so displayValue syncs
      setIsEditing(false)
      setValue(newValue)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value

      // Only allow digits (prevent e, +, -, ., etc.)
      if (newValue !== '' && !/^\d+$/.test(newValue)) {
        return
      }

      setIsEditing(true)

      // Update display value to allow clearing the field
      setDisplayValue(newValue)

      // Allow empty input temporarily (user is clearing to retype)
      if (newValue === '') {
        return
      }

      const numValue = parseInt(newValue, 10)

      // Validate and update parent state if valid
      if (!isNaN(numValue)) {
        const clampedValue = Math.max(minValue, Math.min(maxValue, numValue))
        setValue(clampedValue)
      }
    }

    const handleInputFocus = () => {
      setIsEditing(true)
    }

    const handleInputBlur = () => {
      setIsEditing(false)

      // On blur, ensure we have a valid normalized value
      if (displayValue === '' || isNaN(parseInt(displayValue, 10))) {
        setDisplayValue(String(value))
      } else {
        // Normalize and clamp the value
        const numValue = parseInt(displayValue, 10)
        const clampedValue = Math.max(minValue, Math.min(maxValue, numValue))

        // Always normalize to remove leading zeros, etc.
        setValue(clampedValue)
        setDisplayValue(String(clampedValue))
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        handleIncrement()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        handleDecrement()
      }
    }

    const isDecrementDisabled = disabled || value <= minValue
    const isIncrementDisabled = disabled || value >= maxValue

    return (
      <StepperContainer
        ref={containerRef}
        role="group"
        aria-label="Number stepper"
        data-testid={testId}
        $m={m}
        $mx={mx}
        $my={my}
        $ml={ml}
        $mr={mr}
        $mt={mt}
        $mb={mb}
      >
        {label && id && (
          <VisuallyHiddenLabel htmlFor={id}>{label}</VisuallyHiddenLabel>
        )}

        <StepperButton
          type="button"
          onClick={handleDecrement}
          disabled={isDecrementDisabled}
          tabIndex={-1}
          aria-hidden="true"
          className="stepper-button--decrement"
        >
          <FontAwesomeIcon icon={faMinus} aria-hidden="true" />
        </StepperButton>

        <ValueContainer>
          <ValueDisplay $disabled={disabled}>{displayValue}</ValueDisplay>
          <NumberInput
            ref={inputRef}
            id={id}
            type="text"
            inputMode="numeric"
            role="spinbutton"
            value={displayValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            aria-label={
              label || `Number input, minimum ${minValue}, maximum ${maxValue}`
            }
            aria-valuemin={minValue}
            aria-valuemax={maxValue}
            aria-valuenow={value}
          />
        </ValueContainer>

        <StepperButton
          type="button"
          onClick={handleIncrement}
          disabled={isIncrementDisabled}
          tabIndex={-1}
          aria-hidden="true"
          className="stepper-button--increment"
        >
          <FontAwesomeIcon icon={faPlus} aria-hidden="true" />
        </StepperButton>
      </StepperContainer>
    )
  },
)

// Keyframe animations for button nudge effects
// Total duration: 83ms out + 250ms back = 333ms
// 83ms / 333ms ≈ 25% for the outward movement
const nudgeLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
`

const nudgeRight = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
`

// Value enter animations - normal (250ms)
const valueEnterFromTop = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const valueEnterFromBottom = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

// Value enter animations - at boundary with overshoot (83ms + 333ms = 416ms)
// 83ms / 416ms ≈ 20% for first phase
const valueEnterFromTopOvershoot = keyframes`
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  20% {
    transform: translateY(-10px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const valueEnterFromBottomOvershoot = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  20% {
    transform: translateY(10px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const StepperContainer = styled.div<TransientMarginProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 12px;
  border-radius: 100px;
  gap: 0;
  ${margin};
`

const ValueContainer = styled.div`
  position: relative;
  width: 44px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  cursor: text;
  border-radius: 4px;

  /* Show focus ring when input inside is focused - matches design system */
  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.color.text.base};
    outline-offset: 2px;
  }
`

const ValueDisplay = styled.div<{
  $disabled?: boolean
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'CircularXX', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.33;
  color: ${({ $disabled, theme }) =>
    $disabled ? theme.color.feedback.inactive[100] : theme.color.text.base};
  pointer-events: none;
  user-select: none;
  z-index: 1;

  /* Increment animations (value goes up, slides up visually) */
  .stepper--increment & {
    animation: ${valueEnterFromTop} 250ms cubic-bezier(0, 0, 0, 1);
  }

  /* Decrement animations (value goes down, slides down visually) */
  .stepper--decrement & {
    animation: ${valueEnterFromBottom} 250ms cubic-bezier(0, 0, 0, 1);
  }

  /* Increment at boundary with overshoot */
  .stepper--increment-boundary & {
    animation: ${valueEnterFromTopOvershoot} 416ms cubic-bezier(0.3, 0, 0, 1);
  }

  /* Decrement at boundary with overshoot */
  .stepper--decrement-boundary & {
    animation: ${valueEnterFromBottomOvershoot} 416ms cubic-bezier(0.3, 0, 0, 1);
  }
`

const StepperButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 48px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  flex-shrink: 0;
  position: relative;

  /* Visual button circle */
  &::before {
    content: '';
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 1000px;
    background: ${({ disabled, theme }) =>
      disabled ? 'transparent' : theme.color.interactive.secondary.base};
    transition: background 167ms cubic-bezier(0.3, 0, 0.7, 1);
  }

  &:hover:not(:disabled)::before {
    background: ${({ theme }) => theme.color.interactive.secondary.hover};
  }

  &:active:not(:disabled)::before {
    background: ${({ theme }) => theme.color.interactive.secondary.pressed};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.focus.onLight};
    outline-offset: 2px;
  }

  &:disabled {
    pointer-events: none;
  }

  /* Icon on top of visual circle */
  svg {
    position: relative;
    z-index: 1;
    width: 14px;
    height: 14px;
    color: ${({ disabled, theme }) =>
      disabled ? theme.color.feedback.inactive[100] : theme.color.text.base};
    transition: color 167ms cubic-bezier(0.3, 0, 0.7, 1);
  }

  /* Decrement button nudge animation at min boundary */
  .stepper--decrement-boundary &.stepper-button--decrement svg {
    animation: ${nudgeLeft} 333ms cubic-bezier(0.3, 0, 0, 1);
  }

  /* Increment button nudge animation at max boundary */
  .stepper--increment-boundary &.stepper-button--increment svg {
    animation: ${nudgeRight} 333ms cubic-bezier(0.3, 0, 0, 1);
  }
`

const NumberInput = styled.input<{ disabled?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  outline: none !important;
  padding: 0;
  text-align: center;
  font-family: 'CircularXX', sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  z-index: 2;
  color: transparent;
  caret-color: ${({ theme }) => theme.color.text.base};

  /* Explicitly remove all focus styles - parent container handles focus ring */
  &:focus,
  &:focus-visible {
    outline: none !important;
    box-shadow: none !important;
  }
`

const VisuallyHiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`
