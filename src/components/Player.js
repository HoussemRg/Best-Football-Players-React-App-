import React from "react";


function Player(props){
    return(
        <div className="col col-12 col-sm-6 col-md-4 col-lg-2" style={{width:'250px'}}>
            <div className="card">
                <div className="card-header">
                    <img src={props.src} alt={props.id} style={{maxWidth:'100%'}}></img>
                </div>
                <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.club}</p>
                </div>
            </div>
        </div>
    );
}

export default Player;