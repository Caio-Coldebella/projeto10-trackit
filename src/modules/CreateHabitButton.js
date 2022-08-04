import { useState } from "react";
import styled from "styled-components";

export default function CreateHabitButton({days, setDays, name, number}){
    const [on, setOn] = useState(false);
    function addDay(num){
        for(let i=0; i<days.length; i++){
            if(days[i] === num){
                days.splice(i,1);
                setDays(days);
                break;
            }
        }
        setDays([...days, num]);
    }
    return(
        <>
        <BUTTON onClick={()=>{addDay(number);setOn(!on)}}>
            {name}
        </BUTTON>
        </>
    );
}
const BUTTON = styled.button`
    width: 30px;
    height: 30px;
`;