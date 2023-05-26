import classNames from "classnames";
import Button from "../../Components/Button/Button";
import InputDefault from "../../Components/Inputs/InputDefault/InputDefault";
import InputFile from "../../Components/Inputs/InputFile/InputFile";
import Select from "../../Components/Inputs/Select/Select";
import TextArea from "../../Components/Inputs/TextArea/TextArea";
import Option from "../../Type/Option";
import style from "./DisheDrinksRegister.module.scss";
import { useState, useEffect, Suspense } from "react";
import Carousel from "../../Components/Carousel/Carousel";
import { useNavigate } from "react-router-dom";
import RegisterDisheDrink from "../../State/Hooks/DisheDrink/useRegisterDisheDrink";
import Spinner from "../../Components/Spinner/Spinner";

const DisheDrinksRegister = () => {
  const navigate = useNavigate();

  const optionKind: Option[] = [
    { id: "", name: "Escolha um gênero" },
    { id: 1, name: "Prato" },
    { id: 2, name: "Bebida" },
  ];

  const [kind, setKind] = useState(0);
  const [message, setMessage] = useState("");

  const [title, setTitle] = useState("");
  const [descript, setDescript] = useState("");
  const [origin, setOrigin] = useState("");
  const [type, setType] = useState("");
  const [volume, setVolume] = useState("");
  const [price, setPrice] = useState("");
  const [imagens, setImagens] = useState<File[]>();
  
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {}, []);

  const aoSalvar = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    try {
      setSpinner(true);
     await RegisterDisheDrink(
        undefined,
        kind,
        title,
        descript,
        origin,
        type,
        Number(volume),
        Number(price),
        imagens
      );
      setSpinner(false);
      
    } catch (error) {
      setSpinner(false);
      let e = error as Error;
      setMessage(e.message);
    }
  };

  return (
    <>
      {spinner && <Spinner title="Registering"></Spinner>}
      {!spinner && (
        <form onSubmit={aoSalvar} className={style.container}>
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
                toChange={(value) => {
                  let i = Number(value);
                  setKind(i);
                }}
                required
              ></Select>

              <InputDefault
                id="title"
                type="text"
                title="Nome"
                maxCharacter={40}
                required
                value={title}
                toChange={(value) => setTitle(value)}
              ></InputDefault>
              <TextArea
                id="descript"
                title="Descrição"
                maxCharacter={350}
                required
                value={descript}
                toChange={(value) => setDescript(value)}
              ></TextArea>
            </div>

            <div>
              <InputDefault
                id="price"
                type="number"
                title="Preço"
                maxCharacter={10}
                value={price}
                toChange={(value) => setPrice(value)}
                required
              ></InputDefault>
              <InputFile
                id="file"
                title="Escolha Imagem"
                toChange={(value) => {
                  imagens
                    ? setImagens((prevState) => [value!, ...prevState!])
                    : setImagens([value!]);
                }}
                accept=".png, .jpg, .jpeg"
              ></InputFile>
            </div>

            <div
              className={classNames({
                [style.container__fields__drink]: kind !== 2,
              })}
            >
              <InputDefault
                id="origin"
                type="text"
                title="Origem"
                maxCharacter={50}
                value={origin}
                toChange={(value) => setOrigin(value)}
              ></InputDefault>
              <InputDefault
                id="type"
                type="text"
                title="Tipo"
                maxCharacter={50}
                value={type}
                toChange={(value) => setType(value)}
              ></InputDefault>
              <InputDefault
                id="volume"
                type="number"
                title="Volume (ml)"
                maxCharacter={10}
                value={volume}
                toChange={(value) => setVolume(value)}
              ></InputDefault>
            </div>
          </div>
          <div className={style.container__carousel}>
            <Carousel imagens={imagens}></Carousel>
          </div>
        </form>
      )}
    </>
  );
};
export default DisheDrinksRegister;
