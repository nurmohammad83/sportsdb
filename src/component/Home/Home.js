import React, { useEffect, useState } from "react";
import Players from "../Players/Players";
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import "./Home.css";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart]=useState([])
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data?.player));
  }, [search]);
 const handelDelete=(id)=>{
  const leftPlayer=cart.filter(pd=> pd.idPlayer !== id)
  setCart(leftPlayer)
  toast('wow!')
  Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  )
 }
  return (
    <div>
      <div className="flex  pt-4">
        <div className="left-side pl-5 pt-4">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="w-96 h-12 text-sky-500 border border-red-500"
            type="text"
          />
          <button className=" w-20 h-12 bg-secondary text-white">Search</button>
          <div className="player-container">
            <Players players={players} cart={cart} setCart={setCart}></Players>
          </div>
        </div>
        <div className="right-side w-[700px] px-5 text-xl">
          <div className="cart">
            <p className="">This is Player No: {cart.length}</p>
            {
                cart.map(p=> 
                <div className="flex mb-2">
                  <li>{p.strPlayer}</li>
                  <button onClick={()=>handelDelete(p.idPlayer)} className="text-center text-white bg-red-700 px-2 ml-2">X</button>
                </div>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
