import styled from 'styled-components'

export const TaskName = styled.h1`
  font-weight: 550;
  color: grey;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    padding-top: 10px;
    width: 150px;
    margin-bottom: -0.5rem;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 25px;
  }
`

export const TaskDescription = styled.h6`
  margin-top: -20px;
  font-weight: 200;
  font-size: 20px;
  color: grey;
  max-height: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
    margin-top: -10px;
    height: 50px;
    width: 125px;
  }
`

export const TimeCompleted = styled.h3`
  display: flex;
  width: 40%;
  color: grey;
  font-weight: 350;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    margin-bottom: -50px;
    display: flex;
    align-items: center;
    margin-top: auto;
  }
`

export const TaskItems = styled.div`
  display: flex;
  width: 80%;
  border: 22px;
  margin: auto;
  max-height: 350px;
  min-height: 150px;
  overflow-y: scroll;
  flex-direction: column;
  scroll-behavior: smooth;
  border-bottom-style: solid;
  border-bottom-width: 1.5px;
  justify-content: space-between;
  border-bottom-color: lightgrey;

  @media only screen and (max-width: 768px) {
    margin: 2px;
    width: 100%;
    gap: 25px;
    margin-right: -200px;
  }
`

export const TaskAvatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: start;
  align-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-bottom: 35px;

  @media only screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`

export const AvatarContainer = styled.div`
  display: flex;
  width: 100px;
  height: 80px;
  justify-content: center;
  margin-left: ${(props) => (props.checked ? '' : '-38px')};

  @media only screen and (max-width: 768px) {
    width: 100px;
    align-items: self-start;
    margin-left: 180px;
    overflow: padding;
    justify-content: flex-end;
    padding: 10px;
    margin-left: ${(props) => (props.checked ? '10px' : '10px')};
  }
`

export const TitleAndDescription = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  font-weight: 550;
  color: grey;
  gap: 5px;

  @media only screen and (max-width: 768px) {
    width: 150px;
    gap: 20px;
    justify-content: space-between;
  }
`

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 10px;
    height: 60px;
    cursor: pointer;
    margin-left: 15px;
  }
`
