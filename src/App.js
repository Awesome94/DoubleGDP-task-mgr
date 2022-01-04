import './App.css'
import CreateNewTask from './components/tasks/components/CreateNewTask'
import TaskListPage from './components/tasks/TasksListPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header" />
      </div>
      <Routes>
        <Route index element={<TaskListPage />} />
        <Route path="add" element={<CreateNewTask />} />
      </Routes>
    </Router>
  )
}

export default App
