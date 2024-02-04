import { useLocation } from "react-router-dom";
import Chat from "../../components/Chat/Chat";
import Header from "../../components/Header";
import RecommendMain from "../../components/Recommend/RecommendMain";

export default function Recommend() {
    const location = useLocation();
    const resultData = location.state;
    return <>
    <Header/>
    <Chat/> 
    <RecommendMain data={resultData}/>
    </>
}