import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // token de validación de sesión (provisorio)
  const [token, setToken] = useState(true);

  const logOut = () =>{
    
    if (token === false || !token) return ; 

    alert('Estamos cerrando su sesión...')
    setToken(false)
  }


  // Dummy de validación provisorio.
  let dummyEmail = "email";
  let dummyPassword = "theSuperPassword";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //
 

  //PROVIDER
  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        email,
        setEmail,
        password,
        setPassword,
        dummyEmail,
        dummyPassword,
        logOut
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
