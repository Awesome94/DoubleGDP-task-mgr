import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Button from '../../../common/Button'
import Input from '../../../common/TextInput'
import { useTasks } from '../../../../Provider/TaskProvider'

const CreateTaskForm = styled.form`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: space-between;
`
const Title = styled.h1`
  display: flex;
  width: 40%;
  font-weight: 550;
  margin-left: 20px;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
const ErrorMsg = styled.div`
  display: flex;
  font-size: 12px;
  color: red;
  margin-left: 25px;
  margin-top: -20px;
`

const CreateNewTask = () => {
  const navigate = useNavigate()
  const { createTask } = useTasks()
  const [error, setError] = useState(false)

  const [taskData, setTaskData] = useState({
    taskName: '',
    description: '',
    avatarUrl: '',
    timeStamp: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const { taskName, description, avatarUrl } = taskData
    if (taskName.length === 0 && description.length === 0) {
      return navigate('/')
    }
    if (taskName.length === 0 || description.length === 0) {
      setError(true)
      return false
    }
    createTask(taskName, description, avatarUrl)
    return navigate('/')
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setTaskData({ ...taskData, [name]: value })
  }

  return (
    <CreateTaskForm onSubmit={handleSubmit}>
      <Title>Add Task</Title>
      <Input
        placeholder="Task Name"
        name="taskName"
        id="taskName"
        value={taskData.taskName}
        onChange={onChange}
      />
      {error && !taskData.taskName.length && (
        <ErrorMsg>{'Task Name can not be blank'}</ErrorMsg>
      )}
      <Input
        placeholder="Task Description"
        name="description"
        id="description"
        value={taskData.description}
        onChange={onChange}
      />
      {error && !taskData.description.length && (
        <ErrorMsg>{'Task description can not be blank'}</ErrorMsg>
      )}
      <Input
        placeholder="Avatar URL"
        name="avatarUrl"
        id="avatarUrl"
        value={taskData.avatarUrl}
        onChange={onChange}
      />
      <Button text="ADD" />
    </CreateTaskForm>
  )
}

export default CreateNewTask
