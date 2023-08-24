import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { accDetails } from "../redux/features/account";
import { json, useNavigate, useNavigation } from 'react-router-dom';
import Navbar from "./Navbar";
import { useCallback } from "react";

export const Home = () => {
  const [userData, setUserData] = useState({});
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
      const fetchData = async () => {
          const signin = await fetch(`http://localhost:5000/account/signin?accNo=${user.id}&password=${user.pwd}`, {
              method: 'POST'
          });
          const res = await signin.json();
          if (res) {
              const response = await fetch(`http://localhost:5000/account/getAccount?accNo=${user.id}`);
              if (response.ok) {
                  const data = await response.json();
                  setUserData(data);
                  sessionStorage.setItem('user', JSON.stringify(data));
              }
          }
      };

      fetchData();
  });

  let sessionJson = sessionStorage.getItem("user");
  let sessionValue = null;
  try {
    sessionValue = JSON.parse(sessionJson);
  } catch (error) {
    console.error("Error parsing session data:", error);
  }

  return (
      <>
          <Navbar/>
          {sessionValue && (
              <>
                  <h1>Account No: {sessionValue.accNo}</h1>
                  <h1>Account Name: {sessionValue.accHolderName}</h1>
                  <h1>Account Type: {sessionValue.accType}</h1>
                  <h1>Account Balance: {sessionValue.balance}</h1>
              </>
          )}
      </>
  )
}
