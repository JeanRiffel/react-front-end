import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import "./HomePage.css";

function HomePage(){
    return(
        <div className="home-page">
            <div className="home-body">
                <header className="home-header" >
                    <h1 className="title">Grocerie List</h1>
                </header>
            </div>
            <div className="button-bar">
                <div className="button-item">
                    <Link to='/order'>
                        <Button className="button" variant="contained">Create List</Button>                
                    </Link>        
                </div>
                <div className="button-item" >
                    <Button className="button" variant="contained">View List</Button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;