import style from "./Text.module.scss";

interface IText {
    title: string;
    text:string;
}

const Text = ({...props}:IText) => {
    return(
      <div className={style.container}>
         <label className={style.container__label}>{props.title}</label>
         <span className={style.container__span}>{props.text}</span>
      </div>
    );
}

export default Text;