import React, { Component } from 'react';
import logo from './logo.svg';
import ButtonAppBar from './ButtonAppBar.js';
import ImgMediaCard from './ImgMediaCard.js';
import ImgDetailCard from './ImgDetailCard.js';
import ImgRecomCard from './RecomCard.js';
import DenseAppBar from './DenseAppBar.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isHome: true };
  }
  flip = ()=>{
    const newstate = !this.state.isHome;
    this.setState({isHome: newstate});
  }
  render() {
    if (this.state.isHome){
    return (
      <div>
        <ButtonAppBar />
        <ImgMediaCard flip={this.flip}/>
        <ImgMediaCard flip={this.flip}/>
        <ImgMediaCard flip={this.flip}/>
        <ImgMediaCard flip={this.flip}/>
      </div>
    );
  }
  else{
    return (
      <div>
      <DenseAppBar flip={this.flip}/>
      <ImgDetailCard />
      <ImgRecomCard/>
      </div>
    );    
  }
  }
}

export default App;
