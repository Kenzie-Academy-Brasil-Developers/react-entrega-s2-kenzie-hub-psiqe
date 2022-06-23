import styled from "styled-components";

export const Container = styled.div`
position: fixed;
height:100vh;
width:100vw;
display:flex;
align-items: center;
justify-content: center;
z-index:1;
`
export const Cont= styled.div`
display:flex;
position: sticky;
width: 270px;
background: var(--grey-3);
margin:15px;
height: 290px;
flex-direction: column;

.cont_heander{
    background: var(--grey-2);
    height: 100%;
    width: 100%;
    display: flex;
    margin-bottom: 15px;
    flex-direction: row;
    padding: 10px 5px;
    color: var(--grey-0);
    h4{
      width: max-content;
      margin: 0;
    }
    svg{
      position: absolute;
      margin: 5px 0px 0px 237px;
      cursor: pointer;
      :hover{
        color: var(--idPrimary)
      }
    }
  }
  .cont_inputs{
    padding:0 15px;
    display:flex;
    flex-direction: column;
    align-items:center;
  }

`

