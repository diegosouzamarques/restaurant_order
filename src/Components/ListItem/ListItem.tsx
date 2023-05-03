import style from "./ListItem.module.scss";
import ItemOrder from "../../Type/Item";
import classNames from "classnames";

interface IListItem {
  items: Array<ItemOrder>;
  close: boolean;
}

const ListItem = ({ ...props }: IListItem) => {
  let total: number = 0;
  total = props.items.reduce((counter, item) => {
    return counter + item.qtd * item.valor;
  }, 0);

  return (
    <div className={classNames({[style.list_item]:true,[style.list_item__close]: props.close})}>
      <div className={classNames({[style.list_item__title]:true, [style.list_item__title__close]: props.close}) }><span>Item</span> <span>Qtd</span></div>
      <ul className={classNames({[style.list_item__content]:true, [style.list_item__content__close]: props.close})}>
        {props.items.map((item, index) => (
          <li key={index}>
            <span className={style.list_item__content__title} >{item.title}</span>
            <span>{item.qtd}</span>
          </li>
        ))}
      </ul>
      <div className={classNames({[style.list_item__total]:true, [style.list_item__total__close]: props.close})}><span>Total</span> <span>$ {total.toFixed(2)}</span></div>
    </div>
  );
};

export default ListItem;
