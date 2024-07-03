import axios from "axios";
import React, { useState } from "react";
import { ErrorMessage, Field,Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [createData, setCreateData] = useState({ 
   Book_Title:'',
   Author:'',
   Publisher:'',
   ISBN_Number:'',
   Publication_Date:'',
   DOB:'',
   Bio:'',
   Author_Books:''
  });
  const validationSchema=Yup.object().shape({
    Book_Title:Yup.string().required('Enter the Book Title'),
    Author:Yup.string().required('Enter the Author name'),
    Publisher:Yup.string().required('Enter the Publisher name'),
    ISBN_Number:Yup.string().required('Enter the ISBN_Number'),
    Publication_Date:Yup.string().required('Enter the Publication Date'),
    DOB:Yup.string().required('Enter the Author DOB'),
    Bio:Yup.string().required('Enter the Author Bio'),
    Author_Books:Yup.string().required('Enter the number of books written by Author'),

    
}) 


  const Formik=useFormik({
    initialValues:createData,
    validationSchema,
    onSubmit:async(values)=>
      {
        await axios
        .post(`https://665434421c6af63f4676d3db.mockapi.io/api/books`, values)
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));
  
      navigate("/");
      }

  })
  return (
    <div className="m-5">
       <form className="row g-3" onSubmit={Formik.handleSubmit}>
          <div className="col-md-6">
            <label className="form-label">Book_Title</label>
            <input
              type="text"
              className="form-control"
              name="Book_Title"
              value={Formik.values.Book_Title}
              onChange={Formik.handleChange}
            />
            <p className="error">{Formik.errors.Book_Title}</p>
          </div>
          <div className="col-md-6">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              name="Author"
              value={Formik.values.Author}
              onChange={Formik.handleChange}
            />
            <p className="error">{Formik.errors.Author}</p>
          </div>
          <div className="col-6">
            <label className="form-label">Publisher</label>
            <input
              type="text"
              className="form-control"
              name="Publisher"
              value={Formik.values.Publisher}
              onChange={Formik.handleChange}
            />
            <p className="error">{Formik.errors.Publisher}</p>
          </div>
          <div className="col-6">
            <label className="form-label">ISBN_Number</label>
            <input
              type="text"
              className="form-control"
              name="ISBN_Number"
              value={Formik.values.ISBN_Number}
              onChange={Formik.handleChange}
            />
            <p className="error">{Formik.errors.ISBN_Number}</p>
          </div>
          <div className="col-6">
            <label className="form-label">Publication_Date</label>
            <input
              type="text"
              className="form-control"
              name="Publication_Date"
              value={Formik.values.Publication_Date}
              onChange={Formik.handleChange}
            />
            <p className="error">{Formik.errors.Publication_Date}</p>
          </div>
          <div className="col-6">
            <label className="form-label">DOB</label>
            <input
              type="text"
              className="form-control"
              name="DOB"
              value={Formik.values.DOB}
              onChange={Formik.handleChange}
            />
            <p className="error">{Formik.errors.Book_TDOBitle}</p>
          </div>
          <div className="col-6">
            <label className="form-label">Bio</label>
            <input
              type="text"
              className="form-control"
              name="Bio"
              value={Formik.values.Bio}
              onChange={Formik.handleChange}
            />
            <p className="error">{Formik.errors.Bio}</p>
          </div>
          <div className="col-6">
            <label className="form-label">Author_Books</label>
            <input
              type="text"
              className="form-control"
              name="Author_Books"
              value={Formik.values.Author_Books}
              onChange={Formik.handleChange}
            />
            <p className="error">{Formik.errors.Author_Books}</p>
          </div>


          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>    
    </div>
  );
};

export default Create;