import Option from "../../../Type/Option";
import style from "./Select.module.scss";
import classNames from "classnames";
import { useState, forwardRef } from "react";

interface ISelect {
  toChange?: (value: string) => void;
  id: string;
  title: string;
  selectedValue?: Option;
  options: Array<Option>;
  value?: string;
  required?: boolean | undefined;
}

const Select = forwardRef(({ ...props }: ISelect, ref?:React.ForwardedRef<HTMLSelectElement>) => {
  const [valid, setValid] = useState(true);

  const toChanger = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    if (props.toChange) props.toChange(evento.target.value);
  };

  const onInvalid = (event: React.FormEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setValid(event.currentTarget.validity.valid);
  };

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setValid(true);
  };

  const onBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    event.preventDefault();
    
    setValid(event.currentTarget.validity.valid);
  };

  return (
    <label htmlFor={props.id} className={style.input__title}>
      <select
        ref={ref}
        id={props.id}
        defaultValue={props.selectedValue?.id}
        value={props.value}
        onChange={toChanger}
        required={props.required}
        onInvalid={onInvalid}
        onInput={onInput}
        onBlur={onBlur}
      >
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
        <i className={style.validacao_icon}>Por favor preencha&nbsp; 
        {props.title}</i>
      </span>
    </label>
  );
}
); 
export default Select;
