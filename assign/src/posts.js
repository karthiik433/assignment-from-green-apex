import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
function Post(props){
   
    console.log(props.numberOfPosts);
    let finalPost = props.posts.slice(props.numberOfPosts*20,props.numberOfPosts*20+20);
    let [showJsonData,setData] = useState(false);
    let [data,setDat] = useState(null);

    const [modalIsOpen,setModalOpen] = useState(true);
    return(
        <>
        {showJsonData ?
        <>
       <Modal isOpen={modalIsOpen} onRequestClose={()=>{
           setData(false)
           setModalOpen(false)}}>
            <button onClick={()=>{
                setData(false)
                setModalOpen(false)}}>close</button>
           <p>{data}</p>
       </Modal>
        </>
        :
        <>
        <thead style={{border:"2px solid black"}}>
            <tr style={{border:"2px solid black"}}>
            <th style={{border:"2px solid black"}}>Serial Number:</th>
            <th style={{border:"2px solid black"}}>Title</th>
            <th style={{border:"2px solid black"}}>Author</th>
            <th style={{border:"2px solid black"}}>Created_at</th>
            <th style={{border:"2px solid black"}}>URL</th>
            </tr>
        </thead>
        <tbody>
        {finalPost && finalPost.map((item,idx)=>{
            return (
                <tr key ={idx} onClick={()=>{
                    setModalOpen(true);
                    setDat(JSON.stringify(item));
                    console.log(item);
                    setData(true)}}>
                <td style={{border:"2px solid black"}}>{idx+1}</td>
                <td style={{border:"2px solid black"}}>{item.title}</td>
                <td style={{border:"2px solid black"}}>{item.author}</td>
                <td style={{border:"2px solid black"}}>{item.created_at}</td>
                <td style={{border:"2px solid black"}}>{item.url}</td>
                </tr>
            )
        })}
        </tbody>
        </>
        }
        </>
        
    )
}

export default Post;