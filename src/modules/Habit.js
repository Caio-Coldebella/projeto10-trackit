import { useEffect, useState } from "react";
import styled from "styled-components";
import trash from "../assets/trash.svg";

export default function Habit({name,days}){
    const namedays = ["D","S","T","Q","Q","S","S"];
    const [datadays,setDatadays] = useState([]);
    useEffect(()=>{
        let j=0;
        let daystrue = [];
        for(let i=0; i<7; i++){
            if(j<days.length && i===days[j]){
                daystrue.push(true);
                j++;
                continue;
            }
            daystrue.push(false);
        }
        setDatadays(daystrue.map((item,index)=>{return <SQUARE key={index} isSet={item}>{namedays[index]}</SQUARE>}));
    },[]);
    return(
        <CONTENT>
            <TXT>{name}</TXT>
            <TABLEDAYS>
                {datadays}
            </TABLEDAYS>
            <TRASH src={trash}/>
        </CONTENT>
    );
}
const CONTENT = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 90px;
    padding: 16px 16px 16px 16px;
    margin-bottom: 30px;
    border-radius: 5px;
    background-color: #FFFFFF;
`;
const TRASH = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
`;
const TXT = styled.p`
    font-size: 20px;
    color: #666666;
`;
const SQUARE = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-right: 4px;
    font-size: 20px;
    color: ${props => props.isSet? "#FFFFFF": "#CFCFCF"};
    background-color: ${props=> props.isSet? "#CFCFCF" : "#FFFFFF"};
`;
const TABLEDAYS = styled.div`
    display: flex;
    height: 30px;
    width: 100%;
`;