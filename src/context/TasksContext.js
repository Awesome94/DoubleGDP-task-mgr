import {createContext} from 'React';


export const TaskContext = createContext({
  tasks: [],
  addContext: () => {},
})
