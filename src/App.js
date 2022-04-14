import './App.css';
import { Routes, Route } from "react-router-dom";
import HeadingBar from './components/HeadingBar';
import NavBar from './components/NavBar';
import BuyButton from './components/BuyButton';
import Carousel from './components/Carousel';
import Viewer from './components/Viewer';
import Contact from './components/contact/Contact'
import Login from './components/login/Login';
import Footer from './components/Footer';
import AppRouter from './components/router/AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter/>
      {/* <HeadingBar/>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Principal/>}/>
          <Route path="/login" element={<LoginTo/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
        </Routes>
      </Router>
      <Footer/> */}
    </div>
  );
}

export default App;
