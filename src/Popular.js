import React from 'react';
import api from './services/api'
import Loader from './Loading'
export class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            selectedLang: 'All',
            repos: []
        }
    }

    handleFilter = (term) => {
        console.log(term);
        this.setState({ selectedLang: term })
        this.setState({isFetching : true})
        api.getPopulars(term)
            .then(data => {
                console.log(data)
                this.setState({ repos: data });
                this.setState({isFetching : false});
            });
    }

    componentDidMount() {
        this.handleFilter(this.state.selectedLang);
    }

    render() {
        return (
            <section>
                {this.state.isFetching ?  <Loader /> : null }
                <LangsFilter selectedLang={this.state.selectedLang}
                    handleFilter={this.handleFilter} />
                <RepsGrid reps={this.state.repos} />
            </section>
        )
    }
}

export default Popular

function LangsFilter(props) {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <div>
            <h2>Select A language</h2>
            <ul className="filters">
                {languages.map(language => {
                    return <li
                        className={props.selectedLang === language ?
                            'selected' : null}
                        key={language} onClick={() => { props.handleFilter(language) }}
                    > {language} </li>
                })}
            </ul>
        </div>
    )
}

function RepsGrid(props) {

    return (
        <section className="grid">
            {props.reps.map(rep => {
                return (
                    <div key={rep.name}>
                        <img src={rep.avatar} className="avatar" />
                        <h4> <a href={rep.url}> {rep.name} </a></h4>
                        <p>stars: {Number(rep.stars).toLocaleString()}</p>
                    </div>
                )
            })}
        </section>
    )
    
}