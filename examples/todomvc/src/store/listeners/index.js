import { when } from 'k-simple-state'
import { todos, footer } from './reactions'

export default [
  when('@@ui/APP_LOADED')(todos.load),
  when('@@ui/ADD_TODO_KEYDOWN', action => action.payload === 13)(todos.add),
  when('@@ui/ADD_TODO_KEYDOWN', action => action.payload === 27)(todos.clearNew),
  when('@@ui/ADD_TODO_CHANGE')(todos.setNew),
  when('@@ui/TODO_ON_REMOVE')(todos.remove),
  when('@@ui/TODO_ON_COMPLETE')(todos.toggleComplete),
  when(/SET_TODOS/)(footer.updateCounts),
  when(/UPDATE_TODOS/)(footer.updateCounts),
]