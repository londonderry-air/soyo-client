import { NextApiRequest, NextApiResponse } from "next";

export const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const query = req.query
    const slug = query.slug as string
    const origin = process.env.SOYO_ORIGIN
    const cmsRes = await fetch(`${origin}/api/post/${slug}`, {
        method: 'GET'
    })
    
    if (cmsRes.status !== 200) {
        return res.status(404).json({})
    }

    const post = await cmsRes.json()
    return res.status(200).json(post)
}

export default handler