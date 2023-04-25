import { useState, useEffect } from "react";
import style from "./TextArea.module.scss";
import classNames from "classnames";


interface ITextArea {
  toChange?: (value: string) => void;
  value?: string;
  id: string;
  title: string;
  placeholder?: string;
  maxCharacter?: number;
  msgError?: string;
  required?: boolean | undefined;
}

const TextArea = ({ ...props }: ITextArea) => {
  const [valid, setValid] = useState(true);
  const [characteres, setCharacteres] = useState(0);

  useEffect(() => {
    setCharacteres(props.value?props.value.length:0);
  }, [props.value]);

  const toChanger = (evento: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (props.toChange) props.toChange(evento.target.value);
    setCharacteres(evento.target.value.length);
  };

  const onInvalid = (event: React.FormEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setValid(event.currentTarget.validity.valid);
  };

  const onInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setValid(true);
  };

  const onBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setValid(event.currentTarget.validity.valid);
  };

  return (
    


<label htmlFor={props.id} className={style.input__title}>
      <textarea
        value={props.value}
        onChange={toChanger}
        id={props.id}
        maxLength={props.maxCharacter}
        required={props.required}
        autoComplete="off"
        cols={30} 
        rows={5} 
        placeholder="&nbsp;"
        onInvalid={onInvalid}
        onInput={onInput}
        onBlur={onBlur} 
      />
      <span className={style.input__title__input__label}>{props.title}</span>
      <span
        className={classNames({
          [style.input__title__contador__visible]:
            (props.maxCharacter || 0) <= 0,
        })}
      >{`${characteres} de ${props.maxCharacter} caracteres`}</span>        
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

export default TextArea;
