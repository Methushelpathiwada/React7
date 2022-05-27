import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import "./Page/Style.css";
import Home from "./Page/Home";
import Form from "./Page/Form";
import About from "./Page/About";
import Header from "./Page/Header";
import Edit from "./Page/Edit";
function App() {
  return (
    <div>
       <Router>
         <Header /><hr />
        <Routes>
          <Route  path='/' element={<Home />}></Route>
          <Route  path='/home' element={<Home />}></Route>
          <Route path='/form' element={<Form />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path="/Edit" element={<Edit/>}></Route>
        </Routes>
     </Router>
     
    </div>
  )


}

export default App;