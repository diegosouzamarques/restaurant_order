import { useNavigate } from "react-router-dom";
import MenuItem from "../../Components/MenuItem/MenuItem";

const Menu = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return <MenuItem show={true} onBack={onBack}></MenuItem>;
};

export default Menu;
