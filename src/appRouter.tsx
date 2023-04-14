import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Order from "./Pages/Order/Order";
import Lounge from "./Pages/Lounge/Lounge";

const AppRouter = () => {
    return(
        <Router>
             <Routes>
                <Route path="/" element={<Lounge/>}></Route>
                <Route path="order" element={<Order/>}></Route>
             </Routes>
        </Router>
    );
}

export default AppRouter;