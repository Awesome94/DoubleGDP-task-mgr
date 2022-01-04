import React from 'react'
import styled from 'styled-components'
import { useTasks } from '../../../../providers/TaskProvider.js'
import CheckMark from '../../../common/CheckMark'

const TaskName = styled.h1`
  display: flex;
  width: 40%;
  flex-direction: column;
  font-weight: 550;
  color: grey;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    padding-top: 10px;
    width: 200px;
    margin-bottom: 0.5rem;
  }
`
const TaskDescription = styled.h6`
  margin-top: -0.5px;
  font-weight: 200;
  font-size: 20px;
  color: grey;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
    margin-top: -0.5px;
  }
`

const TimeCompleted = styled.h3`
  display: flex;
  width: 40%;
  color: grey;
  font-weight: 350;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    margin-bottom: -50px;
    display: flex;
    align-items: center;
  }
`

const TaskItems = styled.div`
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
  }
`

const TaskAvatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: start;
  align-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-left: 100px;
  margin-bottom: 35px;

  @media only screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`

const AvatarContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin-left: ${(props) => (props.checked ? '' : '-38px')};

  @media only screen and (max-width: 768px) {
    width: 200px;
    align-items: center;
    margin-right: 10px;
    justify-content: space-between;

    margin-bottom: -20px;
    margin-left: ${(props) => (props.checked ? '-40px' : '-42px')};
  }
`

const TitleAndDescription = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  font-weight: 550;
  color: grey;

  @media only screen and (max-width: 768px) {
    width: 150px;
    justify-content: space-between;
  }
`

const CheckBoxContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    width: 10px;
    height: 60px;
    padding: 5px;
    margin-right: -20px;
  }
`

const TasksList = () => {
  const { setTaskStatus, tasks } = useTasks()

  const handleCheckboxChange = (id, status) => {
    setTaskStatus(id, !status)
  }

  return (
    <TaskItems>
      {tasks.map((task) => (
        <TaskItem>
          <CheckBoxContainer>
            <label>
              <CheckMark
                checked={task.complete}
                onChange={() => handleCheckboxChange(task.id, task.complete)}
              />
            </label>
          </CheckBoxContainer>
          <AvatarContainer checked={task.complete}>
            <TaskAvatar src={task.avatarUrl} />
          </AvatarContainer>
          <TitleAndDescription>
            <TaskName>{task.task}</TaskName>
            <TaskDescription>{task.description}</TaskDescription>
          </TitleAndDescription>
          <TimeCompleted>{!!task.complete && task.timeStamp}</TimeCompleted>
        </TaskItem>
      ))}
    </TaskItems>
  )
}

export default TasksList
