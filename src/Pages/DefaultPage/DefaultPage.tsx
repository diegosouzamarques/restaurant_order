import { Outlet, matchPath, useParams, useLocation, useNavigate } from "react-router-dom";
import style from "./DefaultPage.module.scss";
import Button from "../../Components/Button/Button";

const DefaultPage = () => {
  let { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  let returnTitle = (id: string | undefined) => {

    let routes = [
      { path: `/register/${id}`, title: "Register Dishe & Drink" },
      { path: `/register/`, title: "Register Dishe & Drink" },
      { path: `/`, title: "Lounge" },
      { path: `/order`, title: "New Order" },
      { path: `/menu`, title: "Menu" },
      { path: `/detail/${id}`, title: "Details" },
      { path: `/close/${id}`, title: "Close Order" },
    ];

    const result = routes.filter((obj) => {
      return matchPath(location.pathname, obj.path);
    });

    return result[0].title||"Manage Eatery";
  };

  return (
    <div className={style.container}>
      <header className={style.container__header}>
      <Button
             type="button"
             children={"< Voltar"}
             nipple="item"
             onClick={() => {
               navigate(-1);
             }}/>
        <h1 className={style.container__header__titulo}>
          Eatery - {returnTitle(id)}
        </h1>
      </header>
      <div className={style.container__outlet}>
         <Outlet/> 
      </div>
    </div>
  );
};

export default DefaultPage;
