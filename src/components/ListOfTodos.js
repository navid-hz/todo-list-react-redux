import React from 'react'
import style from './ListOfTodos.module.css'
import emptyList from '../assets/images/empty-list-removebg-preview.png'
import { Link } from 'react-router-dom';

function ListOfTodos() {
  const loadTodos = [];

  return (
    <div className={style.tlContainer}>
      {loadTodos.length > 0 ? (
      //show list of todos
      console.log('show list of todos')
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