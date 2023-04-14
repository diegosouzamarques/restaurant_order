import Button from "../../Components/Button/Button";
import InputDefault from "../../Components/Inputs/InputDefault/InputDefault";
import Select from "../../Components/Inputs/Select/Select";
import TextArea from "../../Components/Inputs/TextArea/TextArea";
import ListItem from "../../Components/ListItem/ListItem";
import ItemOrder from "../../Type/Item";
import Option from "../../Type/Option";
import style from "./Order.module.scss";

const Order = () => {
  const opcoes: Option[] = [{id: 1, name:"Mesa 01"}, {id: 2, name:"Mesa 02"}, {id: 3, name:"Mesa 03"}];  
  const items: ItemOrder[] = [{title:"Chocolate Quente", qtd:3, total: 15}, {title:"X-Tudão", qtd:3, total: 75}, {title:"Batata Cheddar", qtd:1, total: 5}]; 
  return (
    <section className={style.container}>
        <h1>New Order</h1>
        <InputDefault id="requester" title="Solicitante" type="text"></InputDefault>
        <Select id="table" title="Mesa" options={opcoes} selected="Escolha uma mesa"></Select>
        <TextArea id="note" title="Observação" placeholder="Observação" maxCharacter={350}></TextArea>
        <Button type="button" nipple="item">Add Item</Button>
        <ListItem title="Items" items={items}></ListItem>
    </section>
  );
};

export default Order;
