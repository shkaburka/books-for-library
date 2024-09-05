import logo from './logo.PNG';
import card from './card.png';
import guide from './guide.png';
import map from './Map.png';
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

      <button style={{width:"85%", backgroundColor:"white", color:'black'}}>
        <h2>Давайте знайомитись</h2>
        <img src={card} alt="" style={{width: '70%'}}/>
      </button>
      <p/>
      <button style={{width:"85%", backgroundColor:"white", color:'black'}}>
        <h2>Про бібліотеку</h2>
        <img src={map} height="220vh" alt=""/>
        <p>Адреса бібліотеки: 04053, м. Київ, вул. Олександра Кониського, 83-85</p>
        <p>е-mail: lubibl@ukr.net, тел.: (+38-044) 486-01-46</p>
        <p>Вебресурси:</p>
        <a style={{color:'blueviolet'}} href="https://www.facebook.com/LUkLibrary">  Facebook  </a>
        <a style={{color:'blueviolet'}} href="https://lukl.kyiv.ua/">  Web page  </a>
        <a style={{color:'blueviolet'}} href="https://www.tiktok.com/@lesyalibrary?_t=8oqALFN1u1W&_r=1">  Tiktok  </a>
      </button>
      <p/>
      <button style={{width:"85%", backgroundColor:"white", color:'black'}}>
        <h2>Як долучитись до проєкту</h2>
        <img src={guide} alt="" style={{width: '70%'}}/>
      </button>
  
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
