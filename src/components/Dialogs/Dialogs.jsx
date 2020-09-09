import React from 'react'
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";
import { Field, reduxForm} from 'redux-form';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} /> );
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;


    let addNewMessage= (values) => {
       //alert(values.newMessageBody);
       props.sendMessage(values.newMessageBody);
    }

    //alert (props.isAuth);
    if (!props.isAuth) return <Redirect to={'/login'} />;

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements} 
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div className={s.area}>
            <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
            {/* <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea> */}
            <div>
            <button>Send</button>
            </div>
        </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;