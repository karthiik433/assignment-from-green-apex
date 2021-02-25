import React from "react";

function Pagination(props){
    const pageNumbers = [];
   
    for(let i=1;i<=Math.ceil(props.posts.length/20);i++){
        pageNumbers.push(i);
    }

    return (
        <>
        <div style={{display:"flex"}}>
            {pageNumbers && pageNumbers.map((item,idx)=>{
                return (
                   <a href="#"  style={{textDecoration:"none",marginLeft:"10px"}} onClick={()=>props.pageNumber(idx)}><span key={idx}>{item}</span></a>
                )
            })}
        </div>
        </>
    )
}

export default Pagination;