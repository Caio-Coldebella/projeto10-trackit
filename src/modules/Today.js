import dayjs from 'dayjs';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Bottombar from "./Bottombar";
import Todayhabit from './Todayhabit';
import Topbar from "./Topbar";

function translate (string){
    switch (string) {
        case "0":
            return "Domingo";
        case "1":
            return "Segunda-feira"
        case "2":
            return "Terça-feira";
        case "3":
            return "Quarta-feira";
        case "4":
            return "Quinta-feira";
        case "5":
            return "Sexta-feira";
        case "6":
            return "Sábado";
        default:
            return null;
    }
}
export default function Today(){
    const {user,setUser} = useContext(UserContext);
    const [habits,setHabits] = useState([]);
    const config = {headers:{Authorization: `Bearer ${user.token}`}};
    const weekday = translate(dayjs().format('d'));
    const date = dayjs().format('D/MM');
    useEffect(()=>{
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config)
        promisse.then( res => {setHabits(res.data)});
    },[]);
    console.log(habits)
    return(
        <>
            <Topbar/>
            <CONTENT>
                <Toptext>
                    <DATE>{weekday}, {date}</DATE>
                    <p>Nenhum hábito concluido ainda</p>
                </Toptext>
                {habits.map((item,index) => {return <Todayhabit key={index} name={item.name} done={item.done} current={item.currentSequence} highest={item.highestSequence}/>})}
            </CONTENT>
            <Bottombar/>
        </>
    );
}
const CONTENT = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    min-height: calc(100vh - 140px);
    background-color: #F2F2F2;
    padding: 0 18px 0 18px;
    margin: 70px 0 70px 0;
`;
const Toptext = styled.div`
    margin-top: 30px;
    font-size: 18px;
    color: #bababa;
`;
const DATE = styled.p`
    font-size: 23px;
    color: #126BA5;
    margin-bottom: 5px;
`;