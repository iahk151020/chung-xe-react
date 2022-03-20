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
import BillByCar from "./components/pages/bill/BillByCar";
import BillDetail from "./components/pages/bill/BillDetail";

function App() {
  return (
    <Router className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/admin"><Home/></Route>
          <Route exact path="/admin/cars/statistic"><CarStatistic/></Route>
          <Route exact path="/admin/cars/statistic/bills/:car_id?/:start_date?/:end_date?"><BillByCar/></Route>
          <Route exact path="/admin/bills/:bill_id?"><BillDetail/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
