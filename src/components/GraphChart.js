import { useD3 } from './hooks/useD3';
import React from 'react';
import * as d3 from 'd3';

function GraphChart({ data }) {
  const ref = useD3(

    (svg) => {
    svg.append("g")
      .attr("class","link");

    svg.append("g")
      .attr("class","node");
      
    svg.append("g")
      .attr("class","text");
     

      // 2. svg要素を配置
      var link = d3.select("g.link")
        .selectAll("line")
        .data(data.links)
        .enter()
        .append("line")
        .attr("stroke-width", 1)
        .attr("stroke", "black");
     
      var node = d3.select("g.node")
        .selectAll("circle")
        .data(data.nodes)
        .enter()
        .append("circle")
        .attr("r", 7)
        .attr("fill", "LightSalmon");
      
        var text = d3.select("g.text")
        .selectAll("text")
        .data(data.nodes)
        .enter()
        .append("text")
        .attr("font-size","10px")
        .attr("fill","white")
        .text(function(d){ return d.word});
        
      // 3. forceSimulation設定
      var simulation = d3.forceSimulation()
        .force("link", d3.forceLink())
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(200, 150));
     
      simulation
        .nodes(data.nodes)
        .on("tick", ticked);
    
      simulation.force("link")
        .links(data.links);
     
      // 4. forceSimulation 描画更新用関数
      function ticked() {
        link
          .attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });
        node
          .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
        text
          .attr("x", function(d) { return d.x; })
          .attr("y", function(d) { return d.y; });
      }
      
    },
    [data.nodes.length,data.links.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="plot-area" />

    </svg>
  );
}

export default GraphChart;