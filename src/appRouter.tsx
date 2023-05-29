import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./Components/Spinner/Spinner";

const DefaultPage = lazy(() => import("./Pages/DefaultPage/DefaultPage"));
const Lounge = lazy(() => import("./Pages/Lounge/Lounge"));
const Order = lazy(() => import("./Pages/Order/Order"));
const Menu = lazy(() => import("./Pages/Menu/Menu"));
const DisheDrinkDetails = lazy(
  () => import("./Pages/DisheDrinkDetails/DisheDrinkDetails")
);
const CloseOrder = lazy(() => import("./Pages/CloseOrder/CloseOrder"));
const DisheDrinksRegister = lazy(
  () => import("./Pages/DisheDrinksRegister/DisheDrinksRegister")
);
const TableRegister = lazy(() => import("./Pages/TableRegister/TableRegister"));
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"));

const AppRouter = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Lounge />}></Route>
            <Route path="order" element={<Order />}></Route>
            <Route path="menu" element={<Menu />}></Route>
            <Route path="detail/:id?" element={<DisheDrinkDetails />}></Route>
            <Route path="close/:id?" element={<CloseOrder />}></Route>
            <Route path="register" element={<DisheDrinksRegister />}></Route>
            <Route path="regtable" element={<TableRegister />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppRouter;
