import React, { Component } from 'react'

export default class NewsComponent extends Component {

  render() {
    
    let {title,clickBait,goWhere,imageUrl,fullNews,descrption} = this.props
    return (
        <div className=" card" style={{width: '18rem'}}>
        <img src={!imageUrl?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wro5oTna2a3vNy0ZxFFYh9EI_GYLFRLpww&usqp=CAU':imageUrl} className="card-img-top" style={{height:'10rem'}} alt={title}/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{descrption}</p>
          <a href={fullNews} className="btn btn-primary btn-sm">Read More</a>
        </div>
      </div>
    )
  }
}
