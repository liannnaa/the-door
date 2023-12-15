import React from 'react';
import Header from './components/Header';
import Description from './components/Description';
import Gallery from './components/Gallery';
import Review from './components/Review';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Gallery />
      <Review />
    </div>
  );
}

export default App;
