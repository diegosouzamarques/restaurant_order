import style from "./Humbuger.module.scss";
import classNames from "classnames";
import { useState } from "react";

const Humbuger = () => {
  const [active, setActive] = useState(true);

  const hambugerClick: React.MouseEventHandler<HTMLDivElement> = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    
    setActive(!active);
  };

  return (
    <div className={style.wrapper}>
      <div className={classNames({[style.wrapper__section]:true, [style.wrapper__section__active]:active})}>
        <div className={style.wrapper__section__top_navbar}>
          <div
            className={style.wrapper__section__top_navbar__hamburger}
            onClick={hambugerClick}
          >
            <a href="#">
              <i className="fas fa-bars"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={classNames({[style.wrapper__sidebar]:true, [style.wrapper__sidebar__active]:active}) } >
        <div className={style.wrapper__sidebar__profile}>
          <img
            src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
            alt="profile_picture"
          />
          <h3>Anamika Roy</h3>
          <p>Designer</p>
        </div>
        <ul>
          <li>
            <a href="#" className={style.wrapper__sidebar__active}>
              <span className={style.wrapper__sidebar__icon}>
                <i className="fas fa-home"></i>
              </span>
              <span className="item">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={style.wrapper__sidebar__icon}>
                <i className="fas fa-desktop"></i>
              </span>
              <span className="item">My Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={style.wrapper__sidebar__icon}>
                <i className="fas fa-user-friends"></i>
              </span>
              <span className="item">People</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={style.wrapper__sidebar__icon}>
                <i className="fas fa-tachometer-alt"></i>
              </span>
              <span className="item">Perfomance</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={style.wrapper__sidebar__icon}>
                <i className="fas fa-database"></i>
              </span>
              <span className="item">Development</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={style.wrapper__sidebar__icon}>
                <i className="fas fa-chart-line"></i>
              </span>
              <span className="item">Reports</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={style.wrapper__sidebar__icon}>
                <i className="fas fa-user-shield"></i>
              </span>
              <span className="item">Admin</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={style.wrapper__sidebar__icon}>
                <i className="fas fa-cog"></i>
              </span>
              <span className="item">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Humbuger;
