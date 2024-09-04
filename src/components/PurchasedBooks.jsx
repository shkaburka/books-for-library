import BookCard from "./BookCard";

function PurchasedBooks(){
  const book1 = BookCard("Катананхе", "https://sens.in.ua/content/images/10/1000x1200l80mc0/katanankhe-46346748233751.webp", "", true)
  const book2 = BookCard("Їсти, молитися, кохати", "https://static.yakaboo.ua/media/catalog/product/i/s/istu_molutus_kohatu_0.png", "", true)
  return <div>{book1} {book2} </div>
}

export default PurchasedBooks;