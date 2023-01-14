import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

type Data = {
    message?: string,
    error?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    if (req.method !== 'POST') {
        return
    }

    const { equation, result } = req.body

    try {
        await prisma.equation.create({
            data: {
                equation,
                result
            }
        })
        res.status(201).json({ message: 'Equation created successfully' })
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Unable to create equation' })
    }

}
