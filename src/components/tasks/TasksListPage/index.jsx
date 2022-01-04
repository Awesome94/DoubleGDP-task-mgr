import React from 'react'

import TasksList from '../components/TasksList'
import TasksStatistics from '../components/TasksStatistics'
import TaskListPageHeader from '../components/TaskListPageHeader'

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
