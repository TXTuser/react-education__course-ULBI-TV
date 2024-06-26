import React from "react";
import MyButton from "../UI/Button/MyButton";

const Post = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>
          {/* {props.post.title}  */}
          {props.post.body}
        </div>
      </div>
      <div className="post__btn">
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default Post;
