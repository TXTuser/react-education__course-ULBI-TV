import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import ClassCount from "./components/ClassCount";
import Post from "./components/Post";
import PostList from "./components/PostList";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    // { id: 1, title: "JavaScript", body: " - это язык программирования" },
    // { id: 2, title: "C++", body: " - это язык программирования" },
    // { id: 3, title: "Java", body: " - это язык программирования" },
    // { id: 4, title: "C", body: " - это язык программирования" },
    // { id: 5, title: "C#", body: " - это язык программирования" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}></PostForm>
      <PostList remove={removePost} posts={posts} title={"Список постов #1"}></PostList>
    </div>
  );
}

export default App;
