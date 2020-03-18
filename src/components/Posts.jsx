import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Posts({ list }) {
  const listItems = list.map((item) => (
    <li className="list-group-item" key={item.data.id}>
      <Link to={`/comments/${item.data.id}`}>
        <img src={item.data.thumbnail} alt="thumbnail" />
        {item.data.title}
      </Link>
    </li>
  ));
  return <ul className="list-group">{listItems}</ul>;
}

Posts.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Posts;
