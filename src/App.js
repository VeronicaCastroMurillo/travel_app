import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import LoadingButtonGroup from './components/boton';
import "bootstrap/dist/css/bootstrap.min.css";
import FormPropsTextFields from './components/form';
import SelectTextFields from './components/countrySelector';
import CompleteForm from './views/CompleteForm';
import StickyHeadTable from './views/list';
import Login from './views/sign-up';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route path='/list' Component={StickyHeadTable}/>
          <Route path='/form' Component={CompleteForm}/>
          <Route path='/login' Component={Login}/>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
