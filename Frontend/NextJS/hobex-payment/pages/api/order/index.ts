import { NextApiRequest, NextApiResponse } from 'next'
const MONGODB_URI = 'mongodb://localhost:27017'
const DB_NAME = 'sample_posts'
const DEV_URL = 'http://localhost:3000'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'POST') {
  }
}
