import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Comments = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  function getCommentData() {
    axios({
      method: 'get',
      baseURL: 'https://www.reddit.com',
      url: `/comments/${id}.json`,
    }).then((res) => {
      setComments(res.data[1].data.children);
    });
  }

  useEffect(() => {
    getCommentData();
  }, []);

  const listItems = comments.map((comment) => (
    <li className="list-group-item" key={comment.data.id}>
      {comment.data.body}
    </li>
  ));

  return (
    <>
      <ul className="list-group">
        <li className="list-group-item list-group-item-primary">
          <h2>Comments:</h2>
        </li>
        {listItems}
      </ul>
    </>
  );
};

export default Comments;
