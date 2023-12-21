import React from 'react'
import style from './AddTodo.module.css'

function AddTodo() {
  return (
    <form>
      <div>
      <label>Title</label>
      <input type="text" placeholder='for example Work out ...' />
      </div>
      <div>
      <label>Description</label>
      <textarea cols='30' rows='10' placeholder='for example I will work out for 30 minutes' />
      </div>
      <div className={style.addTimePriority}>
        <div>
          <label>Priority</label>
          <select name='select'>
            <option value='low' key='low'>Low</option>
            <option value='medium' key='medium'>Medium</option>
            <option value='high' key='high'>High</option>
          </select>
        </div>
        <div>
          <label>Time Duration</label>
          <input type='number' placeholder='time duration in hour' />
        </div>
      </div>
      
      <button type='submit'>Add Todo</button>
      
    </form>
  )
}

export default AddTodo