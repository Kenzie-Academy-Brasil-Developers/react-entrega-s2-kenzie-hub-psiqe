import styled from "styled-components";

export const Container = styled.div`
width:100vw;
height:100vh;
display: grid;
grid-template-rows: 10% 20% 70%;
background: var(--grey-4);
justify-content: center;
flex-direction: column;
align-items: center;
padding: 5px 50px;
h1{
  color: var(--idPrimary);
}  
h2,h3,h4 {
  color: var(--grey-0);
  
}

.cont_header{
  padding-top: 20px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:90vw;
  max-width: 770px;
  
}
.cont_user{
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  flex-wrap: wrap;
  padding:10px;
  p {
    color: var(--grey-1);
  }
}
.cont_port{
  height: 100%;
  display:flex;
  flex-direction: column;
  padding:10px;
  .cont_port_div{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
  }
}
ul{
  background: var(--grey-2);
  padding:10px;
  border:none;
  border-radius: 5px;

}

`