import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput("");
  }

  const inputRef = useRef(null)

  useEffect(()=> {
    inputRef.current.focus()
  })

  const onChangeHandler = event => {
    setInput(event.target.value.toLocaleLowerCase());
  }
  return (

    <form className='todo-form' onSubmit={handleSubmit}>
      <input onChange={onChangeHandler} type='text' placeholder='Add a to do' value={input} name='text' className='todo-input' ref={inputRef}></input>
      <button className='todo-button' >Add todo</button>

    </form>

  )
}

export default TodoForm
