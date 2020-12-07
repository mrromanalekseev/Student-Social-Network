import React from 'react';
import styles from './FormsControls.module.css';
import {Field} from 'redux-form';

const FormControl = ({input, meta: {touched, error}, children}) => {

  const haveError = touched && error;
  return (
      <div className={styles.formControl + ' ' + (haveError ? styles.error : '')}> 
      <div> 
        {children}
      </div>  
      { haveError && <span>{error}</span> }
      </div> 
  )
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>     
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps} /></FormControl>     
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
   <div>
   <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props}/> {text}
   </div> 
   )

/* export const Textarea = ({input, meta, ...props}) => {

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
} */