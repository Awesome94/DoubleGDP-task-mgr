import React, { useState } from 'react'
import Button from '../../common/Button'
import Input from '../../common/TextInput'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useTasks } from '../../../providers/TaskProvider'

const AddTaskForm = styled.form`
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

const AddTask = () => {
  const navigate = useNavigate()
  const { addTask } = useTasks()
  const [taskData, setTaskData] = useState({
    taskName: '',
    description: '',
    avatarUrl: '',
    timeStamp: '',
  })

  const handleSubmit = () => {
    const { taskName, description, avatarUrl } = taskData
    addTask(taskName, description, avatarUrl)
    return navigate('/')
  }

  const onChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    setTaskData({ ...taskData, [name]: value })
  }

  return (
    <AddTaskForm onSubmit={handleSubmit}>
      <Title>Add Task</Title>
      <Input
        placeholder="Task Name"
        name="taskName"
        id="taskName"
        value={taskData.taskName}
        onChange={onChange}
      />
      <Input
        placeholder="Task Description"
        name="description"
        id="description"
        value={taskData.description}
        onChange={onChange}
      />
      <Input
        placeholder="Avatar URL"
        name="avatarUrl"
        id="avatarUrl"
        value={taskData.avatarUrl}
        onChange={onChange}
      />
      <Button text="ADD" />
    </AddTaskForm>
  )
}

export default AddTask
