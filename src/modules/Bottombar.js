import styled from "styled-components";
import {React,useState} from "react";
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Bottombar(){
    const [percentage,setPercentage] = useState(0);
    return(
        <>
        <PROGRESSBAR onClick={()=>{setPercentage((percentage+10)%100)}}>
            <CircularProgressbar
        value={percentage}
        text={`Hoje`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent",
        })}
      />
        </PROGRESSBAR>
        <BOTTOM>
            <TEXT>Hábitos</TEXT>
            <TEXT>Histórico</TEXT>
        </BOTTOM>
        </>
    );
}

const PROGRESSBAR = styled.div`
    position: fixed;
    bottom: 10px;
    left: calc(50% - 45.5px);
    z-index: 2;
    height: 91px;
    width: 91px;
`;
const BOTTOM = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
    padding: 0 35px 0 35px;
    background-color: #FFFFFF;
`;
const TEXT = styled.p`
    color: #52B6FF;
    font-size: 18px;
`;