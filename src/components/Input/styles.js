import styled from "styled-components";
import { TextField } from '@mui/material/'
import * as muiStyles from '@mui/material/styles';

export const Container = styled.div`
display: flex;
flex-direction: column;
padding:0;
.error{
  width:100%;
  display:flex;
  justify-content: start;
}
span{ 
  color: var(--idPrimary);
  justify-content: start;
  
}
`

export const StyledTextField = muiStyles.styled(TextField)`
  margin-top: 5px;
  margin-bottom: 5px;
  input{
    background: var(--grey-2);
    opacity:0.7;
    border-radius: 5px;
    color: var(--grey-0);
    border-color: var(--grey-1)
  }
  label{
    color: var(--grey-1);
  }
  `