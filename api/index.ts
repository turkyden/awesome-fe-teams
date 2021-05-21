import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async (request: VercelRequest, response: VercelResponse) => {
  const { username = 'Turkyden' } = request.query;
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    if (res.status === 200) {
      response.status(200).json(res.data);
    }
  } catch (error) {
    response.status(200).send(error.message);
  }
};
