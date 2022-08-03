import {useState} from "react";
import {Link} from "react-router-dom";
import styles from "./LoginCss";
import logo from "../assets/logo.png";

export default function Register(){
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    return(
        <styles.LOGIN>
        <styles.IMAGE src={logo}/>
        <styles.FORM>
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