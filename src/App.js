import { useState } from "react";
import './App.css';
import routes from "./config/routes";
import { Routes, Route } from "react-router-dom";
import { logoutWs } from "./services/auth-ws";
import { useNavigate } from "react-router-dom";
import {Navbar} from './components'



function App() {

  const [user, setUser] = useState(null);
 
  const navigate = useNavigate();
  function authentication(user) {
    setUser(user);
  }

  function handleLogout() {
  
        logoutWs().then((res) => {
          const { data, status, errorMessage } = res;

          if (status) {
            navigate("/");
            setUser(null);
          } else {
            alert(errorMessage);
          }
        });
      }

  return (
    <div className="App">
      
<Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        {routes({ user, authentication }).map(
          ({ path, element }, index_route) => (
            <Route key={path} {...{ path, element }} />
          )
        )}
      </Routes>


    </div>
  );
}

export default App;
