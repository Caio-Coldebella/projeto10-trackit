import logo from "../assets/logo.png"
import {useState, useContext} from "react";
import UserContext from "../contexts/UserContext";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import styles from "./LoginCss";

export default function Login(){
    const {user,setUser} = useContext(UserContext);
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
        promisse.then(res => {setUser(res.data); navigate("/hoje")})
        /*
        email: "caioruiz@email.com"
        id: 4684
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/O_Xaropinho.jpg"
        name: "Caio"
        password: "senha"
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey
        */
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