import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import {signin} from '../redux/features/user'

export const Signin = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    return (
    <div class="d-inline-flex justify-content-center align-content-center">
        <form class="container row justify-content-center align-items-center g-3" onSubmit="return false;" method="post">
            <div class="col-md-6">
                <label for="AccountNo" class="form-label">Account Number</label>
                <input type="text" class="form-control" id="AccountNo" onChange={(event) => {setId(event.target.value)}}/>
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
                <NavLink class="nav-link btn btn-primary" to='/home' onClick={() => dispatch(signin({id:id, pwd:password})) } type="submit">
                    <button className="btn btn-primary">Sign In</button>
                </NavLink>
                <NavLink to="/signup" type="submit" class="btn btn-secondary">Sign Up</NavLink>
            </div>
        </form>
    </div>
    )
}