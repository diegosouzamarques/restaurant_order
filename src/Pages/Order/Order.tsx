import classNames from "classnames";
import Button from "../../Components/Button/Button";
import InputDefault from "../../Components/Inputs/InputDefault/InputDefault";
import Select from "../../Components/Inputs/Select/Select";
import TextArea from "../../Components/Inputs/TextArea/TextArea";
import ListItem from "../../Components/ListItem/ListItem";
import ItemOrder from "../../Type/Item";
import Option from "../../Type/Option";
import style from "./Order.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuItem from "../../Components/MenuItem/MenuItem";
import cardapio from "../../assets/data/dados.json";
import Amount from "../../Components/Amount/Amount";

const Order = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [showAmount, setShowAmount] = useState(false);
  const [itemOrder, setItemOrder] = useState<ItemOrder>();
  const [items, setItems] = useState<ItemOrder[]> (
    [
      { title: "Chocolate Quente", qtd: 3, valor: 15.37 },
      { title: "X-Tudão", qtd: 3, valor: 75.78 },
      { title: "Batata Cheddar", qtd: 1, valor: 5.67 }
    ]
  );

  const opcoes: Option[] = [
    { id: -1, name: "Escolha uma mesa" },
    { id: 1, name: "Mesa 01" },
    { id: 2, name: "Mesa 02" },
    { id: 3, name: "Mesa 03" },
  ];

  const addItem = ()=>{
    setItems(itemOrder?items.concat(itemOrder):items);
  }

  const onBack = () => {
    setMenu(false);
  }

  const setValue = (value: string)=>{
    setItemOrder({title: itemOrder?.title??"", qtd:Number(value), valor: Number(itemOrder?.valor)});
  };

  const clickItem = (event: React.MouseEvent<HTMLDivElement>) => {
    let id = Number(event.currentTarget.getAttribute("data-id"));
    let prato = cardapio.find((element) => element.id === id) ?? null;
    setItemOrder({title: prato?.title??"", qtd:0, valor: Number(prato?.price)})
    setMenu(false);
    setShowAmount(true);
  };

  return (
    <>
      <Amount show={showAmount} itemOrder={itemOrder} toChange={setValue} addItem={addItem}></Amount>
      <MenuItem show={menu} onClick={clickItem} onBack={onBack}></MenuItem>
      <section
        className={classNames({
          [style.container]: true,
          [style.container__visible]: menu,
        })}
      >
        <Button
          type="submit"
          nipple="order"
          className={style.container__btn_Salvar}
        >
          Gravar
        </Button>
        <div className={style.container__fields}>
          <div>
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
          </div>
          <div>
            <Button
              className={style.container__fields__btn}
              type="button"
              nipple="item"
              onClick={(e) => {
                e.preventDefault();
                setMenu(true);
                setShowAmount(false);
              }}
            >
              Escolha Prato & Bebida
            </Button>
            <ListItem items={items} close={false}></ListItem>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
