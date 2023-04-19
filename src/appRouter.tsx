import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Order from "./Pages/Order/Order";
import Lounge from "./Pages/Lounge/Lounge";
import MenuItem from "./Pages/MenuItem/MenuItem";
import DisheDrinkDetails from "./Pages/DisheDrinkDetails/DisheDrinkDetails";

const AppRouter = () => {
    return(
        <Router>
             <Routes>
                <Route path="/" element={<Lounge/>}></Route>
                <Route path="order" element={<Order/>}></Route>
                <Route path="menu" element={<MenuItem/>}></Route>
                <Route path="detail/:id" element={<DisheDrinkDetails/>}></Route>
             </Routes>
        </Router>
    );
}

export default AppRouter;