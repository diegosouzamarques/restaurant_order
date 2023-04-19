import { useParams } from "react-router-dom";
import style from "./CloseOrder.module.scss";
import Option from "../../Type/Option";
import Select from "../../Components/Inputs/Select/Select";
import Text from "../../Components/Text/Text";
import InputDefault from "../../Components/Inputs/InputDefault/InputDefault";

const CloseOrder = () => {
  const { id } = useParams();

  const opcoes: Option[] = [
    { id: -1, name: "Escolha uma mesa" },
    { id: 1, name: "Mesa 01" },
    { id: 2, name: "Mesa 02" },
    { id: 3, name: "Mesa 03" },
  ];

  return (
    <section className={style.container}>
      <h1>Close Order</h1>

      <Select
        id="table"
        title="Mesa"
        options={opcoes}
        selectedValue={opcoes[0]}
      ></Select>
      <br/>
      <Text title="Solicitante" text="Maria Marques"></Text>
      <br/>
      <Text title="Observação" text="Maria Marques Maria Marques Maria Marques Maria Marques Maria Marques Maria MarquesMaria Marques 10"></Text>
      
    </section>
  );
};

export default CloseOrder;
