import React from "react";

const Post = (props) => {
return (
<div className="post">
      <div className="post__content">
        <strong>{props.number}. {props.post.title}</strong>
        <div>
         {props.post.title} {props.post.body}
        </div>
      </div>
      <div className="post__btn">
        <button>Удалить</button>
      </div>
    </div>
)
}

export default Post