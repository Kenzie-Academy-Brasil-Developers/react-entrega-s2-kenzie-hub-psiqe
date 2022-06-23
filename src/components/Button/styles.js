import styled from "styled-components";
import { Button } from '@mui/material/'
import * as muiStyles from '@mui/material/styles';

export const Container = styled.div`
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content:center;
  width: ${props => props.width ? props.width : '90%' };
  margin: 20px 0;
  cursor: pointer;
`

export const StyledButton = muiStyles.styled(Button)`
div{
  width:fit-content;
}
color: var(--grey-0);
background: ${props => props.backgroundcolor} ;
height: 48px;
width: ${props => props.width ? props.width : '100%' };
:hover {
  background: var(--idPrimaryFocus)
}
`