import React, { Component } from "react";
import NewsComponent from "./NewsComponent";

export default class News extends Component {
  constructor() {
    super();
    console.log("hey this is the");
    this.state = {
      articles: [],
      loding: false,
      page :1
    };
  }

previousPage =async()=>{
  let url =
  `https://newsapi.org/v2/everything?q=india&from=2022-07-02&to=2022-07-02&sortBy=popularity&apiKey=343bacff2e9b4e31affb264d8bbc7e21&page=${this.state.page -1}&pagesize=20`;
let data = await fetch(url);
let content = await data.json();
this.setState({ articles: content.articles });
this.setState({page:this.state.page - 1 })

}
nextPage =async()=>{
  let url =
  `https://newsapi.org/v2/everything?q=india&from=2022-07-02&to=2022-07-02&sortBy=popularity&apiKey=343bacff2e9b4e31affb264d8bbc7e21&page=${this.state.page +1}&pagesize=20`;
let data = await fetch(url);
let content = await data.json();
this.setState({ articles: content.articles });
this.setState({page:this.state.page + 1 });
console.log(this.state.totalresults);
}


 
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/everything?q=india&from=2022-07-02&to=2022-07-02&sortBy=popularity&apiKey=343bacff2e9b4e31affb264d8bbc7e21&page=${this.state.page}&pagesize=20`;
    let data = await fetch(url);
    let content = await data.json();
    this.setState({ articles: content.articles,totalresults:content.totalresults});
    console.log(this.state.totalresults);
  }
  render() {
    return (
      <div className="mt-5">
        <h1>Top News</h1>
        <div className="row my-10 my-3" style={{ margin: "10px" }}>
          {this.state.articles.map((element) => {
            return (
              <div className="col my-2" key={element.url}>
                {" "}
                <NewsComponent title={element.title.slice(0, 100)} imageUrl={element.urlToImage} fullNews={element.url}/>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-around">
        <button type="button" disabled = {this.state.page===1} className="btn btn-primary btn-sm" onClick={this.previousPage}> &larr; Prev page</button>
        <button type="button" disabled = {this.state.page ===5} className="btn btn-primary btn-sm" onClick={this.nextPage}>Next page &rarr;</button>
        </div>
      </div>
    );
  }
}
