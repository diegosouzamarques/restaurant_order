import style from "./Spinner.module.scss";

const Spinner = ({ title = 'Loading' }) => {
  return (
    <div className={style.spinner}>
      <div className={style.spinner__header}>
        <div className={style.spinner__header__dotwrapper}>
          <p className={style.spinner__header__dotwrapper__loading}>{title}</p>
          <div className={style.spinner__header__dotwrapper__dot0} />
          <div className={style.spinner__header__dotwrapper__dot1} />
          <div className={style.spinner__header__dotwrapper__dot2} />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
