import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "./Axios"
import { useState } from 'react'

const Update = () => {
  const {id}=useParams()
  const [userdata,setUserdata]=useState({
    stu_ID:"",
    stu_NAME:"",
    stu_NUMBER:"",
    stu_EMAIL:"",
    stu_EDUCATION:"",
    stu_YEAR:"",
    stu_COURSE:"",
    stu_PASSWORD:""
  })

  const handledata=(e)=>{
    e.preventDefault()
   console.log(userdata);
   axios.put("http://localhost:4000/register/"+id,userdata)
   .then(alert("ok"))
   .catch(err=>{console.log(err)})
   

  }
useEffect(()=>{
  axios.get("http://localhost:4000/register/"+id)
  .then(res=>setUserdata(res.data))
  .catch(error=>console.log(error))

},[])
  return (
    <div className="container">
      <div className="formdiv">
        <form action="">
          <div className="inputdiv">
            <label htmlFor="">ID</label>
            <input type="number" name='stu_ID' value={userdata.stu_ID} onChange={(e)=>{setUserdata({...userdata,stu_ID:e.target.value})}}/><br />
          </div>
          <div className="inputdiv">
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={userdata.stu_NAME} onChange={(e)=>{setUserdata({...userdata,stu_NAME:e.target.value})}}/><br />
          </div>
          <div className="inputdiv">
            <label htmlFor="">Number</label>
            <input type="number" name='number' value={userdata.stu_NUMBER} onChange={(e)=>{setUserdata({...userdata,stu_NUMBER:e.target.value})}}/><br />
          </div>
          <div className="inputdiv">
            <label htmlFor="">EMAIL</label>
            <input type="email" name='email'value={userdata.stu_EMAIL} onChange={(e)=>{setUserdata({...userdata,stu_EMAIL:e.target.value})}}/><br />
          </div>
          <div className="inputdiv">
          <select name="education" id="education" value={userdata.stu_EDUCATION} onChange={(e)=>{setUserdata({...userdata,stu_EDUCATION:e.target.value})}}>
            <option value="BE/Btech">BE/Btech</option>
            <option value="BCA">BCA</option>
            <option value="BSC">BSC</option>
            <option value="Diploma">Diploma</option>
            <option value="other">other</option>
          </select><br />
          </div>
          <div className="inputdiv" value={userdata.stu_YEAR} onChange={(e)=>{setUserdata({...userdata,stu_YEAR:e.target.value})}}>
          <select name="year" id="year">
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
          </div>
          <div className="inputdiv">
          <select name="course" id="course" value={userdata.stu_COURSE} onChange={(e)=>{setUserdata({...userdata,stu_COURSE:e.target.value})}}>
            <option value="JAVA Full stack">JAVA Full stack</option>
            <option value="MERN full tack">MERN full tack</option>
            <option value="PYTHON">PYTHON</option>
            <option value="Teting">Teting</option>
          </select>
          </div>
          <div className="inputdiv">
            <label htmlFor="password">password</label>
            <input type="password" name='password' value={userdata.stu_PASSWORD} onChange={(e)=>{setUserdata({...userdata,stu_PASSWORD:e.target.value})}}/>
          </div>
          <button type='submit' onClick={handledata}>update</button>
        </form>
      </div>
    </div>
  )
}

export default Update