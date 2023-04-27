import style from "./Table.module.scss"
import classNames from "classnames";
import { TableStatus } from "../../Enum/TableStatus";

interface IStatus {
    status: TableStatus;
  }

const Table = ({ status }: IStatus) => {

    let statusTable = Object.keys(TableStatus)[Object.values(TableStatus).indexOf(status)];

return(
        <div className={classNames(style.table, style[`table__status__${statusTable}`])}>
            <div className={style.table__header}>
                <h3>Mesa 01</h3>
                <span className={classNames(style.table__header__status, 
                                            style[`table__header__status__${statusTable}`])}>Ocupada - 1hora</span>
            </div>
            <div className={style.table__requester}><strong>Solicitante: </strong><span>Maria Marques</span></div>
            <div className={style.table__requester}><strong>Total: </strong><span>R$ 150,55</span></div>
        </div>   
);
}
export default Table;