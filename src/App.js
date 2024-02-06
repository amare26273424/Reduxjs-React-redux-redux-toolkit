import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector} from 'react-redux';

function App() {

  const  isloggedin = useSelector((state)=> state.auth.isloggedin)

  return (
    <div className="App">

      {isloggedin?   <Layout />:<Auth />
     
     }
      
    </div>
  );
}

export default App;
