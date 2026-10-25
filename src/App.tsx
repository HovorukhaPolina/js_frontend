import "./App.css";
import { Header } from "./components/Header";
import { PostList } from "./components/PostList";
import { useGetPostsQuery } from "./api/baseApi";

function App() {
  const{data: posts = [], isLoading, isError} = useGetPostsQuery()
  return(
    <main>
      <Header title='post Catalog' description='НАШ ПЕРШИЙ REACT ПРОЕКТ + TYPE SCRIPT'/>
      {isLoading && <p>Завантаження постів...</p>} 
      {isError && <p>Не вдалося завантажити пости</p>}
      {!isLoading && !isError && (posts.length > 0
                                  ?<PostList posts={posts}/>
                                  :<p>Постів не знайденно</p>)}
    </main>
  )
}


export default App