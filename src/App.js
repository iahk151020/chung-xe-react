import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from './components/pages/Home';
import CarStatistic from './components/pages/car/CarStatistic';
import BillByCar from "./components/pages/bill/BillByCar";
import BillDetail from "./components/pages/bill/BillDetail";
// import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/login/Login";

import {UserHome} from "./pages/Home";
import UserLogin from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ChooseCar } from './pages/ChooseCar';
import CarDetail from './pages/CarDetail';
import Protected from './components/Protected';
import Success from './pages/Success';


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
          <Route exact path="/admin/bills/:bill_id?">
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <BillDetail/>
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
