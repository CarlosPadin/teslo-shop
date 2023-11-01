import type { NextApiRequest, NextApiResponse } from 'next';

import { db } from '@/database';
import { IProducts } from '@/interfaces';
import { Product } from '@/models';

type Data = 
| {message: string}
| IProducts[]

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case "GET":
            return searchProduct( req, res);
    
        default:
            return res.status(400).json({ message: 'Bad request'});
    }

}

const searchProduct = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    let { q = ''} = req.query;

    if (q.length === 0) {
        return res.status(400).json({message: 'Debe especificar el query de busqueda'});
    }
    
    q.toString().toLowerCase();


    await db.connect();
    const products = await Product.find({
        $text: { $search: q }
    }).select('title inStock price slug images -_id').lean()


    await db.disconnect();

    return res.status(200).json(products);
}
