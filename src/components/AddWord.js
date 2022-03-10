import React, {useState} from 'react';

function AddWord( {addWord}){
    const[inputText,setInputText]= useState('');
    
    return (
      <form
        onSubmit = {e =>{
          e.preventDefault();
          if(!inputText.trim()){
            return;
          }
          addWord({"word":inputText});
          setInputText('');
        }}
        >
          <input 
            type="text"
            value={inputText}
            onChange= {e=>setInputText(e.target.value)}
            />
          <button type="submit">Add Word</button>
  
  
        </form>
  
    );
  }
  

  export default AddWord;
