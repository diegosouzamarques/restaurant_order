import style from "./Lounge.module.scss";
import Table from "../../Components/Table/Table";
import { TableStatus } from "../../Enum/TableStatus";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const Lounge = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.Buttons} >
        <Button type="button" nipple="order" 
        onClick={(e) => {
          e.preventDefault();
          navigate("/order");
        }}>Abrir Mesa</Button>
        <Button type="button" nipple="shut"
        onClick={(e) => {
          e.preventDefault();
          navigate("/close/15");
        }}>Fechar Mesa</Button>
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
