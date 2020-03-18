import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Posts({ list }) {
  const listItems = list.map((item) => (
    <li className="list-group-item" key={item.data.id}>
      <a href={`https://www.reddit.com${item.data.permalink}`}>
        <img src={item.data.thumbnail} alt="thumbnail" />
        {item.data.title}
      </a>
    </li>
  ));
  return <ul className="list-group">{listItems}</ul>;
}

Posts.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Posts;
