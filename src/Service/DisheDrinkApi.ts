import { Stream } from "stream";
import { DisheDrink } from "../Model/DisheDrink";
import ResponseApi from "../Type/ResponseApi";
import ApiConfig from "./ApiConfig";
import ImageType from "../Type/ImageType";

export const getAll = async ():Promise<DisheDrink[]> => {
        const response = (await ApiConfig.get<ResponseApi<DisheDrink[]>>('/DisheDrink')).data;
        return response.data;
      
}

export const create = async (dishe:DisheDrink):Promise<DisheDrink> => {
    const response = (await ApiConfig.post<ResponseApi<DisheDrink>>('/DisheDrink', dishe)).data;
    return response.data;
}

export const createImage = async (idDisheDrink: number, image:File):Promise<boolean> => {
    var bodyData = new FormData();
    bodyData.append('DisheDrinkId', String(idDisheDrink));
    bodyData.append('File', image); 
    const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }
    const response = (await ApiConfig.post<ResponseApi<boolean>>('/PhotoDisheDrink', bodyData, config)).data;
    return response.data;
}

export const getListImage = async (idDisheDrink: number):Promise<ImageType[]> => {
    const response = (await ApiConfig.get<ResponseApi<ImageType[]>>('/PhotoDisheDrink/'+idDisheDrink)).data;
    return response.data;
  
}

export const downloadImage = async (idPhoto: number) => {

    const response = (await ApiConfig.get('/PhotoDisheDrink/download/'+idPhoto,{
        responseType: "blob"
      }));
 
    let name = idPhoto.toString();
    const type = response.headers['content-type'];
    const blob = new Blob([response.data], { type: type});
    return new File([blob], name, { type: blob.type });  
}

