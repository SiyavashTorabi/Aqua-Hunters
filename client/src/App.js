import Species from './screens/Species';
import "./App.css"
import { Route, Switch } from "react-router";
import Home from './screens/Home'
import Navbar from "./components/Navbar"
import SpecieDetail from './screens/SpecieDetail'
import SpecieCreate from "./screens/SpecieCreate"
import SpecieEdit from "./screens/SpecieEdit"
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

        <Route exact path="/species/:id/edit">
          <SpecieEdit />
        </Route>

        <Route exact path="/species/:id">
          <SpecieDetail />
        </Route>
        <Route path="/add-Specie">
          <SpecieCreate />
        </Route>

      </Switch>
      </div>
  )}

export default App;
