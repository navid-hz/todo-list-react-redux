import React, { useEffect, useState } from 'react'
import style from './BottomNavigation.module.css'
import { Link, useLocation } from 'react-router-dom'

//Icons
import addOn from '../assets/images/add-on.svg'
import listOn from '../assets/images/list-on.svg'
import addOff from '../assets/images/add-off.svg'
import listOff from '../assets/images/list-off.svg'


function BottomNavigation() {
    const [add, setAdd] = useState({src: addOn, className: style.bnItemOn});
    const [list, setList] = useState({src: listOff, className: style.bnItemOff
    });

    const location = useLocation();

    useEffect(() => {
        console.log(location);
        setNavcolor(location.pathname.replace("/", ""));
    }, [location.pathname]);

    const setNavcolor = (routName) => {
        switch (routName) {
            case '/add-todo':
            case '/':
                setAdd({src: addOn, className: style.bnItemOn});
                setList({src: listOff, className: style.bnItemOff});
                break;
            case '/list-of-todos':
                setAdd({src: addOff, className: style.bnItemOff});
                setList({src: listOn, className: style.bnItemOn});
                break;
            default:
                setAdd({src: addOn, className: style.bnItemOn});
                setList({src: listOff, className: style.bnItemOff});
                break;
        };
    };

  return (
    <div className={style.wrapper}>
        <Link to="/add-todo" className={style.bnItem}>
            <img src={add.src} alt="add-on" />
            <span className={add.className}>Add</span>
        </Link>
        <Link to="/list-of-todos" className={style.bnItem}>
            <img src={list.src} alt="list-on" />
            <span className={list.className}>List</span>
        </Link>
    </div>
  )
}


export default BottomNavigation;