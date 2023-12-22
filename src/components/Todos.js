import React, { useEffect, useState } from 'react'
import style from './Todos.module.css'

import iconTimeOn from '../assets/images/time-on.svg'
import iconTimeOff from '../assets/images/time-off.svg'
import iconCheckOn from '../assets/images/check-circle-on.svg'
import iconCheckOff from '../assets/images/check-circle-off.svg'
import iconDelete from '../assets/images/trashbin.svg'

//Redux
import { deleteTodo, doneTodo, undoneTodo } from '../redux/reduxAction'
import { useDispatch, useSelector } from 'react-redux'


const Todos = (props) => {
  const { id, title, desc, priority, time, isDone } = props.data;

  const [descContorl, setDescControl] = useState({desc : "", showPoints : true});

  const [isDoneState, setIsDoneState] = useState(isDone);

  const dispatch = useDispatch();
  const reduxData = useSelector(state => state.todoAddReducer);

  useEffect (() => {
     setDescControl({desc : desc.substring(0, 100), showPoints : true});
  }, []);

  const setPriority = () => {
    switch (priority) {
      case 'high':
        return 'High';
      case 'medium':
        return 'Medium';
      case 'low':
        return 'Low';    
      default:
        return 'Low';
    }
  };

  return (

    <div className={
      isDone 
        ? `${style.todosItemsContainer} ${style.todosItemsDone}`
        : `${style.todosItemsContainer}`}>
      <h2>{title}</h2>
      <span className={style.todosItemsPriority}>{setPriority(priority)}</span>
      <div className={style.todosItemsTime}>
        <img src={iconTimeOn} />
        <span>{time} hour</span>
      </div>
      <p>
        {descContorl.desc}
        <span onClick={() => setDescControl({ desc: desc, showPoints: false})}>
          {descContorl.showPoints && descContorl.desc && '...'}
        </span>
      </p>
      <div className={style.todosItemsActionIcons}>
        <img
          onClick={() => {
            isDoneState 
              ? dispatch(undoneTodo(props.data)) 
              : dispatch(doneTodo(props.data));            
            setIsDoneState(
              reduxData.todoList.find(item => item.id === id).isDone
            );
          }}
          src={iconCheckOn}
        />
        <img 
        onClick={() => dispatch(deleteTodo (props.data))}
        src={iconDelete} 
        />
      </div>
    </div>
  )
}

export default Todos