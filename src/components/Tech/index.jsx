import { EditTech } from "../Modals/EditTech"
import { Container } from "./styles"
import { useState } from "react"

export const Tech = ({tech, updateUser, age,listTech, setListTechs, setAge})=>{
  const [modalEdit, setModalEdit] = useState(false)

  function openModal(){
    console.log(tech.status)
    setAge(tech?.status) 
    setInterval(setModalEdit(true), 3000)
  }

  return(
    <>
      {modalEdit && <EditTech age={age} setAge={setAge}  listTech={listTech} setListTechs={setListTechs} updateUser={updateUser} tech={tech} setModalEdit={setModalEdit} modalEdit={modalEdit}/>}
      <Container onClick={()=> openModal()}>
        <h4>{tech.title}</h4>
        <p>{tech.status}</p>
      </Container>
    </>
  )
}