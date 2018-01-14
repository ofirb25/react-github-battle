import React from 'react';
import {Link} from 'react-router-dom'
function Home(props) {
    return (
        <section>
        <h1>Welcome To the big Github Battle!</h1>

        <Link to={'/battle'} className="button">Battle Now!</Link>
        </section>
    )
}

export default Home