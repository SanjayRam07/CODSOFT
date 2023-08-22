import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { accDetails } from "../redux/features/account";
import Navbar from "./Navbar";

export const Home = () => {
    // let response;
    // const [data, setData] = useState({});
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch();
    // let acc;

    useEffect(() => {
        const signin = async() => {
            const signin = await fetch("http://localhost:5000/account/signin?accNo="+user.id+"&password="+user.pwd,{
                method:"POST"
            });
            // console.log(await signin.json());
            if(signin.ok) {
                const response =await fetch("http://localhost:5000/account/getAccount?accNo="+user.id);
                if(response.ok){
                    const data=await response.json()
                    // setData(await response.json());
                    dispatch(accDetails({accHolderName:data.accHolderName, accType:data.accType, accBal:data.balance}));
                }
            
            }else {
                console.error("Sign-in request failed");
            }
       
    };

        signin();

    }, [dispatch, user.id, user.pwd]);
     
    const acc = useSelector((state) => state.account.value);
    
    return (
        <>
            <Navbar/>
            <h1>Account No: {user.id}</h1>
            <h1>Account Name: {acc.accHolderName}</h1>
            <h1>Account Type: {acc.accType}</h1>
            <h1>Account Balance: {acc.accBal}</h1>
        </>
    )
}