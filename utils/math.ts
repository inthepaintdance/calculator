import { divideEntity, multiplyEntity } from "."

export const calculate = (a: string, op: string, b: string): number => {
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