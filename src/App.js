import { Component } from 'react';
import React from 'react';
import './App.css';

class App extends Component{
  state = {
    counter: 0,
      posts: []
    }

    componentDidMount() {
      this.loadPosts();
    }

    loadPosts = async () => {
      const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
      const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
      
      const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
      const postsJson = await posts.json();
      const photosJson = await photos.json();

      const postsAndPhotos = postsJson.map(( posts, index) => {
        return { ...posts, cover: photosJson[index].url}
      });

      this.setState({ posts: postsAndPhotos});
    }
  render(){
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map( post => (
            <div className="postCard">
              <img src={post.cover} alt={post.title} />
              <div className='postContent' key={post.id}>
                <h1 className='titleBody'>{post.title}</h1>
                <p className='contentBody'>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
