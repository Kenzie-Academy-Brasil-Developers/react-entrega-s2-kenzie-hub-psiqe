import styled from "styled-components";

export const Container = styled.div`
height:100vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
h1{
  color: var(--idPrimary)
}
h3 {
  color: var(--grey-0);
  text-align: center;
}
form {
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: var(--grey-3);
  padding: 17px 15px;
  border-radius:5px;

  div{
    display:flex;
    justify-content:center;
    svg {
      color: var(--idPrimaryNegative);
      margin: 25px 0px 0px 85px;
      position: absolute;
      cursor: pointer;
      z-index:1;
    :hover{
      color: var(--idPrimaryFocus);
      
    }
  }  
  } 
}
p {
  color: var(--grey-0);
}
`