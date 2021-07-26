import Species from './screens/Species';
import { Route, Switch } from "react-router";
import Home from './screens/Home'
import Navbar from "./components/Navbar"
import SpecieDetail from './screens/SpecieDetail'

function App() {
  return (
    <div>
      <Navbar />
    <Switch>
    <Route exact path="/">
          <Home />
        </Route>
        
        <Route exact path="/species">
          <Species />
        </Route>

        <Route exact path="/species/:id">
          <SpecieDetail />
        </Route>

      </Switch>
      </div>
  )}

export default App;
