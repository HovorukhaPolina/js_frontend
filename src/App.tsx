import "./App.css";
import { Header } from "./components/Header";
import { PostList } from "./components/PostList";
import AuthForm from "./components/AuthForm";
import { useGetPostsQuery } from "./api/baseApi";

function App() {
  const {data: posts = [], isLoading, isError} = useGetPostsQuery();

  return (
    <main>
      <AuthForm />
      <Header title="Post Catalog" description="НАШ ПЕРШИЙ REACT ПРОЄКТ"/>
      {isLoading && <p>Завантаження постів...</p>}
      {isError && <p>Не вдалося завантажити пости.</p>}
      {!isLoading && !isError && ( posts.length > 0 ? (<PostList posts={posts} />) : (<p>постів не знайдено</p>))}
    </main>
  );
}

export default App;