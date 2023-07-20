import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import  Alert  from "./components/Alert";
import Contact from "./components/Contact";
import NoteState2 from "./context/notes/NoteState2";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <NoteState>
        <NoteState2>
        <BrowserRouter>
          <Navbar showAlert = {showAlert}/>
          <Alert alert = {alert}/>
          <div className="container">
            <Routes>
              <Route exact path="" element={<Home showAlert ={showAlert}/>}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              <Route exact path="/login" element={<Login showAlert ={showAlert}/>}></Route>
              <Route exact path="/signup" element={<Signup showAlert ={showAlert}/>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
        </NoteState2>
      </NoteState>

    </>
  );
}

export default App;
