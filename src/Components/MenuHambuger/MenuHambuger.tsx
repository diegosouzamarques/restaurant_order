import style from "./MenuHambuger.module.scss";
import classNames from "classnames";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface IMenuHambuger {
  title?: string;
  btnBackHide: boolean;
}

const MenuHambuger = ({ ...props }: IMenuHambuger) => {
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 15;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const hambugerClick: React.MouseEventHandler<
    HTMLDivElement | HTMLAnchorElement
  > = (event: React.MouseEvent<HTMLDivElement>) => {
    setActive(!active);
  };

  return (
    <header className={style.wrapper}>
      {isVisible && <h1 className={style.wrapper__titulo}>{props.title}</h1>}
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
          <div
            className={classNames({
              [style.wrapper__section__top_navbar__btn_back]: true,
              [style.wrapper__section__top_navbar__btn_back__hidde]:
                props.btnBackHide,
            })}
            onClick={() => {
              navigate(-1);
            }}
          >
            <span>{"< Voltar"}</span>
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
          <i />
          <h3>Manager Eatery</h3>
          <p>Fast Work</p>
        </div>
        <ul>
          <li>
            <Link to="/" onClick={hambugerClick}>
              <i
                className={style.wrapper__sidebar__icon}
                data-icon="lounge"
              ></i>
              <span>Lounge</span>
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={hambugerClick}>
              <i className={style.wrapper__sidebar__icon} data-icon="open"></i>
              <span>Open Order</span>
            </Link>
          </li>
          <li>
            <Link to="/close" onClick={hambugerClick}>
              <i className={style.wrapper__sidebar__icon} data-icon="close"></i>
              <span>Close Order</span>
            </Link>
          </li>
          <li>
            <Link to="/register" onClick={hambugerClick}>
              <i
                className={style.wrapper__sidebar__icon}
                data-icon="register"
              ></i>
              <span>Dishe & Drink</span>
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={hambugerClick}>
              <i className={style.wrapper__sidebar__icon} data-icon="menu"></i>
              <span>Items Menu</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MenuHambuger;
