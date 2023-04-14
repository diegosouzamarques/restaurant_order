import Option from "../../../Type/Option";
import style from "./Select.module.scss";
import classNames from "classnames";
import { useState } from "react";


interface ISelect {
  id: string;
  title: string;
  selected?: string;
  options: Array<Option>;
}

const Select = ({ ...props }: ISelect) => {
  const [valid, setValid] = useState(true);
  return (
  
      <label htmlFor={props.id} className={style.input__title}>
      <select id={props.id}>
      {props.selected?<option disabled selected>{props.selected}</option>:""} 
        {props.options.map((item, index) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <span className={style.input__title__input__label}>{props.title}</span>
      <span
        className={classNames({
          [style.erro_validacao]: true,
          [style.error__visible]: valid,
          [style.possui_erro_validacao]: !valid,
        })}
      >
        <i className="fa-solid fa-triangle-exclamation"></i> Por favor preencha
        o nome
      </span>
    </label>

  );
};

export default Select;
