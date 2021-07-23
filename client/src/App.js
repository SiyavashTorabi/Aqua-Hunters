import Species from './screens/Specie';
import { Route, Switch } from "react-router";
import Home from './screens/Home'
function App() {
  return (
    <div>
    <Switch>
    <Route exact path="/">
          <Home />
        </Route>
        
        <Route exact path="/species">
          <Species />
        </Route>


      </Switch>
      </div>
  )}

export default App;
