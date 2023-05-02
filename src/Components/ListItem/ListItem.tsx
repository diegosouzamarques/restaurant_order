import style from "./ListItem.module.scss";
import ItemOrder from "../../Type/Item";

interface IListItem {
  items: Array<ItemOrder>;
}

const ListItem = ({ ...props }: IListItem) => {
  let total: number = 0;
  total = props.items.reduce((counter, item) => {
    return counter + item.qtd * item.valor;
  }, 0);

  return (
    <div className={style.list_item}>
      <div className={style.list_item__title}><span>Item</span> <span>Qtd</span></div>
      <ul className={style.list_item__content}>
        {props.items.map((item, index) => (
          <li key={index}>
            <span className={style.list_item__content__title} >{item.title}</span>
            <span>{item.qtd}</span>
          </li>
        ))}
{/*         <li>
          <span>Total</span>
          <span>$ {total.toFixed(2)}</span>
        </li> */}
      </ul>
      <div className={style.list_item__total}><span>Total</span> <span>$ {total.toFixed(2)}</span></div>
    </div>
  );
};

export default ListItem;
