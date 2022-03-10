
import React, {useState} from 'react';

function AddLink( {addLink}){
    const[inputText,setInputText]= useState('');
    const[inputSource,setInputSource]= useState('');
    const[inputTarget,setInputTarget]= useState('');
  
    
    return (
      <form
        onSubmit = {e =>{
          e.preventDefault();
          if(!inputText.trim()){
            return;
          }
          addLink({"name":inputText,"source":Number(inputSource),"target":Number(inputTarget)});
          setInputText('');
          setInputSource('');
          setInputTarget('');
        }}
        >
          <input
            type="text"
            value={inputText}
            onChange= {e=>setInputText(e.target.value)}
            />

          <input
            type="text"
            value={inputSource}
            onChange= {e=>setInputSource(e.target.value)}
          />
            
          <input
            type="text"
            value={inputTarget}
            onChange= {e=>setInputTarget(e.target.value)}
          />
          <button type="submit">Add Links</button>
          
        </form>
  
    );
  }

export default AddLink;