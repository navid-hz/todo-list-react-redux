import React from 'react'
import style from './BottomNavigation.module.css'
import { Link } from 'react-router-dom'

//Icons
import addOn from '../assets/images/add-on.svg'
import listOn from '../assets/images/list-on.svg'
import addOff from '../assets/images/add-off.svg'
import listOff from '../assets/images/list-off.svg'


function BottomNavigation() {
  return (
    <div className={style.wrapper}>
        <Link to="/add-todo" className={style.bnItem}>
            <img src={addOn} alt="add-on" />
            <span>Add</span>
        </Link>
        <Link to="/list-of-todos" className={style.bnItem}>
            <img src={listOn} alt="list-on" />
            <span>List</span>
        </Link>
    </div>
  )
}

export default BottomNavigation