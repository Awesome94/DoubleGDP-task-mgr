import styled from 'styled-components'

export const StyledButton = styled.button`
  background: ${(props) => (props.primary ? '#FC8801' : 'white')};
  color: ${(props) => (props.primary ? 'white' : '#FC8801')};
  cursor: pointer;
  font-size: 15px;
  font-weight: 550;
  margin: 1em;
  padding: 4px;
  width: 150px;
  height: 50px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
