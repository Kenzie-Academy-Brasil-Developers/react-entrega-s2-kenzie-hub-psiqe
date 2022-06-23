import { Container, StyledButton } from './styles'

export const Button = ({children, color, ...rest})=>{
  return (
   <Container>
      <StyledButton backgroundcolor={color} {...rest}>
        {children}
      </StyledButton>
      </Container>
  )
};
