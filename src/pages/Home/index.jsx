import { Container } from "@mui/material";
import { Button } from "../../components/Button";
import { Cont, ContLetsGo, Title } from "./styles";
import { Link, useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory()

  const handleNavigation = (path) =>{
    return history.push(path)
  }

  return <>
    <Container>
      <Cont>
        <Title> Port.io </Title>

          <Button  color='var(--idPrimaryFocus)' onClick={() => handleNavigation('/signup')} >Sign up</Button>
      
        <ContLetsGo>
          <h3> 
            Like one of sus ? 
          </h3>
            <Link to='/login' > Let is go! </Link>
        </ContLetsGo>
      </Cont>
    </Container>
  </>
}

export default Home