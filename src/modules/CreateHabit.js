import { useState } from "react";
import styled from "styled-components";
import CreateHabitButton from "./CreateHabitButton";

export default function CreateHabit(props){
    const [name,setName] = useState("");
    const [days,setDays] = useState([]);
    const arrdays = ["D","S","T","Q","Q", "S","S"];
    return(
        <FORM>
            <INPUT type="text" required value={name} onChange={e=> {setName(e.target.value)}}/>
            <BUTTONS>
                {arrdays.map((item,index)=>{return <CreateHabitButton key={index} days={days} setDays={setDays} name={item} number={index}/>;})}
            </BUTTONS>
            <CANCEL>Cancelar</CANCEL>
            <SAVE>Salvar</SAVE>
        </FORM>
    );
}
const FORM = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 180px;
    padding: 16px 16px 16px 16px;
    margin-bottom: 30px;
    border-radius: 5px;
    background-color: #FFFFFF;
`;
const INPUT = styled.input`
    display: flex;
    align-items: center;
    height: 45px;
    width: 100%;
    padding-left: 8px;
    margin-bottom: 8px;
    font-size: 20px;
    color: #DBDBDB;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
`;
const BUTTONS = styled.div`
    display: flex;
    height: 30px;
    width: 100%;
`;
const CANCEL = styled.button``;
const SAVE = styled.button``;