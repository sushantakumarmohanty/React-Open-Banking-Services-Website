import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';
import AboutUs from './pages/AboutUsContent/AboutUs';
import ContactUs from './pages/ContactUsContent/ContactUs'
import ProductList from './pages/ProductList';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/addEmpPage" component={AddEmployee} />
      <Route path="/editEmpPage/:id" component={EditEmployee} />
      <Route path="/" exact component={Home}/>
      <Route path="/about"  component={AboutUs}/>
      <Route path="/ContactUs"  component={ContactUs}/>
      <Route path="/ProductList"  component={ProductList}/>
    </Switch>
    </div>
  );
}

export default App;
