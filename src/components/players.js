import React,{useState} from "react";
import Player from "./Player";
import playersInfo from "./PlayersInfo";

function Players(){
    
    const [state,setState]=useState({
        newPlayersInfo:[],
        counter:0
    });
    const handleClick=()=>{
        if(state.newPlayersInfo.length<playersInfo.length){
            const updatedPlayers = [...state.newPlayersInfo];
            updatedPlayers.push(playersInfo[state.counter]);
            setState(previousState=>({
                newPlayersInfo:updatedPlayers,
                counter:previousState.counter+1,
            }));
        }
    };
        const  newArr =state.newPlayersInfo.map((player)=>
        <Player 
        key={player.id}
        src={player.img}
        name={player.name}
        club={player.club} />);
    return (
        <>
            <button className='btn btn-warning' style={{width:'100%',marginBottom:30}} onClick={handleClick}>Click On Me</button>
            <div className='row'>{newArr}</div>
        </>
    );
}

export default Players ;