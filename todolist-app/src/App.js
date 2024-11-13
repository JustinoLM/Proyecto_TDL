import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import SiteFooter from './components/Common/SiteFooter';
import SiteNav from './components/Common/SiteNav';
import Homepage from './components/home/HomePage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';


function App() {
  return (
    <div>
      <SiteNav/>
      <Routes>
        <Route path='*' element={<Homepage/>}/>
        <Route path='/' exact={true} element={<Homepage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
      <SiteFooter/>
    </div>
  );
}

export default App;
