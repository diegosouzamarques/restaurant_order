import { useParams, useNavigate } from "react-router-dom";
import style from "./CloseOrder.module.scss";
import Option from "../../Type/Option";
import Select from "../../Components/Inputs/Select/Select";
import Text from "../../Components/Text/Text";
import ItemOrder from "../../Type/Item";
import ListItem from "../../Components/ListItem/ListItem";
import Button from "../../Components/Button/Button";
import classNames from "classnames";
import Payment from "../../Components/Payment/Payment";
import { useEffect, useState } from "react";
import PaymentMade from "../../Type/PaymentMade";

const CloseOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  const [payMade, setPayMade] = useState<PaymentMade[]>([]);
  const [discount, setDiscount] = useState<PaymentMade[]>([]);
  const [total, setTotal] = useState(0);
  const [pay, setPay] = useState(0);
  const [rest, setRest] = useState(0);

  const items: ItemOrder[] = [
    { title: "Chocolate Quente", qtd: 3, valor: 15.37 },
    { title: "X-Tudão", qtd: 3, valor: 75.78 },
    { title: "Batata Cheddar", qtd: 1, valor: 5.67 },
    { title: "Cachorro Quente", qtd: 3, valor: 18.0 },
    { title: "X-Salada", qtd: 3, valor: 65.0 },
    { title: "Milk Shake", qtd: 1, valor: 8.32 },
    { title: "Churros Doce Leite", qtd: 1, valor: 5.67 },
    { title: "Coxinha Frango", qtd: 3, valor: 18.0 },
    { title: "Misto Quente", qtd: 3, valor: 65.0 },
    { title: "Sorvete Napolitano", qtd: 1, valor: 8.89 },
  ];

  useEffect(() => {

    if((payMade.length <= 0) && (discount.length <= 0)){
      setTotal(items.reduce((counter, item) => {
        return counter + item.qtd * item.valor;
      }, 0));
  
      setRest(items.reduce((counter, item) => {
        return counter + item.qtd * item.valor;
      }, 0));
    }else{
      cashierResume();
    };


  },[payMade, discount, pay]);

  const cashierResume = () =>{
    setPay(payMade.reduce((counter, item) => {
      return counter + item.value;
    }, 0));

    let discountTotal = discount.reduce((counter, item) => {
      return counter + item.value;
    }, 0);
    
    setRest((total + discountTotal) - pay);
  };

  const opcoes: Option[] = [
    { id: -1, name: "Escolha uma mesa" },
    { id: 1, name: "Mesa 01" },
    { id: 2, name: "Mesa 02" },
    { id: 3, name: "Mesa 03" },
  ];

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
        <Button
          type="button"
          nipple="order"
          className={style.container__btn_pay}
          onClick={(e) => {
            e.preventDefault();
            setShowPayment(true);
          }}
        >
          Pagamento
        </Button>
        <div className={style.container__payment_details}>
          <h3 className={classNames(style.container__payment_details__title)}>
            Pagamentos:
          </h3>
          <ul>
            {payMade.length <= 0 && (
              <>
                <hr />
                <br />
                <hr />
              </>
            )}

            {payMade.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span> <span>{item.value.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={style.container__payment_details}>
          <h3 className={style.container__payment_details__title}>
            Desconto:{" "}
          </h3>
          <ul>
            {discount.length <= 0 && (
              <>
                <hr />
                <br />
                <hr />
              </>
            )}

            {discount.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span> <span>{item.value.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={style.container__payment_details}>
          <h3 className={classNames(style.container__payment_details__title)}>
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

      <div className={style.details_order}>
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

      <ListItem items={items} close={true}></ListItem>
    </>
  );
};

export default CloseOrder;
