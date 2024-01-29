import { Component } from 'react';
import React from 'react';

class App extends Component{
  state = {
    counter: 0,
      posts: [
        {
          id: 1,
          title: "Titulo 1",
          body: "Corpo 1"
        },
        {
          id: 2,
          title: "Titulo 2",
          body: "Corpo 2"
        },
        {
          id: 3,
          title: "Titulo 3",
          body: "Corpo 3"
        },
      ]
    }

    timeOutUpdate = null;

    componentDidMount() {
      this.handleTimeOut();
    }

    componentDidUpdate() {
      this.handleTimeOut();
    }

    componentWillUnmount() {
      clearTimeout(this.timeOutUpdate);
    }

    handleTimeOut = () => {
      const { posts, counter} = this.state;
      posts[0].title = "O titulo mudou";
      this.timeOutUpdate = setTimeout(() => {
        this.setState({
          posts, counter: counter + 1
        })
      }, 2000);
    }
  render(){
    const { posts, counter } = this.state;

    return (
      <div className="App">
        {counter}
        {posts.map( post => (
          <div className='cardBody' key={post.id}>
            <h1 className='titleBody'>{post.title}</h1>
            <p className='contentBody'>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
