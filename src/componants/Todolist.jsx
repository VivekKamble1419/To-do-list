import "../index.css"
export default function Todolist(props) {
   

  return (
    <>
    <div className="to_style"> 
    <div className="deletebtn" >
    <button onClick={()=>{
      props.onSelect(props.id);
      }}>x</button>
    </div>
    <div className="displedlist">
    <p className="actuallist">{props.text}</p>
    </div>    
    </div>
    </>
  )
}
