import styled from 'styled-components'

export const Statistic = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    margin-left: 20px;
    width: 100%;
  }
`
export const StatisticValue = styled.div`
  display: flex;
  color: grey;
`

export const StatisticLabel = styled.p`
  display: flex;
  font-size: 20px;
  font-weight: 550;
  margin-left: 50px;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.textColor};
`

export const Title = styled.h1`
  display: flex;
  color: grey;
  width: 45px;

  @media only screen and (max-width: 768px) {
    color: grey;
    font-size: 30px;
    display: flex;
    width: 40px;

    align-left: -200px;
  }
`
