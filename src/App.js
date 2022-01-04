import './App.css'
import AddTask from './components/tasks/AddTask'
import TaskListPage from './components/tasks/TasksListPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header" />
      </div>
      <Routes>
        <Route index element={<TaskListPage />} />
        <Route path="add" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
