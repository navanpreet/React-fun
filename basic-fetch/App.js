import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stories: []
    }; 
  }

  componentDidMount(){
    const topStories = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    const storyUrlBase = 'https://hacker-news.firebaseio.com/v0/item/';
    fetch(topStories)
      .then((res) => (res.json()))
      .then((res) => {
        return res.map((id) => {
          let url = storyUrlBase + id + '.json';
          return fetch(url).then((res) => {
            return res.json()
          });
        })
      })
      .then((promises) => {
        return Promise.all(promises)
      })
      .then((stories) => {
        this.setState({stories});
      })   
  }
  render() {
    let views = <div>Loading...</div>;
    let {stories} = this.state;
    if(stories.length){
      views = stories.map((story) => {
        return <p key={story.id}><a href={story.url}>{story.title}</a> from {story.by}</p>
      })
    }
    return (
      <div className="App">
       <h2>Hacker News Top Stories</h2>
       {views}
      </div>
    );
  }
}

export default App;
