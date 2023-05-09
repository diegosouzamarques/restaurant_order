import classNames from "classnames";
import Button from "../../Components/Button/Button";
import InputDefault from "../../Components/Inputs/InputDefault/InputDefault";
import Select from "../../Components/Inputs/Select/Select";
import TextArea from "../../Components/Inputs/TextArea/TextArea";
import ListItem from "../../Components/ListItem/ListItem";
import Option from "../../Type/Option";
import style from "./Order.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuItem from "../../Components/MenuItem/MenuItem";
import Amount from "../../Components/Amount/Amount";
import useListDisheDrink from "../../State/Hooks/DisheDrink/useListDisheDrink";
import useRegisterOrder from "../../State/Hooks/Order/useRegisterOrder";
import { OrderItem } from "../../Model/OrderItem";
import useListTable from "../../State/Hooks/Table/useListTable"; 

const Order = () => {
  const navigate = useNavigate();
  const [requester, setRequester] = useState("");
  const [table, setTable] = useState(0);
  const [note, setNote] = useState("");
  const [menu, setMenu] = useState(false);
  const [showAmount, setShowAmount] = useState(false);
  const [itemOrder, setItemOrder] = useState<OrderItem>();
  const [items, setItems] = useState<OrderItem[]>([
    {
      id: 1,
      disheDrinkId: 1,
      orderId: 10,
      title: "Chocolate Quente",
      quantity: 3,
      price: 15.37,
    },
    {
      id: 1,
      disheDrinkId: 1,
      orderId: 10,
      title: "X-Tudão",
      quantity: 3,
      price: 75.78,
    },
    {
      id: 1,
      disheDrinkId: 1,
      orderId: 10,
      title: "Batata Cheddar",
      quantity: 3,
      price: 5.67,
    },
  ]);
  const listDishe = useListDisheDrink();
  const registerOrder = useRegisterOrder();
  const listTable = useListTable();

  let opcoes: Option[] = [
    { id: -1, name: "Escolha uma mesa" }
  ];

  listTable.map((item)=>{opcoes.push({ id: Number(item.id), name: item.title })});

  const addItem = () => {
    setItems(itemOrder ? items.concat(itemOrder) : items);
    setShowAmount(false);
  };

  const onBack = () => {
    setMenu(false);
  };

  const setValue = (value: string) => {
    setItemOrder({
      id:undefined,
      disheDrinkId: 1,
      orderId: 10,
      title: itemOrder?.title ?? "",
      quantity: Number(value),
      price: Number(itemOrder?.price),
    });
  };

  const clickItem = (event: React.MouseEvent<HTMLDivElement>) => {
    let id = Number(event.currentTarget.getAttribute("data-id"));
    let prato = listDishe.find((element) => element.id === id) ?? null;
    setItemOrder({
      id:undefined,
      disheDrinkId: 1,
      orderId: 10,
      title: prato?.title ?? "",
      quantity: 0,
      price: Number(prato?.price),
    });
    setMenu(false);
    setShowAmount(true);
  };

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    try {
      registerOrder(100, table, requester, note, undefined, items);
    } catch (error) {
      let e = error as Error;
    }
  };

  return (
    <>
      <Amount
        show={showAmount}
        itemOrder={itemOrder}
        toChange={setValue}
        addItem={addItem}
      ></Amount>
      <MenuItem show={menu} onClick={clickItem} onBack={onBack}></MenuItem>
      <form
        onSubmit={aoSalvar}
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
              value={requester}
              toChange={(value) => setRequester(value)}
            ></InputDefault>
            <Select
              id="table"
              title="Mesa"
              options={opcoes}
              selectedValue={opcoes[0]}
              toChange={(value) => {
                let i = Number(value);
                setTable(i);
              }}
            ></Select>
            <TextArea
              id="note"
              title="Observação"
              placeholder="Observação"
              maxCharacter={350}
              value={note}
              toChange={(value) => setNote(value)}
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
      </form>
    </>
  );
};

export default Order;
