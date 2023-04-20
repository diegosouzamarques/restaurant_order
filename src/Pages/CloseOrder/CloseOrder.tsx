import { useParams } from "react-router-dom";
import style from "./CloseOrder.module.scss";
import Option from "../../Type/Option";
import Select from "../../Components/Inputs/Select/Select";
import Text from "../../Components/Text/Text";
import ItemOrder from "../../Type/Item";
import ListItem from "../../Components/ListItem/ListItem";
import Button from "../../Components/Button/Button";
import InputDefault from "../../Components/Inputs/InputDefault/InputDefault";
import classNames from "classnames";

const CloseOrder = () => {
  const { id } = useParams();

  const opcoes: Option[] = [
    { id: -1, name: "Escolha uma mesa" },
    { id: 1, name: "Mesa 01" },
    { id: 2, name: "Mesa 02" },
    { id: 3, name: "Mesa 03" },
  ];

  const opcoesPay: Option[] = [
    { id: -1, name: "Escolha Tipo Pagamento" },
    { id: 1, name: "Cartão de Crédito" },
    { id: 2, name: "Cartão de Débito" },
    { id: 3, name: "Dinheiro" },
    { id: 4, name: "Pix" },
  ];

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
    { title: "Sorvete Napolitano", qtd: 1, valor: 8.32 },
  ];

  return (
    <div className={style.close}>
      <h1 className={style.close__title}>Close Order</h1>
      <section className={style.close__container}>
        <div className={style.close__container__order}>
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
        <div>
          <ListItem items={items}></ListItem>
        </div>
        <div className={style.close__container__payment}>
          <Select
            id="pay_type"
            title="Tipo"
            options={opcoesPay}
            selectedValue={opcoesPay[0]}
          ></Select>
          <InputDefault id="payment" title="Valor" type="text"></InputDefault>
          <Button type="button" nipple="order">
            Pagamento
          </Button>
          <InputDefault
            id="desconto"
            title="Desconto"
            type="text"
          ></InputDefault>
          <Button type="button" nipple="order">
            Desconto
          </Button>
        </div>
      </section>
      <div className={style.close__payment_details}>
        <div className={style.close__payment_details__item}>
          <h3 className={classNames(style.close__payment_details__title, style.close__payment_details__title__border_left)}>Pagamentos:</h3>
          <ul>
            <li>
              <span>Pix</span> <span>150</span>
            </li>
            <li>
              <span>Cartão Crédito</span> <span>350</span>
            </li>
            <li>
              <span>Cartão Débito</span> <span>185</span>
            </li>
            <li>
              <span>Dinheiro</span> <span>147</span>
            </li>
          </ul>
        </div>

        <div className={style.close__payment_details__item}>
          <h3 className={style.close__payment_details__title}>Desconto: </h3>
          <ul>
            <li>
              <span>Valor</span> <span>150</span>
            </li>
          </ul>
        </div>

        <div className={style.close__payment_details__item}>
          <h3 className={classNames(style.close__payment_details__title, style.close__payment_details__title__border_right)}>Total a Pagar: </h3>
          <ul>
            <li>
              <span>Valor a Pagar</span> <span>150</span>
            </li>
            <li>
              <span>Valor Pagamentos</span> <span>50</span>
            </li>
            <li>
              <span>Valor Restante</span> <span>50</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CloseOrder;
