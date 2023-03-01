import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Texttform from "./components/Form";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";


// import {
//   BrowserRouter as Router,
//   Link,
//   Routes
// } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";

function App() {
  const [mode, setDarkmode] = useState("light"); //Weather dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setDarkmode("dark");
      document.body.style.backgroundColor = "black";
      setAlert("Dark mode has been enabled!", "success");
    } else {
      setDarkmode("light");
      document.body.style.backgroundColor = "white";
      setAlert("Light mode has been enabled!", "success");
    }
  };
  const [alert, showalert] = useState(null);

  const setAlert = (messege, type) => {
    showalert({
      msg: messege,
      type: type,
    });

    setTimeout(() => {
      showalert(null);
    }, 1500);
  };

  return (
    <>

        {/* <Router> */}
      <Navbar title="Tulip" pricetag="$" mode={mode} toggleMode={toggleMode} />
    
      <div className="container mb-3">
      <Alert alert={alert} />
  
      {/* /users---> Component 1
      /users/home----> Component 2
                                */}
      
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
          {/* <Route exact path="/" element={<Texttform setAlert={setAlert} heading="Text Analyzer" lable="Enter the text here to analyze" mode={mode}/>}/> */}
        {/* </Routes> */}
        <Texttform setAlert={setAlert} heading="Text Analyzer" lable="Enter the text here to analyze" mode={mode}/>


      
        {/* <About/> */}
      </div>
    {/* </Router> */}
      
    </>
  );
}

export default App;
