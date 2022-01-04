import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import TaskListPage from './index.jsx'
import TaskProvider from '../../../Provider/TaskProvider'

test('it renders all Icons in header section', () => {
  render(
    <TaskProvider>
      <TaskListPage />
    </TaskProvider>,
    { wrapper: MemoryRouter },
  )
  expect(screen.queryByDisplayValue('plusIcon.svg')).toBeDefined()
  expect(screen.queryByDisplayValue('darkmodeiconIcon.svg')).toBeDefined()
})

test('it renders all Titles in header section', () => {
  render(
    <TaskProvider>
      <TaskListPage />
    </TaskProvider>,
    { wrapper: MemoryRouter },
  )
  expect(screen.getAllByText('Tasks')).toBeDefined()
})

test('it renders all Titles in Stats section', () => {
  render(
    <TaskProvider>
      <TaskListPage />
    </TaskProvider>,
    { wrapper: MemoryRouter },
  )
  expect(screen.getAllByText('Tasks')).toBeDefined()
  expect(screen.getByText(/Total Tasks Closed/i)).toBeDefined()
  expect(screen.getByText(/Total Tasks Open/i)).toBeDefined()
  expect(screen.getByText(/Completion Rate/i)).toBeDefined()
})
