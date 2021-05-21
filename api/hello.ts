import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async (request: VercelRequest, response: VercelResponse) => {
  const { username = 'Turkyden' } = request.query;
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    response.status(200).send(res);
  } catch (error) {
    response.status(200).send(error.message);
  }
};
