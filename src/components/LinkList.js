import React ,{useState}from 'react';

function LinkList(  props ){
    return(
      <div>
        { props.name } : {props.source}-{props.target}
      </div>
    );
 }

export default LinkList;