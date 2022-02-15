import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postColRef = collection(db, "posts");
    let navigate = useNavigate()

    const createPost = async () => {
        await addDoc(postColRef, {
            title,
            postText,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
        })
        navigate("/")
    }

    useEffect(() => {
        if(!isAuth) {
            navigate('/login')
        }
    }, [])

    return (
        <div className="cp-page">
            {" "}
            <div className="cp-container">
                <h1>Create A Post</h1>
                <div className="input-group">
                    <label>Title:</label>
                    <input placeholder="Title..."
                        onChange={(event) => {
                            setTitle(event.target.value)
                        }} />
                </div>
                <div className="input-group">
                    <label>Post:</label>
                    <textarea placeholder="Post..."
                        onChange={(event) => {
                            setPostText(event.target.value);
                        }} />
                </div>
                <button onClick={createPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost;