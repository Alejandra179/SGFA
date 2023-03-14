<<<<<<< HEAD
import React from 'react'
import { Form } from '../components/Form'

const Auth = () => {
  return (
    <div>
      <Form/>
    </div>
  )
}

export default Auth
=======
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
>>>>>>> a30e0c9a1bacdcad4931710f321d82bb707f4391
