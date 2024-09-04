const mono_url = "https://send.monobank.ua/jar/8zWoDt5t2Q"

function BookCard(book_name="", image_url="", descr="", purchased=false){
  
  if (purchased){
    return (
      <button disabled={true}>
        <img src={image_url} height={300} alt=""/>
        <p>{book_name}</p>
        <div>ВИКОНАНО</div>
      </button>
      );
  }
  else{
    return (
      <button onClick={button_clicked} style={{backgroundColor: 'DarkSeaGreen', cursor: "pointer"}}>
        <img src={image_url} height={300} alt=""/>
        <p>{book_name}</p>
        <p>{descr}</p>
        <a href={mono_url}>ЗАБРОНЮВАТИ І ОПЛАТИТИ</a>
      </button>
      );
  }
}

function button_clicked(){
  window.open(mono_url , "_blank", "noreferrer");
}

export default BookCard;