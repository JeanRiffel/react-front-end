import {
    BrowserRouter as Router,
    Routes,
    Route     
  } from "react-router-dom";

import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />                                                    
                <Route path="/order" element={<OrderPage />} />                                    
            </Routes>
        </Router>
    )
}