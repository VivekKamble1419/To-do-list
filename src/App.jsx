
import { useState } from 'react'
import Todolist from './componants/Todolist';
import "./index.css";

function App() {
  

  const [inputlist, setInputlist] = useState("");
  
  const [items, setItems]= useState([]);

  const itemEvent = (event) =>{
    setInputlist(event.target.value);
  };

  const listofItems =()=>{
    setItems((olditems)=>{
      return [...olditems, inputlist];
    })
    setInputlist("");
  };
  const deleteItems =(id)=>{
    setItems((olditems)=>{
      return olditems.filter((arrElements, index)=>{
        return index !== id;
      })
    })
  }
  return (
    <>
      <div className='main_div'>
        <div className='center_dev'>
          <h1>ToDo List</h1>        
          <input type="text" placeholder='Add Itoms' onChange={itemEvent} value={inputlist} required/>
          <button className='btn' onClick={listofItems}> + </button>  
        </div>
        <div className='lists'>
        <div className='listdiv'>           
            {items.map( (itemval,index)=>{
              return (
              <>
              <Todolist key={index} id={index} text={itemval} onSelect={deleteItems}/>
              </>       
            )} )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
