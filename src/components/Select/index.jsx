import { Container, StyledTextField, StyledAutocomplete } from './styles'

export const Select=({register, name, error = "", options, ...rest})=>{
  

  return (
    <Container>
      <StyledAutocomplete
          options={options}
          error={error}
          renderInput={(params) => <StyledTextField {...params} {...register(name)} {...rest}/>}
          />
       <div className='error'>{!!error && <span>{error}</span>}</div>
        
    </Container>

  )
}