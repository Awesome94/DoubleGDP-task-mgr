import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: None;
  stroke: white;
  stroke-width: 3px;
`

const GreyIcon = styled.svg`
  fill: None;
  stroke: grey;
  stroke-width: 3px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.checked ? 'grey' : 'white')};
  border-radius: 40px;
  transition: all 150ms;
  border: solid;
  border-color: grey;
  display: ${(props) => (props.checked ? 'None' : 'flex')};
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
    padding: 5px;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'invisible')};
  }

  ${GreyIcon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'invisible')};
  }
`

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
