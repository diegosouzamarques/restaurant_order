import Button from "../../Components/Button/Button";
import InputDefault from "../../Components/Inputs/InputDefault/InputDefault";
import Select from "../../Components/Inputs/Select/Select";
import TextArea from "../../Components/Inputs/TextArea/TextArea";
import ListItem from "../../Components/ListItem/ListItem";
import ItemOrder from "../../Type/Item";
import Option from "../../Type/Option";
import style from "./Order.module.scss";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const opcoes: Option[] = [
    { id: -1, name: "Escolha uma mesa" },
    { id: 1, name: "Mesa 01" },
    { id: 2, name: "Mesa 02" },
    { id: 3, name: "Mesa 03" },
  ];
  const items: ItemOrder[] = [
    { title: "Chocolate Quente", qtd: 3, valor: 15.37 },
    { title: "X-Tudão", qtd: 3, valor: 75.78 },
    { title: "Batata Cheddar", qtd: 1, valor: 5.67 },
  ];
  return (
    <section className={style.container}>
      <h1>New Order</h1>
      <InputDefault
        id="requester"
        title="Solicitante"
        type="text"
      ></InputDefault>
      <Select
        id="table"
        title="Mesa"
        options={opcoes}
        selectedValue={opcoes[0]}
      ></Select>
      <TextArea
        id="note"
        title="Observação"
        placeholder="Observação"
        maxCharacter={350}
      ></TextArea>
      <Button
        className={style.container__btn}
        type="button"
        nipple="item"
        onClick={(e) => {
          e.preventDefault();
          navigate("/item");
        }}
      >
        Escolha Prato & Bebida
      </Button>
      <ListItem title="Items" items={items}></ListItem>
    </section>
  );
};

export default Order;
