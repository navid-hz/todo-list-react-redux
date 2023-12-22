import React, {useState} from 'react'
import style from './AddTodo.module.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//redux
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reduxAction';
import { clear } from '@testing-library/user-event/dist/clear';

function AddTodo() {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [priority, setPriority] = useState('');
  const [time, setTime] = useState('');

  const dispatch = useDispatch();

  const setData = (e) => {
    const {name, value} = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'desc':
        setDesc(value);
        break;
      case 'priority':
        setPriority(value);
        break;
      case 'time':
        setTime(value);
        break;
    }
  };

  const clearFrom = () => {
    setTitle('');
    setDesc('');
    setPriority('');
    setTime('');
  };

  const submitForm = (e) => {
    e.preventDefault()

    if (title && desc && priority && time) {
      const data = {
        id: Math.floor(Math.random() * 100000 + 1),
        title: title,
        desc: desc,
        priority: priority,
        time: time,
        isDone: false,
      };
      dispatch(addTodo (data));
      clearFrom();
      //Success notification
    toast.success('Todo added successfully')

    }else{

    //Error notification
    toast.error('Please fill all fields')
    }
  }
  return (
    <form onSubmit={submitForm}>
      <div>
      <label>Title</label>
      <input type="text" value={title} name='title' onChange={setData} placeholder='for example Work out ...' />
      </div>
      <div>
      <label>Description</label>
      <textarea cols='30' rows='10' value={desc} name='desc' onChange={setData}  placeholder='for example I will work out for 30 minutes' />
      </div>
      <div className={style.addTimePriority}>
        <div>
          <label>Priority</label>
          <select name='priority' value={priority} onChange={setData}>
            <option value='low' key='low'>Low</option>
            <option value='medium' key='medium'>Medium</option>
            <option value='high' key='high'>High</option>
          </select>
        </div>
        <div>
          <label>Time Duration</label>
          <input type='number' value={time} name='time' onChange={setData} placeholder='time duration in hour' />
        </div>
      </div>
      
      <button type='submit'>Add Todo</button>
      
    </form>
  )
}

export default AddTodo