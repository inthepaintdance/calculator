export type ButtonType = 'operand' | 'backspace' | 'number' | 'equal'

export type Button = {
    text: string | number,
    type: ButtonType
}

export type ButtonLayout = Array<Button>

export const getButtonLayout = () => {
    const divideEntity = String.fromCharCode(247);
    const multiplyEntity = String.fromCharCode(215);

    const buttonLayout: ButtonLayout = [
        { text: 'C', type: 'operand' },
        { text: '', type: 'backspace' },
        { text: '+/-', type: 'operand' },
        { text: divideEntity, type: 'operand' },
        { text: 7, type: 'number' },
        { text: 8, type: 'number' },
        { text: 9, type: 'number' },
        { text: multiplyEntity, type: 'operand' },
        { text: 4, type: 'number' },
        { text: 5, type: 'number' },
        { text: 6, type: 'number' },
        { text: '-', type: 'operand' },
        { text: 1, type: 'number' },
        { text: 2, type: 'number' },
        { text: 3, type: 'number' },
        { text: '+', type: 'operand' },
        { text: '%', type: 'operand' },
        { text: 0, type: 'number' },
        { text: '.', type: 'number' },
        { text: '=', type: 'equal' },
    ]

    return buttonLayout
}

export const getBtnStyle = (type : ButtonType) => {
    let style: string = ''

    switch (type) {
        case 'backspace':
            style = 'text-teal-500'
            break;
        case 'equal':
            style = 'bg-teal-500 text-gray-300'
            break;
        case 'number':
            style = 'text-gray-300'
            break
        case 'operand':
            style = 'text-teal-500'
            break
    
        default:
            style = 'text-gray-300'
            break
    }

    return style
} 