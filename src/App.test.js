import { render, screen } from '@testing-library/react'
import App from './App'
import TaskProvider from './Provider/TaskProvider'

test('renders Tasks Tab and Menus', () => {
  render(
    <TaskProvider>
      <App />
    </TaskProvider>,
  )
  const linkElement = screen.getByText(/Total Tasks Open/i)
  const closedTasksElement = screen.getByText(/Total Tasks Closed/i)
  const TasksCompletedElement = screen.getByText(/Rate/i)
  expect(linkElement).toBeInTheDocument()
  expect(closedTasksElement).toBeInTheDocument()
  expect(TasksCompletedElement).toBeInTheDocument()
})

test('renders does not render Create new task page on home page', () => {
  render(
    <TaskProvider>
      <App />
    </TaskProvider>,
  )
  expect(screen.queryByText(/Add/i)).not.toBeUndefined()
  expect(screen.queryByText(/Add Task/i)).not.toBeInTheDocument()
  expect(screen.queryByPlaceholderText(/Task Name/i)).not.toBeInTheDocument()
  expect(
    screen.queryByPlaceholderText(/task description/i),
  ).not.toBeInTheDocument()
  expect(screen.queryByPlaceholderText(/avatar/i)).not.toBeInTheDocument()
})
