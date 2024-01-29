import Chat from "../../../components/Chat/Chat";
import Header from "../../../components/Header";
import Map from "../../../components/Service/Delivery/Map";


export default function RequestCleaning() {
    return <>
        <Header />
        <Chat />
        <div style={{marginTop:"10rem"}}>
        <Map/>
        </div>
        </>
}