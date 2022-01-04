import React from 'react'

import TaskListPageHeader from './TaskListPageHeader'
import TasksList from './TasksList'
import TasksStatistics from './TasksStatistics'

const TaskListPage = () => {
  return (
    <>
      <TaskListPageHeader />
      <TasksList />
      <TasksStatistics />
    </>
  )
}

export default TaskListPage
