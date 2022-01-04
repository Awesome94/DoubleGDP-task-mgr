import React from 'react'
import styled from 'styled-components'
import { useTasks } from '../../../../providers/TaskProvider'

const Statistic = styled.div`
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
const StatisticValue = styled.div`
  display: flex;
  color: grey;
`

const StatisticLabel = styled.p`
  display: flex;
  font-size: 20px;
  font-weight: 550;
  margin-left: 50px;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.textColor};
`

const Title = styled.h1`
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
