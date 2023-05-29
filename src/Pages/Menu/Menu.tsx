import { useNavigate } from "react-router-dom";
import MenuItem from "../../Components/MenuItem/MenuItem";
import { ListDisheDrink } from "../../Service/Controller/DisheDrinkController";
import { DisheDrink } from "../../Model/DisheDrink";
import { useState, useEffect } from "react";

const Menu = () => {
  const navigate = useNavigate();
  const [pratos, setPratos] = useState<DisheDrink[]>([]);

  const onBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    ListDisheDrink().then(rs => {setPratos(rs); console.log(rs)}).catch(console.log);
  }, []);

  return <MenuItem show={true} onBack={onBack} listDisheDrink={pratos}></MenuItem>;
};

export default Menu;
