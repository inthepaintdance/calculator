import React from 'react'

const Display: React.FC<{ isMenuOpen:boolean, equation: string, result: string | number }> = ({ isMenuOpen, equation, result }) => {
    return (

        <div className={`flex flex-col mt-14 px-3 py-6  border-b-2 border-dark-teal space-y-6 text-end font-sans ${isMenuOpen ? 'blur-md' : ''}`}>
            <div className='text-gray-200 text-xs h-2'>{equation}</div>
            <div className={`text-dark-teal h-10 font-semibold ${typeof(result) === 'number' ? 'text-5xl' : 'text-2xl'}`}>{result}</div>
        </div>
    )
}

export default Display
