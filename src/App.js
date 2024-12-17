import logo from './logo.PNG';
import card from './card.png';
import map from './lib_map.png';
import './App.css';
import BookCard from "./components/BookCard";
import NewBooks from './data/BooksData.json';

function App() {
  const sortedNewBooks = NewBooks.sort((a, b) => {
    if (a.price > b.price) return -1;
    if (a.price <= b.price) return 1;
    return 0;
  });
  return (
    <div>
      <header className="App-header" >
        <img src={logo} alt="" style={{alignSelf: 'stretch', maxHeight: '80vh'}}/>
      </header>

      <ul className='container'>
        <img className="box box1" src={card} alt="" width="80wv"/>
        <div className="box box2">
          <h1> Давайте знайомитись</h1>
          <h3 style={{color:"darkorange"}}>Мене звуть Ліля і це мій проєкт з лагідної українізації</h3>
          <p>Мова йде про ініціативу з наповнення мережі бібліотек імені Лесі Українки новими книжками. </p>
          <p>Бібліотекарки надсилають мені запити на літературу, яку просили читачі і не знайшли, а у вас є можливість придбати цю книжку для них! </p>
          <p/>
          <p>Може ви спитаєте для чого взагалі ще існують бібліотеки? </p>
          <p>В бібліотеки ходить багато вимушено переселених людей, та тих хто не може тримати велику книжкову полицю вдома, часто ходять з дітками, адже дитячі книжки маленькі і швидко набридають. </p>
          <p>Дуже хочеться щоб більше людей мало доступ до якісної літератури українською, хочеться бачити на полицях красиві сучасні книги. </p>
          <p/>
          <p>Невимовно дякую всім, хто доєднався до проєкту, разом ми передали більше сотні книг! Ми отримали дуже багато відгуків і слів подяки, як від читачів так і від бібліотеки. </p>
          <p>Якщо ви дуже хотіли долучитися і не встигли - завжди можете зайти до бібліотеки і запитати що їм потрібно </p>
          <p/>
        </div>
      </ul>
    
      <ul className='container' style={{backgroundColor:'DarkSeaGreen', color:'black'}}>
        <div className="box box1" >
          <h2>Про бібліотеку</h2>
          <h3 style={{color:"white"}}>Публічна бібліотека імені Лесі Українки</h3>
          <p>Адреса бібліотеки: 04053, м. Київ, вул. Олександра Кониського, 83-85</p>
          <p>е-mail: lubibl@ukr.net, тел.: (+38-044) 486-01-46</p>
          <h3>Вебресурси:</h3>   
          <a href="https://www.facebook.com/LUkLibrary">Facebook</a>
          <a href="https://lukl.kyiv.ua/">    Web page    </a>
          <a href="https://www.tiktok.com/@lesyalibrary?_t=8oqALFN1u1W&_r=1">    Tiktok    </a>
        </div>
        <img className="box box2" src={map} alt=""/>
      </ul>

      <ul className="container"  style={{backgroundColor:'DarkSeaGreen', color:'black'}}>
        <h2>Книжкові запити</h2>
      </ul>
      
      <ul className="container">
        {sortedNewBooks.map((data, index) => { return (<BookCard key={index} data={data} />); })}
      </ul>
    </div>
  );
};

export default App;
