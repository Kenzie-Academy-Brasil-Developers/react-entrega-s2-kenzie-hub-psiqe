import { Container, StyledTextField } from './styles';

export const Input=({label, register, name, error = "", ...rest})=>{
  return (
    <Container>
       <div><StyledTextField {...register(name)} label={label} variant="outlined"  {...rest}>
        </StyledTextField></div>
      <div className='error'>{!!error && <span>{error}</span>}</div>
    </Container>
  )
}