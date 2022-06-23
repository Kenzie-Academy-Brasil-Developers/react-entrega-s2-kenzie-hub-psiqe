import { yupResolver } from "@hookform/resolvers/yup";
import {FiEye, FiEyeOff} from 'react-icons/fi';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
//import jwt_decode from "jwt-decode";
import {toast} from 'react-toastify';
import { useState } from "react";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { Load } from "../../utils/Load";
import { Container } from "./styles";



export const Login = ()=>{
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [type, setType] = useState(false)

  const schema = yup.object().shape({
    email: yup.string().required('Email is required!'),
    password: yup.string().required('Password is required!'),
  })

  const {register, handleSubmit, formState:{errors} } = useForm({
    resolver:yupResolver(schema)
  })
  
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

 

  function onSubmit(data){
    setLoading(true)
    api
    .post('/sessions', data)
    .then(resp=>{
      toast.success("Welcome Dev!")
      const { user, token} = resp.data
      //const decode = jwt_decode(token)
      localStorage.setItem("@KenzieHub:token", JSON.stringify(token))
      localStorage.setItem("@KenzieHub:user", JSON.stringify(user))
      localStorage.setItem("@KenzieHub:id", JSON.stringify(user.id))
      return history.push('/dashboard')
    })
    .catch(err => {
      toast.error('Your email or password is incorrect.') 
      setLoading(false)
    })
  }
  
  const inRegister=()=>{
    history.push('/signup')
  }

  return (
  <Container>
    <h1> Kenzie Hub </h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3> Login </h3>
      <Input name='email' register={register} label='Email' error={errors?.email?.message} />
      <div className="contPassword">
        {type === false ? <FiEyeOff onClick={()=>typePassword()}/>  : <FiEye onClick={()=>typePassword()}/>}
        <Input id='password'  name='password' register={register} label='Password' type='password' error={errors?.password?.message}/>
      </div>
      <Button type='submit' color='var(--idPrimary)'> Login </Button>
      <p>You don't have an account ?</p>
      <Button  onClick={()=>{inRegister()}} color='var(--grey-1)'>Register</Button>
    </form>
    {loading && <Load/>}
  </Container>
  )
}