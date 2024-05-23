// import logo from "./logo.svg";
import "./App.css";
import { useMemo, useState } from "react";
// import ClassCount from "./components/ClassCount";
// import Post from "./components/Post";
import PostList from "./components/PostList";
import MyButton from "./UI/Button/MyButton";
// import MyInput from "./UI/Input/MyInput";
import PostForm from "./components/PostForm";
// import PostNull from "./components/PostForm";
// import MySelect from "./UI/Select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./UI/Modal/MyModal";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: " - это язык программирования" },
    { id: 2, title: "C++", body: " - это язык программирования" },
    // { id: 3, title: "Java", body: " - это язык программирования" },
    // { id: 4, title: "C", body: " - это язык программирования" },
    // { id: 5, title: "C#", body: " - это язык программирования" },
    // { id: 6, title: "Laravel", body: " - это язык программирования" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      console.log("Обработка функции завершена - Успешно!");
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton
        onClick={() => {
          setModal(true);
        }}
      >
        Создать Пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}></PostForm>
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Список постов - Языки программирования"}
      ></PostList>
    </div>
  );
}

export default App;
