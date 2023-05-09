import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Order from "./Pages/Order/Order";
import Lounge from "./Pages/Lounge/Lounge";
import DisheDrinkDetails from "./Pages/DisheDrinkDetails/DisheDrinkDetails";
import CloseOrder from "./Pages/CloseOrder/CloseOrder";
import DisheDrinksRegister from "./Pages/DisheDrinksRegister/DisheDrinksRegister";
import NotFound from "./Pages/NotFound/NotFound";
import DefaultPage from "./Pages/DefaultPage/DefaultPage";
import Menu from "./Pages/Menu/Menu";
import { RecoilRoot } from "recoil";
import TableRegister from "./Pages/TableRegister/TableRegister";

const AppRouter = () => {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Lounge />}></Route>
            <Route path="order" element={<Order />}></Route>
            <Route path="menu" element={<Menu />}></Route>
            <Route path="detail/:id?" element={<DisheDrinkDetails />}></Route>
            <Route path="close/:id?" element={<CloseOrder />}></Route>
            <Route path="register" element={<DisheDrinksRegister />}></Route>
            <Route path="regtable" element={<TableRegister/>}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default AppRouter;
