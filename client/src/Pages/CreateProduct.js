import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import axios from "axios";

function CreateProduct() {

    const initialValues = {
        Productname: "",
        prodcutprice: "",
        productdes: "",
    };

    const validationSchema = Yup.object().shape({
        Productname: Yup.string().required("You must a Title"),
        prodcutprice: Yup.string().required(),
        productdes: Yup.string().min(3).max(15).required(),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/product",data).then((response)=>{
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
                <label> Product Name: </label>
                <ErrorMessage name="Productname" component="span"/>
                <Field 
                autocomplete="off"
                id = "inputCreatePost" 
                name="Productname" 
                placeholder="Enter Product Name"
                />
                <label> Product Price: </label>
                <ErrorMessage name="prodcutprice" component="span"/>
                <Field 
                autocomplete="off"
                id = "inputCreatePost" 
                name="prodcutprice" 
                placeholder="Enter Product Price"
                />
                <label> Product Description: </label>
                <ErrorMessage name="productdes" component="span"/>
                <Field 
                autocomplete="off"
                id = "inputCreatePost" 
                name="productdes" 
                placeholder="Enter product Description"
                />
                <label> Product Description: </label>
                <ErrorMessage name="qty" component="span"/>
                <Field 
                autocomplete="off"
                id = "inputCreatePost" 
                name="qty" 
                placeholder="Enter product Description"
                />
                <button type="submit"> Add New Product</button>
            </Form>
        </Formik>
    </div>
    );
    
}

export default CreateProduct;
