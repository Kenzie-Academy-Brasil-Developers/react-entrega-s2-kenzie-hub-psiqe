import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Select } from "../../components/Select"

import { useForm } from "react-hook-form";

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from "react-router-dom";

import { Container, Content } from "./styles"

export const Signup =()=>{
  const schema = yup.object().shape({
    name: yup.string().required("We need know your name!"),
    email: yup.string().required('We need know your email!').email('Invalid email!'),
    password: yup.string()
      .required("You need security, create a password!")
      .matches("^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,}$", 'Password must contain at least: 1 Upper case, 1 Lower case, 1 Number, 1 Special character and at least 6 characters'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Does not agree with password!'),
    bio: yup.string().required('Please, We want to know about you!'),
    contact: yup.string().required('We need contact to speak with you!'),
    module: yup.string().required("You are studying right.. What's is your Module?"),
  })

  const modules = [
    {label: 'First Module'},
    {label: 'Second Module'},
    {label: 'Third Module'},
    {label: 'Fourth Module'},
    {label: 'Fifth Module'},
    {label: 'Sexth Module'},
    {label: 'Seventh Module'},
  ]

  const { 
    register,
    handleSubmit,
    formState:{errors},
  } = useForm({
    resolver: yupResolver(schema)
  });
  
  function inSubmit(data) {
    console.log(data)
  }
 
  return(<Container>
      <Content>
        <div>
          <h1> Kenzie Hub </h1>
          <Link to={'/login'}><Button width='70px'color='var(--idPrimaryNegative)'> Go to Login </Button></Link>
        </div>
    
        <form onSubmit={handleSubmit(inSubmit)}>
          <h3>Create your account</h3>
          <p>Quick and easily, let's go!</p>
          
          <Input name='name' register={register} label='Name' error={errors?.name?.message}  />
          <Input name='email' register={register} label='Email' error={errors?.email?.message} />
          <Input name='password' register={register} label='Password' error={errors?.password?.message} type='password' />
          <Input name='confirmPassword' register={register} label='Confirm password' error={errors?.confirmPassword?.message} type='password'/>
          <Input name='bio' register={register} label='Bio' error={errors?.bio?.message}/>
          <Input name='contact' register={register} label='Contact' error={errors?.contact?.message} />
          <Select name='module' register={register} label='Modules' options={modules} error={errors?.module?.message}/>

          <Button type='submit' color='#59323F'> Register </Button>
        </form>
      </Content>
    </Container>
  )
}