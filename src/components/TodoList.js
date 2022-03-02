import React, { useState } from 'react';
import AddEdge from './AddEdge';
import AddTodo from './AddTodo';
import Todo from './Todo';




function Edge(  props ){
   return(
     <div>
       { props.name } : {props.cod}-{props.dom}
     </div>
   );
}

function TodoList() {
    const [todos, setTodo] = useState([]);
    const [ edges , setEdge ]= useState([]);
    // todosを基に<Todo />の配列を作成
    return (
      <div>
        <AddTodo addTodo={newTodo =>setTodo(todos.concat(newTodo))} />
        <AddEdge addEdge={newEdge =>setEdge(edges.concat(newEdge))} />
        <ul>
          words
          {todos.map((todo, index) => (
            <Todo key={index} text={todo} />
          ))}
        </ul>
        ============================
        <ul>
          edges
          {edges.map((edge, index) => (
            <Edge key={index} name={edge.name} cod={edge.cod} dom={edge.dom} />
          ))}
        </ul>
      </div>
    );
  }

  
export default TodoList;