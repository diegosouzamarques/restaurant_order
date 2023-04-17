import style from "./ListItem.module.scss";
import ItemOrder from "../../Type/Item";

interface IListItem {
  title?: string;
  items: Array<ItemOrder>;
}

const ListItem = ({ ...props }: IListItem) => {
  let total: number = 0;
  total = props.items.reduce((counter, item) => {return counter + (item.qtd * item.valor) },0);

  return (
    <ul className={style.list}>
      <li>{props.title}</li>  
      <li><span>Item</span> <span>Qtd</span></li>  
      {props.items.map((item, index) => (
        <li key={index}>
          <span>{item.title}</span>
          <span>{item.qtd}</span>
        </li>
      ))}
     <li><span>Total</span><span>$ {total}</span></li>  
    </ul>
  );
};

export default ListItem;
