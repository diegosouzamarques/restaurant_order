import style from "./Lounge.module.scss";
import Table from "../../Components/Table/Table";
import { TableStatus } from "../../Enum/TableStatus";
import Button from "../../Components/Button/Button";

const Lounge = () => {
  return (
    <>
      <div className={style.Buttons} >
        <Button type="button" nipple="order">Abrir Mesa</Button>
        <Button type="button" nipple="shut">Fechar Mesa</Button>
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
