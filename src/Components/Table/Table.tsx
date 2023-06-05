import style from "./Table.module.scss";
import classNames from "classnames";
import { TableStatus } from "../../Enum/TableStatus";
import { Table as ModelTable } from "../../Model/Table";
import { OrderStatus } from "../../Enum/OrderStatus";
import { useNavigate } from "react-router-dom";

type Tableprops = {
  table: ModelTable;
};

const Table = ({ ...props }: Tableprops) => {
  const navigate = useNavigate();

  const getStatusTable = (status: TableStatus) =>{
    return     Object.keys(TableStatus)[
      Object.values(TableStatus).indexOf(
        status
      )
    ];
  }

  const statusOrder = () =>{
    return Number( Object.keys(OrderStatus)[
      Object.values(OrderStatus).indexOf(
        props.table.order?.status ?? OrderStatus.closed
      )
    ]);
  }


  const clickTable = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      getStatusTable(props.table.status) === getStatusTable(TableStatus.occupied) &&
      props.table.order &&
      statusOrder() === OrderStatus.opened
    ) navigate("/close/" + props.table.order.id);

    if (getStatusTable(props.table.status) === getStatusTable(TableStatus.available))
      navigate("/order/");
    
  };

  return (
    <div
      onClick={clickTable}
      className={classNames(
        style.table,
        style[`table__status__${getStatusTable(props.table.status)}`]
      )}
    >
      <div className={style.table__header}>
        <h3>{props.table.title}</h3>
        <span
          className={classNames(
            style.table__header__status,
            style[`table__header__status__${getStatusTable(props.table.status)}`]
          )}
        >
          Ocupada - 1hora
        </span>
      </div>
      <div className={style.table__requester}>
        <strong>Solicitante: </strong>
        <span>{props.table.order?.requester}</span>
      </div>
      <div className={style.table__requester}>
        <strong>Total: </strong>
        <span>$ {props.table.order?.total()?.toFixed(2)}</span>
      </div>
    </div>
  );
};
export default Table;
