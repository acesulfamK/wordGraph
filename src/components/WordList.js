import React, {useState} from 'react';

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

  export default Todo;
  
  
  