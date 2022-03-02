import React, {useState} from 'react';

function AddTodo( {addTodo}){
    const[inputText,setInputText]= useState('');
    
    return (
      <form
        onSubmit = {e =>{
          e.preventDefault();
          if(!inputText.trim()){
            return;
          }
          addTodo(inputText);
          setInputText('');
        }}
        >
          <input 
            type="text"
            value={inputText}
            onChange= {e=>setInputText(e.target.value)}
            />
          <button type="submit">Add Todo</button>
  
  
        </form>
  
    );
  }
  

  export default AddTodo;
