import{ useState } from "react"

type DropAreaProps ={ onDrop: (status: string, position: number) => void; status: string; position: number; }
const DropArea = (props:DropAreaProps) => {
    const [showDropArea, setShowDropArea] = useState(false)
    const handleTouchStart = () => setShowDropArea(true);
    const handleTouchMove = () => setShowDropArea(true);
    const handleTouchEnd = () => {
      setShowDropArea(false);
      props.onDrop(props.status, props.position);
    };

  return (
    <div onDragEnter={()=>setShowDropArea(true)} 
    onDragLeave={()=>setShowDropArea(false)} 
    onDrop={()=> {
        
        setShowDropArea(false)
        props.onDrop(props.status, props.position)
    }}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
    onDragOver={(e)=>e.preventDefault()}
    className={ showDropArea? `bg-gray-100 flex opacity-50 justify-center items-center border-2 border-gray-200 border-solid p-7 transition-all ease-out duration-[5000] `: "opacity-0 transition-all ease-out duration-[5000] h-1"}>
        Drop here
        </div>
  )
}

export default DropArea