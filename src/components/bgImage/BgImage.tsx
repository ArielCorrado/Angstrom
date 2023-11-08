import "./bgImage.css";

function BgImage (props: {imgSrc: string, classImage: string, classFilter: string}) {
    return (
        <div className="bgImageCont">
            <div className={"bgImageFilter " + props.classFilter}></div>
            <img src={props.imgSrc} alt="Contact Background" className={"bgImage " +  props.classImage}/>
        </div>
    )
}

export default BgImage