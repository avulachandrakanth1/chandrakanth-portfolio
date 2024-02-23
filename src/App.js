import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Routes,Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
