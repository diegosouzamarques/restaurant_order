import { useParams, useNavigate } from "react-router-dom";
import style from "./CloseOrder.module.scss";
import Option from "../../Type/Option";
import Select from "../../Components/Inputs/Select/Select";
import Text from "../../Components/Text/Text";
import ListItem from "../../Components/ListItem/ListItem";
import Button from "../../Components/Button/Button";
import classNames from "classnames";
import Payment from "../../Components/Payment/Payment";
import { useEffect, useState } from "react";
import PaymentMade from "../../Type/PaymentMade";
import { OrderItem } from "../../Model/OrderItem";
import useListTable from "../../State/Hooks/Table/useListTable"; 

const CloseOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  const [payMade, setPayMade] = useState<PaymentMade[]>([]);
  const [discount, setDiscount] = useState<PaymentMade[]>([]);
  const [total, setTotal] = useState(0);
  const [pay, setPay] = useState(0);
  const [rest, setRest] = useState(0);
  const listTable = useListTable();

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

  useEffect(() => {
    if (payMade.length <= 0 && discount.length <= 0) {
      setTotal(
        items.reduce((counter, item) => {
          return counter + item.quantity * item.price;
        }, 0)
      );

      setRest(
        items.reduce((counter, item) => {
          return counter + item.quantity * item.price;
        }, 0)
      );
    } else {
      cashierResume();
    }
  }, [payMade, discount, pay]);

  const cashierResume = () => {
    setPay(
      payMade.reduce((counter, item) => {
        return counter + item.value;
      }, 0)
    );

    let discountTotal = discount.reduce((counter, item) => {
      return counter + item.value;
    }, 0);

    setRest(total - (discountTotal + pay));
  };

  let opcoes: Option[] = [
    { id: -1, name: "Escolha uma mesa" }
  ];

  listTable.map((item)=>{opcoes.push({ id: Number(item.id), name: item.title })});

  const addItem = (pay: PaymentMade) => {
    if (pay) {
      if (pay.id === 5) setDiscount([...discount, pay]);
      else setPayMade([...payMade, pay]);
    }
    setShowPayment(false);
  };

  const cancelItem = () => {
    setShowPayment(false);
  };

  return (
    <>
      <Payment show={showPayment} addItem={addItem} cancelItem={cancelItem} />

      <div className={style.container}>
        <div className={style.container__details_order}>
          <Select
            id="table"
            title="Mesa"
            options={opcoes}
            selectedValue={opcoes[0]}
          ></Select>
          <Text title="Solicitante" text="Maria Marques"></Text>
          <Text
            title="Observação"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate."
          ></Text>
        </div>

        <div className={style.container__payment}>
          <Button
            type="button"
            nipple="order"
            className={style.container__payment__btn_pay}
            onClick={(e) => {
              e.preventDefault();
              setShowPayment(true);
            }}
          >
            Pagamento
          </Button>
          <div className={style.container__payment__cashier}>

            <div className={classNames(style.container__payment__details, style.container__payment__cashier__item_1)}>
              <h3
                className={classNames(style.container__payment__details__title)}
              >
                Pagamentos:
              </h3>
              {payMade.length <= 0 && (
                <>
                  <hr />
                  <br />
                  <hr />
                </>
              )}
              <ul
                className={classNames(
                  style.container__payment__details__items_pay
                )}
              >
                {payMade.map((item, index) => (
                  <li key={index}>
                    <span>{item.name +" "+ (index+1)}</span>
                    <span>{item.value.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={classNames(style.container__payment__details, style.container__payment__cashier__item_2)}>
              <h3 className={style.container__payment__details__title}>
                Desconto:
              </h3>
              {discount.length <= 0 && (
                <>
                  <hr />
                  <br />
                  <hr />
                </>
              )}
              <ul
                className={classNames(
                  style.container__payment__details__items_discont
                )}
              >
                {discount.map((item, index) => (
                  <li key={index}>
                    <span>{item.name +" "+ (index+1)}</span>
                    <span>{item.value.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={classNames(style.container__payment__details, style.container__payment__cashier__item_3)}>
              <h3
                className={classNames(style.container__payment__details__title)}
              >
                Resumo Caixa:
              </h3>
              <ul>
                <li>
                  <span>A Pagar</span> <span>{total.toFixed(2)}</span>
                </li>
                <li>
                  <span>Pagamentos</span> <span>{pay.toFixed(2)}</span>
                </li>
                <li>
                  <span>Restante</span> <span>{rest.toFixed(2)}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className={style.container__items}>
          <ListItem items={items} close={true}></ListItem>
        </div>
      </div>
    </>
  );
};

export default CloseOrder;
