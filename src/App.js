
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=20
  apikey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setprogress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    const navbarstyle ={
      backgroundColor: "black",
      color:"white"
    };
    return (
      <div>
        <Router>
        <NavBar style ={navbarstyle}/>
        <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Routes>
            <Route path='/' element={<News setprogress = {this.setprogress}  apikey={this.apikey} key='general' pageSize={this.pagezise} country='in' category='general' />}></Route>
            <Route path='/business' element={<News setprogress = {this.setprogress}  apikey={this.apikey} key='business' pageSize={this.pagezise} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News setprogress = {this.setprogress}  apikey={this.apikey} key='entertainment' pageSize={this.pagezise} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News setprogress = {this.setprogress} apikey={this.apikey}  key='health' pageSize={this.pagezise} country='in' category='health' />}></Route>
            <Route path='/science' element={<News setprogress = {this.setprogress}  apikey={this.apikey} key='science' pageSize={this.pagezise} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News setprogress = {this.setprogress}  apikey={this.apikey} key='sports' pageSize={this.pagezise} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News setprogress = {this.setprogress} apikey={this.apikey} key='technology' pageSize={this.pagezise} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

