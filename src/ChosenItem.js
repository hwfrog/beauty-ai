import React, { Component } from 'react';
import logo from './logo.svg';
import ButtonAppBar from './ButtonAppBar.js';
import ImgMediaCard from './ImgMediaCard.js';
import ImgDetailCard from './ImgDetailCard.js';
import ImgRecomCard from './RecomCard.js';
import DenseAppBar from './DenseAppBar.js';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div>
    //     <ButtonAppBar />
    //     <ImgMediaCard />
    //     <ImgMediaCard />
    //     <ImgMediaCard />
    //     <ImgMediaCard />
    //   </div>
    // );
    return (
      <div>
      <DenseAppBar />
      <ImgDetailCard />
      <div className={"DetailCard"}>
      <ImgRecomCard/>
      </div>
      </div>
    );
  }
}

export default App;
