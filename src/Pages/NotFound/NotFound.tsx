import { useNavigate } from "react-router-dom";
import style from "./NotFound.module.scss";
import Button from "../../Components/Button/Button";

const NotFound = () => {
    const navigate = useNavigate();

    return(
        <div className={style.conteiner}>
      

        <div className={style.conteiner__btn}>
           <Button
             type="button"
             children={"< Voltar"}
             nipple="item"
             onClick={() => {
               navigate(-1);
             }}
           />
         </div>
   
   
       </div>
    );
}
export default NotFound;