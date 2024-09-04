import logo from './logo.jpg';
import './App.css';
import './components/NewBooks.jsx';
import './components/PurchasedBooks.jsx';
import NewBooks from './components/NewBooks.jsx';
import PurchasedBooks from './components/PurchasedBooks.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Книги для бібліотеки Лесі Українки</h1> */}
        <img src={logo} alt="logo" />
      </header>
      <h2>Нові запити:</h2>
          <NewBooks/>
      <h2>Виконані запити:</h2>
          <PurchasedBooks/>
    </div>
  );
}

export default App;
