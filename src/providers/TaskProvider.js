import React, { createContext, useState, useContext } from 'react'
import { v4 } from 'uuid'

const TaskContext = createContext()

export const useTasks = () => useContext(TaskContext)

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  const addTask = (task, description, avatarUrl) => {
    fetch('https://picsum.photos/200')
      .then((res) =>
        setTasks([
          ...tasks,
          {
            id: v4(),
            task,
            avatarUrl: avatarUrl || res.url,
            description,
            timeStamp: '',
            complete: false,
          },
        ]),
      )
      .catch(() =>
        setTasks([
          ...tasks,
          {
            id: v4(),
            task,
            avatarUrl: avatarUrl,
            description,
            timeStamp: '',
            complete: false,
          },
        ]),
      )
  }

  const setTaskStatus = (id, status) => {
    const time = new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })

    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, complete: status, timeStamp: time } : t,
      ),
    )
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, setTaskStatus }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider
