import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import CarStatistic from './components/pages/car/CarStatistic';
import BillByCar from "./components/pages/bill/BillByCar";
import BillDetail from "./components/pages/bill/BillDetail";
import "./App.css";
import AdminLogin from "./components/login/AdminLogin";
import BillList from "./components/pages/bill/BillList"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ConfirmBill from "./components/pages/bill/ConfirmBill";

import {UserHome} from "./pages/Home";
import UserLogin from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ChooseCar } from './pages/ChooseCar';
import CarDetail from './pages/CarDetail';
import Protected from './components/Protected';
import Success from './pages/Success';
import AdminHome from "./components/pages/AdminHome";


function App() {
  return (
    <Router className="App">
        <Switch>
          <Route exact path="/admin/login"><AdminLogin/></Route>
          <Route exact path="/admin">
            <Topbar/>
            <div className="container1">
              <Sidebar/>
              <AdminHome/>
            </div>
          </Route>
          <Route exact path="/admin/cars/statistic">
            <Topbar/>
            <div className="container1">
              <Sidebar/>
              <CarStatistic/>
            </div>
          </Route>
          <Route exact path="/admin/cars/statistic/bills/:car_id?/:start_date?/:end_date?">
            <Topbar/>
            <div className="container1">
              <Sidebar/>
              <BillByCar/>
            </div>
          </Route>
          <Route exact path="/admin/bills/bill_detail/:id">
            <Topbar/>
            <div className="container1">
              <Sidebar/>
              <BillDetail/>
            </div>
          </Route>
          <Route exact path="/admin/bills/confirm">
            <Topbar/>
            <div className="container1">
              <Sidebar/>
              <BillList/>
            </div>
          </Route>
          <Route exact path="/admin/bills/confirm/:id">
            <Topbar/>
            <div className="container1">
              <Sidebar/>
              <ConfirmBill/>
            </div>
          </Route>



          <Route exact path="/" component={UserHome} /> 
            <Route path="/login" component={UserLogin} />  
            <Route path="/book">
              <Protected Cmp={ChooseCar}/>
            </Route>
            <Route path="/detail/:id">
              <Protected Cmp={CarDetail}/>
            </Route>
            <Route path="/Success/">
              <Protected Cmp={Success}/>
            </Route>

          

        </Switch>
    </Router>
  );
}

export default App;
