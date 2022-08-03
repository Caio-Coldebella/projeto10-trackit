import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import styles from "./LoginCss";
import logo from "../assets/logo.png";

export default function Register(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    function sendregister(event){
        event.preventDefault();
        const postobj = {
            email: email,
            name: name,
            image: photo,
            password: password};
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",postobj);
        promisse.then(res => {navigate("/")});
    }
    return(
        <styles.LOGIN>
        <styles.IMAGE src={logo}/>
        <styles.FORM onSubmit={sendregister}>
            <styles.INPUT type="text" required placeholder="email" value={email} onChange={e=> setEmail(e.target.value)}/>
            <styles.INPUT type="password" required placeholder="senha" value={password} onChange={e=> setPassword(e.target.value)}/>
            <styles.INPUT type="text" required placeholder="nome" value={name} onChange={e=> setName(e.target.value)}/>
            <styles.INPUT type="text" required placeholder="foto" value={photo} onChange={e=> setPhoto(e.target.value)}/>
            <styles.BUTTON type="submit">Cadastrar</styles.BUTTON>
        </styles.FORM>
        <Link to="/"><styles.LINK>Já tem uma conta? Faça login!</styles.LINK></Link>
        </styles.LOGIN>
    );
}