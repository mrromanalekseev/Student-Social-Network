import React from 'react';
import styles from './FormsControls.module.css';

export const Textarea = ({input, meta, ...props}) => {

    //debugger

    const haveError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (haveError ? styles.error : '')}> 
        <div> 
          <textarea {...input} {...props} />
        </div>  
        { haveError && <span>{meta.error}</span> }
        </div> 
    )
}


export const Input = ({input, meta, ...props}) => {

    //debugger

    const haveError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (haveError ? styles.error : '')}> 
        <div> 
          <input {...input} {...props} />
        </div>  
        { haveError && <span>{meta.error}</span> }
        </div> 
    )
}