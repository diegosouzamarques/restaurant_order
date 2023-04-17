import { CategoryMenu } from "../../Enum/CategoryMenu";
import style from "./MenuItem.module.scss";
import classNames from "classnames";

const MenuItem = () => {
  let menuOption = Object.values(CategoryMenu);
  return (
    <ul className={style.menuOption}>
      {menuOption.map((item, index) => {
        let nameClass =
          Object.keys(CategoryMenu)[Object.values(CategoryMenu).indexOf(item)];
        return (
          <li key={index}>
            <i
              className={classNames(
                style.menuOption__icon,
                style[`menuOption__icon_${nameClass}`]
              )}
            ></i>
            <span>{}</span>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuItem;
