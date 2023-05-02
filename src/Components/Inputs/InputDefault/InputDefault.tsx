import style from "./InputDefault.module.scss";
import { useState } from "react";
import classNames from "classnames";

interface IInputDefault {
  toChange?: (value: string) => void;
  value?: string;
  id: string;
  type: "text" | "date" | "password" | "number";
  title: string;
  maxCharacter?: number;
  msgError?: string;
  required?: boolean | undefined;
  min?: string | number;
}

const InputDefault = ({ ...props }: IInputDefault) => {
  const [valid, setValid] = useState(true);

  const toChanger = (evento: React.ChangeEvent<HTMLInputElement>) => {
    console.log("InputDefault "+evento.target.value);
    if (props.type === "number" && (evento.target.value.includes('.'))){
      let test = evento.target.value.substring(evento.target.value.indexOf('.')+1, evento.target.value.length);
      if(test.length > 2)
      return;
    } 

    if (props.toChange) props.toChange(evento.target.value);
    
  };

  const onInvalid = (evento: React.FormEvent<HTMLInputElement>) => {
    evento.preventDefault();
    setValid(evento.currentTarget.validity.valid);
  };

  const onInput = (evento: React.FormEvent<HTMLInputElement>) => {
    evento.preventDefault();
    setValid(true);
  };

  const onBlur = (evento: React.FocusEvent<HTMLInputElement>) => {
    evento.preventDefault();
    if (props.type === "number" && (evento.target.value.length > 0)){
      
      let num = Number(evento.target.value);
      let min = Number(props.min);
      setValid((num > min));

      return;
    } 
    setValid(evento.currentTarget.validity.valid);
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
        min={props.min}
      />
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
};

export default InputDefault;
