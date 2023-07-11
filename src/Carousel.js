import React from "react";
import "./data/Carousel.css";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"
export default function Carousel({data}){
        const[slide,setslide] =React.useState(0);
        setTimeout(()=>{
            setslide((slide+1)%data.slides.length)
            console.log(slide)
       },8000)
        function nextSlide(){
            let val=(data.slides.length)
            setslide((slide+1)%(val))
        }
        function prevSlide(){
            if(slide===0)
            {
                setslide(2)
            }
            else{
                setslide(slide-1)
            }
        }
    return(
        <div className="carousel-parent">
        <div className="carousel">
           <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
            {data.slides.map((item,idx)=>{
                return<>
                <a href={item.url} styles={{width:"0%",height:"100%"}}>
                <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}  /></a>
                </>
            })}
           <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
           <span className="indicators">
            {data.slides.map((_,idx)=>{
            return<> <button key={idx} onClick={()=>{setslide(idx)}} className={slide===idx? "indicator ":"indicator indicator-inactive"}></button>
            </>
            })}
           </span >
        </div>
        </div>
    )
}