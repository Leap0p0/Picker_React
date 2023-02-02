import { useState } from "react";
import s from "./style.module.css";

export function MenuListItem(props) {
    const [isHovered, setIsHovered] = useState(false);

    function getBackground(){
        if (isHovered)
            return "#a5e9ff"
        else if (props.isSelected)
            return "#26baea"
        else
            return "#eff0ef"
    }
    
    return (
        <div 
            onClick={() => props.onClick(props.difficulty)}
            style={{ backgroundColor: getBackground()}} className={s.container} onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)}
        >
            Set to : {props.difficulty}
        </div>
    );
}