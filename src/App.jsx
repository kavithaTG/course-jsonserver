import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Register from './pages/Register'
import Nav from './pages/Nav'
import Coursedetail from './pages/Coursedetail'
import Detail from './pages/Detail'
import Delete from './pages/Delete'
import Update from './pages/Update'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <div className="appmaindiv">
        <div className="approuterdiv">
           <Router>
            <Nav/>
            <Routes>
                <Route path="/" element={<Register/>}></Route>
                <Route path='/coursedetail' element={<Coursedetail/>}></Route>
                <Route path="/Detail" element={<Detail/>}></Route>
                <Route path='/Delete/:id' element={<Delete/>}></Route>
                <Route path='/Update/:id' element={<Update/>}></Route>
            </Routes>
           </Router>

        </div>
    </div>
  )
}

export default App