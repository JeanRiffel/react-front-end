import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

function HomePage(){
    return(
        <div>
            <h1>Home Page</h1>
            <Link to='/order'>
                <Button value="Create Order" />
            </Link>             
        </div>
    )
}

export default HomePage;