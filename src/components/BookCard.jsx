const BookCard = ({ data }) => {
  var book_img_url = data.image_url

  if (data.price === ""){
      return (
        <button disabled={true} style={{width:250, height:350}}>
          <img src={book_img_url} height="220vh" alt=""/>
          <p style={{color: "black"}}>{data.title}</p>
          <p style={{color: "darkgrey"}} >Передано бібліотеці</p>
        </button>
        );
      }
  else if (data.price === "R"){
    return (
      <button disabled={true} style={{width:250, height:350}}>
        <img src={book_img_url} height="220vh" alt=""/>
        <p style={{color: "black"}}>{data.title}</p>
        <p style={{color: "darkorange"}}>Сплачено і очікується</p>
      </button>
      );
    }
  else{
    return (
      <button onClick={() => {window.open("https://send.monobank.ua/jar/8zWoDt5t2Q", "_blank", "noreferrer");}} 
              style={{width:250, height:350, cursor: "pointer"}}>
        <img src={book_img_url} height="220vh" alt=""/>
        <p style={{color: "black"}}>{data.title}</p>
        <p style={{color: "black"}}>{data.price}</p>
        <button style={{backgroundColor: 'DarkSeaGreen', borderStyle: "hidden", color: "darkslategrey", cursor: "pointer"}}>
          Забронювати І Оплатити
          </button>
      </button>
      );
  }
}

export default BookCard;