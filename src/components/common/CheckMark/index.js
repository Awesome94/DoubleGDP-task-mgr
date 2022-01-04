import React from 'react'
import {
  CheckboxContainer,
  Icon,
  GreyIcon,
  HiddenCheckbox,
  StyledCheckbox,
} from './styles.js'

const CheckMark = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      {checked ? (
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      ) : (
        <GreyIcon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </GreyIcon>
      )}
    </StyledCheckbox>
  </CheckboxContainer>
)

export default CheckMark
