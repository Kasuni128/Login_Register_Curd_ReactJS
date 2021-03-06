import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios  from "axios";

function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    useEffect(() =>{
        axios.get(`http://localhost:3001/post/byId/${id}`).then((response)=>{
            setPostObject(response.data);
        }
          );
    })
    
    return (
        <div className="post">
            <div className="leftSide">
                <div className="post" >
                <div className="title">{postObject.title}</div>
                <div className="postText">{postObject.postText}</div>
                <div className="footer">{postObject.username}</div>
                </div>
            </div>
            <div className="rightSide"></div>
          
        </div>
    );
}

export default Post;
