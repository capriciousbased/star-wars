import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home">
            <img src="https://starwarsblog.starwars.com/wp-content/uploads/2021/04/star-wars-doctor-aphra-12-cover-01-08327_TALL.jpg" alt=""></img>
            <div className="home_content">
              <h1> Welcome to Star Wars Page </h1>  
                <p>To Get the Star Wars data you've ever wanted :</p> 
                <ul>
                <Link to="/people"><li> People </li></Link>
                <Link to="/people"><li>Planets</li></Link>
                <Link to="/people"><li>Starship</li></Link>  
                </ul>  
            </div>
            
        </div>
    )
}

export default Home
