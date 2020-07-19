import React from 'react';
import spinner from '../../../assets/images/spinner.svg';

let Spinner = (props) => {
    return <div style={ { backgroundColor: 'white' } } >
    <img src={spinner} /> 
    </div>
}

export default Spinner;