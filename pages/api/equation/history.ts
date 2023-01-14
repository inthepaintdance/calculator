import { Equation } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Equation[] | {error: string}>
) {

    if (req.method !== 'GET') {
        return
    }

    try {
        const equations = await prisma.equation.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            take: 10
        })
        res.status(200).json(equations)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Unable to fetch equations' })
    }

}
