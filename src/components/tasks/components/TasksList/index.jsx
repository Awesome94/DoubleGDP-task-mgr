import React from 'react'

import { useTasks } from '../../../../providers/TaskProvider.js'
import CheckMark from '../../../common/CheckMark'
import {
  TaskName,
  TaskItem,
  TaskItems,
  TaskAvatar,
  TimeCompleted,
  TaskDescription,
  AvatarContainer,
  CheckBoxContainer,
  TitleAndDescription,
} from './styles'

const TasksList = () => {
  const { setTaskStatus, tasks } = useTasks()

  const handleCheckboxChange = (id, status) => {
    setTaskStatus(id, !status)
  }

  return (
    <TaskItems>
      {tasks.map((task) => (
        <TaskItem key={task.id}>
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
