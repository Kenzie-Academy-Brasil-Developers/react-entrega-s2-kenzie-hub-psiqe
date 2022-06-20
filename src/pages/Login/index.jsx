import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Container } from "./styles";
import {FiEye, FiEyeOff} from 'react-icons/fi'
import { useState } from "react";



export const Login = ()=>{
  const schema = yup.object().shape({
    email: yup.string().required('Email is required!'),
    password: yup.string().required('Password is required!'),
  })
  const {register, handleSubmit, formState:{errors} } = useForm({
    resolver:yupResolver(schema)
  })
  

  const [type, setType] = useState(false)
  const password = document.querySelector('#password')

  function typePassword(){
   
    if(password?.getAttribute('type') === 'password'){
    
      setType(true)
      return password?.setAttribute('type','text')
    }else{
   
      setType(false)
      return password?.setAttribute('type','password')
    }

  }

  function inLogin(data){
    console.log(data)
  }

  

  return (<Container>
    <h1> Kenzie Hub </h1>
    <form onSubmit={handleSubmit(inLogin)}>
      <h3> Login </h3>
      <Input name='email' register={register} label='Email' error={errors?.email?.message} />
      <div className="contPassword">
        {type === false ? <FiEyeOff onClick={()=>typePassword()}/>  : <FiEye onClick={()=>typePassword()}/>}
        <Input id='password'  name='password' register={register} label='Password' type='password' error={errors?.password?.message}/>
      </div>
      <Button type='submit' color='var(--idPrimary)'> Login </Button>
      <p>You don't have an account ?</p>
      <Button  color='var(--grey-1)'>Register</Button>
    </form>
  </Container>
  )
}
