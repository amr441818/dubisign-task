import  { useState } from "react"
import DropArea from "./components/DropArea"
import Card from "./components/Card"

const items = [
  {
  id: 1,
  order: 4,
  status:"left"
  },
  {
  id: 2,
  order: 3,
   status:"left"
  },
  {
  id: 3,
  order: 2,
   status:"left"
  },
  {
  id: 4,
  order: 1,
   status:"right"
  },
  {
  id: 5,
  order: 6,
   status:"left"
  },
  {
  id: 6,
  order: 5,
   status:"right"
  }
  ]

const App = () => {

  const [itemsArr, setItemArr] = useState(items)
  const [activeItem, setActiveItem] = useState<number|null>(null)

    const onDropHandler = (status:string, position:number)=>{
     

      if(activeItem === null || activeItem=== undefined) return;

      const itemToDrop = itemsArr[activeItem];

      const updatedArr = itemsArr.filter((_, index) => index !== activeItem)
      
      updatedArr.splice(position, 0, {...itemToDrop, status: status});
      setItemArr(updatedArr.sort((a,b) => a.order-b.order));
    
    }
    
  return (


    <div className='h-screen  m-auto flex items-center justify-center bg-violet-950 '>
<div className="grid grid-cols-2  w-[900px] h-auto bg-violet-900 rounded-[6px]">
<div className="flex flex-col justify-center border-e-[1px] border-purple-600 p-5 gap-4">
<DropArea onDrop={onDropHandler} status="left" position={0}/>
{itemsArr?.map((item, index) =>{

  if(item.status === "left") {
    return(
      <Card color="purple-700" setActiveItem={setActiveItem} status="left" index={index} onDropHandler={onDropHandler} order={item.order}/>
    )
  }



})}

</div>
<div className="flex flex-col justify-center  p-5 gap-4">
  <DropArea onDrop={onDropHandler} status="right" position={0}/>
{itemsArr?.map((item, index) =>{

  if(item.status === "right") {
    return(
      <Card color="purple-800" setActiveItem={setActiveItem} status="right" index={index} onDropHandler={onDropHandler} order={item.order}/>
    )
  }



})}

</div>

</div>

    </div>
  )
}

export default App