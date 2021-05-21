import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export const generateSVG = (src) => {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="64" height="64">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0">
      <a href="https://github.com/Turkyden" target="_blank">
        <circle r="32" cx="32" cy="32" stroke-width="1" stroke="#c0c0c0" fill="url(#SvgjsPattern4297)">
          <title>Turkyden</title>
        </circle>
      </a>
    </svg>
    <defs>
      <pattern x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse" id="SvgjsPattern4297">
        <image width="64" height="64" href="${src}"/>
      </pattern>
    </defs>
  </svg>
  `;
};

export default async (request: VercelRequest, response: VercelResponse) => {
  const { username = 'Turkyden' } = request.query;
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`, {
      auth: {
        username: 'dcb39fc858755f895513',
        password: '803b0587d11fa32bc2aa553e4827ecb55c9c58fe',
      },
    });

    if (res.status === 200) {
      response.status(200).json(res.data);
      const { avatar_url, login, name, location, blog, email } = res.data;
      // const svg = generateSVG(res.data.avatar_url);
      // response.status(200).send(svg);
    }
  } catch (error) {
    response.status(200).send(error.message);
  }
};
