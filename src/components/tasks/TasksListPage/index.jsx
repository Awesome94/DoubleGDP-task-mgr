import React from 'react'

import TaskListPageHeader from '../components/TaskListPageHeader'
import TasksList from '../components/TasksList'
import TasksStatistics from '../components/TasksStatistics'

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
