import React from 'react';
// import axios from 'axios';
import api from './services/api';
import swal from 'sweetalert2'
import PlayerInput from './PlayerInput';
import PlayerPanel from './PlayerPanel';

class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                {
                    id: 'One',
                    username: '',
                    img: ''
                },
                {
                    id: 'Two',
                    username: '',
                    img: ''
                }
            ]
        }
    }

    handleSubmit = (username, id) => {
        console.log('from battle comp', username)
        // axios.get(`https://api.github.com/users/${username}`)
        //     .then(({ data }) => {

        api.getUser(username).then(data => {
            console.log(data)
            var playerIdx = this.state.players.findIndex(player => player.id === id)
            var player = { ...this.state.players[playerIdx] }
            player.img = data.avatar_url;
            player.repCount = data.public_repos;
            player.followers = data.followers;
            player.following = data.following;
            player.username = username;
            var players = this.state.players.slice();
            players[playerIdx] = player;
            this.setState({ players: players });
        })
        .catch(err=>{
            swal('User not found','try again','error')
        })
}
comparePlayers = () => {
    var playersScores = [0,0];
    var players = this.state.players;
    var keys = ['repCount','followers','following']
    keys.forEach(key=>{
        var p1 = +players[0][key]
        var p2 = +players[1][key]
        if (p1 > p2) playersScores[0]++
        else if(p1 < p2) playersScores[1]++
    })
    console.log(playersScores)
    var winner = playersScores[0] > playersScores[1] ? players[0] : players[1];
    swal('We got a winner!',`${winner.username} is an ultra developer!`,'info')
}

render() {
    //create the players map func
    var playerPanels = this.state.players.map(player => {
        return (
            !player.name && !player.img ?
                <div key={player.id}>
                    <PlayerInput id={player.id} handleSubmit={this.handleSubmit} />
                </div> :
                <div key={player.id}>
                    <PlayerPanel player={player} />
                </div>)
    })

    return (
        <section>
            <h1>Battle</h1>
            {this.state.players[0].username && this.state.players[1].username && <button onClick={this.comparePlayers}> Fight </button>}
            <div className="player-panels">
                {playerPanels}
            </div>
        </section>
    )
}
}

export default Battle;
