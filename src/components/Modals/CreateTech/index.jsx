import { api } from "../../../services/api"
import { useForm } from "react-hook-form"
import {FiX} from 'react-icons/fi'
import { useEffect } from "react"

import { Button } from "../../Button"
import  { Input } from "../../Input"
import { Select } from "../../Select"
import { Container, Cont } from "./styles"


export const CreateTech=({modalCreate, setModalCreate, age, setAge, updateUser})=>{
  const token = JSON.parse(localStorage.getItem('@KenzieHub:token'))
  const {register, handleSubmit} = useForm()
  
  const Status = [
    {value: 'Iniciante',},
    {value: 'Intermediário'},
    {value: 'Avançado'},
  ]
   
  useEffect(()=>{
    const contModal = document.querySelector('.cont_modal')
    if(modalCreate === true){
      contModal.style.display = 'flex'
    }else{ 
      contModal.style.display =  'none'
    }
  }, [modalCreate])

  const onCreate = (data)=>{
   api
      .post('/users/techs', data,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((resp) => {
        updateUser()
        setInterval(setModalCreate(false), 5000)
    })
  }

  return(
    <Container className="cont_modal">
        <Cont>
          <div className="cont_heander">
            <h4>Technologies details </h4>
            <FiX onClick={()=> setModalCreate(false)}/>
          </div>
  
          <form onSubmit={handleSubmit(onCreate)}>
            <div className="cont_inputs">
              <Input name='title' register={register} label='Title' />
              
              <Select  age={age} setAge={setAge} name='status' register={register} label='Status' options={Status} />
           
              <Button type='submit' color={'var(--idPrimary)'} width='100%'>Save editions</Button>
            </div>
          </form>
        </Cont>
      </Container>
  )
}