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

    // <News category = 'cricket' />
    return (
      <div>
       
       <Router>
       <Navbar/>        
        <Routes>
        <Route path='/' element = {<News category ='world' />}/>
        <Route path='/india' element = {<News category ='india' />}/>
        <Route path='/finance' element = {<News category ='finance' />}/>
        <Route path='/enetertainment' element = {<News category ='entertainment' />}/>
        <Route path='/cricket' element = {<News category ='cricket' />}/>
        <Route path='/football' element = {<News category ='football' />}/>
        <Route path='/sports' element = {<News category ='general' />}/>
        </Routes>
        </Router>
       <hr />
       <hr />
       <Footer/>
      </div>
    )
  }
}