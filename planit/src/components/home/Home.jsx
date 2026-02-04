import { Link } from 'react-router-dom'

function Home (){
    return (
        <div>
            <h1>PlanIt</h1>
            <p>Welcome to a life of Amazingness</p>
            <p>PlanIt will help you get organized</p>

            <Link to="/login">Get Started</Link>
            <br />
            <Link to="/contact">Contact us</Link>
        </div>
    )
}

export default Home