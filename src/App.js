
import './App.css';
// import Clonereact from './Components/Clonereact';
// import Navbar from './Components/Navbar';
import Todo from './Components/Todo';
// import ControlledForm from './Components/controlledForm';
// import FetchEffects from './Components/useEffectHook';

// import Home from './Pages/Home';
// import Login from './Pages/Login';
import { BrowserRouter, Routes, } from 'react-router-dom'
// import LandingSection from './portfolio/Landing';
// import Project from './portfolio/Project';
// import Contact from './portfolio/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* those routes that are to be rendered every where are in this block called Broser router */}
        <Todo />
        <Routes>
          {/* It takes the routes and render them, on route */}
          {/* <Route exact path='/' element={< Todo />} />
          <Route exact path='/form' element={<ControlledForm />} />
          <Route exact path='/effect' element={<FetchEffects />} />
          <Route exact path='/signup' element={<Login />} /> */}
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
