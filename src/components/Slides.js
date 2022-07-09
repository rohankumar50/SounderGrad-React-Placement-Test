import React from 'react'
import { useState } from 'react';

const Slides = (props) => {

    const [currentData, setCurrentData] = useState(0);
    const dataLength = props.slides.length - 1;

    const nextData = () => {
        currentData < dataLength ? setCurrentData(currentData + 1) : setCurrentData(currentData)
    }

    const prevData = () => {
        currentData > 0 ? setCurrentData(currentData - 1) : setCurrentData(currentData)
    }

    const reset = () => {
        setCurrentData(0)
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                    data-testid="button-restart"
                    className={currentData === 0 ? "small outlined" : "small"}
                    onClick={reset}
                    disabled={currentData === 0}
                >Restart</button>


                <button
                    data-testid="button-prev"
                    className={currentData === 0 ? "small outlined" : "small"}
                    onClick={prevData}
                    disabled={currentData === 0}
                >Prev</button>


                <button
                    data-testid="button-next"
                    className={currentData === dataLength ? "small outlined" : "small"}
                    onClick={nextData}
                    disabled={currentData === dataLength}
                >Next</button>


            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{props.slides[currentData].title}</h1>
                <p data-testid="text">{props.slides[currentData].text}</p>
            </div>
        </div>
    )
}

export default Slides