import styled from "styled-components";
import { TextField, Autocomplete } from '@mui/material/'
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
  margin-top: 20px;
  label{
    color: var(--grey-0);
  }
`
export const StyledAutocomplete = muiStyles.styled(Autocomplete)`
width: 223px;
margin-top: 20px;
`