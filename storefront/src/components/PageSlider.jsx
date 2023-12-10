import { useEffect, useRef, useState } from "react"

export default function PageSlider(){

    const [counter, setCounter] = useState(0);
    const [slidersCount, setSlidersCount] = useState([]);
    const [slidersList, setSlidersList] = useState([]);
    const sliderRef = useRef(null);
    const sliderListRef = useRef(null);
    const previousButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const listArray = [];

    const sliders = () => {
        setSlidersCount(sliderRef.current.childNodes);
    }

    const newArray = () => {
        Array.prototype.forEach.call(slidersCount, (node,index) => {
            listArray.push(index);
        })
        setSlidersList(listArray);
    }

    const animateSliderList = (index) => {
        for(let i = 0; i < sliderListRef.current.childNodes.length; i++){
            sliderListRef.current.childNodes[i].className = '';
        }
        sliderListRef.current.childNodes[index].className = 'current_list_indicator';
    }

    const decrementCounter = () => {
        const isFirstSlide = counter === 0;
        const newCounter = isFirstSlide ? slidersCount.length  - 1 : counter - 1;
        setCounter(newCounter);
        animateSliders(newCounter);
        animateSliderList(newCounter);
    }

    const incrementCounter = () => {
        const isLastSlide = counter === slidersCount.length - 1;
        const newCounter = isLastSlide ? 0 : counter + 1;
        setCounter(newCounter);
        animateSliders(newCounter);
        animateSliderList(newCounter);
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
        newArray();
        renderSliderLayout();
    }, [counter, slidersCount]);

    return(
        <div className="page_slider_container">
            <div className="page_slider_controls">
                <button onClick={decrementCounter} ref={previousButtonRef}>
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 6L9 12L15 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button onClick={incrementCounter} ref={nextButtonRef}>
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
            </div>
            <div ref={sliderRef} className="page_slider_wrapper">
                <div className="page_slider">1</div>
                <div className="page_slider">2</div>
                <div className="page_slider">3</div>
                <div className="page_slider">4</div>
                <div className="page_slider">5</div>
            </div>
            {slidersList.length > 0 &&
                <div className="page_slider_list" ref={sliderListRef}>
                    {slidersList.map(list => (
                        <span key={list} className={list === 0 ? 'current_list_indicator' : ''}></span>
                    ))}
                </div>
            }
        </div>
    )
}