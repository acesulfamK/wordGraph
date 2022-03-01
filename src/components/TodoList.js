import React, { useState } from 'react';

const Todo = ( {text} )=>{
  const[completed,setState] = useState(false);
  return(
    <li
      onClick={ e => setState(!completed)}
      style={{
        textDecoration : completed ? 'line-through' : 'none'
      }}
      >
          {text}
      </li>
  )
}


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

function Edge( { text } ){
   const [dom, setDom]= useState(["dom!"]);
   const [cod, setCod]= useState(["cod!"]);
    
   return(
     <div>
       { text } : {cod}->{dom}
     </div>
   );
}


function TodoList() {
    const [todos, setTodo] = useState([]);
    const [ edges , setEdge ]= useState([
      "edge1",
      "edge2",
      "edge3",
    ]);
  
    // todosを基に<Todo />の配列を作成
    return (
      <div>
        <AddTodo addTodo={newTodo =>setTodo(todos.concat(newTodo))} />
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} text={todo} />
          ))}
        </ul>
        ============================
        <ul>
          {edges.map((edge, index) => (
            <Edge key={index} text={edge} />
          ))}
        </ul>
      </div>
    );
  }

  
export default TodoList;