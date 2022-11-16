import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import { v4 } from 'uuid'

const Form = () => {
  const dispatch = useDispatch()
  const [todoValue, setTodoValue] = React.useState('')

  const addTodoHandler = () => {
    const todo = {
      id: v4(),
      text: todoValue,
      completed: false,
    }
    dispatch(addTodo(todo))
    setTodoValue('')
  }

  return (
    <form className="w-full flex" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={todoValue}
        placeholder="Type something..."
        onChange={(e) => setTodoValue(e.target.value)}
        className="w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm"
      />
      <button
        type="submit"
        onClick={() => addTodoHandler()}
        className="shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm"
      >
        Submit
      </button>
    </form>
  )
}

export default Form
