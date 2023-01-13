export type ButtonType = 'operator' | 'main-operator' | 'backspace' | 'number' | 'equal'

export type Button = {
    text: string | number,
    type: ButtonType
}

export type ButtonLayout = Array<Button>
export const divideEntity = String.fromCharCode(247);
export const multiplyEntity = String.fromCharCode(215);

export const getButtonLayout = () => {

    const buttonLayout: ButtonLayout = [
        { text: 'AC', type: 'operator' },
        { text: '', type: 'backspace' },
        { text: '+/-', type: 'operator' },
        { text: divideEntity, type: 'main-operator' },
        { text: 7, type: 'number' },
        { text: 8, type: 'number' },
        { text: 9, type: 'number' },
        { text: multiplyEntity, type: 'main-operator' },
        { text: 4, type: 'number' },
        { text: 5, type: 'number' },
        { text: 6, type: 'number' },
        { text: '-', type: 'main-operator' },
        { text: 1, type: 'number' },
        { text: 2, type: 'number' },
        { text: 3, type: 'number' },
        { text: '+', type: 'main-operator' },
        { text: '%', type: 'operator' },
        { text: 0, type: 'number' },
        { text: '.', type: 'number' },
        { text: '=', type: 'equal' },
    ]

    return buttonLayout
}

export const getBtnStyle = (type: ButtonType) => {
    let style: string = ''

    switch (type) {
        case 'backspace':
            style = 'text-teal-500'
            break;
        case 'equal':
            style = 'bg-teal-500 text-gray-200 rounded-br-lg'
            break;
        case 'number':
            style = 'text-gray-200'
            break
        case 'operator':
            style = 'text-teal-500'
            break;
        case 'main-operator':
            style = 'text-teal-500 bg-teal-500 bg-opacity-25 hover:bg-opacity-40'
            break

        default:
            style = 'text-gray-200'
            break
    }

    return style
} 