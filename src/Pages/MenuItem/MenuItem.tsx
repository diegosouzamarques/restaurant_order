import Button from "../../Components/Button/Button";
import DisheDrink from "../../Components/DisheDrink/DisheDrink";
import { CategoryMenu } from "../../Enum/CategoryMenu";
import style from "./MenuItem.module.scss";
import classNames from "classnames";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuItem = () => {
  const navigate = useNavigate();
  let menuOption = Object.values(CategoryMenu);
  const [active, setActive] = useState(-1);
  const onClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setActive(Number(event.currentTarget.id));
  };
  return (
    <section>
      <ul className={style.menuOption}>
        {menuOption.map((item, index) => {
          let nameClass =
            Object.keys(CategoryMenu)[
              Object.values(CategoryMenu).indexOf(item)
            ];
          return (
            <li
              id={String(index)} 
              key={index}
              className={classNames({ [style.menuOption__active]: index == active})}
              onClick={onClick}
            >
              <i
                className={classNames({
                  [style.menuOption__icon]:true,
                  [style[`menuOption__icon_${nameClass}`]]:true,
                  [style[`menuOption__icon_${nameClass}_active`]]: index == active
                })}
              ></i> 
              <span className={style.menuOption__title}>{item}</span>
            </li>
          );
        })}
      </ul>
      <h1  className={classNames({
                  [style.menu]: active < 0,
                  [style.menuSelected]: active > -1
                })} ><span>{menuOption[active]}</span></h1>
      <div className={style.container}>
        <DisheDrink></DisheDrink>
        <DisheDrink></DisheDrink>
        <DisheDrink></DisheDrink>
        <DisheDrink></DisheDrink>
        <DisheDrink></DisheDrink>
        <DisheDrink></DisheDrink>
        <DisheDrink></DisheDrink>
        <DisheDrink></DisheDrink>
        <DisheDrink></DisheDrink>
        <DisheDrink></DisheDrink>
      </div>
                
    </section>
  );
};

export default MenuItem;
