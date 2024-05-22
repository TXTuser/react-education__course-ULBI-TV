import React from "react";
import { useRef, useState } from "react";
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    // setPosts([...posts, { ...post, id: Date.now() }]);
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        type="text"
        placeholder="Название поста"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Описание поста"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Опубликовать</MyButton>
    </form>
  );
};

export default PostForm;
