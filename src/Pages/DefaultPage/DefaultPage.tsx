import { Outlet, matchPath, useParams, useLocation } from "react-router-dom";
import style from "./DefaultPage.module.scss";
import MenuHambuger from "../../Components/MenuHambuger/MenuHambuger";

const DefaultPage = () => {
  let { id } = useParams();
  const location = useLocation();

  let btnBackHide = Boolean(matchPath(location.pathname, "/"));

  let returnTitle = (id: string | undefined) => {
    let routes = [
      { path: `/register/${id}`, title: "Register Dishe & Drink" },
      { path: `/register/`, title: "Register Dishe & Drink" },
      { path: `/`, title: "Lounge" },
      { path: `/order`, title: "New Order" },
      { path: `/menu`, title: "Menu" },
      { path: `/detail/${id}`, title: "Details" },
      { path: `/close/${id}`, title: "Close Order" },
      { path: `/regtable`, title: "Register Table" },
    ];

    const result = routes.filter((obj) => {
      return matchPath(location.pathname, obj.path);
    });
    
    return result.length > 0?result[0].title||"Manage Eatery":"Manage Eatery";
  };

  return (
    <>
     <MenuHambuger title={returnTitle(id)} btnBackHide={btnBackHide}/>
      <div className={style.outlet}>
         <Outlet/> 
    </div> 
    </>

  );
};

export default DefaultPage;
