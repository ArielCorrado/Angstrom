import React, { useState, useEffect, useRef } from 'react';
import "./carousel.css";

const Carousel = (props: {imgsRoutes: string[], imgSelectPos: string, imgClass: string, closeFunction: () => void}) => {
    
    const [imgPos, setimgPos] = useState <number> (parseInt(props.imgSelectPos));
    const imgPosRef = useRef(imgPos);
       
    useEffect(() => {
                            
        /*********************************************************************/
        let startX: number;
        let startY: number;
        let endX: number;
        let endY: number;
        const elemento: HTMLElement | null = document.querySelector(".seccions");
        const start = (e: TouchEvent) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }

        const end = (e: TouchEvent) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            const Ax = endX - startX;
            const Ay = Math.abs(endY - startY);
            if (Ax > 50 && Ay < 100) {
                nextImage(false);
                // console.log("prev")
            } else if (Ax < -50 && Ay < 100) {
                nextImage(true);
                // console.log("next")
            }
        }

        elemento?.addEventListener("touchstart", start);
        elemento?.addEventListener("touchend", end);

        /*********************************************************************/
        
        // eslint-disable-next-line
    }, []);

    const imgPosAdjust = (pos: number) => {
        if (pos >= props.imgsRoutes.length) return 0;
        if (pos < 0) return props.imgsRoutes.length - 1;
        return pos;
    }

    const waitAnimations = (opc:boolean) => {
        const animations = document.querySelector(".carouselCont")?.getAnimations({subtree: true});
        const animationsCount = animations?.length;
        let count = 0;
        animations?.forEach((animation) => {
            if(animation.playState === "finished") {
                count ++
                if (count >= animationsCount!) setPos(opc);
            } else if (animation.playState === "running") {
                animation.addEventListener("finish", () => {
                    count ++;
                    if (count >= animationsCount!) setPos(opc);
                });
            }
        });
    }

    const waitAnimationsAsync = (opc:boolean) => {
        return new Promise((resolve) => {
            const animations = document.querySelector(".carouselCont")?.getAnimations({subtree: true});
            const animationsCount = animations?.length;
            let count = 0;
            animations?.forEach((animation) => {
                if(animation.playState === "finished") {
                    count ++
                    if (count >= animationsCount!) resolve(true);
                } else if (animation.playState === "running") {
                    animation.addEventListener("finish", () => {
                        count ++;
                        if (count >= animationsCount!) resolve(true);
                    });
                }
            });
        })
    }

    const setPos = (opc: boolean) => {
        if (opc) {
            if (imgPosRef.current === props.imgsRoutes.length - 1) {
                setimgPos(0);
            } else {
                setimgPos(imgPosRef.current + 1);
            }  
        } else {
            if (imgPosRef.current === 0) {
                setimgPos(props.imgsRoutes.length - 1);
            }  else {
                setimgPos(imgPosRef.current - 1);
            }
        }
    }
 
    const nextImage = async (opc: boolean) => {
        await waitAnimationsAsync (opc);
        const centerImg = document.querySelector(".carouselCenterImg") as HTMLImageElement;
        const leftImg = document.querySelector(".carouselLeftImg") as HTMLImageElement;
        const rightImg = document.querySelector(".carouselRightImg") as HTMLImageElement;
        if (opc) {
            centerImg.classList.remove("carouselOpOn", "carouselOpOff", "moveLeftToCenter", "moveRightToCenter", "moveCenterToRight", "moveCenterToLeft", "transitionOpOn");
            rightImg.classList.remove("carouselOpOn", "carouselOpOff", "moveLeftToCenter", "moveRightToCenter", "moveCenterToRight", "moveCenterToLeft", "transitionOpOn");
            setTimeout(() => {
                centerImg.classList.add("carouselOpOff", "moveCenterToLeft", "transitionOpOn");
                rightImg.classList.add("carouselOpOn", "moveRightToCenter", "transitionOpOn");
                waitAnimations(opc);
            }, 100);
        } else {
            centerImg.classList.remove("carouselOpOn", "carouselOpOff", "moveLeftToCenter", "moveRightToCenter", "moveCenterToRight", "moveCenterToLeft", "transitionOpOn");
            leftImg.classList.remove("carouselOpOn", "carouselOpOff", "moveLeftToCenter", "moveRightToCenter", "moveCenterToRight", "moveCenterToLeft", "transitionOpOn");
            setTimeout(() => {
                centerImg.classList.add("carouselOpOff", "moveCenterToRight", "transitionOpOn");
                leftImg.classList.add("carouselOpOn", "moveLeftToCenter", "transitionOpOn");
                waitAnimations(opc);
            }, 100);
        }
    }    

    const clearAnimations = () => {
        const imgs = document.querySelectorAll(".carouselImg") 
        imgs.forEach((img) => {
            img.classList.remove("carouselOpOn", "carouselOpOff", "moveLeftToCenter", "moveRightToCenter", "moveCenterToRight", "moveCenterToLeft", "transitionOpOn");
        });
    }
    
    useEffect(() => {
        if (typeof imgPos === "number") {
            imgPosRef.current = imgPos;
            clearAnimations();
        }
        //eslint-disable-next-line
    }, [imgPos]);
             
    return (
        <div className='carouselCont flex'>
            <img src="/images/icons/close.png" className='cvCloseIcon carouselCloseIcon' alt="Exit Icon" onClick={() => {props.closeFunction(); document.body.style.overflow = "initial"}}/>
            <img src="/images/icons/next.png" className='carouselNextIcon' alt="Next Icon" onClick={() => nextImage(true)}/>
            <img src="/images/icons/next.png" className='carouselPrevIcon' alt="Prev Icon" onClick={() => nextImage(false)}/>
            <img src={props.imgsRoutes[imgPosAdjust(imgPos - 1)]} className={`carouselImg carouselLeftImg ${props.imgClass}`} alt="Carousel Img" />
            <img src={props.imgsRoutes[imgPos]} className={`carouselImg carouselCenterImg ${props.imgClass}`} alt="Carousel Img" />
            <img src={props.imgsRoutes[imgPosAdjust(imgPos + 1)]} className={`carouselImg carouselRightImg ${props.imgClass}`} alt="Carousel Img" />
        </div>        
    );
}

export default Carousel;
