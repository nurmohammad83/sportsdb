import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';

const Players = ({players,cart,setCart}) => {
   
    return (
        <div className='grid grid-cols-3 gap-4 pt-5'>
           
            {
                players.map(pd=> <SinglePlayer cart={cart} setCart={setCart} player={pd} key={pd.idPlayer}></SinglePlayer>)
            }
        </div>
    );
};

export default Players;