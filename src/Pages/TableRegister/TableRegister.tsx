import { useState } from "react";
import Button from "../../Components/Button/Button";
import InputDefault from "../../Components/Inputs/InputDefault/InputDefault";
import style from "./TableRegister.module.scss";
import useRegisterTable from "../../State/Hooks/useRegisterTable";

const TableRegister = () => {
    const [title, setTitle] = useState("");
    const [amountPeople, setAmountPeople] = useState("");
    const registerTable = useRegisterTable();

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        
        registerTable(10, title, Number(amountPeople));
    }
  return (
    <form onSubmit={aoSalvar} className={style.container}>
        <Button
        type="submit"
        nipple="order"
        className={style.container__btn_Salvar}
      >
        Gravar
      </Button>
     
      <InputDefault
            id="title"
            type="text"
            title="Title"
            maxCharacter={40}
            required
            value={title}
            toChange={(value) => setTitle(value)}
          ></InputDefault>
       <InputDefault
            id="amountPeople"
            type="number"
            title="Amount People"
            maxCharacter={10}
            value={amountPeople}
            toChange={(value) => setAmountPeople(value)}
            required
          ></InputDefault>
        </form>    
  );
};

export default TableRegister;
