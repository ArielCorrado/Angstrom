import "./homePhotos1.css"
import CardImg1 from "../../cards/cardImg1/CardImg1"
import Carousel from "../carousel/Carousel"
import { useState, useEffect } from "react"

function HomePhotos1() {
    
    const [carousel, setCarousel] = useState <JSX.Element | null> (null);
    
    useEffect(() => {

        const seccionZindexMax = (opc: boolean) => {
            const seccion = document.querySelector(".seccions") as HTMLDivElement;
            opc ?  seccion!.classList.add("zindex1100") : seccion!.classList.remove("zindex1100");
        }

        const showCarousel = (e: Event) => {
            const cardsImgs : NodeListOf<HTMLImageElement> = document.querySelectorAll(".homeCardImg1Img");
            const imgsRoutes : string[] = [];
            cardsImgs.forEach((card) => {
                imgsRoutes.push(card.src);
            });
            const imgSelect = e.target as HTMLDivElement;
            const imgSelectPos = imgSelect.getAttribute("pos");
            setCarousel(<Carousel imgsRoutes={imgsRoutes} imgSelectPos={imgSelectPos!} imgClass="g1ImgsAdjust" closeFunction={() => {setCarousel(null); seccionZindexMax(false)}}/>);
            document.body.style.overflow = "hidden";
        }
        
        const addListenners = () => {
            const cardsImgs = document.querySelectorAll(".homeCardImg1Cont");
            cardsImgs.forEach((card, index) => {
                card.setAttribute("pos", index.toString());
                card.addEventListener("click", (e: Event) => {
                    seccionZindexMax(true);                     /*Como el carousel esta dentro de seccions toma su z-index*/
                    showCarousel(e);                            /* aumentamos el z-index de seccion para que el carousel tape el navbar y el footer*/
                })
            })
        }

        addListenners();
                
    }, []);

    return (
        <>
            {carousel}
            <div className="homePhotos1Cont flex wrap">
                <CardImg1 imgSrc="/images/design/1.jpeg" cardClass="" text="Ampliar Imagen" />
                <CardImg1 imgSrc="/images/design/2.jpeg" cardClass="" text="Ampliar Imagen" />
                <CardImg1 imgSrc="/images/design/3.jpeg" cardClass="" text="Ampliar Imagen" />
                <CardImg1 imgSrc="/images/design/4.jpeg" cardClass="" text="Ampliar Imagen" />
                <CardImg1 imgSrc="/images/design/5.jpeg" cardClass="" text="Ampliar Imagen" />
                <CardImg1 imgSrc="/images/design/6.jpeg" cardClass="" text="Ampliar Imagen" />
                <CardImg1 imgSrc="/images/design/7.jpeg" cardClass="" text="Ampliar Imagen" />
                <CardImg1 imgSrc="/images/design/8.jpeg" cardClass="" text="Ampliar Imagen" />
            </div>
        </>
    )
}

export default HomePhotos1