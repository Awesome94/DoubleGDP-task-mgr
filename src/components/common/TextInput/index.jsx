import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  display: flex;
  padding: 0.5em;
  margin: 1.5rem;
  color: grey;
  height: 2rem;
  width: 80%;
  border: solid;
  border-width: 2px;
  font-size: 15px;
`

const Input = ({ placeholder, onChange, name, ...props }) => {
  return (
    <StyledInput
      name={name}
      autoComplete="off"
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input
