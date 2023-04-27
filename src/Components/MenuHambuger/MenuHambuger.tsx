import style from "./MenuHambuger.module.scss";
import classNames from "classnames";
import { useState } from "react";

const MenuHambuger = () => {
  const [active, setActive] = useState(true);

  const hambugerClick: React.MouseEventHandler<HTMLDivElement> = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    setActive(!active);
  };

  return (
    <div className={style.wrapper}>
      <div
        className={classNames({
          [style.wrapper__section]: true,
          [style.wrapper__section__active]: active,
        })}
      >
        <div className={style.wrapper__section__top_navbar}>
          <div
            className={classNames({
              [style.wrapper__section__top_navbar__btn]: true,
              [style.wrapper__section__top_navbar__active]: !active,
            })}
            onClick={hambugerClick}
          >
            <div className={style.wrapper__section__top_navbar__btn_left}></div>
            <div
              className={style.wrapper__section__top_navbar__btn_right}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={classNames({
          [style.wrapper__sidebar]: true,
          [style.wrapper__sidebar__active]: active,
        })}
      >
        <div className={style.wrapper__sidebar__profile}>
           <i/> 
          <h3>Manager Eatery</h3>
          <p>Fast Work</p>
        </div>
        <ul>
          <li>
            <a href="#">          
                <i className={style.wrapper__sidebar__icon} data-icon="lounge"></i>
              <span>Lounge</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={style.wrapper__sidebar__icon} data-icon="open"></i>
              <span>Open Order</span>
            </a>
          </li>
          <li>
            <a href="#">
               <i className={style.wrapper__sidebar__icon} data-icon="close"></i>
              <span>Close Order</span>
            </a>
          </li>
          <li>
            <a href="#">             
              <i className={style.wrapper__sidebar__icon} data-icon="register"></i>
              <span>Dishe & Drink</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={style.wrapper__sidebar__icon} data-icon="menu"></i>
              <span>Items Menu</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuHambuger;
