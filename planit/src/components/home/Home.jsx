import { Link } from 'react-router-dom'
import './Home.css'

function Home (){
    return (
        <div>
            <h1>PlanIt</h1>
            <p>Welcome to a life of Amazingness</p>
            <p>PlanIt will help you get organized</p>

            <Link className='link-nav' to="/login">Get Started</Link>
        </div>
    )
}

export default Home