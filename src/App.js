import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from './components/pages/Home';
import CarStatistic from './components/pages/car/CarStatistic';
import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/car/statistic"><CarStatistic/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
