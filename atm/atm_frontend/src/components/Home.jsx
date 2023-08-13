import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const Home = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getProducts = async() => {
            console.log(id);
            let response = await fetch("http://localhost:5000/account/getAccount?accNo="+id);
            setData(await response.json());
        }

        getProducts();
    }, []);

    return (
        <>
            <h1>{data.accNo}</h1>
        </>
    )
}