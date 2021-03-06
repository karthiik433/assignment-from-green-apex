import React, { useEffect, useState } from "react";
import Post from "./posts";
import Pagination from "./pagination";


function App() {
  let count = 0;
  let [posts,setPosts] = useState([]);
  let [pageNum,setPageNum] = useState(0);
  //console.log("karthik")
  useEffect(()=>{
    const id = setInterval(()=>{
      fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${count}`)
      .then((res)=>res.json())
      .then((r)=>{
        for(let i=0;i<r.hits.length;i++){
          posts.push(r.hits[i]);
        }
        setPosts([...posts]);
        console.log(r.hits);
        
      });
      count+=1;
      console.log(count);
      if(count>48){
        clearInterval(id);
      }
    },10000)
    
    return ()=>clearInterval(id)
    
  },[]);

  const pageNumber = (number)=>{
    setPageNum(number);
  }
  return (
   <>
   <Pagination  posts={posts} pageNumber={pageNumber}/>
   {posts.length>0 ? <Post posts={posts} numberOfPosts={pageNum}/> : <h1>Loading...</h1>}
   </>
  );
}

export default App;
