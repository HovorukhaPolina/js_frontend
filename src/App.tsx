import "./App.css";
import { Header } from "./components/Header";
import { PostList } from "./components/PostList";
import { posts } from "./data/posts";

function App() {
  return (
    <main className="app">
      <Header
        title="Forum DEV"
        description="Найкращий форум для програмування та сучасних технологій"
      />

      <PostList posts={posts} />
    </main>
  );
}


export default App
