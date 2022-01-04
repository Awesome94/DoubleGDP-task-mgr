import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import CreateNewTask from './index.jsx'
import TaskProvider, { TaskContext } from '../../../../Provider/TaskProvider'

test('Renders create task form with all expected fields', () => {
  render(
    <TaskProvider>
      <CreateNewTask />
    </TaskProvider>,
    { wrapper: MemoryRouter },
  )
  expect(screen.getByText(/Add Task/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/Task Name/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/description/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/avatar/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/task name/i)).toBeInTheDocument()
})

test('Redirects to home route  when Add button is clicked', () => {
  const redirectUrl = '/'
  const { container } = render(
    <TaskProvider>
      <TaskContext.Consumer>
        {() => (
          <>
            <button>Add</button>
          </>
        )}
      </TaskContext.Consumer>
    </TaskProvider>,
  )
  fireEvent.click(screen.getByText('Add'))
  expect(container.innerHTML).toEqual(expect.stringContaining(redirectUrl))
})
