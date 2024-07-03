import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Book = ({setId}) => {
  const [user, setUser] = useState([]);
  const navigate=useNavigate();
  const [deleteData,setDeleteData]=useState([]);
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios
      .get("https://665434421c6af63f4676d3db.mockapi.io/api/books")
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  };
  const handleEdit=(id)=>
    {
        setId(id)
        navigate(`/BookEdit/:${id}`)
    }
  const handleDelete=async(id)=>
    {
        await axios.delete(`https://665434421c6af63f4676d3db.mockapi.io/api/books/${id}`)
        .then((res)=>setDeleteData(res.data))
        .catch((error)=>console.log(error));
    }
  return (
    <div>
       
            <div className="row row-cols-1 row-cols-md-2 g-4 mx-0 px-5 py-2 ">
            
        <div >
            <h3 className="text-center p-2">Book Details</h3>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">Book_Title</th>
                <th scope="col">Author Name</th>
                <th scope="col">ISBN_Number</th>
                <th scope="col">Publication_Date</th>
                <th colSpan={2} className="text-center ">Action</th>
                
              </tr>
            </thead>
            <tbody>
                {user.map((element,index)=>
                {
                return(
                        <tr key={index}>
                            <td scope="row">{element.Book_Title}</td>
                            <td>{element.Author}</td>
                            <td>{element.ISBN_Number}</td>
                            <td>{element.Publication_Date}</td>
                            <td><button className="btn btn-primary " onClick={()=>{handleEdit(element.id)}}>< i className="ri-edit-line"></i></button></td>
                            <td><button className="btn btn-danger " onClick={()=>{handleDelete(element.id)}}><i className="ri-delete-bin-4-line"></i></button></td>
                         </tr>
                )
                })}
              
            </tbody>
          </table>
        
    <button className="btn btn-success" onClick={()=>{navigate('/Create')}}><i className="ri-add-box-line"></i> create</button>
  
        </div>
      </div>
     
    </div>
   
  );
};

export default Book;