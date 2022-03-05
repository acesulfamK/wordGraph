import React, { useState } from 'react';
import AddEdge from './AddEdge';
import AddTodo from './AddTodo';
import Todo from './Todo';
import Edge from './Edge'
import GraphChart from './GraphChart';





function TodoList() {
    const [todos, setTodo] = useState([]);
    const [ edges , setEdge ]= useState([]);
    // todosを基に<Todo />の配列を作成
    const data = {
      nodes:[
        {"word":"apple","id":0},
        {"word":"orange","id":1},
        {"word":"melon","id":2}
      ]
    ,
      links:[
      {"id":1,"source":0,"target":1},
      {"id":2,"source":1,"target":2}
      ]
    };

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
        ===========================
        <GraphChart data={data} />
      </div>
    );
  }

  
export default TodoList;