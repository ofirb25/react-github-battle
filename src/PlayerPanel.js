import React from 'react';

function PlayerPanel (props) {
    return (
        <section className="panel">
            <h4>{props.player.username} </h4> 
            <span>following {props.player.following} users</span>
            <span>has {props.player.repCount} public reps</span>
            <img className="avatar" key={props.player.id} src={props.player.img} />
        </section>
    )
}

export default PlayerPanel