import React, { useState,useEffect } from 'react'
import axiosInstance from './Axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const Coursedetail = () => {
  let {id}=useParams()

 let [jsoncourse,setJsoncourse]=useState([])
 let [course,setCourse]=useState()
 let navigate=useNavigate()

 const handledata=(e)=>{
  e.preventDefault()
  console.log(jsoncourse)
 console.log(course)
 navigate("/detail")
 }
useEffect(()=>{
  axiosInstance.get("http://localhost:4000/register")
 .then(res=>{
  setJsoncourse(res.data)
  console.log(course);
  console.log(jsoncourse);

 })
},[])
 
  return (
    <div className="coursemaindiv">
        <div className="justify-content-center align-item-center w-100 vh-50 d-flex">
            <form action="" className='w-50 p-5 bg-secondary'>
            <select name="course" id="" className='form-control' onChange={(e)=>{setCourse(e.target.value)}}>
                <option value="MERN full stack">MERN full stack</option>
                <option value="JAVA full stack">JAVA full stack</option>
                <option value="PYTHON">PYTHON</option>
                <option value="Testing">Testing</option>
                <option value="Other">Other</option>
            </select><br />
            <button onClick={handledata} className='btn btn-info btn-sm'>show Detail</button>
        
            </form>
        </div>
    </div>
  )
}

export default Coursedetail