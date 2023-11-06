import "./homePhotos1.css"
import HomeCardImg1 from "../../cards/homeCardImg1/HomeCardImg1"

function HomePhotos1() {
    return (
        <div className="homePhotos1Cont flex wrap">
            <HomeCardImg1 imgSrc="/images/design/1.jpg" text="Texto 1" />
            <HomeCardImg1 imgSrc="/images/design/2.jpg" text="Texto 2" />
            <HomeCardImg1 imgSrc="/images/design/3.jpg" text="Texto 3" />
            <HomeCardImg1 imgSrc="/images/design/4.jpg" text="Texto 4" />
            <HomeCardImg1 imgSrc="/images/design/5.jpg" text="Texto 5" />
            <HomeCardImg1 imgSrc="/images/design/6.jpg" text="Texto 6" />
            <HomeCardImg1 imgSrc="/images/design/7.jpg" text="Texto 7" />
            <HomeCardImg1 imgSrc="/images/design/8.jpg" text="Texto 8" />
        </div>
    )
}

export default HomePhotos1