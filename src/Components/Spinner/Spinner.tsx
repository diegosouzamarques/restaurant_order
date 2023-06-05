import classNames from "classnames";
import style from "./Spinner.module.scss";

const Spinner = ({ title = 'Loading', box = false }) => {
  return (
    <div className={classNames({[style.spinner]:true, [style.spinner__fullpage]:!box, [style.spinner__box]:box })}>
        <div className={style.spinner__dotwrapper}>
          <p className={style.spinner__dotwrapper__loading}>{title}</p>
          <div className={style.spinner__dotwrapper__dot0} />
          <div className={style.spinner__dotwrapper__dot1} />
          <div className={style.spinner__dotwrapper__dot2} />
        </div>
    </div>
  );
};

export default Spinner;
