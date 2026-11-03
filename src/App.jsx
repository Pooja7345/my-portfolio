// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/navbar.jsx";
import Footer from './components/Footer'

const App = () => {
    return(
    <div>
        <Navbar/>
        <Routes>
            <Route path= '/' element={<Home />}/>
            </Routes>
            <Footer />
            </div>
        )
        }

export default App



