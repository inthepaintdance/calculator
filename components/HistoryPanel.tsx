import React from 'react'

type HistoryItem = {
    equation: string,
    result: string
}

type HistoryList = Array<HistoryItem>

const HistoryPanel: React.FC<{ historyList: HistoryList }> = ({ historyList }) => {
    return (

        <div className='w-full h-full bg-teal-800 bg-opacity-25 absolute top-0 left-0 rounded-3xl'>
            <div className='text-center my-8 text-dark-teal'>
                <p className='font-semibold'>History</p>
                <div className='p-3 text-right border-b-2 border-dark-teal'>
                    <div className='py-2 text-gray-200 text-xs'>{historyList[0]?.equation}</div>
                    <div className=' text-dark-teal text-2xl font-semibold'>{historyList[0].result}</div>
                </div>
            </div>
        </div>
    )
}

export default HistoryPanel
