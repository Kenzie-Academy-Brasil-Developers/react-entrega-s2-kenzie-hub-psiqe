import { api } from "../../../services/api"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import {FiX} from 'react-icons/fi'
import { useEffect } from "react"

import { Button } from "../../Button"
import { Input } from "../../Input"
import { Select } from "../../Select"
import { Container, Cont } from "./styles"


export const EditTech=({tech, updateUser, age, setAge, modalEdit, setModalEdit})=>{
  const token = JSON.parse(localStorage.getItem('@KenzieHub:token'))
  const {register, handleSubmit} = useForm()
  
  const Status = [
    {value: 'Iniciante',},
    {value: 'Intermediário'},
    {value: 'Avançado'},
  ]
  

  useEffect(()=>{
    const contModal = document.querySelector('.modal_edit')
    if(modalEdit === true){
      contModal.style.display = 'flex'
    }else{ 
      contModal.style.display =  'none'
    }
  }, [modalEdit])
  
  const onEdit = (data)=>{
    const status = {status:`${data.status}`  }
    console.log(tech)
    api 
    .put(`/users/techs/${tech.id}`, status, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((resp) => {
      toast.success('Edit Tech!')
      updateUser()
      setInterval(setModalEdit(false), 5000)  
    })
    .catch((err) => console.log(err))
  }

  const onDelete = ()=>{
    api
    .delete(`/users/techs/${tech.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(()=>{
      toast.success('Deleted Tech!')
      updateUser()
      setModalEdit(false)
    })
    .catch((err)=>console.log(err))
  }
  
  return(
      <Container className="modal_edit" >
        <Cont>
          <div className="cont_heander">
            <h4>Technologies details </h4>
            <FiX onClick={()=> setModalEdit(false)}/>
          </div>
  
          <form onSubmit={handleSubmit(onEdit)}>
            <div className="cont_inputs">
              <Input name='title' register={register} label='Title' value={tech.title} />
              <Select name='status' tech={tech} register={register} age={age} setAge={setAge} label='Status' options={Status}/>
            </div>
    
            <div className="cont_buttons">
              <Button type='submit' color={'var(--idPrimaryNegative)'} width='90%'>Save editions</Button>
              <div><Button onClick={()=>onDelete()} color={'var(--grey-1)'} width='80px' >Delete</Button></div>
            </div>
          </form>  
        </Cont>
      </Container>
  )
}