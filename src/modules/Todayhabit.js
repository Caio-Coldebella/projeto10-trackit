import styled from "styled-components";
import okay from "../assets/check-lg.svg";

export default function Todayhabit(props){
    return (
        <CONTENT>
            <TITLE>{props.name}</TITLE>
            <TXT>
                <p>Seqûencia atual: {props.current} dias</p>
                <p>Seu recorde: {props.highest} dias</p>
            </TXT>
            <COMPLETE>
                <OK src={okay} isdone={props.done}/>
            </COMPLETE>
        </CONTENT>
    );
}

const CONTENT = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    height: 94px;
    width: 100%;
    padding: 13px 13px 13px 13px;
    background-color: #FFFFFF;
    color: #666666;
`;
const TITLE = styled.p`
    font-size: 20px;
`;
const TXT = styled.div`
    font-size: 13px;
    line-height: 15px;
`;
const COMPLETE = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 13px;
    top: 13px;
    height: 69px;
    width: 69px;
    background-color: ${props => props.isdone? "#8FC549": "#EBEBEB"};
`;
const OK = styled.img`
    width: 45px;
    height: 45px;
`;