import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";

export function MenuList(props) {
    return (
        <div className={s.container}>
           <MenuListItem onClick={props.onItemClick} difficulty = "Low" isSelected={props.difficulty === "Low"} />
           <MenuListItem onClick={props.onItemClick} difficulty = "Medium" isSelected={props.difficulty === "Medium"}  />
           <MenuListItem onClick={props.onItemClick} difficulty = "Hight" isSelected={props.difficulty === "Hight"}  />
           <MenuListItem onClick={props.onItemClick} difficulty = "Insane" isSelected={props.difficulty === "Insane"} />
        </div>
    );
}