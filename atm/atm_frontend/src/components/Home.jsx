import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

export const Home = ({ id ,password }) => {
    const [data, setData] = useState([]);
    const user = useSelector((state) => state.user.value)

    useEffect(() => {
        const getProducts = async() => {
            console.log(user);
            let response = await fetch("http://localhost:5000/account/getAccount?accNo="+user.id);
            setData(await response.json());
        }

        getProducts();
    }, [id]);

    return (
        <>
            <h1>{data.accNo}</h1>
        </>
    )
}