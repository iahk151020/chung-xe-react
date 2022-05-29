import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from './components/pages/home/Home';
import CarStatistic from './components/pages/car/CarStatistic';
import BillByCar from "./components/pages/bill/BillByCar";
import BillDetail from "./components/pages/bill/BillDetail";
import Login from "./components/login/Login";
import BillList from "./components/pages/bill/BillList";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ConfirmBill from "./components/pages/bill/ConfirmBill";
import CustomerList from "./components/pages/customer/CustomerList";
import CustomerDetail from "./components/pages/customer/CustomerDetail";
import RentingHistory from "./components/pages/car/RentingHistory";
import RentingTurns from "./components/pages/customer/RentingTurns";

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

          <Route exact path="/admin/cars/renting-history">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <RentingHistory/>
            </div>
          </Route>
     
          

          <Route exact path="/admin/customers/customer-list">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <CustomerList/>
            </div>
          </Route>

          <Route exact path="/admin/customers/customer-detail/:customer_name?">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <CustomerDetail/>
            </div>
          </Route>

          <Route exact path="/admin/customers/renting-turns/:customer_name?">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <RentingTurns/>
            </div>
          </Route>
          
        </Switch>
    </Router>
  );
}

export default App;
