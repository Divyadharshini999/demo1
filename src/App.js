import './App.css';
import React from 'react';
// import {EmployeeList} from './Components/EmployeeList';
import Navbar1 from './components/Navbar1';
// import {Router,Routes, Route} from'react-router-dom';
import { Link, Routes, Route } from 'react-router-dom';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
// import EmployeeList from './Components/EmployeeList';


function App() {
  return (
    
    // <div className="App">
      
    //     <p>
    //     Hello welcome to React
    //     </p>
    //     </div>
      //  <BrowserRouter>
      //  <Navbar/>
      //  <MainPage/>
      //  </BrowserRouter>
  //    <> 
  //    <navbar1/>
  //    <Router>
  //     <Routes>
  //    <Route path='/' element ={<EmployeeList/>}/>
  //     {/* <Route path='/add' element ={<AddEmployee/>}/> */}
  //     </Routes>
  //  </Router>
  //  </>
    // <React.Fragment>
    // <Navbar/>
    // </React.Fragment>

    
  //   <BrowserRouter>
  //      <Navbar1/>
  //   </BrowserRouter>
  // )



  <div>
   <div className="hellowelcome"><p> Hello Welcome to React Project</p></div>
    <nav>
    
    <ul>
        <Link to="/">HOME</Link>
      </ul>

      <ul>
        <Link to="/employee">EMPLOYEE LIST</Link>
      </ul>

      <ul>
        <Link to="/add">ADD EMPLOYEE LIST</Link>
      </ul>
    </nav>


    <>

<Routes>
  <Route  path='/' element={<Navbar1/>}/>
  <Route path='/employee' element={<Employee/>}/>
  <Route  path='/add' element={<AddEmployee/>}/>
</Routes>

</>
</div>


 
  )
}


export default App;