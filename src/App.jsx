import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './assets/sass/index.scss';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  // const commentsEndpoint = "https://www.reddit.com" + commentId + ".json";
  // commentId is permalink

  function getPostData(redditAfterValue) {
    const category = 'top';

    axios({
      method: 'get',
      baseURL: 'https://www.reddit.com',
      url: `/r/all/${category}.json`,
      params: {
        limit: 5,
        after: redditAfterValue,
        count: 5,
      },
    }).then((res) => {
      const post = res.data.data.children;
      setPosts(post);

      const nextPosts = res.data.data.after;

      setNext(nextPosts);

      // TODO: previous functionality
      setPrevious(next);
    });
  }

  useEffect(() => {
    getPostData(next);
  }, []);

  console.log('next: ', next);
  console.log('previous: ', previous);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Header title="Reddit Client" />
            <Posts list={posts} />
            <Pagination
              previous={() => {
                getPostData(previous);
              }}
              next={() => {
                getPostData(next);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
