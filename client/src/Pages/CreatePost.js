import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import axios from "axios";

function CreatePost() {

    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must a Title"),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required(),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/post",data).then((response)=>{
        console.log("It Worked");
    });
};

    return (
    <div className="createPostPage">  
        <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit} 
            validationSchema={validationSchema}
        >
            <Form className="formContainer">
                <label> Title: </label>
                <ErrorMessage name="title" component="span"/>
                <Field 
                autocomplete="off"
                id = "inputCreatePost" 
                name="title" 
                placeholder="(Ex. Jhon..)"
                />
                <label> Post: </label>
                <ErrorMessage name="postText" component="span"/>
                <Field 
                autocomplete="off"
                id = "inputCreatePost" 
                name="postText" 
                placeholder="(Ex. Post..)"
                />
                <label> User Name: </label>
                <ErrorMessage name="username" component="span"/>
                <Field 
                autocomplete="off"
                id = "inputCreatePost" 
                name="username" 
                placeholder="(Ex. Jhon123..)"
                />

                <button type="submit"> Create Post</button>
            </Form>
        </Formik>
    </div>
    );
    
}

export default CreatePost;
