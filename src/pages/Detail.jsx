import React, { useEffect } from 'react'
import axiosInstance from "./Axios"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {
  let [record,setRecord]=useState([])
  let navigate=useNavigate()


  const handledelete=(id)=>{
    axios.delete("http://localhost:4000/register/"+id)
    .then(res=>{
      alert("ok")
      navigate("/")
      
    })

  }

  useEffect(()=>{
       axiosInstance.get("http://localhost:4000/register")
       .then(x=>{
        setRecord(x.data)
       })
      
  },[])

  return (
   <div className="justify-content-center align-item-center w-100 vh-100">
    <div className="container">
      <table className='table'>
        <thead className=''>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>NUMBER</th>
            <th>EMAIL</th>
            <th>EDUCATION</th>
            <th>YEAR</th>
            <th>COURSE</th>
            <th>PAS</th>
            <th>Action</th>
          </tr>
        </thead>
        
        <tbody>
         {
          record.map((x,i)=>{
            return(
              <tr key={i}>
                <td>{x.stu_ID}</td>
                <td>{x.stu_NAME}</td>
                <td>{x.stu_NUMBER}</td>
                <td>{x.stu_EMAIL}</td>
                <td>{x.stu_EDUCATION}</td>
                <td>{x.stu_YEAR}</td>
                <td>{x.stu_COURSE}</td>
                <td>{x.stu_PASSWORD}</td>
                <td><Link className='btn btn-sm btn-success' to={`/update/${x.id}`}>update</Link></td>
                <td><Link className='btn btn-sm btn-dark' to="/delete" onClick={(e)=>handledelete(x.id)}>delete</Link></td>
              </tr>
            
            )
          })
         }
        </tbody>
      </table>
  
    </div>
   </div>
  )
}

export default Detail