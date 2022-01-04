import styled from 'styled-components'

export const PageHeader = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  margin: auto;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    display: flex;
    width: 90%;
  }
`

export const Title = styled.h1`
  width: 50%;
  display: flex;
  font-size: 40px;
  color: grey;

  @media only screen and (max-width: 768px) {
    color: grey;
    font-size: 30px;
    display: flex;
  }
`

export const HeaderIcon = styled.div`
  display: flex;
  width: 25%;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 40px;
  }
`
