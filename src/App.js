import logo from './logo.PNG';
import card from './card.png';
import guide from './guide.png';
import './App.css';
import BookCard from "./components/BookCard";
import NewBooks from './data/BooksData.json';
import PurchasedBooks from './data/ArchivedBooksData.json';

function App() {

  return (
    <div className="App">
      <header className="App-header" >
        <img src={logo} alt="" style={{alignSelf: 'stretch'}}/>
      </header>
      <p/>

      <h2>Давайте знайомитись</h2>
      <img src={card} alt="" style={{width: '90%'}}/>
      <h2>Як долучитись до проєкту</h2>
      <img src={guide} alt="" style={{width: '90%'}}/>
  
      <div className="grid place-items-center h-screen bg-zinc-300 p-5 text-[#454545]">
        <h2>Нові запити</h2>
        <ul className="w-auto">
          {NewBooks.map((data, index) => { return (<BookCard key={index} data={data} />); })}
        </ul>
      </div>
      <div className="grid place-items-center h-screen bg-zinc-300 p-5 text-[#454545]">
        <h2>Передано бібліотеці</h2>
        <ul className="w-auto">
          {PurchasedBooks.map((data, index) => { return (<BookCard key={index} data={data} />); })}
        </ul>
      </div>
    </div>
  );
};

export default App;
