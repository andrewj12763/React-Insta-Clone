import React from 'react';
import './App.css';

import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar.js'
import PostContainer from './components/PostContainer/PostContainer.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer data={dummyData} />
      </div>
    );
  }
}

export default App;
