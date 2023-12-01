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
                    seccionZindexMax(true);
                    showCarousel(e);
                })
            })
        }

        addListenners();
                
    }, []);

    return (
        <>
            {carousel}
            <div className="homePhotos1Cont flex wrap">
                <CardImg1 imgSrc="/images/design/1.jpeg" text="Texto 1" />
                <CardImg1 imgSrc="/images/design/2.jpeg" text="Texto 2" />
                <CardImg1 imgSrc="/images/design/3.jpeg" text="Texto 3" />
                <CardImg1 imgSrc="/images/design/4.jpeg" text="Texto 4" />
                <CardImg1 imgSrc="/images/design/5.jpeg" text="Texto 5" />
                <CardImg1 imgSrc="/images/design/6.jpeg" text="Texto 6" />
                <CardImg1 imgSrc="/images/design/7.jpeg" text="Texto 7" />
                <CardImg1 imgSrc="/images/design/8.jpeg" text="Texto 8" />
            </div>
        </>
    )
}

export default HomePhotos1