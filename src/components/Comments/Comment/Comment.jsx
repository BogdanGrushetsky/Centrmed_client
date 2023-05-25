import React from 'react'

import './comment.css';

import CommentImg from '../../../images/comment_1.png';

function Comment({ name, desc, sub }) {
  return (
    <div className="comment">
      <img src={CommentImg} alt="Comment" className="comment_img" />
      <div className="comment_title">{name}</div>
      <div className="comment_subtitle">{sub}</div>
      <div className="comment_text">{desc}
      </div>
    </div>
  )
}

export default Comment