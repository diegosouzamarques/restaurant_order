import style from "./Lounge.module.scss";
import Table from "../../Components/Table/Table";
import { TableStatus } from "../../Enum/TableStatus";
import { useNavigate } from "react-router-dom";

const Lounge = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.operation} >
        <div className={style.operation__btn+" "+style.operation__btn__open} 
        onClick={(e) => {
          e.preventDefault();
          navigate("/order");
        }}>Open Order</div>
        <div className={style.operation__btn+" "+style.operation__btn__close} 
        onClick={(e) => {
          e.preventDefault();
          navigate("/close/15");
        }}>Close Order</div>
      </div>
      <section className={style.lounge}>
        <Table status={TableStatus.unavailable}></Table>
        <Table status={TableStatus.dirty}></Table>
        <Table status={TableStatus.available}></Table>
        <Table status={TableStatus.occupied}></Table>
        <Table status={TableStatus.available}></Table>
        <Table status={TableStatus.occupied}></Table>
        <Table status={TableStatus.dirty}></Table>
        <Table status={TableStatus.available}></Table>
        <Table status={TableStatus.unavailable}></Table>
        <Table status={TableStatus.occupied}></Table>
        <Table status={TableStatus.unavailable}></Table>
        <Table status={TableStatus.occupied}></Table>
        <Table status={TableStatus.dirty}></Table>
        <Table status={TableStatus.occupied}></Table>
      </section>
    </>
  );
};

export default Lounge;
