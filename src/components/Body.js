import React, { useState } from 'react';
import AddLink from './AddLink';
import AddWord from './AddWord';
import WordList from './WordList';
import LinkList from './LinkList';
import GraphChart from './GraphChart';
import merge from "deepmerge";



function Body() {

    //WordList,LinkList,AddLink,AddWordコンポーネント用テストデータ
    const [ data, setData] = useState(
      { 
        "nodes":[
          {"word":"apple"},
          {"word":"orange"},
          {"word":"melon"},
          {"word":"lemon"},
          {"word":"peach"},
        ]
      ,
        "links":[
        {"name":"fruits","source":0,"target":1},
        {"name":"fruits","source":1,"target":2},
        {"name":"fruits","source":1,"target":3},
        {"name":"fruits","source":3,"target":4},
        ]
      }
      );
//GraphChartコンポーネント用テストデータ
      const [ data2, setData2] = useState(
        { 
          "nodes":[
            {"word":"apple"},
            {"word":"orange"},
            {"word":"melon"},
            {"word":"lemon"},
            {"word":"peach"},
          ]
        ,
          "links":[
          {"name":"fruits","source":0,"target":1},
          {"name":"fruits","source":1,"target":2},
          {"name":"fruits","source":1,"target":3},
          {"name":"fruits","source":3,"target":4},
          ]
        }
        );
    
      


    return (
      <div>
        <AddWord addWord={newWord =>setData(merge(data,{"nodes":[newWord]}))} />
        <AddLink addLink={newLink =>setData(merge(data,{"links":[newLink]}))} /> 
        <ul>
          Words List
          {data.nodes.map((node, index) => (
            <WordList key={index} text={node.word} />
          ))}
        </ul>
        ============================
        <ul>
          Links List
          {data.links.map((link, index) => (
          <LinkList key={index} name={link.name} source={link.source} target={link.target} /> 
          ))}
        </ul>
        ===========================
        <GraphChart data={data2} />
      </div>
    );
  }

  
export default Body;