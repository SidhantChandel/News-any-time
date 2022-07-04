import React, { Component } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import News from './components/News'
import NewsComponent from './components/NewsComponent'

export default class App extends Component {

  render() {

   
    return (
      <div style={{backgroundColor:'white'}}>
        this.c
        <Navbar/>
        <News/>
       <hr />
       <hr />
       <Footer/>
      </div>
    )
  }
}