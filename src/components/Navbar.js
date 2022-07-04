import React, { Component } from 'react'

export default class Navbar extends Component {
     mystyle = {
        color:'white',
    };
  render() {
    return (
      <div><nav className="navbar navbar-expand-lg bg-primary fixed-top" style = {{color:'white'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={this.mystyle}>Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={this.mystyle}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={this.mystyle}>Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" style={this.mystyle} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor:'blue'}}>
                <li><a className="dropdown-item" href="#"style={this.mystyle}>Action</a></li>
                <li><a className="dropdown-item" href="#"style={this.mystyle}>Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#" style={this.mystyle}>Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" style={this.mystyle}>Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit" style={{color:'red',backgroundColor:'black'}}>Search</button>
          </form>
        </div>
      </div>
    </nav></div>
    )
  }
}
