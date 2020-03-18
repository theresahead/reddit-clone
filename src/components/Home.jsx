import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import Posts from './Posts';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  // const goBack = previous;

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
  // tbd
  return (
    <>
      <Posts list={posts} />
      <Pagination
        previous={() => {
          getPostData(previous);
        }}
        next={() => {
          getPostData(next);
        }}
      />
    </>
  );
};

export default Home;
