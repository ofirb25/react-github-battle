import React from 'react';

class PlayerInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }
    handleChange = (e)=> {
        var { value } = e.target;
        console.log(value);
        this.setState({username:value})
    }
    handleSubmit = (e)=> {
        e.preventDefault();
        console.log('submit')
        this.props.handleSubmit(this.state.username,this.props.id)
    }

    componentDidMount() {
        console.log(this.props.handleSubmit)
    }
    render() {
        return (
            <section className="search-player">
                <h1>
                    Player {this.props.id} Details
            </h1>
                <form onSubmit={this.handleSubmit}>
                <p>Enter the player's github username</p>
                <input required value={this.state.username} onChange={this.handleChange} placeholder="github username" />
                <button type="submit">Search</button>
                </form>
            </section>
        )
    }
}

export default PlayerInput