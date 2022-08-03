import styled from "styled-components";
import logo from "../assets/logo.png"
import {useState} from "react";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    console.log(email)
    return(
        <>
        <IMAGE src={logo}/>
        <form>
            <input type="text" required placeholder="email" value={email} onChange={e=> setEmail(e.target.value)}/>
            <input type="password" required placeholder="senha" value={password} onChange={e=> setPassword(e.target.value)}/>
        </form>
        </>
    );
}

const IMAGE = styled.img`
    width: 180px;
    height: 180px;
`;