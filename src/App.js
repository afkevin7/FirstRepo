import './App.css';
import Header from "./components/header";
import Filter from "./components/filter"
import Cards from "./components/cards"

function App() {
  return <div className='App'>
    <Header/>
    <Filter/>
    <Cards/>
  </div>
}

export default App;
