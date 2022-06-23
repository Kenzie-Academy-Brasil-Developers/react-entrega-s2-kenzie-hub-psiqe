import { useHistory } from "react-router-dom"
import { useState } from "react"

import { CreateTech } from "../../components/Modals/CreateTech"
import { Button } from "../../components/Button"
import { Tech } from "../../components/Tech"
import { api } from "../../services/api"
import { Container } from "./styles"


export const Dashboard = ()=>{
  const { name, course_module,techs} = JSON.parse(localStorage.getItem('@KenzieHub:user'))
  const id = JSON.parse(localStorage.getItem("@KenzieHub:id"))
  const [modalCreate, setModalCreate] = useState(false)
  const [listTech, setListTechs] = useState(techs)
  const [age, setAge] = useState('status')
  const history = useHistory()

  function updateUser(){
    api
      .get(`/users/${id}`)
      .then((resp)=>{
        localStorage.setItem("@KenzieHub:user", JSON.stringify(resp.data))
        setListTechs(resp?.data?.techs)
      })
      .catch((err)=> console.log(err))
  }
  
  const onLogout=()=>{
    localStorage.clear()
    return history.push('/login')
  }
  
  return(
    <>
    <CreateTech 
      age={age} 
      setAge={setAge} 
      listTech={listTech} 
      setListTechs={setListTechs} 
      modalCreate={modalCreate}
      setModalCreate={setModalCreate} 
      updateUser={updateUser} 
      />
      <Container>
        <div className="cont_header">
          <h1>Kenzie Hub</h1>
          <div><Button color={'var(--grey-2)'} onClick={()=> {onLogout()}} width='70px'> Logout </Button></div>
        </div>
        
        <div className="cont_user">
          <h2>Olá, {name} </h2>
          <p>{course_module}</p>
        </div>
        <div className="cont_port">
          <div className="cont_port_div">
            <h3>Technologies</h3>
            <div><Button onClick={()=>{setModalCreate(true)}} width='32px' color={'var(--grey-3)'}>+</Button></div>
          </div>
          <ul>
            {listTech.map((tech,i)=>(  
              <Tech age={age} setAge={setAge} listTech={listTech} setListTechs={setListTechs} updateUser={updateUser} key={i} tech={tech}/>    
            ))}
          </ul>
        </div>
      </Container>
    </>
  )
}