import style from "./Button.module.scss";
import classNames from "classnames";

interface propsButton {
    hidde?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    children?: React.ReactNode;
    type: "button" | "submit" | "reset";
    nipple?: "order" | "shut" | "item";
  }

const Button = ({ ...props }: propsButton) => {

    return(
        <button
        type={props.type}
        className={classNames({
          [style.button]: true,
          [style[`button__${props.nipple}`]]:true,
          [style.button__hidde]: props.hidde,
        })}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
}

export default Button;