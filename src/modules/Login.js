import logo from "../assets/logo.png"
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import styles from "./LoginCss";

export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    function sendlogin(event){
        event.preventDefault();
        const objpost = {
            email: email,
            password: password
        };
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",objpost);
        promisse.then(res => {console.log(res.data)})
    }
    return(
        <styles.LOGIN>
        <styles.IMAGE src={logo}/>
        <styles.FORM onSubmit={sendlogin}>
            <styles.INPUT type="text" required placeholder="email" value={email} onChange={e=> setEmail(e.target.value)}/>
            <styles.INPUT type="password" required placeholder="senha" value={password} onChange={e=> setPassword(e.target.value)}/>
            <styles.BUTTON type="submit">Entrar</styles.BUTTON>
        </styles.FORM>
        <Link to="/cadastro"><styles.LINK>Não tem uma conta? Cadastre-se!</styles.LINK></Link>
        </styles.LOGIN>
    );
}