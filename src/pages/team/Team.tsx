import "./team.css";
import BgHome from "../../components/bgRule/BgRule";
import CardTeam from "../../cards/cardTeam/CardTeam";
import BgImage from "../../components/bgImage/BgImage";
import { ReactNode, useState } from "react";
import Cv from "../../components/cv/Cv";

function Team () {

    const cvDiegoText = 
    <div className="cvText opacityOnCharge opacityOnCharge1s5">
        <p>Mi nombre es Diego Corrado soy un apasionado profesional con una trayectoria de 28 años en el fascinante mundo del dibujo técnico y unos 16 años en la industria del mármol y el granito, así como en el sector de la construcción.</p>
        <p>Mi viaje en el dibujo técnico comenzó hace 28 años, y desde entonces he dedicado mi vida a perfeccionar mis habilidades y adquirir un profundo conocimiento en esta disciplina.</p>
        <p>Mi experiencia abarca una amplia gama de proyectos, desde diseño arquitectónico hasta planos detallados, siempre buscando la excelencia y la precisión en cada trazo.</p>
        <p>Con orgullo, puedo afirmar que he contribuido significativamente a la industria del mármol y el granito durante los últimos 16 años.
           No solo en el dibujo y desarrollo de ingeniería de trabajos complejos si no también en el desarrollo de procesos en base a programas CAD-CAM avanzados.</p>
        <p>Mi experiencia en este sector me ha permitido trabajar en proyectos emocionantes, desde la selección de materiales hasta la planificación y ejecución de instalaciones, brindando soluciones creativas y estéticas a cada desafío.</p>
        <p>Además, he tenido el privilegio de sumar 8 años de experiencia en el mundo de la construcción, donde he participado en diversas empresas, aportando mi experiencia en la coordinación de proyectos y asegurando la implementación exitosa de diseños y conceptos.</p>
    </div>

    const cvJuliaText = 
    <div className="cvText opacityOnCharge opacityOnCharge1s5">
        <p>Especialista en Tecnología de Envases y Embalajes.</p>
        <p>Como diseñadora industrial especializada en envases y embalajes, siento una profunda pasión por la creación humana. Mi herencia familiar artística me ha otorgado una alta sensibilidad hacia la capacidad del ser humano para crear, aprender y dejar ser.</p>
        <p>Aunque comencé mi carrera como diseñadora de mobiliario, mi verdadera pasión se encuentra en el diseño de packaging. Después de especializarme en el Instituto Argentino del Envase, decidí dedicarme por completo a ayudar a mis clientes a hacer realidad sus proyectos, creando conceptos a medida bajo valores que compartimos.</p>
        <p>En un mercado tan complejo y desafiante como el actual, creo firmemente que el diseño es una pieza clave para articular deseos y necesidades, así como impulsar el posicionamiento de las marcas.</p>
        <p>Me encanta investigar nuestro vínculo como seres humanos con la tecnología y la biología, lo que me inspira constantemente en mi trabajo. La ciencia ficción y la naturaleza son dos fuentes de inspiración que siempre están presentes en mi proceso creativo</p>
    </div>

    const [showCv, setShowCv] = useState <boolean> (false);
    const [cv, setCv] = useState <ReactNode | null> (null);

    const showCvFunction = (texto: JSX.Element, imgSrc: string, name: string, position: string) => {
        setShowCv(true);
        setCv(<Cv text={texto} imgSrc={imgSrc} hiddenCvFunction={hiddenCvFunction} name={name} position={position}/>)
    }

    const hiddenCvFunction = () => {
        setShowCv(false);
        setCv(null);
        window.scrollTo({top: 1});      //Movemos el scroll para que funcione el OoS y aparezcan las cards
        window.scrollTo({top: 0});
    }

    return (
        <div className="seccions seccionToWaitImages seccionsWithPadding column flex">
            <BgImage imgSrc="/images/backgrounds/bg3.jpg" classImage="bgImageClassTeam" classFilter="bgImageFilterOpacityTeam"/>
            <BgHome/>
            {
                !showCv 
                &&   
                <>
                    <h1 className="titles">Nuestro Equipo</h1>
                    <div className="teamSeccionCardsCont flex wrap">
                        <CardTeam imgSrc="/images/team/diego2.jpg" name="Diego Corrado" position="M.M.O - Dibujante Técnico" imgClass="" showCvFunction={() => showCvFunction(cvDiegoText, "/images/team/diego2.jpg", "Diego Corrado", "M.M.O - Dibujante Técnico")}/>
                        <CardTeam imgSrc="/images/team/julia.jpg" name="Julia Dowbley" position="Diseñadora Industrial" imgClass="cardJuliaImg" showCvFunction={() => showCvFunction(cvJuliaText, "/images/team/julia.jpg", "Julia Dowbley", "Diseñadora Industrial")}/>
                    </div>
                </>
            }
            {cv}
        </div>
    )
}

export default Team