import BookCard from "./BookCard";

function NewBooks(){
  const book1 = BookCard("Любов сама", "https://readeat.com/storage/app/uploads/public/64d/cd4/3dc/thumb_19779_900_900_0_0_auto.jpeg", "UAH 180")
  const book2 = BookCard("Чорне біле", "https://readeat.com/storage/app/uploads/public/66c/4bd/29f/thumb_98397_380_600_0_0_auto.jpg", "UAH 380")
  const book3 = BookCard("З жінками по-доброму не можна", "https://readeat.com/storage/app/uploads/public/64d/cda/801/thumb_19800_380_600_0_0_auto.jpeg", "UAH 210")
//   const book4 = BookCard("Чорне біле", "book_cover_4.jpg", "UAH 380")
//   const book5 = BookCard("Чорне біле", "book_cover_5.jpg", "UAH 380")
  return <div>{book1} {book2} {book3}</div>
}

export default NewBooks;