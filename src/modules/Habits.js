import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Bottombar from "./Bottombar";
import Topbar from "./Topbar";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";

export default function Habits(){
    const {user,setUser} = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    useEffect(()=>{
        const config = {headers:{
            Authorization: `Bearer ${user.token}`
            }
        };
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",config);
        promisse.then(res => {setHabits(res.data);console.log(res.data)});
    },[]);
    return(
        <>
        <Topbar/>
        <CONTENT>
            <p>{habits}</p>
        </CONTENT>
        <Bottombar/>
        </>
    );
}

const CONTENT = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: blue;
    margin: 70px 0 70px 0;
`;