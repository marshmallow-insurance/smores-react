import { MarginProps } from '../../utils/space'
import { CommonFieldProps } from '../commonFieldTypes'
import { InternalField } from '../components/InternalField'

export type FieldsetProps = CommonFieldProps & MarginProps

export const Fieldset = ({
  children,
  renderAsTitle = true,
  id,
  ...fieldProps
}: FieldsetProps) => {
  return (
    <InternalField
      htmlFor={id}
      fieldType="fieldset"
      renderAsTitle={renderAsTitle}
      {...fieldProps}
    >
      {children}
    </InternalField>
  )
}
