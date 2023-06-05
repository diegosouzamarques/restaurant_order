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
import { ListTableStatus } from "../../Service/Controller/TableController";
import { Table } from "../../Model/Table";
import SpinnerBox from "../../Components/SpinnerBox/SpinnerBox";
import { TableStatus } from "../../Enum/TableStatus";
import { Order } from "../../Model/Order";
import { PaymentOrder, getAllItems } from "../../Service/BackEnd/OrderApi";
import Spinner from "../../Components/Spinner/Spinner";
import { PaymentUpLoad } from "../../Model/PaymentUpLoad";

const CloseOrder = () => {
  const { id } = useParams();
  const [buscar, setBuscar] = useState(true);
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  const [payMade, setPayMade] = useState<PaymentMade[]>([]);
  const [discount, setDiscount] = useState<PaymentMade[]>([]);
  const [total, setTotal] = useState(0);
  const [pay, setPay] = useState(0);
  const [rest, setRest] = useState(0);
  const [spinner, setSpinner] = useState(false);
  const [title, setTitle] = useState<string>();
  const [opcoes, setOpcoes] = useState<Option[]>([
    { id: -1, name: "Escolha uma mesa" },
  ]);
  const [listOrder, setListOrder] = useState<Order[]>([]);
  const [order, setOrder] = useState<Order>();
  const [items, setItems] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (opcoes.length <= 1) {
      setSpinner(true);
      ListTableStatus(TableStatus.occupied)
        .then((rs) =>
          rs.map((item) => {
            if (item.order) {
              let order = item.order;
              setListOrder((old) => [...old, order]);
            }

            setOpcoes((old) => [
              ...old,
              { id: Number(item.id), name: item.title },
            ]);
          })
        )
        .finally(() => setSpinner(false))
        .catch(console.log);
    }

    if (order && items.length <= 0) {
      setLoading(true);
      if (order.id)
        getAllItems(order.id)
          .then((rs) => setItems(rs))
          .finally(() => setLoading(false))
          .catch(console.log);
    }

    if (payMade.length <= 0 && discount.length <= 0 && total <= 0) {
      setTotal(
        items.reduce((counter, item) => {
          return counter + item.amount * item.price;
        }, 0)
      );

      setRest(
        items.reduce((counter, item) => {
          return counter + item.amount * item.price;
        }, 0)
      );
      cashierResume();
    }

    if (id && listOrder.length > 0 && !order && buscar)
      findOrder(id, "id");

  }, [payMade, discount, pay, order, items, listOrder]);

  const findOrder = (id: string, field:"id" | "tableId") =>{
    let i = Number(id);
    let property = field as keyof Order;
    let search = listOrder.find((item) => item[property] == i);
    setOrder(undefined);
    setItems([]);
    if (search) setOrder(search); else setBuscar(false);
  };

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

  const aoSalvar = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    try {
        setSpinner(true);
        setTitle("Registering");
        let payOrder:PaymentUpLoad = new PaymentUpLoad(order?.id??0, payMade);
        await PaymentOrder(payOrder);

        setSpinner(false);
        setTitle(undefined);
    } catch (error) {
      setSpinner(false);
      setTitle(undefined);
      console.log(error);
    }
  };
  return (
    <SpinnerBox visible={spinner} title={title}>
      <Payment show={showPayment} addItem={addItem} cancelItem={cancelItem} />
      <form onSubmit={aoSalvar}>
      <div className={style.teste}>
        <div className={style.container}>
          <div className={style.container__details_order}>
            <Select
              id="table"
              title="Mesa"
              options={opcoes}
              selectedValue={!order?opcoes[0]:opcoes.find(i => i.id === order.tableId)}
              toChange={(value) => {
                findOrder(value, "tableId");
              }}
            ></Select>
            <Text title="Solicitante" text={order?.requester}></Text>
            <Text title="Observação" text={order?.note}></Text>
            <Button
              type="submit"
              nipple="shut"
              className={style.container__details_order__button_close}
            >
              Close Order
            </Button>
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
              <div
                className={classNames(
                  style.container__payment__details,
                  style.container__payment__cashier__item_1
                )}
              >
                <h3
                  className={classNames(
                    style.container__payment__details__title
                  )}
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
                      <span>{index + 1 + " " + item.name}</span>
                      <span>{item.value.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={classNames(
                  style.container__payment__details,
                  style.container__payment__cashier__item_2
                )}
              >
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
                      <span>{item.name + " " + (index + 1)}</span>
                      <span>{item.value.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={classNames(
                  style.container__payment__details,
                  style.container__payment__cashier__item_3
                )}
              >
                <h3
                  className={classNames(
                    style.container__payment__details__title
                  )}
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
            <ListItem items={items} close={true} loading={loading}></ListItem>
          </div>
        </div>
      </div>
      </form>
    </SpinnerBox>
  );
};

export default CloseOrder;
