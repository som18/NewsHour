import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  // static defaultprops{
  //   country:'in';
  //   pagesize: 8

  // }
  // static PropTypes:{
  //   country: PropTypes.string;
  //   pagesize: PropTypes.number

  // }
   capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props){
    super(props);
    console.log("This is a constructor from News Component");
    this.state={
      articles:[],
      loading :true,
      page :1,
      
   }
   document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsHour`
  }
  async componentDidMount() {
    this.props.setprogress(10);
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    this.props.setprogress(30);
    let parseddata = await data.json();
    this.props.setprogress(70);
    console.log(parseddata);
    this.setState({articles:parseddata.articles,
      totalResults:parseddata.totalResults,
      loading:false})
      this.props.setprogress(100);
  }

  handlenextclick = async()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)){

    }
    else{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page +1}&pagesize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        this.setState({
            page: this.state.page +1,
            articles:parseddata.articles,
            loading:false
        }) 
    }
    

  }
  handlenprevclick = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page -1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
        page: this.state.page -1,
        articles:parseddata.articles,
        loading:false
    })

  }

  fetchMoreData = async() => {
   this.setState({page:this.state.page+1})
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({articles:this.state.articles.concat(parseddata.articles),
      totalResults:parseddata.totalResults,
      loading:false})
  };


  
  render() {
    return (
      <>
        <h1  style={{marginTop:'90px',textAlign:'center'}}> Top Headlines on {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading &&<Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container my-3">
        <div className="row my-3">
         {this.state.articles.map((element)=>{
           return  <div className="col-md-4 my-3" key={element.url}>
          <NewsItem title = {element.title?element.title.slice(0,50):""} description = {element.description?element.description.slice(0,100):""} imageurl = {element.urlToImage} newsurl = {element.url} author ={element.author} date = {element.publishedAt} source = {element.source.name}/>
        </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className='d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlenprevclick} >&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" class="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
        </div> */}
     </>
    )
  }
}

export default News
