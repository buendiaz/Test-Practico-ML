import React from 'react';
import {inputProps} from '../../../../type';

const Input = (props:inputProps) => {
  return (
    <input type="text" {...props}></input>
  )
}

export default Input;