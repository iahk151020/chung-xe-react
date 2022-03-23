import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from './components/pages/Home';
import CarStatistic from './components/pages/car/CarStatistic';
import BillByCar from "./components/pages/bill/BillByCar";
import BillDetail from "./components/pages/bill/BillDetail";
import Login from "./components/login/Login";
import BillList from "./components/pages/bill/BillList";
import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ConfirmBill from "./components/pages/bill/ConfirmBill";

function App() {
  return (
    <Router className="App">
      
      
        <Switch>
          <Route exact path="/admin/login"><Login/></Route>
          <Route exact path="/admin">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <Home/>
            </div>
          </Route>
          <Route exact path="/admin/cars/statistic">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <CarStatistic/>
            </div>
          </Route>
          <Route exact path="/admin/cars/statistic/bills/:car_id?/:start_date?/:end_date?">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <BillByCar/>
            </div>
          </Route>
          <Route exact path="/admin/bills/bill_detail/:id">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <BillDetail/>
            </div>
          </Route>
          <Route exact path="/admin/bills/confirm">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <BillList/>
            </div>
          </Route>
          <Route exact path="/admin/bills/confirm/:id">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <ConfirmBill/>
            </div>
          </Route>
          
        </Switch>
    </Router>
  );
}

export default App;
