import styled from "styled-components";

export const Container = styled.div`
margin: 10px 0;
width: 100vw;
display:flex;
justify-content: center;
`
export const Content = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  
  div {
    display:flex;
    flex-direction: inline;
    justify-content: space-around;
    align-items: center;
    
    h1 {
      display: inline-block;
      width: 200px;
      flex-wrap: wrap;
      color: var(--idPrimary)
    }
  }
  form{
    height: max-content;
    width: 90%;
    background: var(--grey-3);
    display:flex;
    flex-direction: column;
    align-items:center;
    border-radius: 5px;
    margin: 10px 0;
    h3{
      color: var(--grey-0);
      margin: 20px 0px 10px 0px;
    }
    p{
      color: var(--grey-1);
      margin-bottom: 20px;
    }
  }
`
