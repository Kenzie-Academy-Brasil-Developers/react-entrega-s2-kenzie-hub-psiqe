import { Switch, Route, useHistory } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import Home from "../pages/Home"
import { Login } from "../pages/Login"
import { Signup } from "../pages/Signup"


const Routes =()=>{
  const history = useHistory()
  return <Switch>
    <Route exact path='/'>
      {history.push('/home')}
    </Route>
    <Route exact path='/home'>
      <Home/>
    </Route>
    <Route exact path='/login'>
      <Login/>
    </Route>
    <Route exact path='/signup'>
      <Signup />
    </Route>
    <Route exact path='/dashboard'>
     <Dashboard />
    </Route>
  </Switch>
}

export default Routes