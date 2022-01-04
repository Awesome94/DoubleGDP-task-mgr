import React from 'react'

import { useTasks } from '../../../../providers/TaskProvider'
import { StatisticValue, Title, StatisticLabel, Statistic } from './styles.js'

const TasksStatisticValue = ({ value, text, textColor }) => {
  return (
    <StatisticValue>
      <Title>{value}</Title>
      <StatisticLabel textColor={textColor}>{text}</StatisticLabel>
    </StatisticValue>
  )
}

const TasksStatistics = () => {
  const { tasks } = useTasks()

  const openTasks = tasks.filter((task) => !task.complete).length

  const closedTasks = tasks.length - openTasks

  const percentage = Math.round(
    (closedTasks / (openTasks + closedTasks)) * 100 + Number.EPSILON * 100,
  )
  const titles = [
    {
      propVal: 'tasksClosed',
      label: 'Total Tasks Closed',
      textColor: '#FC8801',
      value: closedTasks,
    },
    {
      propVal: 'tasksOpen',
      label: 'Total Tasks Open',
      textColor: '#FC8801',
      value: openTasks,
    },
    {
      propVal: 'completitionRate',
      label: 'Completion Rate',
      value: percentage + '%' || 0 + '%',
    },
  ]

  return (
    <Statistic>
      <Title>Stats</Title>
      {titles.map((title) => (
        <TasksStatisticValue
          value={title.value}
          text={title.label}
          textColor={title.textColor}
        />
      ))}
    </Statistic>
  )
}

export default TasksStatistics
