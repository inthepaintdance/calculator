import { Button, ButtonType, divideEntity, getButtonLayout, multiplyEntity } from '../utils'
import { BackspaceIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import HistoryPanel from './HistoryPanel'
import Display from './Display'

const Calculator = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [equation, setEquation] = useState('')
    const [result, setResult] = useState(0)

    const toggleMenuHandler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const calculate = (a: string, op: string, b: string): number => {
        let res = 0
        const num1 = Number(a)
        const num2 = Number(b)
        switch (op) {
            case '+':
                res = num1 + num2
                break;
            case '-':
                res = num1 - num2
                break;
            case multiplyEntity:
                res = num1 * num2
                break;
            case divideEntity:
                res = num1 / num2
                break;
        }
        return res
    }

    const btnClickHandler = (btn: Button) => {
        if (btn.type === 'equal') {
            const tokens = equation.split(' ')
            const a = tokens[0]
            const op = tokens[1]
            const b = tokens[2]
            const res = calculate(a, op, b)
            setResult(res)
        } else if (btn.type === 'number') {
            setEquation(prev => prev.concat(btn.text.toString()))
        } else if (btn.type === 'main-operator') {
            setEquation(prev => prev.concat(` ${btn.text.toString()} `))
        } else if (btn.text === 'AC') {
            setEquation('')
            setResult(0)
        }
    }

    const buttonLayout = getButtonLayout()
    const getBtnStyle = (type: ButtonType) => {
        let style: string = ''

        switch (type) {
            case 'backspace':
                style = 'text-teal-500'
                break;
            case 'equal':
                style = 'bg-teal-500 text-gray-300 rounded-br-lg'
                break;
            case 'number':
                style = 'text-gray-300 hover:bg-opacity-80'
                break
            case 'operator':
                style = 'text-teal-500'
                break;
            case 'main-operator':
                style = 'text-teal-500 bg-teal-500 bg-opacity-20 hover:bg-opacity-40'
                break

            default:
                style = 'text-gray-300'
                break
        }

        return style
    }

    return (
        <>
            <div className='relative bg-gradient-to-b from-gradient-top to-gradient-bottom rounded-3xl'>
                {/*---- History Menu ----*/}
                <div className='absolute flex w-12 h-12 bg-teal-500 rounded-tl-3xl rounded-br-xl cursor-pointer'
                    onClick={toggleMenuHandler}>
                    <button
                        id='menu-btn'
                        type='button'
                        className={`z-[60] block hamburger outline-none ${isMenuOpen ? 'open' : ''}`}

                    >
                        <span className='hamburger-top'></span>
                        <span className='hamburger-middle'></span>
                        <span className='hamburger-bottom'></span>
                    </button>
                </div>

                {/*---- History Panel----*/}
                {isMenuOpen &&
                    <HistoryPanel historyList={[{ equation: 'equation', result: 'result' }]} />
                }

                {/*---- Calculator Display----*/}
                <Display isMenuOpen={isMenuOpen} equation={equation} result={result} />

                {/*---- Calculator Buttons ----*/}
                <div className={`grid grid-cols-4 grid-rows-5 text-center rounded-br-lg ${isMenuOpen ? 'blur' : ''}`}>
                    {
                        buttonLayout.map((btn, i) => {
                            const btnStyle = getBtnStyle(btn.type)
                            return (
                                <div
                                    key={i}
                                    className={`px-[14px] py-3 text-lg font-semibold cursor-pointer hover:shadow-slate-700 hover:shadow-md hover:scale-95 duration-200 ${btnStyle}`}
                                    onClick={() => btnClickHandler(btn)}
                                >
                                    {btn.type === 'backspace' ? <BackspaceIcon className='w-6 mt-1' /> : btn.text}
                                </div>
                            )
                        })
                    }
                </div>
                {/*---- Calculator Bottom ----*/}
                <div className='flex mt-4 mb-1 mx-auto h-[3px] w-1/3 bg-gray-200 rounded-md'></div>
            </div>
        </>
    )
}

export default Calculator