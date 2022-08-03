import { BrowserRouter, Routes, Route} from "react-router-dom";
import UserContext from "./contexts/UserContext";
import Login from "./modules/Login";
import Register from "./modules/Register";
import Habits from "./modules/Habits";
import Today from "./modules/Today";
import Historic from "./modules/Historic";
import "./css/reset.css";
import "./css/style.css";

export default function App(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Register/>}/>
                <Route path="/habitos" element={<Habits/>}/>
                <Route path="/hoje" element={<Today/>}/>
                <Route path="/historico" element={<Historic/>}/>
            </Routes>
        </BrowserRouter>        
        </>
    );
}