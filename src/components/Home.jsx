import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import Posts from './Posts';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  // Request API data based on before or after params
  // only one param can exist so set the other to null
  function getPostData(goBack, goForward) {
    const category = 'top';

    axios({
      method: 'get',
      baseURL: 'https://www.reddit.com',
      url: `/r/all/${category}.json`,
      params: {
        limit: 5,
        count: 5,
        after: goForward,
        before: goBack,
      },
    }).then((res) => {
      const post = res.data.data.children;
      setPosts(post);

      const { after, before } = res.data.data;

      setNext(after);
      setPrevious(before);
    });
  }

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      <Posts list={posts} />
      <Pagination
        // pass click events to getPostData using API before and after params
        // unused param set to null
        previous={() => {
          getPostData(previous, null);
        }}
        next={() => {
          getPostData(null, next);
        }}
      />
    </>
  );
};

export default Home;
