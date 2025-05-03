import React, { useState } from 'react'
import data from '../data.json';
import Accordion from './Accordion';

function FAQ() {

    return (
        <div className='faq'>
            <h1>FAQ's</h1>
            <div className="faq-list">
                {
                    data.faqs.map((obj, index) => (
                        <Accordion qna={obj} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default FAQ
