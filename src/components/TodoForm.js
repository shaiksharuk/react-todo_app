import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleSubmit = event => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput("");
  }

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()

    console.log('dlkfms')
  })

  const onChangeHandler = event => {
    setInput(event.target.value.toLocaleLowerCase());
  }
  return (

    <form className='todo-form' onSubmit={handleSubmit}>
      {
        props.edit ? // condetional rendering
          (<>
            <input onChange={onChangeHandler} type='text' placeholder='edit task' value={input} name='text' className='todo-input edit' ref={inputRef}></input>
            <button className='todo-button' >update</button></>) :
          (<>
            <input onChange={onChangeHandler} type='text' placeholder='Add a to do' value={input} name='text' className='todo-input' ref={inputRef}></input>
            <button className='todo-button' >Add todo</button>
          </>)
      }
    </form>

  )
}

export default TodoForm
