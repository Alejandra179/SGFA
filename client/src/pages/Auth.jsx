import React, { useState } from 'react'
import { FormLogin } from '../components/FormLogin';
import { FormRegister } from '../components/FormRegister';

export const Auth = () => {
    const [login,setLogin] = useState(true);
  return (
   
        (login)?
        <FormLogin/>:
        <FormRegister/>

    
  )
}
