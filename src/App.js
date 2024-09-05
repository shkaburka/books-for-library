import logo from './logo.PNG';
import card from './card.png';
import guide from './guide.png';
import './App.css';
import BookCard from "./components/BookCard";

const NewBooks = [
  {
    title: "Чорне біле",
    image_url: "https://readeat.com/storage/app/uploads/public/66c/4bd/29f/thumb_98397_380_600_0_0_auto.jpg",
    price: "R",
  },
  {
    title: "З жінками по-доброму не можна",
    image_url: "https://readeat.com/storage/app/uploads/public/64d/cda/801/thumb_19800_380_600_0_0_auto.jpeg",
    price: "UAH 210",
  },
  {
    title: "Шах і мат",
    image_url: "https://static.yakaboo.ua/media/catalog/product/1/e/1e49fa1e_shahmat_obl3_cr.jpg",
    price: "R",
  },
  {
    title: "Ідеальна пара",
    image_url: "https://static.yakaboo.ua/media/catalog/product/9/7/978-966-448-177-6_2_cr.jpg",
    price: "UAH 400",
  },
  {
    title: "Дім без таємниць",
    image_url: "https://static.yakaboo.ua/media/catalog/product/i/m/img416_138.jpg",
    price: "UAH 327",
  },
  {
    title: "Крамниця на вулиці Роял",
    image_url: "https://static.yakaboo.ua/media/catalog/product/1/0/1008_1_1.jpg",
    price: "R",
  },
  {
    title: "Будинок на вулиці Пританія",
    image_url: "https://static.yakaboo.ua/media/catalog/product/i/m/img026_11.jpg",
    price: "R",
  },
  {
    title: "Серед вовків",
    image_url: "https://static.yakaboo.ua/media/catalog/product/t/h/thumbnail_seredvov-1600.jpg",
    price: "UAH 304",
  },
  {
    title: "Ув’язнені брехнею",
    image_url: "https://static.yakaboo.ua/media/catalog/product/3/8/38d03d408d3064f45851994e455943ad.jpg",
    price: "UAH 280",
  },
  {
    title: "Любов сама",
    image_url: "https://readeat.com/storage/app/uploads/public/64d/cd4/3dc/thumb_19779_900_900_0_0_auto.jpeg",
    price: "R",
  },
  {
    title: "В очікуванні першого променя сонця",
    image_url: "https://static.yakaboo.ua/media/catalog/product/d/a/dall_cover_ua_4.jpg",
    price: "R",
  },
  
];
const PurchasedBooks = [
  {
    title: "Катананхе",
    image_url: "https://sens.in.ua/content/images/10/450x743l80mc0/katanankhe-19476343325694.webp",
    price: "",
  },
  {
    title: "Їсти, молитися, кохати",
    image_url: "https://static.yakaboo.ua/media/catalog/product/i/s/istu_molutus_kohatu_0.png",
    price: "",
  },
  {
    title: "Рисочка",
    image_url: "https://static.yakaboo.ua/media/catalog/product/_/_/__mockup_1_cr_1.jpg",
    price: "",
  },
  {
    title: "Нью-Йорк",
    image_url: "https://static.yakaboo.ua/media/catalog/product/1/6/1647.1800x1200w.jpg",
    price: "",
  },
  {
    title: "Сад кісток",
    image_url: "https://static.yakaboo.ua/media/catalog/product/6/2/62101_123757.jpg",
    price: "",
  },
  {
    title: "Американа",
    image_url: "https://static.yakaboo.ua/media/catalog/product/a/m/amerikana_mockup_shablon_6_1000x1000-1000x1000.jpg",
    price: "",
  },
  {
    title: "Остання бібліотека",
    image_url: "https://static.yakaboo.ua/media/catalog/product/o/s/ostannia-biblioteka-2500.1800x1200w.jpg",
    price: "",
  },
  {
    title: "Шість багряних журавлів",
    image_url: "https://static.yakaboo.ua/media/catalog/product/i/m/img224_79.jpg",
    price: "",
  },
  {
    title: "Ніщо з цього не правда",
    image_url: "https://static.yakaboo.ua/media/catalog/product/n/o/noneofthisistruesite-1500x2250_cr.jpg",
    price: "",
  },
  {
    title: "Те, що вони несли",
    image_url: "https://static.yakaboo.ua/media/catalog/product/1/_/1_1339.jpg",
    price: "",
  },
  {
    title: "Три чоловіки для Вільми",
    image_url: "https://static.yakaboo.ua/media/catalog/product/i/m/img898_1_97.jpg",
    price: "",
  },
  {
    title: "Плетений колосок",
    image_url: "https://static.yakaboo.ua/media/catalog/product/i/m/img377_156.jpg",
    price: "",
  },
  {
    title: "Доленосна зірка сестер із Тоскани",
    image_url: "https://static.yakaboo.ua/media/catalog/product/8/0/808789_1_original.jpg",
    price: "",
  },
  {
    title: "Запрошені",
    image_url: "https://static.yakaboo.ua/media/catalog/product/7/5/759674_1_original.jpg",
    price: "",
  },
  {
    title: "Мова-меч",
    image_url: "https://static.yakaboo.ua/media/catalog/product/p/h/photo_5264876301800557300_y.jpg",
    price: "",
  },
  {
    title: "Рецепт ідеальної дружини",
    image_url: "https://static.yakaboo.ua/media/catalog/product/3/0/307_1_5.jpg",
    price: "",
  },
  {
    title: "Залишся, якщо кохаєш",
    image_url: "https://static.yakaboo.ua/media/catalog/product/3/f/3f3f416645b59d5150e7b1ab89a49951.jpg",
    price: "",
  },
  {
    title: "Російсько-українська війна",
    image_url: "https://static.yakaboo.ua/media/catalog/product/c/o/cover_747_1.jpg",
    price: "",
  },
  {
    title: "Солодка крамничка другого шансу",
    image_url: "https://static.yakaboo.ua/media/catalog/product/s/o/solodka-kramnychka-2500.1800x1200w.jpg",
    price: "",
  },
  {
    title: "Американський експеримент із..",
    image_url: "https://static.yakaboo.ua/media/catalog/product/1/_/1_1625_1.jpg",
    price: "",
  },
  {
    title: "Цієї миті завтра",
    image_url: "https://static.yakaboo.ua/media/catalog/product/b/3/b303ff4d_tsiyei-myti-zavtra_obl3_cr.jpg",
    price: "",
  },
  {
    title: "Романтична комедія",
    image_url: "https://static.yakaboo.ua/media/catalog/product/b/o/book_romcom_zriz-le-weblast-700x740.png",
    price: "",
  },
  {
    title: "ьогодні ми намалюємо смерть",
    image_url: "https://static.yakaboo.ua/media/catalog/product/t/o/tohman_obkladynka_oblychchya.jpg",
    price: "",
  },
  {
    title: "Болото солодше за мед",
    image_url: "https://static.yakaboo.ua/media/catalog/product/r/e/rejmer_obkladynka_oblychchya.jpg",
    price: "",
  },
  {
    title: "Дім у волошковому морі",
    image_url: "https://static.yakaboo.ua/media/catalog/product/f/1/f1ac43f0140d94018fef4472cb960be4.jpg",
    price: "",
  },
  {
    title: "Про що вона мовчить",
    image_url: "https://static.yakaboo.ua/media/catalog/product/i/m/img_101712.jpg",
    price: "",
  },
  {
    title: "Пам’ять про минуле Землі. Книга 1",
    image_url: "https://static.yakaboo.ua/media/catalog/product/1/_/1_25.jpeg",
    price: "",
  },
  {
    title: "Пам’ять про минуле Землі. Книга 2",
    image_url: "https://static.yakaboo.ua/media/catalog/product/1/_/1_26.jpeg",
    price: "",
  },
  {
    title: "Пам’ять про минуле Землі. Книга 3",
    image_url: "https://static.yakaboo.ua/media/catalog/product/7/5/75bf4af8e4245c37b8f72c102c0e97c1.jpg",
    price: "",
  },
  {
    title: "І тоді вона зникла",
    image_url: "https://static.yakaboo.ua/media/catalog/product/c/0/c008c97cec44be3be873473fdd5b2843.jpg",
    price: "",
  },
  {
    title: "Переплетені лози",
    image_url: "https://static.yakaboo.ua/media/catalog/product/1/_/1_1711.jpg",
    price: "",
  },
  {
    title: "Яблука від яблуні",
    image_url: "https://static.yakaboo.ua/media/catalog/product/1/1/113_1_27.jpg",
    price: "",
  },
  
];


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