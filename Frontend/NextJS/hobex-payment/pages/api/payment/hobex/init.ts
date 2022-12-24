import type { NextApiRequest, NextApiResponse } from 'next'
import qs from 'querystring'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'POST') {
    const url = `https://eu-test.oppwa.com/v1/checkouts`
    const body = qs.stringify({
      entityId: '8a829418530df1d201531299e097175c',
      amount: '92.00',
      currency: 'EUR',
      paymentType: 'DB',
    })
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer OGE4Mjk0MTg1MzBkZjFkMjAxNTMxMjk5ZTJjMTE3YWF8ZzJnU3BnS2hLUw==',
    }
    const checkoutRes = await fetch(url, {
      method: 'POST',
      headers,
      body,
    })

    const checkout = await checkoutRes.json()

    console.log({ body, checkout })
    res.status(200).json({ checkout })
  }
}
