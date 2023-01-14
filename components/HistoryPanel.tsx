import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

type HistoryItem = {
    equation: string,
    result: string
}

type HistoryList = Array<HistoryItem>

const HistoryPanel: React.FC<{ historyList: HistoryList }> = ({ historyList }) => {
    // Access the client
    const queryClient = useQueryClient()

    const getHistory = async () => {
        const res = await axios.get('/api/equation/history')
        return res
    }

    // Queries
    const { data } = useQuery({ queryKey: ['history'], queryFn: getHistory })

    return (
        <div className='w-full h-full bg-teal-800 bg-opacity-25 absolute top-0 left-0 rounded-3xl overflow-y-auto z-10 no-scrollbar'>
            <div className='text-center my-8 text-dark-teal'>
                <p className='font-semibold'>History</p>
                {
                    data?.data.map(item => (
                        <div key={item.id} className='p-3 text-right border-b-2 border-dark-teal'>
                            <div className='py-2 text-gray-200 text-xs'>{item.equation}</div>
                            <div className=' text-dark-teal text-2xl font-semibold'>{item.result}</div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default HistoryPanel
