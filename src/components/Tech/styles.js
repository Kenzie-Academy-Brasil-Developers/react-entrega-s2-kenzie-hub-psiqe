import styled from "styled-components";

export const Cont= styled.div`
  display:flex;
  position:abolute;

`
export const Container = styled.div`
  display:flex;
  justify-content:space-between;
  align-items: center;
  margin: 0px 0px 10px 0px;
  background: var(--grey-4);
  border:none;
  border-radius:5px;
  height: 50px;
  padding: 0 30px;
 
  p{
    color: var(--grey-2);    
  }
  :hover{
    background: var(--grey-2);
    p{
      color: var(--grey-1);

    }
  }
`