import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";

type SpinnerBoxProps = {
    visible: boolean;
    children?: React.ReactNode;
    title?: string | undefined
  };
const SpinnerBox = ({...props}:SpinnerBoxProps) => {
    const [show, setShow] = useState(false);
    useEffect(()=>{
        setShow(props.visible);
    },[props.visible]);
    return(
        <>
        {show && <Spinner title={props.title}></Spinner>}
        {!show && (props.children)}
        </>
    )
}

export default SpinnerBox;