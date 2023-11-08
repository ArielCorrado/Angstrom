import "./team.css";
import BgHome from "../../components/bgRule/BgRule";
import CardTeam from "../../cards/cardTeam/CardTeam";
import BgImage from "../../components/bgImage/BgImage";

function Team() {
    return (
        <div className="seccionToWaitImages">  
            <BgImage imgSrc="/images/backgrounds/bg3.jpg" classImage="bgImageClassTeam" classFilter="bgImageFilterOpacityTeam"/>
            <div className="seccions seccionsWithPadding column flex">
                <h1 className="titles">Nuestro Equipo</h1>
                <div className="teamSeccionCardsCont flex wrap">
                    <CardTeam imgSrc="/images/team/diego.jpg" name="Diego Corrado" position="Dibujante"/>
                    <CardTeam imgSrc="/images/team/julia.jpg" name="Julia Dowley" position="Modelista"/>
                </div>
                <BgHome/>
            </div>
        </div>
    )
}

export default Team