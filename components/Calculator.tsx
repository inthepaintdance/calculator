import { getBtnStyle, getButtonLayout } from '../utils'
import { BackspaceIcon } from '@heroicons/react/20/solid'

const Calculator = () => {

    const buttonLayout = getButtonLayout()

    return (
        <>
            <div className='bg-gradient-to-b from-gradient-top to-gradient-bottom'>
                <div className='grid grid-cols-4 grid-rows-5 text-center'>
                    {
                        buttonLayout.map((btn, i) => {
                            const btnStyle = getBtnStyle(btn.type)
                            return (
                                <div key={i} className={`p-4 text-lg font-semibold cursor-pointer hover:bg-slate-600 ${btnStyle}`}>
                                    {btn.type === 'backspace' ? <BackspaceIcon className='w-8' /> : btn.text}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Calculator