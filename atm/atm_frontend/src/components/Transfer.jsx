import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import Navbar from './Navbar';

export default function Transfer() {

  const [amt, setAmt] = useState("");
  const [AccTo, setAccTo] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  return (
    <>
        <Navbar/>
        <div class="d-inline-flex justify-content-center align-content-center">
            <form class="container row justify-content-center align-items-center g-3" onSubmit="return false;" method="post">
                <div class="col-md-6">
                    <label for="AccTo" class="form-label">Account Number</label>
                    <input type="text" class="form-control" id="AccTo" onChange={(event) => {setAccTo(event.target.value)}}/>
                </div>
                <span></span>
                <div class="col-md-6">
                    <label for="Amount" class="form-label">Amount</label>
                    <input type="text" class="form-control" id="Amount" onChange={(event) => {setAmt(event.target.value)}}/>
                </div>
                <span></span>
                <div class="col-md-6">
                    <label for="Password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" onChange = {(event) => {setPassword(event.target.value)}}/>
                </div>
                <span></span>
                <div class="row col-3 gx-2">
                    <div class="col-1">    
                        <input class="form-check-input" type="checkbox" id="gridCheck"/> 
                    </div>
                    <div class="col">    
                        <label class="form-check-label" for="gridCheck">not a robot</label>
                    </div>
                </div>
                <span></span>
                <div class="row col-3 g-3">
                    <NavLink to='/home' onClick={() => dispatch()} type="submit" class="btn btn-primary">Transfer</NavLink>
                </div>
            </form>
        </div>
    </>
  )
}
