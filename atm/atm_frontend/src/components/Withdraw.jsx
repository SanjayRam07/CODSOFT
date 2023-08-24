import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import Navbar from './Navbar';


export default function Withdraw() {

  const [amt, setAmt] = useState("");
  const [password, setPassword] = useState("");

  const sessionJson = sessionStorage.getItem('user');
  const sessionValue = JSON.parse(sessionJson);  

  const withdraw = async () => {
    console.log(sessionValue.accNo);
    const wd = await fetch("http://localhost:5000/transaction/withdraw",{
        method:"POST",
        body: JSON.stringify({"accNo":sessionValue.accNo, "password":password, "amt":amt}),
        headers: {
            "Content-Type":"application/json"
        }
    });
  }

  return (
    <>
        <Navbar/>
        <div className="d-inline-flex justify-content-center align-content-center">
            <form className="container row justify-content-center align-items-center g-3" onSubmit="return false;" method="post">
                <div className="col-md-6">
                    <label for="Amount" className="form-label">Amount</label>
                    <input type="text" className="form-control" id="Amount" onChange={(event) => {setAmt(event.target.value)}}/>
                </div>
                <span></span>
                <div className="col-md-6">
                    <label for="Password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange = {(event) => {setPassword(event.target.value)}}/>
                </div>
                <span></span>
                <div className="row col-3 gx-2">
                    <div className="col-1">    
                        <input className="form-check-input" type="checkbox" id="gridCheck"/> 
                    </div>
                    <div className="col">    
                        <label className="form-check-label" for="gridCheck">not a robot</label>
                    </div>
                </div>
                <span></span>
                <div className="row col-3 g-3">
                    <NavLink to='/home' onClick={() => withdraw() } type="submit" className="btn btn-primary">Withdraw</NavLink>
                </div>
            </form>
        </div>
    </>
  )
}
