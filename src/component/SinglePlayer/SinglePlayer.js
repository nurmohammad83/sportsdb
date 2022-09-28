import React from "react";

const SinglePlayer = ({ player, cart, setCart }) => {
  const { idPlayer, strNationality, strPlayer, strDescriptionEN, strCutout } =
    player;

  const heandelAddToCart = () => {
    const info = {
      idPlayer,
      strNationality,
      strPlayer,
      strDescriptionEN,
      strCutout,
    };
    if (cart) {
      const newPlayer = [...cart, info];
      setCart(newPlayer);
    }
  };
 const hendelBookmark=()=>{
  const info={
    idPlayer,
    strNationality,
    strPlayer,
    strDescriptionEN,
    strCutout,
    quantity:1,
    bookmark:'true'
  };
  const prvBookmark=localStorage.getItem("bookmark")
  const oldBookmark = JSON.parse(prvBookmark)
  if(oldBookmark){
    const isExit = oldBookmark.find(p=> p.idPlayer === idPlayer)
    if(isExit){
    isExit.quantity= isExit.quantity +1
    localStorage.setItem("bookmark",JSON.stringify(oldBookmark))
      alert('alradey bookmark')
      return;
    }else{

      localStorage.setItem("bookmark",JSON.stringify([...oldBookmark,info]))
    }
   
  }else{
    localStorage.setItem("bookmark",JSON.stringify
    ([info]))


  }
 }
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl" data-aso="zoom-in">
        <figure>
          <img className="w-full" src={strCutout} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strPlayer}</h2>
          <p>
            {strDescriptionEN
              ? strDescriptionEN?.slice(0, 60)
              : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro minus ipsum, saepe tempora a quia pariatur unde culpa inventore corporis."}
          </p>
          <div className="flex gap-2">
            <button className="btn btn-primary">Details</button>
            <button onClick={hendelBookmark} className="btn btn-secondary">BookMark</button>
            <button onClick={heandelAddToCart} className="btn btn-accent">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
