import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import ArticleList from "./components/ArticleList"
import AddArticle from './components/AddArticle';

library.add(faTrash, faEdit, faPlus);

function App() {
  return (
    <div className="App">
      <AddArticle></AddArticle>
      <ArticleList></ArticleList>
    </div>
  );
}

export default App;
