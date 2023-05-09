import { atom } from "recoil";
import { DisheDrink } from "../../Model/DisheDrink";

export const DisheDrinks = atom<DisheDrink[]>({
    key:"DisheDrinks",
    default:[
        {
            id:1,
            kind:1,
            title: "Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita",
            descript: "Vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite, tomate e orégano) Vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite,tomate e orégano)",
            origin: "Italia",
            type: "Seco",
            volume: "8 pedaços",
            price: 85.36
        },
        {
            id:2,
            kind:1,
            title: "Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita",
            descript: "Vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite, tomate e orégano) Vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite,tomate e orégano)",
            origin: "Italia",
            type: "Seco",
            volume: "8 pedaços",
            price: 85.36
        },
        {
            id:3,
            kind:1,
            title: "Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita Pizza Marguerita",
            descript: "Vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite, tomate e orégano) Vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite,tomate e orégano)",
            origin: "Italia",
            type: "Seco",
            volume: "8 pedaços",
            price: 85.36
        }
    ]
});