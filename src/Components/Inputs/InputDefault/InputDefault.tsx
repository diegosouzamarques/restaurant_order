import style from "./InputDefault.module.scss";
import { useState } from "react";
import classNames from "classnames";

interface IInputDefault {
  toChange?: (value: string) => void;
  value?: string;
  id: string;
  type: "text" | "date" | "password";
  title: string;
  maxCharacter?: number;
  msgError?: string;
  required?: boolean | undefined;
}

const InputDefault = ({ ...props }: IInputDefault) => {
  const [valid, setValid] = useState(true);

  const toChanger = (evento: React.ChangeEvent<HTMLInputElement>) => {
    if (props.toChange) props.toChange(evento.target.value);
  };

  const onInvalid = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValid(event.currentTarget.validity.valid);
  };

  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValid(true);
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValid(event.currentTarget.validity.valid);
  };

  return (
    <label htmlFor={props.id} className={style.input__title}>
      <input
        value={props.value}
        onChange={toChanger}
        type={props.type}
        id={props.id}
        placeholder="&nbsp;"
        maxLength={props.maxCharacter}
        required={props.required}
        autoComplete="off"
        onInvalid={onInvalid}
        onInput={onInput}
        onBlur={onBlur}
      />
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

export default InputDefault;
