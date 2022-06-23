import { Container, StyledSelect } from './styles'
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';

export const Select=({ children, register, name, error = "", options, tech, age, setAge, ...rest})=>{
  


function handleChange(e){
  console.log(e)
  setAge(e.target.value)
}

  return (
    <Container>
      <InputLabel id='label-select-tech-status'>
        <StyledSelect
        labelId='label-select-tech-status'
        id='select-tech-status'
        value={age || ''}
        onChange={(e)=>{handleChange(e)}}
        {...register(name)}>
          {options.map((option,i)=>{
            return(
              <MenuItem onClick={()=> {setAge(option.value)}} key={i} value={`${option.value}`}> {`${option.value}`}</MenuItem>
            )
          })}
        </StyledSelect>
      </InputLabel>
      <div className='error'>{!!error && <span>{error}</span>}</div> 
    </Container>
  )
}