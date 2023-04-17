import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Order from "./Pages/Order/Order";
import Lounge from "./Pages/Lounge/Lounge";
import MenuItem from "./Pages/MenuItem/MenuItem";

const AppRouter = () => {
    return(
        <Router>
             <Routes>
                <Route path="/" element={<Lounge/>}></Route>
                <Route path="order" element={<Order/>}></Route>
                <Route path="item" element={<MenuItem/>}></Route>
             </Routes>
        </Router>
    );
}

export default AppRouter;