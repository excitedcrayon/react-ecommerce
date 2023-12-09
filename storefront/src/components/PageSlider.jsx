import { useEffect, useRef, useState } from "react"

export default function PageSlider(){

    const [counter, setCounter] = useState(0);
    const [slidersCount, setSlidersCount] = useState([]);
    const sliderRef = useRef(null);
    const previousButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    const sliders = () => {
        setSlidersCount(sliderRef.current.childNodes);
    }

    const decrementCounter = () => {
        const isFirstSlide = counter === 0;
        const newCounter = isFirstSlide ? slidersCount.length  - 1 : counter - 1;
        setCounter(newCounter);
        animateSliders(newCounter);
    }

    const incrementCounter = () => {
        const isLastSlide = counter === slidersCount.length - 1;
        const newCounter = isLastSlide ? 0 : counter + 1;
        setCounter(newCounter);
        animateSliders(newCounter)
    }

    const animateSliders = (index) => {
        for(let i = 0; i < slidersCount.length; i++){
            slidersCount[i].style.transform = `translateX(-${index * 100}%)`;
        }
    }

    const renderSliderLayout = () => {
        for(let i = 0; i < slidersCount.length; i++){
            slidersCount[i].style.left = `${i * 100}%`;
        }
    }

    useEffect(() => {
        sliders();
        renderSliderLayout();
    }, [counter, slidersCount]);

    return(
        <div className="page_slider_container">
            <div className="page_slider_controls">
                <button onClick={decrementCounter} ref={previousButtonRef}>Previous</button>
                <button onClick={incrementCounter} ref={nextButtonRef}>Next</button>
            </div>
            <div ref={sliderRef} className="page_slider_wrapper">
                <div className="page_slider">1</div>
                <div className="page_slider">2</div>
                <div className="page_slider">3</div>
                <div className="page_slider">4</div>
                <div className="page_slider">5</div>
            </div>
        </div>
    )
}