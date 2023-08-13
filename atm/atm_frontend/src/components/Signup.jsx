import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

export const Signup = () => {

    const [AccType, setAccType] = useState("");

    useEffect(() => {

    }, [])

    return (
        <div class="d-inline-flex justify-content-center align-content-center">
        <form class="container row justify-content-center align-items-center g-3">
            <div class="col-md-6">
                <label for="AccHolderName" class="form-label">Account Holder Name</label>
                <input type="text" class="form-control" id="AccHolderName"/>
            </div>
            <span></span>
            <div class="col-md-6">
                <label for="Password" class="form-label">Password</label>
                <input type="password" class="form-control" id="Password"/>
            </div>
            <span></span>
            <div class=" row-2 col-2 justify-content-center align-content-center">
                <label class="form-label" type="text">Account Type</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="savings"/>
                    <label class="form-check-label" for="savings">
                        Savings
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="current"/>
                    <label class="form-check-label" for="current">
                        Current
                    </label>
                </div>
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
                <button type="submit" class="btn btn-primary">Sign Up</button>
                <NavLink to="/signin" type="submit" class="btn btn-secondary">Sign In</NavLink>
            </div>
        </form>
    </div>
    )
}