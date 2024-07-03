import axios from "axios";
import React, { useEffect, useState } from "react";
import { ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const BookEdit = ({id}) => {
   
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    Book_Title:'',
    Author:'',
    Publisher:'',
    ISBN_Number:'',
    Publication_Date:'',
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
    Book_Title:Yup.string().required('Enter the Book Title'),
    Author:Yup.string().required('Enter the Author name'),
    Publisher:Yup.string().required('Enter the Publisher name'),
    ISBN_Number:Yup.string().required('Enter the ISBN_Number'),
    Publication_Date:Yup.string().required('Enter the Publication Date'),

    
}) 
const Formik=useFormik({
    initialValues:
    {
        Book_Title:'',
        Author:'',
        Publisher:'',
        ISBN_Number:'',
        Publication_Date:''
    },
    validationSchema,
    onSubmit:async(values)=>{
            await axios
            .put(`https://665434421c6af63f4676d3db.mockapi.io/api/books/${id}`, values)
            .then((res) => console.log(res.data))
            .catch((error) => console.log(error));
      
          navigate("/Book");
        }
})
  return (
    <div>
      <div className="container mt-5">
        <h3 className="text-center ">Book Details Edit</h3>
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

export default BookEdit;