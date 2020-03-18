import React from 'react';

const Comments = ({ comment }) => {
  return (
    <li className="col-8 comment-item">
      <h3>{comment.data.author}</h3>
      <p>{comment.data.body}</p>
    </li>
  );
};

export default Comments;
