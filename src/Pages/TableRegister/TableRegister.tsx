import { useState } from "react";
import Button from "../../Components/Button/Button";
import InputDefault from "../../Components/Inputs/InputDefault/InputDefault";
import style from "./TableRegister.module.scss";
import { RegisterTable } from "../../Service/Controller/TableController";
import { TableStatus } from "../../Enum/TableStatus";
import SpinnerBox from "../../Components/SpinnerBox/SpinnerBox";

const TableRegister = () => {
  const [title, setTitle] = useState("");
  const [amountPeople, setAmountPeople] = useState("");
  const [spinner, setSpinner] = useState(false);

  const aoSalvar = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    setSpinner(true);
    await RegisterTable(title, Number(amountPeople), TableStatus.available);
    setSpinner(false);
  };
  return (
    <SpinnerBox visible={spinner} title="Registering">
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
    </SpinnerBox>
  );
};

export default TableRegister;
