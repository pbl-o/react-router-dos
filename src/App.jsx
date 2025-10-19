import "./App.css";
import MyNavbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Register from "./pages/Register.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Pizza from "./pages/Pizza.jsx";
import Profile from "./components/Profile.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext.jsx";

function App() {
  const {token} = useContext(UserContext)

  useEffect(()=>{
    console.log(token)
  },[token])
  return (
    <>
  
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={!token || token === false ? <Login/> : <Navigate to='/'/>}></Route>
            <Route path="/register" element={!token || token === false ? <Register/> : <Navigate to='/'/>}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/pizza/:pid" element={<Pizza />}></Route>
            <Route path={"/profile"}element={token === true ? <Profile/> : <Navigate to='/login'/>}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />

    </>
  );
}

/* 
  
Soluciones provisorias: 

Login.jsx
Para el Login, el email "almacenado" es: 'email' y la contraseña: 'theSuperPassword'
   
 */
export default App;
