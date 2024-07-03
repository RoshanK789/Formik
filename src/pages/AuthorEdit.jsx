import axios from "axios";
import React, { useEffect, useState } from "react";
import { ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const AuthorEdit = ({id}) => {
   
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    Author:'',
    DOB:'',
    Bio:'',
    Author_Books:''
  });
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(()=>
{
    Formik.setValues(editData)
},[editData])
  const fetchData = async () => {
    await axios
      .get(`https://665434421c6af63f4676d3db.mockapi.io/api/books/${id}`)
      .then((res) => setEditData(res.data))
      .catch((error) => console.log(error));
  };
  const validationSchema=Yup.object().shape({
   
    Author:Yup.string().required('Enter the Author name'),
    DOB:Yup.string().required('Enter the Author DOB'),
    Bio:Yup.string().required('Enter the Author Bio'),
    Author_Books:Yup.string().required('Enter the number of books written by Author'),

    
}) 
const Formik=useFormik({
    initialValues:
    {
       
        Author:'',
        DOB:'',
        Bio:'',
        Author_Books:''
    },
    validationSchema,
    onSubmit:async(values)=>{
            await axios
            .put(`https://665434421c6af63f4676d3db.mockapi.io/api/books/${id}`, values)
            .then((res) => console.log(res.data))
            .catch((error) => console.log(error));
      
          navigate("/Author");
        }
})
  return (
    <div>
      <div className="container mt-5">
      <form className="row g-3" onSubmit={Formik.handleSubmit}>

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
              Save
            </button>
          </div>
        </form>   
      </div>
    </div>
  );

};

export default AuthorEdit;