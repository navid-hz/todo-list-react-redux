import React, { useEffect } from 'react'
import style from './ListOfTodos.module.css'
import emptyList from '../assets/images/empty-list-removebg-preview.png'
import { Link } from 'react-router-dom';
import Todos from './Todos';
import { useSelector, useDispatch } from 'react-redux';
import {getAllTodos} from '../redux/reduxAction';



const ListOfTodos = () => {
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.todoAddReducer);
  const loadTodos = reduxData.todoList;

  useEffect(() => {
    document.title = 'List of Todos';
    //get all todos from local
    dispatch(getAllTodos());
  }, []);

  return (
    <div className={style.tlContainer}>
      {loadTodos.length > 0 ? (
      //show list of todos
      loadTodos.map((item) => <Todos key={item.id} data={item} />)
      ):(
      //show empty list image
      <div className={style.tlEmty}>
        <img src={emptyList} alt='empty list' />
        <p>There is no todo yet</p>
        <Link to='/add-todo'>
          <button>Let's get to it!</button>
        </Link>
      </div>
      )} 
    </div>
  );
};


export default ListOfTodos;