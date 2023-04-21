import style from "./InputFile.module.scss";
import classNames from "classnames";
import { useState } from "react";

interface IInputFile {
    toChange?: (value: string) => void;
    value?: string;
    id: string;
    title: string;
    maxCharacter?: number;
    msgError?: string;
    required?: boolean | undefined;
  }

const InputFile = ({ ...props }: IInputFile) =>{
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

    const nameFile = (str:string) => {
        let reverso = str?.split("").reverse().join("");
        let index = reverso.indexOf('\\');
        return reverso.slice(0, index).split("").reverse().join("");
     };

    return(
        <label data-lblfile  htmlFor={props.id} className={style.input__title}>         
        <input
          value={props.value}
          onChange={toChanger}
          type="file"
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
        <span className={style.input__title__input__value}>{nameFile(props.value||"")  || `Escolha uma arquivo`}</span> <i data-iconfile></i> 
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
}

export default InputFile;