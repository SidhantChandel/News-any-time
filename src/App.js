import React, { Component } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {

  render() {

  
    return (
      <>
      <div className='container'>
      {/* <News category = 'sports' /> */}
       <Router>
       <Navbar/>        
        <Routes>
        <Route path='/' element = {<News key = "general" category = 'general' />}/>
        <Route path='/india' element = {<News key = "india" category = 'india' />}/>
        <Route path='/world' element = {<News key = "world" category = 'world' />}/>
        <Route path='/finance' element = {<News key = "finance" category = 'finance' />}/>
        <Route path='/entertainment' element = {<News key = " entertainment" category = 'entertainment' />}/>
        <Route path='/cricket' element = {<News key = "cricket" category = 'cricket' />}/>
        <Route path='/football' element = {<News key = "football" category = 'football' />}/>
        <Route path='/others' element = {<News key = "sports" category = 'sports' />}/>
        </Routes>
        </Router>
      
      </div>
       <hr />
       <hr />
       <Footer/>
       </>
    )
  }
}