import React from "react"
import DropArea from "./DropArea";

type CardProps = {
    index: number;
     order: number;
     color?: string;
     status: string;
     setActiveItem: (value: React.SetStateAction<number | null>) => void;
     onDropHandler: (status: string, position: number) => void
}

const Card = (props:CardProps) => {
  return (
    <React.Fragment key={props.index}>
        
        
    <div  draggable onDragStart={()=>props.setActiveItem(props.index)} onDragEnd={()=>props.setActiveItem(null)}  className={`bg-${props.color}  text-white cursor-grab flex justify-center items-center rounded-[8px] h-[80px]`}>
     order {props.order}
    </div>
    <DropArea onDrop={props.onDropHandler} status={props.status} position={props.index + 1}/>
    </React.Fragment>
  )
}

export default Card