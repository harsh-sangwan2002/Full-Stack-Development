import React, { useState } from 'react'

function Accordion({ qna }) {

    const [showData, setShowData] = useState(false);
    console.log(qna);

    return (
        <div className="faq-item">
            <h3 className='question'>{qna.question} <span className='btn' onClick={() => setShowData(!showData)}>+</span></h3>
            {
                showData && <p className='answer'>{qna.answer}</p>
            }
        </div>
    )
}

export default Accordion
