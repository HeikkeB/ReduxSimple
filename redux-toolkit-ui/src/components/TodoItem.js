import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCompleted, removeTodo } from '../features/todo/todoSlice'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  const toggleTodoHandler = (id) => {
    dispatch(toggleCompleted(id))
  }

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id))
  }
  return (
    <div className="flex justify-between items-center my-2">
      <div
        onClick={() => toggleTodoHandler(todo.id)}
        className="text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400"
      >
        Complete
      </div>
      <div
        className={`text-sm ${
          todo.completed ? 'line-through font-medium text-lime-400' : ''
        }`}
      >
        {todo.text}
      </div>
      <div
        onClick={() => removeTodoHandler(todo.id)}
        className="text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer"
      >
        Delete
      </div>
    </div>
  )
}

export default TodoItem
