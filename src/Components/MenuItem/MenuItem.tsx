import DisheDrink from "../DisheDrink/DisheDrink";
import { CategoryMenu } from "../../Enum/CategoryMenu";
import style from "./MenuItem.module.scss";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import cardapio from "../../assets/data/dados.json";
import DisheDrinkType from "../../Type/DisheDrink";

interface propsMenuItem {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  onBack?: ()=>void;
  show: boolean;
}

const MenuItem = ({...props}:propsMenuItem) => {

  const navigate = useNavigate();
  let menuOption = Object.values(CategoryMenu);
  const [active, setActive] = useState(-1);
  const [pratos, setPratos] = useState<DisheDrinkType[]>([]);

  const back_navigate = () => {
    navigate("/");
  }

  const clickCategoria = (event: React.MouseEvent<HTMLLIElement>) => {
    setActive(Number(event.currentTarget.id));
    setPratos([...cardapio]);
  };

  useEffect(() => {   
    let button_back = document.getElementById('button_back');
    if((button_back) && props.onBack) button_back.onclick = props.onBack;


    if(!props.show){
      setActive(-1);
      setPratos([]);

      if(button_back) button_back.onclick = back_navigate;
    
    }

    }, [props.show]);

  return (
    <div className={classNames({[style.visible]: !props.show})}>
      <div className={style.menu}>
        <ul className={style.menu__option}>
          {menuOption.map((item, index) => {
            let nameClass =
              Object.keys(CategoryMenu)[
                Object.values(CategoryMenu).indexOf(item)
              ];
            return (
              <li
                id={String(index)}
                key={index}
                className={classNames({
                  [style.menu__option__active]: index == active,
                })}
                onClick={clickCategoria}
              >
                <i
                  className={classNames({
                    [style.menu__option__icon]: true,
                    [style[`menu__option__icon_${nameClass}`]]: true,
                    [style[`menu__option__icon_${nameClass}_active`]]:
                      index == active,
                  })}
                ></i>
                <span className={style.menu__option__title}>{item}</span>
              </li>
            );
          })}
        </ul>
        <h1
          className={classNames({
            [style.menu__option__menu_desc]: active < 0,
            [style.menu__option__menu_selected]: active > -1,
          })}
        >
          <span>{menuOption[active]}</span>
        </h1>
      </div>
      {pratos.length <= 0 &&  <div className={style.categoria}><img/></div>}
      {pratos.length > 0 && (
        <div className={style.container}>
          {pratos.map((item, index) => (
            <DisheDrink dishe={item} key={index} onClick={props.onClick}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
