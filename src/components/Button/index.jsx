import { Container, StyledButton } from './styles'

export const Button = ({children, color, ...rest})=>{
  return (
   <Container color={color}>
      <StyledButton {...rest}>
        {children}
      </StyledButton>
      </Container>
  
  )
};
