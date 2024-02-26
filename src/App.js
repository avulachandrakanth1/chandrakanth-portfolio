import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Routes,Route, Switch} from 'react-router-dom'
import Home from "./Pages/Home/Home";


function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />        
        <Home/>
      </div>
    </BrowserRouter>
  );
}

export default App;
