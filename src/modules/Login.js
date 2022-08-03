import logo from "../assets/logo.png"
import {useState} from "react";
import {Link} from "react-router-dom";
import styles from "./LoginCss";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    return(
        <styles.LOGIN>
        <styles.IMAGE src={logo}/>
        <styles.FORM>
            <styles.INPUT type="text" required placeholder="email" value={email} onChange={e=> setEmail(e.target.value)}/>
            <styles.INPUT type="password" required placeholder="senha" value={password} onChange={e=> setPassword(e.target.value)}/>
            <styles.BUTTON type="submit">Entrar</styles.BUTTON>
        </styles.FORM>
        <Link to="/cadastro"><styles.LINK>Não tem uma conta? Cadastre-se!</styles.LINK></Link>
        </styles.LOGIN>
    );
}