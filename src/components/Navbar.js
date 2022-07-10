import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
     mystyle = {
        color:'white',
    };
  render() {
    return (
      <div><nav className="navbar navbar-expand-lg bg-primary fixed-top" style = {{color:'white'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={this.mystyle}>NEWS GLOBAL</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/world" style={this.mystyle}>World</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/india" style={this.mystyle}>India</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/finance" style={this.mystyle}>Finance</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment" style={this.mystyle}>Entertainment</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to ="/sports" style={this.mystyle} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sports
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor:'#0D6efe',color :'black'}}>
                <li><Link className="dropdown-item" to="/cricket">Cricket</Link></li>
                <li><Link className="dropdown-item" to="/football">Football</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/others">Others</Link></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit" style={{color:'red',backgroundColor:'black'}}>Search</button>
          </form>
        </div>
        </div>
      </div>
    </nav></div>
    )
  }
}
