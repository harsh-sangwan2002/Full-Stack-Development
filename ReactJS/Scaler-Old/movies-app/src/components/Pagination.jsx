import React, { useState } from 'react'

function Pagination({ pageNo, handlePrev, handleNext }) {

    return (
        <div className='flex justify-center gap-4 text-3xl h-[4rem] w-screen bg-slate-400 items-center'>
            <div className='cursor-pointer' onClick={handlePrev}>⬅️</div>
            <div>{pageNo}</div>
            <div className='cursor-pointer' onClick={handleNext}>➡️</div>
        </div>
    )
}

export default Pagination
