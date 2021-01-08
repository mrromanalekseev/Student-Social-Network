import React, {useState} from 'react';
import {useEffect} from 'react';
import s from './ProfileInfo.module.css';

/* let arr = [0, () => {}]
let [a, setA] = arr */

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect ( () => {
        debugger;
        setStatus(props.status)
    }, [props.status] )
    
  
    /* let stateWithSetState = useState(true);
    let editMode = stateWithSetState [0];
    let setEditMode = stateWithSetState [1]; */

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus (e.currentTarget.value)     
    }

    return (
        <div>
            {!editMode &&
                <div>
                   <b>Status: </b> <span onDoubleClick={activateEditMode }>{props.status || "-----"} yo</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMode }
                    value={status} />
                </div>
            }
        </div>
    )
}




export default ProfileStatusWithHooks;