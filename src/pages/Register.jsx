import React, { useState } from 'react'
import axiosInstance from "./Axios"
import { useNavigate } from 'react-router-dom'


const Register = () => {
    let [stu_ID,setID]=useState()
    let [stu_NAME,setNAME]=useState()
    let [stu_NUMBER,setNUMBER]=useState()
    let [stu_EMAIL,setEMAIL]=useState()
    let [stu_EDUCATION,setEDUCATION]=useState()
    let [stu_YEAR,setYEAR]=useState()
    let [stu_COURSE,setCOURSE]=useState()
    let [stu_PASSWORD,setPASSWORD]=useState()
    let navigate=useNavigate()

    let payload={
        stu_ID:stu_ID,
        stu_NAME:stu_NAME,
        stu_NUMBER:stu_NUMBER,
        stu_EMAIL:stu_EMAIL,
        stu_EDUCATION:stu_EDUCATION,
        stu_YEAR:stu_YEAR,
        stu_COURSE:stu_COURSE,
        stu_PASSWORD:stu_PASSWORD
    }

    const handledata=(e)=>{
        e.preventDefault()
        console.log(stu_ID,stu_NAME,stu_NUMBER,stu_EMAIL,stu_EDUCATION,stu_YEAR,stu_COURSE,stu_PASSWORD);
        let data= axiosInstance.post("http://localhost:4000/register",payload)
        console.log(data);
        navigate("/")
    }
    

  return (
    <div className="justify-content-center align-item-center w-100 vh-100 d-flex mt-2">
        <div className="">
            <form action="" className='w-100 border bg-secondary text-white p-2'>
           <label htmlFor="">Id</label>
            <input type="number" name="stu_ID" className='form-control' placeholder='enter ID' onChange={(e)=>setID(e.target.value)}/> 
           <label htmlFor="name">name</label>
            <input type="text" name="stu_NAME" className='form-control' placeholder='enter name' onChange={(e)=>setNAME(e.target.value)}/> 
          <label htmlFor="number">number</label>
            <input type="number"  name='stu_NUMBER' className='form-control' placeholder='enter number'onChange={(e)=>setNUMBER(e.target.value)}/> 
          <label htmlFor="email">email</label>
            <input type="E_mail" name="stu_EMAIL" className='form-control' placeholder='enter email' onChange={(e)=>setEMAIL(e.target.value)}/>
            <select name="education" id="education" className='form-control' onChange={(e)=>setEDUCATION(e.target.value)}>
                <option value="BE/BTech">BE/BTech</option>
                <option value="BCA">BCA</option>
                <option value="BSC">BSC</option>
                <option value="Diploma">Diploma</option>
                <option value="Other">Other</option>
            </select>
            <select name="YOP" id="yop" className='form-control' onChange={(e)=>setYEAR(e.target.value)}>
             <option value="2023">2023</option>
             <option value="2022">2022</option>
             <option value="2021">2021</option>
             <option value="2020">2020</option>
            </select>
            <select name="course" id="course" className='form-control' onChange={(e)=>setCOURSE(e.target.value)}>
                <option value="JAVA Full stack">JAVA Full stack</option>
                <option value="MERN full stack">MERN full tack</option>
                <option value="PYTHON">PYTHON</option>
                <option value="Testing">Teting</option>
            </select>
           
            <input type="password" name='stu_PASSWORD' className='form-control' placeholder='enter password' onChange={(e)=>setPASSWORD(e.target.value)}/>
            <button onClick={handledata} className='btn btn-success btn-sm w-50 p-2 border'>Add</button>
            </form>
        </div>
    </div>
  )
}

export default Register