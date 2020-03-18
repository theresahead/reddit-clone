import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './assets/sass/index.scss';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [after, setAfter] = useState(null);
  // const [permalink, setPermalink] = useState(null);

  // const commentsEndpoint = "https://www.reddit.com" + commentId + ".json";

  useEffect(() => {
    const category = 'top';
    console.log('1 after', after);
    // console.log('1 permalink', permalink);
    axios({
      method: 'get',
      baseURL: 'https://www.reddit.com',
      url: `/r/all/${category}.json`,
      params: {
        limit: 5,
        after,
      },
    }).then((res) => {
      const after = res.data.data.after;
      const post = res.data.data.children;
      // const permalink = res.data.data.children.permalink;
      console.log('2 after', after);
      // console.log('2 permalink', permalink);
      console.log('posts', post);
      setAfter(after);
      // setPermalink(permalink);
      setPosts(post);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Header title="Reddit Client" />
            <Posts list={posts} />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
