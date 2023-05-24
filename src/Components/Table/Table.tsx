import style from "./Table.module.scss"
import classNames from "classnames";
import { TableStatus } from "../../Enum/TableStatus";
import { Table as ModelTable } from "../../Model/Table";

type Tableprops ={
   table: ModelTable;
  }

const Table = ({...props }: Tableprops) => {

    let statusTable = Object.keys(TableStatus)[Object.values(TableStatus).indexOf(props.table.status)];

return(
        <div className={classNames(style.table, style[`table__status__${statusTable}`])}>
            <div className={style.table__header}>
                <h3>{props.table.title}</h3>
                <span className={classNames(style.table__header__status, 
                                            style[`table__header__status__${statusTable}`])}>Ocupada - 1hora</span>
            </div>
            <div className={style.table__requester}><strong>Solicitante: </strong><span>{props.table.order?.requester}</span></div>
            <div className={style.table__requester}><strong>Total: </strong><span>$ {props.table.order?.total()?.toFixed(2)}</span></div>
        </div>   
);
}
export default Table;