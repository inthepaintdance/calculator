import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const HistoryPanel = () => {
    const getHistory = async () => {
        const res = await axios.get('/api/equation/history')
        return res
    }

    // Queries
    const { data, isLoading } = useQuery({ queryKey: ['history'], queryFn: getHistory })

    const loadingText = <div className='text-center text-teal-300 font-semibold mt-5'>Loading ...</div>

    return (
        <div className='w-full h-full bg-teal-800 bg-opacity-25 absolute top-0 left-0 rounded-3xl overflow-y-auto z-10 no-scrollbar'>
            <div className='text-center my-8 text-dark-teal'>
                <p className='font-semibold'>History</p>
                { isLoading ? loadingText :
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
