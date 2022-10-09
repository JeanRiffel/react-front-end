import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import "./HomePage.css";

function HomePage(){
    return(
        <div className="home-body">
            <header className="home-header" >
                <h1>Grocerie List</h1>
            </header>

            <Link to='/order'>
                <Button variant="contained">Create List</Button>                
            </Link>        
            <Button variant="contained">View List</Button>
        </div>
    )
}

export default HomePage;