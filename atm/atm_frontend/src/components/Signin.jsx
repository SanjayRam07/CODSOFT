import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"

export const Signin = () => {
    const [id, setId] = useState("");

    return (
    <div class="d-inline-flex justify-content-center align-content-center">
        <form class="container row justify-content-center align-items-center g-3">
            <div class="col-md-6">
                <label for="AccountNo" class="form-label">Account Number</label>
                <input type="text" class="form-control" id="AccountNo"/>
            </div>
            <span></span>
            <div class="col-md-6">
                <label for="Password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" onChange={(event) => {setId(event.target.value)}}/>
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
                <NavLink to={"/home/"+id} type="submit" class="btn btn-primary">Sign In</NavLink>
                <NavLink to="/signup" type="submit" class="btn btn-secondary">Sign Up</NavLink>
            </div>
        </form>
    </div>
    )
}