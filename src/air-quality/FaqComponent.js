import React, {useEffect, useState, useRef} from 'react';
import {FiPlus} from "react-icons/fi";

function FaqComponent() {
    const [active, setActive] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = active
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, active]);

    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <>
            <div className="divFaq">
                <h2 className="faq">FAQ</h2>
            </div>
            <div>
                <div className="faqComponent">
                    <div>
                        <button
                            className={`question-section ${active}`}
                            onClick={toggleAccordion}
                        >
                            <div>
                                <div className="questionDiv">
                                    <p className="question">
                                        How the air quality index is calculated?
                                    </p>
                                    <FiPlus
                                        className={active ? `question-icon rotate` : `question-icon`}
                                    />
                                </div>
                                <div
                                    ref={contentRef}
                                    className={active ? `answer answer-divider` : `answer`}
                                >
                                    <p className="answerStyle">Air pollution indicators are average values that have been calculated from data for each hour of the day.</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FaqComponent;