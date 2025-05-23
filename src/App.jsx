import { ArticlesContainer } from "./components/ArticlesContainer";
import Header from "./components/Header";
import MainArticle from "./components/MainArticle";
import NewContainer from "./components/NewContainer";

function App() {
  return (
    <main className="px-4 pt-6">
      <Header />
      <div className="lg:flex lg:gap-8 ">
        <MainArticle />
        <NewContainer />
      </div>
      <div className="">
        <ArticlesContainer/>        
      </div>
    </main>
  );
}

export default App;
