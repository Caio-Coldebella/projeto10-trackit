import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import toplogo from "../assets/topbarlogo.png";

export default function Topbar(){
    const {user,setUser} = useContext(UserContext);
    return(
        <BAR>
            <LOGO src={toplogo}/>
            <PHOTO src={user? user.image:null}/>
        </BAR>
    );
}

const BAR = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    height: 70px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px 0 18px;
    background-color: #126BA5;
`;
const LOGO = styled.img`
    width: 100px;
    height: 30px;
`;
const PHOTO = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
`;