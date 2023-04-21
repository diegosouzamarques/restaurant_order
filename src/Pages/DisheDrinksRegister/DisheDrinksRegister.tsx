import classNames from "classnames";
import Button from "../../Components/Button/Button";
import InputDefault from "../../Components/Inputs/InputDefault/InputDefault";
import InputFile from "../../Components/Inputs/InputFile/InputFile";
import Select from "../../Components/Inputs/Select/Select";
import TextArea from "../../Components/Inputs/TextArea/TextArea";
import Option from "../../Type/Option";
import style from "./DisheDrinksRegister.module.scss";
import { useState } from "react";
import Carousel from "../../Components/Carousel/Carousel";

const DisheDrinksRegister = () => {
  const optionKind: Option[] = [
    { id: 0, name: "Escolha um gênero" },
    { id: 1, name: "Prato" },
    { id: 2, name: "Bebida" },
  ];
  const [file, setFile] = useState("");
  const [kind, setKind] = useState(0);

  return (
    <section className={style.container}>
      <h1>DisheDrinksRegister</h1>
      <Button
        type="submit"
        nipple="order"
        className={style.container__btn_Salvar}
      >
        Gravar
      </Button>
      <div className={style.container__fields}>
    
        <div>
          <Select
            id="kind"
            title="Gênero"
            options={optionKind}
            selectedValue={optionKind[0]}
            toChange={(value) => {let i = Number(value); console.log(optionKind[i]); setKind(i)}}
          ></Select>

          <InputDefault
            id="title"
            type="text"
            title="Name"
            maxCharacter={40}
            required
          ></InputDefault>
          <TextArea
            id="descript"
            title="Descrição"
            maxCharacter={350}
            required
          ></TextArea> 
      
        </div>
                
        <div>
          <InputDefault
            id="price"
            type="text"
            title="Preço"
            maxCharacter={10}
          ></InputDefault>
                    <InputFile
            id="file"
            title="Escolha Imagem"
            value={file}
            toChange={(value) => setFile(value)}
          ></InputFile> 
        </div> 

        <div className={classNames({[style.container__fields__drink]:kind !== 2})}>
          <InputDefault
            id="origin"
            type="text"
            title="Origem"
            maxCharacter={50}
          ></InputDefault>
          <InputDefault
            id="type"
            type="text"
            title="Tipo"
            maxCharacter={50}
          ></InputDefault>
          <InputDefault
            id="volume"
            type="text"
            title="Volume (ml)"
            maxCharacter={10}
          ></InputDefault>
        </div>

      </div>
      <div className={style.container__photos}>
         <Carousel></Carousel>
      </div>
    </section>
  );
};
export default DisheDrinksRegister;
