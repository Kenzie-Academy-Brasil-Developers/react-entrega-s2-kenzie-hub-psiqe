import styled from "styled-components";

export const Container = styled.div`
height:100vh;
width:100vw;
position:absolute;
top: 0;
left: 0;
display:flex;
align-items: center;
flex-direction: column;
justify-content: center;
z-index:1;
`
export const Cont= styled.div`
display:flex;
position: sticky;
flex-direction: column;
width: 270px;
background: var(--grey-3);
height: 290px;



.cont_heander{
    background: var(--grey-2);
    width: 100%;
    display: flex;
    margin-bottom: 15px;
    flex-direction: column;
    padding: 10px 5px;
    color: var(--grey-0);
    h4{
      width: max-content;
      margin: 0;
    }
    svg{
      position: absolute;
      margin: 0px 0px 0px 237px;
      cursor: pointer;
      :hover{
        color: var(--idPrimary)
      }
    }
  }
  .cont_inputs{
    padding:0 15px;
  }
  
  .cont_buttons{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

