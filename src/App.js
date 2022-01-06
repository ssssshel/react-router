import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About';
import Contacto from './components/Contacto';
import UserPages from './components/UserPages';
import UserPage from './components/UserPage';
import Notfound from './components/Notfound'
import Dashboard from './components/Dashboard';
import ApiCall from './components/ApiCall';
import User from './components/User';

function App() {
  return(
    <BrowserRouter>  
      <Navbar /> {/*  NAVLINK */}
      <Routes>
        <Route path='/' element={<Welcome />}/> {/* LINK*/}
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/usuarios" element={<Navigate to="/users" />} /> {/* REDIRECT*/}
        <Route path='/users' element={<UserPages />}/> {/* REDIRECT*/}
        <Route path='/users/:id' element={<UserPage />}/> {/* PARAMS */}

        <Route path="/dashboard/*" element={<Dashboard />} > {/* SUBCOMPONENTE / NESTING & NAVIGATE*/}
          <Route path="welcome" element={<p>Welcome!!!</p>} />  {/* OUTLET*/}
          <Route path='goodbye' element={<p>Goodbye</p>}/>
          
        </Route>
        <Route path="/api" element={<ApiCall />} /> {/* API CONSUME*/}
        <Route path="/api/:id" element={<User />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
