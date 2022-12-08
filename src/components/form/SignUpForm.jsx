import React from 'react'
// icons & styles
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';
import './signup-form.styles.css'
//component
import FormInput from './FormInput';
//form validations
import {useForm} from 'react-hook-form'
import * as yup from 'yup'

export default function SignUpForm() {
  //a schema to determine the shape of the data entered/required
  const schema = yup.object().shape({
    Username:yup.string().required().min(5, "min 5 character").max(15, "max 15 characters").matches(),
    
  })
  const {register, handleSubmit} = useForm()
  const onSubmit = (data) =>{
    console.log(data)
  }
  // let regex = /^[a-z][0-9][a-z]$/ig
  // console.log(regex.test("shady0ss"))
  return (
    <form className='signup-form' onSubmit={handleSubmit(onSubmit)}>
     <FormInput icon={<AiOutlineUser />} placeHolder="Username" type="text" register={register("Username")}/>
     <FormInput icon={<AiOutlineMail />} placeHolder="Email" type="text" register={register("Email")}/>
     <FormInput icon={<AiOutlineLock />} placeHolder="Password" type="password" register={register("Password")}/>
     <FormInput icon={<AiOutlineLock />} placeHolder="Confirm Password" type="password" register={register("Confirm Password")}/>
     <button type='submit' id="primary-button">Create Account</button>
    </form>
  )
}
