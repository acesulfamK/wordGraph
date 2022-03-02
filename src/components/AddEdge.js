
import React, {useState} from 'react';

function AddEdge( {addEdge}){
    const[inputText,setInputText]= useState('');
    const[inputCod,setInputCod]= useState('');
    const[inputDom,setInputDom]= useState('');
  
    
    return (
      <form
        onSubmit = {e =>{
          e.preventDefault();
          if(!inputText.trim()){
            return;
          }
          addEdge({name:inputText,cod:inputCod,dom:inputDom});
          setInputText('');
          setInputCod('');
          setInputDom('');
        }}
        >
          <input
            type="text"
            value={inputText}
            onChange= {e=>setInputText(e.target.value)}
            />
          <input
            type="text"
            value={inputCod}
            onChange= {e=>setInputCod(e.target.value)}
          />
          <input
            type="text"
            value={inputDom}
            onChange= {e=>setInputDom(e.target.value)}
          />
          <button type="submit">Add Edge</button>
          
        </form>
  
    );
  }

export default AddEdge;