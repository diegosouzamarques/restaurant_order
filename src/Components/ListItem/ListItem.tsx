import "./ListItem.module.scss";
import ItemOrder from "../../Type/Item";

interface IListItem {
  title?: string;
  items: Array<ItemOrder>;
}

const ListItem = ({ ...props }: IListItem) => {
  return (
    <ul aria-label={props.title} >
      <li>Item Qtd Total</li>  
      {props.items.map((item, index) => (
        <li key={index}>
          {item.title} {item.qtd} {item.total}
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
