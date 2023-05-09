import style from "./Lounge.module.scss";
import Table from "../../Components/Table/Table";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import useListTable from "../../State/Hooks/useListTable";

const Lounge = () => {
  const navigate = useNavigate();
  const listTables = useListTable();
  return (
    <>
      <div className={style.operation}>
        <div
          className={classNames(
            style.operation__btn,
            style.operation__btn__open
          )}
          onClick={(e) => {
            e.preventDefault();
            navigate("/order");
          }}
        >
          Open Order
        </div>
        <div
          className={classNames(
            style.operation__btn,
            style.operation__btn__close
          )}
          onClick={(e) => {
            e.preventDefault();
            navigate("/close/15");
          }}
        >
          Close Order
        </div>
      </div>
      <section className={style.lounge}>
        {listTables.map((table, index) => {
          return <Table key={index} table={table}></Table>;
        })}
      </section>
    </>
  );
};

export default Lounge;
