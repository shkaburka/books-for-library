import logo from './logo.PNG';
import './App.css';
import BookCard from "./components/BookCard";

const NewBooks = [
  {
    title: "Любов сама",
    image_url: "https://readeat.com/storage/app/uploads/public/64d/cd4/3dc/thumb_19779_900_900_0_0_auto.jpeg",
    price: "UAH 180",
  },
  {
    title: "Чорне біле",
    image_url: "https://readeat.com/storage/app/uploads/public/66c/4bd/29f/thumb_98397_380_600_0_0_auto.jpg",
    price: "UAH 380",
  },
  {
    title: "З жінками по-доброму не можна",
    image_url: "https://readeat.com/storage/app/uploads/public/64d/cda/801/thumb_19800_380_600_0_0_auto.jpeg",
    price: "UAH 210",
  },
  
];

const PurchasedBooks = [
  {
    title: "Катананхе",
    image_url: "https://readeat.com/storage/app/uploads/public/66c/4bd/29f/thumb_98397_380_600_0_0_auto.jpg",
    price: "",
  },
  {
    title: "Їсти, молитися, кохати",
    image_url: "https://static.yakaboo.ua/media/catalog/product/i/s/istu_molutus_kohatu_0.png",
    price: "",
  },
  
];


function App() {

  return (
    <div className="App">
      <header className="App-header" >
        <img src={logo} alt="logo" style={{alignSelf: 'stretch'}}/>
      </header>
      <h2>Нові запити:</h2>
      <div className="grid place-items-center h-screen bg-zinc-300 p-5 text-[#454545]">
          <ul className="w-auto">
            {NewBooks.map((data, index) => {
              return (
                <BookCard
                  key={index}
                  data={data}
                />
              );
            })}
          </ul>
        </div>
        <h2>Виконані запити:</h2>
        <div className="grid place-items-center h-screen bg-zinc-300 p-5 text-[#454545]">
          <ul className="w-auto">
            {PurchasedBooks.map((data, index) => {
              return (
                <BookCard
                  key={index}
                  data={data}
                />
              );
            })}
          </ul>
        </div>
    </div>
  );
};

export default App;