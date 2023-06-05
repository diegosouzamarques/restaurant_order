import { useNavigate } from "react-router-dom";
import MenuItem from "../../Components/MenuItem/MenuItem";
import { ListDisheDrink } from "../../Service/Controller/DisheDrinkController";
import { DisheDrink } from "../../Model/DisheDrink";
import { useState, useEffect } from "react";
import SpinnerBox from "../../Components/SpinnerBox/SpinnerBox";

const Menu = () => {
  const navigate = useNavigate();
  const [pratos, setPratos] = useState<DisheDrink[]>([]);
  const [spinner, setSpinner] = useState(false);

  const onBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    setSpinner(true);
    ListDisheDrink()
      .then((rs) => {
        setPratos(rs);
      })
      .finally(() => setSpinner(false))
      .catch(console.log);
  }, []);

  return (
    <SpinnerBox visible={spinner}>
      <MenuItem show={true} onBack={onBack} listDisheDrink={pratos}></MenuItem>
    </SpinnerBox>
  );
};

export default Menu;
