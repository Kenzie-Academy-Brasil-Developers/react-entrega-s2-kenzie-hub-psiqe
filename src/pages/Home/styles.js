import styled from "styled-components";



export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h3 {
    align-items: center;
    font-size: 20px;
    margin-right: 10px;
    
    display:flex;
    background-image: linear-gradient(to right, #F8F9FA, #868E96, #F8F9FA   );
    color: black;

    background-clip: text;
    -webkit-background-clip: text;
  
    -webkit-text-fill-color: transparent;
  
  }
  a {
    text-decoration: none;
    font-family: 'Fascinate', cursive;
    color: ${props => props.color ? props.color : `var(--idPrimary)`};
    font-size: 20px;
    font-wight: bold;
    cursor:pointer;
  }
`
export const Title =  styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Fascinate&display=swap');
  font-family: 'Fascinate', cursive;
  color: var(--grey-0)
`



export const ContLetsGo= styled.div`
display: flex;
flex-direction: inline;

`