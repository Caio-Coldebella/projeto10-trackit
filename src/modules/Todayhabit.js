import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import okay from "../assets/check-lg.svg";
import axios from "axios";

export default function Todayhabit(props){
    const {user,setUser} = useContext(UserContext);
    const config = {headers:{Authorization: `Bearer ${user.token}`}};
    const [marked, setMarked] = useState(props.done);
    function togglehabit(){
        if(marked){
            const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/uncheck`,null,config);
            promisse.then((res)=>{console.log(res.data);setMarked(false)});
        }else{
            const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`,null,config);
            promisse.then((res)=>{console.log(res.data);setMarked(true)});
        }
    }
    return (
        <CONTENT>
            <TITLE>{props.name}</TITLE>
            <TXT>
                <p>Seqûencia atual: {props.current} dias</p>
                <p>Seu recorde: {props.highest} dias</p>
            </TXT>
            <COMPLETE onClick={togglehabit} isset={marked}>
                <OK src={okay}/>
            </COMPLETE>
        </CONTENT>
    );
}

const CONTENT = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    height: 94px;
    width: 100%;
    padding: 13px 13px 13px 13px;
    background-color: #FFFFFF;
    color: #666666;
`;
const TITLE = styled.p`
    font-size: 20px;
`;
const TXT = styled.div`
    font-size: 13px;
    line-height: 15px;
`;
const COMPLETE = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 13px;
    top: 13px;
    height: 69px;
    width: 69px;
    background-color: ${props => props.isset? "#8FC549": "#EBEBEB"};
`;
const OK = styled.img`
    width: 45px;
    height: 45px;
`;