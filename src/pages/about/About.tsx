import "./about.css";
import BgImage from "../../components/bgImage/BgImage";
import BgHome from "../../components/bgRule/BgRule";

function About() {
    return (
        <div className="seccions seccionToWaitImages seccionsWithPadding flex">
            <BgImage imgSrc="/images/backgrounds/bg3.jpg" classImage="bgImageClassTeam" classFilter="bgImageFilterOpacityTeam"/>
            <BgHome/>
            <div className="aboutTextCont cvTextCont cvText fadeInDer flex column">
                <p className="aboutLargeText1">Angstrom tecnica es una consultora  de documentación técnica para la industria de la construcción Desde el año 2007</p>
                <p>Nos hemos dedicado con pasión y compromiso a brindar soluciones integrales para optimizar y simplificar la gestión de la documentación en proyectos de construcción.</p>
                <p>Nos enorgullece destacar que, a lo largo de los años, hemos colaborado con una amplia variedad de proyectos, desde construcciones residenciales hasta proyectos industriales de gran envergadura.</p> 
                <p>Nuestra experiencia nos ha permitido entender las complejidades y demandas específicas de la industria, lo que nos capacita para proporcionar soluciones a medida que se adaptan a las necesidades únicas de cada cliente.</p>
                <p className="aboutLargeText2">Durante estos años participamos de proyectos tan diversos como interesantes:</p>
                <div className="aboutTextDiv flex"><span className="bullet">●</span><p>Planos de hormigon para constructoras</p></div>
                <div className="aboutTextDiv flex"><span className="bullet">●</span><p>Planos de fabricacion e instalacion de muebles de oficinas</p></div>
                <div className="aboutTextDiv flex"><span className="bullet">●</span><p>Desarrollo de planos de fabricacion de piezas para un proyecto de avion ultraliviano fabricado en argentina</p></div>
                <div className="aboutTextDiv flex"><span className="bullet">●</span><p>Consultoria y desarrollo de proyectos de piedra avanzados (marmol y granito)</p></div>
                <p className="aboutLargeText2">Confíe en nosotros para transformar la gestión de la documentación técnica en un activo estratégico para su empresa.</p>
            </div>
        </div>
    )
}

export default About