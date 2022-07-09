import React, { Component } from "react";
import NewsComponent from "./NewsComponent";

export default class News extends Component {
  
  constructor() {
    super();
    // console.log("hey this is the");
    this.state = {
      articles: [],
      loding: false,
      totalResults :0,
      page :1,
      pageSize :20
    };
  }
previousPage =async()=>{
  let url =
  `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=343bacff2e9b4e31affb264d8bbc7e21&page=${this.state.page}&pagesize=${this.state.pageSize - 1}`;
let data = await fetch(url);
let content = await data.json();
this.setState({ articles: content.articles });
this.setState({page:this.state.page - 1 })

}
nextPage =async()=>{
  let url =
  `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=343bacff2e9b4e31affb264d8bbc7e21&page=${this.state.page}&pagesize=${this.state.pageSize + 1}`;
let data = await fetch(url);
let content = await data.json();
this.setState({ articles: content.articles });
this.setState({page:this.state.page + 1 });
console.log(this.state.totalResults);
}


 
  async componentDidMount() {
    let url =
    `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=343bacff2e9b4e31affb264d8bbc7e21&page=${this.state.page}&pagesize=${this.state.pageSize}`;
    let data = await fetch(url);
    let content = await data.json();
    this.setState({ articles: content.articles,totalResults:content.totalResults});
    console.log(this.state.totalResults);
  }
  render() {
    return (
      <div className="mt-5">
        <h1 className="container">Top News</h1>
        <div className="row my-10 my-3" style={{ margin: "10px" }}>
          {this.state.articles.map((element) => {
            return (
              // we have given this key artribute because for using map we need to give and unique identifier to the container it is giving
              <div className="col my-2" key={element.url}>
                <NewsComponent title={element.title.slice(0, 100)} imageUrl={element.urlToImage} fullNews={element.url}/>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-around">
        <button type="button" disabled = {this.state.page===1} className="btn btn-primary btn-sm" onClick={this.previousPage}> &larr; Prev page</button>
        <button type="button" disabled = {Math.ceil(this.state.totalResults/this.state.pageSize)===this.state.page} className="btn btn-primary btn-sm" onClick={this.nextPage}>Next page &rarr;</button>
        </div>
      </div>
    );
  }
}
