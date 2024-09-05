import logo from './logo.PNG';
import card from './card.png';
import guide from './guide.png';
import map from './map.png';
import './App.css';
import BookCard from "./components/BookCard";
import NewBooks from './data/BooksData.json';
import PurchasedBooks from './data/ArchivedBooksData.json';

function App() {

  return (
    <div>
      <header className="App-header" >
        <img src={logo} alt="" style={{alignSelf: 'stretch', maxHeight: '80vh'}}/>
      </header>

      <ul className="container">
        <img src={card} alt="" width="30%"/>
        <div style={{border: "solid 15px transparent"}}>
          <h1> Давайте знайомитись</h1>
          <h3 style={{color:"darkorange"}}>Мене звуть Ліля і це мій проєкт з лагідної українізації</h3>
          <p>Мова йде про ініціативу з наповнення мережі бібліотек імені Лесі Українки новими книжками. </p>
          <p>Бібліотекарки надсилають мені запити на літературу, яку просили читачі і не знайшли, а у вас є можливість придбати цю книжку для них! </p>
          <p/>
          <p>Може ви спитаєте для чого взагалі ще існують бібліотеки? </p>
          <p>В бібліотеки ходить багато вимушено переселених людей, та тих хто не може тримати велику книжкову полицю вдома, часто ходять з дітками, адже дитячі книжки маленькі і швидко набридають. </p>
          <p>Дуже хочеться щоб більше людей мало доступ до якісної літератури українською, хочеться бачити на полицях красиві сучасні книги. </p>
          <p>Разом ми можемо це зробити.</p>
          <p/>
        </div>
      </ul>
    
      <ul className="container"  style={{backgroundColor:'DarkSeaGreen', color:'black'}}>
        <div style={{border: "solid 15px transparent"}}>
          <h2>Про бібліотеку</h2>
          <h3 style={{color:"white"}}>Публічна бібліотека імені Лесі Українки</h3>
          <p>Адреса бібліотеки: 04053, м. Київ, вул. Олександра Кониського, 83-85</p>
          <p>е-mail: lubibl@ukr.net, тел.: (+38-044) 486-01-46</p>
          <h3>Вебресурси:</h3>
          <a href="https://www.facebook.com/LUkLibrary"> Facebook </a>
          <a href="https://lukl.kyiv.ua/"> Web page </a>
          <a href="https://www.tiktok.com/@lesyalibrary?_t=8oqALFN1u1W&_r=1"> Tiktok </a>
        </div>
        <img src={map} alt="" width="30%"/>
      </ul>

      <ul className="container">
        <img src={guide} alt="" width="50%"/>
        <div style={{border: "solid 15px transparent"}}>
          <h1> Як долучитись до проєкту</h1>
          <h3 style={{color:"darkorange"}}>Мене звуть Ліля і це мій проєкт з лагідної українізації</h3>
          <p>Мова йде про ініціативу з наповнення мережі бібліотек імені Лесі Українки новими книжками. </p>
          <p>Бібліотекарки надсилають мені запити на літературу, яку просили читачі і не знайшли, а у вас є можливість придбати цю книжку для них! </p>
          <p/>
          <p>Може ви спитаєте для чого взагалі ще існують бібліотеки? </p>
          <p>В бібліотеки ходить багато вимушено переселених людей, та тих хто не може тримати велику книжкову полицю вдома, часто ходять з дітками, адже дитячі книжки маленькі і швидко набридають. </p>
          <p>Дуже хочеться щоб більше людей мало доступ до якісної літератури українською, хочеться бачити на полицях красиві сучасні книги. </p>
          <p>Разом ми можемо це зробити.</p>
          <p/>
        </div>
      </ul>
      <ul className="container"  style={{backgroundColor:'white', color:'black'}}>
        <h2>Нові запити</h2>
        <ul className="w-auto">
          {NewBooks.map((data, index) => { return (<BookCard key={index} data={data} />); })}
        </ul>
      </ul>
      <ul className="container"  style={{backgroundColor:'DarkSeaGreen', color:'black'}}>
        <ul className="w-auto">
          {PurchasedBooks.map((data, index) => { return (<BookCard key={index} data={data} />); })}
        </ul>
        <h2>Передано бібліотеці</h2>
      </ul>
    </div>
  );
};

export default App;
