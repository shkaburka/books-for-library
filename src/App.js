import logo from './logo.PNG';
import card from './card.png';
import guide from './guide.png';
import map from './lib_map.png';
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
          <p>Разом ми можемо це зробити.</p>
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
          <a href="https://www.facebook.com/LUkLibrary"> Facebook </a>
          <a href="https://lukl.kyiv.ua/"> Web page </a>
          <a href="https://www.tiktok.com/@lesyalibrary?_t=8oqALFN1u1W&_r=1"> Tiktok </a>
        </div>
        <img className="box box2" src={map} alt=""/>
      </ul>

      <ul className='container'>
        <img className="box box1" src={guide} alt=""/>
        <div className="box box2">
          <h1> Як долучитись до проєкту</h1>
          <h3 style={{color:"darkorange"}}>Скористатись оплатою на сайті або віднести книгу самостійно</h3>
          <p>Обирайте книгу, тисніть замовити і сплачуйте її вартість. Протягом доби кошти будуть зараховані і книга перейде в статус ЗАБРОНЬОВАНО. У випадку, якщо кілька людей встигне забронювати одну книгу, кошти буде витрачено на інші книжечки з списку. Раз на тиждень я купую книги та передаю бібліотеці. </p>
          <p/>
          <p>Ви також можете придбати та віднести книгу самостійно, тоді бібліотекарі повідомлять, що вона вже не потрібна.</p>
          <p/>
          <p>Ще є опція просто підтримати проєкт донатом на банку, не обираючи книги.</p>
          <a href="https://send.monobank.ua/jar/8zWoDt5t2Q"> Просто тисніть сюди </a>
        </div>
      </ul>

      <ul className="container"  style={{backgroundColor:'DarkSeaGreen', color:'black'}}>
        <h2>Нові запити</h2>
      </ul>
      
      <ul className="container">
        {NewBooks.map((data, index) => { return (<BookCard key={index} data={data} />); })}
      </ul>
      
      <ul className="container"  style={{backgroundColor:'darkgrey', color:'white'}}>
        <h2>Передано бібліотеці</h2>
      </ul>
      
      <ul className="container">
        {PurchasedBooks.map((data, index) => { return (<BookCard key={index} data={data} />); })}
      </ul>
    </div>
  );
};

export default App;
