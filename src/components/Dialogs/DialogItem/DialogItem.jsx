import React from 'react'
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    /* return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink> */
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}


export default DialogItem;